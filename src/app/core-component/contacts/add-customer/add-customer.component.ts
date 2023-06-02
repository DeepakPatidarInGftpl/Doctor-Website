import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})

export class AddCustomerComponent implements OnInit {

  constructor(private fb: FormBuilder, private contactService: ContactService, private toastr: ToastrService, private router: Router, private coreService: CoreService) { }
  customerForm!: FormGroup;

  get f() {
    return this.customerForm.controls;
  }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      login_access: new FormControl(''),
      name: new FormControl('',),
      company_name: new FormControl('',),
      mobile_no: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]*$/)]),
      telephone_no: new FormControl('',),
      whatsapp_no: new FormControl('', [Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]*$/)]),
      email: new FormControl(''),
      remark: new FormControl(''),
      date_of_birth: new FormControl('',),
      anniversary_date: new FormControl('',),
      gst_type: new FormControl('',),
      gstin: new FormControl('', [Validators.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}")]),
      pan_no: new FormControl('', [Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]),
      apply_tds: new FormControl(''),
      credit_limit: new FormControl('',),
      // address: new FormArray<any>([], ),
      address: this.fb.array([]),
      payment_terms: new FormControl(''),
      opening_balance: new FormControl(''),
      invite_code:new FormControl(''),
      membership:new FormControl('')
    });
    this.getgstType()
    this.addAddress();
    this.getCountry();
    this.getPaymentTerms();
  }

  gstType:any;
  getgstType(){
    this.contactService.getTypeOfGst().subscribe(res=>{
      console.log(res);
      this.gstType=res;
    })
  }
  paymentTerms:any;
  getPaymentTerms(){
    this.contactService.getPaymentTerms().subscribe(res=>{
      this.paymentTerms=res;
    })
  }

  addressAdd(): FormGroup {
    return this.fb.group({
      address_line_1: (''),
      address_line_2: (''),
      country: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      pincode: (''),
      address_type: ('')
    });
  }
  getAddresss(): FormArray {
    return this.customerForm.get('address') as FormArray;
  }
  addAddress() {
    this.getAddresss().push(this.addressAdd())
  }
  removeAddress(i: any) {
    this.getAddresss().removeAt(i)
  }

  dateError = null
  addRes: any;
  country: any
  getCountry() {
    this.coreService.countryList().subscribe(res => {
      this.country = res;
      console.log(this.country);
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
  city: any;
  selectCity(val: any) {
    console.log(val);
    this.coreService.getCityByStateId(val).subscribe(res => {
      this.city = res;
    })
  }
  submit() {
    console.log(this.customerForm.value);

    let formdata: any = new FormData();
    formdata.append('login_access', this.customerForm.get('login_access')?.value);
    formdata.append('name', this.customerForm.get('name')?.value);
    formdata.append('company_name', this.customerForm.get('company_name')?.value);
    formdata.append('mobile_no', this.customerForm.get('mobile_no')?.value);
    formdata.append('telephone_no', this.customerForm.get('telephone_no')?.value);
    formdata.append('whatsapp_no', this.customerForm.get('whatsapp_no')?.value);
    formdata.append('email', this.customerForm.get('email')?.value);
    formdata.append('remark', this.customerForm.get('remark')?.value);
    formdata.append('date_of_birth', this.customerForm.get('date_of_birth')?.value);
    formdata.append('anniversary_date', this.customerForm.get('anniversary_date')?.value);
    formdata.append('gst_type', this.customerForm.get('gst_type')?.value);
    formdata.append('gstin', this.customerForm.get('gstin')?.value);
    formdata.append('pan_no', this.customerForm.get('pan_no')?.value);
    formdata.append('apply_tds', this.customerForm.get('apply_tds')?.value);
    formdata.append('credit_limit', this.customerForm.get('credit_limit')?.value);
    formdata.append('payment_terms', this.customerForm.get('payment_terms')?.value);
    formdata.append('opening_balance', this.customerForm.get('opening_balance')?.value);
    formdata.append('invite_code', this.customerForm.get('invite_code')?.value);
    formdata.append('membership', this.customerForm.get('membership')?.value);

    // nested addrs data 
    const addressArray = this.customerForm.get('address') as FormArray;
    const addressData = [];
    addressArray.controls.forEach((address) => {
      const featuresGroup = address as FormGroup;
      const featureObj = {};
      Object.keys(featuresGroup.controls).forEach((key) => {
        const control = featuresGroup.controls[key];
        featureObj[key] = control.value;
      });
      addressData.push(featureObj);
    });
    formdata.append('address', JSON.stringify(addressData));

    if (this.customerForm.valid) {
      this.contactService.addCustomer(this.customerForm.value).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Data Created") {
          this.toastr.success(this.addRes.msg)
          this.customerForm.reset()
          this.router.navigate(['//contacts/customer'])
        }
      }, err => {
        console.log(err.error.gst);
        if (err.error.dob) {
          this.dateError = 'Date (format:dd/mm/yyyy)';
          setTimeout(() => {
            this.dateError = ''
          }, 2000);
        } else if (err.error.anniversary) {
          this.dateError = 'Date (format:dd/mm/yyyy)';
          setTimeout(() => {
            this.dateError = ''
          }, 2000);
        }
      })
    } else {
      this.customerForm.markAllAsTouched()
      console.log('hhhhhh');

    }
  }

  get login_access() {
    return this.customerForm.get('login_access')
  }
  get name() {
    return this.customerForm.get('name')
  }
  get company_name() {
    return this.customerForm.get('company_name')
  }
  get dob() {
    return this.customerForm.get('date_of_birth');
  }
  get mobile() {
    return this.customerForm.get('mobile_no');
  }
  get telephone_no() {
    return this.customerForm.get('telephone_no');
  }
  get whatsapp_no() {
    return this.customerForm.get('whatsapp_no')
  }
  get anniversary() {
    return this.customerForm.get('anniversary_date');
  }
  get email() {
    return this.customerForm.get('email')
  }
  get remark() {
    return this.customerForm.get('remark');
  }
  get gst_type() {
    return this.customerForm.get('gst_type')
  }
  get gstin() {
    return this.customerForm.get('gstin')
  }
  get opening_balance() {
    return this.customerForm.get('opening_balance')
  }
  get address() {
    return this.customerForm.get('address')
  }
  get bank() {
    return this.customerForm.get('bank_id')
  }
  get pan_no() {
    return this.customerForm.get('pan_no')
  }
  get payment_terms() {
    return this.customerForm.get('payment_terms')
  }
  get apply_tds() {
    return this.customerForm.get('apply_tds')
  }
  get credit_limit() {
    return this.customerForm.get('credit_limit')
  }
  get countryy() {
    return this.customerForm.get('country')
  }
  get statee() {
    return this.customerForm.get('state')
  }
  get cityy() {
    return this.customerForm.get('city')
  }
  get pincode() {
    return this.customerForm.get('pincode')
  }
}
