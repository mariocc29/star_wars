import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { StarshipComponent } from './starship/starship.component';



@NgModule({
  declarations: [
    HeaderComponent,
    StarshipComponent
  ],
  exports: [
    HeaderComponent,
    StarshipComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
