import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    // this.tableData = this.QueryService.hsncodeList;
    // console.log(this.tableData);
    this.coreService.hsncodeBehavior.subscribe(() => {
      if (localStorage.getItem('hsncodeList')) {
        this.tableData = Object.values(JSON.parse(localStorage.getItem("hsncodeList")!))
      }
    })
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
        this.coreService.deleteHSNcode(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "HSNCode Deleted successfully") {
           this.ngOnInit()
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
      subcategory: new FormArray([], [Validators.required]),
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
    this.getSubcategory();
    this.getTax();
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
  check: any
  onCheckChange(event: any) {
    const formArray: any = this.hsncodeForm.get('subcategory') as FormArray;

    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(parseInt(event.target.value)));
      // parseInt(formArray.push(new FormControl(event.target.value)))
      this.check = formArray
    }
    /* unselected */
    else {
      // find the unselected element
      let i: number = 0;
      formArray.controls.forEach((ctrl: any) => {
        if (ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  subcategoryList: any
  getSubcategory() {
    this.coreService.getSubcategory().subscribe(res => {
      console.log(res);
      this.subcategoryList = res
      if(!this.addForm){
      this.subcategoryList.map((map:any)=>{
        console.log(this.subcategories.includes(map.id));
        
        if(this.subcategories.includes(map.id)){
          let formArray:any=this.hsncodeForm.get('subcategory') as FormArray;
          formArray.push(new FormControl(map.id))
        }
      })
    }
    })
  }

  // addRes: any
  // submit() {
  //   console.log(this.hsncodeForm.value);
  //   var formdata: any = new FormData()

  //   formdata.append('title', this.hsncodeForm.get('title')?.value);
  //   formdata.append('tax', this.hsncodeForm.get('tax')?.value);
  //   formdata.append('hsn_code', this.hsncodeForm.get('hsn_code')?.value);
  //   formdata.append('subcategory', JSON.stringify(this.hsncodeForm.get('subcategory')?.value));

  //   if (this.hsncodeForm.valid) {
  //     this.coreService.addHSNcode(formdata).subscribe(res => {
  //       console.log(res);
  //       this.addRes = res
  //       if (this.addRes.msg == "Data Created") {
  //         this.toastr.success(this.addRes.msg)
  //         this.hsncodeForm.reset()
  //         this.router.navigate(['product/hsncode']).then(() => {
  //           window.location.reload()
  //         })
  //       }
  //     }, err => {
  //       console.log(err.error.gst);
  //     })
  //   } else {
  //     this.hsncodeForm.markAllAsTouched()
  //     console.log('forms invalid');
  //   }
  // }

  addRes: any
  data: any
  // submit() {
  //   console.log(this.hsncodeForm.value);
  //   var formdata: any = new FormData()

  //   formdata.append('title', this.hsncodeForm.get('title')?.value);
  //   formdata.append('tax', this.hsncodeForm.get('tax')?.value);
  //   formdata.append('hsn_code', this.hsncodeForm.get('hsn_code')?.value);
  //   formdata.append('subcategory', JSON.stringify(this.hsncodeForm.get('subcategory')?.value));

  //   if (this.hsncodeForm.valid) {
  //     if (this.id) {
  //       this.coreService.updateHSNcode(formdata, this.id).subscribe(res => {
  //         console.log(res);
  //         this.addRes = res
  //         if (this.addRes.msg == "HSNCode updated successfully") {
  //           this.toastr.success(this.addRes.msg)
  //           this.hsncodeForm.reset()
  //           window.location.reload()
  //         }
  //       }, err => {
  //         console.log(err.error.gst);
  //       })
  //     } else {
  //       this.coreService.addHSNcode(formdata).subscribe(res => {
  //         console.log(res);
  //         this.addRes = res
  //         if (this.addRes.msg == "HSNCode Successfuly Added") {
  //           this.toastr.success(this.addRes.msg)
  //           this.hsncodeForm.reset()
  //           window.location.reload()
  //         }
  //       }, err => {
  //         console.log(err.error.gst);
  //       })
  //     }
  //   } else {
  //     this.hsncodeForm.markAllAsTouched()
  //     console.log('forms invalid');
  //   }
  // }



  submit() {
    console.log(this.hsncodeForm.value);
    var formdata: any = new FormData()

    formdata.append('title', this.hsncodeForm.get('title')?.value);
    formdata.append('tax', this.hsncodeForm.get('tax')?.value);
    formdata.append('hsn_code', this.hsncodeForm.get('hsn_code')?.value);
    formdata.append('subcategory', JSON.stringify(this.hsncodeForm.get('subcategory')?.value));


    if (this.hsncodeForm.valid) {
      this.coreService.addHSNcode(formdata).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "HSNCode Successfuly Added") {
          this.toastr.success(this.addRes.msg)
          this.hsncodeForm.reset()
          this.addForm = true
          // window.location.reload()
          this.ngOnInit()
        }
      }, err => {
        console.log(err.error.gst);
      })
    } else {
      this.hsncodeForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  update() {
    console.log(this.hsncodeForm.value);
    var formdata: any = new FormData()

    formdata.append('title', this.hsncodeForm.get('title')?.value);
    formdata.append('tax', this.hsncodeForm.get('tax')?.value);
    formdata.append('hsn_code', this.hsncodeForm.get('hsn_code')?.value);
    formdata.append('subcategory', JSON.stringify(this.hsncodeForm.get('subcategory')?.value));

    if (this.hsncodeForm.valid) {
      this.coreService.updateHSNcode(formdata, this.id).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "HSNCode updated successfully") {
          this.toastr.success(this.addRes.msg)
          this.hsncodeForm.reset()
          this.addForm=true;
          // window.location.reload()
          this.ngOnInit()
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
  taxdata: any
  getTax() {
    this.coreService.gettaxd().subscribe(res => {
      this.taxdata = res
    })
  }

  addForm = true
  id: any
  brandEdit: any
  subcategories: any = [];

  editForm(id: number) {
    this.id = id
    this.coreService.getHSNcodeById(id).subscribe(res => {
      console.log(res);

      if (id == res.id) {
        this.addForm = false;
        this.getSubcategory();
        this.brandEdit = res.brand_id;
        console.log(res);
        this.subcategories = res.subcategory
        console.log(this.subcategories);
        
        this.hsncodeForm.patchValue({
          title: res.title,
          tax: res.tax,
          hsn_code: res.hsn_code
        });
      }
    })
  }

  openaddForm() {
    this.addForm = true;
    this.hsncodeForm.reset();
  }
}
