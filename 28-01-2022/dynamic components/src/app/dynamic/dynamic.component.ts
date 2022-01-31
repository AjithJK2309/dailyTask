import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DataService } from '../dynamic-ads/Services/data.service';
import { DynamicChildComponent } from './dynamic-child/dynamic-child.component'

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
  @Input() inputData:any
  @ViewChild("ads",{read:ViewContainerRef}) ads!:ViewContainerRef
  data : any
  inputDatas : any 
  i : number = -1
  constructor(private vcr:ViewContainerRef,private cfr:ComponentFactoryResolver,private dataService:DataService) { 
    this.inputDatas  = this.inputData
  }

  ngOnInit(): void {
    // setInterval(()=>{
    //   let resolver = this.cfr.resolveComponentFactory(DynamicChildComponent)
    // let componentFactory = this.vcr.createComponent(resolver)
    // })
    setInterval(()=>{
      this.loadComponent()
    },2000)
  }
  loadComponent(){
    this.i++
   this.dataService.getData2().subscribe((data:any)=>{
      this.data = data[this.i]      
    })
    this.ads.clear()
    let resolver = this.cfr.resolveComponentFactory(this.data.component)
    let componentFactory : any = this.ads.createComponent(resolver)
    // componentFactory.instance.inputDatas = this.inputDatas
    
    if(this.i==1){
      this.i=-1
    }
    console.log(this.data);
    
  }

}
