import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StarshipInterface } from '../interfaces/starship.interface';
import { StarshipModel } from '../models/starship.model';
import { PilotService } from './pilot.service';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {
  private starshipSubject: BehaviorSubject<StarshipModel[]> = new BehaviorSubject<StarshipModel[]>([]);
  private total: number = 0;
  
  constructor(private pilotService: PilotService) { }

  /**
   * Setter for the total number of starships
   * @param total - The total number of starships to set
   */
  set length(total: number) {
    this.total = total;
  }

  /**
   * Getter for the total number of starships
   * @returns The total number of starships
   */
  get length(): number {
    return this.total;
  }

  /**
   * Observable getter for the starships
   * @returns An Observable of the starships
   */
  get$(): Observable<StarshipModel[]> {
    return this.starshipSubject.asObservable();
  }

  /**
   * Function to add new starships to the service
   * @param starships - An array of StarshipInterface objects to add
   * @returns void
   */
  push(starships: StarshipInterface[]) {
    let currentData = this.starshipSubject.getValue();
    let lastStarship = currentData[currentData.length - 1];
    let id: number = (lastStarship && lastStarship.id !== undefined) ? lastStarship.id : 0;

    starships.forEach(starship => {
      id++;
      currentData.push( new StarshipModel(this.pilotService, id, starship) );
    })

    this.starshipSubject.next(currentData);
  }
}
