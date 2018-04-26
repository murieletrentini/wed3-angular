import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class DashboardCommunicationService {

  constructor() { }

  // Observable string sources
  private paymentAlert = new Subject<void>();

  // Observable string streams
  paymentAlert$ = this.paymentAlert.asObservable();

  // Service message commands
  alertPayment() {
    this.paymentAlert.next();
  }

}
