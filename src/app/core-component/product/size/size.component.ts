import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private coreService: CoreService, private QueryService: QueryService, private fb: FormBuilder, private toastr: ToastrService, private router: Router) {
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
    this.sizeForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required]),   
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
    this.coreService.getsize();
    this.tableData = this.QueryService.sizeList;
    console.log(this.tableData);
  
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
  submit() {
    console.log(this.sizeForm.value);
    console.log(this.id);

    if (this.sizeForm.valid) {
      if (this.id) {
        this.coreService.updatesize(this.sizeForm.value, this.id).subscribe(res => {
          console.log(res);
          this.addRes = res
          if (this.addRes.msg == "Size updated successfully") {
            this.toastr.success(this.addRes.msg)
            this.sizeForm.reset()
            window.location.reload()
          }
        }, err => {
          console.log(err.error.gst);
        })
      } else {
        this.coreService.addsize(this.sizeForm.value).subscribe(res => {
          console.log(res);
          this.addRes = res
          if (this.addRes.msg == "Data Created") {
            this.toastr.success(this.addRes.msg)
            this.sizeForm.reset()
            window.location.reload();
          }
        }, err => {
          console.log(err.error.gst);
        })
      }
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
}
