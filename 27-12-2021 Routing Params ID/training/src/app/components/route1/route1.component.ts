import { Component, OnInit } from '@angular/core';
import { Router , Params,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.css']
})
export class Route1Component implements OnInit {

  data : any = [
    {id:1,name:'Ajith',age:21,city:'chennai'},
    {id:2,name:'Kumar',age:22,city:'chennai'},
    {id:3,name:'vijay',age:23,city:'chennai'},
    {id:4,name:'pushpa',age:24,city:'chennai'},
    {id:5,name:'router',age:25,city:'chennai'}
  ]
  returnId : any;
  bool : boolean =false;
  constructor(private router:Router,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((param:Params)=>{
      console.log(param['id']);
      this.returnId = param['id']
    })
  }
  empData(empData:any){
    this.router.navigate(['/route2',empData.id]);
    this.bool = empData.id == this.returnId
  }
   

}
