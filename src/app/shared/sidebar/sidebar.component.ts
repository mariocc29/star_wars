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
  @Output() goToStarship = new EventEmitter<StarshipModel>()

  /**
   * Event handler for toggling the sidebar visibility.
   * Emits the toggleSidebar event.
   */
  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }

  /**
   * Method to set a starship as active and emit an event to notify parent components.
   * @param starship The starship model to set as active.
   * @returns Void.
   */
  onGoToStarship(starship: StarshipModel): void{
    starship.active = true
    this.goToStarship.emit(starship)
  }
}
