import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import {Gift} from '../../interfaces/gift.interfaces'

@Component({
  selector: 'gift-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrl: './home-pages.component.css'
})
export class HomePagesComponent {
  constructor(private gifsService : GifsService){}
  get gifs():Gift[]
  {
    return this.gifsService.giftList;
  }
}
