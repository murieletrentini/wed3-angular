import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import {NavigationService} from './services';
import {MenuComponent} from "./components/menu/menu.component";
import {CommonModule} from "@angular/common";
import {MatToolbarModule} from "@angular/material";
import {AuthModule} from "../auth/auth.module";

const EXPORTED_DECLARATIONS = [
  // TODO: Add declarations here, if additional components/directives/... should be exported
  MenuComponent
];
const INTERNAL_DECLARATIONS = [
  ...EXPORTED_DECLARATIONS
  // Declarations (Components / Directives) which can be used inside the Module
];
const EXPORTS = [
  ...EXPORTED_DECLARATIONS
  // TODO: Add exports here, if additional modules should be exported
];

@NgModule({
  declarations: INTERNAL_DECLARATIONS,
  imports: [SharedModule, AuthModule, CommonModule, MatToolbarModule],
  exports: EXPORTS,
  providers: [/* nothing to add here */]
})
export class CoreModule {
  static forRoot(config?: {}): ModuleWithProviders {

    return {
      ngModule: CoreModule,
      providers: [
        // DI Providers (Services, Tokens, Factories...) to be used globally and instantiated only once
        NavigationService
      ]
    };
  }

  // Only the root AppModule should import the CoreModule. Bad things happen if a lazy loaded module imports it.
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
