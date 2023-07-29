import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-additional-charge',
  templateUrl: './additional-charge.component.html',
  styleUrls: ['./additional-charge.component.scss']
})
export class AdditionalChargeComponent implements OnInit {


  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  additionForm!: FormGroup;
  get f() {
    return this.additionForm.controls;
  }
  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  constructor(private coreService: CoreService, private QueryService: QueryService, private fb: FormBuilder, private toastr: ToastrService, private router: Router) {
    this.QueryService.filterToggle();
  }

  delRes: any
  confirmText(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
    }).then((t) => {
      if (t.isConfirmed) {
        this.coreService.deleteAdditionalCharges(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Additional Charge Deleted successfully") {
            this.tableData
            this.ngOnInit();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Not Deleted!',
              text: this.delRes.error,
            });
          }
        })

        // this.tableData.splice(index, 1);
      }
    });
  }
  select = false
  // active deactive
  deActivate(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Deactivate this Additional Charge!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Deactivate it!',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
    }).then((t) => {
      if (t.isConfirmed) {
        this.coreService.AdditionalChargesIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Additional Charge Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Additional Charge Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this Additional Charge!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Active it!',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
    }).then((t) => {
      if (t.isConfirmed) {
        this.coreService.AdditionalChargesIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Additional Charge Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'Additional Charge Is Active Successfully.',
        });
      }
    });
  }
  loader = true
  isAdd: any;
  isEdit: any;
  isDelete: any;

  ngOnInit(): void {
    this.additionForm = this.fb.group({
      additional_charge: new FormControl('', [Validators.required]),
      value_type: new FormControl('',[Validators.required]),
      value: new FormControl('',[Validators.required,Validators.pattern(/^[0-9]*$/)]),
      tax: new FormControl('',[Validators.required]),
      HSN_SAC: new FormControl('',[Validators.required]),
    })
    this.coreService.getAdditionalCharges().subscribe(res => {
      this.tableData = res;
      this.loader = false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
    this.getTax()
    const localStorageData = JSON.parse(localStorage.getItem('auth'));
    if (localStorageData && localStorageData.permission) {
      const permission = localStorageData.permission;
      permission.map((res: any) => {
        if (res.content_type.app_label === 'account' && res.content_type.model === 'additionalcharge' && res.codename == 'add_additionalcharge') {
          this.isAdd = res.codename;
          console.log(this.isAdd);
        } else if (res.content_type.app_label === 'account' && res.content_type.model === 'additionalcharge' && res.codename == 'change_additionalcharge') {
          this.isEdit = res.codename;
          console.log(this.isEdit);
        } else if (res.content_type.app_label === 'account' && res.content_type.model === 'additionalcharge' && res.codename == 'delete_additionalcharge') {
          this.isDelete = res.codename;
          console.log(this.isDelete);
        }
      });
    }

  }
  taxList: any;
  getTax() {
    this.coreService.gettaxd().subscribe(res => {
      console.log(res);
      this.taxList = res;
    })
  }

  //select table row
  allSelected: boolean = false;
  selectedRows: boolean[]
  selectAlll() {
    this.selectedRows.fill(this.allSelected);
  }

  selectAll(initChecked: boolean) {
    if (!initChecked) {
      this.tableData.forEach((f: any) => {
        f.isSelected = true
      })
    } else {
      this.tableData.forEach((f: any) => {
        f.isSelected = false
      })
    }
  }

  addRes: any

  loaders = false;
  submit() {
    console.log(this.additionForm.value);
    console.log(this.id);

    if (this.additionForm.valid) {
      this.loaders = true;
      this.coreService.addAdditionalCharges(this.additionForm.value).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.Is_Success == "True") {
          this.loaders = false;
          this.toastr.success(this.addRes.msg)
          this.additionForm.reset()
          // window.location.reload();
          this.ngOnInit()
        } else {
          this.loader = false
        }
      }, err => {
        this.loader = false
        console.log(err.error.gst);
      })
    } else {
      this.additionForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  update() {
    if (this.additionForm.valid) {
      this.loaders = true;
      this.coreService.updateAdditionalCharges(this.additionForm.value, this.id).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.Is_Success == "True") {
          this.loaders = false;
          this.addForm = false;
          this.toastr.success(this.addRes.msg)
          this.additionForm.reset()
          // window.location.reload()
          this.ngOnInit()
        } else {
          this.loader = false
        }
      }, err => {
        this.loaders = false;
        console.log(err.error.gst);
      })
    } else {
      this.additionForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  get additional_charge() {
    return this.additionForm.get('additional_charge')
  }
  get value_type() {
    return this.additionForm.get('value_type')
  }
  get value() {
    return this.additionForm.get('value')
  }
  get tax() {
    return this.additionForm.get('tax')
  }
  get HSN_SAC() {
    return this.additionForm.get('HSN_SAC')
  }


  addForm = true
  id: any
  editFormdata: any
  editForm(id: number) {
    this.id = id
    this.coreService.getAdditionalChargesById(id).subscribe(res => {
      console.log(res);
      if (id == res.id) {
        this.addForm = false;
        this.additionForm.patchValue(res);
        // this.additionForm.get('tax')?.patchValue(res.tax.id)
        this.editFormdata = res
      }
    })
  }
  openaddForm() {
    this.addForm = true;
    this.additionForm.reset();
  }

  search() {
    if (this.titlee === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.tableData = this.tableData.filter(res => {
        const nameLower = res.additional_charge.toLocaleLowerCase();
        return nameLower.includes(searchTerm);
      });
    }
  }

  key = 'id'
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }
}
