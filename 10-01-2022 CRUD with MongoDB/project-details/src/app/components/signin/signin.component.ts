import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form : FormGroup 
  passMatch : boolean = false
  constructor(private router:Router,private apiService : ApiServiceService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      D_O_B:new FormControl('',[Validators.required]),
      department:new FormControl('',Validators.required),
      email:new FormControl('',
      [Validators.required,Validators.minLength(6),Validators.maxLength(30),
        Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]),
      phone_no:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
      c_password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]),
      role:new FormControl('',Validators.required),
    })
  }

  onSubmit(){
    
    var dateArray = this.form.value.D_O_B.split(',');
    var convertedDate = new Date(dateArray[2]+'-'+dateArray[1]+'-'+dateArray[0]);
    this.form.value.D_O_B = convertedDate

    let val={
      name: this.form.value.name,
      D_O_B: this.form.value.D_O_B,
      department: this.form.value.department,
      email: this.form.value.email,
      phone_no: this.form.value.phone_no,
      password: this.form.value.password,
      role: this.form.value.role,

    }

    this.apiService.createUser(val).subscribe(res=>{
      alert('Registration Successfull...');
      console.log(res);
      this.router.navigate(['login']);
    },err=>{
      alert('Registration is Failed ...!');
      console.log(err)
    })
  }
  passwordCheck(){
    let element = document.getElementById('c_password')
    if(this.form.value.password != this.form.value.c_password){
     element?.classList.add('ng-invalid');     
     element?.classList.remove('ng-valid');
    }
    else{
      element?.classList.add('ng-valid');
      element?.classList.remove('ng-invalid'); 
    }
  }

}
