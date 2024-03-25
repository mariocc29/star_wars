import { Injectable } from '@angular/core';
import { PilotInterface } from '../interfaces/pilot.interface';
import { PilotModel } from '../models/pilot.model';

@Injectable({
  providedIn: 'root'
})
export class PilotService {
  
  private _pilots:PilotModel[] = []

  constructor() { }

  /**
   * Getter for the list of pilots.
   * @returns An array of PilotModel objects representing the pilots.
   */
  get pilots(): PilotModel[] {
    return this._pilots
  }

  /**
   * Setter for the list of pilots.
   * Converts an array of PilotInterface objects into PilotModel objects and sets them as the pilots.
   * @param _pilots An array of PilotInterface objects representing the pilots.
   */
  set pilots(_pilots: PilotInterface[]){
    _pilots.forEach(pilot => {
      this._pilots.push( new PilotModel(pilot) )
    })
  }

  /**
   * Finds a pilot by URL.
   * @param url The URL of the pilot to find.
   * @returns The PilotModel object representing the pilot if found, otherwise returns undefined.
   */
  findByUrl(url: string): PilotModel{
    return this._pilots.filter(pilot => pilot.url == url)[0]
  }
}
