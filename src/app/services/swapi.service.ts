import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from './environment.service';
import { SwapiInterface } from '../interfaces/swapi.interface';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  
  private readonly baseUrl: string

  constructor(
    private environmentService: EnvironmentService, 
    private http: HttpClient) {
      
    this.baseUrl = this.environmentService.swApiUrl
  }

  /**
   * Retrieves starships from the SWAPI (Star Wars API) based on the provided page number
   * @param page - The page number of starships to retrieve
   * @returns An Observable of type SwapiInterface containing starship data
   */
  starships (page: number) {
    return this.http.get<SwapiInterface>(`${ this.baseUrl }/starships/?page=${page}`)
  }

  /**
   * Retrieves pilots from the SWAPI (Star Wars API) based on the provided page number.
   * @param page The page number of pilots to retrieve.
   * @returns An Observable of type SwapiInterface containing pilot data.
   */
  pilots (page: number) {
    return this.http.get<SwapiInterface>(`${ this.baseUrl }/people/?page=${page}`)
  }

  /**
   * Retrieves planets from the SWAPI (Star Wars API) based on the provided page number.
   * @param page The page number of planets to retrieve.
   * @returns An Observable of type SwapiInterface containing planet data.
   */
  planets (page: number) {
    return this.http.get<SwapiInterface>(`${ this.baseUrl }/planets/?page=${page}`)
  }
}
