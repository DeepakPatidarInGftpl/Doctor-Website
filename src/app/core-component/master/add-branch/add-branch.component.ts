import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.scss']
})
export class AddBranchComponent implements OnInit {
  branchForm!: FormGroup;
  get f() {
    return this.branchForm.controls;
  }
  constructor(private coreService: CoreService,  private fb: FormBuilder, private toastr: ToastrService, private router: Router,
  ) { }

  ngOnInit(): void {
    this.branchForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      gstin: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}")]),
      // address: new FormControl('', [Validators.required]),
      country: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
      pincode: new FormControl('', [Validators.required]),
      address: new FormControl('')
    })

    this.getCountry();
  }
  country: any
  getCountry() {
    this.coreService.countryList().subscribe(res => {
      this.country = res;
    })
  }
  state: any;
  selectState(val: any) {
    // console.log(val);
    this.coreService.getStateByCountryId(val).subscribe(res => {
      this.state = res;
      // console.log(this.state);
    })
  }
  city: any;
  selectCity(val: any) {
    // console.log(val);
    this.coreService.getCityByStateId(val).subscribe(res => {
      this.city = res;
    })
  }
  addRes: any

  loaders = false;
  submit() {
    // console.log(this.branchForm.value);
 
    if (this.branchForm.valid) {
      this.loaders = true;
      this.coreService.addBranch(this.branchForm.value).subscribe(res => {
        // console.log(res);
        this.addRes = res
        if (this.addRes.success) {
          this.loaders = false;
          this.toastr.success(this.addRes.msg)
          this.branchForm.reset()
          this.router.navigate(['//masters/branch'])
        } else {
          this.loaders = false
        }
      }, err => {
        this.loaders = false
        // console.log(err.error.gst);
      })
    } else {
      this.branchForm.markAllAsTouched()
      // console.log('forms invalid');
      this.toastr.error('Please Fill All The Required Fields')
    }
  }
  
  get title() {
    return this.branchForm.get('title')
  }
  get gstin() {
    return this.branchForm.get('gstin')
  }
  get address() {
    return this.branchForm.get('address')
  }
  get countryy() {
    return this.branchForm.get('country')
  }
  get statee() {
    return this.branchForm.get('state')
  }
  get cityy() {
    return this.branchForm.get('city')
  }
  get pincode() {
    return this.branchForm.get('pincode')
  }

}
