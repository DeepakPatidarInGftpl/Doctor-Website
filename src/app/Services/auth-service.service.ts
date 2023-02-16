
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

  constructor(private http: HttpClient, private httpService: HttpClientService) { }



  apiurl = `${environment.api}`

  login(data: Auth): Observable<Auth> {
    let url = this.apiurl + '/pv-api/login/';
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

  doLogout() {
    let removeToken = localStorage.removeItem('token');
    if (removeToken == null) {
    }
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
