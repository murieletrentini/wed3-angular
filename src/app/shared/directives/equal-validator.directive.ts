import {Directive, forwardRef, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[validateEqual][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EqualValidator), multi: true
  }]
})
export class EqualValidator implements Validator {

  @Input()
  public equal: string;

  // template form validation
  validate(control: AbstractControl): ValidationErrors {
    if (control.value !== this.equal) {
      return {hasError: true};
    }
    return null;
  }
}



