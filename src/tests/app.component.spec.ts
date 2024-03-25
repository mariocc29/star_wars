import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { of, throwError } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { SwapiService } from 'src/app/services/swapi.service';
import { SwapiPilotMock, SwapiStarshipMock } from 'src/tests/mocks/swapi.interface.mock';
import { StarshipService } from 'src/app/services/starship.service';
import { PilotService } from 'src/app/services/pilot.service';
import { PilotModelMock } from './mocks/pilot.model.mock';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let swapiServiceSpy: jasmine.SpyObj<SwapiService>;
  let starshipServiceSpy: jasmine.SpyObj<StarshipService>;
  let pilotService: PilotService;

  beforeEach(async () => {
    swapiServiceSpy = jasmine.createSpyObj('SwapiService', ['starships', 'pilots']);
    swapiServiceSpy.starships.and.returnValue(of(SwapiStarshipMock));
    swapiServiceSpy.pilots.and.returnValue(of(SwapiPilotMock));

    starshipServiceSpy = jasmine.createSpyObj('StarshipService', ['push']);

    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [
        RouterModule,
      ],
      providers: [
        { provide: SwapiService, useValue: swapiServiceSpy },
        { provide: StarshipService, useValue: starshipServiceSpy },
        PilotService,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    pilotService = TestBed.inject(PilotService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#fetchStarships', () => {
    it('should fetch starships from swapiService and push them to starshipService', async () => {
      spyOn(component, 'fetchPilots').and.returnValue(Promise.resolve());
      await component.ngOnInit();
      
      expect(swapiServiceSpy.starships).toHaveBeenCalledOnceWith(1);
      expect(starshipServiceSpy.push).toHaveBeenCalledWith(SwapiStarshipMock.results);
      expect(starshipServiceSpy.length).toBe(SwapiStarshipMock.count);
    })
    
    it('should handle errors from swapiService', () => {
      const errorMessage = 'Error fetching starships';
      swapiServiceSpy.starships.and.returnValue(throwError(errorMessage));
      spyOn(console, 'error');
  
      component.fetchStarships();
      expect(console.error).toHaveBeenCalledWith(errorMessage);
    });
  })

  describe('#fetchPilots', () => {
    it('should fetch pilots from swapiService and push them to starshipService', async () => {
      spyOn(component, 'fetchPilots').and.returnValue(Promise.resolve());

      await component.ngOnInit();
      expect(swapiServiceSpy.pilots).toHaveBeenCalledOnceWith(1);
      expect(pilotService.pilots).toEqual([PilotModelMock]);
    })
  })
});
