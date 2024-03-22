
import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {
  public addToCard$ = signal(0);
  public id$  =signal('')
  public data$ :BehaviorSubject<any> = new BehaviorSubject([])
  public cartData$  = signal([])
  constructor(
    private _http: HttpClient,
    private snackBar:MatSnackBar
  ) { }

  getAlllocation(){
    return this._http.get<any>(environment._api+'/api/data/category/')
   }
   getAllDoctorDetail(doctorData: any) {
    return this._http.get<any>(environment._api+`/api/data/category/${doctorData}`)
  }
  getAllDoctorList(item :any,doctorData: any) {
    return this._http.get<any>(environment._api+`/api/data/category/${item}/${doctorData}`).pipe(tap(res=>{
    return  res.map((item  : any)=>{
          item.details = JSON.parse(item.details)

      })

    }))
  }
  getDoctorslot(item :any,doctorData: any,id:string) {
    return this._http.get<any>(environment._api+`/api/data/category/${item}/${doctorData}/`+id)
  }
  getDoctorByID(id: any) {
    return this._http.get<any>(environment._api + "/api/profile/"+id )
  }
  getbyDoctorId(id :any){
    return this._http.get<any>(environment._api + "/api/data/lookup/"+id )
  }

  addBookApp(data: any) {
    return this._http.post<any>(environment._api + "/api/website/sendotp", data)
  }
  addOTPApp(data:any){
    return this._http.post<any>(environment._api + "/api/website/verifyotp", data)
  }
  login(data: any) {
    return this._http.post<any>(environment._api + "/api/login", data)
  }
  register(data:any){
    return this._http.post<any>(environment._api + "/api/patient", data)
  }
  // <---------------Lab Test------------------>
  getAllCategory(){
    return this._http.get<any>(environment._api+'/api/labtest')
   }
   getAllTests(){
    return this._http.get<any>(environment._api+'/api/category/get')
   }

   getAllPackage(){
    return this._http.get<any>(environment._api+'/api/package')
   }
   
  openSnackBar(data:any) {
    this.snackBar.open(data, 'Ok' ,{
      duration: 1500,
    });
  }
}
