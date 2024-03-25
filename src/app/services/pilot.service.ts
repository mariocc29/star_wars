import { Injectable } from '@angular/core';
import { PilotInterface } from '../interfaces/pilot.interface';
import { PilotModel } from '../models/pilot.model';

@Injectable({
  providedIn: 'root'
})
export class PilotService {
  
  private _pilots:PilotModel[] = []

  constructor() { }

  get pilots(): PilotModel[] {
    return this._pilots
  }

  set pilots(_pilots: PilotInterface[]){
    _pilots.forEach(pilot => {
      this._pilots.push( new PilotModel(pilot) )
    })
  }

  findByUrl(url: string): PilotModel{
    return this._pilots.filter(pilot => pilot.url == url)[0]
  }
}
