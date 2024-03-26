import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { StarshipComponent } from './starship/starship.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ModalComponent } from './modal/modal.component';
import { TostringPipe } from '../pipes/tostring.pipe';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    HeaderComponent,
    StarshipComponent,
    FooterComponent,
    SidebarComponent,
    ModalComponent,
    LoadingComponent
  ],
  exports: [
    HeaderComponent,
    StarshipComponent,
    FooterComponent,
    SidebarComponent,
    ModalComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    TostringPipe
  ]
})
export class SharedModule { }
