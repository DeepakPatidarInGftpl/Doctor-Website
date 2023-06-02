import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-add-transport',
  templateUrl: './add-transport.component.html',
  styleUrls: ['./add-transport.component.scss']
})
export class AddTransportComponent implements OnInit {

  constructor(private fb: FormBuilder, private contactService: ContactService, private toastr: ToastrService, private router: Router, private coreService: CoreService) { }
  transportForm!: FormGroup;

  get f() {
    return this.transportForm.controls;
  }

  ngOnInit(): void {
    this.transportForm = this.fb.group({
      login_access: new FormControl('',),
      name: new FormControl('', [Validators.required]),
      company_name: new FormControl('',),
      mobile_no: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]*$/)]),
      telephone_no: new FormControl('',),
      whatsapp_no: new FormControl('', [Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]*$/)]),
      email: new FormControl(''),
      remark: new FormControl(''),
      date_of_birth: new FormControl('',),
      anniversary_date: new FormControl('',),
      gst_type: new FormControl('',),
      gstin: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}")]),
      pan_no: new FormControl('', [Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]),
      apply_tds: new FormControl(''),
      credit_limit: new FormControl('',),
      // address: new FormArray<any>([], ),
      address: this.fb.array([]),
      // bank_id: new FormArray<any>([], ),
      bank_id: this.fb.array([]),
      payment_terms: new FormControl(''),
      opening_balance: new FormControl(''),
    })
    this.addAddress()
    this.addBank()
    this.getCountry();
    this.getgstType();
    this.getPaymentTerms();
  }

  paymentTerms:any;
  getPaymentTerms(){
    this.contactService.getPaymentTerms().subscribe(res=>{
      this.paymentTerms=res;
    })
  }
  gstType:any;
  getgstType(){
    this.contactService.getTypeOfGst().subscribe(res=>{
      console.log(res);
      this.gstType=res;
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
    return this.transportForm.get('address') as FormArray;
  }
  addAddress() {
    this.getAddresss().push(this.addressAdd())
  }
  removeAddress(i: any) {
    this.getAddresss().removeAt(i)
  }

  bankAdd(): FormGroup {
    return this.fb.group({
      bank_ifsc_code:new FormControl('',[Validators.required]),
      bank_name:new FormControl('',[Validators.required]),
      branch_name:new FormControl(''),
      account_no:new FormControl('',Validators.required),
      account_holder_name:new FormControl('',[Validators.required])
    })
  }
  getBanks(): FormArray {
    return this.transportForm.get('bank_id') as FormArray;
  }
  addBank() {
    this.getBanks().push(this.bankAdd())
  }
  removeBank(i: number) {
    this.getBanks().removeAt(i)
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
    console.log(this.transportForm.value);
    
    let formdata: any = new FormData();
    formdata.append('login_access', this.transportForm.get('login_access')?.value);
    formdata.append('name', this.transportForm.get('name')?.value);
    formdata.append('company_name', this.transportForm.get('company_name')?.value);
    formdata.append('mobile_no', this.transportForm.get('mobile_no')?.value);
    formdata.append('telephone_no', this.transportForm.get('telephone_no')?.value);
    formdata.append('whatsapp_no', this.transportForm.get('whatsapp_no')?.value);
    formdata.append('email', this.transportForm.get('email')?.value);
    formdata.append('remark', this.transportForm.get('remark')?.value);
    formdata.append('date_of_birth', this.transportForm.get('date_of_birth')?.value);
    formdata.append('anniversary_date', this.transportForm.get('anniversary_date')?.value);
    formdata.append('gst_type', this.transportForm.get('gst_type')?.value);
    formdata.append('gstin', this.transportForm.get('gstin')?.value);
    formdata.append('pan_no', this.transportForm.get('pan_no')?.value);
    formdata.append('apply_tds', this.transportForm.get('apply_tds')?.value);
    formdata.append('credit_limit', this.transportForm.get('credit_limit')?.value);
    formdata.append('payment_terms', this.transportForm.get('payment_terms')?.value);
    formdata.append('opening_balance', this.transportForm.get('opening_balance')?.value);
  
    // nested addrs data 
    const addressArray = this.transportForm.get('address') as FormArray;
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

    // nested bank data 
    const bankArray = this.transportForm.get('bank_id') as FormArray;
    const bankData = [];
    bankArray.controls.forEach((bank) => {
      const featuresGroup = bank as FormGroup;
      const featureObj = {};
      Object.keys(featuresGroup.controls).forEach((key) => {
        const control = featuresGroup.controls[key];
        featureObj[key] = control.value;
      });
      bankData.push(featureObj);
    });
    formdata.append('bank_id', JSON.stringify(bankData));

    if (this.transportForm.valid) {
      this.contactService.addTransport(formdata).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Data Created") {
          this.toastr.success(this.addRes.msg)
          this.transportForm.reset()
          this.router.navigate(['//contacts/transport'])
        }
      }, err => {
        console.log(err.error.gst);
        if(err.error.msg){
          this.toastr.error(err.error.msg)
        }
       else if (err.error.dob) {
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
      this.transportForm.markAllAsTouched()
      console.log('hhhhhh');

    }
  }

  get login_access() {
    return this.transportForm.get('login_access')
  }
  get name() {
    return this.transportForm.get('name')
  }
  get company_name() {
    return this.transportForm.get('company_name')
  }
  get dob() {
    return this.transportForm.get('date_of_birth');
  }
  get mobile() {
    return this.transportForm.get('mobile_no');
  }
  get telephone_no() {
    return this.transportForm.get('telephone_no');
  }
  get whatsapp_no() {
    return this.transportForm.get('whatsapp_no')
  }
  get anniversary() {
    return this.transportForm.get('anniversary_date');
  }
  get email() {
    return this.transportForm.get('email')
  }
  get remark() {
    return this.transportForm.get('remark');
  }
  get gst_type() {
    return this.transportForm.get('gst_type')
  }
  get gstin() {
    return this.transportForm.get('gstin')
  }
  get opening_balance() {
    return this.transportForm.get('opening_balance')
  }
  get supplier_type() {
    return this.transportForm.get('supplier_type')
  }
  get address() {
    return this.transportForm.get('address')
  }
  get bank() {
    return this.transportForm.get('bank_id')
  }
  get pan_no() {
    return this.transportForm.get('pan_no')
  }
  get payment_terms() {
    return this.transportForm.get('payment_terms')
  }
  get apply_tds() {
    return this.transportForm.get('apply_tds')
  }
  get credit_limit() {
    return this.transportForm.get('credit_limit')
  }
  get countryy() {
    return this.transportForm.get('country')
  }
  get statee() {
    return this.transportForm.get('state')
  }
  get cityy() {
    return this.transportForm.get('city')
  }
  get pincode() {
    return this.transportForm.get('pincode')
  }
  get bname() {
    return this.transportForm.get('name')
  }
  get account_no() {
    return this.transportForm.get('account_no')
  }
  get bank_name() {
    return this.transportForm.get('bank_name')
  }
  get ifsc_code() {
    return this.transportForm.get('ifsc_code')
  }
}

