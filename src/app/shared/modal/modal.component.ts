import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'shared-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() show: boolean = false
  @Output() toggleModal = new EventEmitter<void>()
  
  showCursor: boolean = true
  showContent: boolean = false

  ngOnChanges(changes: SimpleChanges) {
    if ( changes['show'].currentValue == true ) {
      setTimeout(() => {
        this.showCursor = false
      }, 1500)

      setTimeout(() => {
        this.showContent = true
      }, 2500)
    }
  }

  onToggleModal(): void {
    this.showCursor = true
    this.showContent = false
    this.toggleModal.emit();
  }
}
