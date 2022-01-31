import { Component, OnInit } from '@angular/core';
import { DataService } from './dynamic-ads/Services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dynamic-components';
  datas : any
  datas2 : any
  constructor(public service:DataService){}
  ngOnInit(): void {
    this.service.getData().subscribe((data:any)=>{
      this.datas = data
    }) 
    this.service.getData2().subscribe((data:any)=>{
      this.datas2 = data
    })
  }
}
