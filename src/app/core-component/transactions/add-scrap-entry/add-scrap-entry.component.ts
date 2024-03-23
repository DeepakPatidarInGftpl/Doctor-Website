import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { SalesService } from 'src/app/Services/salesService/sales.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-add-scrap-entry',
  templateUrl: './add-scrap-entry.component.html',
  styleUrls: ['./add-scrap-entry.component.scss']
})
export class AddScrapEntryComponent implements OnInit {

  constructor(private fb: FormBuilder, private saleService:SalesService,
    private coreService:CoreService, private toastrService: ToastrService, private purchaseService: PurchaseServiceService, private transactionService: TransactionService,private router:Router) { }
  scrapEntryForm!: FormGroup;
  get f() {
    return this.scrapEntryForm.controls;
  }
  productControl = new FormControl('');

  filteredOptions: Observable<any[]>[] = [];
  filteredItemCode: Observable<any[]>[] = [];
  ngOnInit(): void {
    const defaultDate = new Date().toLocaleString('en-CA', { timeZone: 'America/Vancouver' }).split(',')[0];
    this.scrapEntryForm = this.fb.group({
      voucher_no: new FormControl('',[Validators.required]),
      date: new FormControl(defaultDate,[Validators.required]),
      updater_name: new FormControl('',[Validators.required]),
      cart_item: this.fb.array([])
    });
    this.addCart(0);
    this.getProduct();
    this.getPrefix();
    this.ManageNameControl(0);
    this.ManageItemCodeControl(0);
  }

  prefixNo: any;
  getPrefix() {
    this.transactionService.getScrapEntryVoucherPrefix().subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        this.prefixNo = res.prefix
      } else {
        this.toastrService.error(res.msg)
      }
    }, err => {
      this.toastrService.error(err.error.msg)
    })
  }

  cart(): FormGroup {
    return this.fb.group({
      barcode: new FormControl('',[Validators.required]),
      item_code: new FormControl('',[Validators.required]),
      item_name: new FormControl('',[Validators.required]),
      unit: new FormControl('',[Validators.required]),
      qty: new FormControl(1,[Validators.required]),
      reason: new FormControl('')
    })
  }
  getCart(): FormArray {
    return this.scrapEntryForm.get('cart_item') as FormArray;
  }
  isCart = false;
  addCart(i:any) {
    this.getCart().push(this.cart());
    if (this.scrapEntryForm?.value?.cart_item?.length >0) {
      this.ManageNameControl(i);
      this.ManageItemCodeControl(i);
    }
    this.isCart = false;
  }
  addCart2(cart:any) {
    const itemsArrayLength = (this.scrapEntryForm?.get('cart_item') as FormArray);
    this.getCart()?.push(this.cart())
    this.ManageNameControl(itemsArrayLength?.length - 1);
    this.ManageItemCodeControl(itemsArrayLength?.length - 1);
  }
  removeCart(i: any) {
    this.getCart().removeAt(i);
    if (this.scrapEntryForm?.value?.cart_item?.length == 0) {
      this.isCart = true;
    }
  }

  get voucher_no() {
    return this.scrapEntryForm.get('voucher_no')
  }
  get date() {
    return this.scrapEntryForm.get('date')
  }
  get updater_name() {
    return this.scrapEntryForm.get('updater_name')
  }

  unit(index: number) {
  return this.getCart().controls[index].get('unit');
  }
  qty(index: number) {
    return this.getCart().controls[index].get('qty');
  }
  item_name(index: number) {
    return this.getCart().controls[index].get('item_name');
  }
  item_code(index: number) {
    return this.getCart().controls[index].get('item_code');
  }
  productList: any[] = [];
  isSearch = false;
  getProduct() {
    this.coreService.getProducts().subscribe((res: any) => {
      console.log(res, 'user');
      this.productList = res;
    })
  }

  ManageNameControl(index: number) {
    console.log('index', index)
    var arrayControl:any = this.scrapEntryForm?.get('cart_item') as FormArray;
    this.filteredOptions[index] = arrayControl.at(index)?.get('item_name')?.valueChanges
      .pipe(startWith(''), map((title:any) => this._filter5(title)) );
  }

  private _filter5(title: any) {
    const filterValue = title?.toLowerCase();
    return this.productList?.filter((option:any) => option?.title?.toLowerCase().indexOf(filterValue) === 0);
  }

   // item code
   ManageItemCodeControl(index: number) {
    console.log('index', index)
    var arrayControl: any = this.scrapEntryForm?.get('cart_item') as FormArray;
    console.log(arrayControl,'arrayControl');
    this.filteredItemCode[index] = arrayControl.at(index)?.get('item_code')?.valueChanges
      .pipe(startWith(''), map((item_code: any) => this._filter6(item_code)));
      console.log(this.filteredItemCode);    
  }
  private _filter6(item_code: any) {
    const filterValue = item_code?.toLowerCase();
    return this.productList?.filter((option: any) => option?.item_code?.toLowerCase().indexOf(filterValue) === 0);
  }

  isLastCart(index: number): boolean {
    const cartControls = this.getCart().controls;
    return index === cartControls.length - 1;
  }
  oncheckVariant(event: any, index: any) {
    console.log(event);
    const selectedItemId = event.id;
    this.barcode[index] = event.sku;
    const barcode = (this.scrapEntryForm.get('cart_item') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      barcode: selectedItemId,
      item_code:event?.sku,
      item_name:event?.product_title,
      unit:event?.product?.unit?.title
    });
  }
  loader=false;
  submit() {
    console.log(this.scrapEntryForm.value); 
    if(this.scrapEntryForm.valid){
      this.loader=true;
      let formData =new FormData();
      formData.append('date',this.scrapEntryForm.get('date')?.value);
      formData.append('voucher_no',this.scrapEntryForm.get('voucher_no')?.value);
      formData.append('updater_name',this.scrapEntryForm.get('updater_name')?.value);

      const cartArray = this.scrapEntryForm.get('cart_item') as FormArray;
      const cartData:any = [];
      cartArray.controls.forEach((items) => {
        const cartGroup = items as FormGroup;
        const cartObject:any = {};
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
      this.transactionService.addScrapEntry(formData).subscribe((res: any) => {
        console.log(res);
        if(res.success){
          this.loader=false;
          this.toastrService.success(res.msg);
          this.router.navigate(['/transaction/scarp-entry-list'])
        }else{
          this.loader=false;
          this.toastrService.error(res.msg)
        }
      },err=>{
        this.loader=false;
        this.toastrService.error(err.message)
      })
    }else{
      this.scrapEntryForm.markAllAsTouched();
      this.toastrService.error('Please Submit Required Field')
    }
  }
  variantList:any[]=[];
  myControl = new FormControl('');
  barcode: any[] = [];
  getVariant(search:any){
    this.saleService.filterVariant('', '', search).subscribe((res: any) => {
      console.log(res);
      this.isSearch=false;
      this.variantList = res;
      console.log(this.variantList);
      this.myControl.setValue(res[0].product_title)

    });
  }

  
}
