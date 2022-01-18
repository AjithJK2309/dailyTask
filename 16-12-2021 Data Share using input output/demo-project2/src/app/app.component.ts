import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-project2';
  name :string = "";
  city : string = "";
  mobile : string = "";
  Arrobj : any ;
  constructor()
  {

  }
  formValue(event:any){
    this.Arrobj = event.value;    
    console.log(this.Arrobj)
  }
}
