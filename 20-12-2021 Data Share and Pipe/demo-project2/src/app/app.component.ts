import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'demo-project2';
  name :string = "";
  city : string = "";
  mobile : string = "";
  Arrobj : any [] = [] ;
  counter : number = 0;
  date : any = new Date();
  time : any;
  constructor()  {     }
  formValue(getValue : any){   
    
    if(this.name!="" && this.city!="" && this.mobile!="")
    {

      this.date=new Date();
      getValue.value.date = this.date;
      this.Arrobj.push(getValue.value);     
      console.log(this.Arrobj);
    }
    else{
      alert("Please Fill All Fields....");
    }   
  }
  getData(data : any){
        this.Arrobj.push(data);
  } 
}
