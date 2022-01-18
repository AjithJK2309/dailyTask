import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-crud',
  templateUrl: './simple-crud.component.html',
  styleUrls: ['./simple-crud.component.css']
})
export class SimpleCrudComponent implements OnInit {
  dataStore : any []=[]
  constructor() { }

  
  ngOnInit(): void {
    this.dataStore=[{name:'ajith',age:20,mobile:121121212,city:'chennai'},
    {name:'kumar',age:20,mobile:121121217,city:'chennai'},
    {name:'who',age:20,mobile:121121677,city:'chennai'}]
  }
  storeVal(val:any){
    console.log(val)
    this.dataStore.push(val.value);
    console.log(this.dataStore);
  }

}
