import { TestBed } from '@angular/core/testing';

import { EnvironmentService } from 'src/app/services/environment.service';
import { environment as testEnvironment } from 'src/environments/environment';

describe('EnvironmentService', () => {
  let service: EnvironmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvironmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the correct swApiUrl from environment', () => {
    expect(service.swApiUrl).toEqual(testEnvironment.swApiUrl);
  });
});
