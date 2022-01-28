import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ad1Component } from '../component/ad1/ad1.component';
import { Ad2Component } from '../component/ad2/ad2.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data : any = [
    {
      component : Ad1Component,
      name : 'boost',
      since : '1990'
    },
    {
      component : Ad2Component,
      name : 'Chicken',
      since : '1995',
      dish:'chicken 65'
    },
    {
      component : Ad1Component,
      name : 'Veg',
      since : '1950'
    },
    {
      component : Ad2Component,
      name : 'Idly',
      since : '2005',
      dish:'podi'
    }
  ]
  constructor() { }

  getData():Observable<any[]>{
    return of(this.data)
  }
}
