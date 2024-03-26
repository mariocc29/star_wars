import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalModel } from 'src/app/models/modal.model';
import { StarshipModel } from 'src/app/models/starship.model';
import { PilotService } from 'src/app/services/pilot.service';

@Component({
  selector: 'shared-starship',
  templateUrl: './starship.component.html',
  styleUrl: './starship.component.scss'
})
export class StarshipComponent {
  @Input() starship: StarshipModel = new StarshipModel(this.pilotService)
  @Input() totalStarships: number = 0;
  @Output() toggleModal = new EventEmitter<ModalModel>()

  constructor(private pilotService: PilotService){}

  /**
   * Method triggered when the modal toggle event is emitted.
   * Constructs a ModalModel object with starship details and emits it to parent components.
   * @returns Void.
   */
  onToggleModal(): void {
    let modal = new ModalModel
    modal.label = this.starship.name
    modal.details = [
      { label: 'Cost in credits:', value: this.starship.costInCredits},
      { label: 'Length:', value: this.starship.length},
      { label: 'Max. Atmosphering Speed:', value: this.starship.maxAtmospheringSpeed},
      { label: 'Crew:', value: this.starship.crew},
      { label: 'Passengers:', value: this.starship.passengers},
      { label: 'Cargo Capacity:', value: this.starship.cargoCapacity},
      { label: 'Consumables:', value: this.starship.consumables},
      { label: 'Hyperdrive Rating:', value: this.starship.hyperdriveRating},
      { label: 'MGLT:', value: this.starship.mglt}
    ]

    this.toggleModal.emit(modal);
  }
}
