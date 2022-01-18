import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  data1 = new Subject()
  data2 = new Subject()
  constructor() { }
  getData1(val:any){
    this.data1.next(val);
  }
  sendData1():Observable<any>{
    return this.data1.asObservable();
  }
  getData2(val:any){
    this.data2.next(val);
  }
  sendData2():Observable<any>{
    return this.data2.asObservable();
  }
}
