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
  public homeworld: string = ''
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
    this.homeworld = this.pilot.homeworld
    this.url = this.pilot.url
  }
} 