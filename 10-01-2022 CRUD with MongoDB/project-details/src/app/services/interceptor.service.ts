import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  token : any = localStorage.getItem('token')
  constructor(private cookie : CookieService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if(this.token != null){
    //   req = req.clone({
    //     withCredentials: true ,
    //     headers: req.headers.set('auth-token',this.token)
    //   })
    // }
    req = req.clone({      
      withCredentials: true     
  });
  return next.handle(req);
  }
}
