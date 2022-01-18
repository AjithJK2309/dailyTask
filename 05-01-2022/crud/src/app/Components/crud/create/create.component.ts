import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Idata } from 'src/app/Idata';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  myForm : FormGroup
  data$ : Observable<Idata>
  public id : string
  public editData : any
  constructor(private store:StoreService,private route:ActivatedRoute ,private router:Router) { }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      id:new FormControl('',Validators.required),
      name:new FormControl('',Validators.required),
      age:new FormControl('',Validators.required),
      city:new FormControl('',Validators.required)
    })
    this.route.params.subscribe(params=>{
      this.id = params['id']
    })
    this.store.getData().subscribe(sub=>{
      this.data$ = sub 
      this.data$.forEach((element)=>{
        if(element.id== this.id){
          this.editData = element
          console.log(this.editData)
          console.log('ok')
        }
      })    
    })

  }
  onSubmit(){
    console.log(this.myForm.value);
    this.data$.forEach((element)=>{
      if(element.id== this.id){
        this.store.updateData(this.id,this.myForm.value).subscribe()
        this.router.navigate(['']);
      }
      else{
        this.store.sendData(this.myForm.value).subscribe();
        this.router.navigate(['']);
      }
    })
    
    this.myForm.reset();
  }

}
