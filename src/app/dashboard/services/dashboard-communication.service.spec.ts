import {inject, TestBed} from '@angular/core/testing';

import {DashboardCommunicationService} from './dashboard-communication.service';

describe('DashboardCommunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardCommunicationService]
    });
  });

  it('should be created', inject([DashboardCommunicationService], (service: DashboardCommunicationService) => {
    expect(service).toBeTruthy();
  }));
});
