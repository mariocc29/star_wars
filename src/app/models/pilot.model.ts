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

  private readonly assets: string[] = [
    '1', '4', '10', '11', '13', '14', '21', '25', '31', '34', '43'
  ]

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

  /**
   * Retrieves the image URL for the pilot.
   * @returns The image URL for the pilot based on their ID in the assets array.
   *          If no ID is found or the ID is not in the assets array, a default
   *          image URL is returned.
   */
  get image(): string {
    
    let id: string = ''
    let urlSplit = this.url.match(/\/(\d+)\/$/)

    if (urlSplit && urlSplit[1]) {
      id = urlSplit[1]
    }

    return this.assets.includes(id) 
            ? `./assets/characters/${id}.png`
            : './assets/characters/not_found.svg'
  }
} 