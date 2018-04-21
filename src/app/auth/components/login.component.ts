import {ActivatedRoute, Params} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

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

  public login: string;
  public password: string;

  public isProcessing = false;

  protected loginFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);
  protected passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);

  constructor(private autSvc: AuthService, private navigationSvc: NavigationService, route: ActivatedRoute) {
    route.params.subscribe(
      (p: Params) => this.backUrl = p['backUrl']);
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
        }
      });
  }

  public doLogin(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      this.isProcessing = true;
      this.autSvc.login(new LoginInfo(this.login, this.password));
    }
  }
}
