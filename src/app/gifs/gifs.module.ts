import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { SharedModule } from '../shared/shared.module';
import { CardListComponent } from './components/card-list/card-list.component';
import { GiftCardComponent } from './components/gift-card/gift-card.component';



@NgModule({
  declarations: [
    HomePagesComponent,
    CardListComponent,
    GiftCardComponent

  ],
  imports: [
    SharedModule,
    CommonModule,
    SharedModule
  ],
  exports:[HomePagesComponent]
})
export class GifsModule { }
