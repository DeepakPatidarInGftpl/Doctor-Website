import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.scss']
})
export class EditemployeeComponent implements OnInit {

  constructor(private fb: FormBuilder, private coreService: CoreService, private toastr: ToastrService, private router: Router, private companyService: CompanyService
    , private Arout: ActivatedRoute) { }
  employeeForm!: FormGroup;

  get f() {
    return this.employeeForm.controls;
  }

  id: any
  data: any
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.coreService.getEmployeeById(this.id).subscribe(res => {
      this.data = res
      this.employeeForm.patchValue(this.data)
    })

    this.employeeForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      fathers_name: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required,Validators.maxLength(10), Validators.minLength(10),Validators.pattern(/^[0-9]*$/)]),
      email: new FormControl('', [Validators.required,Validators.email]),
      anniversary: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required,Validators.maxLength(6), Validators.minLength(6),Validators.pattern(/^[0-9]*$/)]),
      // attendance: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]*$/)]),
      // employee_id: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]*$/)]),
      country: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
    })
    this.getCountry();
    this.getState();
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
    })
  }
  selectState(val: any) {
    console.log(val);
    this.coreService.stateList().subscribe(res => {
      this.state = res;
    })
  }
  addRes:any
  submit() {
    console.log(this.employeeForm.value);
    if (this.employeeForm.valid) {
      this.coreService.updateEmployee(this.employeeForm.value,this.id).subscribe(res => {
        console.log(res);
        this.addRes=res
        if (this.addRes.msg == "Employee updated successfully") {
          this.toastr.success(this.addRes.msg)
          this.employeeForm.reset()
          this.router.navigate(['//employee/employeelist'])
          // .then(() => {
          //   window.location.reload()
          // })
        }
      }, err => {
        console.log(err.error.gst);
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
    }
  }

  get name() {
    return this.employeeForm.get('name')
  }
  get fathers_name(){
    return this.employeeForm.get('fathers_name')
  }
  get dob() {
    return this.employeeForm.get('dob');
  }
  get mobile() {
    return this.employeeForm.get('mobile');
  }
  get anniversary(){
    return this.employeeForm.get('anniversary');
  }
  get attendance(){
    return this.employeeForm.get('attendance');
  }
  get employee_id(){
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

}
