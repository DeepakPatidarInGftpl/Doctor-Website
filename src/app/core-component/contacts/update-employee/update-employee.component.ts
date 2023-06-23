import { Component, OnInit } from '@angular/core';

import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private fb: FormBuilder, private contactService: ContactService, private toastr: ToastrService, private router: Router,
    private coreService: CoreService,
    private Arout: ActivatedRoute
  ) { }
  employeeForm!: FormGroup;

  get f() {
    return this.employeeForm.controls;
  }
  id: any;
  getRes: any;

  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');

    this.employeeForm = this.fb.group({
      login_access: new FormControl('',),
      name: new FormControl('', [Validators.required]),
      mobile_no: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]*$/)]),
      whatsapp_no: new FormControl('', [Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]*$/)]),
      email: new FormControl(),
      remark: new FormControl(),
      dob: new FormControl('',),
      anniversary: new FormControl('',),
      apply_tds: new FormControl(''),
      pan_no: new FormControl('', [Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]),
      credit_limit: new FormControl(''),
      address: this.fb.array([]),
      bank_id: this.fb.array([]),

      commission: new FormControl('',),
      wages: new FormControl(''),
      extra_wages: new FormControl(''),
      target: new FormControl(''),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      permission_group: new FormControl('')
    });

    this.contactService.getEmployeeById(this.id).subscribe(res => {
      this.getRes = res;
      this.employeeForm.patchValue(this.getRes);

      this.employeeForm.setControl('address', this.udateAddress(this.getRes.address));
      this.employeeForm.setControl('bank_id', this.udateBank(this.getRes.bank_id));
    })

    this.addAddress()
    this.addBank()
    this.getCountry();
  }

   // updated data
   udateAddress(add: any): FormArray {
    let formarr = new FormArray([]);
    add.forEach((j: any) => {
      formarr.push(this.fb.group({
        address_line_1: j.address_line_1,
        address_line_2: j.address_line_2,
        country: j.country.id,
        state: j.state.id,
        city: j.city.id,
        pincode: j.pincode,
        address_type: j.address_type
      })
      )
      this.selectState(j.country.id);
      this.selectCity(j.state.id);
    })
    return formarr
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
    return this.employeeForm.get('address') as FormArray;
  }
  addAddress() {
    this.getAddresss().push(this.addressAdd())
  }
  removeAddress(i: any) {
    this.getAddresss().removeAt(i)
  }

  bankAdd(): FormGroup {
    return this.fb.group({
      bank_ifsc_code: new FormControl('', [Validators.required]),
      bank_name: new FormControl('', [Validators.required]),
      branch_name: new FormControl(''),
      account_no: new FormControl('', Validators.required),
      account_holder_name: new FormControl('', [Validators.required])
    })
  }

  getBanks(): FormArray {
    return this.employeeForm.get('bank_id') as FormArray;
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
loader=false;
  submit() {

    let formdata: any = new FormData();
    formdata.append('login_access', this.employeeForm.get('login_access')?.value);
    formdata.append('name', this.employeeForm.get('name')?.value);
    formdata.append('mobile_no', this.employeeForm.get('mobile_no')?.value);
    formdata.append('whatsapp_no', this.employeeForm.get('whatsapp_no')?.value);
    formdata.append('email', this.employeeForm.get('email')?.value);
    formdata.append('remark', this.employeeForm.get('remark')?.value);
    formdata.append('dob', this.employeeForm.get('dob')?.value);
    formdata.append('anniversary', this.employeeForm.get('anniversary')?.value);
    formdata.append('apply_tds', this.employeeForm.get('apply_tds')?.value);
    formdata.append('pan_no', this.employeeForm.get('pan_no')?.value);
    formdata.append('credit_limit', this.employeeForm.get('credit_limit')?.value);

    formdata.append('commission', this.employeeForm.get('commission')?.value);
    formdata.append('wages', this.employeeForm.get('wages')?.value);
    formdata.append('extra_wages', this.employeeForm.get('extra_wages')?.value);

    formdata.append('target', this.employeeForm.get('target')?.value);
    formdata.append('username', this.employeeForm.get('username')?.value);
    formdata.append('password', this.employeeForm.get('password')?.value);
    formdata.append('permission_group', this.employeeForm.get('permission_group')?.value);

    // nested addrs data 
    const addressArray = this.employeeForm.get('address') as FormArray;
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
    const bankArray = this.employeeForm.get('bank_id') as FormArray;
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

    if (this.employeeForm.valid) {
      this.loader=true;
      this.contactService.updateEmployee(formdata,this.id).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Employee updated successfully") {
          this.loader=false;
          this.toastr.success(this.addRes.msg)
          this.employeeForm.reset()
          this.router.navigate(['//contacts/employee'])
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
      this.employeeForm.markAllAsTouched()
      console.log('hhhhhh');
    }
  }

  get login_access() {
    return this.employeeForm.get('login_access')
  }
  get name() {
    return this.employeeForm.get('name')
  }
  get target() {
    return this.employeeForm.get('target')
  }
  get dob() {
    return this.employeeForm.get('date_of_birth');
  }
  get mobile() {
    return this.employeeForm.get('mobile_no');
  }
  get extra_wages() {
    return this.employeeForm.get('extra_wages');
  }
  get whatsapp_no() {
    return this.employeeForm.get('whatsapp_no')
  }
  get anniversary() {
    return this.employeeForm.get('anniversary_date');
  }
  get wages() {
    return this.employeeForm.get('wages');
  }
  get commision() {
    return this.employeeForm.get('commision')
  }

  get address() {
    return this.employeeForm.get('address')
  }
  get bank() {
    return this.employeeForm.get('bank_id')
  }
  get pan_no() {
    return this.employeeForm.get('pan_no')
  }
  get payment_terms() {
    return this.employeeForm.get('payment_terms')
  }
  get apply_tds() {
    return this.employeeForm.get('apply_tds')
  }
  get credit_limit() {
    return this.employeeForm.get('credit_limit')
  }

  get countryy() {
    return this.employeeForm.get('country')
  }
  get statee() {
    return this.employeeForm.get('state')
  }
  get cityy() {
    return this.employeeForm.get('city')
  }
  get pincode() {
    return this.employeeForm.get('pincode')
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

  get email() {
    return this.employeeForm.get('email')
  }
  get username() {
    return this.employeeForm.get('username')
  }
  get password() {
    return this.employeeForm.get('password')
  }
  get permission_group() {
    return this.employeeForm.get('permission_group')
  }
  selectedSubCatGrp = 0;

  onCheckAddress(event: any) {
    const formArray: any = this.employeeForm.get('address') as FormArray;
    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(parseInt(event.target.value)));
      // parseInt(formArray.push(new FormControl(event.target.value)))
      this.selectedSubCatGrp++;
    }
    /* unselected */
    else {
      // find the unselected element
      let i: number = 0;

      formArray.controls.forEach((ctrl: any) => {
        if (ctrl.value == event.target.value) {

          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          this.selectedSubCatGrp--;
          return;
        }
        i++;
      });
    }
  }
  onCheckBank(event: any) {
    const formArray: any = this.employeeForm.get('bank_id') as FormArray;
    if (event.target.checked) {
      formArray.push(new FormControl(parseInt(event.target.value)));
      // parseInt(formArray.push(new FormControl(event.target.value)))
      this.selectedSubCatGrp++;
    }
    else {
      let i: number = 0;

      formArray.controls.forEach((ctrl: any) => {
        if (ctrl.value == event.target.value) {
          formArray.removeAt(i);
          this.selectedSubCatGrp--;
          return;
        }
        i++;
      });
    }
  }
  //dropdown auto close stop
  onLabelClick(event: Event) {
    // Prevent the event from propagating to the dropdown menu
    event.stopPropagation();
  }
  addressDetails: any
  getAddress() {
    this.addressDetails = ''
  }
  bankDetails: any
  getBank() {
    this.bankDetails = ''
  }
}


