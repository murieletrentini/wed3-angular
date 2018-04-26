import {Component, OnInit} from '@angular/core';
import {DashboardResourceService} from '../../resources/dashboard-resource.service';
import {Transaction} from '../../models';
import {MatTableDataSource} from '@angular/material';
import {DashboardCommunicationService} from '../../services/dashboard-communication.service';

@Component({
  selector: 'wed-latest-transactions',
  templateUrl: './latest-transactions.component.html',
  styleUrls: ['./latest-transactions.component.scss']
})
export class LatestTransactionsComponent implements OnInit {

  displayedColumns = ['from', 'to', 'amount', 'balance'];
  dataSource: MatTableDataSource<Transaction>;

  constructor(private resourceService: DashboardResourceService, private dashboardCommunicationService: DashboardCommunicationService) {
  }

  ngOnInit() {
    this.refresh();
    this.dashboardCommunicationService.paymentAlert$.subscribe(() => {
      this.refresh();
    });
  }

  refresh() {
    this.resourceService.getTransactions().subscribe(
      (data: Array<Transaction>) => {
        this.dataSource = new MatTableDataSource<Transaction>(data);
      });
  }

}
