import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StarshipModel } from 'src/app/models/starship.model';
import { StarshipService } from 'src/app/services/starship.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() show: boolean = false
  @Output() toggleSidebar = new EventEmitter<void>()

  private subscription: Subscription = new Subscription();
  starships: Array<any> = []

  constructor(private starshipService: StarshipService) {}

  ngOnInit(){
    this.subscription.add(
      this.starshipService.get$().subscribe((data: StarshipModel[]) => {
        if (data.length > 0) {
          this.starships = data 
        }
      })
    )
  }

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
