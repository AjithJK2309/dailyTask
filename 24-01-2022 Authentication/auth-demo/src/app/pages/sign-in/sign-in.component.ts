import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Service/auth-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm = new FormGroup({})
  regex : RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  token : any

  constructor(private auth : AuthServiceService, private http : HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.signInForm =new FormGroup({
      email : new FormControl('Enter Email',[Validators.required,Validators.pattern(this.regex)]),
      password : new FormControl('',Validators.required)
    })
  }

  onSubmit(){
    var val={
      "email" : this.signInForm.value.email ,
      "password" :this.signInForm.value.password 
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Name': "Beast AK"
      })
    };
    
    this.auth.loginData(val,httpOptions).subscribe(res=>{
      localStorage.setItem('token',res)
      this.router.navigate(['/dashboard']);
    })    
  }
  

}
