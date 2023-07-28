import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { WebsiteService } from 'src/app/Services/website/website.service';

@Component({
  selector: 'app-update-address-store',
  templateUrl: './update-address-store.component.html',
  styleUrls: ['./update-address-store.component.scss']
})
export class UpdateAddressStoreComponent implements OnInit {


  addressStoreForm!: FormGroup
  get f() {
    return this.addressStoreForm.controls;
  }
  constructor(private fb: FormBuilder, private copmpanyService: CompanyService, private toastr: ToastrService,
    private router: Router,
    private coreService: CoreService,
    private websiteService: WebsiteService,
    private Arout: ActivatedRoute
  ) { }
  date = new Date();
  id: any;
  ngOnInit(): void {
    this.addressStoreForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile_no: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/),]),
      alternative_mobile_no: new FormControl('', [Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]),
      line1: new FormControl(''),
      line2: new FormControl(''),
      address: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      state: new FormControl('',),
      country: new FormControl('',),
      city: new FormControl('',)
    })

    this.id = this.Arout.snapshot.paramMap.get('id');

    this.websiteService.getAddressStoreById(this.id).subscribe(res=>{
      console.log(res);
      this.addressStoreForm.patchValue(res)
    })
    // this.getCountry();
    // this.getState();
    // this.getCity();
  }

  country: any
  getCountry() {
    this.copmpanyService.countryList().subscribe(res => {
      this.country = res;
    })
  }
  getState() {
    this.copmpanyService.stateList().subscribe(res => {
      // this.state = res;
      console.log(this.state);
    })
  }
  city: any
  getCity() {
    this.coreService.getCity().subscribe(res => {
      // this.city=res;
    })
  }
  state: any
  selectState(val: any) {
    console.log(val);
    this.coreService.getStateByCountryId(val).subscribe(res => {
      this.state = res;
      console.log(this.state);
    })
  }
  selectCity(val: any) {
    this.coreService.getCityByStateId(val).subscribe(res => {
      this.city = res
    })
  }
  dateError = null
  addRes: any;
  loaders=false
  submit() {
    console.log(this.addressStoreForm.value);
    var formdata: any = new FormData()
    formdata.append('name', this.addressStoreForm.get('name')?.value);
    formdata.append('email', this.addressStoreForm.get('email')?.value);
    formdata.append('mobile_no', this.addressStoreForm.get('mobile_no')?.value);
    formdata.append('alternative_mobile_no', this.addressStoreForm.get('alternative_mobile_no')?.value);
    formdata.append('line1', this.addressStoreForm.get('line1')?.value);
    formdata.append('line2', this.addressStoreForm.get('line2')?.value);
    formdata.append('address', this.addressStoreForm.get('address')?.value);
    formdata.append('pincode', this.addressStoreForm.get('pincode')?.value);
    formdata.append('state', this.addressStoreForm.get('state')?.value);
    formdata.append('country', this.addressStoreForm.get('country')?.value);
    formdata.append('city', this.addressStoreForm.get('city')?.value);

    if (this.addressStoreForm.valid) {
      this.loaders=true;
      this.websiteService.updateAddressStore(formdata,this.id).subscribe((res: any) => {
        console.log(res);
        this.addRes = res;
        if (this.addRes.Is_Success == "True") {
          this.loaders=false;
          this.toastr.success(this.addRes.msg)
          this.addressStoreForm.reset()
          this.router.navigate(['//website/addressStore'])
        }else{
          this.loaders=false;
        }
      }, err => {
        this.loaders=false;
        console.log(err.error);
      })
    } else {
      this.loaders=false;
      this.addressStoreForm.markAllAsTouched()
      console.log('hhhhhh');
    }
  }

  get name() {
    return this.addressStoreForm.get('name')
  }
  get line1() {
    return this.addressStoreForm.get('line1');
  }
  get phone() {
    return this.addressStoreForm.get('mobile_no');
  }
  get pincode() {
    return this.addressStoreForm.get('pincode')
  }
  get alternative_mobile_no() {
    return this.addressStoreForm.get('alternative_mobile_no')
  }
  get email() {
    return this.addressStoreForm.get('email')
  }
  get line2() {
    return this.addressStoreForm.get('line2')
  }
  get address() {
    return this.addressStoreForm.get('address')
  }
  get countryy() {
    return this.addressStoreForm.get('country')
  }
  get statee() {
    return this.addressStoreForm.get('state')
  }
  get cityy() {
    return this.addressStoreForm.get('city')
  }
}


