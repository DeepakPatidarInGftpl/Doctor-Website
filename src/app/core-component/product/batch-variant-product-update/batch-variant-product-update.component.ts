import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-batch-variant-product-update',
  templateUrl: './batch-variant-product-update.component.html',
  styleUrls: ['./batch-variant-product-update.component.scss']
})
export class BatchVariantProductUpdateComponent implements OnInit {

  batchForm!: FormGroup;

  get f() {
    return this.batchForm.controls;
  }

  titlee: any;
  p: number = 1
  pageSize: number = 5;
  itemsPerPage = 5;

  constructor(private coreService: CoreService, private fb: FormBuilder, private toastr: ToastrService,
     private router: Router,
     private Arout:ActivatedRoute) {
  }
  id: number;
batchRes:any;
  ngOnInit(): void {
    this.batchForm = this.fb.group({
      variant: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      mrp: new FormControl('',[Validators.required]),
      cost_price: new FormControl('', Validators.pattern(/^[0-9]*$/)),
      selling_price_online: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      selling_price_offline: new FormControl('', Validators.pattern(/^[0-9]*$/)),
      selling_price_vendor: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      selling_price_employee: new FormControl('', Validators.pattern(/^[0-9]*$/)),
      stock: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      minimum_stock_threshold: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      max_order_quantity: new FormControl('', [Validators.pattern(/^[0-9]*$/)])
    })
    this.id = +this.Arout.snapshot.paramMap.get('id');

  
    this.coreService.getBatchById(this.id).subscribe(res=>{
      this.batchRes=res;
      this.batchForm.patchValue(res)
      this.batchForm.get('variant')?.patchValue(this.id)
    })
  }

  // form submit
  addRes: any
  submit() {
    console.log(this.batchForm.value);
    if (this.batchForm.valid) {
      this.coreService.updateBatch(this.batchForm.value,this.id).subscribe(res => {
        this.addRes = res
        if (this.addRes.msg == "Batch Policy Updated Sucessfully") {
          this.toastr.success(this.addRes.msg)
          this.batchForm.reset()
          this.router.navigate([`//product/product-details/${this.batchRes.variant.product}`])
        }
      }, err => {
        console.log(err.error.gst);
      })
    } else {
      this.batchForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  get mrp() {
    return this.batchForm.get('mrp')
  }
  get cost_price() {
    return this.batchForm.get('cost_price');
  }
  get selling_price_offline() {
    return this.batchForm.get('selling_price_offline');
  }
  get selling_price_online() {
    return this.batchForm.get('selling_price_online')
  }
  get selling_price_vendor() {
    return this.batchForm.get('selling_price_vendor');
  }
  get selling_price_employee() {
    return this.batchForm.get('selling_price_employee')
  }
  get stock() {
    return this.batchForm.get('stock');
  }
  get minimum_stock_threshold() {
    return this.batchForm.get('minimum_stock_threshold');
  }
  get max_order_quantity() {
    return this.batchForm.get('max_order_quantity');
  }
  get variant() {
    return this.batchForm.get('variant')
  }

}

