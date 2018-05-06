import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/services';
import {NavigationService} from '../services';


@Component({
  selector: 'wed-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private authService: AuthService, public navigationService: NavigationService) {
  }

  public get hasCredentials(): boolean {
    return this.authService.hasCredentials;
  }

  ngOnInit() {
  }

}
