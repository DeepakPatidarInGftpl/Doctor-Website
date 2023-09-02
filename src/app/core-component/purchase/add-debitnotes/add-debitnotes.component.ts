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
    private coreService: CoreService
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
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-indexed
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const defaultDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;

    this.debitNotesForm = this.fb.group({
      party: new FormControl('', [Validators.required]),
      // related_name: new FormControl(''),
      debit_note_no: new FormControl(''),
      debit_note_date: new FormControl(defaultDateTime),
      refrence_bill_no: new FormControl(''),
      purchase: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      reason: new FormControl('',),
      export: new FormControl(''),
      reverse_charge: new FormControl(''),

      total_qty: new FormControl(''),
      total_tax: new FormControl(''),
      total_discount: new FormControl(''),
      sub_total: new FormControl(''),
      round_off: new FormControl(''),
      total: new FormControl(''),

      cart: this.fb.array([]),
      // payment_term: new FormControl('', [Validators.required]),
      // due_date: new FormControl(defaultDateTime, [Validators.required]),
      // shipping_date: new FormControl(defaultDateTime, [Validators.required]),
      status: new FormControl(''),
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
    // this.getVariants();
    this.getPurchaseBill();
    this.getPaymentTerms();
    this.getprefix()
  }

  get supplier() {
    return this.debitNotesForm.get('party') as FormControl;
  }
  prefixNo: any;
  getprefix() {
    this.purchaseService.getDebitNotePrefix().subscribe((res: any) => {
      console.log(res);
      if (res.isSuccess == true) {
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
      barcode: (''),
      qty: (''),
      unit_cost: (''),
      mrp: (''),
      discount: new FormControl('', [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      tax: (''),
      landing_cost: (''),
      // batch: new FormControl('', Validators.required),
      total: ('')
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
      // console.log(res);
      this.suppliers = res;
    })
  }
  getVariants() {
    this.purchaseService.productVariant().subscribe((res: any) => {
      // console.log(res);
      this.variants = res;
    })
  }
  purchaseList: any;
  getPurchaseBill() {
    this.purchaseService.getPurchaseBill().subscribe(res => {
      this.purchaseList = res;
      // console.log(this.purchaseList);
    })
  }
  paymentList: any;
  getPaymentTerms() {
    this.contactService.getPaymentTerms().subscribe(res => {
      // console.log(res);
      this.paymentList = res;
    })
  }
  supplierAddress: any;
  selectedAddressBilling: any;
  selectedAddressShipping: any;
  selectBatch: any;
  selectPaymentTerm: any
  variantId: any;
  supplierId:any
  oncheck(event: any) {
    // console.log(event);
    const selectedItemId = event; // Assuming the ID field is 'item_id'
    // console.log(selectedItemId);
    this.supplierId=event
    //call detail api
    this.contactService.getSupplierById(selectedItemId).subscribe(res => {
      this.getPaymentTerms = res?.payment_terms?.id;
      this.getVariant('','')
      // this.debitNotesForm.get('payment_term').patchValue(this.getPaymentTerms)
      this.supplierAddress = res;
      this.supplierAddress.address.map((res: any) => {
        if (res.address_type == 'Billing') {
          this.selectedAddressBilling = res
          console.log(this.selectedAddressBilling);
        } else if (res.address_type == 'Shipping') {
          this.selectedAddressShipping = res
          console.log(this.selectedAddressShipping);
        }
      })
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
  openModalShipping() {
    // Trigger Bootstrap modal using JavaScript
    const modal = document.getElementById('addressModalShipping');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  }
  openModalBatch() {
    // Trigger Bootstrap modal using JavaScript
    const modal = document.getElementById('batchModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  }
  selectAddressBilling(address: string) {
    this.selectedAddressBilling = address;
    // Close Bootstrap modal using JavaScript
    const modal = document.getElementById('addressModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }
  selectAddressShipping(address: string) {
    this.selectedAddressShipping = address;
    // Close Bootstrap modal using JavaScript
    const modal = document.getElementById('addressModalShipping');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }
  selecBatchtModel(address: any, index: any) {
    const modal = document.getElementById('batchModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
    const barcode = (this.debitNotesForm.get('purchase_bill') as FormArray).at(index) as FormGroup;
    let discountRupees = (address?.cost_price * address?.discount) / 100
    console.log(discountRupees);
    let afterDiscountPrice = (address?.cost_price - discountRupees)
    let taxRupee: number = (afterDiscountPrice * address?.purchase_tax) / 100
    console.log(taxRupee);
    let landingCost = (address?.cost_price - discountRupees) + taxRupee;
    console.log(landingCost);
    barcode.patchValue({
      mrp: address?.mrp,
      qty: address?.stock,
      tax: address?.purchase_tax,
      discount: address?.discount,
      unit_cost: address?.cost_price,
      landing_cost: landingCost
    });
  }
  closeModal() {
    const modal = document.getElementById('addressModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }
  closeModalBatch() {
    const modal = document.getElementById('batchModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }
  closeModalShipping() {
    const modal = document.getElementById('addressModalShipping');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }

  selectedProductName: any;
  oncheckVariant(event: any, index) {
    const selectedItemId = event.id;
    this.variantId = event.id
    // this.getBatch()
    this.selectedProductName = event.product_title
    this.selectBatch = event.batch
    // console.log(selectedItemId);
    const barcode = (this.debitNotesForm.get('cart') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      barcode: selectedItemId
    });

    if (event.batch.length > 0) {
      const barcode = (this.debitNotesForm.get('cart') as FormArray).at(index) as FormGroup;

      let discountRupees = (event.batch[0]?.cost_price * event.batch[0]?.discount) / 100
      console.log(discountRupees);
      let afterDiscountPrice = (event.batch[0]?.cost_price - discountRupees)
      let taxRupee: number = (afterDiscountPrice * event.batch[0]?.purchase_tax) / 100
      let landingCost = (event.batch[0]?.cost_price - discountRupees) + taxRupee;
      console.log(landingCost);

      barcode.patchValue({
        barcode: selectedItemId,
        mrp: event.batch[0]?.mrp,
        qty: event.batch[0]?.stock,
        tax: event.batch[0]?.purchase_tax,
        discount: event.batch[0]?.discount,
        unit_cost: event.batch[0]?.cost_price,
        landing_cost: landingCost
      });

      console.log(event.batch);
    }

  }
  batchList: any;
  getBatch() {
    this.coreService.getBatchById(this.variantId).subscribe(res => {
      // console.log(res);
      this.batchList = res;
    })
  }
  getRes: any;
  loader = false;
  submit(type: any) {
    // console.log(this.debitNotesForm.value);
    if (this.debitNotesForm.valid) {
      this.loader = true;
      let formdata: any = new FormData();
      formdata.append('party', this.debitNotesForm.get('party')?.value);
      formdata.append('debit_note_date', this.debitNotesForm.get('debit_note_date')?.value);
      formdata.append('debit_note_no', this.debitNotesForm.get('debit_note_no')?.value);
      formdata.append('refrence_bill_no', this.debitNotesForm.get('refrence_bill_no')?.value);
      // formdata.append('related_name', this.debitNotesForm.get('related_name')?.value);
      formdata.append('reverse_charge', this.debitNotesForm.get('reverse_charge')?.value);
      formdata.append('purchase', this.debitNotesForm.get('purchase')?.value);
      formdata.append('export', this.debitNotesForm.get('export')?.value);
      formdata.append('reason', this.debitNotesForm.get('reason')?.value);

      formdata.append('total_qty', this.debitNotesForm.get('total_qty')?.value);
      formdata.append('total_tax', this.debitNotesForm.get('total_tax')?.value);
      formdata.append('total_discount', this.debitNotesForm.get('total_discount')?.value);
      formdata.append('sub_total', this.debitNotesForm.get('sub_total')?.value);
      formdata.append('round_off', this.debitNotesForm.get('round_off')?.value);
      formdata.append('total', this.debitNotesForm.get('total')?.value);
      if (type == 'draft') {
        formdata.append('status', 'draft');
      }
      
      const cartArray = this.debitNotesForm.get('cart') as FormArray;
      const cartData = [];
      cartArray.controls.forEach((address) => {
        const cartGroup = address as FormGroup;
        const cartObject = {};
        Object.keys(cartGroup.controls).forEach((key) => {
          const control = cartGroup.controls[key];
          // Convert the value to an integer if it's a number
          if (!isNaN(control.value)) {
            cartObject[key] = parseInt(control.value, 10);
          } else {
            cartObject[key] = control.value;
          }
        });

        cartData.push(cartObject);
      });
      formdata.append('cart', JSON.stringify(cartData));


      this.purchaseService.addPurchaseReturn(formdata).subscribe(res => {
        // console.log(res);
        this.getRes = res;
        if (this.getRes.Is_Success == "True") {
          this.loader = false;
          this.toastrService.success(this.getRes.msg);

          if (type == 'new') {
            this.debitNotesForm.reset()
            this.supplierControl.reset()
            this.ngOnInit()
          } else if (type == 'print') {
            this.printForm()
            setTimeout(() => {
              this.debitNotesForm.reset()
              this.supplierControl.reset()
              this.ngOnInit()
            }, 3000);
          }
          else {
            this.router.navigate(['//purchase/debit-notes-list'])
          }
        } else {
          this.toastrService.error(this.getRes.purchase[0])
          this.loader = false
        }
      }, err => {
        this.loader = false
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
  // get payment_term() {
  //   return this.debitNotesForm.get('payment_term') as FormControl;
  // }
  // get due_date() {
  //   return this.debitNotesForm.get('due_date') as FormControl;
  // }
  get purchase() {
    return this.debitNotesForm.get('purchase') as FormControl;
  }
  // get related_name() {
  //   return this.debitNotesForm.get('related_name') as FormControl;
  // }
  discountt(index: number) {
    return this.getCart().controls[index].get('discount');
  }
  // batch(index: number) {
  //   return this.getCart().controls[index].get('batch');
  // }

  private _filter(value: string | number, include: boolean): any[] {
    // console.log(value);
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredSuppliers = include
      ? this.suppliers.filter(supplier => supplier.name.toLowerCase().includes(filterValue))
      : this.suppliers.filter(supplier => !supplier.name.toLowerCase().includes(filterValue));
    if (!include && filteredSuppliers.length === 0) {
      // console.log("No results found");
      filteredSuppliers.push({ name: "No data found" }); // Add a dummy entry for displaying "No data found"
    }
    return filteredSuppliers;
  }

  private _filtr(value: string | number, include: boolean): any[] {
    // console.log(value);
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
      // console.log("No results found");
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
    // console.log(event);
    // console.log(event.option.value);
  }
  displayFn(result: any): string {
    // console.log(result);
    return result ? result.product_title : '';
  }
  barcode: any[] = [];
  v_id: any;
  variantChanged(value: any, index) {
    // console.log(index);
    // console.log(value?.sku);
    this.barcode[index] = value.sku;

    this.v_id = value.id;
    const barcode = (this.debitNotesForm.get('cart') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      barcode: value.id
    });
    this.searchProduct('someQuery', '');
    this.getVariant('','')
  };
  staticValue: string = 'Static Value';
  searchs: any[] = [];
  productName: any[] = [];
  isProduct = true;

  searchProduct(event: any, index: any) {
    // console.log(event);
    // const searchValue = event.target.value;
    // console.log(searchValue);

    if (event) {
      this.purchaseService.searchProduct(event).subscribe((res: any) => {
        this.searchs = res;
        this.productOption = res;
        // console.log(this.searchs);
        this.productName[index] = this.searchs[0].product_title;
        // console.log(this.productName);
        this.check = true;
        const barcode = (this.debitNotesForm.get('cart') as FormArray).at(index) as FormGroup;
        barcode.patchValue({
          barcode: this.searchs[0].id
        });
        this.coreService.getBatchById(this.searchs[0].id).subscribe(res => {
          // console.log(res);
          this.batchList = res;
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
  calculateTotalUnitCost(): number {
    let totalPurchase = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const purchaseControl = this.getCart().controls[i].get('unit_cost');
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
  calculateTotalLandingCostEveryIndex(index: number): number {
    const cartItem = this.getCart().controls[index];
    const purchaseRateControl = cartItem.get('unit_cost');
    const taxPercentageControl = cartItem.get('tax');
    const discountPercentageControl = cartItem.get('discount');
    if (purchaseRateControl && taxPercentageControl && discountPercentageControl) {
      const purchaseRate = +purchaseRateControl.value;
      const taxPercentage = +taxPercentageControl.value;
      const discountPercentage = +discountPercentageControl.value;
      const discountAmount = (purchaseRate * discountPercentage) / 100;
      const afterDiscountAmount = purchaseRate - discountAmount
      const taxAmount = (afterDiscountAmount * taxPercentage) / 100;
      const landingCost = purchaseRate - discountAmount + taxAmount;
      return landingCost;
    }
    return 0;
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
  totalAmount: any
  calculateTotal() {
    let total = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const purchaseRateControl = this.getCart().controls[i].get('unit_cost');
      const discountControl = this.getCart().controls[i].get('discount');
      const taxControl = this.getCart().controls[i].get('tax');
      const qtyControl = this.getCart().controls[i].get('qty');
      if (purchaseRateControl && discountControl && taxControl && qtyControl) {
        const purchaseRate = +purchaseRateControl.value;
        const discount = +discountControl.value;
        const tax = +taxControl.value;
        const qty = +qtyControl.value;
        const discountPercentage = +discount;
        const taxAmountPercentage = +tax;
        const taxAmount = (purchaseRate * taxAmountPercentage) / 100;
        const discountAmount = (purchaseRate * discountPercentage) / 100;
        const landingCost = (purchaseRate - discountAmount) + taxAmount;
        const totalForItem = landingCost * qty;
        total += totalForItem;
      }
    }
    this.totalAmount = total
    // Round the total based on decimal value and add 1 if necessary
    const roundedTotal = Math.round(total * 100) / 100; // Round to two decimal places
    const decimalPart = roundedTotal - Math.floor(roundedTotal);

    if (decimalPart >= 0.5) {
      return Math.floor(roundedTotal) + 1;
    } else {
      return Math.floor(roundedTotal);
    }
  }
  calculateRoundoffValue() {
    const total = this.totalAmount; // Use your existing calculateTotal function
    const roundedTotal = Math.round(total * 100) / 100; // Round to two decimal places
    const integerPart = Math.floor(roundedTotal);
    const decimalPart = (roundedTotal - integerPart) * 100; // Convert decimal part to whole number

    if (decimalPart === 0 && integerPart === 0) {
      return 0; // Both parts are 0, so subtractedValue is 0
    }

    const subtractedValue = (100 - decimalPart) / 100; // Subtract decimal part from 100 and convert to fraction
    return subtractedValue;
  }
  calculateTotalEveryIndex(index: number) {
    const cartItem = this.getCart().controls[index];
    const purchaseRate = +cartItem.get('unit_cost').value;
    const discountPercentage = +cartItem.get('discount').value;
    const taxAmountPercentage = +cartItem.get('tax').value;
    const qty = +cartItem.get('qty').value;
    const discountAmount = (purchaseRate * discountPercentage) / 100;
    const taxAmount = (purchaseRate * taxAmountPercentage) / 100;
    const landingCost = (purchaseRate - discountAmount) + taxAmount;
    const totalForItem = landingCost * qty;
    return totalForItem;
  }
  calculateTotalTaxIntoRupees() {
    let total = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const purchaseRateControl = this.getCart().controls[i].get('unit_cost');
      const taxControl = this.getCart().controls[i].get('tax');
      const discountControl = this.getCart().controls[i].get('discount');
      if (purchaseRateControl && discountControl) {
        const purchaseRate = +purchaseRateControl.value;
        const tax = +taxControl.value;
        const discount = +discountControl.value
        const discountAmountPercentage = +discount
        const discountAmount = (purchaseRate * discountAmountPercentage) / 100;
        const afterDiscuntAmount = purchaseRate - discountAmount
        const taxAmountPercentage = +tax;
        const taxAmount = (afterDiscuntAmount * taxAmountPercentage) / 100;

        total += taxAmount;
      }
    }
    return total;
  }
  calculateTaxintoPrice(index: number): number {
    const cartItem = this.getCart().controls[index];
    const purchaseRate = +cartItem.get('unit_cost').value;
    const taxPercentage = +cartItem.get('tax').value;
    const discountPercentage = +cartItem.get('discount').value;
    const discount = (purchaseRate * discountPercentage) / 100;
    const afterDiscountAmount = purchaseRate - discount
    const taxAmount = (afterDiscountAmount * taxPercentage) / 100;
    console.log(taxAmount);
    const totalForTax = taxAmount
    return totalForTax;
  }

  clearForm() {
    this.debitNotesForm.reset();
    this.supplierControl.reset()
  }
  printForm(): void {
    const printContents = document.getElementById('purchaseForm').outerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  category:any;
subcategory:any;
searc:any;
myControl = new FormControl('');
variantList: any[] = []; 
  getVariant(search,index:any) {
    this.purchaseService.filterVariant(this.supplierId,this.category,this.subcategory,search).subscribe((res:any) => {
      console.log(res);
      this.variantList=res;
      console.log(this.variantList);
      //fetch barcode
      this.searchs = res;
      this.productOption = res;
      // console.log(this.searchs);
      this.productName[index] = this.searchs[0].product_title;
      // console.log(this.productName);
      this.check = true;
      const barcode = (this.debitNotesForm.get('cart') as FormArray).at(index) as FormGroup;
      barcode.patchValue({
        barcode: this.searchs[0].id
      });
      this.coreService.getBatchById(this.searchs[0].id).subscribe(res => {
        // console.log(res);
        this.batchList = res;
      })
    });
  }
}

