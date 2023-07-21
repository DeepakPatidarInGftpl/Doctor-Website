
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClientService } from './http-client.service';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  // user roles
  isLogin = false;
  roleAs: string;
  constructor(private http: HttpClient, private httpService: HttpClientService) { }
  apiurl = `${environment.api}`;

  login(data: Auth): Observable<Auth> {
    let url = this.apiurl + '/pv-api/dlogin/';
    return this.httpService.post(url, data, this.httpService.headers)
  }
  logout() {
    let url = this.apiurl + '/pv-api/logout/';
    return this.httpService.post(url, null, new HttpHeaders({
      'Authorization': 'token ' + `${localStorage.getItem('token')}`
    }))
  }
  // get the token value when loged in
  getToken() {
    return localStorage.getItem('token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('token');
    console.log(authToken);
    return authToken !== null ? true : false;
  }

  isLogggedIn() {
    const loggedIn = localStorage.getItem('token');
    if (loggedIn == 'true')
      this.isLogin = true;
    else
      this.isLogin = false;
    return this.isLogin;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('token');
    if (removeToken == null) {
    }
  }
  // user roles
  getRole() {
    this.roleAs = localStorage.getItem('ROLE');
    return this.roleAs;
  }


  Errorhandling(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      console.error(err.error.message);
    } else {
      console.error(`Backend returned code ${err.status}`);
    }
    return throwError('Please try again later.');
  }
}
