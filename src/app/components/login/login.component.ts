import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginError = false;
  loggedIn = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    this.http.get('assets/users.json').subscribe(
      (data: any) => {
        const user = data.find(
          (u: { username: any; password: any }) =>
            u.username === username && u.password === password
        );
        if (user) {
          this.loggedIn = true;
          this.loginError = false;
        } else {
          this.loginError = true;
          this.loggedIn = false;
        }
      },
      (error) => {
        console.error('Błąd wczytywania danych logowania:', error);
      }
    );
  }
}
