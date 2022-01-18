import { Injectable } from '@angular/core';

import {Subject, Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  private subject = new Subject<any>();


  sendMessage(message:any){

    this.subject.next(message);

  }

  reacevieMessage():Observable<any>{
    return this.subject.asObservable();
  }
}

