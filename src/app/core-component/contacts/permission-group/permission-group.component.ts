import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WebsiteService } from 'src/app/Services/website/website.service';
import Swal from 'sweetalert2';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ContactService } from 'src/app/Services/ContactService/contact.service';

@Component({
  selector: 'app-permission-group',
  templateUrl: './permission-group.component.html',
  styleUrls: ['./permission-group.component.scss']
})
export class PermissionGroupComponent implements OnInit {
  //
  dropdownList = [];
  selectedItems: any[] = [];
  dropdownSettings: IDropdownSettings = {};
  //

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any;
  permissionProductsForm!: FormGroup;
  get f() {
    return this.permissionProductsForm.controls;
  }

  titlee: any;
  p: number = 1
  pageSize: number = 5;
  isAscending: boolean = true;
  itemsPerPage = 5;
  constructor(private websiteService: WebsiteService, private fb: FormBuilder, private toastr: ToastrService, private contactService: ContactService) {
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
        this.contactService.deletePermissionGroup(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.IsSuccess == true) {
            this.ngOnInit();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes?.msg,
            });
            this.tableData.splice(index, 1);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Not Deleted!',
              text: this.delRes?.error,
            });
          }
        }, (err: any) => {
          if (err.error.IsSuccess == false) {
            Swal.fire({
              icon: 'error',
              title: 'Not Deleted!',
              text: err.error?.msg ? err.error?.msg : err.error?.Error,
            });
          }
        })
      }
    });
  }
  select = false

  loader = true;
  ngOnInit(): void {
    this.permissionProductsForm = this.fb.group({
      group_name: new FormControl(''),
      permissions: new FormArray([]),
    })
    
    //dropdown list
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.contactService.getPermissionGroup().subscribe(res => {
      this.tableData = res;
      this.loader = false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
    this.getPermission();
  }

  //
  onItemSelect(item: any) {
    console.log(item);
    let formArray: any = this.permissionProductsForm.get('permissions') as FormArray;
    formArray.push(new FormControl(item.id))
  }
  onItemDeselect(item: any): void {
    // Handle the deselection of the item
    console.log('Item deselected:', item);
    let formArray: FormArray = this.permissionProductsForm.get('permissions') as FormArray;
    console.log(formArray);
    const index = formArray.controls.findIndex(control => control.value === item.id);
    console.log(index);
    if (index !== -1) {
      formArray.removeAt(index);
    }
  }

  onSelectAll(items: any) {
    console.log(items);
    let formArray: any = this.permissionProductsForm.get('permissions') as FormArray;
    items.forEach((item: any) => {
      formArray.push(new FormControl(item.id));
    });
  }
  onDeselectAll(items: any) {
    console.log('All items deselected:', items);
    let formArray: any = this.permissionProductsForm.get('permissions') as FormArray;
    formArray.clear();
  }

  permissionDetails: any[] = [];
  getPermission() {
    this.contactService.getPermission()?.subscribe((res: any) => {
      console.log(res);
      this.permissionDetails = res;
      // console.log(this.permissionDetails[0].name);
    })
  }
  //
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

  addRes: any;
  loaders = false;
  submit() {
    console.log(this.permissionProductsForm.value);
    if (this.permissionProductsForm.valid) {
      this.loaders = true
      console.log('valid');
      var formdata: any = new FormData();
      formdata.append('group_name', this.permissionProductsForm.get('group_name')?.value);

      // Filter out null values from the variant array
      const permissionsArray = this.permissionProductsForm.get('permissions')?.value.filter((value: any) => value !== null);
      formdata.append('permissions', JSON.stringify(permissionsArray));

      // formdata.append('datetime',this.permissionProductsForm.get('datetime')?.value);

      this.contactService.addPermissionGroup(formdata).subscribe(res => {
        console.log(res);
        this.loaders = false;
        this.addRes = res;
        if (this.addRes.IsSuccess == 'True') {
          this.toastr.success(this.addRes.msg);
          this.loaders = false
          this.permissionProductsForm.reset()
          this.selectedItems = [];
          this.ngOnInit()
        }
      }, err => {
        console.log(err.error.gst);
      });
    } else {
      this.permissionProductsForm.markAllAsTouched();
      console.log('forms invalid');
    }
  }


  update() {
    console.log(this.id);
    console.log(this.permissionProductsForm.value);
    if (this.permissionProductsForm.valid) {
      this.loaders = true
      var formdata: any = new FormData()
      formdata.append('group_name', this.permissionProductsForm.get('group_name')?.value);
      // Filter out null values from the permissions array
      const permissionsArray = this.permissionProductsForm.get('permissions')?.value.filter((value: any) => value !== null);
      formdata.append('permissions', JSON.stringify(permissionsArray));
      // formdata.append('datetime',this.permissionProductsForm.get('datetime')?.value);

      this.contactService.updatePermissionGroup(formdata, this.id).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.IsSuccess == true) {
          this.toastr.success(this.addRes.msg)
          this.loaders = false
          this.permissionProductsForm.reset()
          this.addForm = true
          this.selectedItems = [];
          this.ngOnInit()
        }else{
          this.loaders=false;
        }
      }, err => {
        console.log(err.error.gst);
      })
    } else {
      this.permissionProductsForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  get group_name() {
    return this.permissionProductsForm.get('group_name')
  }
  get permissions() {
    return this.permissionProductsForm.get('permissions')
  }

  addForm = true
  id: any
  editFormdata: any;
  resEdit: any;
  permissionItem: any;
  groupName: any;
  editForm(id: number) {
    this.id = id
    this.contactService.getPermissionGroupById(id).subscribe(res => {
      this.resEdit = res;
      console.log(this.resEdit);

      this.resEdit.map((res: any) => {
        if (id == res.id) {
          console.log(res);

          this.addForm = false
          this.groupName = res.name
          // here selected data send value in formArray
          res.permissions.map((res: any) => {
            console.log(res);
            let formArray: any = this.permissionProductsForm.get('permissions') as FormArray;
            formArray.push(new FormControl(res.id))
          })
          // here display auto selected data
          this.permissionItem = res.permissions.map((permissions: any) => {
            return {
              id: permissions.id,
              name: permissions.name
            };
          });
          this.selectedItems = this.permissionItem;
          console.log(this.permissionItem);
          this.editFormdata = res;
        }
      })

    })
  }
  openaddForm() {
    this.addForm = true;
    this.permissionProductsForm.reset();
    this.selectedItems = [];
  }

  search() {
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      this.tableData = this.tableData.filter(res => {
        console.log(res);
        console.log(res?.name.toLocaleLowerCase());
        console.log(res?.name.match(this.titlee));
        return res?.name.match(this.titlee);
      })
    }
  }
  key = 'id'
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }
}
