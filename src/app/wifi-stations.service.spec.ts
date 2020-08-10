import { TestBed } from '@angular/core/testing';

import { WifiStationsService } from './wifi-stations.service';

describe('WifiStationsService', () => {
  let service: WifiStationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WifiStationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
