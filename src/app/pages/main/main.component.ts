import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
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