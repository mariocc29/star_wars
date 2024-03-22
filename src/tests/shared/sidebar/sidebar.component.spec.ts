import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { StarshipService } from 'src/app/services/starship.service';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';
import { StartshipModelMock } from 'src/tests/mocks/starship.model.mock';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let starshipServiceSpy: jasmine.SpyObj<StarshipService>;

  beforeEach(async () => {
    starshipServiceSpy = jasmine.createSpyObj('StarshipService', ['get$']);
    starshipServiceSpy.get$.and.returnValue(of([StartshipModelMock]));
    
    await TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
      providers: [
        { provide: StarshipService, useValue: starshipServiceSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial value of show set to false', () => {
    expect(component.show).toBeFalse();
  });

  it('should emit toggleSidebar event when onToggleSidebar is called', () => {
    spyOn(component.toggleSidebar, 'emit');
    component.onToggleSidebar();
    expect(component.toggleSidebar.emit).toHaveBeenCalled();
  });

  it('should subscribe to StarshipService.get$ and populate starships array', () => {
    component.ngOnInit();
    expect(starshipServiceSpy.get$).toHaveBeenCalled();
    expect(component.starships).toEqual([StartshipModelMock]);
  })
});
