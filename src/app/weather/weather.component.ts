import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  location: string = '';
  weather: any;

  constructor(private http: HttpClient) { }

  getWeather(): void {
    const API_KEY = 'b714f48af16c0e0ece123354842afce9';
    const URL = `<Insert API Key from openweather.org>${this.location}&appid=${API_KEY}`;
    this.http.get(URL).subscribe((response) => {
      this.weather = response;
    });
  }

  getTimeFromUnix(unixTimestamp: number): string {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleTimeString();
  }

  getWindDirection(degrees: number): string {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round((degrees % 360) / 45);
    return directions[index];
  }

}
