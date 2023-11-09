import { Location } from '@angular/common';
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
  mrpN:number;
  constructor(private coreService: CoreService, private fb: FormBuilder, private toastr: ToastrService,
     private router: Router,
     private Arout:ActivatedRoute,
     private location:Location) {
  }
  id: number;
batchRes:any;
  ngOnInit(): void {
    this.batchForm = this.fb.group({
      // variant: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      mrp: new FormControl('', [Validators.required]),
      cost_price: new FormControl(0,Validators.pattern(/^[0-9]*$/)),
      selling_price_online: new FormControl(0, [Validators.pattern(/^[0-9]*$/)]),
      selling_price_offline: new FormControl(0, Validators.pattern(/^[0-9]*$/)),
      selling_price_dealer: new FormControl(0, [Validators.pattern(/^[0-9]*$/)]),
      selling_price_employee: new FormControl(0, Validators.pattern(/^[0-9]*$/)),
      stock: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      opening_stock:new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      minimum_stock_threshold: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      max_order_quantity: new FormControl(0, [Validators.pattern(/^[0-9]*$/)]),
      discount:new FormControl('',[Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      additional_discount:new FormControl('',[Validators.pattern(/^(100|[0-9]{1,2})$/)])
    })
    this.id = +this.Arout.snapshot.paramMap.get('id');

    this.coreService.getBatchById(this?.id).subscribe(res=>{
      this.batchRes=res;
      this.batchForm.patchValue(res)
      this.batchForm.get('variant')?.patchValue(this.id)
    })
  }

  // form submit
  addRes: any;
  loader=false;
  submit() {
    // console.log(this.batchForm.value);
    if (this.batchForm.valid) {
      this.loader=true;
      this.coreService.updateBatch(this.batchForm.value,this.id).subscribe(res => {
        this.addRes = res
        if (this.addRes.success) {
          this.loader=false;
          this.toastr.success(this.addRes.msg)
          this.batchForm.reset()
          // this.router.navigate([`//product/product-details/${this.batchRes.variant.product}`])
          this.location.back();
        }else{
          this.loader=false;
        }
      }, err => {
        this.loader=false;
        // console.log(err.error);
      })
    } else {
      this.batchForm.markAllAsTouched()
      this.toastr.error('Please Fill All The Required Fields')
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
    return this.batchForm.get('selling_price_dealer');
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
  get opening_stock(){
    return this.batchForm.get('opening_stock')
  }
  get discount(){
    return this.batchForm.get('discount')
  }
  get additional_discount(){
    return this.batchForm.get('additional_discount')
  }
}

