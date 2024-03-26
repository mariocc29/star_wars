import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { ModalModel } from 'src/app/models/modal.model';
import { PilotModel } from 'src/app/models/pilot.model';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input() pilots: PilotModel[] = []
  @Output() toggleModal = new EventEmitter<ModalModel>()
  
  /**
   * Method triggered when the modal toggle event is emitted.
   * Constructs a ModalModel object with pilot details and emits it to parent components.
   * @param pilot The pilot model for which the modal is being toggled.
   * @returns Void.
   */
  onToggleModal(pilot: PilotModel): void {
    let modal = new ModalModel
    modal.label = pilot.name
    modal.image = pilot.image
    modal.details = [
      { label: 'Height:', value: `${pilot.height} cm` },
      { label: 'Mass:', value: `${pilot.mass} kg` },
      { label: 'Hair Color:', value: this.capitilize(pilot.hairColor) },
      { label: 'Skin Color:', value: this.capitilize(pilot.skinColor) },
      { label: 'Eye Color:', value: this.capitilize(pilot.eyeColor) },
      { label: 'Birth Year:', value: pilot.birthYear },
      { label: 'Gender:', value: this.capitilize(pilot.gender) },
      { label: 'Homeworld:', value: pilot.homeworld }
    ]

    this.toggleModal.emit(modal);
  }

  /**
   * Capitalizes the first letter of a given string.
   * @param str The string to be capitalized.
   * @returns The string with the first letter capitalized.
   */
  capitilize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
}
