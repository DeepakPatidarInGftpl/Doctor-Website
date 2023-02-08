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
            window.location.reload()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Your file has been deleted.',
        });
        this.tableData.splice(index, 1);
      }
    });
  }
  ngOnInit(): void {
    this.taxForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      tax_percentage: new FormControl('', [Validators.required]),   
    })
    this.dtOptions = {
      dom: 'Btlpif',
      pagingType: 'numbers',
      language: {
        search: ' ',
        searchPlaceholder: "Search...",
        info: "_START_ - _END_ of _TOTAL_ items",
      },
      initComplete: (settings, json) => {
        $('.dt-buttons').appendTo('.wordset');
        $('.dataTables_filter').appendTo('.search-input');
      },

    };
    this.coreService.gettax();
    // this.tableData = this.QueryService.taxList;
    // console.log(this.tableData);

    this.coreService.taxBehavior.subscribe(() => {
      if (localStorage.getItem('taxList')) {
        this.tableData = Object.values(JSON.parse(localStorage.getItem("taxList")!))
      }
    })
  
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

  
 submit() {
  console.log(this.taxForm.value);
  console.log(this.id);

  if (this.taxForm.valid) {
  
    this.coreService.addtax(this.taxForm.value).subscribe(res => {
      console.log(res);
      this.addRes = res
      if (this.addRes.msg == "Data Created") {
        this.toastr.success(this.addRes.msg)
        this.taxForm.reset()
        // window.location.reload();
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

update(){
  if (this.taxForm.valid) {
    this.coreService.updatetax(this.taxForm.value, this.id).subscribe(res => {
      console.log(res);
      this.addRes = res
      if (this.addRes.msg == "Tax updated successfully") {
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

}
