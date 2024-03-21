import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial value of show set to false', () => {
    expect(component.show).toBeFalse();
  });

  it('should emit toggleModal event when onToggleModal is called', () => {
    spyOn(component.toggleModal, 'emit');
    component.onToggleModal();
    expect(component.showCursor).toBeTrue();
    expect(component.showContent).toBeFalse();
    expect(component.toggleModal.emit).toHaveBeenCalled();
  });

  it('should set showCursor to false after 1500ms when show is true', () => {
    component.show = true;
    const initialShowCursor = component.showCursor;

    component.ngOnChanges({ show: { currentValue: true, previousValue: false, firstChange: true, isFirstChange: () => true } });
    
    setTimeout(() => {
      expect(component.showCursor).toBeFalse();
    }, 1500);

    expect(component.showCursor).toEqual(initialShowCursor);
  });

  it('should set showContent to true after 2500ms when show is true', () => {
    component.show = true;
    const initialShowContent = component.showContent;

    component.ngOnChanges({ show: { currentValue: true, previousValue: false, firstChange: true, isFirstChange: () => true } });
    
    setTimeout(() => {
      expect(component.showContent).toBeTrue();
    }, 2500);

    expect(component.showContent).toEqual(initialShowContent);
  });
})