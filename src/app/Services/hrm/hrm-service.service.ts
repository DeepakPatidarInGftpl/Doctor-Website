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
  getDepartment() {
    let url = this.apiUrl + '/pv-api/department/';
    return this.http.get(url);
  }
  addDepartment(data: any) {
    let url = this.apiUrl + '/pv-api/department/';
    return this.http.post(url, data);
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
    return this.http.put(`${url}${id}`, data)
  }
  deleteDepartment(id: number) {
    let url = this.apiUrl + '/pv-api/department/?id=';
    return this.http.delete(`${url}${id}`)
  }
  // target 
  getTarget() {
    let url = this.apiUrl + '/pv-api/target/';
    return this.http.get(url);
  }
  addTarget(data: any) {
    let url = this.apiUrl + '/pv-api/target/';
    return this.http.post(url, data);
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
    return this.http.put(`${url}${id}`, data)
  }
  deleteTarget(id: number) {
    let url = this.apiUrl + '/pv-api/target/?id=';
    return this.http.delete(`${url}${id}`)
  }
  // attendance
  // target 
  getAttendance() {
    let url = this.apiUrl + '/pv-api/attendance/';
    return this.http.get(url);
  }
  addAttendance(data: any) {
    let url = this.apiUrl + '/pv-api/attendance/';
    return this.http.post(url, data);
  }
  getAttendanceById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/attendance/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  AttendanceIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/attendance/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  updateAttendance(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/attendance/?id=';
    return this.http.put(`${url}${id}`, data)
  }
  deleteAttendance(id: number) {
    let url = this.apiUrl + '/pv-api/attendance/?id=';
    return this.http.delete(`${url}${id}`)
  }

  getIncentiveLedger() {
    let url = this.apiUrl + '/pv-api/incentive-ledger/';
    return this.http.get(url)
  }

  // incentive ledger employee
  getIncentiveLedgerEmployee(employee_id: any, from_date: any,to_date: any): Observable<any> {
    let url = this.apiUrl + '/pv-api/calculate-incentive/';
    const queryParams: any[] = [];
    if (employee_id) {
      queryParams.push(`employee_id=${employee_id}`);
    }
    if (from_date) {
      queryParams.push(`from_date=${from_date}`);
    }
    if (to_date) {
      queryParams.push(`to_date=${to_date}`);
    }
    if (queryParams.length > 0) {
      url += '?' + queryParams.join('&');
    }
    return this.http.get<any>(url);
  }

  getLoyalPoints(customerId:any) {
    let url = this.apiUrl + '/pv-api/loyalty-points/?customer_id=';
    return this.http.get(`${url}${customerId}`)
  }

  //membership
  
  getMembership() {
    let url = this.apiUrl + '/pv-api/membership/';
    return this.http.get(url);
  }
  addMembership(data: any) {
    let url = this.apiUrl + '/pv-api/membership/';
    return this.http.post(url, data);
  }
  getMembershipById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/membership/?id='
    return this.http.get<any>(`${url}${id}`)
  }
  MembershipIsActive(id: any, data) {
    let url = this.apiUrl + '/pv-api/membership/?id=';
    return this.http.patch(`${url}${id}`, data);
  }
  updateMembership(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/membership/?id=';
    return this.http.put(`${url}${id}`, data)
  }
  deleteMembership(id: number) {
    let url = this.apiUrl + '/pv-api/membership/?id=';
    return this.http.delete(`${url}${id}`)
  }

}

