import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reportmodal',
  templateUrl: './reportmodal.component.html',
  styleUrls: ['./reportmodal.component.css']
})
export class ReportModalComponent implements OnInit {
  @Input() public weatherReport;
  @Input() public icao;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    console.log(this.weatherReport);
  }

}
