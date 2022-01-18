import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myForm = new FormGroup({}) 
  constructor() { }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      'firstname' : new FormControl(null,[Validators.minLength(3),Validators.maxLength(15)]),
      'lastname' : new FormControl(null),
      'email':new FormControl(null,[Validators.required,Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]),
      'city':new FormControl(null,[Validators.required,Validators.maxLength(15),Validators.minLength(2)]),
      'mobile':new FormControl(null,[Validators.required,Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)]),
      'country':new FormControl(null,[Validators.required,Validators.maxLength(10)])
    })
  }
  onSubmit(){
    console.log(this.myForm)
    console.log(this.myForm.valid )
  }
}
