import { Component, OnInit } from '@angular/core';

import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';

@Component({
  selector: 'app-add-debitnotes',
  templateUrl: './add-debitnotes.component.html',
  styleUrls: ['./add-debitnotes.component.scss']
})
export class AddDebitnotesComponent implements OnInit {

  searchControl = new FormControl();
  searchResults: any[] = [];

  totalQty: any;
  subTotal: any;
  discount: any;
  totalTax: any;
  roundOff: any;

  constructor(private purchaseService: PurchaseServiceService, private fb: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private contactService: ContactService,
    private coreService:CoreService
  ) {
  }

  supplierControlName = 'party';
  supplierControl = new FormControl();
  productOption: any[] = [];
  filteredOptions: Observable<any>;
  suppliers: any[] = [];
  filteredSuppliers: Observable<any[]>;

  variantControlName = 'barcode';
  variantControl = new FormControl();

  variants: any[] = [];
  filteredVariants: Observable<any[]>;

  debitNotesForm!: FormGroup;
  get f() {
    return this.debitNotesForm.controls;
  }

  subcategoryList;

  ngOnInit(): void {
    this.debitNotesForm = this.fb.group({
      party: new FormControl('', [Validators.required]),
      debit_note_date: new FormControl('', [Validators.required]),
      debit_note_no: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      refrence_bill_no: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      payment_term: new FormControl('',[Validators.required]),
      due_date: new FormControl('', [Validators.required]),
      reverse_charge: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      purchase: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      shipping_date: new FormControl('', [Validators.required]),
      export: new FormControl(''),
      reason: new FormControl('',),
      status: new FormControl(''),
      cart: this.fb.array([]),
    });
    this.getSuuplier();
    this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );
    this.filteredVariants = this.variantControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filtr(value, true))
    )
    
    this.getVariants();
    this.getPurchase();
    this.getPaymentTerms()
  }

  get supplier() {
    return this.debitNotesForm.get('party') as FormControl;
  }
 

  cart(): FormGroup {
    return this.fb.group({
      barcode: (''),
      qty: (''),
      unit_cost: (''),
      mrp: (''),
      discount:new FormControl('',[Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      tax: (''),
      landing_cost: (''),
      batch: new FormControl('',Validators.required),
      discount_type:(''),
      additional_discount:new FormControl(0,[Validators.pattern(/^[0-9]*$/)])
    })
  }
  getCart(): FormArray {
    return this.debitNotesForm.get('cart') as FormArray;
  }
  addCart() {
    this.getCart().push(this.cart())
  }
  removeCart(i: any) {
    this.getCart().removeAt(i)
  }
  supplierList: any;
  getSuuplier() {
    this.purchaseService.getSupplier().subscribe((res: any) => {
      console.log(res);
      this.suppliers = res;
    })
  }
  getVariants() {
    this.purchaseService.productVariant().subscribe((res: any) => {
      console.log(res);
      this.variants = res;
    })
  }
  purchaseList: any;
  getPurchase() {
    this.purchaseService.getPurchase().subscribe(res => {
      this.purchaseList = res;
      console.log(this.purchaseList);

    })
  }
  paymentList: any;
  getPaymentTerms() {
    this.contactService.getPaymentTerms().subscribe(res => {
      console.log(res);
      this.paymentList = res;
    })
  }
  supplierAddress:any;
  selectedAddress: string = ''
variantId:any;
  oncheck(event: any) {
    console.log(event);
    const selectedItemId = event; // Assuming the ID field is 'item_id'
    console.log(selectedItemId);
     //call detail api
   this.contactService.getSupplierById(selectedItemId).subscribe(res=>{
    console.log(res);
    this.supplierAddress=res;
    this.selectedAddress=this.supplierAddress.address[0];
    console.log(this.selectedAddress);
    
  })
    const variants = this.debitNotesForm.get('cart') as FormArray;
    variants.clear();
    this.addCart();
    this.debitNotesForm.patchValue({
      party: selectedItemId
    });
  
  }

   // address 
   openModal() {
    // Trigger Bootstrap modal using JavaScript
    const modal = document.getElementById('addressModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  }

  selectAddress(address: string) {
    this.selectedAddress = address;
    // Close Bootstrap modal using JavaScript
    const modal = document.getElementById('addressModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }
  closeModal() {
    const modal = document.getElementById('addressModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }

  oncheckVariant(event: any, index) {
    const selectedItemId = event.id;
    this.variantId=event.id
    this.getBatch()
    console.log(selectedItemId);
    const barcode = (this.debitNotesForm.get('cart') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      barcode: selectedItemId
    });
  }
  batchList:any;
  getBatch(){
    this.coreService.getBatchById(this.variantId).subscribe(res=>{
      console.log(res);
      this.batchList=res;
    })
  }
  getRes: any;
  loader = false;
  submit() {
    console.log(this.debitNotesForm.value);
    if (this.debitNotesForm.valid) {

      this.loader = true;
      let formdata: any = new FormData();
      formdata.append('party', this.debitNotesForm.get('party')?.value);
      formdata.append('debit_note_date', this.debitNotesForm.get('debit_note_date')?.value);
      formdata.append('debit_note_no', this.debitNotesForm.get('debit_note_no')?.value);
      formdata.append('refrence_bill_no', this.debitNotesForm.get('refrence_bill_no')?.value);
      formdata.append('payment_term', this.debitNotesForm.get('payment_term')?.value);
      formdata.append('due_date', this.debitNotesForm.get('due_date')?.value);
      formdata.append('reverse_charge', this.debitNotesForm.get('reverse_charge')?.value);
      formdata.append('purchase', this.debitNotesForm.get('purchase')?.value);
      formdata.append('shipping_date', this.debitNotesForm.get('shipping_date')?.value);
      formdata.append('export', this.debitNotesForm.get('export')?.value);
      formdata.append('status', this.debitNotesForm.get('status')?.value);
      formdata.append('reason', this.debitNotesForm.get('reason')?.value);

      // nested addrs data 
      const cartArray = this.debitNotesForm.get('cart') as FormArray;
      const cartData = [];
      cartArray.controls.forEach((address) => {
        const cartGroup = address as FormGroup;
        const cartObject = {};
        Object.keys(cartGroup.controls).forEach((key) => {
          const control = cartGroup.controls[key];
          cartObject[key] = control.value;
        });
        cartData.push(cartObject);
      });
      formdata.append('cart', JSON.stringify(cartData));
      this.purchaseService.addDebitNotes(formdata).subscribe(res => {
        console.log(res);
        this.getRes = res;
        if (this.getRes.Is_Success == "True") {
          this.loader = false;
          this.toastrService.success(this.getRes.msg);
          this.router.navigate(['//purchase/debit-notes-list'])
        }else{
          this.toastrService.error(this.getRes.purchase[0])
          this.loader=false
        }
      },err=>{
        this.loader=false
      })
    } else {
      this.debitNotesForm.markAllAsTouched()
    }
  }
  get debit_note_date() {
    return this.debitNotesForm.get('debit_note_date') as FormControl;
  }
  get refrence_bill_no() {
    return this.debitNotesForm.get('refrence_bill_no') as FormControl;
  }
  get payment_term() {
    return this.debitNotesForm.get('payment_term') as FormControl;
  }
  get due_date() {
    return this.debitNotesForm.get('due_date') as FormControl;
  }
  get purchase() {
    return this.debitNotesForm.get('purchase') as FormControl;
  }
  get shipping_date() {
    return this.debitNotesForm.get('shipping_date') as FormControl;
  }
  discountt(index: number) {
    return this.getCart().controls[index].get('discount');
  }
  batch(index: number) {
    return this.getCart().controls[index].get('batch');
  }
  additional_discount(index:number){
    return this.getCart().controls[index].get('additional_discount')
  }
  private _filter(value: string | number, include: boolean): any[] {
    console.log(value);
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredSuppliers = include
      ? this.suppliers.filter(supplier => supplier.name.toLowerCase().includes(filterValue))
      : this.suppliers.filter(supplier => !supplier.name.toLowerCase().includes(filterValue));
    if (!include && filteredSuppliers.length === 0) {
      console.log("No results found");
      filteredSuppliers.push({ name: "No data found" }); // Add a dummy entry for displaying "No data found"
    }
    return filteredSuppliers;
  }

  private _filtr(value: string | number, include: boolean): any[] {
    console.log(value);
    const filterValue = typeof value === 'string' ? value?.toLowerCase() : value?.toString().toLowerCase();
    const filteredVariant = include
      ? this.variants?.filter(variant => variant && (variant.product_title?.toLowerCase().includes(filterValue) ||
        variant.sku?.toLowerCase().includes(filterValue) ||
        variant.variant_name?.toLowerCase().includes(filterValue) ||
        variant.id?.toString().includes(filterValue))
      )
      : this.variants?.filter(variant =>
        variant &&
        !(variant.product_title?.toLowerCase().includes(filterValue) ||
          variant.sku?.toLowerCase().includes(filterValue) ||
          variant.variant_name?.toLowerCase().includes(filterValue) ||
          variant.id?.toString().includes(filterValue))
      );
    if (!include && (!filteredVariant || filteredVariant.length === 0)) {
      console.log("No results found");
      filteredVariant.push({ product_title: "No data found" });
    }
    return filteredVariant || [];
  }

  isLastCart(index: number): boolean {
    const cartControls = this.getCart().controls;
    return index === cartControls.length - 1;
  }
  // searchs = [] as any;
  sear: any;
  check = false;
  srchData = [];
  hideSearch() {
    this.searchs = undefined;
  }
  onOptionSelected(event: any): void {
    console.log(event);
    console.log(event.option.value);
  }
  displayFn(result: any): string {
    console.log(result);
    return result ? result.product_title : '';
  }
  barcode: any[] = [];
  v_id: any;
  variantChanged(value: any, index) {
    console.log(index);
    console.log(value?.sku);
    this.barcode[index] = value.sku;

    this.v_id = value.id;
    const barcode = (this.debitNotesForm.get('cart') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      barcode: value.id
    });
    this.searchProduct('someQuery','');
  };
  staticValue: string = 'Static Value';
  searchs: any[] = [];
  productName: any[] = [];
  isProduct = true;

  searchProduct(event: any, index: any) {
    console.log(event);
    // const searchValue = event.target.value;
    // console.log(searchValue);

    if (event) {
      this.purchaseService.searchProduct(event).subscribe((res: any) => {
        this.searchs = res;
        this.productOption = res;
        console.log(this.searchs);
        this.productName[index] = this.searchs[0].product_title;
        console.log(this.productName);
        this.check = true;
        const barcode = (this.debitNotesForm.get('cart') as FormArray).at(index) as FormGroup;
        barcode.patchValue({
          barcode: this.searchs[0].id
        });
        this.coreService.getBatchById(this.searchs[0].id).subscribe(res=>{
          console.log(res);
          this.batchList=res;
        })
      });
    } else {
      this.searchs = [];
    }
  }
  open() {
    this.isProduct = false
  }

  calculateTotalQty(): number {
    let totalQty = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const qtyControl = this.getCart().controls[i].get('qty');
      if (qtyControl) {
        totalQty += +qtyControl.value;
      }
    }
    return totalQty;
  }
  calculateTotalMrp(): number {
    let totalMrp = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const mrpControl = this.getCart().controls[i].get('mrp');
      if (mrpControl) {
        totalMrp += +mrpControl.value;
      }
    }
    return totalMrp;
  }
  calculateTotalDiscount(): number {
    let totalDiscount = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const discountControl = this.getCart().controls[i].get('discount');
      if (discountControl) {
        totalDiscount += +discountControl.value;
      }
    }
    return totalDiscount;
  }
  calculateTotalPurchase(): number {
    let totalPurchase = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const purchaseControl = this.getCart().controls[i].get('purchase_rate');
      if (purchaseControl) {
        totalPurchase += +purchaseControl.value;
      }
    }
    return totalPurchase;
  }
  calculateTotalTax(): number {
    let totalTax = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const taxControl = this.getCart().controls[i].get('tax');
      if (taxControl) {
        totalTax += +taxControl.value;
      }
    }
    return totalTax;
  }
  calculateTotalLandingCost(): number {
    let totalLandingCost = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const landingControl = this.getCart().controls[i].get('landing_cost');
      if (landingControl) {
        totalLandingCost += +landingControl.value;
      }
    }
    return totalLandingCost;
  }
  // subTotal
  calculateSubtotal(): number {
    let subtotal = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const qtyControl = this.getCart().controls[i].get('qty');
      const mrpControl = this.getCart().controls[i].get('mrp');

      if (qtyControl && mrpControl) {
        const qty = +qtyControl.value;
        const mrp = +mrpControl.value;

        const itemSubtotal = mrp * qty;
        subtotal += itemSubtotal;
      }
    }
    return subtotal;
  }
  calculateTotal(): number {
    let total = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const qtyControl = this.getCart().controls[i].get('qty');
      const mrpControl = this.getCart().controls[i].get('mrp');
      const taxControl = this.getCart().controls[i].get('tax');
      const discountControl = this.getCart().controls[i].get('discount');
      if (qtyControl && mrpControl && taxControl && discountControl) {
        const qty = +qtyControl.value;
        const mrp = +mrpControl.value;
        const tax = +taxControl.value;
        const discount = +discountControl.value;
        const subtotal = mrp * qty;
        const taxAmount = (subtotal * tax) / 100;
        const discountAmount = (subtotal * discount) / 100;

        total += subtotal + taxAmount - discountAmount;
      }
    }
    return total;
  }
  calculateTotalEveryIndex(index: number): number {
    const cartItem = this.getCart().controls[index];
    const qty = +cartItem.get('qty').value;
    const mrp = +cartItem.get('mrp').value;
    const subtotal = mrp * qty;
    const tax = subtotal * (+cartItem.get('tax').value / 100);
    const discount = subtotal * (+cartItem.get('discount').value / 100);
    const discountAmount = tax + discount;
    const total = subtotal + tax - discount;
    return total;
  }

}

