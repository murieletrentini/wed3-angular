import {Injectable} from '@angular/core';
import {CanLoad, Route} from '@angular/router';
import {AuthService} from "./auth.service";
import {NavigationService} from "../../core/services";

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private navigationService: NavigationService) {
  }

  canLoad(route: Route): boolean {
    console.log(this.authService.hasCredentials);
    if (this.authService.hasCredentials) {
      return true;
    }
    this.navigationService.goToHome();
    return false;
  }
}
