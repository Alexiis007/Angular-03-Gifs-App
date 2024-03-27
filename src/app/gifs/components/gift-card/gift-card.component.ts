import { Gift } from '../../interfaces/gift.interfaces';
import { GifsService } from './../../services/gifs.service';
import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'gift-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrl: './gift-card.component.css'
})
export class GiftCardComponent implements OnInit{
  @Input()
  public gif !: Gift;

  ngOnInit(): void {
    if(!this.gif) throw new Error('Gif property is required.');
  }
}
