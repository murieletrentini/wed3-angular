import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth/services/auth.guard';
import {RegisterComponent} from './auth/components';

const appRoutes: Routes = [
  // TODO: Add routing of lazy loaded dashboard Module (with guards) here...

  // TODO: Add routing of eagerly loaded modules here...

  {path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule', canLoad: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: '/welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
