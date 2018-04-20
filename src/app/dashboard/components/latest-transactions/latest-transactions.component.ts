import {Component, OnInit} from '@angular/core';
import {DashboardResourceService} from '../../resources/dashboard-resource.service';
import {Transaction} from '../../models';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'wed-latest-transactions',
  templateUrl: './latest-transactions.component.html',
  styleUrls: ['./latest-transactions.component.scss']
})
export class LatestTransactionsComponent implements OnInit {

  displayedColumns = ['from', 'to', 'amount'];
  dataSource: MatTableDataSource<Transaction>;

  constructor(private resourceService: DashboardResourceService) {
  }

  ngOnInit() {
    this.resourceService.getTransactions().subscribe(
      (data: Array<Transaction>) => {
        this.dataSource = new MatTableDataSource<Transaction>(data);
      });
  }

}
