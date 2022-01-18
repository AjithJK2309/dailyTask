import { Component, OnInit ,Output ,EventEmitter,ViewEncapsulation } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.css']

})
export class Sample2Component implements OnInit {
  @Output() childData = new EventEmitter<any>();
  name : string = "";
  city : string = "";
  mobile : string = "";
  date : Date = new Date();
  constructor() { }
  tog : boolean = false;
  ngOnInit(): void {
  }
  formToggle()
  {
    this.tog=!this.tog;
  }
  sendData(data : any)
  {
    this.date = new Date();
    data.date=this.date;
    if(this.name!="" && this.city!="" && this.mobile!=""){
    this.childData.emit(data);
    }
    else{
      alert("Please Fill All Fields....");
    }
  }
}
