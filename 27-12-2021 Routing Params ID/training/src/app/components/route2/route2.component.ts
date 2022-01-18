import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css']
})
export class Route2Component implements OnInit {
  public empId : number = 0 ;
  id:any
  constructor(private router : Router,private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.params.subscribe((param:Params)=>{

       console.log(param);
       this.empId = param['id'];
      // this.id = param['id'];
    })
  }
  backBtn(){
    this.router.navigate(['route1',{id:this.empId}])
  }
  preEmp(){
    this.router.navigate([{id:this.empId-1}],{relativeTo:this.route})
  }
  nxtEmp(){
    this.router.navigate([{id:++this.empId}],{relativeTo:this.route})
  }
}
