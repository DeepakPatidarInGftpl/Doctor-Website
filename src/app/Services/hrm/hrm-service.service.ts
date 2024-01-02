import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HrmServiceService {

  constructor(private http: HttpClient) { }
  apiUrl = `${environment.api}`;

  // department 
  getDepartment(){
    let url =this.apiUrl+'/pv-api/department/';
    return this.http.get(url);
  }
  addDepartment(data:any){
    let url = this.apiUrl+'/pv-api/department/';
    return this.http.post(url,data);
  }
  getDepartmentById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/department/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  departmentIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/department/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  updateDepartment(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/department/?id=';
    return this.http.put(`${url}${id}`,data)
  }
  deleteDepartment(id: number) {
    let url = this.apiUrl + '/pv-api/department/?id=';
    return this.http.delete(`${url}${id}`)
  }
 // target 
 getTarget(){
  let url =this.apiUrl+'/pv-api/target/';
  return this.http.get(url);
}
addTarget(data:any){
  let url = this.apiUrl+'/pv-api/target/';
  return this.http.post(url,data);
}
getTargetById(id: number): Observable<any> {
  let url = this.apiUrl + '/pv-api/target/?id='
  return this.http.get<any>(`${url}${id}`)
}
TargetIsActive(id: any, data) {
  let url = this.apiUrl + '/pv-api/target/?id=';
  return this.http.patch(`${url}${id}`, data);
}
updateTarget(data: any, id: number) {
  let url = this.apiUrl + '/pv-api/target/?id=';
  return this.http.put(`${url}${id}`,data)
}
deleteTarget(id: number) {
  let url = this.apiUrl + '/pv-api/target/?id=';
  return this.http.delete(`${url}${id}`)
}
}

