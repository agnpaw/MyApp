import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weather: WeatherData | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const apiKey = '7e797edf8ecb5f5c0041a13edd37990e';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Krakow&appid=${apiKey}`;

    this.http.get<WeatherData>(apiUrl).subscribe((data: WeatherData) => {
      this.weather = data;
    });
  }
}
