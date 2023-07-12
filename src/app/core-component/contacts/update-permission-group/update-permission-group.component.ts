import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
@Component({
  selector: 'app-update-permission-group',
  templateUrl: './update-permission-group.component.html',
  styleUrls: ['./update-permission-group.component.scss']
})
export class UpdatePermissionGroupComponent implements OnInit {
  permissionForm!: FormGroup;

  constructor(private contactService: ContactService, private fb: FormBuilder, private toastr:ToastrService) { }

  ngOnInit(): void {
   this.permissionForm= this.fb.group({
      group_name: new FormControl(''),
      permissions: new FormArray([]),
    })
    this.getPermissionGroup();
    // this.getPermission();
    // this.getPermissions();
  
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
    this.contactService.getPermission().subscribe((response:any) => {
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
  submit() {
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
          this.permissionForm.reset()
          this.ngOnInit()
        }
      }, err => {
        console.log(err.error.gst);
      });
    } else {
      this.permissionForm.markAllAsTouched();
      console.log('forms invalid');
    }
  }

}
