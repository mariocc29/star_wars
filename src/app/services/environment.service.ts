import { Injectable } from '@angular/core';
import { EnvironmentInterface } from 'src/app/interfaces/environment.interface'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  private readonly env : EnvironmentInterface

  constructor() {
    this.env = environment
  }

  /**
   * Retrieves the base URL for the Star Wars API (SWAPI) from the environment configuration
   * @returns The base URL of the SWAPI
   */
  get swApiUrl(): string {
    return this.env.swApiUrl
  }
}
