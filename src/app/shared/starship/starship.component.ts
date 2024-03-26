import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StarshipInterface } from 'src/app/interfaces/starship.interface';
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
  @Output() toggleModal = new EventEmitter<void>()

  constructor(private pilotService: PilotService){}

  onToggleModal(): void {
    this.toggleModal.emit();
  }
}
