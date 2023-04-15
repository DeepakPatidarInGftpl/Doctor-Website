import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { employee } from 'src/app/interfaces/employee';
import { Warehouse } from 'src/app/interfaces/warehouse';
import { Account } from 'src/app/interfaces/account';
@Injectable({
  providedIn: 'root'
})
export class CoreService {
  employeeBehavior = new BehaviorSubject(null);
  accountBehavior = new BehaviorSubject(null);
  companyBehavior = new BehaviorSubject(null);
  subcategoryBehavior = new BehaviorSubject(null);
  brandBehavior = new BehaviorSubject(null);
  colorBehavior = new BehaviorSubject(null);
  sizeBehavior = new BehaviorSubject(null);
  taxBehavior = new BehaviorSubject(null);
  hsncodeBehavior = new BehaviorSubject(null);
  unitBehavior = new BehaviorSubject(null);
  unitConversionBehavior = new BehaviorSubject(null);
  variantBehavior = new BehaviorSubject(null);
  countryBehavior = new BehaviorSubject(null);
  stateBehavior = new BehaviorSubject(null);
  cityBehavior = new BehaviorSubject(null);
  featureBehavior = new BehaviorSubject(null);
  featureGroupBehavior = new BehaviorSubject(null);
  productListBehaviur = new BehaviorSubject(null);
  StaticPageBehaveSub = new BehaviorSubject(null)




  editThings = new BehaviorSubject(null);


  wareHouseSubject = new BehaviorSubject(null)

  ProdCategBehaveSub = new BehaviorSubject(null)

  subCategoriesGroup = new BehaviorSubject(null)



  constructor(private http: HttpClient) { }
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
    })
    // .subscribe((res) => {
    //   localStorage.setItem('employeeList', JSON.stringify(res));
    //   this.data = res
    //   console.log(this.data);
    //   this.employeeBehavior.next(null)
    // })
  }
  getEmployeeById(id: number): Observable<employee> {
    let url = this.apiUrl + '/pv-api/employee/?id='
    return this.http.get<employee>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  employeeIsActive(id:any,data){
    let url =this.apiUrl+'/pv-api/employee/?id=';
    return this.http.patch(`${url}${id}`,data);
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
    let url = this.apiUrl + '/country';
    return this.http.get(url, {
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
  getCategory() {
    let url = this.apiUrl + '/pv-api/product-category/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  categoryIsActive(id:any,data){
    let url =this.apiUrl+'/pv-api/product-category/?id=';
    return this.http.patch(`${url}${id}`,data);
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
    })
    // .subscribe((res) => {
    //   console.log(res);
    //   localStorage.setItem('accountList', JSON.stringify(res));
    //   this.accountBehavior.next(null)
    // })
  }
  getAccountD(): Observable<Account> {
    let url = this.apiUrl + '/pv-api/account/';
    return this.http.get<Account>(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  getAccountById(id: number): Observable<Account> {
    let url = this.apiUrl + '/pv-api/account/?id='
    return this.http.get<Account>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  accountIsActive(id:any,data){
    let url =this.apiUrl+'/pv-api/account/?id=';
    return this.http.patch(`${url}${id}`,data);
  }
  addAccount(data: Account): Observable<Account> {
    let url = this.apiUrl + '/pv-api/account/';
    return this.http.post<Account>(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updateAccount(data: Account, id: number): Observable<Account> {
    let url = this.apiUrl + '/pv-api/account/?id=';
    return this.http.put<Account>(`${url}${id}`, data, {
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


  //HSNCODE section
  getHSNcode() {
    let url = this.apiUrl + '/pv-api/hsn_code/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    }).subscribe((res) => {
      console.log(res);
      localStorage.setItem('hsncodeList', JSON.stringify(res));
      this.hsncodeBehavior.next(null)
    })
  }
  getHSNCode() {
    let url = this.apiUrl + '/pv-api/hsn_code/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  getHSNcodeById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/hsn_code/?id='
    return this.http.get<any>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  hsncodeIsActive(id:any,data){
    let url =this.apiUrl+'/pv-api/hsn_code/?id=';
    return this.http.patch(`${url}${id}`,data);
  }

  addHSNcode(data: any): Observable<any> {
    let url = this.apiUrl + '/pv-api/hsn_code/';
    return this.http.post<any>(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updateHSNcode(data: any, id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/hsn_code/?id=';
    return this.http.put<any>(`${url}${id}`, data, {
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

  //productSubcategory
  getSubcategory(): Observable<any> {
    let url = this.apiUrl + '/pv-api/product_subcategroy/';
    return this.http.get<any>(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  subCategoryIsActive(id:any,data){
    let url =this.apiUrl+'/pv-api/product_subcategroy/?id=';
    return this.http.patch(`${url}${id}`,data);
  }
  //units section

  getUnits() {
    let url = this.apiUrl + '/pv-api/unit/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    }).subscribe((res) => {
      console.log(res);
      localStorage.setItem('unitList', JSON.stringify(res));
      this.unitBehavior.next(null)
    })
  }
  getUnit(): Observable<any> {
    let url = this.apiUrl + '/pv-api/unit/'
    return this.http.get<any>(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
 
  getUnitsById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/unit/?id='
    return this.http.get<any>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  unitIsActive(id:any,data){
    let url =this.apiUrl+'/pv-api/unit/?id=';
    return this.http.patch(`${url}${id}`,data);
  }

  addUnits(data: any): Observable<any> {
    let url = this.apiUrl + '/pv-api/unit/';
    return this.http.post<any>(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updateUnits(data: any, id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/unit/?id=';
    return this.http.put<any>(`${url}${id}`, data, {
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


  // unitconservation section

  getUnitConversion() {
    let url = this.apiUrl + '/pv-api/unitconservation/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    }).subscribe((res) => {
      console.log(res);
      localStorage.setItem('unitconservationList', JSON.stringify(res));
      this.unitConversionBehavior.next(null)
    })
  }
  getunitconversion(): Observable<any> {
    let url = this.apiUrl + '/pv-api/unitconservation/'
    return this.http.get<any>(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  getUnitConversionById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/unitconservation/?id='
    return this.http.get<any>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  unitConversionIsActive(id:any,data){
    let url =this.apiUrl+'/pv-api/unitconservation/?id=';
    return this.http.patch(`${url}${id}`,data);
  }

  addUnitConversion(data: any): Observable<any> {
    let url = this.apiUrl + '/pv-api/unitconservation/';
    return this.http.post<any>(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updateUnitConversion(data: any, id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/unitconservation/?id=';
    return this.http.put<any>(`${url}${id}`, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  deleteUnitConversion(id: number) {
    let url = this.apiUrl + '/pv-api/unitconservation/?id=';
    return this.http.delete(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  // product_subcategroy
  getProductSubcategory() {
    let url = this.apiUrl + '/pv-api/product_subcategroy/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    }).subscribe((res) => {
      console.log(res);
      localStorage.setItem('productsubcategroyList', JSON.stringify(res));
      this.subcategoryBehavior.next(null)
    })
  }
  getproductSubcategory() {
    let url = this.apiUrl + '/pv-api/product_subcategroy/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  getProductSubcategoryById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/product_subcategroy/?id='
    return this.http.get<any>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  addProductSubcategory(data: any): Observable<any> {
    let url = this.apiUrl + '/pv-api/product_subcategroy/';
    return this.http.post<any>(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updateProductSubcategory(data: any, id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/product_subcategroy/?id=';
    return this.http.put<any>(`${url}${id}`, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  deleteProductSubcategory(id: number) {
    let url = this.apiUrl + '/pv-api/product_subcategroy/?id=';
    return this.http.delete(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  // brands
  getbrand() {
    let url = this.apiUrl + '/pv-api/brands/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    }).subscribe((res) => {
      console.log(res);
      localStorage.setItem('brandsList', JSON.stringify(res));
      this.brandBehavior.next(null)
    })
  }
  getBrand(): Observable<any> {
    let url = this.apiUrl + '/pv-api/brands/'
    return this.http.get<any>(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  getbrandById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/brands/?id='
    return this.http.get<any>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  brandIsActive(id:any,data){
    let url =this.apiUrl+'/pv-api/brands/?id=';
    return this.http.patch(`${url}${id}`,data);
  }
  addbrand(data: any): Observable<any> {
    let url = this.apiUrl + '/pv-api/brands/';
    return this.http.post<any>(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updatebrand(data: any, id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/brands/?id=';
    return this.http.put<any>(`${url}${id}`, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  deletebrand(id: number) {
    let url = this.apiUrl + '/pv-api/brands/?id=';
    return this.http.delete(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  // color
  getcolor() {
    let url = this.apiUrl + '/pv-api/colour/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    }).subscribe((res) => {
      console.log(res);
      localStorage.setItem('colorsList', JSON.stringify(res));
      this.colorBehavior.next(null)
    })
  }
  getColor(): Observable<any> {
    let url = this.apiUrl + '/pv-api/colour/'
    return this.http.get<any>(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  getcolorById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/colour/?id='
    return this.http.get<any>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  colorIsActive(id:any,data){
    let url =this.apiUrl+'/pv-api/colour/?id=';
    return this.http.patch(`${url}${id}`,data);
  }
  addcolor(data: any): Observable<any> {
    let url = this.apiUrl + '/pv-api/colour/';
    return this.http.post<any>(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updatecolor(data: any, id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/colour/?id=';
    return this.http.put<any>(`${url}${id}`, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  deletecolor(id: number) {
    let url = this.apiUrl + '/pv-api/colour/?id=';
    return this.http.delete(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }


  // size section
  getsize() {
    let url = this.apiUrl + '/pv-api/size/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    }).subscribe((res) => {
      console.log(res);
      localStorage.setItem('sizesList', JSON.stringify(res));
      this.sizeBehavior.next(null)
    })
  }
  getSize(): Observable<any> {
    let url = this.apiUrl + '/pv-api/size/'
    return this.http.get<any>(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  getsizeById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/size/?id='
    return this.http.get<any>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  sizeIsActive(id:any,data){
    let url =this.apiUrl+'/pv-api/size/?id=';
    return this.http.patch(`${url}${id}`,data);
  }
  addsize(data: any): Observable<any> {
    let url = this.apiUrl + '/pv-api/size/';
    return this.http.post<any>(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updatesize(data: any, id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/size/?id=';
    return this.http.put<any>(`${url}${id}`, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  deletesize(id: number) {
    let url = this.apiUrl + '/pv-api/size/?id=';
    return this.http.delete(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  //tax section
  gettax() {
    let url = this.apiUrl + '/pv-api/tax/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    }).subscribe((res) => {
      console.log(res);
      localStorage.setItem('taxList', JSON.stringify(res));
      this.taxBehavior.next(null)
    })
  }
  gettaxd(): Observable<any> {
    let url = this.apiUrl + '/pv-api/tax/'
    return this.http.get<any>(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  gettaxById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/tax/?id='
    return this.http.get<any>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  taxIsActive(id:any,data){
    let url =this.apiUrl+'/pv-api/tax/?id=';
    return this.http.patch(`${url}${id}`,data);
  }
  addtax(data: any): Observable<any> {
    let url = this.apiUrl + '/pv-api/tax/';
    return this.http.post<any>(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updatetax(data: any, id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/tax/?id=';
    return this.http.put<any>(`${url}${id}`, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  deletetax(id: number) {
    let url = this.apiUrl + '/pv-api/tax/?id=';
    return this.http.delete(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  //fuature_group section
  getFuature_group() {
    let url = this.apiUrl + '/pv-api/fuature_group/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    }).subscribe((res) => {
      console.log(res);
      localStorage.setItem('fuature_groupList', JSON.stringify(res));
      this.featureGroupBehavior.next(null)
    })
  }
  getFuature_groupD(): Observable<any> {
    let url = this.apiUrl + '/pv-api/fuature_group/'
    return this.http.get<any>(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  getFuature_groupById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/fuature_group/?id='
    return this.http.get<any>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  addFuature_group(data: any): Observable<any> {
    let url = this.apiUrl + '/pv-api/fuature_group/';
    return this.http.post<any>(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updateFuature_group(data: any, id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/fuature_group/?id=';
    return this.http.put<any>(`${url}${id}`, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  deleteFuature_group(id: number) {
    let url = this.apiUrl + '/pv-api/fuature_group/?id=';
    return this.http.delete(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }


  //fuature section
  getFeature() {
    let url = this.apiUrl + '/pv-api/feature/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    }).subscribe((res) => {
      console.log(res);
      localStorage.setItem('featureList', JSON.stringify(res));
      this.featureBehavior.next(null)
    })
  }
  getfeature() {
    let url = this.apiUrl + '/pv-api/feature/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  getFeatureById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/feature/?id='
    return this.http.get<any>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
 featureIsActive(id:any,data){
    let url =this.apiUrl+'/pv-api/feature/?id=';
    return this.http.patch(`${url}${id}`,data);
  }

  addFeature(data: any): Observable<any> {
    let url = this.apiUrl + '/pv-api/feature/';
    return this.http.post<any>(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updateFeature(data: any, id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/feature/?id=';
    return this.http.put<any>(`${url}${id}`, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  deleteFeature(id: number) {
    let url = this.apiUrl + '/pv-api/feature/?id=';
    return this.http.delete(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  // variant
  getVariant() {
    let url = this.apiUrl + '/pv-api/variant/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    }).subscribe((res) => {
      console.log(res);
      localStorage.setItem('variantList', JSON.stringify(res));
      this.variantBehavior.next(null)
    })
  }
  getVariantd(): Observable<any> {
    let url = this.apiUrl + '/pv-api/variant/'
    return this.http.get<any>(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  getVariantById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/variant/?id='
    return this.http.get<any>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  variantIsActive(id:any,data){
    let url =this.apiUrl+'/pv-api/variant/?id=';
    return this.http.patch(`${url}${id}`,data);
  }
  addVariant(data: any): Observable<any> {
    let url = this.apiUrl + '/pv-api/variant/';
    return this.http.post<any>(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updateVariant(data: any, id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/variant/?id=';
    return this.http.put<any>(`${url}${id}`, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  deleteVariant(id: number) {
    let url = this.apiUrl + '/pv-api/variant/?id=';
    return this.http.delete(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  //subcategory_group section

  getSubcategoryGroup() {
    let url = this.apiUrl + '/pv-api/subcategory_group/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  getSubcategoryGroupById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/subcategory_group/?id='
    return this.http.get<any>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  addSubcategoryGroup(data: any): Observable<any> {
    let url = this.apiUrl + '/pv-api/subcategory_group/';
    return this.http.post<any>(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updateSubcategoryGroup(data: any, id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/subcategory_group/?id=';
    return this.http.put<any>(`${url}${id}`, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  deleteSubcategoryGroup(id: number) {
    let url = this.apiUrl + '/pv-api/subcategory_group/?id=';
    return this.http.delete(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  //product-category
  getProductcategory(): Observable<any> {
    let url = this.apiUrl + '/pv-api/product-category/'
    return this.http.get<any>(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  //country section

  getCountry() {
    let url = this.apiUrl + '/country/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
    // .subscribe((res) => {
    //   console.log(res);
    //   localStorage.setItem('countryList', JSON.stringify(res));
    //   this.countryBehavior.next(null)
    // })
  }
  getCountryById(id: number): Observable<any> {
    let url = this.apiUrl + '/country/?id='
    return this.http.get<any>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  countryIsActive(id:any,data){
    let url =this.apiUrl+'/country/?id=';
    return this.http.patch(`${url}${id}`,data);
  }
  addCountry(data: any): Observable<any> {
    let url = this.apiUrl + '/country/';
    return this.http.post<any>(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updateCountry(data: any, id: number): Observable<any> {
    let url = this.apiUrl + '/country/?id=';
    return this.http.put<any>(`${url}${id}`, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  deleteCountry(id: number) {
    let url = this.apiUrl + '/country/?id=';
    return this.http.delete(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  // state section
  getstate() {
    let url = this.apiUrl + '/state/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
    // .subscribe((res) => {
    //   console.log(res);
    //   localStorage.setItem('stateList', JSON.stringify(res));
    //   this.stateBehavior.next(null)
    // })
  }
  getstateD(): Observable<any> {
    let url = this.apiUrl + '/state/'
    return this.http.get<any>(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  getstateById(id: number): Observable<any> {
    let url = this.apiUrl + '/state/?id='
    return this.http.get<any>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  stateIsActive(id:any,data){
    let url =this.apiUrl+'/state/?id=';
    return this.http.patch(`${url}${id}`,data);
  }
  addstate(data: any): Observable<any> {
    let url = this.apiUrl + '/state/';
    return this.http.post<any>(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updatestate(data: any, id: number): Observable<any> {
    let url = this.apiUrl + '/state/?id=';
    return this.http.put<any>(`${url}${id}`, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  deletestate(id: number) {
    let url = this.apiUrl + '/state/?id=';
    return this.http.delete(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  // city section
  getcity() {
    let url = this.apiUrl + '/city/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
    // .subscribe((res) => {
    //   console.log(res);
    //   localStorage.setItem('cityList', JSON.stringify(res));
    //   this.cityBehavior.next(null)
    // })
  }
  getCity() {
    let url = this.apiUrl + '/city/';
    return this.http.get(url)
  }
  getcityById(id: number): Observable<any> {
    let url = this.apiUrl + '/city/?id='
    return this.http.get<any>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  cityIsActive(id:any,data){
    let url =this.apiUrl+'/city/?id=';
    return this.http.patch(`${url}${id}`,data);
  }
  addcity(data: any): Observable<any> {
    let url = this.apiUrl + '/city/';
    return this.http.post<any>(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updatecity(data: any, id: number): Observable<any> {
    let url = this.apiUrl + '/city/?id=';
    return this.http.put<any>(`${url}${id}`, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  deletecity(id: number) {
    let url = this.apiUrl + '/city/?id=';
    return this.http.delete(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  // /pv-api/product/
  getProduct() {
    let url = this.apiUrl + '/pv-api/product/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    }).subscribe((res) => {
      console.log(res);
      localStorage.setItem('productList', JSON.stringify(res));
      this.productListBehaviur.next(null)
    })
  }
  getProducts() {
    let url = this.apiUrl + '/pv-api/product/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  getProductById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/product/?id='
    return this.http.get<any>(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  productIsActive(id:any,data){
    let url =this.apiUrl+'/pv-api/product/?id=';
    return this.http.patch(`${url}${id}`,data);
  }

  addProduct(data: any): Observable<any> {
    let url = this.apiUrl + '/pv-api/product/';
    return this.http.post<any>(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updateProduct(data: any, id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/product/?id=';
    return this.http.put<any>(`${url}${id}`, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  deleteProduct(id: number) {
    let url = this.apiUrl + '/pv-api/product/?id=';
    return this.http.delete(`${url}${id}`, {
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
  }
  warehouseIsActive(id:any,data){
    let url =this.apiUrl+'/pv-api/warehouse/?id=';
    return this.http.patch(`${url}${id}`,data);
  }
  deleteWarehouse(id: number) {
    let url = this.apiUrl + '/pv-api/warehouse/?id=';
    return this.http.delete(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  getwarehouseById(id: number): Observable<any> {
    let url = this.apiUrl + '/pv-api/warehouse/?id='
    return this.http.get<any>(`${url}${id}`, {
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
  getProductCategor() {
    let url = this.apiUrl + '/pv-api/product-category/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
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

  deleteProductCateg(id) {
    let url = this.apiUrl + '/pv-api/product-category/?id=';
    return this.http.delete(`${url}${id}`, {
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



  subCategory() {
    let url = this.apiUrl + '/pv-api/product_subcategroy/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  getFeatureGroup() {
    let url = this.apiUrl + '/pv-api/fuature_group/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + `${localStorage.getItem('token')}`
      })
    })
  }
featureGroupIsActive(id:any,data){
    let url =this.apiUrl+'/pv-api/fuature_group/?id=';
    return this.http.patch(`${url}${id}`,data);
  }
  // getCategory() {
  //   let url = this.apiUrl + '/pv-api/product-category/';
  //   return this.http.get(url, {
  //     headers: new HttpHeaders({
  //       'Authorization': 'Token ' + `${localStorage.getItem('token')}`
  //     })
  //   })
  // }



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


  getSubCategoryGroup() {
    let url = this.apiUrl + '/pv-api/subcategory_group/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
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

  deleteSubCategGroup(id) {
    let url = this.apiUrl + '/pv-api/subcategory_group/?id=';
    return this.http.delete(`${url}${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }


  editSubCategoryGroup(data, id) {
    let url = this.apiUrl + '/pv-api/subcategory_group/?id='
    return this.http.put(`${url}${id}`, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }

  // static pages
  getStaicPages() {
    let url = this.apiUrl + '/pv-api/static_pages/';
    return this.http.get(url, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
    // .subscribe(res => {
    //   localStorage.setItem('staticPages', JSON.stringify(res))
    //   this.StaticPageBehaveSub.next(null)
    // })
  }
  getStaticPageBySlug(slug: any) {
    let url = this.apiUrl + '/pv-api/static_detail_pages/?slug='
    return this.http.get<any>(`${url}${slug}`)
  }
  staticPageIsActive(slug:any,data){
    let url =this.apiUrl+'/pv-api/static_pages/?slug=';
    return this.http.patch(`${url}${slug}`,data);
  }
  addStatic(data) {
    let url = this.apiUrl + '/pv-api/static_pages/';
    return this.http.post(url, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  updateStaticPage(data: any, slug: any): Observable<any> {
    let url = this.apiUrl + '/pv-api/static_pages/?slug=';
    return this.http.put<any>(`${url}${slug}`, data, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  deleteStaticPage(slug: number) {
    let url = this.apiUrl + '/pv-api/static_pages/?slug=';
    return this.http.delete(`${url}${slug}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      })
    })
  }
  // /pv-api/footer_features/
  getFooterFeature() {
    let url = this.apiUrl + '/pv-api/footer_features/';
    return this.http.get(url)
  }
  getFooterFeatureById(id) {
    let url = this.apiUrl + '/pv-api/footer_features/?id=';
    return this.http.get(`${url}${id}`)
  }
  footerIsActive(id:any,data){
    let url =this.apiUrl+'/pv-api/footer_features/?id=';
    return this.http.patch(`${url}${id}`,data);
  }
  addFooterFeature(data) {
    let url = this.apiUrl + '/pv-api/footer_features/';
    return this.http.post(url, data);
  }
  updateFooterFeature(data: any, id: any): Observable<any> {
    let url = this.apiUrl + '/pv-api/footer_features/?id=';
    return this.http.put<any>(`${url}${id}`, data)
  }
  deleteFooterFeature(id: number) {
    let url = this.apiUrl + '/pv-api/footer_features/?id=';
    return this.http.delete(`${url}${id}`)
  }
  // fnancial year
  getFinancialYear() {
    let url = this.apiUrl + '/pv-api/financial_year/';
    return this.http.get(url)
  }
  getFinancialYearById(id) {
    let url = this.apiUrl + '/pv-api/financial_year/?id=';
    return this.http.get(`${url}${id}`)
  }
  financialYearIsActive(id:any,data){
    let url =this.apiUrl+'/pv-api/financial_year/?id=';
    return this.http.patch(`${url}${id}`,data);
  }
  addFinancialYear(data) {
    let url = this.apiUrl + '/pv-api/financial_year/';
    return this.http.post(url, data);
  }
  updateFinancialYear(data: any, id: any): Observable<any> {
    let url = this.apiUrl + '/pv-api/financial_year/?id=';
    return this.http.put<any>(`${url}${id}`, data);
  }
  deleteFinancialYear(id: number) {
    let url = this.apiUrl + '/pv-api/financial_year/?id=';
    return this.http.delete(`${url}${id}`);
  }
  getCurrency() {
    let url = this.apiUrl + '/pv-api/currency/';
    return this.http.get(url);
  }
  currencyIsActive(id:any,data){
    let url =this.apiUrl+'/pv-api/currency/?id=';
    return this.http.patch(`${url}${id}`,data);
  }

  // profile
  getProfile() {
    let url = this.apiUrl + '/pv-api/profile/';
    return this.http.get(url);
  }

  //category wise subcategory
  getSubcategoryByCategory(id: any) {
    let url = this.apiUrl + '/pv-api/category_wise_subcategory/?category_id=';
    return this.http.get<any>(`${url}${id}`);
  }

  //brands wise subcategory
  // getBrandBySubcategory(id: any) {

  //   let url = this.apiUrl + '/pv-api/brands_wise_subcategory/?subcategory_id=';
  //   return this.http.get<any>(`${url}${id}`);
  // }
  //country wise state
  getStateByCountryId(id: any) {
    let url = this.apiUrl + '/state/?country_id=';
    return this.http.get<any>(`${url}${id}`);
  }
  // state wise city
  getCityByStateId(id: any) {
    let url = this.apiUrl + '/city/?state_id=';
    return this.http.get<any>(`${url}${id}`);
  }
  //category wise subcatGroup
  getSubcatGraoupByCategory(id: any) {
    let url = this.apiUrl + '/pv-api/category_wise_sub_category_group/?category_id=';
    return this.http.get<any>(`${url}${id}`);
  }
  //subcatGroup wise subcategory
  getSubcategoryBySubcatGroup(id: any) {
    let url = this.apiUrl + '/pv-api/subcategory_group_wise_subcategory/?sub_category_group_id=';
    return this.http.get<any>(`${url}${id}`);
  }
  // subcategory wise brands
  getBrandBySubcategory(id: any) {
    let url = this.apiUrl + '/pv-api/subcategory_wise_brands/?subcategory_id=';
    return this.http.get(`${url}${id}`)
  }
  subcategoryGroupIsActive(id:any,data){
    let url =this.apiUrl+'/pv-api/subcategory_group/?id=';
    return this.http.patch(`${url}${id}`,data);
  }
  // tax slab
  getTaxSlab(){
    let url = this.apiUrl+'/pv-api/tax_slabs/';
    return this.http.get(url);
  }
  getTaxSlabById(id:any){
    let url = this.apiUrl+'/pv-api/tax_slabs/?id=';
    return this.http.get(`${url}${id}`)
  }
 taxSlabIsActive(id:any,data){
    let url =this.apiUrl+'/pv-api/tax_slabs/?id=';
    return this.http.patch(`${url}${id}`,data);
  }
  addTaxSlab(data:any){
    let url = this.apiUrl+'/pv-api/tax_slabs/';
    return this.http.post(url,data)
  }
  updateTaxSlab(data:any,id:number){
    let url = this.apiUrl+'/pv-api/tax_slabs/?id=';
    return this.http.put(`${url}${id}`,data)
  }
  deleteTaxSlab(id:any){
    let url = this.apiUrl+'/pv-api/tax_slabs/?id=';
    return this.http.delete(`${url}${id}`)
  }

  // banner
  getBanner(){
    let url = this.apiUrl+'/pv-api/banner/';
    return this.http.get(url)
  }
  getBannerbById(id:any){
    let url = this.apiUrl+'/pv-api/banner/?id=';
    return this.http.get(`${url}${id}`)
  }
  addBanner(data:any){
    let url = this.apiUrl+'/pv-api/banner/';
    return this.http.post(url,data)
  }
  updateBanner(data:any,id:number){
    let url = this.apiUrl+'/pv-api/banner/?id=';
    return this.http.put(`${url}${id}`,data)
  }
  
  deleteBanner(id:any){
    let url = this.apiUrl+'/pv-api/banner/?id=';
    return this.http.delete(`${url}${id}`)
  }
  bannerIsActive(id:any,data){
    let url =this.apiUrl+'/pv-api/banner/?id=';
    return this.http.patch(`${url}${id}`,data);
  }
}
