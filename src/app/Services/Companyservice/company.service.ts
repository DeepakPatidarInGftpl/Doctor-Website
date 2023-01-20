import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient, private HttpService:HttpClientService) { }
  
  apiUrl = `${environment.api}`;

  getCompany():Observable<any>{
    let url = this.apiUrl+'/pv-api/company/';
    return this.HttpService.get(url,this.HttpService.headers)
  }

  postCompany(data:any):Observable<any>{
    let url = this.apiUrl+'/pv-api/company/';
    return this.HttpService.post(url,data,this.HttpService.headers)
  }

  updateCompany(data:any,id:any):Observable<any>{
    let url = this.apiUrl+'/pv-api/company/?id=';
    return this.HttpService.put(`${url}${id}`,data,this.HttpService.headers)
  }
  deleteCompany(id:any){
    let url = this.apiUrl+'/pv-api/company/?id=1';
    return this.HttpService.delete(`${url}/${id}`,this.HttpService.headers)
  }

 
}
