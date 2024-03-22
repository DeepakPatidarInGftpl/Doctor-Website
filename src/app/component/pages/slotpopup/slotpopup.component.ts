import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DoctorserviceService } from 'src/app/service/doctorservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-slotpopup',
  templateUrl: './slotpopup.component.html',
  styleUrls: ['./slotpopup.component.scss']
})
export class SlotpopupComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
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
  keyword = 'name';
  schools: any;  
  abc:boolean=false
  bookapp: boolean =false
  showDiv: boolean = false;
  doccity: any;
  globaleid : any;
  data:any;
  mdata: any;
  constructor(private _router: Router,private _formBuilder: FormBuilder, private activatedRoute : ActivatedRoute,) {
   
  }
  ngOnInit(): void {
  //   let  data:any = this.activatedRoute.snapshot.paramMap.get('id')
  // console.log( data)
  //   this.bookyourapp();
//console.log(this._doctorService.data$)
this.activatedRoute.params.subscribe((params: Params) => {
  const jsonData = params["data"];
  this.data = JSON.parse(jsonData);
  console.log("Doctor Data", this.data);
});
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
