import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AllTransactionsComponent} from './components/all-transactions/all-transactions.component';

const appRoutes: Routes = [
  {path: '', component: DashboardComponent}, // TODO: Add initial router outlet dashboard component...
  {path: 'transactions', component: AllTransactionsComponent}, //TODO: add alltransactions component
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes) // !forChild() important
  ],
  exports: [
    RouterModule
  ]
})
export class DashbaordRoutingModule {
}
