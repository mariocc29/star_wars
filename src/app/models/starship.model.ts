import { StarshipInterface } from "../interfaces/starship.interface";
import { PilotService } from "../services/pilot.service";
import { PilotModel } from "./pilot.model";

export class StarshipModel {

  public name: string = ''
  public model: string = ''
  public manufacturer: string = ''
  public costInCredits: number = 0
  public length: number = 0
  public maxAtmospheringSpeed: number = 0
  public crew: number = 0
  public passengers: number = 0
  public cargoCapacity: number = 0
  public consumables: string = ''
  public hyperdriveRating: number = 0
  public mglt: number = 0
  public starshipClass: string = ''
  public pilots: PilotModel[] = []

  constructor (public id: number, private starship: StarshipInterface, private pilotService: PilotService) {
    this.name = this.starship.name
    this.model = this.starship.model
    this.manufacturer = this.starship.manufacturer
    this.costInCredits = this.starship.cost_in_credits
    this.length = this.starship.length
    this.maxAtmospheringSpeed = this.starship.max_atmosphering_speed
    this.crew = this.starship.crew
    this.passengers = this.starship.passengers
    this.cargoCapacity = this.starship.cargo_capacity
    this.consumables = this.starship.consumables
    this.hyperdriveRating = this.starship.hyperdrive_rating
    this.mglt = this.starship.mglt
    this.starshipClass = this.starship.starship_class
    this.pilots = this.buildPilots( starship.pilots )
  }

  /**
   * Method that constructs PilotModel objects for pilots assigned to the starship.
   * @param pilots List of URLs of pilots assigned to the starship.
   * @returns List of PilotModel objects.
   */
  private buildPilots(pilots: string[]) : PilotModel[] {
    return pilots.map(pilot => this.pilotService.findByUrl(pilot)).filter(item => !!item)
  }

}
