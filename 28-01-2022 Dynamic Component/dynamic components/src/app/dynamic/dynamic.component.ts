import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { interval } from 'rxjs';
import { DynamicChildComponent } from './dynamic-child/dynamic-child.component'

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  constructor(private vcr:ViewContainerRef,private cfr:ComponentFactoryResolver) { }

  ngOnInit(): void {
    // setInterval(()=>{
      let resolver = this.cfr.resolveComponentFactory(DynamicChildComponent)
    let componentFactory = this.vcr.createComponent(resolver)
    // })
  }

}
