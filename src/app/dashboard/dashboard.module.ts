import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import {DashbaordRoutingModule} from './dashboard-routing.module';
import {AllTransactionsComponent} from './components/all-transactions/all-transactions.component';
import {LatestTransactionsComponent} from './components/latest-transactions/latest-transactions.component';
import {NewPaymentComponent} from './components/new-payment/new-payment.component';
import {AuthModule} from '../auth/auth.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {DashboardResourceService} from './resources/dashboard-resource.service';

const EXPORTED_DECLARATIONS = [
  // Declarations (Components / Directives) which can be used outside the Module

];
const INTERNAL_DECLARATIONS = [
  ...EXPORTED_DECLARATIONS,
  // Declarations (Components / Directives) which can be used inside the Module
  DashboardComponent,
  AllTransactionsComponent,
  LatestTransactionsComponent,
  NewPaymentComponent
];
const EXPORTS = [
  ...EXPORTED_DECLARATIONS
  // Components/Directives (or even Modules) to export (available for other modules; and forRoot() )
];

@NgModule({
  declarations: INTERNAL_DECLARATIONS,
  imports: [
    // Other Modules to import (imports the exported Components/Directives from the other module)
    SharedModule,
    DashbaordRoutingModule,
    AuthModule
  ],
  exports: EXPORTS,
  providers: [
    DashboardResourceService,
    // DI Providers (hierarchical)
    // (Services, Tokens, Factories, ...) used from/within this Module; add either here or in forRoot();
    //  * Registers these Classes for the current Module; importing Modules will create new instances (for importing level and below)
  ]
})
export class DashboardModule {
}
