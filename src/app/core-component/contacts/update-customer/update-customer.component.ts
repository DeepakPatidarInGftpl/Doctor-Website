import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {

  constructor(private fb: FormBuilder, private contactService: ContactService, private toastr: ToastrService, private router: Router,
    private Arout: ActivatedRoute,
    private coreService: CoreService) { }
  customerForm!: FormGroup;

  get f() {
    return this.customerForm.controls;
  }
  id: any;
  getRes:any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id')
    this.customerForm = this.fb.group({
      login_access: new FormControl(''),
      name: new FormControl(''),
      company_name: new FormControl(''),
      mobile_no: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]*$/)]),
      telephone_no: new FormControl('',),
      whatsapp_no: new FormControl('', [Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]*$/)]),
      email: new FormControl('',[Validators.email]),
      remark: new FormControl(''),
      date_of_birth: new FormControl('',),
      anniversary_date: new FormControl('',),
      gst_type: new FormControl('',),
      gstin: new FormControl('', [Validators.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}")]),
      pan_no: new FormControl('', [Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]),
      apply_tds: new FormControl(''),
      credit_limit: new FormControl(''),
      address: this.fb.array([]),
      payment_terms: new FormControl(''),
      opening_balance: new FormControl(''),
      invite_code: new FormControl(''),
      membership: new FormControl('')
    });

    this.contactService.getCustomerById(this.id).subscribe(res => {
      this.getRes=res;
     
      if(this.id==res.id){
        this.customerForm.patchValue(res);
        this.customerForm.get('payment_terms')?.patchValue(res.payment_terms.id)
        this.customerForm.setControl('address', this.updateAddress(this.getRes.address));
   }
    })

    this.addAddress()
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
   // updated data
   updateAddress(add: any[]): FormArray {
    const formArr = new FormArray([]);

    add.forEach((j: any) => {
      console.log(j);

      const addressGroup = this.fb.group({
        address_line_1: j.address_line_1,
        address_line_2: j.address_line_2,
        country: j.country.id,
        state: null,
        city: null,
        pincode: j.pincode,
        address_type: j.address_type
      });

      formArr.push(addressGroup);
    });

    formArr.controls.forEach((control, index) => {
      const countryId = control.get('country').value;

      control.get('country').valueChanges.subscribe((newCountryId) => {
        this.selectedState(newCountryId, index);
        control.get('state').setValue(null); // Reset state value when country changes
        control.get('city').setValue(null); // Reset city value when country changes
      });

      control.get('state').valueChanges.subscribe((newStateId) => {
        this.selectedCity(newStateId, index);
        control.get('city').setValue(null); // Reset city value when state changes
      });

      const stateId = add[index].state.id;
      const cityId = add[index].city.id;

      control.get('state').setValue(stateId);
      control.get('city').setValue(cityId);

      this.selectedState(countryId, index);
      this.selectedCity(stateId, index);
    });

    return formArr;
  }
  
  gstType: any;
  getgstType() {
    this.contactService.getTypeOfGst().subscribe(res => {
      console.log(res);
      this.gstType = res;
    })
  }
  addressAdd(): FormGroup {
    return this.fb.group({
      address_line_1: (''),
      address_line_2: (''),
      country: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      pincode: new FormControl('',[Validators.maxLength(6),Validators.minLength(6),Validators.pattern(/^[0-9]*$/)]),
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
  country: any[] = [];
  state: any[][] = []; // Array of arrays to store states for each formArray item
  city: any[][] = []; // Array of arrays to store cities for each formArray item

  getCountry() {
    this.coreService.countryList().subscribe((res: any) => {
      this.country = res;
      console.log(this.country);
    });
  }

  selectState(val: any, i) {
    console.log(val, i);
    const addressArray = this.getAddresss();
    const addressControl = addressArray.at(i).get('country');
    addressControl.setValue(val);

    this.coreService.getStateByCountryId(val).subscribe(res => {
      this.state[i] = res;
      console.log(this.state[i]);
      // Reset city for the current formArray item
      this.city[i] = [];
    });
  }
  selectedState(val, i) {
    console.log(val, i);
    if (val) {
      this.coreService.getStateByCountryId(val).subscribe(res => {
        this.state[i] = res;
        console.log(this.state[i]);
        // this.city[i] = [];
      });
    }

  }
  selectCity(val: any, i) {
    console.log(val, i);
    const addressArray = this.getAddresss();
    const addressControl = addressArray.at(i).get('state');
    addressControl.setValue(val);

    this.coreService.getCityByStateId(val).subscribe(res => {
      this.city[i] = res;
      console.log(this.city[i]);
    });

  }

  selectedCity(val: any, i) {
    console.log(val, i);
    if (val) {
      this.coreService.getCityByStateId(val).subscribe(res => {
        this.city[i] = res;
        console.log(this.city[i]);
      });
    }

  }
  loader=false;
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
      this.loader=true;
      this.contactService.updateCustomer(formdata,this.id).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "customer updated successfully") {
          this.loader=false;
          this.toastr.success(this.addRes.msg)
          this.customerForm.reset()
          this.router.navigate(['//contacts/customer'])
        }else{
          this.toastr.error(this.addRes?.opening_balance[0]);
          if(this.addRes?.email){
            this.toastr.error(this.addRes?.email[0])
          }}
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
  countryy(index: number) {
    return this.getAddresss().controls[index].get('country');
  }
  statee(index: number) {
    return this.getAddresss().controls[index].get('state');
  }
  cityy(index: number) {
    return this.getAddresss().controls[index].get('city');
  }
  pincode(index: number) {
    return this.getAddresss().controls[index].get('pincode')
  }
}