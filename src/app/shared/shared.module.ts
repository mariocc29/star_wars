import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { StarshipComponent } from './starship/starship.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ModalComponent } from './modal/modal.component';
import { TostringPipe } from '../pipes/tostring.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    StarshipComponent,
    FooterComponent,
    SidebarComponent,
    ModalComponent
  ],
  exports: [
    HeaderComponent,
    StarshipComponent,
    FooterComponent,
    SidebarComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    TostringPipe
  ]
})
export class SharedModule { }
