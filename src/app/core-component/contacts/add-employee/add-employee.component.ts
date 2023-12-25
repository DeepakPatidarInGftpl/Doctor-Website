import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private fb: FormBuilder, private contactService: ContactService, private toastr: ToastrService, private router: Router, private coreService: CoreService) { }
  employeeForm!: FormGroup;

  get f() {
    return this.employeeForm.controls;
  }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      login_access: new FormControl('',),
      name: new FormControl('', [Validators.required]),
      mobile_no: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]*$/)]),
      whatsapp_no: new FormControl('', [Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]*$/)]),
      email: new FormControl('', [Validators.email]),
      remark: new FormControl(''),
      dob: new FormControl('',),
      anniversary: new FormControl('',),
      apply_tds: new FormControl(''),
      pan_no: new FormControl('', [Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]),
      credit_limit: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      address: this.fb.array([]),
      bank_id: this.fb.array([]),
      // commision: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      wages: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      // extra_wages: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      // target: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl(''),
      opening_balance: new FormControl(0, [Validators.pattern(/^[0-9]*$/)]),
      opening_balance_type: new FormControl('', [Validators.required]),
      // permissions:new FormArray([],),
      branch:new FormControl(''),
      date_of_joining:new FormControl(''),
      department:new FormControl('')
    })
    this.addAddress();
    this.addBank();
    this.getCountry();
    this.getPermission();
    this.getGroup();
    this.getBranch();
    this.getDepartment();
  }

  groupList: any
  getGroup() {
    this.contactService.getPermissionGroup().subscribe((res: any) => {
      // console.log(res);
      this.groupList = res
    })
  }
  branchList:any;
  getBranch(){
    this.contactService.getBranch().subscribe((res:any)=>{
      this.branchList=res;
    })
  }
  departmentList:any;
  getDepartment(){
    this.contactService.getDepartment().subscribe((res:any)=>{
      this.departmentList=res;
    })
  }
  
  addressAdd(): FormGroup {
    return this.fb.group({
      address_line_1: (''),
      address_line_2: (''),
      country: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.maxLength(6), Validators.minLength(6), Validators.pattern(/^[0-9]*$/)]),
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
      account_no: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
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
  country: any[] = [];
  state: any[][] = []; // Array of arrays to store states for each formArray item
  city: any[][] = []; // Array of arrays to store cities for each formArray item

  getCountry() {
    this.coreService.countryList().subscribe((res: any) => {
      this.country = res;
      // console.log(this.country);
    });
  }

  selectState(val: any, i) {
    // console.log(val);
    const addressArray = this.getAddresss();
    const addressControl = addressArray.at(i).get('country');
    addressControl.setValue(val);

    this.coreService.getStateByCountryId(val).subscribe(res => {
      this.state[i] = res;
      // console.log(this.state[i]);
      // Reset city for the current formArray item
      this.city[i] = [];
    });
  }

  selectCity(val: any, i) {
    // console.log(val);
    const addressArray = this.getAddresss();
    const addressControl = addressArray.at(i).get('state');
    addressControl.setValue(val);

    this.coreService.getCityByStateId(val).subscribe(res => {
      this.city[i] = res;
      // console.log(this.city[i]);
    });
  }
  permissionDetails: any;
  getPermission() {
    this.contactService.getPermission()?.subscribe((res: any) => {
      // console.log(res);
      this.permissionDetails = res;
      // console.log(this.permissionDetails[0].name);
    })
  }

  // selectedPermission = 0;
  // onCheckChange(event: any) {
  //   const formArray: any = this.employeeForm.get('permissions') as FormArray;

  //   /* Selected */
  //   if (event.target.checked) {
  //     // Add a new control in the arrayForm
  //     formArray.push(new FormControl(parseInt(event.target.value)));
  //     // parseInt(formArray.push(new FormControl(event.target.value)))
  //     this.selectedPermission++;
  //   }
  //   /* unselected */
  //   else {
  //     // find the unselected element
  //     let i: number = 0;
  //     formArray.controls.forEach((ctrl: any) => {
  //       if (ctrl.value == event.target.value) {
  //         // Remove the unselected element from the arrayForm
  //         formArray.removeAt(i);
  //         this.selectedPermission--;
  //         return;
  //       }
  //       i++;
  //     });
  //   }
  // }

  loader = false;
  userError:any;
  mobileError:any;
  submit() {
    console.log(this.employeeForm.value);
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

    // formdata.append('commision', this.employeeForm.get('commision')?.value);
    formdata.append('wages', this.employeeForm.get('wages')?.value);
    // formdata.append('extra_wages', this.employeeForm.get('extra_wages')?.value);

    // formdata.append('target', this.employeeForm.get('target')?.value);
    formdata.append('username', this.employeeForm.get('username')?.value);
    formdata.append('password', this.employeeForm.get('password')?.value);
    formdata.append('role', this.employeeForm.get('role')?.value);

    formdata.append('opening_balance', this.employeeForm.get('opening_balance')?.value);
    formdata.append('opening_balance_type', this.employeeForm.get('opening_balance_type')?.value);
    // formdata.append('permissions', JSON.stringify(this.employeeForm.get('permissions')?.value));
    formdata.append('branch', this.employeeForm.get('branch')?.value);
    formdata.append('date_of_joining', this.employeeForm.get('date_of_joining')?.value);
    formdata.append('department', this.employeeForm.get('department')?.value);

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
      this.loader = true;
      this.contactService.addEmployee(formdata).subscribe(res => {
        // console.log(res);
        this.addRes = res
        if (this.addRes.success) {
          this.loader = false
          this.toastr.success(this.addRes.msg)
          this.employeeForm.reset()
          this.router.navigate(['//contacts/employee'])
        } else {
          this.loader = false;
          this.toastr.error(this.addRes.msg);
          if(this.addRes.msg.includes('Username')){
            this.userError=this.addRes.msg;
            setTimeout(() => {
              this.userError=''
            }, 5000);
          }else if(this.addRes?.msg.includes('Mobile Number')){
            this.mobileError=this.addRes.msg;
            setTimeout(() => {
              this.mobileError=''
            }, 5000);
          }
        }
      }, err => {
        this.loader = false;
        // console.log(err.error.gst);
        if (err.error.msg) {
          this.toastr.error(err.error.msg)
        }
        else if (err.error.detail) {
          this.toastr.error(err.error.detail, 'details')
        } else if (err.error.dob) {
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
    }
    else {
      this.loader = false;
      this.employeeForm.markAllAsTouched();
      // console.log('hhhhhh');
      this.toastr.error('Please Fill All The Required Fields')
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
  get date_of_joining(){
    return this.employeeForm.get('date_of_joining')
  }
  get branch(){
    return this.employeeForm.get('branch')
  }
  get department(){
    return this.employeeForm.get('department')
  }
  get apply_tds() {
    return this.employeeForm.get('apply_tds')
  }
  get credit_limit() {
    return this.employeeForm.get('credit_limit')
  }
  get role() {
    return this.employeeForm.get('role')
  }
  get opening_balance_type() {
    return this.employeeForm.get('opening_balance_type')
  }
  get opening_balance() {
    return this.employeeForm.get('opening_balance')
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

  get email() {
    return this.employeeForm.get('email')
  }
  get username() {
    return this.employeeForm.get('username')
  }
  get password() {
    return this.employeeForm.get('password')
  }
  // get permission_group() {
  //   return this.employeeForm.get('permission_group')
  // }
  // permissions(){
  //   return this.employeeForm.get('permissions')
  // }
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


