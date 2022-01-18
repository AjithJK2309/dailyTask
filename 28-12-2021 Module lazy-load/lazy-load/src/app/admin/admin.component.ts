import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public id:number = 5
  constructor(public router:Router,public route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  paraSend(){
    this.router.navigate(['adminpage',this.id],{relativeTo:this.route})
  }
}
