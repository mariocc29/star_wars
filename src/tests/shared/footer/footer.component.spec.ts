import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalModel } from 'src/app/models/modal.model';
import { FooterComponent } from "src/app/shared/footer/footer.component";
import { PilotModelMock } from 'src/tests/mocks/pilot.model.mock';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let toggleModalSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    toggleModalSpy = spyOn(component.toggleModal, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit toggleModal event with pilot details when onToggleModal is called', () => {
    const expectedModal: ModalModel = new ModalModel();
    expectedModal.label = PilotModelMock.name
    expectedModal.image = PilotModelMock.image
    expectedModal.details = [
      { label: 'Height:', value: `${PilotModelMock.height} cm` },
      { label: 'Mass:', value: `${PilotModelMock.mass} kg` },
      { label: 'Hair Color:', value: component.capitilize(PilotModelMock.hairColor) },
      { label: 'Skin Color:', value: component.capitilize(PilotModelMock.skinColor) },
      { label: 'Eye Color:', value: component.capitilize(PilotModelMock.eyeColor) },
      { label: 'Birth Year:', value: PilotModelMock.birthYear },
      { label: 'Gender:', value: component.capitilize(PilotModelMock.gender) },
      { label: 'Homeworld:', value: PilotModelMock.homeworld }
    ]
    
    component.onToggleModal(PilotModelMock);
    expect(toggleModalSpy).toHaveBeenCalledWith(expectedModal);
  });
});
