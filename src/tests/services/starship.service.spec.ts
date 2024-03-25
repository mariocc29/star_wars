import { TestBed } from '@angular/core/testing';
import { StarshipModel } from 'src/app/models/starship.model';
import { StarshipService } from 'src/app/services/starship.service';
import { StarshipInterfaceMock } from 'src/tests/mocks/starship.interface.mock';
import { StartshipModelMock } from 'src/tests/mocks/starship.model.mock';
import { PilotModelMock } from '../mocks/pilot.model.mock';
import { PilotService } from 'src/app/services/pilot.service';

describe('StarshipService', () => {
  let service: StarshipService;
  let starshipMock: StarshipModel
  let pilotServiceSpy: jasmine.SpyObj<PilotService>;

  beforeEach(() => {
    pilotServiceSpy = jasmine.createSpyObj('PilotService', ['findByUrl']);
    pilotServiceSpy.findByUrl.and.returnValue(PilotModelMock)

    TestBed.configureTestingModule({
      providers: [
        { provide: PilotService, useValue: pilotServiceSpy },
      ]
    });
    service = TestBed.inject(StarshipService);
  });

  beforeEach(() => {
    starshipMock = new StarshipModel(1, StarshipInterfaceMock, pilotServiceSpy)
    service.push([StarshipInterfaceMock]);
  })
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an observable with starships data', (done: DoneFn) => {
    service.get$().subscribe((starships: StarshipModel[]) => {
      expect(starships).toEqual([starshipMock]);
      done();
    });
  });

  it('should update total length correctly', () => {
    const totalLength = 10;
    service.length = totalLength;
    expect(service.length).toEqual(totalLength);
  });
});
