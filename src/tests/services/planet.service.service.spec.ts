import { TestBed } from '@angular/core/testing';
import { PlanetService } from 'src/app/services/planet.service';
import { PilotService } from 'src/app/services/pilot.service';
import { PlanetInterfaceMock } from '../mocks/planet.interface.mock';
import { PilotInterfaceMock } from '../mocks/pilot.interface.mock';

describe('PlanetService', () => {
  let service: PlanetService;
  let pilotService: PilotService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanetService, PilotService]
    });
    service = TestBed.inject(PlanetService);
    pilotService = TestBed.inject(PilotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#updatePilotHomeworld', () => {
    it('should update the homeworld property of pilots based on the provided planets data', () => {
      pilotService.pilots = [PilotInterfaceMock];
      service.updatePilotHomeworld([PlanetInterfaceMock]);

      expect(pilotService.pilots[0].homeworld).toEqual(PlanetInterfaceMock.name);
    });
  });
});
