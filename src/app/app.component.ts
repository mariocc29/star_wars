import { Component } from '@angular/core';
import { SwapiService } from './services/swapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {

  constructor(private swapiService: SwapiService) {}

  ngOnInit() {
    this.swapiService.starships().subscribe(data => {
      console.debug(data)
    })
  }

}
