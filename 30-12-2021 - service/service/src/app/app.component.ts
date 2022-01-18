import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'service';
  count:any=0
  subs: Subscription = new Subscription;
  constructor(private router:Router){
    
  }
  ngOnInit(): void {
      const obs=new Observable(sub=>{
        setInterval(()=>{
          sub.next(this.count+=1);
        },1000)
      })
      this.subs=obs.subscribe(val=>{
        this.count=val
        console.log(this.count)
      })
      console.log(this.router.url);
  }
  navi(){
    this.router.navigate(['buttonclick'])
  }
  backbtn(){
    this.router.navigate(['../'])
  }
  ngOnDestroy(): void {
      this.subs.unsubscribe()
  }

}
