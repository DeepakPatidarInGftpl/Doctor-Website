import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hsncode',
  templateUrl: './hsncode.component.html',
  styleUrls: ['./hsncode.component.scss']
})
export class HsncodeComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  hsncodeForm!: FormGroup;
  get f() {
    return this.hsncodeForm.controls;
  }
  constructor(private coreService: CoreService, private QueryService: QueryService, private fb: FormBuilder, private toastr: ToastrService, private router: Router) {
    this.QueryService.filterToggle()
    this.tableData = this.QueryService.hsncodeList;

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
        this.coreService.deleteWarehouse(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Warehouse Deleted successfully") {
            this.tableData
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
    this.hsncodeForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      hsn_code: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      tax: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      subcategory: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
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
    this.coreService.getHSNcode();
    this.getSubcategory()
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
    this.coreService.deleteWarehouse(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Warehouse Deleted successfully") {
        // this.getcompanyList()
      }

    })
  }

  // form submit
  subcategoryList: any
  getSubcategory() {
    this.coreService.getSubcategory().subscribe(res => {
      console.log(res);
      this.subcategoryList = res
    })
  }

  addRes: any
  submit() {
    console.log(this.hsncodeForm.value);
    if (this.hsncodeForm.valid) {
      this.coreService.addHSNcode(this.hsncodeForm.value).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Data Created") {
          this.toastr.success(this.addRes.msg)
          this.hsncodeForm.reset()
          this.router.navigate(['product/hsncode']).then(() => {
            window.location.reload()
          })
        }
      }, err => {
        console.log(err.error.gst);
      })
    } else {
      this.hsncodeForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  get hsn_code() {
    return this.hsncodeForm.get('hsn_code')
  }
  get title() {
    return this.hsncodeForm.get('title')
  }
  get tax() {
    return this.hsncodeForm.get('tax');
  }
  get subcategory() {
    return this.hsncodeForm.get('subcategory');
  }
}
