import {Component, OnInit} from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';

import {NavigationService} from '../../core';

import {AuthService} from '../services';
import {RegistrationInfo} from '../models';

@Component({
  selector: 'wed-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit {

  public login: string;
  public password: string;
  public passwordConfirmation: string;
  public firstName: string;
  public lastName: string;

  public isProcessing = false;

  protected firstNameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);
  protected lastNameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);
  protected loginFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);
  protected passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);
  protected confirmPasswordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);

  constructor(private autSvc: AuthService, private navigationSvc: NavigationService) {
  }

  ngOnInit() {
    this.autSvc.authenticatedUserChange.subscribe(
      (credentials) => {
        this.isProcessing = false;
        if (credentials) {
          this.navigationSvc.goToDashboard();
        }
      });
  }

  public doRegister(registrationForm: NgForm): boolean {
    if (registrationForm && registrationForm.valid) {
      this.isProcessing = true;
      this.autSvc.register(new RegistrationInfo(
        registrationForm.value.login,
        registrationForm.value.password,
        registrationForm.value.firstname,
        registrationForm.value.lastname));
    }
    return false;
  }
}
