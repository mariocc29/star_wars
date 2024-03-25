import { TestBed } from '@angular/core/testing';

import { PilotService } from 'src/app/services/pilot.service';
import { PilotInterfaceMock } from '../mocks/pilot.interface.mock';

describe('PilotService', () => {
  let service: PilotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PilotService);
    service.pilots = [PilotInterfaceMock];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set pilots correctly', () => {
    expect(service.pilots.length).toEqual(1);
    expect(service.pilots[0].name).toEqual('Han Solo');
  });

  it('should find pilot by URL', () => {
    const foundPilot = service.findByUrl(PilotInterfaceMock.url);
    expect(foundPilot.name).toEqual('Han Solo');
  });
});
