import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
import { StockService } from 'src/app/Services/stockService/stock.service';

@Component({
  selector: 'app-addstock-verification',
  templateUrl: './addstock-verification.component.html',
  styleUrls: ['./addstock-verification.component.scss']
})
export class AddstockVerificationComponent implements OnInit {

  constructor(private fb: FormBuilder, private toastrService: ToastrService, private inventoryService: StockService, private router: Router, private commonService: CommonServiceService) { }
  stokeVerificationForm!: FormGroup;
  get f() {
    return this.stokeVerificationForm.controls;
  }
  productControl = new FormControl('');

  filteredOptions: Observable<any[]>[] = [];
  filteredItemCode: Observable<any[]>[] = [];

  filteredSuppliers: Observable<any[]> | undefined;
  supplierControl: FormControl = new FormControl('');
  minDate: string = '';
  maxDate: string = '';

  ngOnInit(): void {
    const defaultDate = new Date().toISOString().split('T')[0];
    this.stokeVerificationForm = this.fb.group({
      voucher_no: new FormControl('', [Validators.required]),
      voucher_date: new FormControl(defaultDate, [Validators.required]),
      updater_name: new FormControl('', [Validators.required]),
      cart_item: this.fb.array([])
    });
  
    this.getPrefix();

    const financialYear = localStorage.getItem('financialYear');
    this.voucherDateValidation(financialYear);
  }

  prefixNo: any;
  getPrefix() {
    this.inventoryService.getStockVerificationPrefix().subscribe((res: any) => {
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

  voucherDateValidation(financialYear) {
    const dateControl = this.stokeVerificationForm.get('voucher_date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear);
    this.minDate = formattedMinDate;
    this.maxDate = formattedMaxDate;
  }

  cart(): FormGroup {
    return this.fb.group({
      barcode: new FormControl('', [Validators.required]),
      item_code:new FormControl('',[Validators.required]),
      item_name: new FormControl('', [Validators.required]),
      unit: new FormControl('', [Validators.required]),
      system_qty: new FormControl(0, [Validators.required]),
      physical_qty: new FormControl(0, [Validators.required]),
      discrepancy: new FormControl(0,[Validators.required]),
      reason_for_adjustment: new FormControl('',[Validators.required]),
    })
  }
  getCart(): FormArray {
    return this.stokeVerificationForm.get('cart_item') as FormArray;
  }
  isCart = false;
  addCart(i: any) {
    this.getCart().push(this.cart());
    this.isCart = false;
  }
  addCart2(cart: any) {
    this.getCart()?.push(this.cart())
  }
  removeCart(i: any) {
    this.getCart().removeAt(i);
    this.indexProduct--;
    console.log(this.indexProduct);
    if (this.stokeVerificationForm?.value?.cart_item?.length == 0) {
      this.isCart = true;
    }
  }

  get voucher_no() {
    return this.stokeVerificationForm.get('voucher_no')
  }
  get voucher_date() {
    return this.stokeVerificationForm.get('voucher_date')
  }
  get updater_name() {
    return this.stokeVerificationForm.get('updater_name')
  }
  get text_box() {
    return this.stokeVerificationForm.get('text_box');
  }
  unit(index: number) {
    return this.getCart().controls[index].get('unit');
  }
  discrepancy(index: number) {
    return this.getCart().controls[index].get('discrepancy');
  }
  reason_for_adjustment(index:number){
    return this.getCart().controls[index].get('reason_for_adjustment'); 
  }
  system_qty(index: number) {
    return this.getCart().controls[index].get('system_qty');
  }
  physical_qty(index: number) {
    return this.getCart().controls[index].get('physical_qty');
  }
  
 
  myControl = new FormControl('');
  variantList: any[] = [];

 
  isLastCart(index: number): boolean {
    const cartControls = this.getCart().controls;
    return index === cartControls.length - 1;
  }
  oncheckVariant(event: any, index: any) {
    console.log(event);
    const selectedItemId = event.id;
    const barcode = (this.stokeVerificationForm.get('cart_item') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      barcode: selectedItemId,
      item_code: event?.sku,
      item_name: event?.name,
    });
  }
  loader = false;
  submit() {
    console.log(this.stokeVerificationForm.value);
    if (this.stokeVerificationForm.valid) {
      this.loader = true;
      let formData = new FormData();
      formData.append('voucher_date', this.stokeVerificationForm.get('voucher_date')?.value);
      formData.append('voucher_no', this.stokeVerificationForm.get('voucher_no')?.value);
      formData.append('updater_name', this.stokeVerificationForm.get('updater_name')?.value);

      const cartArray = this.stokeVerificationForm.get('cart_item') as FormArray;
      const cartData: any = [];
      cartArray.controls.forEach((items) => {
        const cartGroup = items as FormGroup;
        const cartObject: any = {};
        Object.keys(cartGroup.controls).forEach((key) => {
          const control = cartGroup.controls[key];
          if (!isNaN(control.value)) {
            cartObject[key] = parseFloat(control.value);
          } else {
            cartObject[key] = control.value;
          }
        });
        cartData.push(cartObject);
      });
      formData.append('cart_item', JSON.stringify(cartData));
      this.inventoryService.addStockVerification(formData).subscribe((res: any) => {
        console.log(res);
        if (res.success) {
          this.loader = false;
          this.toastrService.success(res.msg);
          this.router.navigate(['/inventory/stock-verfication'])
          this.stokeVerificationForm.reset();
          this.ngOnInit();
        } else {
          this.loader = false;
          this.toastrService.success(res.msg)
        }
      }, err => {
        this.loader = false;
        this.toastrService.error(err.message)
      })
    } else {
      this.stokeVerificationForm.markAllAsTouched();
    }
  }

  indexProduct = 0;
  stockList: any;
  oncheckProduct(product: any) {
    console.log(product);
    this.supplierControl.reset()
    if (this.getCart().length > 0) {
      this.myControl.reset()
      this.indexProduct++;
      if (this.indexProduct > 0) {
    console.log(this.indexProduct,'index product');
    this.addCart(this.indexProduct);
    // this.inventoryService.getStock().subscribe((res: any) => {
        this.inventoryService.getStockByVariantId(product?.id).subscribe((res: any) => {
          this.stockList = res;
          const barcode = (this.stokeVerificationForm.get('cart_item') as FormArray).at(this.indexProduct) as FormGroup;
     console.log(product);
          barcode.patchValue({
            barcode: product?.id,
            item_code:product.sku,
            item_name: product?.product_title,
            system_qty: this.stockList?.available_qty,
          });
        })
      }
    } else {
      this.addCart(0);
      // this.inventoryService.getStock().subscribe((res: any) => {
      //   console.log(res);
      this.inventoryService.getStockByVariantId(product?.id).subscribe((res: any) => {
      this.stockList = res;
        const barcode = (this.stokeVerificationForm.get('cart_item') as FormArray).at(0) as FormGroup;
        barcode.patchValue({
          barcode: product?.id,
          item_code:product.sku,
          item_name: product?.product_title,
          system_qty: this.stockList?.available_qty,
        });
      })
      console.warn(this.getCart().length);
    }
    console.log(this.stokeVerificationForm.value);
  }

  calculateDifference(index: number): number {
   const item = this.getCart().at(index);
   const systemControl=item.get('system_qty');
   const physicalControl=item.get('physical_qty')
    if (systemControl && physicalControl) {
      const systemQty = systemControl.value;
      const physicalQty = physicalControl.value;
      return systemQty - physicalQty;
    }
    return 0; 
  }

  getVariant(search: any) {
      this.inventoryService.filterVariant('', '', search).subscribe((res: any) => {
        console.log(res);
        this.variantList = res;
        console.log(this.variantList);
      });
  }

 
  
}
