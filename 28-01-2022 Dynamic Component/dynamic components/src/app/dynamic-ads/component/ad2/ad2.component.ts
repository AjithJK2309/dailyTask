import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad2',
  templateUrl: './ad2.component.html',
  styleUrls: ['./ad2.component.css']
})
export class Ad2Component implements OnInit {
  @Input() data:any
  dataAd : any
  constructor() { }

  ngOnInit(): void {
    this.dataAd = this.data
  }

}
