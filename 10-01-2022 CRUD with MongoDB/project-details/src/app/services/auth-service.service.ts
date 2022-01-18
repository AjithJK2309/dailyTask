import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private cookie : CookieService) { }

  tokenVerify() {
    let token= localStorage.getItem('token')
    return !!token
  }
  
}