import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from './Services/store.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'crud';
  public data$ : any[]
  constructor(private store:StoreService,private router:Router){

  }
  ngOnInit(): void {
    setInterval(()=>{
      this.store.getData().subscribe(res=>{
        this.data$ = res 
      })  
    },1000)
         
  }
  // editPage(val:any){
  //   this.router.navigate(['crud/create',val.id]);
  // }
  deleteDatas(val:any){
    this.store.deleteData(val).subscribe();
    
  }
}
