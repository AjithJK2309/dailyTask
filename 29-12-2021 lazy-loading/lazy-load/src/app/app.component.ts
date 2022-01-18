import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazy-load';
  active : boolean = true;
  eleClass(){
    this.active = true;
  }
  collClass(){
    this.active = false;
  }
}
