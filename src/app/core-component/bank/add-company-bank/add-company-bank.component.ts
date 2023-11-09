import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-add-company-bank',
  templateUrl: './add-company-bank.component.html',
  styleUrls: ['./add-company-bank.component.scss']
})
export class AddCompanyBankComponent implements OnInit {
  companyBankForm!: FormGroup
  get f() {
    return this.companyBankForm.controls;
  }
  constructor(private fb: FormBuilder, private copmpanyService: CompanyService, private toastr: ToastrService,
     private router: Router,
     private coreService:CoreService) { }
  date = new Date();
  ngOnInit(): void {
    this.companyBankForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      branch_name: new FormControl('', [Validators.required]),
      account_number: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]*$/),]),
      account_holder_name: new FormControl('', [Validators.required]),
      IFSC_code: new FormControl('', [Validators.required]),
      Swift_code: new FormControl('',[Validators.required]),
      credit_balance: new FormControl(0, [,Validators.pattern(/^[0-9]*$/),]),
      debit_balance: new FormControl(0, [,Validators.pattern(/^[0-9]*$/),]),
      counntry: new FormControl('', ),
      state: new FormControl('', ),
      city:new FormControl('',),
      pincode:new FormControl('',[Validators.maxLength(6),Validators.minLength(6),Validators.pattern(/^[0-9]*$/),]),
      address:new FormControl(''),
      is_upi_available:new FormControl('')
    })

    this.getCountry();
    this.getYear();
    this.getCurrency();
  }
  
yearDetails:any
  getYear(){
    this.coreService.getFinancialYear().subscribe(res=>{
      // console.log(res); 
      this.yearDetails=res;
    })
  }
  currencyDetails:any
  getCurrency(){
    this.coreService.getCurrency().subscribe(res=>{
      // console.log(res);
      this.currencyDetails=res;
    })
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
  selectCity(val:any){
    this.coreService.getCityByStateId(val).subscribe(res=>{
      this.city=res
    })
  }
  dateError = null;
  loaders=false;
  addRes:any;
  submit() {
    // console.log(this.companyBankForm.value);
    if (this.companyBankForm.valid) {
      this.loaders=true;
      this.coreService.addCompanyBank(this.companyBankForm.value).subscribe(res => {
        // console.log(res);
        this.addRes=res;
        if (this.addRes.success) {
          this.loaders=false;
          this.toastr.success(this.addRes.msg)
          this.companyBankForm.reset()
          this.router.navigate(['//bank/companyBank'])
        }else{
          this.loaders=false;
          this.toastr.error(this.addRes.account_number[0],'Account number')
        }
      }, err => {
        // console.log(err.error);
        this.loaders=false;
      })
    } else {
      this.companyBankForm.markAllAsTouched()
      this.toastr.error('Please Fill All The Required Fields')

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

