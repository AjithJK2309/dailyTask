import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-sib2',
  templateUrl: './sib2.component.html',
  styleUrls: ['./sib2.component.css']
})
export class Sib2Component implements OnInit {
  city:string=''
  state:string=''
  obj2 : any ={
    city:String,
    state:String
  }
  constructor(private sib2:StoreService) { }

  ngOnInit(): void {
  }
  inputData(){
    this.obj2={
      city:this.city,
      state:this.state
    }
    console.log(this.obj2)
    this.sib2.getData2(this.obj2)
  }

}
