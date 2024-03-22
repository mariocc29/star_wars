import { TestBed } from '@angular/core/testing';

import { PilotService } from 'src/app/services/pilot.service';

describe('PilotService', () => {
  let service: PilotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PilotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
