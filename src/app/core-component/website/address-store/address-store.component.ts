import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { WebsiteService } from 'src/app/Services/website/website.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-address-store',
  templateUrl: './address-store.component.html',
  styleUrls: ['./address-store.component.scss']
})
export class AddressStoreComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  titlee: any;
  p:number=1
  pageSize: number = 10;
  itemsPerPage:number=10;
  constructor(private websiteService: WebsiteService, private QueryService: QueryService, private fb: FormBuilder, private toastr: ToastrService, private router: Router,private cs:CompanyService) {
    this.QueryService.filterToggle();
  }

  delRes: any
  confirmText(index: any, slug: any) {
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
        this.websiteService.deleteAddressStore(slug).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Store Address Deleted successfully") {
            this.tableData
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
          this.ngOnInit();
          }
        })
        Swal.fire({
          icon: 'error',
          title: 'Not Deleted!',
          text: this.delRes.error,
        });
        // this.tableData.splice(index, 1);
      }
    });
  }

  select=false
  // active deactive
  deActivate(index: any, id: any) {
   Swal.fire({
     title: 'Are you sure?',
     text: "Do you want to Deactivate this Store Address!",
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
       this.websiteService.AddressStoreIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.msg == "Store Address Is active Updated Successfully") {
           this.ngOnInit()
         }
       })
       Swal.fire({
         icon: 'success',
         title: 'Deactivate!',
         text: 'Store Address Is Deactivate Successfully.',
       });
     }
   });
 }
 Active(index: any, id: any) {
   Swal.fire({
     title: 'Are you sure?',
     text: "Do you want to Active this Store Address!",
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
       this.websiteService.AddressStoreIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.msg == "Store Address Is active Updated Successfully") {
           this.ngOnInit()
         }
       })
       Swal.fire({
         icon: 'success',
         title: 'Active!',
         text: 'Store Address Is Active Successfully.',
       });
     }
   });
 }
 loader=true;
 isAdd:any;
 isEdit:any;
 isDelete:any;
 userDetails:any
  ngOnInit(): void {
 
  this.websiteService.getAddressStore().subscribe(res=>{
    this.tableData=res;
    this.loader=false;
    this.selectedRows = new Array(this.tableData.length).fill(false);
  })
  
  //permision from localstorage
  // const localStorageData = JSON.parse(localStorage.getItem('auth'));
  // if (localStorageData && localStorageData.permission) {
  //   const permission = localStorageData.permission;
  //   permission.map((res: any) => {
  //     if (res.content_type.app_label === 'order'  && res.content_type.model === 'storeaddress' && res.codename=='add_storeaddress') {
  //       this.isAdd = res.codename;
  //       console.log(this.isAdd);
  //     } else if(res.content_type.app_label === 'order' && res.content_type.model === 'storeaddress' && res.codename == 'change_storeaddress') {
  //       this.isEdit = res.codename;
  //       console.log(this.isEdit);
  //     }else if(res.content_type.app_label === 'order' && res.content_type.model === 'storeaddress' && res.codename == 'delete_storeaddress') {
  //       this.isDelete = res.codename;
  //       console.log(this.isDelete);
  //     }
  //   });
  // } 

     // permission from profile api
     this.cs.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission.map((res: any) => {
        if (res.content_type.app_label === 'order'  && res.content_type.model === 'storeaddress' && res.codename=='add_storeaddress') {
          this.isAdd = res.codename;
          console.log(this.isAdd);
        } else if(res.content_type.app_label === 'order' && res.content_type.model === 'storeaddress' && res.codename == 'change_storeaddress') {
          this.isEdit = res.codename;
          console.log(this.isEdit);
        }else if(res.content_type.app_label === 'order' && res.content_type.model === 'storeaddress' && res.codename == 'delete_storeaddress') {
          this.isDelete = res.codename;
          console.log(this.isDelete);
        }
      });
    });
}
//select table row
allSelected: boolean = false;
selectedRows:boolean[]
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
  deleteId(id: number) {
    this.websiteService.deleteAddressStore(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Colors Deleted successfully") {
        window.location.reload()
      }
    })
  }

  // search() {
  //   if (this.titlee == "") {
  //     this.ngOnInit();
  //   } else {
  //     this.tableData = this.tableData.filter(res => {
  //       console.log(res);
  //       console.log(res.name.toLocaleLowerCase());
  //       console.log(res.name.match(this.titlee));
  //       return res.name.match(this.titlee);
  //     })
  //   }
  // }

  search() {
    if (this.titlee === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase(); 
      this.tableData = this.tableData.filter(res => {
        const nameLower = res.name.toLocaleLowerCase(); 
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
