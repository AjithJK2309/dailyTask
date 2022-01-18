import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idata } from '../Idata.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public dburl = 'http://localhost:3000/data';
  constructor(private http:HttpClient) { }

  getData():Observable<Idata[]>{
    return this.http.get<Idata[]>(this.dburl);
  }

  postData(data:any):Observable<Idata[]>{
    return this.http.post<Idata[]>(this.dburl, data);
  }

  updateData(id:any,data:any):Observable<Idata[]>{
    return this.http.put<Idata[]>(this.dburl+'/'+id+'/',data);
  }
  deleteData(id:any):Observable<any>{
    return this.http.delete(this.dburl+'/'+id);
  }
}
