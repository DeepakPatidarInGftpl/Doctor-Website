import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-update-company-bank',
  templateUrl: './update-company-bank.component.html',
  styleUrls: ['./update-company-bank.component.scss']
})
export class UpdateCompanyBankComponent implements OnInit {
  companyBankForm!: FormGroup
  get f() {
    return this.companyBankForm.controls;
  }
  constructor(private fb: FormBuilder, private copmpanyService: CompanyService, private toastr: ToastrService,
     private router: Router,
     private coreService:CoreService,
     private Arout:ActivatedRoute) { }
  date = new Date();
  id:any;

  ngOnInit(): void {
    this.id=this.Arout.snapshot.paramMap.get('id')
    console.log(this.id);
    this.companyBankForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      branch_name: new FormControl('', [Validators.required]),
      account_number: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/),]),
      account_holder_name: new FormControl('', [Validators.required]),
      IFSC_code: new FormControl('', [Validators.required]),
      Swift_code: new FormControl('', [Validators.required,]),
      credit_balance: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]*$/),]),
      debit_balance: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]*$/),]),
      counntry: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city:new FormControl('',[Validators.required]),
      pincode:new FormControl('',[Validators.maxLength(6),Validators.minLength(6),Validators.required,Validators.pattern(/^[0-9]*$/),]),
      address:new FormControl('',[Validators.required]),
      is_upi_available:new FormControl('')
    })

    this.coreService.getCompanyBankById(this.id).subscribe(res=>{
      console.log(res); 
      this.companyBankForm.patchValue(res)
    })
    // this.getCountry();
  }
  
  country: any
  getCountry() {
    this.copmpanyService.countryList().subscribe(res => {
      this.country = res;
    })
  }
  city:any
  state: any
  selectState(val: any) {
    console.log(val);
    this.coreService.getStateByCountryId(val).subscribe(res => {
      this.state = res;
      console.log(this.state);
    })
  }
  selectCity(val:any){
    this.coreService.getCityByStateId(val).subscribe(res=>{
      this.city=res
    })
  }
  dateError = null;
  loaders=false;
  addRes:any;
  submit() {
    console.log(this.companyBankForm.value);
    if (this.companyBankForm.valid) {
      this.loaders=true;
      this.coreService.updateCompanyBank(this.companyBankForm.value,this.id).subscribe(res => {
        console.log(res);
        this.addRes=res;
        if (this.addRes.Is_Success == "True") {
          this.loaders=false;
          this.toastr.success(this.addRes.msg)
          this.companyBankForm.reset()
          this.router.navigate(['//masters/companyBank'])
        }else{
          this.loaders=false;
          this.toastr.error(this.addRes.account_number[0],'Account number')
        }
      }, err => {
        console.log(err.error);
        this.loaders=false;
      })
    } else {
      this.companyBankForm.markAllAsTouched()
      console.log('hhhhhh');

    }
  }

  get name() {
    return this.companyBankForm.get('name')
  }
  get branch_name() {
    return this.companyBankForm.get('branch_name');
  }
  get account_number() {
    return this.companyBankForm.get('account_number');
  }
  get account_holder_name() {
    return this.companyBankForm.get('account_holder_name')
  }
  get financial_year() {
    return this.companyBankForm.get('financial_year')
  }
  get IFSC_code() {
    return this.companyBankForm.get('IFSC_code')
  }
  get Swift_code() {
    return this.companyBankForm.get('Swift_code')
  }
  get credit_balance() {
    return this.companyBankForm.get('credit_balance')
  }
  get debit_balance() {
    return this.companyBankForm.get('debit_balance')
  }
  get is_upi_available() {
    return this.companyBankForm.get('is_upi_available')
  }
  get address() {
    return this.companyBankForm.get('address')
  }
  get countryy() {
    return this.companyBankForm.get('counntry')
  }
  get statee() {
    return this.companyBankForm.get('state')
  }
  get cityy(){
    return this.companyBankForm.get('city')
  }
  get pincode(){
    return this.companyBankForm.get('pincode')
  }
}

