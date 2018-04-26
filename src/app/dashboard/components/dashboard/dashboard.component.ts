import { Component, OnInit } from '@angular/core';
import {DashboardCommunicationService} from "../../services/dashboard-communication.service";

@Component({
  selector: 'wed-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DashboardCommunicationService]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
