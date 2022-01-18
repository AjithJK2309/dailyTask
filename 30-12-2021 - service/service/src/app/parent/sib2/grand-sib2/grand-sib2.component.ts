import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-grand-sib2',
  templateUrl: './grand-sib2.component.html',
  styleUrls: ['./grand-sib2.component.css']
})
export class GrandSib2Component implements OnInit,OnChanges {
   
  obj : any ={name:'',
              age:null}
  constructor(private sib2:StoreService) { }

  ngOnInit(): void {
    this.sib2.sendData1().subscribe((data:any)=>{
      this.obj = data
      console.log(data)
    })
    
  }
  ngOnChanges(): void {
      
  }
  
}
