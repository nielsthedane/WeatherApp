import { Weatherreport } from './models/weatherreport';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class WeatherreportService {
  private client: HttpClient;
  private baseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, modalService: NgbModal) {
    this.client = http;
    this.baseUrl = baseUrl;
   }

   getWeatherReport(icao: string){
    return this.client.get<Weatherreport>(this.baseUrl + 'weatherforecast?icao=' + icao);
   }

}

