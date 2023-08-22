import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {

  constructor(private fb: FormBuilder, private coreService: CoreService, private toastr: ToastrService, private router: Router, private companyService: CompanyService) { }
  employeeForm!: FormGroup;

  get f() {
    return this.employeeForm.controls;
  }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      fathers_name: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]*$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      anniversary: new FormControl(''),
      address: new FormControl(''),
      pincode: new FormControl('', [Validators.maxLength(6), Validators.minLength(6), Validators.pattern(/^[0-9]*$/)]),
      attendance: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      employee_id: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      country: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl('')
    })
    this.getCountry();
    // this.getState();
    // this.getCity();
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
      // console.log(this.state);
    })
  }
  selectState(val: any) {
    // console.log(val);
    this.coreService.getStateByCountryId(val).subscribe(res => {
      this.state = res;
      // console.log(this.state);
    })
  }
  city: any
  getCity() {
    this.coreService.getCity().subscribe(res => {
      // this.city = res;
    })
  }
  selectCity(val: any) {
    // console.log(val);
    this.coreService.getCityByStateId(val).subscribe(res => {
      this.city = res;
    })
  }
  dateError = null
  addRes: any
  submit() {
    // console.log(this.employeeForm.value);
    if (this.employeeForm.valid) {
      this.coreService.addEmployee(this.employeeForm.value).subscribe(res => {
        // console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Successfuly Added") {
          this.toastr.success(this.addRes.msg)
          this.employeeForm.reset()
          this.router.navigate(['//masters/employeelist'])
          // .then(() => {
          // window.location.reload()
          // })
        }
      }, err => {
        // console.log(err.error.gst);
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
        // this.toastr.error(err.error.gst)
        // this.toastr.error(err.error.email)
        // this.toastr.error(err.error.state)
        // this.toastr.error(err.error.country)
        // this.toastr.error(err.error.phone)
        // this.toastr.error(err.error.pincode)
        // this.toastr.error(err.error.financial_year)
        // this.toastr.error(err.error.currency)
      })
    } else {
      this.employeeForm.markAllAsTouched()
      // console.log('hhhhhh');

    }
  }

  get name() {
    return this.employeeForm.get('name')
  }
  get fathers_name() {
    return this.employeeForm.get('fathers_name')
  }
  get dob() {
    return this.employeeForm.get('dob');
  }
  get mobile() {
    return this.employeeForm.get('mobile');
  }
  get anniversary() {
    return this.employeeForm.get('anniversary');
  }
  get attendance() {
    return this.employeeForm.get('attendance');
  }
  get employee_id() {
    return this.employeeForm.get('employee_id')
  }
  get pincode() {
    return this.employeeForm.get('pincode')
  }
  get email() {
    return this.employeeForm.get('email')
  }
  get address() {
    return this.employeeForm.get('address')
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
}
