import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Output() toggleModal = new EventEmitter<void>()
  
  onToggleModal(): void {
    this.toggleModal.emit();
  }
}
