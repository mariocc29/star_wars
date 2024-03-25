import { Injectable } from '@angular/core';
import { PlanetInterface } from '../interfaces/planet.interface';
import { PilotService } from './pilot.service';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private pilotService: PilotService) { }

  /**
   * Updates the homeworld property of pilots based on the provided planets data.
   * @param planets An array of PlanetInterface objects representing the planets data.
   * @returns Void.
   */
  updatePilotHomeworld(planets: PlanetInterface[]){
    this.pilotService.pilots.forEach(pilot => {
      let homeworld = planets.filter(planet => planet['url'] == pilot.homeworldUrl)
      pilot.homeworld = (homeworld[0]) ? homeworld[0]['name'] : ''
    })
  }
}
