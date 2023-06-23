import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.scss']
})
export class TaxComponent implements OnInit {
  

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  taxForm!: FormGroup;
  get f() {
    return this.taxForm.controls;
  }
  
  titlee: any;
  p:number=1
  pageSize: number = 5;
 
  itemsPerPage = 5;
  constructor(private coreService: CoreService, private QueryService: QueryService, private fb: FormBuilder, private toastr: ToastrService,) {
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
        this.coreService.deletetax(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Tax Deleted successfully") {
            this.tableData
            this.ngOnInit();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'Your file has been deleted.',
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
     text: "Do you want to Deactivate this tax!",
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
       this.coreService.taxIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.msg == "Tax Is active Updated Successfully") {
           this.ngOnInit()
         }
       })
       Swal.fire({
         icon: 'success',
         title: 'Deactivate!',
         text: 'Tax Is Deactivate Successfully.',
       });
     }
   });
 }
 Active(index: any, id: any) {
   Swal.fire({
     title: 'Are you sure?',
     text: "Do you want to Active this tax!",
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
       this.coreService.taxIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.msg == "Tax Is active Updated Successfully") {
           this.ngOnInit()
         }
       })
       Swal.fire({
         icon: 'success',
         title: 'Active!',
         text: 'Tax Is Active Successfully.',
       });
     }
   });
 }
 loader=true;
  ngOnInit(): void {
    this.taxForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      tax_percentage: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]*$/)]),   
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
    // this.coreService.gettax();
    // // this.tableData = this.QueryService.taxList;
    // // console.log(this.tableData);
    // this.coreService.taxBehavior.subscribe(() => {
    //   if (localStorage.getItem('taxList')) {
    //     this.tableData = Object.values(JSON.parse(localStorage.getItem("taxList")!))
    //   }
    // })
  this.coreService.gettaxd().subscribe(res=>{
    this.tableData=res;
    this.loader=false;
   this.selectedRows = new Array(this.tableData.length).fill(false);
  })
  }
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
    this.coreService.deletetax(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Tax Deleted successfully") {
        window.location.reload()
      }

    })
  }

  addRes: any
  // submit() {
  //   console.log(this.taxForm.value);
  //   console.log(this.id);

  //   if (this.taxForm.valid) {
  //     if (this.id) {
  //       this.coreService.updatetax(this.taxForm.value, this.id).subscribe(res => {
  //         console.log(res);
  //         this.addRes = res
  //         if (this.addRes.msg == "Tax updated successfully") {
  //           this.toastr.success(this.addRes.msg)
  //           this.taxForm.reset()
  //           window.location.reload()
  //         }
  //       }, err => {
  //         console.log(err.error.gst);
  //       })
  //     } else {
  //       this.coreService.addtax(this.taxForm.value).subscribe(res => {
  //         console.log(res);
  //         this.addRes = res
  //         if (this.addRes.msg == "Data Created") {
  //           this.toastr.success(this.addRes.msg)
  //           this.taxForm.reset()
  //           window.location.reload();
  //         }
  //       }, err => {
  //         console.log(err.error.gst);
  //       })
  //     }
  //   } else {
  //     this.taxForm.markAllAsTouched()
  //     console.log('forms invalid');
  //   }
  // }

  loaders=false
 submit() {
  console.log(this.taxForm.value);
  console.log(this.id);

  if (this.taxForm.valid) {
  this.loaders=true;
    this.coreService.addtax(this.taxForm.value).subscribe(res => {
      console.log(res);
      this.addRes = res
      if (this.addRes.msg == "Data Created") {
        this.loaders=false;
        this.toastr.success(this.addRes.msg)
        this.taxForm.reset()
        // window.location.reload();
        this.ngOnInit()
      }else{
        this.toastr.error(this.addRes.tax_percentage)
      }
    }, err => {
      console.log(err.error.gst);
    })
    
  } else {
    this.taxForm.markAllAsTouched()
    console.log('forms invalid');
  }
}

update(){
  if (this.taxForm.valid) {
    this.loaders=true;
    this.coreService.updatetax(this.taxForm.value, this.id).subscribe(res => {
      console.log(res);
      this.addRes = res
      if (this.addRes.msg == "Tax updated successfully") {
        this.loaders=false;
        this.toastr.success(this.addRes.msg)
        this.taxForm.reset()
        this.addForm=false
        // window.location.reload()
        this.ngOnInit()
      }
    }, err => {
      console.log(err.error.gst);
    })
   
  } else {
    this.taxForm.markAllAsTouched()
    console.log('forms invalid');
  }
}

  get title() {
    return this.taxForm.get('title')
  }
  get tax_percentage() {
    return this.taxForm.get('tax_percentage')
  }
 
  addForm = true
  id: any
  editFormdata: any
  editForm(id: number) {
    this.id = id
    this.coreService.gettaxById(id).subscribe(res => {
      console.log(res);
      res.map((data: any) => {
        console.log(data);
        if (id == data.id) {
          this.addForm=false
          this.taxForm.patchValue(data);
          this.editFormdata = res
        }
      })
    })
  }
  openaddForm() {
    this.addForm = true;
    this.taxForm.reset();
  }

  search() {
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      this.tableData = this.tableData.filter(res => {
        console.log(res);
        console.log(res.title.toLocaleLowerCase());
        console.log(res.title.match(this.titlee));
        return res.title.match(this.titlee);
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
