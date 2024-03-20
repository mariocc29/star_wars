import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>()

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }
}
