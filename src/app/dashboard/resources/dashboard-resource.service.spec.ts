import {inject, TestBed} from '@angular/core/testing';

import {DashboardResourceService} from './dashboard-resource.service';

describe('DashboardResourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardResourceService]
    });
  });

  it('should be created', inject([DashboardResourceService], (service: DashboardResourceService) => {
    expect(service).toBeTruthy();
  }));
});
