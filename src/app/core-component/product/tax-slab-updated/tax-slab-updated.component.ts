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

  constructor(private fb: FormBuilder, private coreService: CoreService, private Arout: ActivatedRoute,
    private router:Router,
    private toastrService: ToastrService) { }
  id: any;
  getRes: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.taxSlabForm = this.fb.group({
      subcategory_group: new FormControl('', [Validators.required]),
      // subcategory: new FormControl('', [Validators.required]),
      subcategory: new FormArray([], [Validators.required]),
      amount_tax_slabs: this.fb.array([])
    })

    this.coreService.getTaxSlabById(this.id).subscribe(res => {
      console.log(res);
      this.getRes = res;
      this.selectSubcat = this.getRes.subcategory.map((res: any) => res.id);
      console.log(this.selectSubcat);
      this.getSubcategoryBySubcatGroup(this.getRes.subcategory_group.id);

      this.taxSlabForm.patchValue({
        subcategory_group: this.getRes.subcategory_group.id,
        // subcategory:this.getRes.subcategory[0].id
      })

      this.taxSlabForm.setControl('amount_tax_slabs', this.udateAmount(this.getRes.amount_tax_slabs));
    })

    this.addAmount()
    this.getSubcateGroup()
    this.getTax();
  
  }

  // updated data
  udateAmount(add: any): FormArray {
    let formarr = new FormArray([]);
    add.forEach((j: any) => {
      formarr.push(this.fb.group({
        from_amount: j.from_amount,
        to_amount: j.to_amount,
        tax: j.tax
      }))
    })
    return formarr
  }

  udateSubcat(add: any) {
 
    add.forEach((j: any) => {
      console.log(j);
        subcategory:j.id
    })
  
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
  checks = true;
  subcatbySubcatGroup: any;
  getd: any;
  selectSubcat: any = [];
  getSubcategoryBySubcatGroup(val: any) {
    this.coreService.getSubcategoryBySubcatGroup(val).subscribe(res => {
      console.log(res.subcategories);
      this.subcatbySubcatGroup = res.subcategories;

      this.subcatbySubcatGroup.map((map: any) => {
        console.log(map);
        this.getd = this.selectSubcat.includes(map.id)
        console.log(this.getd);

        console.log(this.selectSubcat.includes(map.id), 'subcategory');

        if (this.selectSubcat.includes(map.id)) {
          const formArray = this.taxSlabForm.get('subcategory') as FormArray;
          formArray.push(new FormControl(map.id));
        }
      })

    })
  }

  check: any
  selectedSubcat = 0;
  onCheckChange(event: any) {
    const formArray: any = this.taxSlabForm.get('subcategory') as FormArray;

    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(parseInt(event.target.value)));
      // parseInt(formArray.push(new FormControl(event.target.value)))
      this.check = formArray
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
  updateRes: any;
  loaders=false;
  submit() {
    console.log(this.taxSlabForm.value);
    let form = this.taxSlabForm.value;
    if (this.taxSlabForm.valid) {
      this.loaders=true;
      this.coreService.updateTaxSlab(this.id, form).subscribe(res => {
        console.log(res);
        this.updateRes = res;
        if(this.updateRes.msg=="Tax Slabs Updated"){
          this.loaders=false;
          this.toastrService.success(this.updateRes.msg)
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


