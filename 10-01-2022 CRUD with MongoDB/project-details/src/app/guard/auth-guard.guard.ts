import { Injectable } from '@angular/core';
import { CanActivate , Router} from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate{
    token : any = localStorage.getItem('token')
    decoded : any
  constructor(private authService : AuthServiceService,private router : Router){}
  canActivate ()  : boolean{
    if(this.authService.tokenVerify()){
      if(this.token){
        this.decoded = jwt_decode(this.token);
      }
      var tokenRole : boolean = false
      if(this.decoded.role === 'Manager')
      {
        tokenRole = true
      }
      return tokenRole
    }
    else{
      return false
    }    
  }
}
