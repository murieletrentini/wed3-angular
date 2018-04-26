import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatToolbarModule,
} from '@angular/material';
import {CommonModule} from '@angular/common';
import {EqualValidator} from './directives/equal-validator.directive';
import {ErrorMessageComponent} from './error-message/error-message.component';

const EXPORTED_DECLARATIONS = [
  // TODO: Add declarations here, if additional components/directives/... should be exported
  EqualValidator,
  ErrorMessageComponent
];
const INTERNAL_DECLARATIONS = [
  ...EXPORTED_DECLARATIONS,
  // Declarations (Components / Directives) which can be used inside the Module
];
const EXPORTS = [
  ...EXPORTED_DECLARATIONS,
  MatTableModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  FormsModule,
  ReactiveFormsModule,
  CommonModule,
  // TODO: Add exports here, if additional modules should be exported
];

@NgModule({
  declarations: INTERNAL_DECLARATIONS,
  imports: [],
  exports: EXPORTS,
  providers: []
})
export class SharedModule {
  // forRoot() isn't needed here...
}
