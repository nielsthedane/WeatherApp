import { ReportModalComponent } from '../modals/reportmodal/reportmodal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Weatherreport } from './../../models/weatherreport';
import { WeatherreportService } from '../../weatherreport.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weatherreport',
  templateUrl: './weatherreport.component.html',
  styleUrls: ['./weatherreport.component.css']
})
export class WeatherreportComponent implements OnInit {
  public weatherReports: Weatherreport[];
  public icao: string;

  constructor(private weatherReportService: WeatherreportService, private modalService: NgbModal) {
    this.weatherReports = [];
  }

  ngOnInit() {
  }

  public getWeatherReport() {
    this.weatherReportService.getWeatherReport(this.icao)
      // tslint:disable-next-line:max-line-length
      .subscribe((data: Weatherreport) => { this.weatherReports.push(data); }, (err) => console.error(err), () => this.open(this.weatherReports[this.weatherReports.length - 1]));
  }

  open(weatherReport: Weatherreport) {
    const modalRef = this.modalService.open(ReportModalComponent);
    modalRef.componentInstance.weatherReport = weatherReport;
    modalRef.componentInstance.icao = this.icao;
  }

}
