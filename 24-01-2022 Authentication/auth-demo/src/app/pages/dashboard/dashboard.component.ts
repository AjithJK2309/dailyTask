import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  imagePath : any
  imgURL : any
  form : any
  addField : any
  data : any
  imageFile : any
  imageUrl : any
  img : any
  constructor(private router:Router,private msg: NzMessageService,private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      this.router.navigate([''])
    }
    
    this.form = this.formBuilder.group({
      fields : this.formBuilder.array([])
    })
  }

  addUser(): FormGroup {
    return this.formBuilder.group({
      pp : new FormControl('',Validators.required),
      name : new FormControl('',Validators.required),
      email : new FormControl('',Validators.required),
      mobile : new FormControl('',Validators.required)
    })
  }
  users():FormArray{
    return this.form.get('fields') as FormArray;
  }
  createUser(){
    this.users().push(this.addUser())
  }
  onSubmit(){    
    
    this.data = this.form.value.fields
  }


  getFile(event:any,i:any){
    // var reader = new FileReader()  
    // let url
    // reader.readAsDataURL(event.target.files[0]);
    // reader.onload = (event: ProgressEvent) => {
    //   this.img = (<FileReader>event.target).result;
    // }   
    return event.target.files[0]
  }

  imageRead(file:any){
    // var reader = new FileReader()  
    // let url
    // reader.readAsDataURL(file);
    // reader.onload = (event: ProgressEvent) => {
    //   url = (<FileReader>event.target).result;
    // }    
    // return url    
  }
}
