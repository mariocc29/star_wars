import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showOverlay: boolean = false;
  showSidebar: boolean = false;
  showModal: boolean = false;

  toggleSidebar() : void {
    this.showSidebar = !this.showSidebar
    this.showOverlay = this.showSidebar
  }

  toggleModal() : void {
    this.showModal = !this.showModal
    this.showOverlay = this.showModal
  }
}
