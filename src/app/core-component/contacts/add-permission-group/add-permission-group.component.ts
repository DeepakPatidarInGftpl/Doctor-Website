import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ContactService } from 'src/app/Services/ContactService/contact.service';

@Component({
  selector: 'app-add-permission-group',
  templateUrl: './add-permission-group.component.html',
  styleUrls: ['./add-permission-group.component.scss']
})
export class AddPermissionGroupComponent implements OnInit {
  permissionForm!: FormGroup;

  constructor(private contactService: ContactService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fb.group({
      group_name: new FormControl(''),
      permissions: new FormArray([]),
    })
    this.getPermissionGroup();
  }

  groupList: any;
  getPermissionGroup() {
    this.contactService.getPermissionGroup().subscribe((response) => {
      console.log(response);
      this.groupList = response;
    })
  }

  
}
