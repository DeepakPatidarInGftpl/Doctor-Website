import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { SalesService } from 'src/app/Services/salesService/sales.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-add-production-voucher',
  templateUrl: './add-production-voucher.component.html',
  styleUrls: ['./add-production-voucher.component.scss']
})
export class AddProductionVoucherComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private coreService: CoreService,
    private saleService:SalesService) {
  }
  productionvoucherForm!: FormGroup;
  get f() {
    return this.productionvoucherForm.controls;
  }
  ngOnInit(): void {
    this.myControl = new FormArray([]);
    this.myControlConsumed = new FormArray([]);
    const defaultDate = new Date().toISOString().split('T')[0]; // Get yyyy-MM-dd part
    this.productionvoucherForm = this.fb.group({
      material_consumption_date: new FormControl(defaultDate,),
      material_consumption_no: new FormControl('',[Validators.required]),
      item_generated_cart: this.fb.array([]),
      item_consumed_cart: this.fb.array([]),
    });
    this.getprefix();
    this.addCartItem();
    this.addCartIConsumed();
  }

  prefixNo: any;
  getprefix() {
    this.coreService.getProductionVoucherPrefix().subscribe((res: any) => {
      console.log(res);
      if (res.success == true) {
        this.prefixNo = res.prefix
      } else {
        this.toastrService.error(res.msg)
      }
    }, err => {
      this.toastrService.error(err.error.msg)
    })
  }

 
  cartItem(): FormGroup {
    return this.fb.group({
      barcode: new FormControl('', ),
      item_name: new FormControl('', ),
      qty: new FormControl(1, ),
      mrp: new FormControl(0, ),
      cost_price: new FormControl(0, ),
      selling_price_online: new FormControl(0, ),
      selling_price_offline: new FormControl(0, ),
      selling_price_employee: new FormControl(0, ),
      selling_price_dealer: new FormControl(0, ),
      discount: new FormControl(0, ),
      additional_discount: new FormControl(0, ),
    
    })
  }
  getCartItem(): FormArray {
    return this.productionvoucherForm.get('item_generated_cart') as FormArray;
  }
  isCart=false;
  addCartItem() {
    this.getCartItem().push(this.cartItem());
    this.isCart=false;
    this.getVariant('...','','')
  }
  removeCartItem(i: any) {
    this.getCartItem().removeAt(i);
    if(this.productionvoucherForm?.value?.item_generated_cart?.length==0){
      this.isCart=true;
    }
  }

  cartConsumed(): FormGroup {
    return this.fb.group({
      barcode: new FormControl('', ),
      item_name: new FormControl('', ),
      qty: new FormControl(1, ),
      mrp: new FormControl(0, ),
      batch_id: new FormControl('' ),
    });
  }
  getCartConsumed(): FormArray {
    return this.productionvoucherForm.get('item_consumed_cart') as FormArray;
  }
  isCartConsumed=false;
  addCartIConsumed() {
    this.getCartConsumed().push(this.cartConsumed());
    this.isCartConsumed=false;
    this.getVariantConsumed('...','','')
  }
  removeCartConsumed(i: any) {
    this.getCartConsumed().removeAt(i);
    if(this.productionvoucherForm?.value?.item_consumed_cart?.length==0){
      this.isCartConsumed=true;
    }
  }
  isLastCart(index: number): boolean {
    const cartControls = this.getCartItem().controls;
    return index === cartControls.length - 1;
  }
  isLastConsumed(index: number): boolean {
    const cartControls = this.getCartConsumed().controls;
    return index === cartControls.length - 1;
  }


  myControl: FormArray;
  variantList: any[] = [];
  isSearch = false;
  searchLength: any;
  getVariant(search: any, index: any, barcode: any) {
    this.searchLength = search;
    this.isSearch = true;
    if (search.toString().length >= 3) {
        // this.coreService.searchProduct(search).subscribe((res: any) => {
       this.saleService.filterVariant('','',search).subscribe((res: any) => {
          console.log(res);
          this.isSearch = false;
          this.variantList[index] = res;
          console.log(this.variantList);
          if (barcode === 'barcode') {
            this.oncheckVariant(res[0], index);
            this.myControl.setValue(res[0].product_title)
          }
        });
      }
  }

  oncheckVariant(event: any, index) {
    const selectedItemId = event.id;
    console.log(event);
    const barcode = (this.productionvoucherForm.get('item_generated_cart') as FormArray).at(index) as FormGroup;
    if (event.batch.length > 0) {
        barcode.patchValue({
          barcode: selectedItemId,
          item_name: event?.product_title,
          qty: event.batch[0]?.stock,
          mrp: event.batch[0]?.mrp,
          cost_price:event.batch[0]?.cost_price,
          selling_price_online:event.batch[0]?.selling_price_online,
          selling_price_offline: event.batch[0]?.selling_price_offline,
          selling_price_employee:event.batch[0]?.selling_price_employee,
          selling_price_dealer: event.batch[0]?.selling_price_dealer,
          discount:0,
          additional_discount: event.batch[0]?.additional_discount,
        });
    }else{
      barcode.patchValue({
        barcode: selectedItemId,
          item_name: event?.product_title,
          qty: 1,
          mrp: 0,
          cost_price:0,
          selling_price_online:0,
          selling_price_offline: 0,
          selling_price_employee:0,
          selling_price_dealer: event.batch[0]?.selling_price_dealer,
          discount:0,
          additional_discount: event.batch[0]?.additional_discount,
      });
    }
  }
  barcode: any[] = [];
  v_id: any;
  variantChanged(value: any, index) {
    this.barcode[index] = value.sku;
    this.myControl.push(new FormControl(value?.product_title + ' ' + value?.variant_name));
  };

  // consumed cart
  myControlConsumed: FormArray;
  variantList2: any[] = [];
  isSearchConsumed = false;
  searchConsumedLength: any;
  getVariantConsumed(search: any, index: any, barcode: any) {
    this.searchConsumedLength = search;
    console.warn(this.searchConsumedLength);
    this.isSearchConsumed = true;
    if (search.toString().length >= 3) {
        // this.coreService.searchProduct(search).subscribe((res: any) => {
       this.saleService.filterVariant('','',search).subscribe((res: any) => {
          console.log(res);
          this.isSearchConsumed = false;
          this.variantList2[index] = res;
          console.log(this.variantList2);
          if (barcode === 'barcode') {
            this.oncheckVariantConsumed(res[0], index);
            this.myControlConsumed.setValue(res[0].product_title)
          }
        });
      }
  }

  selectedBatch:any[]=[];
  oncheckVariantConsumed(event: any, index) {
    const selectedItemId = event.id;
    console.log(event);
    this.selectedBatch[index]=event?.batch;
    const barcode = (this.productionvoucherForm.get('item_consumed_cart') as FormArray).at(index) as FormGroup;
    if (event.batch.length > 0) {
        barcode.patchValue({
          barcode: selectedItemId,
          item_name: event?.product_title,
          qty: event.batch[0]?.stock,
          mrp: event.batch[0]?.mrp,
          batch_id:event.batch[0]?.id,
        });
    }else{
      barcode.patchValue({
          barcode: selectedItemId,
          item_name: event?.product_title,
          qty: 1,
          mrp: 0,
          batch_id:'',
      });
    }
  }
  barcodeConsumed: any[] = [];
  variantChangedConsumed(value: any, index) {
    this.barcodeConsumed[index] = value.sku;
    this.myControlConsumed.push(new FormControl(value?.product_title + ' ' + value?.variant_name));
  };
  addRes: any;
  dateError = null;
  loaders = false;

  submit() {
    console.log(this.productionvoucherForm.value);
      if (this.productionvoucherForm.valid) {
        this.loaders = true;
        let formdata: any = new FormData();
        formdata.append('material_consumption_date', this.productionvoucherForm.get('material_consumption_date')?.value);
        formdata.append('material_consumption_no', this.productionvoucherForm.get('material_consumption_no')?.value);

        const cartArray = this.productionvoucherForm.get('item_generated_cart') as FormArray;
        const cartData = [];
        cartArray.controls.forEach((address) => {
          const cartGroup = address as FormGroup;
          const cartObject: any = {};
          Object.keys(cartGroup.controls).forEach((key) => {
            const control = cartGroup.controls[key];
            if (key === 'item_name') {
              cartObject[key] = control.value;
            } else if (!isNaN(control.value)) {
              cartObject[key] = parseFloat(control.value);
            } else {
              cartObject[key] = control.value;
            }
          });
          cartData.push(cartObject);
        });
        formdata.append('item_generated_cart', JSON.stringify(cartData));
        //consumed cart

        const cartConsumedArray = this.productionvoucherForm.get('item_consumed_cart') as FormArray;
        const cartDataConsumed = [];
        cartConsumedArray.controls.forEach((address) => {
          const cartConsumedGroup = address as FormGroup;
          const cartConsumedObject: any = {};
          Object.keys(cartConsumedGroup.controls).forEach((key) => {
            const control = cartConsumedGroup.controls[key];
            if (key === 'item_name') {
              cartConsumedObject[key] = control.value;
            } else if (!isNaN(control.value)) {
              cartConsumedObject[key] = parseFloat(control.value);
            } else {
              cartConsumedObject[key] = control.value;
            }
          });
          cartDataConsumed.push(cartConsumedObject);
        });
        formdata.append('item_consumed_cart', JSON.stringify(cartDataConsumed));
        this.coreService.addProductionVoucher(formdata).subscribe(res => {
          this.loaders = false;
          this.addRes = res
          if (this.addRes.isSuccess) {
            this.toastrService.success(this.addRes.msg)
            this.productionvoucherForm.reset()
            this.router.navigate(['//product/production-voucher-list'])
          } else {
            this.loaders = false;
            this.toastrService.error(this.addRes.msg)
          }
        }, err => {
          this.loaders = false;
          console.warn(err);
        })
      } else {
        this.productionvoucherForm.markAllAsTouched()
        this.toastrService.error('Please Fill All The Required Fields')
      }
    
  }
  get material_consumption_date() {
    return this.productionvoucherForm.get('material_consumption_date')
  }
  get material_consumption_no() {
    return this.productionvoucherForm.get('material_consumption_no')
  }
 

  //calculation
  calculateTotalQty(): any {
    let totalQty = 0;
    for (let i = 0; i < this.getCartItem().controls.length; i++) {
      const qtyControl = this.getCartItem().controls[i].get('qty') || 0;
      if (qtyControl) {
        totalQty += +qtyControl.value || 0;
      }
    }
    return totalQty;
  }
  calculateTotalMrp(): any {
    let totalMRP = 0;
    for (let i = 0; i < this.getCartItem().controls.length; i++) {
      const mrpControl = this.getCartItem().controls[i].get('mrp') || 0;
      if (mrpControl) {
        totalMRP += +mrpControl.value || 0;
      }
    }
    return totalMRP;
  }
  calculateTotalCostPrice(): any {
    let totalCostPrice = 0;
    for (let i = 0; i < this.getCartItem().controls.length; i++) {
      const costPriceControl = this.getCartItem().controls[i].get('cost_price') || 0;
      if (costPriceControl) {
        totalCostPrice += +costPriceControl.value || 0;
      }
    }
    return totalCostPrice;
  }
  calculateTotalOnline(): any {
    let totalOnline = 0;
    for (let i = 0; i < this.getCartItem().controls.length; i++) {
      const OnlineControl = this.getCartItem().controls[i].get('selling_price_online') || 0;
      if (OnlineControl) {
        totalOnline += +OnlineControl.value || 0;
      }
    }
    return totalOnline;
  }
  calculateTotalOffline(): any {
    let totalOffline = 0;
    for (let i = 0; i < this.getCartItem().controls.length; i++) {
      const offlineControl = this.getCartItem().controls[i].get('selling_price_offline') || 0;
      if (offlineControl) {
        totalOffline += +offlineControl.value || 0;
      }
    }
    return totalOffline;
  }
  calculateTotalEmployee(): any {
    let totalEmployee = 0;
    for (let i = 0; i < this.getCartItem().controls.length; i++) {
      const employeeControl = this.getCartItem().controls[i].get('selling_price_employee') || 0;
      if (employeeControl) {
        totalEmployee += +employeeControl.value || 0;
      }
    }
    return totalEmployee;
  }
  calculateTotalDealer(): any {
    let totalDealer = 0;
    for (let i = 0; i < this.getCartItem().controls.length; i++) {
      const dealerControl = this.getCartItem().controls[i].get('selling_price_dealer') || 0;
      if (dealerControl) {
        totalDealer += +dealerControl.value || 0;
      }
    }
    return totalDealer;
  }
  calculateTotalDiscount(): any {
    let totalDiscount = 0;
    for (let i = 0; i < this.getCartItem().controls.length; i++) {
      const discountControl = this.getCartItem().controls[i].get('discount') || 0;
      if (discountControl) {
        totalDiscount += +discountControl.value || 0;
      }
    }
    return totalDiscount;
  }
  calculateTotalAdditionalDiscount(): any {
    let totalAdditionalDiscount = 0;
    for (let i = 0; i < this.getCartItem().controls.length; i++) {
      const addDiscountControl = this.getCartItem().controls[i].get('additional_discount') || 0;
      if (addDiscountControl) {
        totalAdditionalDiscount += +addDiscountControl.value || 0;
      }
    }
    return totalAdditionalDiscount;
  }

  // consumed
  totalQtyConsumed(): any {
    let totalQty = 0;
    for (let i = 0; i < this.getCartConsumed().controls.length; i++) {
      const qtyControl = this.getCartConsumed().controls[i].get('qty') || 0;
      if (qtyControl) {
        totalQty += +qtyControl.value || 0;
      }
    }
    return totalQty;
  }
  totalMrpConsumed(): any {
    let totalMRP = 0;
    for (let i = 0; i < this.getCartConsumed().controls.length; i++) {
      const mrpControl = this.getCartConsumed().controls[i].get('mrp') || 0;
      if (mrpControl) {
        totalMRP += +mrpControl.value || 0;
      }
    }
    return totalMRP;
  }
  
}

