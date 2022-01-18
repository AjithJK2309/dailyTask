import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() parentData = 0
  @Output() childData = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }
  addMethod(){
    if(this.parentData>=0 && this.parentData < 5)
    {
    this.parentData+=1;
    console.log(this.parentData);
    this.childData.emit(this.parentData);
    }
    else{
      alert("Can't add a Number");
    }
  }
  reduceMethod(){
    if(this.parentData>0 && this.parentData<=5)
    {
    this.parentData-=1;
    console.log(this.parentData);
    this.childData.emit(this.parentData);
    }
    else{
      alert("Can't Reduce a Number");
    }
  }

}
