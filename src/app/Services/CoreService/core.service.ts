import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { employee } from 'src/app/interfaces/employee';
@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http: HttpClient) { }
  apiUrl = `${environment.api}`;
  public data:any
  empoyee={}
  getEmployee(): Observable<employee> {
    let url = this.apiUrl + '/pv-api/employee/';
    return this.http.get<employee>(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  getEmploye(){
    let url = this.apiUrl + '/pv-api/employee/';
   this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })   
    }).subscribe((res)=>{
      localStorage.setItem('employeeList', JSON.stringify(res));
      this.data=res
      console.log(this.data);
    })
  }
  getEmployeeById(id:number):Observable<employee>{
    let url = this.apiUrl+'/pv-api/employee/?id='
    return this.http.get<employee>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  addEmployee(data:employee){
    let url = this.apiUrl+'/pv-api/employee/';
    return this.http.post(url,data,{
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updateEmployee(data:employee,id:number){
    let url = this.apiUrl+'/pv-api/employee/?id=';
    return this.http.put(`${url}${id}`,data,{
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      }) 
    })
  }
  deleteEmployee(id: number) {
    let url = this.apiUrl + '/pv-api/employee/?id=';
    return this.http.delete(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  
  countryList() {
    let url = this.apiUrl + '/country/';
    return this.http.get(url)
  }
  stateList() {
    let url = this.apiUrl + '/state/';
    return this.http.get(url)
  }
  // Acount section
  accountType(){
    let url = this.apiUrl+'/pv-api/account_type/';
    return this.http.get(url)
  }
  getAccount(){
    let url = this.apiUrl+'/pv-api/account/';
    return this.http.get(url,{
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    }).subscribe((res)=>{
      console.log(res);
      localStorage.setItem('accountList', JSON.stringify(res));
    })
  }
  getAccountD(){
    let url = this.apiUrl+'/pv-api/account/';
    return this.http.get(url,{
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  getAccountById(id:number):Observable<any>{
    let url = this.apiUrl+'/pv-api/account/?id='
    return this.http.get<any>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  addAccount(data:any){
    let url = this.apiUrl+'/pv-api/account/';
    return this.http.post(url,data,{
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updateAccount(data:any,id:number){
    let url = this.apiUrl+'/pv-api/account/?id=';
    return this.http.put(`${url}${id}`,data,{
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      }) 
    })
  }
  deleteAccount(id: number) {
    let url = this.apiUrl + '/pv-api/account/?id=';
    return this.http.delete(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  //warehouse section
  getWarehouse(){
    let url = this.apiUrl+'/pv-api/warehouse/';
    return this.http.get(url,{
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    }).subscribe((res)=>{
      console.log(res);
      localStorage.setItem('warehouseList', JSON.stringify(res));
    })
  }

  getWareouseById(id:number):Observable<any>{
    let url = this.apiUrl+'/pv-api/warehouse/?id='
    return this.http.get<any>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  addWarehouse(data:any){
    let url = this.apiUrl+'/pv-api/warehouse/';
    return this.http.post(url,data,{
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updateWarehouse(data:any,id:number){
    let url = this.apiUrl+'/pv-api/warehouse/?id=';
    return this.http.put(`${url}${id}`,data,{
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      }) 
    })
  }
  deleteWarehouse(id: number) {
    let url = this.apiUrl + '/pv-api/warehouse/?id=';
    return this.http.delete(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
}
