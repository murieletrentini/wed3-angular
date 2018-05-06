import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {RouterModule} from "@angular/router";
import {AuthModule} from "./auth/auth.module";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
//import { NO_ERRORS_SCHEMA  } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, CoreModule.forRoot(), RouterModule, AuthModule.forRoot(), HttpClientTestingModule, RouterTestingModule],
      declarations: [
        AppComponent
      ]
      //schemas: [ NO_ERRORS_SCHEMA  ],
    }).compileComponents();
  }));

  // Add e2e tests here... Examples:
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
