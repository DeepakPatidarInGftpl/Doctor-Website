import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { company } from 'src/app/interfaces/company';
import { environment } from 'src/environments/environment';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient, private HttpService: HttpClientService) { }
  edit = new BehaviorSubject<any>('')

  apiUrl = `${environment.api}`;

  editData(data: company) {
    this.edit.next(data);
    console.log(data);
    
    localStorage.setItem('editCompany', JSON.stringify(data))
    // localStorage.setItem('editCompany', JSON.stringify([data]))
  }

  getCompany(): Observable<company> {
    let url = this.apiUrl + '/pv-api/company/';
    return this.http.get<company>(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  getCompanyById(id: number):Observable<company>{
    let url = this.apiUrl + '/pv-api/company/?id=';
    return this.http.get<company>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  postCompany(data: company): Observable<any> {
    let url = this.apiUrl + '/pv-api/company/';
    return this.http.post(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  updateCompany(data: company, id: any): Observable<any> {
    let url = this.apiUrl + '/pv-api/company/?id=';
    return this.http.put(`${url}${id}`, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  deleteCompany(id: number) {
    let url = this.apiUrl + '/pv-api/company/?id=';
    return this.http.delete(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  countryList() {
    let url = this.apiUrl + '/country/';
    return this.http.get(url,{
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  stateList() {
    let url = this.apiUrl + '/state/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  deleteC(route: string, data:any) {
    var options = {
      body: { id: data },
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    };
  
    return this.http.request('delete', `${this.apiUrl}${route}`, options)
  } 
}
