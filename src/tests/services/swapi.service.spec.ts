import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { EnvironmentService } from 'src/app/services/environment.service';
import { SwapiService } from 'src/app/services/swapi.service';
import { SwapiPilotMock, SwapiStarshipMock } from 'src/tests/mocks/swapi.interface.mock';

describe('SwapiService', () => {
  let service: SwapiService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let environmentServiceMock: Partial<EnvironmentService>;
  let page: number = 1;

  beforeEach(() => {
    environmentServiceMock = { swApiUrl: 'https://example.com/api' }
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpy.get.withArgs(`${environmentServiceMock.swApiUrl}/starships/?page=1`).and.returnValue(of(SwapiStarshipMock));
    httpClientSpy.get.withArgs(`${environmentServiceMock.swApiUrl}/people/?page=1`).and.returnValue(of(SwapiPilotMock));
    
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        SwapiService,
        { provide: EnvironmentService, useValue: environmentServiceMock },
        { provide: HttpClient, useValue: httpClientSpy },
      ]
    });

    service = TestBed.inject(SwapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#starships', () => {
    it('should fetch starships', () => {
      service.starships(page).subscribe(data => {
        expect(data).toEqual(SwapiStarshipMock);
      });
  
      expect( httpClientSpy.get ).toHaveBeenCalledWith( `${environmentServiceMock.swApiUrl}/starships/?page=${page}` )
    });
  })

  describe('#pilots', () => {
    it('should fetch pilots', () => {
      service.pilots(page).subscribe(data => {
        expect(data).toEqual(SwapiPilotMock);
      });
  
      expect( httpClientSpy.get ).toHaveBeenCalledWith( `${environmentServiceMock.swApiUrl}/people/?page=${page}` )
    });
  })
});
