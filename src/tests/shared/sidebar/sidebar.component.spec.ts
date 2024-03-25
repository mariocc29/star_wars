import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';
import { StartshipModelMock } from 'src/tests/mocks/starship.model.mock';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
      providers: []
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    component.starships = [StartshipModelMock]
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

  it('should populate starships and have name property', () => {
    expect(component.starships.length).toBeGreaterThan(0);
    expect(component.starships[0].name).toBe('Millennium Falcon');
  });
});
