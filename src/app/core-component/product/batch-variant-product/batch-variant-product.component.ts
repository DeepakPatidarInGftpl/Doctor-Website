import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';


@Component({
  selector: 'app-batch-variant-product',
  templateUrl: './batch-variant-product.component.html',
  styleUrls: ['./batch-variant-product.component.scss']
})
export class BatchVariantProductComponent implements OnInit {

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
    private Arout: ActivatedRoute,
    private location:Location) {
  }
  id: number;
  vid:number;
  mrpN:number
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
    // this.vid = +this.Arout.snapshot.paramMap.get('vid');
  }

  // form submit
  addRes: any;
  loader=false;
  submit() {
    // console.log(this.batchForm.value);
    if (this.batchForm.valid) {
      this.loader=true;
      this.coreService.addBatch(this.batchForm.value,this.id).subscribe(res => {
        this.addRes = res
        if (this.addRes.Is_Sucess == "True") {
          this.loader=false;
          this.toastr.success(this.addRes.msg)
          this.batchForm.reset()
          // this.router.navigate([`//product/product-details/${this.vid}`])
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
      // console.log('forms invalid');
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
