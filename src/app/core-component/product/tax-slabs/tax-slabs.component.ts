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
  get f() {
    return this.taxSlabForm.controls;
  }


  constructor(private fb: FormBuilder, private coreService: CoreService,
    private router :Router,
     private toastrService: ToastrService) { }


  ngOnInit(): void {
    this.taxSlabForm = this.fb.group({
      subcategory_group: new FormControl('', [Validators.required]),
      // subcategory: new FormControl('', [Validators.required]),
      subcategory: new FormArray([], [Validators.required]),
      amount_tax_slabs: this.fb.array([])
    })
    this.addAmount()
    this.getSubcateGroup()
    this.getTax();
  }

  amount_tax_slabs(): FormGroup {
    return this.fb.group({
      from_amount: (''),
      to_amount: (''),
      tax: ('')
    });

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

  get subcategory_group() {
    return this.taxSlabForm.get('subcategory_group')
  }
  get subcategory() {
    return this.taxSlabForm.get('subcategory')
  }
  get tax() {
    return this.taxSlabForm.get('tax')
  }

  subcatGroupList: any
  getSubcateGroup() {
    this.coreService.getSubcategoryGroup().subscribe(res => {
      console.log(res);
      this.subcatGroupList = res
    })
  }

  taxList: any;
  getTax() {
    this.coreService.gettaxd().subscribe(res => {
      console.log(res);
      this.taxList = res
      console.log(this.taxList);

    })
  }

  subcatbySubcatGroup: any[] = []; 
  filteredSubcategory: any[] = [];
  searchTerm: string = '';
  selectSubcat: any = [];
  getSubcategoryBySubcatGroup(val: any) {
    this.coreService.getSubcategoryBySubcatGroup(val).subscribe(res => {
      console.log(res.subcategories);
      this.subcatbySubcatGroup = res.subcategories;
      this.filteredSubcategory = [...this.subcatbySubcatGroup];
      setTimeout(() => {
        this.subcatbySubcatGroup.map((map: any) => {
          console.log(this.selectSubcat.includes(map.id), 'subcategory');
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
      this.selectedSubCategoryIds=formArray.value
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
  loaders=false;
  submit() {
    console.log(this.taxSlabForm.value);
    if (this.taxSlabForm.valid) {
      this.loaders=true;
      this.coreService.addTaxSlab(this.taxSlabForm.value).subscribe(res => {
        console.log(res);
        this.addRes = res;
        if(this.addRes.msg == "Tax Slabs Created") {
          this.loaders=false;
          this.toastrService.success(this.addRes.msg);
          this.router.navigate(['product/taxSlabList']);
        }
      })
    } else {
      this.taxSlabForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }
  //dropdown auto close stop
  onLabelClick(event: Event) {
    // Prevent the event from propagating to the dropdown menu
    event.stopPropagation();
  }
}
