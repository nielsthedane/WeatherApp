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
  closeResult = '';

  constructor(private weatherReportService: WeatherreportService, private modalService: NgbModal) {}

  ngOnInit() {
  }

  public getWeatherReport() {
    this.weatherReportService.getWeatherReport(this.icao)
    .subscribe((data: Weatherreport) => this.weatherReport = {...data});
    console.log(this.weatherReport);
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
