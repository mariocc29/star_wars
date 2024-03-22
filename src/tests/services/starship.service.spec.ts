import { TestBed } from '@angular/core/testing';
import { StarshipModel } from 'src/app/models/starship.model';

import { StarshipService } from 'src/app/services/starship.service';
import { StarshipInterfaceMock } from 'src/tests/mocks/starship.interface.mock';
import { StartshipModelMock } from 'src/tests/mocks/starship.model.mock';

describe('StarshipService', () => {
  let service: StarshipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarshipService);
  });

  beforeEach(() => {
    service.push([StarshipInterfaceMock]);
  })
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an observable with starships data', (done: DoneFn) => {
    service.get$().subscribe((starships: StarshipModel[]) => {
      expect(starships).toEqual([StartshipModelMock]);
      done();
    });
  });

  it('should update total length correctly', () => {
    const totalLength = 10;
    service.length = totalLength;
    expect(service.length).toEqual(totalLength);
  });
});
