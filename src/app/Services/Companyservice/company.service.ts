import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient, private HttpService: HttpClientService) { }
  edit = new BehaviorSubject<any>('')

  apiUrl = `${environment.api}`;

  editData(data: any) {
    this.edit.next(data);
    console.log(data);
    
    localStorage.setItem('editCompany', JSON.stringify(data))
    // localStorage.setItem('editCompany', JSON.stringify([data]))
  }

  getCompany(): Observable<any> {
    let url = this.apiUrl + '/pv-api/company/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  getCompanyById(id: any) {
    let url = this.apiUrl + '/pv-api/company/?id=';
    return this.http.get(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  postCompany(data: any): Observable<any> {
    let url = this.apiUrl + '/pv-api/company/';
    return this.http.post(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  updateCompany(data: any, id: any): Observable<any> {
    let url = this.apiUrl + '/pv-api/company/?id=';
    return this.http.put(`${url}${id}`, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  deleteCompany(id: any) {
    let url = this.apiUrl + '/pv-api/company/?id=';
    return this.http.delete(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  countryList() {
    let url = this.apiUrl + '/country/';
    return this.HttpService.get(url, this.HttpService.headers)
  }
  stateList() {
    let url = this.apiUrl + '/state/';
    return this.HttpService.get(url, this.HttpService.headers)
  }
}
