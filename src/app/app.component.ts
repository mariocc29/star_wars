import { Component } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { StarshipService } from 'src/app/services/starship.service';
import { Subscription, lastValueFrom } from 'rxjs';
import { SwapiInterface } from './interfaces/swapi.interface';
import { PilotService } from './services/pilot.service';
import { PilotInterface } from './interfaces/pilot.interface';
import { StarshipInterface } from './interfaces/starship.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  
  private subscription = {
    starship: new Subscription
  }
  
  constructor(
    private swapiService: SwapiService,
    private starshipService: StarshipService,
    private pilotService: PilotService) {}

  async ngOnInit() {
    await this.fetchPilots()
    this.fetchStarships()
  }

  /**
  * Method to retrieve information about starships from the Star Wars API (SWAPI) and store it in the StarshipService.
  * @param page The page number of results to retrieve. Default is 1.
  * @returns Void.
  */
  fetchStarships(page: number = 1) {
    this.subscription.starship = this.swapiService.starships(page).subscribe({
      next: (data: SwapiInterface) => {
        let {count, next, results} = data
        this.starshipService.length = count
        this.starshipService.push(results as StarshipInterface[])

        if (next) {
          this.fetchStarships(page + 1)
        } else {
          this.subscription.starship.unsubscribe()
        }
      },
      error: error => {
          console.error(error);
      }
    })
  }

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

}
