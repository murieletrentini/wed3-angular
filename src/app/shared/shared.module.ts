import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
  MatTableModule, MatToolbarModule, MatButtonModule, MatCardModule, MatSelectModule,
  MatFormFieldModule, MatInputModule
} from '@angular/material';
import {CommonModule} from '@angular/common';


const EXPORTED_DECLARATIONS = [
  // TODO: Add declarations here, if additional components/directives/... should be exported

];
const INTERNAL_DECLARATIONS = [
  ...EXPORTED_DECLARATIONS
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
  CommonModule
  // TODO: Add exports here, if additional modules should be exported
];

@NgModule({
  declarations: INTERNAL_DECLARATIONS,
  imports: [
    FormsModule
  ],
  exports: EXPORTS,
  providers: []
})
export class SharedModule {
  // forRoot() isn't needed here...
}
