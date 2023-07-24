import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';

@Component({
  selector: 'app-addpurchase-bill',
  templateUrl: './addpurchase-bill.component.html',
  styleUrls: ['./addpurchase-bill.component.scss']
})
export class AddpurchaseBillComponent implements OnInit {


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
    private contactService: ContactService) {
  }

  supplierControlName = 'supplier';
  supplierControl = new FormControl();
  productOption: any[] = [];
  filteredOptions: Observable<any>;
  suppliers: any[] = [];
  filteredSuppliers: Observable<any[]>;

  variantControlName = 'barcode';
  variantControl = new FormControl();

  variants: any[] = [];
  filteredVariants: Observable<any[]>;

  purchaseBillForm!: FormGroup;
  get f() {
    return this.purchaseBillForm.controls;
  }

  subcategoryList;

  ngOnInit(): void {
    this.purchaseBillForm = this.fb.group({
      supplier: new FormControl('', [Validators.required]),
      supplier_bill_date: new FormControl('', [Validators.required]),
      refrence_bill_no: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      supplier_bill_no: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      material_inward_no: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      payment_term: new FormControl(''),
      due_date: new FormControl('', [Validators.required]),
      reverse_charge: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),

      shipping_date: new FormControl('', [Validators.required]),
      export: new FormControl('',[Validators.required]),

      selling_price_online: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      selling_price_offline: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      dealer_price: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),

      employee_price: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      status: new FormControl(''),

      purchase_bill: this.fb.array([]),
      // total_tax: new FormControl('', ),
      // total_discount: new FormControl('', ),
      // sub_total: new FormControl('', ),
      // round_off: new FormControl('', ),
      // total: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      note: new FormControl(''),
    });
    this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );
    this.filteredVariants = this.variantControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filtr(value, true))
    )
    this.getSuuplier();
    this.getVariants();
    this.getPurchase();
    this.getMaterialInward();
    this.getPaymentTerms()
  }

  get supplier() {
    return this.purchaseBillForm.get('supplier') as FormControl;
  }
  purchase_bill(): FormGroup {
    return this.fb.group({
      barcode: (''),
      qty: (''),
      unit_cost: (''),
      mrp: (''),
      discount: (''),
      tax: (''),
      landing_cost: (''),
      // total: ('')
    })
  }
  getCart(): FormArray {
    return this.purchaseBillForm.get('purchase_bill') as FormArray;
  }
  addCart() {
    this.getCart().push(this.purchase_bill())
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
  materialList: any;
  getMaterialInward() {
    this.purchaseService.getMaterial().subscribe(res => {
      console.log(res);
      this.materialList = res;
    })
  }
  paymentList: any;
  getPaymentTerms() {
    this.contactService.getPaymentTerms().subscribe(res => {
      console.log(res);
      this.paymentList = res;
    })
  }

  oncheck(event: any) {
    console.log(event);
    const selectedItemId = event; // Assuming the ID field is 'item_id'
    console.log(selectedItemId);
    const variants = this.purchaseBillForm.get('purchase_bill') as FormArray;
    variants.clear();
    this.addCart();
    this.purchaseBillForm.patchValue({
      supplier: selectedItemId
    });
  }
  oncheckVariant(event: any, index) {
    const selectedItemId = event.id;
    console.log(selectedItemId);
    const barcode = (this.purchaseBillForm.get('purchase_bill') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      barcode: selectedItemId
    });
  }
  getRes: any;
  loader = false;
  submit() {
    console.log(this.purchaseBillForm.value);
    if (this.purchaseBillForm.valid) {

      this.loader = true;
      let formdata: any = new FormData();
      formdata.append('supplier', this.purchaseBillForm.get('supplier')?.value);
      formdata.append('supplier_bill_date', this.purchaseBillForm.get('supplier_bill_date')?.value);
      formdata.append('refrence_bill_no', this.purchaseBillForm.get('refrence_bill_no')?.value);
      formdata.append('supplier_bill_no', this.purchaseBillForm.get('supplier_bill_no')?.value);
      formdata.append('material_inward_no', this.purchaseBillForm.get('material_inward_no')?.value);
      formdata.append('payment_term', this.purchaseBillForm.get('payment_term')?.value);
      formdata.append('due_date', this.purchaseBillForm.get('due_date')?.value);

      formdata.append('reverse_charge', this.purchaseBillForm.get('reverse_charge')?.value);
      formdata.append('shipping_date', this.purchaseBillForm.get('shipping_date')?.value);
      formdata.append('export', this.purchaseBillForm.get('export')?.value);

      formdata.append('selling_price_online', this.purchaseBillForm.get('selling_price_online')?.value);
      formdata.append('selling_price_offline', this.purchaseBillForm.get('selling_price_offline')?.value);
      formdata.append('dealer_price', this.purchaseBillForm.get('dealer_price')?.value);

      formdata.append('employee_price', this.purchaseBillForm.get('employee_price')?.value);
      formdata.append('status', this.purchaseBillForm.get('status')?.value);

      formdata.append('note', this.purchaseBillForm.get('note')?.value);

      // nested addrs data 
      const cartArray = this.purchaseBillForm.get('purchase_bill') as FormArray;
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
      formdata.append('purchase_bill', JSON.stringify(cartData));
      this.purchaseService.addPurchaseBill(formdata).subscribe(res => {
        console.log(res);
        this.getRes = res;
        if (this.getRes.IsSuccess == "True") {
          this.loader = false;
          this.toastrService.success(this.getRes.msg);
          this.router.navigate(['//purchase/purchase-bill-list'])
        }else{
          this.loader=false;
        }
      })
    } else {
      this.purchaseBillForm.markAllAsTouched()
    }
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
    console.log(this.barcode[index]);
    console.log(this.barcode);

    this.v_id = value.id;
    const barcode = (this.purchaseBillForm.get('purchase_bill') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      barcode: value.id
    });
    this.searchProduct('someQuery', '');
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
        const barcode = (this.purchaseBillForm.get('purchase_bill') as FormArray).at(index) as FormGroup;
        barcode.patchValue({
          barcode: this.searchs[0].id
        });
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

