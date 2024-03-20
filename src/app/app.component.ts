import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showSidebar: boolean = false;

  toggleSidebar() : void {
    this.showSidebar = !this.showSidebar
  }
}
