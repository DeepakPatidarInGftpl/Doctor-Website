import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-addwarehouse',
  templateUrl: './addwarehouse.component.html',
  styleUrls: ['./addwarehouse.component.scss']
})
export class AddwarehouseComponent implements OnInit {

  constructor(private fb: FormBuilder, private coreService: CoreService, private toastr: ToastrService, private router: Router) { }
  warehouseForm!: FormGroup;

  get f() {
    return this.warehouseForm.controls;
  }

  ngOnInit(): void {
    this.warehouseForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      accounts_type: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
    })

    this.getAccountType();
  }

  // country: any
  // getCountry() {
  //   this.coreService.countryList().subscribe(res => {
  //     this.country = res;
  //   })
  // }
  // state: any
  // getState() {
  //   this.coreService.stateList().subscribe(res => {
  //     this.state = res;
  //     console.log(this.state);
  //   })
  // }
  // selectState(val: any) {
  //   console.log(val);
  //   this.coreService.stateList().subscribe(res => {
  //     this.state = res;
  //     console.log(this.state);
  //   })
  // }
  accountType: any
  getAccountType() {
    this.coreService.accountType().subscribe(res => {
      console.log(res);
      this.accountType = res
    })
  }

  addRes: any
  submit() {
    console.log(this.warehouseForm.value);
    if (this.warehouseForm.valid) {
      this.coreService.addWarehouse(this.warehouseForm.value).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg=="Data Created") {
          this.toastr.success(this.addRes.msg)
          this.warehouseForm.reset()
          this.router.navigate(['//warehouse/warehouselist']).then(() => {
            window.location.reload()
          })
        }
      }, err => {
        console.log(err.error.gst);
      })
    } else {
      this.warehouseForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  get accounts_type() {
    return this.warehouseForm.get('accounts_type')
  }
  get title() {
    return this.warehouseForm.get('title')
  }
  get address() {
    return this.warehouseForm.get('address');
  }
 
}
