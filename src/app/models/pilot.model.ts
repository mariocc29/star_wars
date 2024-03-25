import { PilotInterface } from "../interfaces/pilot.interface"

export class PilotModel {
  
  public name: string = ''
  public height: number = 0
  public mass: number = 0
  public hairColor: string = ''
  public skinColor: string = ''
  public eyeColor: string = ''
  public birthYear: string = ''
  public gender: string = ''
  public homeworldUrl: string = ''
  private _homeworld: string = ''
  public url: string = ''

  constructor(private pilot: PilotInterface){
    this.name = this.pilot.name
    this.height = this.pilot.height
    this.mass = this.pilot.mass
    this.hairColor = this.pilot.hair_color
    this.skinColor = this.pilot.skin_color
    this.eyeColor = this.pilot.eye_color
    this.birthYear = this.pilot.birth_year
    this.gender = this.pilot.gender
    this.url = this.pilot.url
    this.homeworldUrl = this.pilot.homeworld
  }

  /**
   * Setter for the homeworld of the pilot.
   * @param homeworld The homeworld of the pilot.
   */
  set homeworld(homeworld: string) {
    this._homeworld = homeworld
  }

  /**
   * Getter for the homeworld of the pilot.
   * @returns The homeworld of the pilot.
   */
  get homeworld(): string {
    return this._homeworld
  }
} 