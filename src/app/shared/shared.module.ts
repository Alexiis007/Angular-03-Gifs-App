import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';



@NgModule({
  declarations: [
    SidebarComponent,
    SearchBoxComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SearchBoxComponent,
    SidebarComponent,
    LazyImageComponent
  ]
})
export class SharedModule { }
