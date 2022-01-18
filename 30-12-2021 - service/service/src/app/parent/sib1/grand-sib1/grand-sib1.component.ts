import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-grand-sib1',
  templateUrl: './grand-sib1.component.html',
  styleUrls: ['./grand-sib1.component.css']
})
export class GrandSib1Component implements OnInit {
  obj :any ={
    city:'',
    state:''
  }
  constructor(private sibData : StoreService) { }

  ngOnInit(): void {
    this.sibData.sendData2().subscribe((data)=>{
      this.obj=data;
    })
  }

}
