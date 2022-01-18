import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-list',
  templateUrl: './collections-list.component.html',
  styleUrls: ['./collections-list.component.css']
})
export class CollectionsListComponent implements OnInit {
  data:any[]=[
    {hasJob:true,name:'James',age:24,job:'Designer'},
    {hasJob:false,name:'Jill',age:26,job:'Engineer'},
    {hasJob:true,name:'Elyse',age:25,job:'Engineer'}
  ]
  constructor() { }

  ngOnInit(): void {
    console.warn("lazy loaded")
  }

}
