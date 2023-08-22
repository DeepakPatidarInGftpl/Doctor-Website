import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-update-branch',
  templateUrl: './update-branch.component.html',
  styleUrls: ['./update-branch.component.scss']
})
export class UpdateBranchComponent implements OnInit {

  branchForm!: FormGroup;
  get f() {
    return this.branchForm.controls;
  }
  constructor(private coreService: CoreService,  private fb: FormBuilder, private toastr: ToastrService, private router: Router,
  private Arout:ActivatedRoute) { }
id:any;
  ngOnInit(): void {
    this.id=this.Arout.snapshot.paramMap.get('id')

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
    this.coreService.getBranchById(this.id).subscribe(res => {
      // console.log(res);
      if (this.id == res.id) {
        this.branchForm.patchValue(res);
        this.branchForm.get('country')?.patchValue(res?.country?.id)
        this.selectState(res?.country?.id)
        this.branchForm.get('state')?.patchValue(res?.state?.id)
        this.selectCity(res?.state?.id)
        this.branchForm.get('city')?.patchValue(res?.city?.id)
      }
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
    update() {
    if (this.branchForm.valid) {
      this.loaders = true;
      this.coreService.updateBranch(this.branchForm.value, this.id).subscribe(res => {
        // console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Branch Updated Sucessfully") {
          this.loaders = false;
          this.toastr.success(this.addRes.msg)
          this.router.navigate(['//masters/branch'])
          this.branchForm.reset()

        } else {
          this.loaders = false
        }
      }, err => {
        this.loaders = false;
        // console.log(err.error.gst);
      })
    } else {
      this.branchForm.markAllAsTouched()
      // console.log('forms invalid');
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

