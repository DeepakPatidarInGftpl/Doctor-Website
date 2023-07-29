import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account-sub-type',
  templateUrl: './account-sub-type.component.html',
  styleUrls: ['./account-sub-type.component.scss']
})
export class AccountSubTypeComponent implements OnInit {


  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  accountSubTypeForm!: FormGroup;
  get f() {
    return this.accountSubTypeForm.controls;
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
        this.coreService.deleteAccountSubType(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Account Subtype Deleted successfully") {
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
      text: "Do you want to Deactivate this Account Subtype!",
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
        this.coreService.AccountSubTypeIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Account Subtype Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Account Subtype Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this Account Subtype!",
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
        this.coreService.AccountSubTypeIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Account Subtype Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'Account Subtype Is Active Successfully.',
        });
      }
    });
  }
  form!: FormGroup;
  loader = true
  isAdd:any;
  isEdit:any;
  isDelete:any;
  ngOnInit(): void {
    this.form = this.fb.group({
      img: new FormControl('')
    })

    this.accountSubTypeForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      accounts_type: new FormControl('',),
      alias: new FormControl('',),
    })

    this.coreService.getAccountSubType().subscribe(res => {
      this.tableData = res;
      this.loader = false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
    this.getAccountType();

    const localStorageData = JSON.parse(localStorage.getItem('auth'));
    if (localStorageData && localStorageData.permission) {
      const permission = localStorageData.permission;
      permission.map((res: any) => {
        if (res.content_type.app_label === 'master'  && res.content_type.model === 'accountsubtypes' && res.codename=='add_accountsubtypes') {
          this.isAdd = res.codename;
          console.log(this.isAdd);
        } else if (res.content_type.app_label === 'master' && res.content_type.model === 'accountsubtypes' && res.codename=='change_accountsubtypes') {
          this.isEdit = res.codename;
          console.log(this.isEdit);  
        }else if (res.content_type.app_label === 'master' && res.content_type.model === 'accountsubtypes' && res.codename=='delete_accountsubtypes') {
          this.isDelete = res.codename;
          console.log(this.isDelete);  
        }
      });
    }
  }
  accountType: any
  getAccountType() {
    this.coreService.accountType().subscribe(res => {
      console.log(res);
      this.accountType = res;
    })
  }
  add() {
    console.log('jj');
    console.log(this.form.value);
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
    console.log(this.accountSubTypeForm.value);
    console.log(this.id);
    if (this.accountSubTypeForm.valid) {
      this.loaders = true;
      this.coreService.addAccountSubType(this.accountSubTypeForm.value).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "ACCOUNT SUBTYPE CREATED SUCESSFULLY") {
          this.loaders = false;
          this.toastr.success(this.addRes.msg)
          this.accountSubTypeForm.reset()
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
      this.accountSubTypeForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  update() {
    if (this.accountSubTypeForm.valid) {
      let formdata = new FormData();
      formdata.append('title', this.accountSubTypeForm.get('title')?.value)
      this.loaders = true;
      this.coreService.updateAccountSubType(formdata, this.id).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Account Subtype Updated Sucessfully") {
          this.loaders = false;
          this.toastr.success(this.addRes.msg)
          this.accountSubTypeForm.reset()
          this.addForm = true
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
      this.accountSubTypeForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  get title() {
    return this.accountSubTypeForm.get('title')
  }
  get accounts_type() {
    return this.accountSubTypeForm.get('accounts_type')
  }
  get alias() {
    return this.accountSubTypeForm.get('alias')
  }
  addForm = true
  id: any
  editFormdata: any
  editForm(id: number) {
    this.id = id
    this.coreService.getAccountSubTypeById(id).subscribe(res => {
      console.log(res);
      if (id == res.id) {
        this.addForm = false;
        this.accountSubTypeForm.patchValue(res);
        this.accountSubTypeForm.get('accounts_type')?.patchValue(res.accounts_type)
        this.editFormdata = res
      }
    })
  }
  openaddForm() {
    this.addForm = true;
    this.accountSubTypeForm.reset();
  }
  // search() {
  //   if (this.titlee == "") {
  //     this.ngOnInit();
  //   } else {
  //     this.tableData = this.tableData.filter(res => {
  //       console.log(res);
  //       console.log(res.title.toLocaleLowerCase());
  //       console.log(res.title.match(this.titlee));
  //       return res.title.match(this.titlee);
  //     })
  //   }
  // }

  search() {
    if (this.titlee === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase(); 
      this.tableData = this.tableData.filter(res => {
        const nameLower = res.title.toLocaleLowerCase(); 
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
