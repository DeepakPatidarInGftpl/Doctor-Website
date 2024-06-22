import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-update-dealer',
  templateUrl: './update-dealer.component.html',
  styleUrls: ['./update-dealer.component.scss']
})
export class UpdateDealerComponent implements OnInit {

  constructor(private fb: FormBuilder, private contactService: ContactService, private toastr: ToastrService, private router: Router, private coreService: CoreService, private Arout: ActivatedRoute) { }
  dealerForm!: FormGroup;

  get f() {
    return this.dealerForm.controls;
  }
  getRes: any;
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');

    this.dealerForm = this.fb.group({
      login_access: new FormControl('',),
      name: new FormControl('',),
      company_name: new FormControl('', [Validators.required]),
      mobile_no: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]*$/)]),
      telephone_no: new FormControl('',),
      whatsapp_no: new FormControl('', [Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]*$/)]),
      email: new FormControl('', [Validators.email]),
      remark: new FormControl(''),
      date_of_birth: new FormControl('',),
      anniversary_date: new FormControl('',),
      gst_type: new FormControl('',),
      gstin: new FormControl('', [Validators.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}")]),
      pan_no: new FormControl('', [Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]),
      apply_tds: new FormControl(''),
      credit_limit: new FormControl('',),
      address: this.fb.array([]),
      bank_id: this.fb.array([]),
      payment_terms: new FormControl(''),
      opening_balance: new FormControl(0, [Validators.pattern(/^[0-9]*$/)]),
      // supplier_type: new FormControl('', [Validators.required]),
      opening_balance_type: new FormControl('', [Validators.required]),
      membership: new FormControl('')
    });

    this.contactService.getDealerById(this.id).subscribe(res => {
      this.getRes = res;

      const filteredRes = Object.keys(res).reduce((acc, key) => {
        if (res[key] !== null && res[key] !== '' && res[key] !== 'null') {
          acc[key] = res[key];
        }
        return acc;
      }, {});

      this.dealerForm.patchValue(filteredRes);
      this.dealerForm.get('payment_terms')?.patchValue(this.getRes?.payment_terms == undefined ? '' : this.getRes?.payment_terms?.id)
      this.dealerForm.get('date_of_birth')?.patchValue(this.getRes?.date_of_birth == null ? '' : this.getRes?.date_of_birth)
      this.dealerForm.get('anniversary_date')?.patchValue(this.getRes?.anniversary_date == null ? '' : this.getRes?.anniversary_date)
      this.dealerForm.get('credit_limit')?.patchValue(this.getRes?.credit_limit == null ? '' : this.getRes?.credit_limit)
      this.dealerForm.get('opening_balance')?.patchValue(this.getRes?.opening_balance == null ? '' : this.getRes?.opening_balance)
      this.dealerForm.setControl('address', this.updateAddress(this.getRes?.address));
      this.dealerForm.setControl('bank_id', this.udateBank(this.getRes?.bank_id));
    });

    this.getgstType();
    this.addAddress()
    this.addBank()
    this.getCountry();
    this.getPaymentTerms();
  }
  paymentTerms: any;
  getPaymentTerms() {
    this.contactService.getPaymentTerms().subscribe(res => {
      this.paymentTerms = res;
    })
  }
  addressAdd(): FormGroup {
    return this.fb.group({
      address_line_1: (''),
      address_line_2: (''),
      country: new FormControl('23', [Validators.required]),
      state: new FormControl('28', [Validators.required]),
      city: new FormControl('42', [Validators.required]),
      pincode: new FormControl('841226', [Validators.maxLength(6), Validators.minLength(6), Validators.pattern(/^[0-9]*$/)]),
      address_type: ('')
    });
  }
  getAddresss(): FormArray {
    return this.dealerForm.get('address') as FormArray;
  }
  addAddress() {
    const addressArray = this.getAddresss();
    this.getAddresss().push(this.addressAdd());
    const index = addressArray.length - 1;
    this.selectState('23', index).then(() => {
      this.selectCity('28', index);
    });
  }
  removeAddress(i: any) {
    this.getAddresss().removeAt(i)
  }

  bankAdd(): FormGroup {
    return this.fb.group({
      bank_ifsc_code: new FormControl('', [Validators.required]),
      bank_name: new FormControl('', [Validators.required]),
      branch_name: new FormControl(''),
      account_no: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      account_holder_name: new FormControl('', [Validators.required])
    })
  }
  getBanks(): FormArray {
    return this.dealerForm.get('bank_id') as FormArray;
  }
  addBank() {
    this.getBanks().push(this.bankAdd())
  }
  removeBank(i: number) {
    this.getBanks().removeAt(i)
  }


  updateAddress(add: any[]): FormArray {
    const formArr = new FormArray([]);

    add.forEach((j: any) => {
      // console.log(j);
      const addressGroup = this.fb.group({
        address_line_1: j?.address_line_1 == null ? '' : j?.address_line_1,
        address_line_2: j?.address_line_2 == null ? '' : j?.address_line_2,
        country: j?.country.id,
        state: null,
        city: null,
        pincode: j?.pincode == null ? '' : j?.pincode,
        address_type: j?.address_type == null ? '' : j?.address_type
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

  // updated data
  udateBank(add: any): FormArray {
    let formarr = new FormArray([]);
    add.forEach((j: any) => {
      formarr.push(this.fb.group({
        bank_ifsc_code: j.bank_ifsc_code,
        bank_name: j.bank_name,
        branch_name: j.branch_name,
        account_no: j.account_no,
        account_holder_name: j.account_holder_name
      })
      )
    })
    return formarr
  }

  gstType: any;
  getgstType() {
    this.contactService.getTypeOfGst().subscribe(res => {
      // console.log(res);
      this.gstType = res;
    })
  }
  dateError = null
  addRes: any;
  country: any[] = [];
  state: any[][] = []; // Array of arrays to store states for each formArray item
  city: any[][] = []; // Array of arrays to store cities for each formArray item

  getCountry() {
    this.coreService.countryList().subscribe((res: any) => {
      this.country = res;
      // console.log(this.country);
    });
  }

  selectState(val: any, i): Promise<void> {
    return new Promise((resolve, reject) => {
      const addressArray = this.getAddresss();
      const addressControl = addressArray.at(i).get('country');
      const pinCodeControl = addressArray.at(i).get('pincode');
      pinCodeControl.setValue('841226');
      addressControl.setValue(val);

      this.coreService.getStateByCountryId(val).subscribe(
        res => {
          this.state[i] = res;
          const addressControl = addressArray.at(i);
          addressControl.get('state').setValue('28');
          // Reset city for the current formArray item
          this.city[i] = [];
          resolve();
        },
        (err) => reject(err)
      );
    });
  }

  selectedState(val, i) {
    // console.log(val, i);
    if (val) {
      this.coreService.getStateByCountryId(val).subscribe(res => {
        this.state[i] = res;
        // console.log(this.state[i]);
        // this.city[i] = [];
      });
    }
  }

  selectCity(val: any, i) {
    const addressArray = this.getAddresss();
    const addressControl = addressArray.at(i).get('state');
    addressControl.setValue(val);

    this.coreService.getCityByStateId(val).subscribe(res => {
      this.city[i] = res;
      setTimeout(() => {
        const addressControl = addressArray.at(i);
        addressControl.get('city').setValue('42');
      }, 100);
    });
  }

  selectedCity(val: any, i) {
    // console.log(val, i);
    if (val) {
      this.coreService.getCityByStateId(val).subscribe(res => {
        this.city[i] = res;
        // console.log(this.city[i]);
      });
    }

  }

  loader = false;
  mobError: any;
  submit() {
    // console.log(this.dealerForm.value);
    let formdata: any = new FormData();
    formdata.append('login_access', this.dealerForm.get('login_access')?.value);
    formdata.append('name', this.dealerForm.get('name')?.value);
    formdata.append('company_name', this.dealerForm.get('company_name')?.value);
    formdata.append('mobile_no', this.dealerForm.get('mobile_no')?.value);
    formdata.append('telephone_no', this.dealerForm.get('telephone_no')?.value);
    formdata.append('whatsapp_no', this.dealerForm.get('whatsapp_no')?.value);
    formdata.append('email', this.dealerForm.get('email')?.value);
    formdata.append('remark', this.dealerForm.get('remark')?.value);
    formdata.append('date_of_birth', this.dealerForm.get('date_of_birth')?.value);
    formdata.append('anniversary_date', this.dealerForm.get('anniversary_date')?.value);
    formdata.append('gst_type', this.dealerForm.get('gst_type')?.value);
    formdata.append('gstin', this.dealerForm.get('gstin')?.value);
    formdata.append('pan_no', this.dealerForm.get('pan_no')?.value);
    formdata.append('apply_tds', this.dealerForm.get('apply_tds')?.value);
    formdata.append('credit_limit', this.dealerForm.get('credit_limit')?.value);
    formdata.append('payment_terms', this.dealerForm.get('payment_terms')?.value);
    formdata.append('opening_balance', this.dealerForm.get('opening_balance')?.value);
    formdata.append('opening_balance_type', this.dealerForm.get('opening_balance_type')?.value);
    // formdata.append('supplier_type', this.dealerForm.get('supplier_type')?.value);
    formdata.append('membership', this.dealerForm.get('membership')?.value);

    // nested addrs data 
    const addressArray = this.dealerForm.get('address') as FormArray;
    const addressData = [];

    addressArray.controls.forEach((address) => {
      const featuresGroup = address as FormGroup;
      const featureObj = {};

      Object.keys(featuresGroup.controls).forEach((key) => {
        const control = featuresGroup.controls[key];
        if (key === 'state' || key === 'city' || key === 'country') {
          featureObj[key] = parseInt(control.value);
        } else {
          featureObj[key] = control.value;
        }
      });

      addressData.push(featureObj);
    });

    formdata.append('address', JSON.stringify(addressData));

    // nested bank data 
    const bankArray = this.dealerForm.get('bank_id') as FormArray;
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

    if (this.dealerForm.valid) {
      // console.log('log');
      this.loader = true;
      this.contactService.updateDealer(formdata, this.id).subscribe(res => {
        // console.log(res);
        this.addRes = res
        if (this.addRes.success) {
          this.loader = false;
          this.toastr.success(this.addRes.msg)
          this.dealerForm.reset()
          this.router.navigate(['//contacts/dealerList'])
        } else {
          this.loader = false
          this.toastr.error(this.addRes?.opening_balance[0]);
          this.toastr.error(this.addRes?.error)
          if (this.addRes?.email) {
            this.toastr.error(this.addRes?.error?.email[0])
          }
        }
      }, err => {
        this.loader = false
        // console.log(err.error);

        if (err.error.msg) {
          this.toastr.error(err.error.msg);
          this.mobError = err.error.msg;
          setTimeout(() => {
            this.mobError = '';
          }, 5000);
        }
        else if (err.error) {
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
    } else {
      this.dealerForm.markAllAsTouched()
      // console.log('hhhhhh');
      this.toastr.error('Please Fill All The Required Fields')
    }
  }

  get login_access() {
    return this.dealerForm.get('login_access')
  }
  get name() {
    return this.dealerForm.get('name')
  }
  get company_name() {
    return this.dealerForm.get('company_name')
  }
  get dob() {
    return this.dealerForm.get('date_of_birth');
  }
  get mobile() {
    return this.dealerForm.get('mobile_no');
  }
  get telephone_no() {
    return this.dealerForm.get('telephone_no');
  }
  get whatsapp_no() {
    return this.dealerForm.get('whatsapp_no')
  }
  get anniversary() {
    return this.dealerForm.get('anniversary_date');
  }
  get email() {
    return this.dealerForm.get('email')
  }
  get remark() {
    return this.dealerForm.get('remark');
  }
  get gst_type() {
    return this.dealerForm.get('gst_type')
  }
  get gstin() {
    return this.dealerForm.get('gstin')
  }
  get opening_balance() {
    return this.dealerForm.get('opening_balance')
  }
  get supplier_type() {
    return this.dealerForm.get('supplier_type')
  }
  get address() {
    return this.dealerForm.get('address')
  }
  get opening_balance_type() {
    return this.dealerForm.get('opening_balance_type')
  }
  get membership() {
    return this.dealerForm.get('membership')
  }
  get pan_no() {
    return this.dealerForm.get('pan_no')
  }
  get payment_terms() {
    return this.dealerForm.get('payment_terms')
  }
  get apply_tds() {
    return this.dealerForm.get('apply_tds')
  }
  get credit_limit() {
    return this.dealerForm.get('credit_limit')
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

  // nested bank error

  getBankHolderName(index: number) {
    return this.getBanks().controls[index].get('account_holder_name');
  }
  getAccountNo(index: number) {
    return this.getBanks().controls[index].get('account_no');
  }
  getIfscCode(index: number) {
    return this.getBanks().controls[index].get('bank_ifsc_code');
  }
  getBankName(index: number) {
    return this.getBanks().controls[index].get('bank_name');
  }


}


