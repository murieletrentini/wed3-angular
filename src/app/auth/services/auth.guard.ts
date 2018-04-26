import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {NavigationService} from '../../core/services';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private authService: AuthService, private navigationService: NavigationService) {
  }

  canLoad(route: Route): boolean {
    if (this.authService.hasCredentials) {
      return true;
    }
    this.navigationService.goToHome();
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.hasCredentials) {
      this.navigationService.goToDashboard();
      return false;
    }
    return true;
  }


}
