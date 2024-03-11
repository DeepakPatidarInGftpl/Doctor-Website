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
  variantId:number;
batchRes:any;
  ngOnInit(): void {
    this.batchForm = this.fb.group({
      // variant: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      mrp: new FormControl('', [Validators.required]),
      cost_price: new FormControl(0,),
      selling_price_online: new FormControl(0, ),
      selling_price_offline: new FormControl(0, ),
      selling_price_dealer: new FormControl(0, ),
      selling_price_employee: new FormControl(0, ),
      stock: new FormControl('', [Validators.required, ]),
      opening_stock:new FormControl('', [Validators.required, ]),
      minimum_stock_threshold: new FormControl('', [Validators.required, ]),
      max_order_quantity: new FormControl(0, ),
      discount:new FormControl('',[Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      additional_discount:new FormControl('',[Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      // employee_incentive:new FormControl(0,[Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      // employee_incentive_type:('%')
    })
    this.id = +this.Arout.snapshot.paramMap.get('id');
    this.variantId = +this.Arout.snapshot.paramMap.get('v_id');
    this.coreService.getBatchById(this?.id).subscribe(res=>{
      this.batchRes=res;
      this.batchForm.patchValue(res)
      this.batchForm.get('variant')?.patchValue(this.id)
    })
  }
  backLoc(){
    this.location.back()
  }
  brandList: any;
  getBrand() {
    this.coreService.getVariantBrandById(this.id).subscribe((res: any) => {
      console.log(res);
      this.brandList = res?.product?.brand;
      console.log(this.brandList);
      if (this.brandList?.markup_percentage_employee > 0) {
        let cost_price = this.batchForm.value?.cost_price;
        let percentage = cost_price * this.brandList?.markup_percentage_employee / 100;
        let price = cost_price + percentage;
        this.batchForm.get('selling_price_employee')?.patchValue(price);
        this.checkMrpSelling();
        this.checkCostSelling();
        this.checkEmployee();
      }
      if (this.brandList?.markup_percentage_online > 0) {
        let cost_price = this.batchForm.value?.cost_price;
        let percentage = cost_price * this.brandList?.markup_percentage_online / 100;
        let price = cost_price + percentage;
        this.batchForm.get('selling_price_online')?.patchValue(price);
        this.checkMrpSelling();
        this.checkCostSelling();
        this.checkOnline();
      }
      if (this.brandList?.markup_percentage_customer > 0) {
        let cost_price = this.batchForm.value?.cost_price;
        let percentage = cost_price * this.brandList?.markup_percentage_customer / 100;
        let price = cost_price + percentage;
        this.batchForm.get('selling_price_offline')?.patchValue(price);
        this.checkMrpSelling();
        this.checkCostSelling();
        this.checkOffline();
      }
      if (this.brandList?.markup_percentage_wholesale > 0) {
        let cost_price = this.batchForm.value?.cost_price;
        let percentage = cost_price * this.brandList?.markup_percentage_wholesale / 100;
        let price = cost_price + percentage;
        this.batchForm.get('selling_price_dealer')?.patchValue(price);
        this.checkMrpSelling();
        this.checkCostSelling();
        this.checkDealer();
      }
      // this.batchForm.get('selling_price_online')?.patchValue(this.brandList?.markup_percentage_online);
      // this.batchForm.get('selling_price_offline')?.patchValue(this.brandList?.markup_percentage_customer);
      // this.batchForm.get('selling_price_dealer')?.patchValue(this.brandList?.markup_percentage_wholesale);
    })
  }
  errorCost: any;
  checkCost() {
    let mrp = this.batchForm.value?.mrp;
    let cost_price = this.batchForm.value?.cost_price;
    console.log(this.batchForm.value);
    if (cost_price < mrp) {
      this.errorCost = '';
      this.getBrand();
      this.batchForm.get('selling_price_employee')?.patchValue(cost_price);
      this.batchForm.get('selling_price_online')?.patchValue(cost_price);
      this.batchForm.get('selling_price_offline')?.patchValue(cost_price);
      this.batchForm.get('selling_price_dealer')?.patchValue(cost_price);
   
    } else {
      // this.toastr.error('Cost Price Should Be Less Than MRP')
      this.errorCost = 'Cost Price Should Be Less Than MRP';
    }
  }
  errorMrp: any;
  checkMrpSelling() {
    let selling_price_offline = this.batchForm.value?.selling_price_offline;
    let selling_price_online = this.batchForm.value?.selling_price_online;
    let selling_price_dealer = this.batchForm.value?.selling_price_dealer;
    let selling_price_employee = this.batchForm.value?.selling_price_employee;
    let mrp = this.batchForm.value?.mrp;
    let cost_price = this.batchForm.value?.cost_price;
    console.log(this.batchForm.value);
    if (
      selling_price_offline <= mrp &&
      selling_price_online <= mrp &&
      selling_price_dealer <= mrp &&
      selling_price_employee <= mrp
    ) {
      this.errorMrp = '';
      console.log(
        selling_price_offline <= mrp &&
        selling_price_online <= mrp &&
        selling_price_dealer <= mrp &&
        selling_price_employee <= mrp);
      
    } else {
      // this.errorMrp = 'Selling Price Should Be Grater Than Cost Price And Less Than Equal To MRP'
      this.errorMrp = 'Selling Price Should Be Less Than Equal To MRP'
    }
  }
  errorCostSell:any;
  checkCostSelling() {
    let selling_price_offline = this.batchForm.value?.selling_price_offline;
    let selling_price_online = this.batchForm.value?.selling_price_online;
    let selling_price_dealer = this.batchForm.value?.selling_price_dealer;
    let selling_price_employee = this.batchForm.value?.selling_price_employee;
    let mrp = this.batchForm.value?.mrp;
    let cost_price = this.batchForm.value?.cost_price;
    console.log(this.batchForm.value);
    if (
      selling_price_offline > cost_price &&
      selling_price_online > cost_price &&
      selling_price_dealer > cost_price &&
      selling_price_employee > cost_price
    ) {
      this.errorCostSell = '';
      console.log(selling_price_offline > cost_price &&
        selling_price_online > cost_price &&
        selling_price_dealer > cost_price &&
        selling_price_employee > cost_price);
      
    } else {
      this.errorCostSell = 'Selling Price Should Be Grater Than Cost Price'
    }
  }

  errorOnline: any;
  errorOnlineMrp:any;
  checkOnline() {
    let selling_price_online = this.batchForm.value?.selling_price_online;
    let mrp = this.batchForm.value?.mrp;
    let cost_price = this.batchForm.value?.cost_price;
    console.log(this.batchForm.value);
    if (selling_price_online <= mrp) {
      this.errorOnlineMrp = '';
      console.log(selling_price_online <= mrp)   
    } else {
      console.log(selling_price_online <= mrp)   
      this.errorOnlineMrp = 'Selling Price Online Should Be Less Than Equal To MRP'
    }
    if (selling_price_online > cost_price) {
      this.errorOnline = '';
      console.log(selling_price_online > cost_price)   
    } else {
      this.errorOnline = 'Selling Price Online Should Be Greater Than Cost Price'
       
    }
  }
  errorOffline: any;
  errorOfflineMrp:any;
  checkOffline() {
    let selling_price_offline = this.batchForm.value?.selling_price_offline;
    let mrp = this.batchForm.value?.mrp;
    let cost_price = this.batchForm.value?.cost_price;
    console.log(this.batchForm.value);
    if (selling_price_offline <= mrp) {
      this.errorOfflineMrp = '';
      console.log(selling_price_offline <= mrp)   
    } else {
      console.log(selling_price_offline <= mrp)  
      this.errorOfflineMrp = 'Selling Price Offline Should Be Less Than Equal To MRP'
    }
    if (selling_price_offline > cost_price) {
      this.errorOffline = '';
      console.log(selling_price_offline > cost_price)   
    } else {
      this.errorOffline = 'Selling Price Offline Should Be Greater Than Cost Price'
       
    }
  }
  errorDealer: any;
  errorDealerMrp:any;
  checkDealer() {
    let selling_price_dealer = this.batchForm.value?.selling_price_dealer;
    let mrp = this.batchForm.value?.mrp;
    let cost_price = this.batchForm.value?.cost_price;
    console.log(this.batchForm.value);
    if (selling_price_dealer <= mrp) {
      this.errorDealerMrp = '';
      console.log(selling_price_dealer <= mrp)   
    } else {
      console.log(selling_price_dealer <= mrp) 
      this.errorDealerMrp = 'Selling Price Dealer Should Be Less Than Equal To MRP'
    }
    if (selling_price_dealer > cost_price) {
      this.errorDealer = '';
      console.log(selling_price_dealer > cost_price)   
    } else {
      this.errorDealer = 'Selling Price Dealer Should Be Greater Than Cost Price'
       
    }
  }
  errorEmployee: any;
  errorEmployeeMrp: any;
  checkEmployee() {
    let selling_price_employee = this.batchForm.value?.selling_price_employee;
    let mrp = this.batchForm.value?.mrp;
    let cost_price = this.batchForm.value?.cost_price;
    console.log(this.batchForm.value);
    if (selling_price_employee <= mrp) {
      this.errorEmployeeMrp = '';
      console.log(selling_price_employee <= mrp)   
    } else {
      console.log(selling_price_employee <= mrp)  
      this.errorEmployeeMrp = 'Selling Price Employee Should Be Less Than Equal To MRP'
    }
    if (selling_price_employee > cost_price) {
      this.errorEmployee = '';
      console.log(selling_price_employee > cost_price)   
    } else {
      this.errorEmployee = 'Selling Price Employee Should Be Greater Than Cost Price'
       
    }
  }
  // form submit
  addRes: any;
  loader=false;
  submit() {
    // console.log(this.batchForm.value);
    if (this.batchForm.valid) {
      let selling_price_offline = this.batchForm.value?.selling_price_offline;
      let selling_price_online = this.batchForm.value?.selling_price_online;
      let selling_price_dealer = this.batchForm.value?.selling_price_dealer;
      let selling_price_employee = this.batchForm.value?.selling_price_employee;
      let mrp = this.batchForm.value?.mrp;
      let cost_price = this.batchForm.value?.cost_price;
      if (cost_price < mrp) {
        this.errorCost = '';
        if (
          selling_price_offline > cost_price &&
          selling_price_online > cost_price &&
          selling_price_dealer > cost_price &&
          selling_price_employee > cost_price &&
          selling_price_offline <= mrp &&
          selling_price_online <= mrp &&
          selling_price_dealer <= mrp &&
          selling_price_employee <= mrp
        ) {
          this.errorMrp='';
      this.loader=true;
      let formData= new FormData();
      formData.append('mrp',this.batchForm.get('mrp')?.value);
      formData.append('cost_price',this.batchForm.get('cost_price')?.value);
      formData.append('selling_price_online',this.batchForm.get('selling_price_online')?.value);
      formData.append('selling_price_offline',this.batchForm.get('selling_price_offline')?.value);
      formData.append('selling_price_dealer',this.batchForm.get('selling_price_dealer')?.value);
      formData.append('selling_price_employee',this.batchForm.get('selling_price_employee')?.value);
      formData.append('stock',this.batchForm.get('stock')?.value);
      formData.append('opening_stock',this.batchForm.get('opening_stock')?.value);
      formData.append('minimum_stock_threshold',this.batchForm.get('minimum_stock_threshold')?.value);
      formData.append('max_order_quantity',this.batchForm.get('max_order_quantity')?.value);
      formData.append('discount',this.batchForm.get('discount')?.value);
      formData.append('additional_discount',this.batchForm.get('additional_discount')?.value);
      
      this.coreService.updateBatch(formData,this.id).subscribe(res => {
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
      })} else {
        this.toastr.error('Selling Price Should Be Grater Than Cost Price And Less Than Equal To MRP')
      }
    } else {
      // this.toastr.error('Cost Price Should Be Less Than MRP')
      this.errorCost = 'Cost Price Should Be Less Than MRP';
    }
  }else {
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
  get employee_incentive(){
    return this.batchForm.get('employee_incentive')
  }
  get employee_incentive_type(){
    return this.batchForm.get('employee_incentive_type')
  }
}

