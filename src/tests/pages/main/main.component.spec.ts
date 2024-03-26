import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MainComponent } from "src/app/pages/main/main.component";
import { StarshipService } from 'src/app/services/starship.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultStartshipModelMock, StartshipModelMock } from 'src/tests/mocks/starship.model.mock';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let starshipServiceSpy: jasmine.SpyObj<StarshipService>;

  beforeEach(async () => {
    starshipServiceSpy = jasmine.createSpyObj('StarshipService', ['get$']);
    starshipServiceSpy.get$.and.returnValue(of([StartshipModelMock, DefaultStartshipModelMock]));
    
    await TestBed.configureTestingModule({
      declarations: [ MainComponent ],
      imports: [ SharedModule ],
      providers: [
        { provide: StarshipService, useValue: starshipServiceSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial value of showOverlay set to false', () => {
    expect(component.showOverlay).toBeFalse();
  });

  it('should have initial value of showSidebar set to false', () => {
    expect(component.showSidebar).toBeFalse();
  });

  it('should have initial value of showModal set to false', () => {
    expect(component.showModal).toBeFalse();
  });

  fit('should subscribe to StarshipService.get$ and populate starships array', () => {
    fixture.whenStable().then(() => {
      expect(starshipServiceSpy.get$).toHaveBeenCalled();
      expect(component.starships).toEqual([StartshipModelMock, DefaultStartshipModelMock]);
    })
  })

  it('should set active to true for starship with defaultStarshipId', () => {
    fixture.whenStable().then(() => {
      expect(component.starships.find(starship => starship.id === 1)?.active).toBeFalse();
      expect(component.starships.find(starship => starship.id === 5)?.active).toBeTrue();
    })
  })
})