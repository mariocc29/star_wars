import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalModel } from 'src/app/models/modal.model';
import { TostringPipe } from 'src/app/pipes/tostring.pipe';
import { PilotService } from 'src/app/services/pilot.service';
import { StarshipComponent } from 'src/app/shared/starship/starship.component';
import { StartshipModelMock } from 'src/tests/mocks/starship.model.mock';

describe('StarshipComponent', () => {
  let component: StarshipComponent;
  let fixture: ComponentFixture<StarshipComponent>;
  let toggleModalSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipComponent ],
      imports: [ TostringPipe ],
      providers: [ PilotService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipComponent);
    component = fixture.componentInstance;
    toggleModalSpy = spyOn(component.toggleModal, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit toggleModal event when onToggleModal is called', () => {
    const expectedModal: ModalModel = new ModalModel();
    expectedModal.label = StartshipModelMock.name
    expectedModal.details = [
      { label: 'Cost in credits:', value: StartshipModelMock.costInCredits},
      { label: 'Length:', value: StartshipModelMock.length},
      { label: 'Max. Atmosphering Speed:', value: StartshipModelMock.maxAtmospheringSpeed},
      { label: 'Crew:', value: StartshipModelMock.crew},
      { label: 'Passengers:', value: StartshipModelMock.passengers},
      { label: 'Cargo Capacity:', value: StartshipModelMock.cargoCapacity},
      { label: 'Consumables:', value: StartshipModelMock.consumables},
      { label: 'Hyperdrive Rating:', value: StartshipModelMock.hyperdriveRating},
      { label: 'MGLT:', value: StartshipModelMock.mglt}
    ]
    
    component.starship = StartshipModelMock
    component.onToggleModal();
    expect(toggleModalSpy).toHaveBeenCalledWith(expectedModal);
  });
})