import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TostringPipe } from 'src/app/pipes/tostring.pipe';
import { StarshipComponent } from 'src/app/shared/starship/starship.component';

describe('StarshipComponent', () => {
  let component: StarshipComponent;
  let fixture: ComponentFixture<StarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipComponent ],
      imports: [ TostringPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit toggleModal event when onToggleModal is called', () => {
    spyOn(component.toggleModal, 'emit');
    component.onToggleModal();
    expect(component.toggleModal.emit).toHaveBeenCalled();
  });
})