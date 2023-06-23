import { Component, OnInit } from '@angular/core';

import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WebsiteService } from 'src/app/Services/website/website.service';
import Swal from 'sweetalert2';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

// vaidation for future date
function futureDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      return { pastDate: true };
    }

    return null;
  };
}
@Component({
  selector: 'app-deal-of-the-day',
  templateUrl: './deal-of-the-day.component.html',
  styleUrls: ['./deal-of-the-day.component.scss']
})
export class DealOfTheDayComponent implements OnInit {
  //
  dropdownList = [];
  selectedItems: any[] = [];
  dropdownSettings: IDropdownSettings = {};
  //

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any;
  dealOfTheDayForm!: FormGroup;
  get f() {
    return this.dealOfTheDayForm.controls;
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
        this.websiteService.deleteDealOfTheDay(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Deals Of The Day Deleted successfully") {
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
      text: "Do you want to Deactivate this Deals Of The Day!",
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
        this.websiteService.DealOfTheDayIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Deals Of The Day Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Deals Of The Day Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this Deals Of The Day!",
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
        this.websiteService.DealOfTheDayIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Deals Of The Day Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'Deals Of The Day Is Active Successfully.',
        });
      }
    });
  }

  loader=true;

  ngOnInit(): void {
    this.dealOfTheDayForm = this.fb.group({
      variant: new FormArray([], [Validators.required]),
      discount: new FormControl('', [Validators.pattern(/^(100|[0-9]{1,2})$/), Validators.required]),
      datetime: new FormControl('', [Validators.required, futureDateValidator()])
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

    this.websiteService.getDealOfTheDay().subscribe(res => {
      this.loader=false;
      this.tableData = res;
      
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
    this.getVariant();
  }

  //
  onItemSelect(item: any) {
    console.log(item);
    let formArray: any = this.dealOfTheDayForm.get('variant') as FormArray;
    formArray.push(new FormControl(item.id))
  }
  onItemDeselect(item: any): void {
    // Handle the deselection of the item
    console.log('Item deselected:', item);
    let formArray: FormArray = this.dealOfTheDayForm.get('variant') as FormArray;
    console.log(formArray);
    const index = formArray.controls.findIndex(control => control.value === item.id);
    console.log(index);
    if (index !== -1) {
      formArray.removeAt(index);
    }
  }

  onSelectAll(items: any) {
    console.log(items);
    let formArray: any = this.dealOfTheDayForm.get('variant') as FormArray;
    items.forEach((item: any) => {
      formArray.push(new FormControl(item.id));
    });
  }
  onDeselectAll(items: any) {
    console.log('All items deselected:', items);
    let formArray: any = this.dealOfTheDayForm.get('variant') as FormArray;
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
  
  addRes: any;
 loaders = false;
  submit() {
    console.log(this.dealOfTheDayForm.value);
    if (this.dealOfTheDayForm.valid) {
      this.loaders=true;
      console.log('valid');
      var formdata: any = new FormData()
      formdata.append('discount', this.dealOfTheDayForm.get('discount')?.value);
      // formdata.append('variant', JSON.stringify(this.dealOfTheDayForm.get('variant')?.value));
        // Filter out null values from the variant array
        const variantArray = this.dealOfTheDayForm.get('variant')?.value.filter((value: any) => value !== null);
        formdata.append('variant', JSON.stringify(variantArray));
      formdata.append('datetime',this.dealOfTheDayForm.get('datetime')?.value);

      this.websiteService.addDealOfTheDay(formdata).subscribe(res => {
        console.log(res);
        this.loaders=false;
        this.addRes = res
        if (this.addRes.Is_Sucess == "True") {
          this.toastr.success(this.addRes.msg);
          this.selectedItems = [];
          this.dealOfTheDayForm.reset(); 
          this.ngOnInit()
        }
      }, err => {
        console.log(err.error.gst);
      })
    } else {
      this.dealOfTheDayForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  update() {
    console.log(this.id);
    console.log(this.dealOfTheDayForm.value);
    if (this.dealOfTheDayForm.valid) {
      this.loaders=true;
      var formdata: any = new FormData()
      formdata.append('discount', this.dealOfTheDayForm.get('discount')?.value);
      // formdata.append('variant', JSON.stringify(this.dealOfTheDayForm.get('variant')?.value));
      const variantArray = this.dealOfTheDayForm.get('variant')?.value.filter((value: any) => value !== null);
      formdata.append('variant', JSON.stringify(variantArray));
      formdata.append('datetime',this.dealOfTheDayForm.get('datetime')?.value);

      this.websiteService.updateDealOfTheDay(formdata, this.id).subscribe(res => {
        console.log(res);
        this.loaders=false;
        this.addRes = res
        if (this.addRes.Is_Sucess == "True") {
          this.toastr.success(this.addRes.msg)
          this.dealOfTheDayForm.reset()
          this.addForm = false
          this.selectedItems = [];
          this.ngOnInit()
        }
      }, err => {
        console.log(err.error.gst);
      })
    } else {
      this.dealOfTheDayForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  get variant() {
    return this.dealOfTheDayForm.get('variant')
  }
  get discount() {
    return this.dealOfTheDayForm.get('discount')
  }
  get datetime(){
    return this.dealOfTheDayForm.get("datetime")
  }

  addForm = true
  id: any
  editFormdata: any;
  resEdit: any;
  variantItem: any;
  editForm(id: number) {
    this.id = id
    this.websiteService.getDealOfTheDayById(id).subscribe(res => {
      console.log(res);
      this.resEdit = res;
      if (id == this.resEdit.id) {
        console.log(this.resEdit.variant);
        this.addForm = false
        
        this.dealOfTheDayForm.patchValue({
          discount: this.resEdit.discount,
          datetime:this.resEdit.datetime
        });
        // here selected data send value in formArray
        this.resEdit.variant.map((res: any) => {
          console.log(res);
          let formArray: any = this.dealOfTheDayForm.get('variant') as FormArray;
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
    this.dealOfTheDayForm.reset();
  }

  search() {
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      this.tableData = this.tableData.filter((res: any) => {
        console.log(res);
  
        const matchingVariants = res.variant.filter((variant: any) =>
          variant.product_title.toLowerCase().includes(this.titlee.toLowerCase())
        );
  
        return matchingVariants.length > 0;
      });
    }
  }
  
  key = 'id'
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }
}
