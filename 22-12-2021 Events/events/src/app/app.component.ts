import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'events';
  testing:boolean = false 
  viewMode:any = 'map';
  b1:boolean = true
  b2:boolean = false
  b3:boolean = true

  tabFunc(event:any,event2:any,event3:any){

    console.log(event)

    if(event==false){
      this.b1 = true
      this.b2 = false
      this.b3 = false
    }
    else if(event2 ==false){
      this.b1 = false
      this.b2 = true
      this.b3 = false
    }
    else if(event3 ==false){
      this.b1 = false
      this.b2 = false
      this.b3 = true
    }
   
  
  }
  darkStyle={
    background:'black',
    color:'white',
    padding:'20px'
  }
  lightStyle={
    background:'white',
    color:'grey',
    padding:'20px'
  }
  style:any=this.lightStyle;

}
