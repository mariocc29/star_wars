import { Component } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { StarshipService } from 'src/app/services/starship.service';
import { Subscription } from 'rxjs';
import { SwapiInterface } from './interfaces/swapi.interface';
import { PilotService } from './services/pilot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  
  private subscription = {
    starship: new Subscription,
    pilot: new Subscription,
  }

  constructor(
    private swapiService: SwapiService,
    private starshipService: StarshipService,
    private pilotService: PilotService) {}

  ngOnInit() {
    this.fetchStarships()
    this.fetchPilots()
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
        this.starshipService.push(results)

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

  fetchPilots(page: number = 1) {
    this.subscription.pilot = this.swapiService.pilots(page).subscribe({
      next: (data: SwapiInterface) => {
        let {next, results} = data
        this.pilotService.push(results)
        
        if (next) {
          this.fetchPilots(page + 1)
        } else {
          this.subscription.pilot.unsubscribe()
        }
      },
      error: error => {
          console.error(error);
      }
    })
  }

}
