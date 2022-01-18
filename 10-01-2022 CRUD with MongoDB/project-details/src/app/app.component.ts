import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,DoCheck,OnDestroy {
  title = 'project-details';
  token : boolean = true
  constructor(private router : Router,private cookie : CookieService){

  }
  ngOnInit(): void {
     if(localStorage.getItem('token')!=''){      
      localStorage.removeItem('token')
      this.cookie.delete('token')  
      this.token = true
    }
  }
  ngDoCheck(): void {
      this.loggedIn()
      
  }
  logOut(){
    // localStorage.removeItem('token');
    // this.cookie.delete('token')
    // this.router.navigate(['']);
    this.token = true
    window.location.reload()
  }
  loggedIn(){
    var token = localStorage.getItem('token')
    if(token==null){      
      this.token = true
    }
    else if(token!=''){        
      this.token = false
    }
  }
  ngOnDestroy(): void {
    
  }
}
 