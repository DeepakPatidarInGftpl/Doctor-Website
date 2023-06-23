import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent implements OnInit {

  constructor(private fb: FormBuilder, private contactService: ContactService, private toastr: ToastrService, private router: Router, private coreService: CoreService) { }
  vendorForm!: FormGroup;

  get f() {
    return this.vendorForm.controls;
  }

  ngOnInit(): void {
    this.vendorForm = this.fb.group({
      login_access: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      company_name: new FormControl('', [Validators.required]),
      mobile_no: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]*$/)]),
      telephone_no: new FormControl('',),
      whatsapp_no: new FormControl('', [Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]*$/)]),
      email: new FormControl(''),
      remark: new FormControl(''),
      date_of_birth: new FormControl('',[Validators.required]),
      anniversary_date: new FormControl('',[Validators.required]),
      gst_type: new FormControl('',),
      gstin: new FormControl('', [Validators.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}")]),
      pan_no: new FormControl('', [Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]),
      apply_tds: new FormControl(''),
      credit_limit: new FormControl('',[Validators.required]),
      // address: new FormArray<any>([], ),
      address: this.fb.array([]),
      payment_terms: new FormControl(''),
      opening_balance: new FormControl('',[Validators.required]),
      invite_code:new FormControl('',[Validators.required]),
      membership:new FormControl('',[Validators.required])
    })
    this.addAddress();
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
    return this.vendorForm.get('address') as FormArray;
  }
  addAddress() {
    this.getAddresss().push(this.addressAdd())
  }
  removeAddress(i: any) {
    this.getAddresss().removeAt(i)
    // const remove = this.taxSlabForm.get('amount_tax_slabs') as FormArray
    // if (remove.length > 1) {
    //   remove.removeAt(i)
    // } else {
    //   remove.reset()
    // }
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
    console.log(this.vendorForm.value);
    
    let formdata: any = new FormData();
    formdata.append('login_access', this.vendorForm.get('login_access')?.value);
    formdata.append('name', this.vendorForm.get('name')?.value);
    formdata.append('company_name', this.vendorForm.get('company_name')?.value);
    formdata.append('mobile_no', this.vendorForm.get('mobile_no')?.value);
    formdata.append('telephone_no', this.vendorForm.get('telephone_no')?.value);
    formdata.append('whatsapp_no', this.vendorForm.get('whatsapp_no')?.value);
    formdata.append('email', this.vendorForm.get('email')?.value);
    formdata.append('remark', this.vendorForm.get('remark')?.value);
    formdata.append('date_of_birth', this.vendorForm.get('date_of_birth')?.value);
    formdata.append('anniversary_date', this.vendorForm.get('anniversary_date')?.value);
    formdata.append('gst_type', this.vendorForm.get('gst_type')?.value);
    formdata.append('gstin', this.vendorForm.get('gstin')?.value);
    formdata.append('pan_no', this.vendorForm.get('pan_no')?.value);
    formdata.append('apply_tds', this.vendorForm.get('apply_tds')?.value);
    formdata.append('credit_limit', this.vendorForm.get('credit_limit')?.value);
    formdata.append('payment_terms', this.vendorForm.get('payment_terms')?.value);
    formdata.append('opening_balance', this.vendorForm.get('opening_balance')?.value);
    formdata.append('invite_code', this.vendorForm.get('invite_code')?.value);
    formdata.append('membership', this.vendorForm.get('membership')?.value);
    // nested addrs data 
    const addressArray = this.vendorForm.get('address') as FormArray;
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
    // if (this.vendorForm.valid) {
      this.contactService.addVendor(this.vendorForm.value).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Data Created") {
          this.toastr.success(this.addRes.msg)
          this.vendorForm.reset()
          this.router.navigate(['//contacts/vendor'])
        } else{
          this.toastr.error(this.addRes?.opening_balance[0]);
          if(this.addRes?.email){
            this.toastr.error(this.addRes?.error?.email[0])
          }}
      }, err => {
        console.log(err.error.gst);
        if(err.error.msg){
          this.toastr.error(err.error.msg)
        }
        if(err.error){
          this.toastr.error(err.error?.opening_balance[0]);
          this.toastr.error(err.error?.email[0])
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
    // } else {
      this.vendorForm.markAllAsTouched()
      console.log('hhhhhh');
    // }
  }

  get login_access() {
    return this.vendorForm.get('login_access')
  }
  get name() {
    return this.vendorForm.get('name')
  }
  get company_name() {
    return this.vendorForm.get('company_name')
  }
  get dob() {
    return this.vendorForm.get('date_of_birth');
  }
  get mobile() {
    return this.vendorForm.get('mobile_no');
  }
  get telephone_no() {
    return this.vendorForm.get('telephone_no');
  }
  get whatsapp_no() {
    return this.vendorForm.get('whatsapp_no')
  }
  get anniversary() {
    return this.vendorForm.get('anniversary_date');
  }
  get email() {
    return this.vendorForm.get('email')
  }
  get remark() {
    return this.vendorForm.get('remark');
  }
  get gst_type() {
    return this.vendorForm.get('gst_type')
  }
  get gstin() {
    return this.vendorForm.get('gstin')
  }
  get opening_balance() {
    return this.vendorForm.get('opening_balance')
  }
  get address() {
    return this.vendorForm.get('address')
  }
  get bank() {
    return this.vendorForm.get('bank_id')
  }
  get pan_no() {
    return this.vendorForm.get('pan_no')
  }
  get payment_terms() {
    return this.vendorForm.get('payment_terms')
  }
  get apply_tds() {
    return this.vendorForm.get('apply_tds')
  }
  get credit_limit() {
    return this.vendorForm.get('credit_limit')
  }
  get countryy() {
    return this.vendorForm.get('country')
  }
  get statee() {
    return this.vendorForm.get('state')
  }
  get cityy() {
    return this.vendorForm.get('city')
  }
  get pincode() {
    return this.vendorForm.get('pincode')
  }
}

