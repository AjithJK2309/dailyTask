import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-child',
  templateUrl: './dynamic-child.component.html',
  styleUrls: ['./dynamic-child.component.css']
})
export class DynamicChildComponent implements OnInit {
  @Input() inputData: any[]=[]
  data : any 
  constructor() { }

  ngOnInit(): void {
    this.data = this.inputData
    console.log(this.data)
  }

}
