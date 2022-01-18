import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'own-task';
  count : number = 0;
  addNum(addedNum:any)
  {
    this.count=addedNum;
  }
}
