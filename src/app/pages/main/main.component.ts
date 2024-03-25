import { Component } from '@angular/core';
import { StarshipModel } from 'src/app/models/starship.model';
import { StarshipService } from 'src/app/services/starship.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  showOverlay: boolean = false;
  showSidebar: boolean = false;
  showModal: boolean = false;
  starships: StarshipModel[] = []

  constructor(private starshipService: StarshipService) {}

  ngOnInit(){
    this.starshipService.get$().subscribe((data: StarshipModel[]) => {
      if (data.length > 0) {
        this.starships = data 
      }
    })
  }

  toggleSidebar() : void {
    this.showSidebar = !this.showSidebar
    this.showOverlay = this.showSidebar
  }

  toggleModal() : void {
    this.showModal = !this.showModal
    this.showOverlay = this.showModal
  }
}
