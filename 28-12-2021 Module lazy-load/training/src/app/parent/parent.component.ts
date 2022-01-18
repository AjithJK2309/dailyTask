import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public message : any = 10 ;
  constructor(public store : StoreService) { }

  ngOnInit(): void {
    // this.message=this.store.mes;
    // console.log(this.message);
    // this.store.getMessage('Hello buddy');
    // this.message=this.store.mes;
    const obs$ = new Observable(obs => {
      obs.next(this.message);
      console.log("Console part ok");
      
    })
    obs$.subscribe(sub=>{
      this.message = sub 
      this.message *= 100        
      }
    )
  }

}
