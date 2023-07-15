import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/Services/ContactService/contact.service';

@Component({
  selector: 'app-add-permission-group',
  templateUrl: './add-permission-group.component.html',
  styleUrls: ['./add-permission-group.component.scss']
})
export class AddPermissionGroupComponent implements OnInit {
  permissionForm!: FormGroup;
  get f() {
    return this.permissionForm.controls;
  }
  constructor(private contactService: ContactService, private fb: FormBuilder, private toastr: ToastrService,
    private router: Router,) { }

  data1 = [
    {
      "id": 1,
      "content_type": {
        "id": 1,
        "app_label": "Master",
        "model": "logentry"
      },
      "model": [
        {
          id: 1,
          "model_name": "Company",
          "permissions": [
            {
              "name": "Can Select All",
              "codename": "select all"
            },
            {
              "name": "Can add log entry",
              "codename": "add_logentry"
            },
            {
              "name": "Can change log entry",
              "codename": "change_logentry"
            },
            {
              "name": "Can delete log entry",
              "codename": "delete_logentry"
            },
            {
              "name": "Can view log entry",
              "codename": "view_logentry"
            },
          ]
        },
        {
          id: 2,
          "model_name": "Account",
          "permissions": [
            {
              "name": "Can Select All",
              "codename": "select all"
            },
            {
              "name": "Can add log entry",
              "codename": "add_logentry"
            },
            {
              "name": "Can change log entry",
              "codename": "change_logentry"
            },
            {
              "name": "Can delete log entry",
              "codename": "delete_logentry"
            },
            {
              "name": "Can view log entry",
              "codename": "view_logentry"
            },
          ]
        },
        {
          id: 3,
          "model_name": "Employee",
          "permissions": [
            {
              "name": "Can Select All",
              "codename": "select all"
            },
            {
              "name": "Can add log entry",
              "codename": "add_logentry"
            },
            {
              "name": "Can change log entry",
              "codename": "change_logentry"
            },
            {
              "name": "Can delete log entry",
              "codename": "delete_logentry"
            },
            {
              "name": "Can view log entry",
              "codename": "view_logentry"
            },
          ]
        },
        {
          id: 4,
          "model_name": "Warehouse",
          "permissions": [
            {
              "name": "Can Select All",
              "codename": "select all"
            },
            {
              "name": "Can add log entry",
              "codename": "add_logentry"
            },
            {
              "name": "Can change log entry",
              "codename": "change_logentry"
            },
            {
              "name": "Can delete log entry",
              "codename": "delete_logentry"
            },
            {
              "name": "Can view log entry",
              "codename": "view_logentry"
            },
          ]
        },
      ],

    },
    {
      "id": 2,
      "content_type": {
        "id": 1,
        "app_label": "Contact",
        "model": "logentry"
      },
      "model": [
        {
          id: 1,
          "model_name": "Vendor",
          "permissions": [
            {
              "name": "Can Select All",
              "codename": "select all"
            },
            {
              "name": "Can add log entry",
              "codename": "add_logentry"
            },
            {
              "name": "Can change log entry",
              "codename": "change_logentry"
            },
            {
              "name": "Can delete log entry",
              "codename": "delete_logentry"
            },
            {
              "name": "Can view log entry",
              "codename": "view_logentry"
            },
          ]
        },
        {
          id: 2,
          "model_name": "Supplier",
          "permissions": [
            {
              "name": "Can Select All",
              "codename": "select all"
            },
            {
              "name": "Can add log entry",
              "codename": "add_logentry"
            },
            {
              "name": "Can change log entry",
              "codename": "change_logentry"
            },
            {
              "name": "Can delete log entry",
              "codename": "delete_logentry"
            },
            {
              "name": "Can view log entry",
              "codename": "view_logentry"
            },
          ]
        },
      ],

    },
    {
      "id": 1,
      "content_type": {
        "id": 1,
        "app_label": "Product",

      },
      "model": [
        {
          id: 1,
          "model_name": "color",
          "permissions": [
            {
              "name": "Can Select All",
              "codename": "select all"
            },
            {
              "name": "Can add log entry",
              "codename": "add_logentry"
            },
            {
              "name": "Can change log entry",
              "codename": "change_logentry"
            },
            {
              "name": "Can delete log entry",
              "codename": "delete_logentry"
            },
            {
              "name": "Can view log entry",
              "codename": "view_logentry"
            },
          ]
        },
        {
          id: 2,
          "model_name": "size",
          "permissions": [
            {
              "name": "Can Select All",
              "codename": "select all"
            },
            {
              "name": "Can add log entry",
              "codename": "add_logentry"
            },
            {
              "name": "Can change log entry",
              "codename": "change_logentry"
            },
            {
              "name": "Can delete log entry",
              "codename": "delete_logentry"
            },
            {
              "name": "Can view log entry",
              "codename": "view_logentry"
            },
          ]
        },
      ],

    },
  ]
  ngOnInit(): void {
    this.permissionForm = this.fb.group({
      group_name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]),
      permissions: new FormArray([], [Validators.required]),
    })
    this.getPermissionGroup();
    // this.getPermission();
    // this.getPermissions();
    console.log(this.data1);
  }
  // Component code
  // selectAllPermissions(permissions: any[], i: number, model_name: string, event: any) {
  //   const checked = event.target.checked;
  //   for (let perm of permissions) {
  //     console.log(perm);

  //     perm.selected = checked;
  //   }
  // }

  selectAllPermissions(permissions: any[], i: number, model_name: string, event: any) {
    const checked = event.target.checked;
    const formArray: any = this.permissionForm.get('permissions') as FormArray;

    for (let perm of permissions) {
      perm.selected = checked;
      // Selected
      if (checked) {
        if (!this.isPermissionSelected(perm.id)) {
          formArray.push(new FormControl(perm.id));
          this.selectedSubcat++;
        }
      }
      // Unselected
      else {
        if (this.isPermissionSelected(perm.id)) {
          const index = formArray.controls.findIndex((control: any) => control.value === perm.id);
          if (index !== -1) {
            formArray.removeAt(index);
            this.selectedSubcat--;
          }
        }
      }
    }
  }

  isPermissionSelected(permissionId: number): boolean {
    const formArray: any = this.permissionForm.get('permissions') as FormArray;
    return formArray.controls.some((control: any) => control.value === permissionId);
  }

  groupList: any;
  getPermissionGroup() {
    this.contactService.getPermission().subscribe((response: any) => {
      console.log(response);
      this.groupList = response?.data;
    })
  }

  permmisionList: any;
  getPermissions() {
    this.contactService.getPermission().subscribe((res: any) => {
      const transformedData = res.map((permission: any) => ({
        id: permission.id,
        content_type: permission.content_type,
        model: [{
          id: permission.content_type.id,
          model: permission.content_type.model,
          permissions: [
            {
              name: permission.name,
              codename: permission.codename
            }
          ]
        }]
      }));
      this.permmisionList = transformedData;
      console.log(this.permmisionList);
    });
  }

  // if  content_type model is equal then assign in permission
  getPermission() {
    this.contactService.getPermission().subscribe((res: any) => {
      const groupedPermissions = [];
      res.forEach((permission) => {
        const existingModel = groupedPermissions.find((groupedPermission) => groupedPermission.content_type.model === permission.content_type.model);

        if (existingModel) {
          existingModel.model[0].permissions.push({
            name: permission.name,
            codename: permission.codename
          });
        } else {
          groupedPermissions.push({
            id: permission.content_type.id,
            content_type: permission.content_type,
            model: [
              {
                id: permission.content_type.id,
                model: permission.content_type.model,
                permissions: [
                  {
                    name: permission.name,
                    codename: permission.codename
                  }
                ]
              }
            ]
          });
        }
      });

      this.permmisionList = groupedPermissions;
      console.log(this.permmisionList);
    });
  }

  selectedSubcat = 0;
  onCheckChange(event: any) {
    const formArray: any = this.permissionForm.get('permissions') as FormArray;
    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(parseInt(event.target.value)));
      // parseInt(formArray.push(new FormControl(event.target.value)))
      this.selectedSubcat++;
    }
    /* unselected */
    else {
      // find the unselected element
      let i: number = 0;
      formArray.controls.forEach((ctrl: any) => {
        if (ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          this.selectedSubcat--;
          return;
        }
        i++;
      });
    }
  }

  addRes: any;
  loaders = false;
  modelName:any;
  submit() {
    console.log(this.modelName);
    console.log(this.permissionForm.value.group_name);
    console.log(this.permissionForm.value);
    if (this.permissionForm.valid) {
      this.loaders = true
      console.log('valid');
      var formdata: any = new FormData();
      formdata.append('group_name', this.permissionForm.get('group_name')?.value);
      // Filter out null values from the variant array
      const permissionsArray = this.permissionForm.get('permissions')?.value.filter((value: any) => value !== null);
      formdata.append('permissions', JSON.stringify(permissionsArray));
      // formdata.append('datetime',this.permissionForm.get('datetime')?.value);
      this.contactService.addPermissionGroup(formdata).subscribe(res => {
        console.log(res);
        this.loaders = false;
        this.addRes = res;
        if (this.addRes.IsSuccess == 'True') {
          this.toastr.success(this.addRes.msg);
          this.loaders = false
          // this.permissionForm.reset()
          // this.ngOnInit()
          this.router.navigate(['//settings/permissionGroup'])
        }
      }, err => {
        this.loaders=false;
        if(err.error.IsSuccess==false){
          this.toastr.error(err.error.Error)
          // this.toastr.error(`${this.modelName} already exists`)
        }
      });
    } else {
      this.permissionForm.markAllAsTouched();
      console.log('forms invalid');
    }
  }

  get group_name() {
    return this.permissionForm.get('group_name')
  }
  get permissions() {
    return this.permissionForm.get('permissions')
  }

  detailsPage(val) {
    console.log(val);
    this.router.navigate([`//contacts/detailsPermissionGroup/${val}`])
  }
}
