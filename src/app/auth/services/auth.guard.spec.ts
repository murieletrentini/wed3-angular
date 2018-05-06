import {inject, TestBed} from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
import {RouterTestingModule} from "@angular/router/testing";
import {AuthModule} from "../auth.module";
import {CoreModule} from "../../core/core.module";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, AuthModule.forRoot(), CoreModule.forRoot()]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
