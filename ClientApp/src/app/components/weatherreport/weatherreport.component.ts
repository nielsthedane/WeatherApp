import { Weatherreport } from './../../models/weatherreport';
import { WeatherreportService } from '../../weatherreport.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weatherreport',
  templateUrl: './weatherreport.component.html',
  styleUrls: ['./weatherreport.component.css']
})
export class WeatherreportComponent implements OnInit {
  private weatherReportService: WeatherreportService;
  public weatherReport: Weatherreport;
  public icao: string;

  constructor(weatherReportService: WeatherreportService) {
    this.weatherReportService = weatherReportService;
   }

  ngOnInit() {
  }

  public getWeatherReport() {
    console.log('this.icao = ' + this.icao);
    this.weatherReportService.getWeatherReport(this.icao)
    .subscribe((data: Weatherreport) => this.weatherReport = {...data});

    console.log(this.weatherReport);
  }

}
