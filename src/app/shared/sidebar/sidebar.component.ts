import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() show: boolean = false
  @Output() toggleSidebar = new EventEmitter<void>()

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }
}
