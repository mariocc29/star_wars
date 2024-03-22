import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { of, throwError } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { SwapiService } from 'src/app/services/swapi.service';
import { SwapiStarshipMock } from './mocks/swapi.mock';
import { StarshipService } from 'src/app/services/starship.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let swapiServiceSpy: jasmine.SpyObj<SwapiService>;
  let starshipServiceSpy: jasmine.SpyObj<StarshipService>;

  beforeEach(async () => {
    swapiServiceSpy = jasmine.createSpyObj('SwapiService', ['starships']);
    swapiServiceSpy.starships.and.returnValue(of(SwapiStarshipMock));

    starshipServiceSpy = jasmine.createSpyObj('StarshipService', ['push']);

    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [
        RouterModule,
      ],
      providers: [
        { provide: SwapiService, useValue: swapiServiceSpy },
        { provide: StarshipService, useValue: starshipServiceSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#fetchStarships', () => {
    it('should fetch starships from swapiService and push them to starshipService', () => {
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

});
