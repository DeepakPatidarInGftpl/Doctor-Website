import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.scss']
})
export class AddaccountComponent implements OnInit {

  constructor(private fb: FormBuilder, private coreService: CoreService, private toastr: ToastrService, private router: Router) { }
  accountForm!: FormGroup;

  get f() {
    return this.accountForm.controls;
  }

  ngOnInit(): void {
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
      // city:new FormControl('',),
      // address: new FormControl('',),

      //
      title: new FormControl('', [Validators.required]),
      accounts_type: new FormControl('',[Validators.required]),
      account_subtype: new FormControl('',[Validators.required]),
      opening_balance: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      opening_balance_type: new FormControl('', [Validators.required]),
      account_id: new FormControl('')

    })
    this.getCity();
    this.getCountry();
    this.getState();

    this.getAccountType();
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
    })
  }
  selectState(val: any) {
    console.log(val);
    this.coreService.getStateByCountryId(val).subscribe(res => {
      this.state = res;
      console.log(this.state);
    })
  }
  city: any
  getCity() {
    this.coreService.getCity().subscribe(res => {
      this.city = res;
    })
  }
  selectCity(val: any) {
    console.log(val);
    this.coreService.getCityByStateId(val).subscribe(res => {
      this.city = res;
    })
  }
  accountType: any
  getAccountType() {
    this.coreService.accountType().subscribe(res => {
      console.log(res);
      this.accountType = res;
    })
  }
  accountSubTypeLsit: any;
  getAccountSubType(val: any) {
    //display by id
    this.coreService.getAccountTypeById(val).subscribe(res => {
      // this.accountSubTypeLsit = res;
      // console.log(this.accountSubTypeLsit);  
    })
//end
    this.coreService.getAccountSubType().subscribe(res => {
      this.accountSubTypeLsit = res;
      console.log(this.accountSubTypeLsit);  
    })

  }

  addRes: any;
  dateError = null;
  loaders = false;
  submit() {
    console.log(this.accountForm.value);
    if (this.accountForm.valid) {
      this.loaders = true;
      this.coreService.addAccount(this.accountForm.value).subscribe(res => {
        console.log(res);
        this.loaders = false;
        this.addRes = res
        if (this.addRes.msg == "Successfuly Added") {
          this.toastr.success(this.addRes.msg)
          this.accountForm.reset()
          this.router.navigate(['//account/accountlist'])
          // .then(() => {
          //   window.location.reload()
          // })
        } else {
          this.loaders = false;
        }
      }, err => {
        this.loaders = false;
        if (err.error.anniversary) {
          this.dateError = 'Date (format:dd/mm/yyyy)';
          setTimeout(() => {
            this.dateError = ''
          }, 2000);
        } else if (err.error.birthday) {
          this.dateError = 'Date (format:dd/mm/yyyy)';
          setTimeout(() => {
            this.dateError = ''
          }, 2000);
        } else if (err.error.credit_days) {
          this.dateError = 'Date (format:dd/mm/yyyy)';
          setTimeout(() => {
            this.dateError = ''
          }, 2000);
        }
      })
    } else {
      this.accountForm.markAllAsTouched()
      console.log('hhhhhh');
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