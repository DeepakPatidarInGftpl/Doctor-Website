import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.scss']
})
export class WarehouseListComponent implements OnInit, OnDestroy {


  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  warehouseForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private coreService: CoreService,
    private queryService: QueryService,
    private toastr: ToastrService
  ) {
    this.queryService.filterToggle()

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
          // console.log(res);
          // if (this.delRes.msg == "Warehouse Deleted successfully") {
          //   this.tableData
          // }
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

  get f() {
    return this.warehouseForm.controls;
  }

  editRoute



  ngOnInit() {

    this.queryService.getWarehouse()
    this.queryService.warehouse.subscribe((res) => {
      if (localStorage.getItem('warehouseList')) {
        this.tableData = Object.values(JSON.parse(localStorage.getItem("warehouseList")))
      }
    })


    let ftitle = ''
    let accTypes = ''
    let faddress = ''

    this.coreService.editThings.subscribe((data: any) => {

      this.editRoute = data

      if (this.editRoute) {
        ftitle = data.title
        accTypes = data.accounts_type
        faddress = data.address
      }

      this.warehouseForm = this.fb.group({
        title: new FormControl(ftitle, [Validators.required]),
        accounts_type: new FormControl(accTypes, [Validators.required]),
        address: new FormControl(faddress, [Validators.required]),
      })

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




  addRes: any
  submit() {
    if (this.warehouseForm.valid) {
      if (this.editMode) {

        this.coreService.updateWarehouse(this.warehouseForm.value, this.editRoute.id).subscribe((res: any) => {
          if (res.msg == 'Warehouse updated successfully') {
            this.toastr.success(res.msg)
            this.ngOnInit()
            this.warehouseForm.reset()
            this.editMode = false
          }
        })

      } else {
        this.coreService.addWarehouse(this.warehouseForm.value).subscribe(res => {
          // console.log(res);
          this.addRes = res
          if (this.addRes.msg == "Data Created") {
            this.toastr.success(this.addRes.msg)
            this.ngOnInit()
            this.warehouseForm.reset()
          }
        }, err => {
          // console.log(err.error.gst);
        })
      }
    } else {
      this.warehouseForm.markAllAsTouched()
      // console.log('forms invalid');
    }
  }

  editMode = false;
  editWareHouse(prod) {
    this.coreService.editThisData(prod);
    this.editMode = true
  }

  ngOnDestroy() {
      this.coreService.editThisData(null)
  }


  get accounts_type() {
    return this.warehouseForm.get('accounts_type')
  }
  get title() {
    return this.warehouseForm.get('title')
  }
  get address() {
    return this.warehouseForm.get('address');
  }

}
