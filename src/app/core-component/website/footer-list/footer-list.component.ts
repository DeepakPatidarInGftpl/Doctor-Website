import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { WebsiteService } from 'src/app/Services/website/website.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-footer-list',
  templateUrl: './footer-list.component.html',
  styleUrls: ['./footer-list.component.scss']
})
export class FooterListComponent implements OnInit {

  
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  titlee: any;
  p:number=1
  pageSize: number = 10;
  itemsPerPage:number=10;

  imgUrl = 'https://pv.greatfuturetechno.com';
  
  constructor(private websiteService: WebsiteService, private QueryService: QueryService, private fb: FormBuilder, private toastr: ToastrService, private router: Router) {
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
        this.websiteService.deleteFooter(slug).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Footer Deleted successfully") {
            this.tableData
          this.ngOnInit();
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'Your file has been deleted.',
          });
          this.tableData.splice(index, 1);
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Not Deleted!',
              text: this.delRes.error,
            });
            this.tableData.splice(index, 1);
          }
        })
      
      }
    });
  }

  select=false
  // active deactive
  deActivate(index: any, id: any) {
   Swal.fire({
     title: 'Are you sure?',
     text: "Do you want to Deactivate this Footer!",
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
       this.websiteService.FooterIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.msg == "Footer Is active Updated Successfully") {
           this.ngOnInit()
         }
       })
       Swal.fire({
         icon: 'success',
         title: 'Deactivate!',
         text: 'Footer Is Deactivate Successfully.',
       });
     }
   });
 }
 Active(index: any, id: any) {
   Swal.fire({
     title: 'Are you sure?',
     text: "Do you want to Active this Footer!",
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
       this.websiteService.FooterIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.msg == "Footer Is active Updated Successfully") {
           this.ngOnInit()
         }
       })
       Swal.fire({
         icon: 'success',
         title: 'Active!',
         text: 'Footer Is Active Successfully.',
       });
     }
   });
 }
 loader=true;
 isAdd:any;
 isEdit:any;
 isDelete:any;
  ngOnInit(): void {
  this.websiteService.getFooter().subscribe(res=>{
    this.tableData=res;
    this.loader=false;
    this.selectedRows = new Array(this.tableData.length).fill(false);
  })
  const localStorageData = JSON.parse(localStorage.getItem('auth'));
  if (localStorageData && localStorageData.permission) {
    const permission = localStorageData.permission;
    permission.map((res: any) => {
      if (res.content_type.app_label === 'website'  && res.content_type.model === 'footer' && res.codename=='add_footer') {
        this.isAdd = res.codename;
        console.log(this.isAdd);    
      } else if (res.content_type.app_label === 'website' && res.content_type.model === 'footer' && res.codename=='change_footer') {
        this.isEdit = res.codename;
        console.log(this.isEdit); 
      }else if (res.content_type.app_label === 'website' && res.content_type.model === 'footer' && res.codename=='delete_footer') {
        this.isDelete = res.codename;
        console.log(this.isDelete); 
      }
    });
  } 
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

  search() {
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      this.tableData = this.tableData.filter(res => {
        console.log(res);
        console.log(res.name.toLocaleLowerCase());
        console.log(res.name.match(this.titlee));
        return res.name.match(this.titlee);
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
