import { ReportModalComponent } from '../modals/reportmodal/reportmodal.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Weatherreport } from './../../models/weatherreport';
import { WeatherreportService } from '../../weatherreport.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weatherreport',
  templateUrl: './weatherreport.component.html',
  styleUrls: ['./weatherreport.component.css']
})
export class WeatherreportComponent implements OnInit {
  public weatherReport: Weatherreport;
  public icao: string;

  constructor(private weatherReportService: WeatherreportService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  public getWeatherReport() {
    this.weatherReportService.getWeatherReport(this.icao)
      .subscribe((data: Weatherreport) => this.weatherReport = { ...data }, (err) => console.error(err), () => this.open());
  }

  open() {
    const modalRef = this.modalService.open(ReportModalComponent);
    modalRef.componentInstance.weatherReport = this.weatherReport;
    modalRef.componentInstance.icao = this.icao;
  }

}
