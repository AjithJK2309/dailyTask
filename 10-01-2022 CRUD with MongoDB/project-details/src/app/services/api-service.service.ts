import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  UserData } from '../UserData';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http : HttpClient) { }

  createUser(data : any) : Observable<UserData>{
    return this.http.post<UserData>('http://localhost:4002/api/user/Create',data)
  }
  
  loginUser(data : any) : Observable<any>{
    return this.http.post<any>('http://localhost:4002/api/user/login',data)
  }

  getUser():Observable<any>{
    return this.http.get('http://localhost:4002/api/user/get')
  }

  createTask(data : any) : Observable<any>{
    return this.http.post('http://localhost:4002/api/task/createTask',data);
  }

  createProject(data : any) : Observable<any>{
    return this.http.post('http://localhost:4002/api/project/createProject',data);
  }
}
