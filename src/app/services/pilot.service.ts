import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PilotService {
  private pilotSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() { }

  get$(): Observable<any[]> {
    return this.pilotSubject.asObservable();
  }

  push(pilots: any) {
    let currentData = this.pilotSubject.getValue();
    currentData.push(...pilots)
    this.pilotSubject.next(currentData);
  }
}
