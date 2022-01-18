import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { }
  arrayVal()
  {
    return [{id:1,name:'Ak',age:21},{id:1,name:'vicky',age:22},{id:1,name:'vijay',age:23}]
  }
}
