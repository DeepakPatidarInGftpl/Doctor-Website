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
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.coreService.getAccountById(this.id).subscribe(res => {
      this.data = res
      this.accountForm.patchValue({
        contact_person_name:this.data.contact_person_name,
        title:this.data.title,
        birthday:this.data.birthday,
        mobile:this.data.mobile,
        email:this.data.email,
        pan:this.data.pan,
        gstin_uin:this.data.gstin_uin,
        anniversary:this.data.anniversary,
        accounts_type:this.data.accounts_type,
        opening_balance:this.data.opening_balance,
        opening_balance_type:this.data.opening_balance_type,
        type_of_customer:this.data.type_of_customer,
        credit_days:this.data.credit_days,
        credit_amount:this.data.credit_amount,
        address:this.data.address
      })
    })

    this.accountForm = this.fb.group({
      contact_person_name: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]*$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      pan: new FormControl('', [Validators.required, Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]),
      gstin_uin: new FormControl('', [Validators.required,Validators.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}")]),
      anniversary: new FormControl('', [Validators.required]),
      accounts_type: new FormControl('', [Validators.required]),
      opening_balance: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      opening_balance_type: new FormControl('', [Validators.required]),
      type_of_customer: new FormControl('', [Validators.required]),
      credit_days: new FormControl('', [Validators.required]),
      credit_amount: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),

    })
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
      this.state = res;
      console.log(this.state);
    })
  }
  selectState(val: any) {
    console.log(val);
    this.coreService.stateList().subscribe(res => {
      this.state = res;
      console.log(this.state);
    })
  }
  accountType: any
  getAccountType() {
    this.coreService.accountType().subscribe(res => {
      console.log(res);
      this.accountType = res
    })
  }

  addRes: any
  dateError=null;
  countryError=null;
  stateError=null
  submit() {
    console.log(this.accountForm.value);
    if (this.accountForm.valid) {
      this.coreService.updateAccount(this.accountForm.value, this.id).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Account updated successfully") {
          this.toastr.success(this.addRes.msg)
          this.accountForm.reset()
          this.router.navigate(['//account/accountlist'])
          // .then(() => {
          //   window.location.reload()
          // })


        }
      }, err => {
        console.log(err.error.gst);
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
        }
      })
    } else {
      this.accountForm.markAllAsTouched()
      console.log('hhhhhh');

    }
  }

  get contact_person_name() {
    return this.accountForm.get('contact_person_name')
  }
  get title() {
    return this.accountForm.get('title')
  }
  get birthday() {
    return this.accountForm.get('birthday');
  }
  get mobile() {
    return this.accountForm.get('mobile');
  }
  get email() {
    return this.accountForm.get('email')
  }
  get pan() {
    return this.accountForm.get('pan');
  }
  get gstin_uin() {
    return this.accountForm.get('gstin_uin')
  }
  get anniversary() {
    return this.accountForm.get('anniversary');
  }
  get opening_balance() {
    return this.accountForm.get('opening_balance')
  }
  get opening_balance_type() {
    return this.accountForm.get('opening_balance_type')
  }
  get type_of_customer() {
    return this.accountForm.get('type_of_customer')
  }
  get accounts_type() {
    return this.accountForm.get('accounts_type')
  }
  get credit_days() {
    return this.accountForm.get('credit_days')
  }
  get credit_amount() {
    return this.accountForm.get('credit_amount')
  }
  get countryy() {
    return this.accountForm.get('country')
  }
  get statee() {
    return this.accountForm.get('state')
  }
  get address() {
    return this.accountForm.get('address')
  }
}
