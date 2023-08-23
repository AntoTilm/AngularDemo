import { TestBed } from '@angular/core/testing';

import { TrackAPIService } from './track-api.service';

describe('TrackAPIService', () => {
  let service: TrackAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
