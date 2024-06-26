import { Component } from '@angular/core';
import { ModalModel } from 'src/app/models/modal.model';
import { StarshipModel } from 'src/app/models/starship.model';
import { PilotService } from 'src/app/services/pilot.service';
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
  starships: StarshipModel[] = [];
  starship: StarshipModel = new StarshipModel(this.pilotService)
  totalStarships: number = 0
  modalContent: ModalModel = new ModalModel
  isLoading: boolean = true
  
  private defaultStarshipId: number = 5

  constructor(private starshipService: StarshipService, private pilotService: PilotService) {}

  ngOnInit(){
    this.starshipService.get$().subscribe((data: StarshipModel[]) => {
      if (data.length > 0) {
        this.totalStarships = this.starshipService.length

        this.starships = data.map(starship => {
          if (starship.id == this.defaultStarshipId) {
            starship.active = true
            this.starship = starship
          }
          return starship
        })

        this.isLoading = false
      }
    })
  }

  /**
   * Toggles the visibility of the sidebar and overlay.
   * @returns Void.
   */
  toggleSidebar() : void {
    this.showSidebar = !this.showSidebar
    this.showOverlay = this.showSidebar
  }

  /**
   * Toggles the visibility of the modal and overlay, and sets the modal content if provided.
   * @param $event Optional parameter representing the content of the modal.
   * @returns Void.
   */
  toggleModal($event?: ModalModel) : void {
    if ($event) {
      this.modalContent = $event
    }
    
    this.showModal = !this.showModal
    this.showOverlay = this.showModal
  }

  /**
   * Updates the active starship and toggles the visibility of the sidebar and overlay.
   * @param $event The new active starship.
   * @returns Void.
   */
  goToStarship($event: StarshipModel): void {
    this.starship.active = false
    this.starship = $event

    this.showSidebar = !this.showSidebar
    this.showOverlay = this.showSidebar
  }
}
