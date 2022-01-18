import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, retry } from 'rxjs';
import { Idata } from '../Idata';
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public url='http://localhost:3000'
  constructor( public http : HttpClient) { }
  getData():Observable<any>{
    return this.http.get(`${this.url}/results`)
    .pipe(
      map(res=>res),
      retry(1)
    )
  }

  sendData(data:any) : Observable<any> { 
    return this.http.post(`${this.url}/results`,data);
  }

  updateData(id:any,data:any) : Observable<any>{
    return this.http.patch(`${this.url}/results/${id}`,data)
  }

  deleteData(id:any) : Observable<any>{
    return this.http.delete(`${this.url}/results/${id}`)
  }
}
