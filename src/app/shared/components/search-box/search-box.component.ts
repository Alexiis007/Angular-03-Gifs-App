import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  constructor(private gifsService:GifsService){}
  // recivir etiquetas (en este caso estamos reciviendo un input)
  // por medio del tag local (#txtTagInput en el HTML)

  @ViewChild('txtTagInput')
  public tag !: ElementRef<HTMLInputElement>;

  searchTag(){
    const newTag : string = this.tag.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.tag.nativeElement.value="";
  }
}
