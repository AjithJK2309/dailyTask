import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {
  tab : boolean = true 
 
  public user : any
  
  constructor(private cookie : CookieService,private router:Router) { }

  ngOnInit(): void {
      var token = localStorage.getItem('token')
      if(token==null){
        this.router.navigate([''])
      }
      
  }
  
  ngOnDestroy(): void {
      // localStorage.removeItem('token')
      // this.cookie.delete('token')
  }
}
