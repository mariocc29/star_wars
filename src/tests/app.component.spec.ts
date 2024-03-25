import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { of, throwError } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { SwapiService } from 'src/app/services/swapi.service';
import { SwapiPilotMock, SwapiPlanetMock, SwapiStarshipMock } from 'src/tests/mocks/swapi.interface.mock';
import { StarshipService } from 'src/app/services/starship.service';
import { PilotService } from 'src/app/services/pilot.service';
import { PilotModelMock } from './mocks/pilot.model.mock';
import { PlanetService } from 'src/app/services/planet.service';
import { PlanetInterfaceMock } from './mocks/planet.interface.mock';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let swapiServiceSpy: jasmine.SpyObj<SwapiService>;
  let starshipServiceSpy: jasmine.SpyObj<StarshipService>;
  let pilotService: PilotService;
  let planetService: PlanetService;

  beforeEach(async () => {
    swapiServiceSpy = jasmine.createSpyObj('SwapiService', ['starships', 'pilots', 'planets']);
    swapiServiceSpy.starships.and.returnValue(of(SwapiStarshipMock));
    swapiServiceSpy.pilots.and.returnValue(of(SwapiPilotMock));
    swapiServiceSpy.planets.and.returnValue(of(SwapiPlanetMock));

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
        PlanetService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    pilotService = TestBed.inject(PilotService);
    planetService = TestBed.inject(PlanetService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#fetchStarships', () => {
    it('should fetch starships from swapiService and push them to starshipService', async () => {
      spyOn(component, 'fetchPilots').and.returnValue(Promise.resolve());
      spyOn(component, 'fetchPlanets').and.returnValue(Promise.resolve([PlanetInterfaceMock]));
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
    it('should fetch pilots from swapiService and set them on pilotService', async () => {
      spyOn(component, 'fetchPilots').and.returnValue(Promise.resolve());
      PilotModelMock.homeworld = PlanetInterfaceMock.name
      await component.ngOnInit();

      expect(swapiServiceSpy.pilots).toHaveBeenCalledOnceWith(1);
      expect(pilotService.pilots).toEqual([PilotModelMock]);
    })
  })

  describe('#fetchPlanets', () => {
    it('should fetch planets from swapiService and update pilots&.homeworld on pilotService', async () => {
      spyOn(component, 'fetchPlanets').and.returnValue(Promise.resolve([PlanetInterfaceMock]));
      spyOn(planetService, 'updatePilotHomeworld');
      await component.ngOnInit();
      
      expect(swapiServiceSpy.planets).toHaveBeenCalledOnceWith(1);
      expect(planetService.updatePilotHomeworld).toHaveBeenCalled();
    })
  })
});
