import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { employee } from 'src/app/interfaces/employee';
import { Warehouse } from 'src/app/interfaces/warehouse';
import { Account } from 'src/app/interfaces/account';
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
  getAccountD():Observable<Account>{
    let url = this.apiUrl+'/pv-api/account/';
    return this.http.get<Account>(url,{
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  getAccountById(id:number):Observable<Account>{
    let url = this.apiUrl+'/pv-api/account/?id='
    return this.http.get<Account>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  addAccount(data:Account):Observable<Account>{
    let url = this.apiUrl+'/pv-api/account/';
    return this.http.post<Account>(url,data,{
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updateAccount(data:Account,id:number):Observable<Account>{
    let url = this.apiUrl+'/pv-api/account/?id=';
    return this.http.put<Account>(`${url}${id}`,data,{
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
  addWarehouse(data:Warehouse):Observable<Warehouse>{
    let url = this.apiUrl+'/pv-api/warehouse/';
    return this.http.post<Warehouse>(url,data,{
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updateWarehouse(data:Warehouse,id:number):Observable<Warehouse>{
    let url = this.apiUrl+'/pv-api/warehouse/?id=';
    return this.http.put<Warehouse>(`${url}${id}`,data,{
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

   //HSNCODE section
   getHSNcode(){
    let url = this.apiUrl+'/pv-api/hsn_code/';
    return this.http.get(url,{
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    }).subscribe((res)=>{
      console.log(res);
      localStorage.setItem('hsncodeList', JSON.stringify(res));
    })
  }

  getHSNcodeById(id:number):Observable<any>{
    let url = this.apiUrl+'/pv-api/hsn_code/?id='
    return this.http.get<any>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  addHSNcode(data:any):Observable<any>{
    let url = this.apiUrl+'/pv-api/hsn_code/';
    return this.http.post<any>(url,data,{
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updateHSNcode(data:any,id:number):Observable<any>{
    let url = this.apiUrl+'/pv-api/hsn_code/?id=';
    return this.http.put<any>(`${url}${id}`,data,{
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      }) 
    })
  }
  deleteHSNcode(id: number) {
    let url = this.apiUrl + '/pv-api/hsn_code/?id=';
    return this.http.delete(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  //product   
  getSubcategory():Observable<any>{
    let url = this.apiUrl+'/pv-api/product_subcategroy/';
    return this.http.get<any>(url,{
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  //units section

  getUnits(){
    let url = this.apiUrl+'/pv-api/unit/';
    return this.http.get(url,{
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    }).subscribe((res)=>{
      console.log(res);
      localStorage.setItem('unitList', JSON.stringify(res));
    })
  }

  getUnitsById(id:number):Observable<any>{
    let url = this.apiUrl+'/pv-api/unit/?id='
    return this.http.get<any>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  addUnits(data:any):Observable<any>{
    let url = this.apiUrl+'/pv-api/unit/';
    return this.http.post<any>(url,data,{
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updateUnits(data:any,id:number):Observable<any>{
    let url = this.apiUrl+'/pv-api/unit/?id=';
    return this.http.put<any>(`${url}${id}`,data,{
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      }) 
    })
  }
  deleteUnits(id: number) {
    let url = this.apiUrl + '/pv-api/unit/?id=';
    return this.http.delete(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
}
