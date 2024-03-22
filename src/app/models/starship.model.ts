export class StarshipModel {

  constructor(
    public id: number,
    public name: string,
    public model: string,
    public manufacturer: string,
    public costInCredits: number,
    public length: number,
    public maxAtmospheringSpeed: number,
    public crew: number,
    public passengers: number,
    public cargoCapacity: number,
    public consumables: string,
    public hyperdriveRating: number,
    public mglt: number,
    public starshipClass: string,
    public pilots: Array<string>
  ){}

}
