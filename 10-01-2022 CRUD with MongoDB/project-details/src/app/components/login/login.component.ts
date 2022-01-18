import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { CookieService} from 'ngx-cookie-service';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  form : FormGroup
  token : any
  decodedToken : any
  constructor(private router:Router,private apiService : ApiServiceService,private auth:AuthServiceService,private cookie : CookieService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(30),
        Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]),
      password : new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)])
    })
  }

  onSubmit(){
    let val = {
      email: this.form.value.email,
      password : this.form.value.password
    }
    
    this.apiService.loginUser(val).subscribe((res)=>{          
      localStorage.setItem('token',this.cookie.get('token'))
      this.router.navigate(['project',this.form.value.email])
    },err=>{
      alert('Invalid email or password...!')
    })    
  }

  ngOnDestroy(): void {
      
  }
}
