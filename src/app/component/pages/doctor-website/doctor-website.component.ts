import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DoctorserviceService } from 'src/app/service/doctorservice.service';


@Component({
  selector: 'app-doctor-website',
  templateUrl: './doctor-website.component.html',
  styleUrls: ['./doctor-website.component.scss'],
})
export class DoctorWebsiteComponent  {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
 timeSLOT = ["9:00 AM", "9:15 AM", "9:30 AM", "9:45 AM", "10:00 AM"];
  allLocation :[]=[];
  selectedDevice :any =[];
  inputValue: string = '';
  inputList: string = '';
  doctorData: any = [];
  doctorList: any = [];
  doctoename: any = [];
  doctorname: any = [];

  specility :any;
  item :any;
  id:any
  addDoctor!: FormGroup;
  getlinkForm!: FormGroup;
  keyword = 'name';
  schools: any;
  abc:boolean=false
  bookapp: boolean =false
  showDiv: boolean = false;
  doccity: any;
  globaleid : any;
  clinicfee: any;
  fessobj: any;
  finalfss: any;
  result :any =[]
  constructor(private _doctorService: DoctorserviceService, private fb: FormBuilder,private _router: Router, private http: HttpClient,private _formBuilder: FormBuilder,public dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.addDoctor = this.fb.group({
      location: [''],
      category: [''],
    })
    this.getlinkForm = this.fb.group({
      getlink: [''],
    })
    this.GetAllLoction();

  }
  toPatientDetail(){
    this._router.navigate(["/doctordetail/patient-detail"])
      }
  GetAllLoction() {
    this._doctorService.getAlllocation().subscribe({
      next: (res) => {
        console.log(res)
        this.allLocation = res

      }
    })
  }
  sendsubmit(){
    console.log("Clinic data",this.getlinkForm.value);
  }

selectEvent(item :any) {
  console.log("City",item);
  this.item = item
  console.log("Citydata",this.inputValue);
  this._doctorService.getAllDoctorDetail(item).subscribe(res => {
  this.doctorData = res
  console.log("Category Data",this.doctorData)

  })
}
onChange(data:any) {
  this.abc=true
  this.item
  console.log(data)
  this.specility = data
  this._doctorService.getAllDoctorList(this.item,data).subscribe(res => {
   this.doctorList = res
   console.log("DoctorList",this.doctorList)
   this.doccity =this.doctorList[0].city
  this.result = [...this.doctorList]
  //  this.clinicfee = this.doctorList[0].details.map((item :any) => {
  //  this.fessobj = JSON.parse(item)[0];
  //  this.finalfss = this.fessobj.clinicPrice;
  //  console.log(this.finalfss);
  //  });



    })
}
handleGender(event:any) {
  const query = event.target.value;
  console.log(query)
  this.result = this.doctorList.filter((d:any) => d.gender === query );
}
handleonChange(event:any) {
  const query = event.target.value;
  console.log(query)
  this.result = this.doctorList.filter((d:any) => d.expreience === query );
}

// onChange(event:any) {
//   this.abc=true
//   this.item
//   console.log(event.target.value)
//   this.specility = event.target.value
//   this._doctorService.getAllDoctorList(this.item,event.target.value).subscribe(res => {
//    this.doctorList = res
//    this.doccity =this.doctorList[0].city
//     console.log("DoctorList",this.doctorList)

//     })
// }

bookyourapp(id:any){
  this.item;
  this._doctorService.getDoctorslot(this.item,this.specility,id).subscribe(res => {
  this.doctorname = res;

  // res.map((s:any)=>((s.doctorId === id)? (s.doctorId = 'show') :( s.doctorId = 'hide')))
  // this.showDiv = true;

//  console.log('deep', this.doctorname)
//  if(this.doctorname.afternoonTimeFrom){
//   this._doctorService.data$.next([this.doctorname])
//  }
console.log('deep', this.doctorname)
 let data = this.doctorname;
 console.log("data data",data)
 this._router.navigate(["/slotpages/"+JSON.stringify(data)])

 })

}
onChangeSearch(val: string) {
  // fetch remote data from here
  // And reassign the 'data' which is binded to 'data' property.
}

onFocused(e :any){
  // do something when input is focused
  //this._router.navigate(["/doctordetail/patient-detail"+id])
}
viewProfile(id:any){
  this._router.navigate(["/viewprofile/"+id]);

}
}

