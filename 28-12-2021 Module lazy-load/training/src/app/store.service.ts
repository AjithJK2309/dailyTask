import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public mes : string = "Hello";
  public generalStore : any[]=[]
  constructor() { }
  sendMessage(){
    return this.generalStore
  }
  getMessage(val : any){
    this.generalStore.push(val)
  }
}
