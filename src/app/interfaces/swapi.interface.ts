import { StarshipInterface } from "./starship.interface"

export interface SwapiInterface {
  count: number,
  next: string | null,
  results: Array<StarshipInterface>
}