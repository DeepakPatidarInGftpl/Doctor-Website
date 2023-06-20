import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WebsiteService } from 'src/app/Services/website/website.service';
import Swal from 'sweetalert2';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-trending-products',
  templateUrl: './trending-products.component.html',
  styleUrls: ['./trending-products.component.scss']
})
export class TrendingProductsComponent implements OnInit {
  //
  dropdownList = [];
  selectedItems: any[] = [];
  dropdownSettings: IDropdownSettings = {};
  //

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any;
  trendingProductsForm!: FormGroup;
  get f() {
    return this.trendingProductsForm.controls;
  }

  titlee: any;
  p: number = 1
  pageSize: number = 5;

  itemsPerPage = 5;
  constructor(private websiteService: WebsiteService, private fb: FormBuilder, private toastr: ToastrService,) {
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
        this.websiteService.deleteTrendingProducts(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Trending product Deleted successfully") {
            this.tableData
            this.ngOnInit();
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
  select = false
  // active deactive
  deActivate(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Deactivate this Trending Products!",
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
        this.websiteService.TrendingProductsIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Trending product Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Trending Products Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this Trending Products!",
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
        this.websiteService.TrendingProductsIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Trending product Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'Trending Products Is Active Successfully.',
        });
      }
    });
  }
  ngOnInit(): void {
    this.trendingProductsForm = this.fb.group({
      variant: new FormArray([], [Validators.required]),
      discount: new FormControl('', [Validators.pattern(/^[0-9]*$/),Validators.required]),
    })
    //dropdown list
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'product_title',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.websiteService.getTrendingProducts().subscribe(res => {
      this.tableData = res;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
    this.getVariant();
  }

  //
  onItemSelect(item: any) {
    console.log(item);
    let formArray: any = this.trendingProductsForm.get('variant') as FormArray;
    formArray.push(new FormControl(item.id))
  }
  onItemDeselect(item: any): void {
    // Handle the deselection of the item
    console.log('Item deselected:', item);
    let formArray: FormArray = this.trendingProductsForm.get('variant') as FormArray;
    console.log(formArray);
    const index = formArray.controls.findIndex(control => control.value === item.id);
    console.log(index);
    if (index !== -1) {
      formArray.removeAt(index);
    }
  }

  onSelectAll(items: any) {
    console.log(items);
    let formArray: any = this.trendingProductsForm.get('variant') as FormArray;
    items.forEach((item: any) => {
      formArray.push(new FormControl(item.id));
    });
  }
  onDeselectAll(items: any) {
    console.log('All items deselected:', items);
    let formArray: any = this.trendingProductsForm.get('variant') as FormArray;
    formArray.clear();
  }
  variantList: any[] = [];
  getVariant() {
    this.websiteService.getVariant().subscribe((res: any) => {
      console.log(res);
      this.variantList = res;
    })
  }
  //
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
  
  addRes: any
  submit() {
    console.log(this.trendingProductsForm.value);
    if (this.trendingProductsForm.valid) {
      console.log('valid');
      var formdata: any = new FormData()
      formdata.append('discount', this.trendingProductsForm.get('discount')?.value);
      formdata.append('variant', JSON.stringify(this.trendingProductsForm.get('variant')?.value));
      this.websiteService.addTrendingProducts(formdata).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.Is_Sucess == "True") {
          this.toastr.success(this.addRes.msg)
          this.trendingProductsForm.reset();
          this.selectedItems = [];
          this.ngOnInit()
        }
      }, err => {
        console.log(err.error.gst);
      })
    } else {
      this.trendingProductsForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  update() {
    console.log(this.id);
    console.log(this.trendingProductsForm.value);
    if (this.trendingProductsForm.valid) {
      var formdata: any = new FormData()
      formdata.append('discount', this.trendingProductsForm.get('discount')?.value);
      formdata.append('variant', JSON.stringify(this.trendingProductsForm.get('variant')?.value));
      this.websiteService.updateTrendingProducts(formdata, this.id).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.Is_Sucess == "True") {
          this.toastr.success(this.addRes.msg)
          this.trendingProductsForm.reset()
          this.addForm = false
          this.selectedItems = [];
          this.ngOnInit()
        }
      }, err => {
        console.log(err.error.gst);
      })
    } else {
      this.trendingProductsForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  get variant() {
    return this.trendingProductsForm.get('variant')
  }
  get discount() {
    return this.trendingProductsForm.get('discount')
  }

  addForm = true
  id: any
  editFormdata: any;
  resEdit: any;
  variantItem: any;
  editForm(id: number) {
    this.id = id
    this.websiteService.getTrendingProductsById(id).subscribe(res => {
      console.log(res);
      this.resEdit = res;
      if (id == this.resEdit.id) {
        console.log(this.resEdit.variant);
        this.addForm = false
        this.trendingProductsForm.patchValue({
          discount: this.resEdit.discount,
        });
        // here selected data send value in formArray
        this.resEdit.variant.map((res: any) => {
          console.log(res);
          let formArray: any = this.trendingProductsForm.get('variant') as FormArray;
          formArray.push(new FormControl(res.id))
        })
        // here display auto selected data
        this.variantItem = res.variant.map((variant: any) => {
          return {
            id: variant.id,
            product_title: variant.product_title
          };
        });
        this.selectedItems = this.variantItem;
        console.log(this.variantItem);
        this.editFormdata = res;
      }
    })
  }
  openaddForm() {
    this.addForm = true;
    this.trendingProductsForm.reset();
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
