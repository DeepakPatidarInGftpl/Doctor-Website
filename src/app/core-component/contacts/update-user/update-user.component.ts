import { Component, OnInit } from '@angular/core';

import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

 
  constructor(private fb: FormBuilder, private contactService: ContactService, private toastr: ToastrService, private router: Router, private coreService: CoreService) { }
  userForm!: FormGroup;

  get f() {
    return this.userForm.controls;
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      mobile_no: new FormControl('', [Validators.required]),
      username: new FormControl('',),
      email:new FormControl('',),
      password:new FormControl('',),
      active:new FormControl(''),
      user_type:new FormControl(''),
      permission_group:new FormControl(''),
    })
  }

  dateError = null
  addRes: any;
 
  submit() {
    console.log(this.userForm.value);
    if (this.userForm.valid) {
      this.contactService.addSupplier(this.userForm.value).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Successfuly Added") {
          this.toastr.success(this.addRes.msg)
          this.userForm.reset()
          this.router.navigate(['//contacts/supplier'])
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
      this.userForm.markAllAsTouched()
      console.log('hhhhhh');

    }
  }

  get mobile_no() {
    return this.userForm.get('mobile_no')
  }
  get username() {
    return this.userForm.get('username')
  }
   get email() {
    return this.userForm.get('email')
  }
  get password() {
    return this.userForm.get('password')
  }
  get user_type() {
    return this.userForm.get('user_type')
  }
  get permission_group() {
    return this.userForm.get('permission_group')
  } 
}



