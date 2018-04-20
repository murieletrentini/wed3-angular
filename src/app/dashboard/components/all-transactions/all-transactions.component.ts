import {Component, OnInit} from '@angular/core';
import {Transaction} from "../../models";
import {DashboardResourceService} from "../../resources/dashboard-resource.service";
import {MatTableDataSource} from "@angular/material";

@Component({
  selector: 'wed-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.scss']
})
export class AllTransactionsComponent implements OnInit {

  displayedColumns = ['date', 'from', 'to', 'amount', 'balance'];
  dataSource: MatTableDataSource<Transaction>;
  selectedYear = new Date().getFullYear().toString();
  selectedMonth = new Date().getMonth().toLocaleString();

  monthOptions = [
    {key: 0, value: 0, text: 'January'}, {key: 1, value: 1, text: 'February'},
    {key: 2, value: 2, text: 'March'}, {key: 3, value: 3, text: 'April'},
    {key: 4, value: 4, text: 'May'}, {key: 5, value: 5, text: 'June'},
    {key: 6, value: 6, text: 'July'}, {key: 7, value: 7, text: 'August'},
    {key: 8, value: 8, text: 'September'}, {key: 9, value: 9, text: 'October'},
    {key: 10, value: 10, text: 'November'}, {key: 11, value: 11, text: 'December'}];

  yearOptions = [
    {key: 2016, value: 2016, text: '2016'},
    {key: 2017, value: 2017, text: '2017'},
    {key: 2018, value: 2018, text: '2018'}];


  constructor(private resourceService: DashboardResourceService) {
  }

  ngOnInit() {
    this.applyFilter()
  }

  applyFilter() {
    let year = parseInt(this.selectedYear);
    let month = parseInt(this.selectedMonth);
    let from = new Date(Date.UTC(year, month));
    let to = new Date(Date.UTC(year, month + 1, 0));
    this.resourceService.getTransactions(from.toDateString(), to.toDateString(), 1000, 0).subscribe(
      (data: Array<Transaction>) => {
        this.dataSource = new MatTableDataSource<Transaction>(data);
      });
  }

}
