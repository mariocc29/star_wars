import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { EnvironmentService } from 'src/app/services/environment.service';
import { SwapiService } from 'src/app/services/swapi.service';
import { SwapiStarshipMock } from '../mocks/swapi.mock';

describe('SwapiService', () => {
  let service: SwapiService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let environmentServiceMock: Partial<EnvironmentService>;

  beforeEach(() => {
    environmentServiceMock = { swApiUrl: 'https://example.com/api' }
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpy.get.and.returnValue(of(SwapiStarshipMock));
    
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
      let page = 1;
      
      service.starships(page).subscribe(data => {
        expect(data).toEqual(SwapiStarshipMock);
      });
  
      expect( httpClientSpy.get ).toHaveBeenCalledWith( `${environmentServiceMock.swApiUrl}/starships/?page=${page}` )
    });
  })
});
