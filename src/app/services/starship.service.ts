import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StarshipInterface } from '../interfaces/starship.interface';
import { StarshipModel } from '../models/starship.model';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {
  private starshipSubject: BehaviorSubject<StarshipModel[]> = new BehaviorSubject<StarshipModel[]>([]);
  starship$: Observable<StarshipModel[]> = this.starshipSubject.asObservable();
  private total: number = 0;
  
  constructor() { }

  set length(total: number) {
    this.total = total;
  }

  get length(): number {
    return this.total;
  }

  push(starships: StarshipInterface[]) {
    let currentData = this.starshipSubject.getValue();
    let lastStarship = currentData[currentData.length - 1];

    starships.forEach((item, index) => {

      let id = (lastStarship) ? lastStarship.id : index

      let starship = new StarshipModel(
        id + 1, 
        item['name'])

      currentData.push(starship);
    })

    this.starshipSubject.next(currentData);
  }
}
