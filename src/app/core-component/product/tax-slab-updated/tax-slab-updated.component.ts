import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tax-slab-updated',
  templateUrl: './tax-slab-updated.component.html',
  styleUrls: ['./tax-slab-updated.component.scss']
})
export class TaxSlabUpdatedComponent implements OnInit {

  taxSlabForm!: FormGroup;
  get f() {
    return this.taxSlabForm.controls;
  }

  constructor(private fb: FormBuilder, private coreService: CoreService, private Arout: ActivatedRoute, private router: Router, private toastrService: ToastrService) { }
  
  id: any;
  getRes: any;
  isTax : boolean
  isAddmoreTax = false;

  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.taxSlabForm = this.fb.group({
      // subcategory_group: new FormControl('', [Validators.required]),
      // subcategory: new FormArray([], [Validators.required]),
      slab_title: new FormControl('', [Validators.required]),
      variable_tax: new FormControl('', [Validators.required]),
      amount_tax_slabs: this.fb.array([])
    })

    this.coreService.getTaxSlabById(this.id).subscribe(res => {
      // console.log(res);
      this.getRes = res;
      // this.selectSubcat = this.getRes.subcategory.map((res: any) => res.id);
      // console.log(this.selectSubcat);
      // this.getSubcategoryBySubcatGroup(this.getRes.subcategory_group.id);

      // this.taxSlabForm.patchValue({
      //   // subcategory_group: this.getRes.subcategory_group.id,
      // })
      this.taxSlabForm.patchValue(this.getRes)
      this.isTax = this.getRes?.variable_tax
      this.taxSlabForm.setControl('amount_tax_slabs', this.udateAmount(this.getRes.amount_tax_slabs));

      if (this.isTax == true) {
        this.isAddmoreTax = true
      } else {
        this.isAddmoreTax = false
        // this.taxSlabForm.get('amount_tax_slabs').reset()
      }
    })

    this.addAmount()
    // this.getSubcateGroup()
    this.getTax();
  }

  toggle() {
    this.isTax = !this.isTax;
    if (this.isTax == true) {
      this.isAddmoreTax = true
    } else {
      this.isAddmoreTax = false
      const amountTaxSlabs = this.taxSlabForm.get('amount_tax_slabs') as FormArray;
      amountTaxSlabs.clear();
      this.addAmount()
    }
  }

  // updated data
  udateAmount(add: any): FormArray {
    let formarr = new FormArray([]);
    add.forEach((j: any) => {
      if(this.isTax == true){
        formarr.push(this.fb.group({
          from_amount: j.from_amount,
          to_amount: j.to_amount,
          tax: j.tax.id
        }))
      }else{
        const amountTaxSlabs = this.taxSlabForm.get('amount_tax_slabs') as FormArray;
        amountTaxSlabs.clear();
        formarr.push(this.fb.group({
          tax: j.tax.id
        }))
      }
     
    })
    return formarr
  }

  // udateSubcat(add: any) {
  //   add.forEach((j: any) => {
  //     subcategory: j.id
  //   })

  // }

  amount_tax_slabs(): FormGroup {
    if(this.isTax == true){
      return this.fb.group({
        from_amount: (''),
        to_amount: (''),
        tax: ('')
      });
    }else{
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
  checks = true;
  subcatbySubcatGroup: any[] = [];
  filteredSubcategory: any[] = [];
  searchTerm: string = '';
  getd: any;
  selectSubcat: any = [];
  getSubcategoryBySubcatGroup(val: any) {
    this.coreService.getSubcategoryBySubcatGroup(val).subscribe(res => {
      // console.log(res.subcategories);
      this.subcatbySubcatGroup = res.subcategories;
      this.filteredSubcategory = [...this.subcatbySubcatGroup];
      this.subcatbySubcatGroup.map((map: any) => {
        // console.log(map);
        this.selectedSubcat = this.selectSubcat.length
        this.getd = this.selectSubcat.includes(map.id)
        // console.log(this.getd);

        // console.log(this.selectSubcat.includes(map.id), 'subcategory');

        if (this.selectSubcat.includes(map.id)) {
          const formArray = this.taxSlabForm.get('subcategory') as FormArray;
          formArray.push(new FormControl(map.id));
        }
      })

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
      this.selectedSubcat++;
      this.selectedSubCategoryIds = formArray.value
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
  updateRes: any;
  loaders = false;
  submit() {
    console.log(this.taxSlabForm.value);
    // console.log(this.id);

    let form = this.taxSlabForm.value;
    if (this.taxSlabForm.valid) {
      this.loaders = true;
      this.coreService.updateTaxSlab(form, this.id).subscribe(res => {
        // console.log(res);
        this.updateRes = res;
        if (this.updateRes.success) {
          this.loaders = false;
          this.toastrService.success(this.updateRes.msg)
          this.router.navigate(['product/taxSlabList']);
        } else {
          this.loaders = false;
        }
      })
    } else {
      this.taxSlabForm.markAllAsTouched()
      // console.log('forms invalid');
    }
  }

  //dropdown auto close stop
  onLabelClick(event: Event) {
    // Prevent the event from propagating to the dropdown menu
    event.stopPropagation();
  }
}


