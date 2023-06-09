import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './components/one/one.component';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: '', redirectTo: 'one', pathMatch: 'full'},
  { path: 'one', component: OneComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}


