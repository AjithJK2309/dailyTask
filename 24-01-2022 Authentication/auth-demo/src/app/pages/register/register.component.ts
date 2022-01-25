import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Service/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register = new FormGroup({})
  regex : RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  passwordMatch : Boolean
  constructor(private auth : AuthServiceService,private router:Router) {
    this.passwordMatch = false
   }

  ngOnInit(): void {
    this.register = new FormGroup({
      name : new FormControl('',Validators.required),
      email : new FormControl('Enter Email',[Validators.required,Validators.pattern(this.regex)]),
      password : new FormControl('',Validators.required),
      cpassword : new FormControl('',Validators.required)
    })
  }

  onSubmit(){
    var val = {
      name : this.register.value.name,
      email : this.register.value.email,
      password : this.register.value.password,
    }
    this.auth.postData(val).subscribe(res=>{
      this.router.navigate(['sign-in']);
    },err=>{
      alert("This email already taken..."+err)
    })
  }

  onChange(event:any){    
    if(this.register.value.password == event.target.value){
      this.passwordMatch = true
    }
    else{
      this.passwordMatch = false
    }
    }

}
