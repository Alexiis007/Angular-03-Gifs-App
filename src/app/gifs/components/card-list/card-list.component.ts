import { Component, Input } from '@angular/core';
import { Gift } from '../../interfaces/gift.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  @Input()
  public giftList : Gift[]=[];
}
