import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WeatherreportserviceService {
  private client: HttpClient;
  private baseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.client = http;
    this.baseUrl = baseUrl;
   }

   getWeatherReport(icao: string){
    this.client.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
   }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
