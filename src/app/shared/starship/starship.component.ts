import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shared-starship',
  templateUrl: './starship.component.html',
  styleUrl: './starship.component.scss'
})
export class StarshipComponent {
  @Output() toggleModal = new EventEmitter<void>()

  onToggleModal(): void {
    this.toggleModal.emit();
  }
}
