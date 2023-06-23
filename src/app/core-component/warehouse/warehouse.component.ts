import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  warehouseForm: FormGroup

  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
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
          console.log(res);
          // if (this.delRes.msg == "Warehouse Deleted successfully") {
          //   this.tableData
          // }
          if (this.delRes.msg == "Warehouse Deleted successfully") {
            this.ngOnInit();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'Your file has been deleted.',
            });
            this.tableData.splice(index, 1);
          }else {
            Swal.fire({
              icon: 'error',
              title: 'Not Deleted!',
              text: this.delRes.error,
            });
          }
        })
       
      }
    });
  }

  select = false
  // active deactive
  deActivate(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Deactivate this warehouse!",
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
        this.coreService.warehouseIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Warehouse Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Warehouse Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this warehouse!",
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
        this.coreService.warehouseIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Warehouse Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'Warehouse Is Active Successfully.',
        });
      }
    });
  }
  get f() {
    return this.warehouseForm.controls;
  }

  editRoute
  loader = true;
  ngOnInit() {

    // this.queryService.getWarehouse()
    // this.queryService.warehouse.subscribe((res) => {
    //   if (localStorage.getItem('warehouseList')) {
    //     this.tableData = Object.values(JSON.parse(localStorage.getItem("warehouseList")))
    //   }
    // })

    this.coreService.getWarehouse().subscribe(res => {
      this.tableData = res;
      this.loader = false
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
    this.getAccountType();

    this.warehouseForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      accounts_type: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
    })
    let ftitle = ''
    let accTypes = ''
    let faddress = ''

    // this.coreService.editThings.subscribe((data: any) => {

    //   this.editRoute = data

    //   // if (this.editRoute) {
    //   //   ftitle = data.title
    //   //   accTypes = data.accounts_type
    //   //   faddress = data.address
    //   // }

    //   this.warehouseForm = this.fb.group({
    //     title: new FormControl( [Validators.required]),
    //     accounts_type: new FormControl([Validators.required]),
    //     address: new FormControl([Validators.required]),
    //   })

    // })




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
  }

  allSelected: boolean = false;
  selectedRows: boolean[]
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
    this.coreService.deleteWarehouse(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Warehouse Deleted successfully") {
        // this.getcompanyList()
      }

    })
  }

  accountType: any
  getAccountType() {
    this.coreService.accountType().subscribe(res => {
      console.log(res);
      this.accountType = res
    })
  }
  addRes: any
  // submit() {
  //   if (this.warehouseForm.valid) {
  //     if (this.addForm) {

  //       this.coreService.updateWarehouse(this.warehouseForm.value, this.editRoute.id).subscribe((res: any) => {
  //         if (res.msg == 'Warehouse updated successfully') {
  //           this.toastr.success(res.msg)
  //           this.ngOnInit()
  //           this.warehouseForm.reset()
  //           this.addForm = false
  //         }
  //       })

  //     } else {
  //       this.coreService.addWarehouse(this.warehouseForm.value).subscribe(res => {
  //         console.log(res);
  //         this.addRes = res
  //         if (this.addRes.msg == "Data Created") {
  //           this.toastr.success(this.addRes.msg)
  //           this.ngOnInit()
  //           this.warehouseForm.reset()
  //         }
  //       }, err => {
  //         console.log(err.error.gst);
  //       })
  //     }
  //   } else {
  //     this.warehouseForm.markAllAsTouched()
  //     console.log('forms invalid');
  //   }
  // }


  submit() {
    console.log(this.warehouseForm.value);
    if (this.warehouseForm.valid) {
      this.coreService.addWarehouse(this.warehouseForm.value).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Data Created") {
          this.toastr.success(this.addRes.msg)
          this.warehouseForm.reset()
          this.ngOnInit()
        }
      }, err => {
        console.log(err.error.gst);
      })
    } else {
      this.warehouseForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  update() {
    if (this.warehouseForm.valid) {
      this.coreService.updateWarehouse(this.warehouseForm.value, this.id).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Warehouse updated successfully") {
          this.toastr.success(this.addRes.msg)
          this.warehouseForm.reset()
          this.addForm = true
          // window.location.reload()
          this.ngOnInit()
        }
      }, err => {
        console.log(err.error.gst);
      })



    } else {
      this.warehouseForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  addForm = true;
  editWareHouse(prod) {
    this.coreService.editThisData(prod);
    this.addForm = false
  }

  id: any
  editFormdata: any
  editForm(id: number) {
    this.id = id
    this.coreService.getwarehouseById(id).subscribe(res => {
      console.log(res);
      res.map((data: any) => {
        console.log(data);
        if (id == data.id) {
          this.addForm = false;
          this.warehouseForm.patchValue(data);
          this.editFormdata = res
        }
      })
    })
  }
  openaddForm() {
    this.addForm = true;
    this.warehouseForm.reset();
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
