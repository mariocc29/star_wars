import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StarshipModel } from 'src/app/models/starship.model';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() show: boolean = false
  @Input() starships: StarshipModel[] = []
  @Output() toggleSidebar = new EventEmitter<void>()

  /**
   * Event handler for toggling the sidebar visibility.
   * Emits the toggleSidebar event.
   */
  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }
}
