import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
@Component({
  selector: 'app-update-permission-group',
  templateUrl: './update-permission-group.component.html',
  styleUrls: ['./update-permission-group.component.scss']
})
export class UpdatePermissionGroupComponent implements OnInit {
  permissionForm!: FormGroup;

  constructor(private contactService: ContactService, private fb: FormBuilder, private toastr: ToastrService,
    private Arout: ActivatedRoute,private router:Router,private location:Location) { }

  id: any;
  permissions: any = [];
  gName: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.permissionForm = this.fb.group({
      group_name: new FormControl(''),
      permissions: new FormArray([]),
    })

    this.contactService.getPermissionGroupById(this.id).subscribe(res => {
      // console.log(res);
      this.gName = res.Group;
      this.permissionForm.patchValue({
        group_name:res.Group
      })
      //1st steps - store permissions id into permssions
      this.permissions = [];
      res.data.forEach((group: any) => {
        group.model.forEach((model: any) => {
          model.permissions.forEach((permission: any) => {
            this.permissions.push(permission.id);
          });
        });
      });
      // console.log(this.permissions);
    })
    this.getPermissionGroup();
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
      // console.log(response);
      this.groupList = response?.data;
      this.groupList.forEach((res: any) => {
        let group = []
        group = res?.model;
        group.forEach((group: any) => {
          //2steps- steps pemissions checkbox auto selected data 
          group.permissions.map((map: any) => {
            //3steps- check data is available or not
            // console.log(this.permissions.includes(map.id));
            // console.log(map);
            //4steps- if data available then display true & patching into permissions formarray id
            //5steps in input tag - [checked]="permissions.includes(perm.id)"
            if (this.permissions.includes(map.id)) {
              // console.log(map);
              let formArray: any = this.permissionForm.get('permissions') as FormArray;
              formArray.push(new FormControl(map.id))
            }
          })
        })
      })
    })
  }

  permmisionList: any;
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
    // console.log(this.permissionForm.value);
    if (this.permissionForm.valid) {
      this.loaders = true
      // console.log('valid');
      var formdata: any = new FormData();
      // formdata.append('group_name', this.permissionForm.get('group_name')?.value);
      // Filter out null values from the variant array
      const permissionsArray = this.permissionForm.get('permissions')?.value.filter((value: any) => value !== null);
      formdata.append('permissions', JSON.stringify(permissionsArray));

      this.contactService.updatePermissionGroup(formdata,this.id).subscribe(res => {
        // console.log(res);
        this.loaders = false;
        this.addRes = res;
        if (this.addRes.msg == 'Group updated successfully') {
          this.toastr.success(this.addRes.msg);
          this.loaders = false
          this.permissionForm.reset()
          this.location.back();
          // this.router.navigate(['//contacts/permissionGroup'])
        }
      }, err => {
        // console.log(err.error.gst);
      });
    } else {
      this.permissionForm.markAllAsTouched();
      // console.log('forms invalid');
    }
  }

}