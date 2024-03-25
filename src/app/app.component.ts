import { Component } from '@angular/core';
import { Subscription, lastValueFrom } from 'rxjs';

import { PilotInterface } from 'src/app/interfaces/pilot.interface';
import { PilotService } from 'src/app/services/pilot.service';
import { PlanetInterface } from 'src/app/interfaces/planet.interface';
import { PlanetService } from 'src/app/services/planet.service';
import { StarshipInterface } from 'src/app/interfaces/starship.interface';
import { StarshipService } from 'src/app/services/starship.service';
import { SwapiInterface } from 'src/app/interfaces/swapi.interface';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  
  private subscription = new Subscription
  
  constructor(
    private swapiService: SwapiService,
    private starshipService: StarshipService,
    private pilotService: PilotService,
    private planetService: PlanetService) {}

  async ngOnInit() {
    let [_, planets] = await Promise.all([
      this.fetchPilots(),
      this.fetchPlanets()
    ]);

    this.planetService.updatePilotHomeworld(planets)
    this.fetchStarships()
  }

  /**
  * Method to retrieve information about starships from the Star Wars API (SWAPI) and store it in the StarshipService.
  * @param page The page number of results to retrieve. Default is 1.
  * @returns Void.
  */
  fetchStarships(page: number = 1) {
    this.subscription = this.swapiService.starships(page).subscribe({
      next: (data: SwapiInterface) => {
        let {count, next, results} = data
        this.starshipService.length = count
        this.starshipService.push(results as StarshipInterface[])

        if (next) {
          this.fetchStarships(page + 1)
        } else {
          this.subscription.unsubscribe()
        }
      },
      error: error => {
          console.error(error);
      }
    })
  }

  /**
   * Method to fetch pilots data from the Star Wars API (SWAPI) and store it in the PilotService.
   * @returns Promise that resolves with void.
   */
  async fetchPilots() {
    let page: number = 1;
    let {count, results} = await lastValueFrom(this.swapiService.pilots(page))
    let records: PilotInterface[] = results as PilotInterface[]

    let length = Math.ceil(count / results.length)
    let promises : Array<Promise<SwapiInterface>> = []
    for (let index = page + 1; index <= length; index++) {
      promises.push(lastValueFrom(this.swapiService.pilots(index)))
    }
    
    let responses = await Promise.all(promises)
    responses.forEach((request: SwapiInterface) => {
      records.push( ...request.results as PilotInterface[])
    })

    this.pilotService.pilots = records
  }

  /**
   * Method to fetch planets data from the Star Wars API (SWAPI).
   * @returns Promise that resolves with an array of PlanetInterface objects.
   */
  async fetchPlanets(): Promise<PlanetInterface[]> {
    let page: number = 1;
    let {count, results} = await lastValueFrom(this.swapiService.planets(page))
    let records: PlanetInterface[] = results as PlanetInterface[]

    let length = Math.ceil(count / results.length)
    let promises : Array<Promise<SwapiInterface>> = []
    for (let index = page + 1; index <= length; index++) {
      promises.push(lastValueFrom(this.swapiService.planets(index)))
    }
    
    let responses = await Promise.all(promises)
    responses.forEach((request: SwapiInterface) => {
      records.push( ...request.results as PlanetInterface[])
    })

    return records
  }

}
