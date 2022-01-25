import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http : HttpClient) { }

  postData(data:any):Observable<any>{
    console.log(data)
    return this.http.post<any>('http://localhost:4001/register',data);
  }

  getData():Observable<any>{
    return this.http.get('');
  }

  loginData(data:any,header:any):Observable<any>{
    return this.http.post<any>('http://localhost:4001/login',data,header)
  }
}
