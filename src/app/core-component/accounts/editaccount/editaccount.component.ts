import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-editaccount',
  templateUrl: './editaccount.component.html',
  styleUrls: ['./editaccount.component.scss']
})
export class EditaccountComponent implements OnInit {


  constructor(private fb: FormBuilder, private coreService: CoreService, private toastr: ToastrService, private router: Router,
    private Arout: ActivatedRoute) { }
  accountForm!: FormGroup;

  get f() {
    return this.accountForm.controls;
  }
  id: any
  data: any
  accountId:any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.accountForm = this.fb.group({
      // contact_person_name: new FormControl('',),
      // title: new FormControl('', [Validators.required]),
      // birthday: new FormControl('',),
      // mobile: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]*$/)]),
      // email: new FormControl('', [ Validators.email]),
      // pan: new FormControl('', [ Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]),
      // gstin_uin: new FormControl('', [Validators.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}")]),
      // anniversary: new FormControl('', ),
      // accounts_type: new FormControl('', [Validators.required]),
      // opening_balance: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      // opening_balance_type: new FormControl('', [Validators.required]),
      // type_of_customer: new FormControl('', [Validators.required]),
      // credit_days: new FormControl('',),
      // credit_amount: new FormControl('',Validators.pattern(/^[0-9]*$/)),
      // country: new FormControl('', ),
      // state: new FormControl('', ),
      // city: new FormControl('', ),
      // address: new FormControl('',),

      title: new FormControl('', [Validators.required]),
      accounts_type: new FormControl('',[Validators.required]),
      account_subtype: new FormControl('',[Validators.required]),
      opening_balance: new FormControl(0, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      opening_balance_type: new FormControl('', [Validators.required]),
      // account_id:new FormControl('')
    })

    this.coreService.getAccountById(this.id).subscribe(res => {
      this.data = res
      // console.log(this.data?.account_subtype?.id);
      this.getAccountSubType(this.data?.accounts_type)
      this.accountForm.patchValue({
        title:this.data.title,
        accounts_type:this.data?.accounts_type,
        opening_balance:this.data?.opening_balance,
        opening_balance_type:this.data?.opening_balance_type,
        // account_id:this.data?.account_id,
        account_subtype:this.data?.account_subtype?.id
      })
    
    })

    this.getCountry();
    this.getState();
    this.getAccountType();
    this.getCity();
  }

  country: any
  getCountry() {
    this.coreService.countryList().subscribe(res => {
      this.country = res;
    })
  }
  state: any
  getState() {
    this.coreService.stateList().subscribe(res => {
      // this.state = res;
      // console.log(this.state);
    })
  }
  selectState(val: any) {
    console.log(val);
    this.coreService.getStateByCountryId(val).subscribe(res => {
      this.state = res;
      // console.log(this.state);
    })
  }
  city:any
  getCity(){
    this.coreService.getCity().subscribe(res=>{
      // this.city=res;
    })
  }
  selectCity(val: any) {
    // console.log(val);
    this.coreService.getCityByStateId(val).subscribe(res => {
      this.city = res;
    })
  }
  accountType: any
  getAccountType() {
    this.coreService.accountType().subscribe(res => {
      // console.log(res);
      this.accountType = res
    })
  }
  accountSubTypeLsit: any;
  getAccountSubType(val: any) {
    // console.log();
    this.coreService.getAccountTypeById(val).subscribe(res => {
      this.accountSubTypeLsit = res;
      // console.log(this.accountSubTypeLsit);  
    })
  }

  addRes: any
  dateError=null;
  countryError=null;
  stateError=null;
  loaders=false;
  submit() {
    // console.log(this.accountForm.value);
    if (this.accountForm.valid) {
      this.loaders=true;
      this.coreService.updateAccount(this.accountForm.value, this.id).subscribe(res => {
        // console.log(res);
        this.loaders=false;
        this.addRes = res
        if (this.addRes.success) {
          this.toastr.success(this.addRes.msg)
          this.accountForm.reset()
          this.router.navigate(['//account/accountlist'])
        }else{
          this.loaders=false
          this.toastr.error(this.addRes?.account_id[0])
        }
      }, err => {
        this.loaders=false;
        this.toastr.error(err.error?.account_id[0])
        // console.log(err.error.gst);
        if (err.error.anniversary) {
          this.dateError = 'Date (format:dd/mm/yyyy)';
          setTimeout(() => {
            this.dateError=''
          }, 2000);
        }else if (err.error.birthday) {
          this.dateError = 'Date (format:dd/mm/yyyy)';
          setTimeout(() => {
            this.dateError=''
          }, 2000);
        }else if (err.error.credit_days) {
          this.dateError = 'Date (format:dd/mm/yyyy)';
          setTimeout(() => {
            this.dateError=''
          }, 2000);
        }else if(err.error.country){
          this.countryError='Select country';
          setTimeout(() => {
            this.countryError=''
          }, 2000);
        }else if(err.error.state){
          this.stateError='Select state';
          setTimeout(() => {
            this.stateError=''
          }, 2000);
        }else if(err.error.accounts_type){
          this.toastr.error(err.error.accounts_type[0])
        }
      })
    } else {
      this.accountForm.markAllAsTouched()
      // console.log('hhhhhh');
      this.toastr.error('Please Fill All The Required Fields')

    }
  }

  get title() {
    return this.accountForm.get('title')
  }
  get opening_balance() {
    return this.accountForm.get('opening_balance')
  }
  get opening_balance_type() {
    return this.accountForm.get('opening_balance_type')
  }
  get account_subtype() {
    return this.accountForm.get('account_subtype')
  }
  get accounts_type() {
    return this.accountForm.get('accounts_type')
  }
  get account_id() {
    return this.accountForm.get('account_id')
  }
}
