import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-sib1',
  templateUrl: './sib1.component.html',
  styleUrls: ['./sib1.component.css']
})
export class Sib1Component implements OnInit {
  name:string = ""
  age : any 
  obj : any
  constructor(private ser:StoreService) { }

  ngOnInit(): void {
  }
  inputData(){
    this.obj={
      name:this.name,
      age:this.age
    }
    console.log(this.obj)
    this.ser.getData1(this.obj)
  }
}
