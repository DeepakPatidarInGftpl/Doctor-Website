import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-variant',
  templateUrl: './variant.component.html',
  styleUrls: ['./variant.component.scss']
})
export class VariantComponent implements OnInit {

  
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  variantForm!: FormGroup;
  get f() {
    return this.variantForm.controls;
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
        this.coreService.deleteUnitConversion(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Variant Deleted successfully") {
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
    this.variantForm = this.fb.group({
      sku: new FormControl('', [Validators.required]),
 minimum_stock_threshold: new FormControl('', [Validators.required])
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
    this.coreService.getVariant();
    this.tableData = this.QueryService.variantList;
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
    this.coreService.deleteVariant(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Variant Deleted successfully") {
        window.location.reload()
      }

    })
  }

  addRes: any
  submit() {
    console.log(this.variantForm.value);
    console.log(this.id);

    if (this.variantForm.valid) {
      if (this.id) {
        this.coreService.updateVariant(this.variantForm.value, this.id).subscribe(res => {
          console.log(res);
          this.addRes = res
          if (this.addRes.msg == "Variant updated successfully") {
            this.toastr.success(this.addRes.msg)
            this.variantForm.reset()
            window.location.reload()
          }
        }, err => {
          console.log(err.error.gst);
        })
      } else {
        this.coreService.addVariant(this.variantForm.value).subscribe(res => {
          console.log(res);
          this.addRes = res
          if (this.addRes.msg == "Variant Successfuly Added") {
            this.toastr.success(this.addRes.msg)
            this.variantForm.reset()
            window.location.reload();
          }
        }, err => {
          console.log(err.error.gst);
        })
      }
    } else {
      this.variantForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  get sku() {
    return this.variantForm.get('sku')
  }
  get minimum_stock_threshold() {
    return this.variantForm.get('minimum_stock_threshold')
  }
 
  addForm = true
  id: any
  editFormdata: any
  editForm(id: number) {
    this.id = id
    this.coreService.getVariantById(id).subscribe(res => {
      console.log(res);
      if (id == res.id) {
        this.addForm=false
        this.variantForm.patchValue(res);
        this.editFormdata = res
      
      }
    })
  }

}

