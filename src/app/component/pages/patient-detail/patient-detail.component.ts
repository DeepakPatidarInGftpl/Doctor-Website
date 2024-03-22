import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DoctorserviceService } from 'src/app/service/doctorservice.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent {
  appointmentbookform!: FormGroup;
  ck: boolean = false;

  id: any;
  getDoctorById:any;
  docImage:any;
  docname:any;
  doceduca:any;
  docspecility:any;
  docexp:any;
  docaddress:any;
  docfees:any;
  clinicimg:any;
  clinicnames:any;
  ccontact:any;
  clinicloc:any;
  time:any;
  doclname:any;
  countory: any;
  maplocation: any;
  slots: any;
 constructor( 
  private router:Router,
  private activatedRoute : ActivatedRoute,
  private _doctorService: DoctorserviceService,
  private fb: FormBuilder,
  ){

 }
  ngOnInit(): void {
    this.appointmentbookform = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['+919644605330', Validators.required],
    })
    this.activatedRoute.params.subscribe((params: Params)=>{

      let i = params["id"];
      this.id = JSON.parse(i)
      console.log(" Doctor id ",this.id)
      

      
    })
    if(this.id){
      this._doctorService.getDoctorByID(this.id.ids).subscribe({
        next : (res)=>{
          console.log("doctor",res)
          this.getDoctorById = res;
           this.docImage=this.getDoctorById.profilePicture;
           this.docname=this.getDoctorById.firstName;
           this.doclname=this.getDoctorById.lastName;
           this.doceduca=this.getDoctorById.specialization;
           this.docspecility=this.getDoctorById.speciality;
           this.docexp=this.getDoctorById.expreience;
           this.docaddress=this.getDoctorById.clinicAddress;
           this.clinicimg=this.getDoctorById.clinicLatterheadPicture;
           this.clinicnames=this.getDoctorById.clinicName;
           this.ccontact=this.getDoctorById.clinicMobileno;
           this.clinicloc =this.getDoctorById.clinicAddress;
           this.maplocation=this.getDoctorById.mapDirection
           this.countory =this.getDoctorById.country
           this.time=this.getDoctorById.year;
           this.slots = this.id.slot;
           console.log("slot",this.slots)
           res.details.map((val:any)=>{
            console.log("val",val);
            let fdata = JSON.parse(val);
            this.docfees = fdata[0].clinicPrice;
       })
        }
      })
    }
  }
  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  addBookApp() {
    if (this.appointmentbookform.invalid) {
      this.ck = true;
      return
    }
    else {
      console.log("Form data",this.appointmentbookform.value)
      this._doctorService.addBookApp(this.appointmentbookform.value).subscribe({
        next: (res) => {
          if(res){
            this.router.navigate(["/otp"])
          }
        },
        error: (err) => { console.log(err) }
      })
    }
  }
}

