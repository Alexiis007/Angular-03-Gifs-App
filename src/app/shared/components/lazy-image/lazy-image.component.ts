import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.components.html',
  styleUrl: './lazy-image.component.css',
})
export class LazyImageComponent {
  @Input()
  public URL !: string;
  @Input()
  public ALT : string = "";

  public hasLoaded : boolean = false;

  ngOnInit():void{
    if(!this.URL)throw new Error('URL Property is required');
  }

  onLoad()
  {
    setTimeout(()=>{
      console.log("Image loaded");
      this.hasLoaded = true;
    },500)
  }
 }
