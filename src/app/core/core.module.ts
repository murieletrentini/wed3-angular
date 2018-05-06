import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import {NavigationService} from './services';
import {MenuComponent} from './components';
import {AuthModule} from '../auth/auth.module';
import {RouterModule} from '@angular/router';

const EXPORTED_DECLARATIONS = [
  MenuComponent
];
const INTERNAL_DECLARATIONS = [
  ...EXPORTED_DECLARATIONS
  // Declarations (Components / Directives) which can be used inside the Module
];
const EXPORTS = [
  ...EXPORTED_DECLARATIONS
];

@NgModule({
  declarations: INTERNAL_DECLARATIONS,
  imports: [SharedModule, AuthModule, RouterModule],
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
