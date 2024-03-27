import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gift, SearchResponse } from '../interfaces/gift.interfaces'

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  constructor(private http : HttpClient){this.loadLocalStorage()}

  private _tagsHistory : string[] = [];

  private apiKey:string="vk6L27HIjnf4PjQXGtLmPCtJdqLGa9dg";
  private urlApi:string="https://api.giphy.com/v1/gifs/search?";

  public giftList : Gift[]=[];

  get tasgHistory(){
    return [...this._tagsHistory];
  }
  public organizeHistory(tag : string):void
  {
    if(this._tagsHistory.includes(tag))
    {
      //quita el tag de tagHistory si existe
      this._tagsHistory = this._tagsHistory.filter((oldtag)=> oldtag !== tag)
      console.log("filer"+this._tagsHistory)
      this._tagsHistory.unshift(tag);
      console.log("push"+this._tagsHistory)
      //se corta de la posicion 0  a la 10 (no lo use debido al else :P )
      //this._tagsHistory.splice(0,1);
    }
    else{
      //unshift agrega elementos a un array al prncipio
      this._tagsHistory.unshift(tag);
    }
    this.saveLocalStorage()
  }
  public searchTag(tag : string):void
  {
    if (tag.trim().length == 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '32')
    .set('q', tag)

    this.http.get<SearchResponse>(`${this.urlApi}${params}`)
    .subscribe(resp=>{
      this.giftList=resp.data;
      console.log(resp)
    })
  }
  private saveLocalStorage()
  {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }
  private loadLocalStorage():void
  {
    if (!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    if(this._tagsHistory.length !== 0)this.searchTag(this._tagsHistory[0])
  }
}
