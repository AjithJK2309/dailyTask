import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad1',
  templateUrl: './ad1.component.html',
  styleUrls: ['./ad1.component.css']
})
export class Ad1Component implements OnInit {
  @Input() data : any[]=[]
  dataAd : any 
  constructor() { }

  ngOnInit(): void {
    this.dataAd = this.data
    console.log(this.dataAd)
  }

}
