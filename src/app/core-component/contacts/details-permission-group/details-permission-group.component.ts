import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/Services/ContactService/contact.service';

function toTitleCase(str: string): string {
  if (!str) return '';

  const words = str.toLowerCase().split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }

  return words.join(' ');
}
@Component({
  selector: 'app-details-permission-group',
  templateUrl: './details-permission-group.component.html',
  styleUrls: ['./details-permission-group.component.scss']
})
export class DetailsPermissionGroupComponent implements OnInit {

  
  modeln:any;
  modelName:any;
  constructor(private contactService: ContactService, private fb: FormBuilder, private toastr:ToastrService,
    private Arout:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.modeln=this.Arout.snapshot.paramMap.get('id')
    this.getPermissionGroup(); 
    this.modelName = toTitleCase(this.modeln);
    console.log(this.modelName);
  }

  groupList: any;
  groupId:any;
  getPermissionGroup() {
    this.contactService.getPermissionGroup().subscribe((response:any) => {
      console.log(response);
      this.groupList = response;
      this.groupList.forEach((res:any)=>{
        let group=[]
        group=res?.group;
        group.forEach((group:any)=>{
          if(this.modeln==group?.group_name){
            this.groupId=group.id
            console.log(this.groupId);
          }
        })
      })
    })
  }
}
