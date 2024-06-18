import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss']
})
export class AddSupplierComponent implements OnInit {

  constructor(private fb: FormBuilder, private contactService: ContactService, private toastr: ToastrService, private router: Router, private coreService: CoreService) { }
  supplierForm!: FormGroup;
  get f() {
    return this.supplierForm.controls;
  }

  selectedVariants: any[] = [];
  ngOnInit(): void {
    this.supplierForm = this.fb.group({
      login_access: new FormControl('',),
      name: new FormControl('', [Validators.required]),
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
      payment_terms: new FormControl('6'),
      opening_balance: new FormControl(0, [Validators.pattern(/^[0-9]*$/)]),
      opening_balance_type: new FormControl('Cr', [Validators.required]),
      supplier_type: new FormControl('', [Validators.required]),
      variant: new FormArray<any>([],),
    });

    this.getgstType();
    this.addAddress()
    this.addBank()
    this.getCountry();
    this.selectState(23, 0);
    this.selectCity(28, 0);
    this.getPaymentTerms();
    this.getVraiant()
  }

  variants: any[] = [];
  getVraiant() {
    this.contactService.productVariant().subscribe((res: any) => {
      this.variants = res
    })
  }

  search;
  isproduct = false;
  isProductLoading = false;
  searchProduct(product: any) {
    console.log(product);

    this.isProductLoading = true;
    console.log(this.isProductLoading, 'bhbhbhbhbhhb');

    if (product.value) {
      this.contactService.searchProduct(product.value).subscribe(res => {
        this.isProductLoading = false;
        this.search = res;
        console.log(this.search);
        this.isproduct = true
      });
    } else {
      // this.search = [];
    }
  }
  hideSearch() {
    this.search = undefined;
  }
  //dropdown auto close stop
  onLabelClick(event: Event) {
    // Prevent the event from propagating to the dropdown menu
    event.stopPropagation();
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
    return this.supplierForm.get('address') as FormArray;
  }

  addAddress() {
    const addressArray = this.getAddresss();
    const newAddressGroup = this.addressAdd();
    this.getAddresss().push(this.addressAdd());

    newAddressGroup.markAsPristine();
    newAddressGroup.markAsUntouched();
    const index = addressArray.length - 1;
    this.selectState('23', index).then(() => {
      this.selectCity('28', index);
    });
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
    return this.supplierForm.get('bank_id') as FormArray;
  }
  addBank() {
    this.getBanks().push(this.bankAdd())
  }
  removeBank(i: number) {
    this.getBanks().removeAt(i)
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

  loader = false;
  mobileErr: any;
  gstinErr: any;
  submit() {
    console.log(this.supplierForm.value);
    let formdata: any = new FormData();
    formdata.append('login_access', this.supplierForm.get('login_access')?.value);
    formdata.append('name', this.supplierForm.get('name')?.value);
    formdata.append('company_name', this.supplierForm.get('company_name')?.value);
    formdata.append('mobile_no', this.supplierForm.get('mobile_no')?.value);
    formdata.append('telephone_no', this.supplierForm.get('telephone_no')?.value);
    formdata.append('whatsapp_no', this.supplierForm.get('whatsapp_no')?.value);
    formdata.append('email', this.supplierForm.get('email')?.value);
    formdata.append('remark', this.supplierForm.get('remark')?.value);
    formdata.append('date_of_birth', this.supplierForm.get('date_of_birth')?.value);
    formdata.append('anniversary_date', this.supplierForm.get('anniversary_date')?.value);
    formdata.append('gst_type', this.supplierForm.get('gst_type')?.value);
    formdata.append('gstin', this.supplierForm.get('gstin')?.value);
    formdata.append('pan_no', this.supplierForm.get('pan_no')?.value);
    formdata.append('apply_tds', this.supplierForm.get('apply_tds')?.value);
    formdata.append('credit_limit', this.supplierForm.get('credit_limit')?.value);
    formdata.append('payment_terms', this.supplierForm.get('payment_terms')?.value);
    formdata.append('opening_balance', this.supplierForm.get('opening_balance')?.value);
    formdata.append('opening_balance_type', this.supplierForm.get('opening_balance_type')?.value);
    formdata.append('supplier_type', this.supplierForm.get('supplier_type')?.value);
    formdata.append('variant', JSON.stringify(this.supplierForm.get('variant')?.value));
    // nested addrs data 
    const addressArray = this.supplierForm.get('address') as FormArray;
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
    const bankArray = this.supplierForm.get('bank_id') as FormArray;
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

    if (this.supplierForm.valid) {
      // console.log('log');
      this.loader = true;
      this.contactService.addSupplier(formdata).subscribe(res => {
        // console.log(res);
        this.addRes = res
        if (this.addRes.success) {
          this.loader = false;
          this.toastr.success(this.addRes.msg)
          this.supplierForm.reset()
          this.router.navigate(['//contacts/supplier'])
        } else {
          this.loader = false;
          console.log(this.addRes.error);

          if (this.addRes?.error?.mobile_no) {
            this.toastr.error(this.addRes?.error?.mobile_no[0])
            this.mobileErr = this.addRes?.error?.mobile_no[0];
            setTimeout(() => {
              this.mobileErr = ''
            }, 8000);
          } else if (this.addRes?.error?.gstin) {
            this.toastr.error(this.addRes?.error?.gstin[0]);
            this.gstinErr = this.addRes?.error?.gstin[0];
            setTimeout(() => {
              this.gstinErr = ''
            }, 8000);
          } else if (this.addRes?.opening_balance) {
            this.toastr.error(this.addRes?.opening_balance[0]);
          } else if (this.addRes?.error?.email) {
            this.toastr.error(this.addRes?.error?.email[0])
          }

        }
      }, err => {
        this.loader = false
        // console.log(err.error);
        if (err.error.msg) {
          this.toastr.error(err.error.msg)
          if (err.error.msg == "Mobile Number Already Exists") {
            this.mobileErr = err.error.msg
            setTimeout(() => {
              this.mobileErr = ''
            }, 5000);
          }
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
      this.supplierForm.markAllAsTouched()
      // console.log('hhhhhh');
      this.toastr.error('Please Fill All The Required Fields')
    }
  }

  get login_access() {
    return this.supplierForm.get('login_access')
  }
  get name() {
    return this.supplierForm.get('name')
  }
  get company_name() {
    return this.supplierForm.get('company_name')
  }
  get dob() {
    return this.supplierForm.get('date_of_birth');
  }
  get mobile() {
    return this.supplierForm.get('mobile_no');
  }
  get telephone_no() {
    return this.supplierForm.get('telephone_no');
  }
  get whatsapp_no() {
    return this.supplierForm.get('whatsapp_no')
  }
  get anniversary() {
    return this.supplierForm.get('anniversary_date');
  }
  get email() {
    return this.supplierForm.get('email')
  }
  get remark() {
    return this.supplierForm.get('remark');
  }
  get gst_type() {
    return this.supplierForm.get('gst_type')
  }
  get gstin() {
    return this.supplierForm.get('gstin')
  }
  get opening_balance() {
    return this.supplierForm.get('opening_balance')
  }
  get supplier_type() {
    return this.supplierForm.get('supplier_type')
  }
  get address() {
    return this.supplierForm.get('address')
  }

  get pan_no() {
    return this.supplierForm.get('pan_no')
  }
  get payment_terms() {
    return this.supplierForm.get('payment_terms')
  }
  get apply_tds() {
    return this.supplierForm.get('apply_tds')
  }
  get credit_limit() {
    return this.supplierForm.get('credit_limit')
  }
  get opening_balance_type() {
    return this.supplierForm.get('opening_balance_type')
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

  searchVariant = ''
  selectData: any[] = []
  SelectedProduct(variant: any) {
    console.log('dd');
    console.log(variant);
    this.addVariant(variant.id)
    this.selectData.push(variant)
    console.log(this.selectData, 'selected data');
    //close dropdown
    this.search = undefined
    this.isproduct = false;
    this.searchVariant = ''
  }
  addVariant(event: any) {
    const formArray: any = this.supplierForm.get('variant') as FormArray;
    console.log(event);
    if (event) {
      formArray.push(new FormControl(parseInt(event)));
      console.log(formArray);
    }
    else {
      let i: number = 0;
      formArray.controls.forEach((ctrl: any) => {
        if (ctrl.value == event) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  removeVariant(event: any) {
    const formArray: any = this.supplierForm.get('variant') as FormArray;
    let i: number = 0;
    formArray.controls.forEach((ctrl: any) => {
      if (ctrl.value == event) {
        formArray.removeAt(i);
        const selectedIndex = this.selectData.findIndex(item => item.id === event);
        if (selectedIndex !== -1) {
          this.selectData.splice(selectedIndex, 1);
        }
        console.log(this.selectData);
        return;
      }
      i++;
    });
  }
}

