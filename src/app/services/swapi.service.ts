import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from './environment.service';

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

  starships () {
    return this.http.get(`${ this.baseUrl }/starships/`)
  }
}
