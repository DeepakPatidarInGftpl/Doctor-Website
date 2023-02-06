import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { employee } from 'src/app/interfaces/employee';
@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http: HttpClient) { }
  boundary = Math.random().toString().substr(2);


  public headerswithimage = new HttpHeaders({
    'Content-Type': 'multipart/form-data; boundary=' + this.boundary,
    'Authorization': 'Token ' + `${localStorage.getItem('token')}`
  });


  editThings = new BehaviorSubject(null);


  wareHouseSubject = new BehaviorSubject(null)

  ProdCategBehaveSub = new BehaviorSubject(null)

  subCategoriesGroup = new BehaviorSubject(null)


  apiUrl = `${environment.api}`;
  public data: any
  empoyee = {}
  getEmployee(): Observable<employee> {
    let url = this.apiUrl + '/pv-api/employee/';
    return this.http.get<employee>(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  getEmploye() {
    let url = this.apiUrl + '/pv-api/employee/';
    this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    }).subscribe((res) => {
      localStorage.setItem('employeeList', JSON.stringify(res));
      this.data = res
      console.log(this.data);
    })
  }
  getEmployeeById(id: number): Observable<employee> {
    let url = this.apiUrl + '/pv-api/employee/?id='
    return this.http.get<employee>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  addEmployee(data: employee) {
    let url = this.apiUrl + '/pv-api/employee/';
    return this.http.post(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updateEmployee(data: employee, id: number) {
    let url = this.apiUrl + '/pv-api/employee/?id=';
    return this.http.put(`${url}${id}`, data, {
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
  accountType() {
    let url = this.apiUrl + '/pv-api/account_type/';
    return this.http.get(url)
  }

  getAccount() {
    let url = this.apiUrl + '/pv-api/account/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    }).subscribe((res) => {
      console.log(res);
      localStorage.setItem('accountList', JSON.stringify(res));
    })
  }

  getAccountD() {
    let url = this.apiUrl + '/pv-api/account/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  getAccountById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/account/?id='
    return this.http.get<any>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  addAccount(data: any) {
    let url = this.apiUrl + '/pv-api/account/';
    return this.http.post(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updateAccount(data: any, id: number) {
    let url = this.apiUrl + '/pv-api/account/?id=';
    return this.http.put(`${url}${id}`, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  getProductCategory() {
    let url = this.apiUrl + '/pv-api/product-category/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    }).subscribe(res => {
      localStorage.setItem('prodCategories', JSON.stringify(res))
      this.ProdCategBehaveSub.next(null)
    })
  }

  addCategory(data) {
    let url = this.apiUrl + '/pv-api/product-category/';
    return this.http.post(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }


  editThisData(data) {
    this.editThings.next(data)
  }

  editHttp(data, id) {
    let url = this.apiUrl + '/pv-api/product-category/?id=';
    return this.http.put(`${url}${id}`, data, {
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

  addWarehouse(data): Observable<any> {
    let url = this.apiUrl + '/pv-api/warehouse/';
    return this.http.post<any>(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  updateWarehouse(data, id) {
    let url = this.apiUrl + '/pv-api/warehouse/?id=';
    return this.http.put(`${url}${id}`, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }


  getWarehouse() {
    let url = this.apiUrl + '/pv-api/warehouse/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
      .subscribe((res) => {
        console.log(res);
        localStorage.setItem('warehouseList', JSON.stringify(res));
        this.wareHouseSubject.next(null)
      })

  }

  subCategoryGroupGet() {
    let url = this.apiUrl + '/pv-api/subcategory_group/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    }).subscribe(res => {
      localStorage.setItem('subCategories', JSON.stringify(res))
      this.subCategoriesGroup.next(null)
    })
  }

  postCategoriesGroup(data) {
    let url = this.apiUrl + '/pv-api/subcategory_group/';
    return this.http.post(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + `${localStorage.getItem('token')}`
      })
    })
  }

}
