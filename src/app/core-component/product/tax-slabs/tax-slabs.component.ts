import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tax-slabs',
  templateUrl: './tax-slabs.component.html',
  styleUrls: ['./tax-slabs.component.scss']
})
export class TaxSlabsComponent implements OnInit {

  taxSlabForm!: FormGroup;
  taxSlabCtrl = new FormControl('', [Validators.required]);
  taxSlabList: any;
  allTaxSlabData: any;
  get f() {
    return this.taxSlabForm.controls;
  }
  isTax = false
  isAddmoreTax = false
  constructor(private fb: FormBuilder, private coreService: CoreService,
    private router: Router,
    private toastrService: ToastrService) { }


  ngOnInit(): void {
    this.taxSlabForm = this.fb.group({
      // subcategory_group: new FormControl('', [Validators.required]),
      // subcategory: new FormArray([], [Validators.required]),
      slab_title: new FormControl(''),
      variable_tax: new FormControl('', [Validators.required]),
      amount_tax_slabs: this.fb.array([])
    })
    this.addAmount();
    this.getTaxSlabList();
    // this.getSubcateGroup()
    this.getTax();
    if (this.isTax == true) {
      this.isAddmoreTax = true
    } else {
      this.isAddmoreTax = false
    }

    this.taxSlabCtrl.valueChanges.subscribe((res) => {
      console.log(res);
      this._filterBrands(res);
    });
  }

  getTaxSlabList() {
    this.coreService.gettaxd().subscribe(res => {
      this.taxSlabList = res;
      this.allTaxSlabData = res;
    })
  }

  private _filterBrands(value: string): any {
    const filterValue = value?.toLowerCase();
    this.taxSlabList = this.allTaxSlabData.filter(taxSlab => taxSlab?.title?.toLowerCase().includes(filterValue));
  }

  toggle() {
    this.isTax = !this.isTax;
    if (this.isTax == true) {
      this.isAddmoreTax = true
    } else {
      this.isAddmoreTax = false
      console.log('false');
    }
  }
  amount_tax_slabs(): FormGroup {
    if (this.isTax == true) {
      return this.fb.group({
        from_amount: (''),
        to_amount: (''),
        tax: ('')
      });
    } else {
      return this.fb.group({
        tax: ('')
      });
    }

  }
  getAmount(): FormArray {
    return this.taxSlabForm.get('amount_tax_slabs') as FormArray;
  }
  addAmount() {
    this.getAmount().push(this.amount_tax_slabs())
  }
  removeAmount(i: any) {
    this.getAmount().removeAt(i)
    // const remove = this.taxSlabForm.get('amount_tax_slabs') as FormArray
    // if (remove.length > 1) {
    //   remove.removeAt(i)
    // } else {
    //   remove.reset()
    // }
  }

  // get subcategory_group() {
  //   return this.taxSlabForm.get('subcategory_group')
  // }
  // get subcategory() {
  //   return this.taxSlabForm.get('subcategory')
  // }
  get slab_title() {
    return this.taxSlabForm.get('slab_title')
  }
  get variable_tax() {
    return this.taxSlabForm.get('variable_tax')
  }
  get tax() {
    return this.taxSlabForm.get('tax')
  }

  subcatGroupList: any
  getSubcateGroup() {
    this.coreService.getSubcategoryGroup().subscribe(res => {
      // console.log(res);
      this.subcatGroupList = res
    })
  }

  taxList: any;
  getTax() {
    this.coreService.gettaxd().subscribe(res => {
      // console.log(res);
      this.taxList = res
      // console.log(this.taxList);

    })
  }

  subcatbySubcatGroup: any[] = [];
  filteredSubcategory: any[] = [];
  searchTerm: string = '';
  selectSubcat: any = [];
  getSubcategoryBySubcatGroup(val: any) {
    this.coreService.getSubcategoryBySubcatGroup(val).subscribe(res => {
      // console.log(res.subcategories);
      this.subcatbySubcatGroup = res.subcategories;
      this.filteredSubcategory = [...this.subcatbySubcatGroup];
      setTimeout(() => {
        this.subcatbySubcatGroup.map((map: any) => {
          // console.log(this.selectSubcat.includes(map.id), 'subcategory');
          if (this.selectSubcat.includes(map.id)) {
            const formArray = this.taxSlabForm.get('subcategory') as FormArray;
            formArray.push(new FormControl(map.id));
          }
        })
      }, 1000);
    })
  }

  filterSubcategory() {
    if (this.searchTerm.trim() === '') {
      this.filteredSubcategory = [...this.subcatbySubcatGroup];
    } else {
      this.filteredSubcategory = this.subcatbySubcatGroup.filter(feature =>
        feature.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
  check: any
  selectedSubcat = 0;
  selectedSubCategoryIds: any[] = []
  onCheckChange(event: any) {
    const formArray: any = this.taxSlabForm.get('subcategory') as FormArray;

    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(parseInt(event.target.value)));
      // parseInt(formArray.push(new FormControl(event.target.value)))
      this.check = formArray
      this.selectedSubCategoryIds = formArray.value
      this.selectedSubcat++;
    }
    /* unselected */
    else {
      // find the unselected element
      let i: number = 0;
      formArray.controls.forEach((ctrl: any) => {
        if (ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          this.selectedSubcat--;
          return;
        }
        i++;
      });
    }
  }

  addRes: any;
  loaders = false;
  submit() {
    // console.log(this.taxSlabForm.value);
    if (this.taxSlabForm.valid && !!this.taxSlabCtrl.value) {
      this.taxSlabForm.get('slab_title').setValue(this.taxSlabCtrl.value);
      this.loaders = true;
      this.coreService.addTaxSlab(this.taxSlabForm.value).subscribe(res => {
        // console.log(res);
        this.addRes = res;
        if (this.addRes.success) {
          this.loaders = false;
          this.toastrService.success(this.addRes.msg);
          this.router.navigate(['product/taxSlabList']);
        }
      })
    } else {
      this.taxSlabForm.markAllAsTouched()
      this.toastrService.error('Please Fill All The Required Fields')
    }
  }
  //dropdown auto close stop
  onLabelClick(event: Event) {
    // Prevent the event from propagating to the dropdown menu
    event.stopPropagation();
  }
}
