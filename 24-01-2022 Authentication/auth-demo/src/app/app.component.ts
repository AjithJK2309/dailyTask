import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck {
  isCollapsed = false;
  dashboard : boolean
  constructor(private router:Router){
    this.dashboard = false
  }

  ngOnInit(): void {
      if(localStorage.getItem('token')){
        localStorage.removeItem('token')
        this.router.navigate(['sign-in'])
      }
  }
  ngDoCheck(): void {
    if(localStorage.getItem('token')){
      this.dashboard = true
    }
    else{
      this.dashboard = false
    }
  }
  logOut(){
    this.router.navigate(['']);
    localStorage.removeItem('token')
  }
}
