import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-editwarehouse',
  templateUrl: './editwarehouse.component.html',
  styleUrls: ['./editwarehouse.component.scss']
})
export class EditwarehouseComponent implements OnInit {

  constructor(private fb: FormBuilder, private coreService: CoreService, private toastr: ToastrService, private router: Router,
    private Arout: ActivatedRoute) { }
  warehouseForm!: FormGroup;

  get f() {
    return this.warehouseForm.controls;
  }
  id: any
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');

    this.coreService.getWareouseById(this.id).subscribe(res => {
      res.map((data: any) => {
        if (this.id == data.id) {
          this.warehouseForm.patchValue(data)
          console.log(data);     
        }
      })


    })
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
      this.accountType = res
    })
  }

  addRes: any
  submit() {
    console.log(this.warehouseForm.value);
    if (this.warehouseForm.valid) {
      this.coreService.updateWarehouse(this.warehouseForm.value, this.id).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Warehouse updated successfully") {
          this.toastr.success(this.addRes.msg)
          this.warehouseForm.reset()
          this.router.navigate(['//warehouse/warehouselist']).then(() => {
            window.location.reload()
          })
          // window.loca  tion.href='//warehouse/warehouselist'
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
// how to reload current page once visited
}
