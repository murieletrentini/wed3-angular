import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AllTransactionsComponent} from './components/all-transactions/all-transactions.component';

const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'transactions', component: AllTransactionsComponent},
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
