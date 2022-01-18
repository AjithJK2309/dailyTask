import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  parentData:any

  constructor(public service: StoreService) { }

  ngOnInit(): void {

    this.service.reacevieMessage().subscribe((res:any)=>{
      this.parentData = res;

      
    })
  }


  

}
