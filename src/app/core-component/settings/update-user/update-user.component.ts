import { Component, OnInit } from '@angular/core';

import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  constructor(private fb: FormBuilder, private contactService: ContactService, private toastr: ToastrService, private router: Router, private Arout: ActivatedRoute) { }
  userForm!: FormGroup;

  get f() {
    return this.userForm.controls;
  }
id:any;
  ngOnInit(): void {
    this.id=this.Arout.snapshot.paramMap.get('id');

    this.userForm = this.fb.group({
      phone_number: new FormControl('', [Validators.required]),
      username: new FormControl('',),
      name: new FormControl(''),
      email: new FormControl('',),
      // password: new FormControl('',),
      active: new FormControl(''),
      user_type: new FormControl(''),
      role:new FormControl(''),
      // user_permissions:new FormControl(''),
      // groups:new FormControl('')
      branch:new FormControl('')
    })
    this.contactService.getUserById(this.id).subscribe(res=>{
      console.log(res);
      this.userForm.patchValue(res)
      this.userForm.get('branch')?.patchValue(res?.branch);
      this.userForm.get('role')?.patchValue(res?.role)
    })
    this.getBranch()
    this.getGroup();
  }

  branchList:any;
  getBranch(){
    this.contactService.getBranch().subscribe(res=>{
      console.log(res);
      this.branchList=res;
    })
  }
  groupList:any
  getGroup(){
    this.contactService.getPermissionGroup().subscribe((res:any)=>{
      console.log(res);
      this.groupList=res
    })
  }
  dateError = null
  addRes: any;
  loader = false;
  submit() {
    console.log(this.userForm.value);
    if (this.userForm.valid) {
      this.loader = true;
      this.contactService.updateUser(this.userForm.value,this.id).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.Is_Success == "True") {
          this.loader = false;
          this.toastr.success(this.addRes.msg)
          this.userForm.reset()
          this.router.navigate(['//settings/user'])
        }else{
          this.loader=false;
          if(this.addRes.phone_number){
            this.toastr.error(this.addRes.phone_number)
          }else if(this.addRes.username){
            this.toastr.error(this.addRes.username)
          }
        }
      }, err => {
        this.loader=false;
        this.toastr.error('password',err?.error?.password[0]) 
      })
    } else {
      this.userForm.markAllAsTouched()
      console.log('hhhhhh');

    }
  }

  get mobile_no() {
    return this.userForm.get('phone_number')
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
    return this.userForm.get('user_permissions')
  }
  get name() {
    return this.userForm.get('name')
  }
  get branch(){
    return this.userForm.get('branch')
  }
  get role(){
    return this.userForm.get('role')
  }
}


