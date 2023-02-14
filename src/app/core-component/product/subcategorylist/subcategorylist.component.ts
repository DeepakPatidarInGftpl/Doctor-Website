import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-subcategorylist',
  templateUrl: './subcategorylist.component.html',
  styleUrls: ['./subcategorylist.component.scss']
})
export class SubcategorylistComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  subcategoryForm!: FormGroup;
  get f() {
    return this.subcategoryForm.controls;
  }
  imgUrl = 'https://pv.greatfuturetechno.com';

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
        this.coreService.deleteProductSubcategory(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Warehouse Deleted successfully") {
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
    this.subcategoryForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      category_id: new FormControl('', [Validators.required]),
      brand_id: new FormArray([], [Validators.required])
    })

    this.coreService.getProductSubcategory();
    // this.tableData = this.QueryService.productsubcategoryList;
    // console.log(this.tableData);
    this.coreService.subcategoryBehavior.subscribe(() => {
      if (localStorage.getItem('productsubcategroyList')) {
        this.tableData = Object.values(JSON.parse(localStorage.getItem("productsubcategroyList")!))
      }
    })
    this.productCategory();
    this.getbrand()

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
    this.coreService.deleteUnits(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Subactegory Deleted successfully") {
        // this.getcompanyList()
      }
    })
  }

  categoryList: any
  productCategory() {
    this.coreService.getProductcategory().subscribe(res => {
      console.log(res);
      this.categoryList = res
    })
  }
  brandList: any
  getbrand() {
    this.coreService.getBrand().subscribe(res => {
      console.log(res);
      this.brandList = res;
      if(this.addForm){
    
      }else{
        this.brandList.map((map:any)=>{
          console.log(this.brands.includes(map.id));
          
          if(this.brands.includes(map.id)){
            console.log(map.id,'map.id');
            
            let formArray:any=this.subcategoryForm.get('brand_id') as FormArray;
            formArray.push(new FormControl(map.id))
          }
        })
      }
    
    })
  }
  check: any
  onCheckChange(event: any) {
    const formArray: any = this.subcategoryForm.get('brand_id') as FormArray;

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
  selectImg(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    console.log(file);

    this.subcategoryForm.patchValue({
      image: file
    })
    this.subcategoryForm.get('image')?.updateValueAndValidity();
  }
  addRes: any
  data: any
  // submit() {
  //   console.log(this.subcategoryForm.value);
  //   console.log(this.id);
  //   console.log(this.check);
  //   console.log(this.subcategoryForm.get('brand_id')?.value);
  //   this.data = this.subcategoryForm.get('brand_id')?.value
  //   var formdata: any = new FormData()

  //   formdata.append('title', this.subcategoryForm.get('title')?.value);
  //   formdata.append('image', this.subcategoryForm.get('image')?.value);
  //   formdata.append('category_id', this.subcategoryForm.get('category_id')?.value);
  //   formdata.append('brand_id', JSON.stringify(this.subcategoryForm.get('brand_id')?.value));

  //   if (this.subcategoryForm.valid) {
  //     if (this.id) {
  //       this.coreService.updateProductSubcategory(formdata, this.id).subscribe(res => {
  //         console.log(res);
  //         this.addRes = res
  //         if (this.addRes.msg == "Account updated successfully") {
  //           this.toastr.success(this.addRes.msg)
  //           this.subcategoryForm.reset()
  //           window.location.reload()
  //         }
  //       }, err => {
  //         console.log(err.error.gst);
  //       })
  //     } else {
  //       this.coreService.addProductSubcategory(formdata).subscribe(res => {
  //         console.log(res);
  //         this.addRes = res
  //         if (this.addRes.msg == "Data Created") {
  //           this.toastr.success(this.addRes.msg)
  //           this.subcategoryForm.reset()
  //           window.location.reload()
  //         }
  //       }, err => {
  //         console.log(err.error.gst);
  //       })
  //     }
  //   } else {
  //     this.subcategoryForm.markAllAsTouched()
  //     console.log('forms invalid');
  //   }
  // }

  loader = false
  submit() {
    console.log(this.subcategoryForm.value);
    console.log(this.id);
    console.log(this.check);
    console.log(this.subcategoryForm.get('brand_id')?.value);
    this.data = this.subcategoryForm.get('brand_id')?.value
    var formdata: any = new FormData()

    formdata.append('title', this.subcategoryForm.get('title')?.value);
    formdata.append('image', this.subcategoryForm.get('image')?.value);
    formdata.append('category_id', this.subcategoryForm.get('category_id')?.value);
    formdata.append('brand_id', JSON.stringify(this.subcategoryForm.get('brand_id')?.value));


    if (this.subcategoryForm.valid) {

      this.coreService.addProductSubcategory(formdata).subscribe(res => {
        console.log(res);
        this.loader = true;
        this.addRes = res
        if (this.addRes.msg == "Successfuly Added") {
          this.toastr.success(this.addRes.msg)
          this.subcategoryForm.reset()
          // window.location.reload()
          this.loader = false
          this.ngOnInit()
        }
      }, err => {
        console.log(err.error.gst);
      })

    } else {
      this.subcategoryForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  update() {
    console.log(this.subcategoryForm.value);
    
    var formdata: any = new FormData()

    formdata.append('title', this.subcategoryForm.get('title')?.value);
    formdata.append('image', this.subcategoryForm.get('image')?.value);
    formdata.append('category_id', this.subcategoryForm.get('category_id')?.value);
    formdata.append('brand_id', JSON.stringify(this.subcategoryForm.get('brand_id')?.value));

    if (this.subcategoryForm.valid) {
      this.coreService.updateProductSubcategory(formdata, this.id).subscribe(res => {
        console.log(res);
        this.addRes = res
        this.loader = true
        if (this.addRes.msg == "Account updated successfully") {
          this.toastr.success(this.addRes.msg)
          this.subcategoryForm.reset()
          this.addForm = true
          this.loader = false
          // window.location.reload()
          this.ngOnInit()
        }
      }, err => {
        console.log(err.error.gst);
      })

    } else {
      this.subcategoryForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  get title() {
    return this.subcategoryForm.get('title')
  }
  get image() {
    return this.subcategoryForm.get('image')
  }
  get category_id() {
    return this.subcategoryForm.get('category_id')
  }
  get brand_id() {
    return this.subcategoryForm.get('brand_id')
  }

  addForm = true
  id: any
  brandEdit: any;
  brands: any = []
  editForm(id: number) {
    this.id = id
    this.coreService.getProductSubcategoryById(id).subscribe(res => {
      console.log(res);

      if (id == res.id) {
        this.addForm = false;
        this.getbrand()
        this.brandEdit = res.brand_id;
        console.log(this.brandEdit);
        console.log(res);
        this.brands=res.brand_id.map((res: any) => res.id);
        console.log(this.brands,'this.brands');
        
        this.subcategoryForm.patchValue({
          title: res.title,
          // image:res.image,
          // category_id: res.category_id,
        });
      }
    })

  }
  openaddForm() {
    this.addForm = true;
    this.subcategoryForm.reset();
  }
}
