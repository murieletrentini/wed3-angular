import {ActivatedRoute, Params} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {NavigationService} from '../../core';

import {AuthService} from '../services';
import {LoginInfo} from '../models';

@Component({
  selector: 'wed-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  private backUrl;
  public loginForm: FormGroup;
  public isProcessing: boolean = false;
  public hasError: boolean = false;
  public errorMsg = {
    header: 'Invalid credentials',
    message: 'Please try again.'
  };


  constructor(fb: FormBuilder, private autSvc: AuthService, private navigationSvc: NavigationService, route: ActivatedRoute) {
    route.params.subscribe((p: Params) => this.backUrl = p['backUrl']);

    this.loginForm = fb.group({
      login: new FormControl('', [
        Validators.required,
        Validators.minLength(3)]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
    });
  }

  ngOnInit() {
    this.backUrl = '';
    this.autSvc.authenticatedUserChange.subscribe(
      (credentials) => {
        this.isProcessing = false;
        if (credentials) {
          if (this.backUrl) {
            this.navigationSvc.goToUrl(this.backUrl);
          } else {
            this.navigationSvc.goToDashboard();
          }
        } else {
          this.hasError = true;
        }
      });
  }

  public doLogin(): void {
    if (this.loginForm.valid) {
      this.hasError = false;
      this.isProcessing = true;
      this.autSvc.login(new LoginInfo(
        this.loginForm.get('login').value,
        this.loginForm.get('password').value,
      ));
    }
  }
}
