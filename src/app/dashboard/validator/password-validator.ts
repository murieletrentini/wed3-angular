import {AbstractControl, ValidationErrors} from '@angular/forms';

export class PasswordValidator {

  // reactive form validation
  static validatePassword(control: AbstractControl): ValidationErrors {
    if (control.get('password').value !== control.get('passwordConfirm').value) {
      control.get('passwordConfirm').setErrors({validatePassword: true});
    } else {
      control.get('passwordConfirm').setErrors(null);
    }
    return null;
  }
}
