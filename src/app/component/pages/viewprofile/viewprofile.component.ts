import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DoctorserviceService } from 'src/app/service/doctorservice.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.scss']
})
export class ViewprofileComponent {
  
  id: any;
  getDoctorById:any;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  data: any;
  maplocation: any;
 constructor( 
  private router:Router,
  private activatedRoute : ActivatedRoute,
  private _doctorService: DoctorserviceService,
  private _router: Router,
  private _formBuilder: FormBuilder,
  ){

 }
 docImage:any;
 docfname:any;
 doclname:any;
 doceduca:any;
 docspecility:any;
 docexp:any;
 docaddress:any;
 docfees:any
 days:any;
 stime:any;
 etime:any;;
 profiledata:any []=[]
 ngOnInit(): void {
  this.activatedRoute.params.subscribe((params: Params)=>{
    this.id = params["id"];
    console.log(" Doctor id ",this.id)
  })
  if(this.id){
    this._doctorService.getbyDoctorId(this.id).subscribe({
      next : (res)=>{
        console.log("Res",res)
        res.forEach((item:any)=> {
          this.docImage=item.profilePicture;
           this.docfname=item.firstName;
           this.doclname=item.lastName;
           this.doceduca=item.specialization;
           this.docspecility=item.speciality;
           this.docexp=item.expreience;
           this.docaddress=item.clinicAddress;
           this.maplocation=item.mapDirection
           this.days=item.day;
           this.stime=item.starttime;
           this.etime=item.endtime;
           item.details.map((val:any)=>{
           console.log("val",val);
           let fdata = JSON.parse(val);
           this.docfees = fdata[0].clinicPrice;
           
      })
      // item.data.map((slots:any)=>{
      //   console.log("slot",slots);
        this.data = item.data
        console.log("slot",this.data);
        // this.docfees = fdata[0].clinicPrice;
   })
        // })
        //this.getDoctorById = res;
        // 
      }
    })
  }
}
toPatientDetail(ids:any,slot:any){
  
  let id ={
    ids,
    slot
  }
let p = JSON.stringify(id)

  this._router.navigate(["/doctordetail/patient-detail/"+p])
  }

  Slotcancel(){
    this._router.navigate(["/"])
    }
}

