import { PilotInterface } from "./pilot.interface"
import { PlanetInterface } from "./planet.interface"
import { StarshipInterface } from "./starship.interface"

export interface SwapiInterface {
  count: number,
  next: string | null,
  results: StarshipInterface[] | PilotInterface[] | PlanetInterface[]
}