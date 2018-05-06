import {ModuleWithProviders, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {AuthService, SecurityTokenStore} from './services';
import {AuthResourceService, TokenInterceptor} from './resources';

import {LoginComponent, LogoutComponent, RegisterComponent} from './components';
import {SharedModule} from '../shared/shared.module';
import {AuthGuard} from './services/auth.guard';


const EXPORTED_DECLARATIONS = [
  LoginComponent, LogoutComponent, RegisterComponent
];
const INTERNAL_DECLARATIONS = [
  ...EXPORTED_DECLARATIONS
];
const EXPORTS = [
  ...EXPORTED_DECLARATIONS
];

@NgModule({
  declarations: INTERNAL_DECLARATIONS,
  imports: [
    SharedModule
  ],
  exports: EXPORTS,
  providers: [AuthResourceService]
})
export class AuthModule {
  static forRoot(config?: {}): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        // DI Providers (Services, Tokens, Factories...) to be used globally and instantiate only once
        AuthGuard,
        AuthService,
        SecurityTokenStore,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true
        }]
    };
  }
}
