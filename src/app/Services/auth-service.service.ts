
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, Subscription, tap, throwError } from 'rxjs';
import { HttpClientService } from './http-client.service';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth';
import { LogoapiInterFase } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  // user roles
  isLogin = false;
  roleAs: string;
  public scricption = new BehaviorSubject<boolean>(false)
  constructor(private http: HttpClient, private httpService: HttpClientService) {
 }
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
// get subsu
getSubscriptions() :Observable<any>{
    let url = this.apiurl + '/pv-api/is_activeERP/';
    return this.http.get<any>(url).pipe(catchError((err)=>this.Errorhandling(err)))
}


pageLoadData(){
  this.getSubscriptions().subscribe({
    next(value) {
      console.log(value);
    },
  })
}


  // get the token value when loged in
  getToken() {
    return localStorage.getItem('token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('token');
    // console.log(authToken);
    return authToken !== null ? true : false;
  }
  get isSubIn(): boolean {
    let authToken  = JSON.parse(localStorage.getItem('sp'));
    return (authToken) ;
  }
public HoldLogoData$  = new BehaviorSubject<LogoapiInterFase>(null)
  getLogoApi() : Observable<any>{
    return this.http.get<LogoapiInterFase>(this.apiurl+'/pv-api/company_configs/').pipe(
      tap((res:LogoapiInterFase)=>this.HoldLogoData$.next(res)),
      catchError(this.Errorhandling)
    )
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

  updateUserDeviceToken(token : any) {
    let url = this.apiurl + '/pv-api/user_device_token_update/';
    return this.httpService.post(url, token, new HttpHeaders({
      'Authorization': 'token ' + `${localStorage.getItem('token')}`
    }))
  }


  Errorhandling(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      throwError(()=>`An error occurred: ${err.error.message}`);
    } else {
      throwError(()=>`Backend returned code ${err.status}`);
    }
    return throwError(()=>'Please try again later.');
  }


  // Function to convert HEX to RGB
 hexToRgbConvter(hex: string): any | null {
  // Ensure the input is a valid hex code (e.g., #FFFFFF or FFFFFF)
  const cleanedHex = hex.replace(/^#/, '');

  // Validate the cleaned hex string (must be 3 or 6 characters long)
  if (![3, 6].includes(cleanedHex.length)) {
    console.error('Invalid HEX color format.');
    return null;
  }

  // Expand shorthand HEX to full form (e.g., 'FFF' to 'FFFFFF')
  const fullHex = cleanedHex.length === 3
    ? cleanedHex.split('').map(char => char + char).join('')
    : cleanedHex;

  // Parse the RGB values from the full hex string
  const r = parseInt(fullHex.substring(0, 2), 16);
  const g = parseInt(fullHex.substring(2, 4), 16);
  const b = parseInt(fullHex.substring(4, 6), 16);

  // Return the RGB color in a string format
  return {
    arr :[r, g, b],
    r ,
    g,
    b
  };
}

}
