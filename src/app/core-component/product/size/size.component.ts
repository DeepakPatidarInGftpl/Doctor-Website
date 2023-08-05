import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {
 
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  sizeForm!: FormGroup;
  get f() {
    return this.sizeForm.controls;
  }
  titlee: any;
  p:number=1
  pageSize: number = 5;
 
  itemsPerPage = 5;
  constructor(private coreService: CoreService, private QueryService: QueryService, private fb: FormBuilder, private toastr: ToastrService, private router: Router,private cs:CompanyService) {
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
        this.coreService.deletesize(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Size Deleted successfully") {
            this.tableData
            this.ngOnInit();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
          }else{
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
  select=false
  // active deactive
  deActivate(index: any, id: any) {
   Swal.fire({
     title: 'Are you sure?',
     text: "Do you want to Deactivate this size!",
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
       this.coreService.sizeIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.msg == "Size Is active Updated Successfully") {
           this.ngOnInit()
         }
       })
       Swal.fire({
         icon: 'success',
         title: 'Deactivate!',
         text: 'Size Is Deactivate Successfully.',
       });
     }
   });
 }
 Active(index: any, id: any) {
   Swal.fire({
     title: 'Are you sure?',
     text: "Do you want to Active this size!",
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
       this.coreService.sizeIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.msg == "Size Is active Updated Successfully") {
           this.ngOnInit()
         }
       })
       Swal.fire({
         icon: 'success',
         title: 'Active!',
         text: 'Size Is Active Successfully.',
       });
     }
   });
 }
 loader=true
 isAdd:any;
 isEdit:any;
 isDelete:any;
 userDetails:any
  ngOnInit(): void {
    this.sizeForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]*$/)]),   
    })
    // this.dtOptions = {
    //   dom: 'Btlpif',
    //   pagingType: 'numbers',
    //   language: {
    //     search: ' ',
    //     searchPlaceholder: "Search...",
    //     info: "_START_ - _END_ of _TOTAL_ items",
    //   },
    //   initComplete: (settings, json) => {
    //     $('.dt-buttons').appendTo('.wordset');
    //     $('.dataTables_filter').appendTo('.search-input');
    //   },

    // };

    // this.coreService.getsize();
    // // this.tableData = this.QueryService.sizeList;
    // // console.log(this.tableData);
    // this.coreService.sizeBehavior.subscribe(() => {
    //   if (localStorage.getItem('sizesList')) {
    //     this.tableData = Object.values(JSON.parse(localStorage.getItem("sizesList")!))
    //   }
    // })
    
    this.coreService.getSize().subscribe(res=>{
      this.tableData=res;
      this.loader=false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
    //permission from localdtarge
    // const localStorageData = JSON.parse(localStorage.getItem('auth'));
    // if (localStorageData && localStorageData.permission) {
    //   const permission = localStorageData.permission;
    //   permission.map((res: any) => {
    //     if (res.content_type.app_label === 'product' && res.content_type.model === 'size' && res.codename=='add_size') {
    //       this.isAdd = res.codename;
    //       console.log(this.isAdd);
    //     } else if (res.content_type.app_label === 'product' && res.content_type.model === 'size' && res.codename=='change_size') {
    //       this.isEdit = res.codename;
    //       console.log(this.isEdit);
    //     }else if (res.content_type.app_label === 'product' && res.content_type.model === 'size' && res.codename=='delete_size') {
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
          if (res.content_type.app_label === 'product' && res.content_type.model === 'size' && res.codename=='add_size') {
            this.isAdd = res.codename;
            console.log(this.isAdd);
          } else if (res.content_type.app_label === 'product' && res.content_type.model === 'size' && res.codename=='change_size') {
            this.isEdit = res.codename;
            console.log(this.isEdit);
          }else if (res.content_type.app_label === 'product' && res.content_type.model === 'size' && res.codename=='delete_size') {
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
    this.coreService.deletesize(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Size Deleted successfully") {
        window.location.reload()
      }

    })
  }

  addRes: any
  loaders=false;
 submit() {
  console.log(this.sizeForm.value);
  console.log(this.id);

  if (this.sizeForm.valid) {
    this.loaders=true;
    this.coreService.addsize(this.sizeForm.value).subscribe(res => {
      console.log(res);
      this.addRes = res
      if (this.addRes.msg == "Data Created") {
        this.loaders=false;
        this.toastr.success(this.addRes.msg)
        this.sizeForm.reset()
        // window.location.reload();
        this.ngOnInit()
      }
    }, err => {
      console.log(err.error.gst);
    })
  } else {
    this.sizeForm.markAllAsTouched()
    console.log('forms invalid');
  }
}

update(){
  if (this.sizeForm.valid) {
    this.loaders=true;
    this.coreService.updatesize(this.sizeForm.value, this.id).subscribe(res => {
      console.log(res);
      this.addRes = res
      if (this.addRes.msg == "Size updated successfully") {
        this.loaders=false;
        this.toastr.success(this.addRes.msg)
        this.sizeForm.reset()
        this.addForm=true
        // window.location.reload()
        this.ngOnInit()
      }
    }, err => {
      console.log(err.error.gst);
    })
  } else {
    this.sizeForm.markAllAsTouched()
    console.log('forms invalid');
  }
}

  get title() {
    return this.sizeForm.get('title')
  }
  get code() {
    return this.sizeForm.get('code')
  }
 
  addForm = true
  id: any
  editFormdata: any
  editForm(id: number) {
    this.id = id
    this.coreService.getsizeById(id).subscribe(res => {
      console.log(res);
      res.map((data: any) => {
        console.log(data);
        if (id == data.id) {
          this.addForm=false
          this.sizeForm.patchValue(data);
          this.editFormdata = res
        }
      })
    })
  }
  openaddForm() {
    this.addForm = true;
    this.sizeForm.reset();
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
