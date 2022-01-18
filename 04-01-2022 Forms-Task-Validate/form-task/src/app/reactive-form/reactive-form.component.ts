import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myForm = new FormGroup({})
  expirydate : String = ''
  constructor() {
    
   }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      'name':new FormControl('',[Validators.required,Validators.pattern(/^[A-Za-z0-9 ]+$/)]),
      'cardNumber':new FormControl('', [Validators.required,Validators.minLength(16),Validators.maxLength(16)]),
      'expirationDate':new FormControl('',[Validators.required,Validators.maxLength(5),Validators.minLength(5),Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)]),
      'securityCode':new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(3)])
    })
  }
  onSubmit(){
    console.log(this.myForm)
    console.log(this.myForm.value)
  }
  expiryDate(e:any){
      if(e.target.value.length===2){
        this.expirydate=e.target.value += '/';
      }
  }
  numOnly(e:any){
    let key =  e.which || e.keycode;
    if((key >= 48 && key <= 57)){
       return true
    }
    else{
      return false
    }
  }

}
