import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.scss']
})
export class EditcompanyComponent implements OnInit {

  companyForm!: FormGroup;
  get f() {
    return this.companyForm.controls;
  }
  constructor(private fb: FormBuilder, private Arout: ActivatedRoute, private copmpanyService: CompanyService, private router: Router, private toastr: ToastrService
    , private coreService: CoreService) {
    //getting data through url
    // console.log(this.router.getCurrentNavigation()?.extras?.state?.['example']);

    // this.data = this.router.getCurrentNavigation()?.extras?.state?.['example']
  }

  companyId: any
  data: any
  selectS: any

  ngOnInit(): void {
    this.companyId = this.Arout.snapshot.paramMap.get('id');
    this.getCountry();
    this.getState();
    this.getCity();
    this.getYear();
    this.copmpanyService.getCompanyById(this.companyId).subscribe(res => {
      this.data = res
      // console.log(this.data);

      // this.companyForm.patchValue(this.data)

      this.companyForm.get('country')?.patchValue(this.data.country.id)
      this.selectState(this.data.country.id)
      this.companyForm.get('state')?.patchValue(this.data.state.id)
      this.selectCity(this.data.state.id)
      this.companyForm.get('city')?.patchValue(this.data.city.id)
      this.companyForm.get('financial_year')?.patchValue(this.data?.financial_year?.id)
      // this.companyForm.controls['state'].setValue(this.data.state)
      // this.companyForm.patchValue({
      //   state:this.data.state
      // })
      this.selectS = this.data.state
      // console.log(this.state);

    })

    this.companyForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/),]),
      financial_year: new FormControl('', [Validators.required]),
      currency: new FormControl('', [Validators.required]),
      gst: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}")]),
      address: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required])
    })

  }


  country: any
  getCountry() {
    this.copmpanyService.countryList().subscribe(res => {
      this.country = res;
    })
  }

  state: any
  getState() {
    this.copmpanyService.stateList().subscribe(res => {
      // this.state = res;
      // console.log(this.state);
    })
  }

  selectState(val: any) {
    // console.log(val);
    this.coreService.getStateByCountryId(val).subscribe(res => {
      this.state = res;
      // console.log(this.state);
    })
  }
  city: any
  getCity() {
    this.coreService.getCity().subscribe(res => {
      // this.city=res;
    })
  }

  selectCity(val: any) {
    // console.log(val);
    this.coreService.getCityByStateId(val).subscribe(res => {
      this.city = res;

    })
  }

  yearDetails: any
  getYear() {
    this.coreService.getFinancialYear().subscribe(res => {
      // console.log(res);
      this.yearDetails = res;
    })
  }
  dateError = null;
  loaders=false;
  submit() {
    if (this.companyForm.valid) {
      this.loaders=true;
      this.copmpanyService.updateCompany(this.companyForm.value, this.companyId).subscribe(res => {
        // console.log(res);
        if (res.msg == "Company Updated Successfully") {
          this.loaders=false;
          this.toastr.success(res.msg);
          this.companyForm.reset();
          this.router.navigate(['//masters/companylist'])
          // .then(()=>{
          //   window.location.reload()
          // })
        }
      }, err => {
        if (err.error.financial_year) {
          this.dateError = 'Date (format:dd/mm/yyyy)';
          setTimeout(() => {
            this.dateError = ''
          }, 2000);
        }
      })
    } else {
      this.companyForm.markAllAsTouched()
      // console.log('error');
    }

  }


  get name() {
    return this.companyForm.get('name')
  }
  get gst() {
    return this.companyForm.get('gst');
  }
  get phone() {
    return this.companyForm.get('phone');
  }
  get pincode() {
    return this.companyForm.get('pincode')
  }
  get financial_year() {
    return this.companyForm.get('financial_year')
  }
  get email() {
    return this.companyForm.get('email')
  }
  get currency() {
    return this.companyForm.get('currency')
  }
  get address() {
    return this.companyForm.get('address')
  }
  get countryy() {
    return this.companyForm.get('country')
  }
  get statee() {
    return this.companyForm.get('state')
  }
  get cityy() {
    return this.companyForm.get('city')
  }
}
