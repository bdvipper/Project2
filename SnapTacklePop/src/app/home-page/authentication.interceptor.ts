import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { Observable } from 'rxjs';
import { APILogin } from './api-login';




@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req= req.clone({
        setHeaders: {
            Authorization: "Basic "+btoa('de5a192d-26bf-4948-9495-5cc786:MYSPORTSFEEDS')
        }
    });

    return next.handle(req);
  }
}