import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { AdsDynamic } from './ads.directive';

@Component({
  selector: 'app-dynamic-ads',
  templateUrl: './dynamic-ads.component.html',
  styleUrls: ['./dynamic-ads.component.css']
})
export class DynamicAdsComponent implements OnInit,AfterViewInit {
  @Input() data:any[]=[]
  Adsdata : any 
  i : number = -1
  @ViewChild (AdsDynamic,{static:true}) adsDynamic!:AdsDynamic
  constructor() {    
   }

  ngOnInit(): void {
    this.Adsdata = this.data
    
  }
  ngAfterViewInit() {
    this.loadComponent();
    this.getAds();
  }
  loadComponent(){
    
    this.i++
    let data=this.Adsdata[this.i]
    const ViewContainerRef = this.adsDynamic.vcr  
    ViewContainerRef.clear()

    const componentRef = ViewContainerRef.createComponent<any>(data.component)
    componentRef.instance.data = this.Adsdata[this.i]
    if(this.i==3){
      this.i=-1
    }
  }
  getAds(){
    setInterval(()=>{
      this.loadComponent();
    },2000)
  }
}
