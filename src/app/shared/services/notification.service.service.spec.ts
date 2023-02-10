import { TestBed } from '@angular/core/testing';

import { Notification.ServiceService } from './notification.service.service';

describe('Notification.ServiceService', () => {
  let service: Notification.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Notification.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
