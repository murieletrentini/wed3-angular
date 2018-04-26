import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {NavigationService} from '../../core';

import {AuthService} from '../services';
import {RegistrationInfo} from '../models';
import {PasswordValidator} from '../../dashboard/validator/password-validator';

@Component({
  selector: 'wed-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registrationForm: FormGroup;
  public isProcessing: boolean = false;

  constructor(fb: FormBuilder, private autSvc: AuthService, private navigationSvc: NavigationService) {

    this.registrationForm = fb.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      login: new FormControl('', [
        Validators.required,
        Validators.minLength(3)]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      passwordConfirm: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    }, {
      validator: PasswordValidator.validatePassword
    });
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

  public doRegister(): boolean {
    if (this.registrationForm.valid) {
      this.isProcessing = true;
      this.autSvc.register(new RegistrationInfo(
        this.registrationForm.get('login').value,
        this.registrationForm.get('password').value,
        this.registrationForm.get('firstName').value,
        this.registrationForm.get('lastName').value,
      ));
    }
    return false;
  }
}
