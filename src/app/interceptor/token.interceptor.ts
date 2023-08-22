import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../Services/auth-service.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthServiceService) {
    // console.log(this.authService.getToken());
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.authService.getToken()) {
      request = request.clone({
        setHeaders: {
          Authorization: `token ${this.authService.getToken()}`
          // Authorization
        }
      });
    } else {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getToken()}`
          // Authorization
        }
      });
    }

    return next.handle(request)
  }
}
