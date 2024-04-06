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

data=[
  {
    "content_type": {
      "id": 3,
      "app_label": "Places"
    },
    "model": [
      {
        "id": 13,
        "selected_group":"city" , //..yeh selected model hai jisko permission diya hai 
        "model_name": "city", 
        "permissions": [
          {
            "id": 109,
            "name": "Can add City",
            "codename": "add_city"
          },
          {
            "id": 110,
            "name": "Can change City",
            "codename": "change_city"
          },
          {
            "id": 111,
            "name": "Can delete City",
            "codename": "delete_city"
          },
          {
            "id": 112,
            "name": "Can view City",
            "codename": "view_city"
          },
        ]
      },
      {
        "id": 13,
        "selected_group":"city" ,
        "model_name": "country",
        "permissions": [
          {
            "id": 113,
            "name": "Can add Country",
            "codename": "add_country"
          },
          {
            "id": 114,
            "name": "Can change Country",
            "codename": "change_country"
          },
          {
            "id": 115,
            "name": "Can delete Country",
            "codename": "delete_country"
          },
          {
            "id": 116,
            "name": "Can view Country",
            "codename": "view_country"
          },
        ]
      },
    ]
  },
  {
    "content_type": {
      "id": 3,
      "app_label": "Contacts"
    },
    "model": [
      {
        "id": 13,
        "selected_group":"country" ,  // yha par selected_group data nahi hai, to fir yha data null ya fir selected_group deekhana hi nahi hai
        "model_name": "amount", // amount is a model name 
        "permissions": [
          {
            "id": 113,
            "name": "Can add amount",
            "codename": "add_amount"
          },
          {
            "id": 114,
            "name": "Can change amount",
            "codename": "change_amount"
          },
          {
            "id": 115,
            "name": "Can delete amount",
            "codename": "delete_amount"
          },
          {
            "id": 116,
            "name": "Can view amount",
            "codename": "view_amount"
          },
          
        ]
      }
    ]
  },
  {
    "content_type": {
      "id": 3,
      "app_label": "Product" 
    },
    "model": [
      {
        "id": 13,
        "selected_group":"city" , // here city is a group name and this first letter capital
        "model_name": "color", // amount is a model name 
        "permissions": [
          {
            "id": 113,
            "name": "Can add color",
            "codename": "add_color"
          },
          {
            "id": 114,
            "name": "Can change color",
            "codename": "change_color"
          },
        ]
      }
    ]
  }
]
permissions: any = [];
id:any;
  ngOnInit(): void {
    this.id=this.Arout.snapshot.paramMap.get('id');

    this.getPermissionGroup(); 
    // this.modelName = toTitleCase(this.modeln);
    // console.log(this.modelName);
    // console.log(this.data);

    this.contactService.getPermissionGroupById(this.id).subscribe(res=>{
      // console.log(res);
      this.modelName = toTitleCase(res.Group);
      // console.log(this.modelName);
       //1st steps - store permissions id into permssions
       this.permissions = [];
       res.data.forEach((group: any) => {
         group.model.forEach((model: any) => {
           model.permissions.forEach((permission: any) => {
             this.permissions.push(permission.id);
           });
         });
       });
      //  console.log(this.permissions);
    })
  }

  groupList: any;
  groupId:any;
  isCheck=false;
  notCheck=true;
  getPermissionGroup() {
    this.contactService.getPermission().subscribe((response:any) => {
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
              this.isCheck=true;
              this.notCheck=false;
              // let formArray: any = this.permissionForm.get('permissions') as FormArray;
              // formArray.push(new FormControl(map.id))
            }
          })
        })
      })
    })
  }
 
}
