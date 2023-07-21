import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-unit-conversion',
  templateUrl: './unit-conversion.component.html',
  styleUrls: ['./unit-conversion.component.scss']
})
export class UnitConversionComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  unitConversionForm!: FormGroup;
  get f() {
    return this.unitConversionForm.controls;
  }
  titlee: any;
  p:number=1
  pageSize: number = 5;
 
  itemsPerPage = 5;
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
        this.coreService.deleteUnitConversion(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Unit Conversion Deleted successfully") {
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
     text: "Do you want to Deactivate this unit conversion!",
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
       this.coreService.unitConversionIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.msg == "UnitConversion Is active Updated Successfully") {
           this.ngOnInit()
         }
       })
       Swal.fire({
         icon: 'success',
         title: 'Deactivate!',
         text: 'Unit Conversion Is Deactivate Successfully.',
       });
     }
   });
 }
 Active(index: any, id: any) {
   Swal.fire({
     title: 'Are you sure?',
     text: "Do you want to Active this unit conversion!",
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
       this.coreService.unitConversionIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.msg == "UnitConversion Is active Updated Successfully") {
           this.ngOnInit()
         }
       })
       Swal.fire({
         icon: 'success',
         title: 'Active!',
         text: 'Unit Conversion Is Active Successfully.',
       });
     }
   });
 }
 loader=true;
 isAdd:any;
 isEdit:any;
 isDelete:any;
  ngOnInit(): void {
    this.unitConversionForm = this.fb.group({
      alternate_unit: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      unit: new FormControl('', [Validators.required])
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
    // this.coreService.getUnitConversion();
    // this.coreService.unitConversionBehavior.subscribe(() => {
    //   this.tableData = Object.values(JSON.parse(localStorage.getItem("unitconservationList")))
    // })

    this.coreService.getunitconversion().subscribe(res=>{
      this.loader=false;
      this.tableData=res;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
    console.log(this.tableData);
    this.getUnits();
    const localStorageData = JSON.parse(localStorage.getItem('auth'));
    if (localStorageData && localStorageData.permission) {
      const permission = localStorageData.permission;
      permission.map((res: any) => {
        if (res.content_type.app_label === 'product' && res.content_type.model === 'unitconversion' && res.codename=='add_unitconversion') {
          this.isAdd = res.codename;
          console.log(this.isAdd);
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'unitconversion' && res.codename=='change_unitconversion') {
          this.isEdit = res.codename;
          console.log(this.isEdit);
        }else if (res.content_type.app_label === 'product' && res.content_type.model === 'unitconversion' && res.codename=='delete_unitconversion') {
          this.isDelete = res.codename;
          console.log(this.isEdit);
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
    this.coreService.deleteUnitConversion(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Unit Conversion Deleted successfully") {
        this.ngOnInit()
      }

    })
  }
  //form submit
  unitList: any
  getUnits() {
    this.coreService.getUnit().subscribe(res => {
      this.unitList = res;
    })
  }
  addRes: any
  // submit() {
  //   console.log(this.unitConversionForm.value);
  //   console.log(this.id);

  //   if (this.unitConversionForm.valid) {
  //     if (this.id) {
  //       this.coreService.updateUnitConversion(this.unitConversionForm.value, this.id).subscribe(res => {
  //         console.log(res);
  //         this.addRes = res
  //         if (this.addRes.msg == "Unit Conversion updated successfully") {
  //           this.toastr.success(this.addRes.msg)
  //           this.unitConversionForm.reset()
  //           window.location.reload()
  //         }
  //       }, err => {
  //         console.log(err.error.gst);
  //       })
  //     } else {
  //       this.coreService.addUnitConversion(this.unitConversionForm.value).subscribe(res => {
  //         console.log(res);
  //         this.addRes = res
  //         if (this.addRes.msg == "Data Created") {
  //           this.toastr.success(this.addRes.msg)
  //           this.unitConversionForm.reset()
  //           window.location.reload();
  //         }
  //       }, err => {
  //         console.log(err.error.gst);
  //       })
  //     }
  //   } else {
  //     this.unitConversionForm.markAllAsTouched()
  //     console.log('forms invalid');
  //   }
  // }


  openaddForm() {
    this.addForm = true;
    this.unitConversionForm.reset();
  }

loaders=false;
  submit() {
    console.log(this.unitConversionForm.value);
    console.log(this.id);

    if (this.unitConversionForm.valid) {
      this.loaders=true;
      this.coreService.addUnitConversion(this.unitConversionForm.value).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Data Created") {
          this.loaders=false;
          this.toastr.success(this.addRes.msg)
          this.unitConversionForm.reset()
          this.ngOnInit()
        }
      }, err => {
        console.log(err.error.gst);
      })
    } else {
      this.unitConversionForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  update() {
    if (this.unitConversionForm.valid) {
      this.loaders=true;
      this.coreService.updateUnitConversion(this.unitConversionForm.value, this.id).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Unit Conversion updated successfully") {
          this.loaders=false;
          this.toastr.success(this.addRes.msg)
          this.unitConversionForm.reset()
          this.addForm = true
          this.ngOnInit()
        }
      }, err => {
        console.log(err.error.gst);
      })
    } else {
      this.unitConversionForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  get alternate_unit() {
    return this.unitConversionForm.get('alternate_unit')
  }
  get quantity() {
    return this.unitConversionForm.get('quantity')
  }
  get unit() {
    return this.unitConversionForm.get('unit')
  }
  addForm = true
  id: any
  editFormdata: any
  editForm(id: number) {
    this.id = id
    this.coreService.getUnitConversionById(id).subscribe(res => {
      console.log(res);
      res.map((data: any) => {
        console.log(data);
        if (id == data.id) {
          this.addForm = false
          this.unitConversionForm.patchValue(data);
          this.editFormdata = res
          this.unitConversionForm.get('unit')?.setValue(data.id)
        }
      })
    })
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

