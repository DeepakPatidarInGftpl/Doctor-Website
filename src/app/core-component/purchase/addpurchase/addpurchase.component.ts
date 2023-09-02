import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';

@Component({
  selector: 'app-addpurchase',
  templateUrl: './addpurchase.component.html',
  styleUrls: ['./addpurchase.component.scss']
})
export class AddpurchaseComponent implements OnInit {

  searchControl = new FormControl();
  searchResults: any[] = [];

  totalQty: any;
  subTotal: any;
  discount: any;
  totalTax: any;
  roundOff: any;
  mrpPurchase:number=0;
 
  constructor(private purchaseService: PurchaseServiceService, private fb: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private contactService: ContactService) {
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

  purchaseForm!: FormGroup;

  get f() {
    return this.purchaseForm.controls;
  }
  searchForm!: FormGroup;
  subcategoryList;

  ngOnInit(): void {
    // const defaultDate = new Date().toISOString().split('T')[0]; // Get yyyy-MM-dd part
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-indexed
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const defaultDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
    
    this.purchaseForm = this.fb.group({
      party: new FormControl('', [Validators.required]),
      order_date: new FormControl(defaultDateTime),
      order_no: new FormControl('', [Validators.required]),
      shipping_date: new FormControl(defaultDateTime, [Validators.required]),
      shipping_note: new FormControl(''),
      purchase_cart: this.fb.array([]),
      note: new FormControl(''),
      status: new FormControl(''),
      export: new FormControl(''),
      total_qty: new FormControl(''),
      total_tax: new FormControl(''),
      total_discount: new FormControl(''),
      sub_total: new FormControl(''),
      round_off: new FormControl(''),
      total: new FormControl(''),
    });
    this.searchForm = this.fb.group({
      search: new FormControl()
    })
    this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );
    this.filteredVariants = this.variantControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filtr(value, true))
    )
    this.getSuuplier();
    this.getprefix();
  }
  prefixNo: any;
  getprefix() {
    this.purchaseService.getPurchaseOrderPrefix().subscribe((res: any) => {
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

 
category:any;
subcategory:any;
searc:any;
myControl = new FormControl('');
variantList: any[] = []; 
  getVariant(search:any,index:any) {
    this.purchaseService.filterVariant(this.supplierId,this.category,this.subcategory,search).subscribe((res:any) => {
      console.log(res);
      this.variantList=res;
      console.log(this.variantList);
      
      //barcode patch
      this.searchs = res;
      this.productOption = res;
      // console.log(this.searchs);
      this.productName[index] = this.searchs[0].product_title;
      // console.log(this.productName);
      this.check = true;
      const barcode = (this.purchaseForm.get('purchase_cart') as FormArray).at(index) as FormGroup;
      barcode.patchValue({
        barcode: this.searchs[0].id
      });
    });
  }
 
  get supplier() {
    return this.purchaseForm.get('party') as FormControl;
  }
  purchase_cart(): FormGroup {
    return this.fb.group({
      barcode: (0),
      qty: (0),
      purchase_rate: (0),
      mrp: (0),
      discount: new FormControl(0, [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      tax: new FormControl(0,[Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      landing_cost: (0),
      total: (0),
      // discount_type: (0),
      // additional_discount: new FormControl(0, [Validators.pattern(/^[0-9]*$/)])
    })
  }

  purchase_price: any;
  mrpp: any;
  coast: any
  priceValidation() {
    console.log('ghhgh');
    // if(this.mrpp>this.purchase_price){
    //   this.toastrService.error('Mrp Should not less than Purchase Price')
    // }
    //  if(this.mrpp>this.coast){
    //   this.toastrService.error('MRP should not be less than Landing Cost')
    // }
    if (this.purchase_price > this.coast) {
      this.toastrService.error('Purchase Price not be less than Landing Cost')
    }
  }

  getCart(): FormArray {
    return this.purchaseForm.get('purchase_cart') as FormArray;
  }
  addCart() {
    this.getCart().push(this.purchase_cart())
  }
  removeCart(i: any) {
    this.getCart().removeAt(i)
  }
  supplierList: any;
  getSuuplier() {
    this.purchaseService.getSupplier().subscribe((res: any) => {
      // console.log(res);
      this.suppliers = res;
      // this.variants=res;
    })
  }

  addresses: string[] = ['Address 1', 'Address 2', 'Address 3'];

  supplierAddress: any;
  selectedAddressBilling: any;
  selectedAddressShipping: any;
  selectBatch: any;
  supplierId:any;
  oncheck(event: any) {
    // console.log(event);
    const selectedItemId = event; 
    this.supplierId=event;
    // console.log(selectedItemId);
    //call detail api
    this.contactService.getSupplierById(selectedItemId).subscribe(res => {
      // console.log(res);
      this.supplierAddress = res;
      this.getVariant('','')
      console.log(this.selectedAddressBilling);
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
    const variants = this.purchaseForm.get('purchase_cart') as FormArray;
    variants.clear();
    this.addCart();
    this.purchaseForm.patchValue({
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
    const barcode = (this.purchaseForm.get('purchase_cart') as FormArray).at(index) as FormGroup;
    let discountRupees = (address?.cost_price * address?.discount) / 100
    console.log(discountRupees);
    let afterDiscountPrice=(address?.cost_price-discountRupees)
    let taxRupee: number = (afterDiscountPrice * address?.purchase_tax) / 100
    console.log(taxRupee);
    let landingCost = (address?.cost_price - discountRupees) + taxRupee;
    console.log(landingCost);
    barcode.patchValue({
      mrp: address?.mrp,
      qty: address?.stock,
      tax: address?.purchase_tax,
      discount: address?.discount,
      purchase_rate: address?.cost_price,
      landing_cost: landingCost
      // additional_discount: address?.additional_discount,
      // discount_type: '%',
      // purchase_rate: 0,
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
    console.log(event);
    this.selectedProductName = event.product_title
    this.selectBatch = event.batch
    console.log(event.batch.length);

    if (event.batch.length > 0) {
      const barcode = (this.purchaseForm.get('purchase_cart') as FormArray).at(index) as FormGroup;
      
      let discountRupees = (event.batch[0]?.cost_price * event.batch[0]?.discount) / 100
      console.log(discountRupees);
      let afterDiscountPrice=(event.batch[0]?.cost_price-discountRupees)
      let taxRupee: number = (afterDiscountPrice * event.batch[0]?.purchase_tax) / 100
      let landingCost = (event.batch[0]?.cost_price - discountRupees) + taxRupee;
      console.log(landingCost);
      barcode.patchValue({
        barcode: selectedItemId,
        mrp: event.batch[0]?.mrp,
        qty: event.batch[0]?.stock,
        tax: event.batch[0]?.purchase_tax,
        discount: event.batch[0]?.discount,
        purchase_rate: event.batch[0]?.cost_price,
        landing_cost: landingCost
        // additional_discount: event.batch[0]?.additional_discount,
        // discount_type: '%',
        // purchase_rate: 0,
      });

      console.log(event.batch);
    }

  }


  getRes: any;
  loader = false;
  submit(type: any) {
    console.log(this.purchaseForm.value);
    if (this.purchaseForm.valid) {
      this.loader = true;
      let formdata: any = new FormData();
      formdata.append('party', this.purchaseForm.get('party')?.value);
      formdata.append('order_date', this.purchaseForm.get('order_date')?.value);
      formdata.append('order_no', this.purchaseForm.get('order_no')?.value);
      formdata.append('shipping_date', this.purchaseForm.get('shipping_date')?.value);
      formdata.append('shipping_note', this.purchaseForm.get('shipping_note')?.value);
      formdata.append('note', this.purchaseForm.get('note')?.value);
      formdata.append('export', this.purchaseForm.get('export')?.value);
      formdata.append('total_qty', this.purchaseForm.get('total_qty')?.value);
      formdata.append('total_tax', this.purchaseForm.get('total_tax')?.value);
      formdata.append('total_discount', this.purchaseForm.get('total_discount')?.value);
      formdata.append('round_off', this.purchaseForm.get('round_off')?.value);
      formdata.append('sub_total', this.purchaseForm.get('sub_total')?.value);
      formdata.append('total', this.purchaseForm.get('total')?.value);
      if (type == 'draft') {
        formdata.append('status', 'draft');
      }
      // nested addrs data 
      // const cartArray = this.purchaseForm.get('purchase_cart') as FormArray;
      // const cartData = [];
      // cartArray.controls.forEach((address) => {
      //   const cartGroup = address as FormGroup;
      //   const cartObject = {};
      //   Object.keys(cartGroup.controls).forEach((key) => {
      //     const control = cartGroup.controls[key];
      //     cartObject[key] = control.value;
      //   });
      //   cartData.push(cartObject);
      // });
      // formdata.append('purchase_cart', JSON.stringify(cartData));

      const cartArray = this.purchaseForm.get('purchase_cart') as FormArray;
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
      formdata.append('purchase_cart', JSON.stringify(cartData));

      this.purchaseService.addPurchase(formdata).subscribe(res => {
        // console.log(res);
        this.getRes = res;
        if (this.getRes.IsSuccess == "True") {
          this.loader = false;
          this.toastrService.success(this.getRes.msg);
          if (type == 'new') {
            this.purchaseForm.reset()
            this.ngOnInit()
            this.supplierControl.reset()
          } else if (type == 'print') {
            this.printForm()
            setTimeout(() => {
              this.purchaseForm.reset()
              this.ngOnInit()
              this.supplierControl.reset()
            }, 3000);
          }
          else {
            this.router.navigate(['//purchase/purchaselist'])
          }
        } else {
          this.loader = false
        }
      }, err => {
        this.loader = false
      })
    } else {
      this.loader = false;
      this.purchaseForm.markAllAsTouched()
      console.log('invald');
    }
  }


  get order_no() {
    return this.purchaseForm.get('order_no')
  }
  get order_date() {
    return this.purchaseForm.get('order_date')
  }
  get shipping_date() {
    return this.purchaseForm.get('shipping_date')
  }
  get shipping_note() {
    return this.purchaseForm.get('shipping_note')
  }
  get note() {
    return this.purchaseForm.get('note')
  }
  discountt(index: number) {
    return this.getCart().controls[index].get('discount');
  }
  taxx(index: number) {
    return this.getCart().controls[index].get('tax');
  }
  // additional_discount(index: number) {
  //   return this.getCart().controls[index].get('additional_discount')
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
  search = false;
  clearSearch() {
    this.searchForm.reset()
    this.search = false;
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
    console.log(value);

    // console.log(index);
    // console.log(value?.sku);
    this.barcode[index] = value.sku;
    // console.log(this.barcode[index]);
    // console.log(this.barcode);

    this.v_id = value.id;
    const barcode = (this.purchaseForm.get('purchase_cart') as FormArray).at(index) as FormGroup;
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
        const barcode = (this.purchaseForm.get('purchase_cart') as FormArray).at(index) as FormGroup;
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
      const mrpControl = this.getCart().controls[i]?.get('mrp') || 0;
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
  calculateTotalAdditionDiscount(): number {
    let totalDiscount = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const discountControl = this.getCart().controls[i].get('additional_discount');
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

  // calculateTotalLandingCost(): number {
  //   let totalLandingCost = 0;
  //   for (let i = 0; i < this.getCart().controls.length; i++) {
  //     const landingControl = this.getCart().controls[i].get('landing_cost');
  //     if (landingControl) {
  //       totalLandingCost += +landingControl.value;
  //     }
  //   }
  //   return totalLandingCost;
  // }
  calculateTotalLandingCost(): number {
    let totalLandingCost = 0;
    const cartControls = this.getCart().controls;
    for (let i = 0; i < cartControls.length; i++) {
      const purchaseRateControl = cartControls[i].get('purchase_rate');
      const discountControl = cartControls[i].get('discount');
      const taxAmountControl = cartControls[i].get('tax');
      if (purchaseRateControl && discountControl && taxAmountControl) {
        const purchaseRate = +purchaseRateControl.value;
        const discountPercentage = +discountControl.value;
        const taxAmountPercentage = +taxAmountControl.value;
        const discountAmount = (purchaseRate * discountPercentage) / 100;
        const afterDiscountAmount = purchaseRate - discountAmount
        const taxAmount = (afterDiscountAmount * taxAmountPercentage) / 100;
      const landingCost = (purchaseRate - discountAmount) + taxAmount;
        totalLandingCost += landingCost;
      }
    }
    return totalLandingCost;
  }
  calculateTotalLandingCostEveryIndex(index: number): number {
    const cartItem = this.getCart().controls[index];
    const purchaseRateControl = cartItem.get('purchase_rate');
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
  // calculateTotal(): number {
  //   let total = 0;
  //   for (let i = 0; i < this.getCart().controls.length; i++) {
  //     const purchaseRateControl = this.getCart().controls[i].get('purchase_rate');
  //     const discountControl = this.getCart().controls[i].get('discount');
  //     const taxControl = this.getCart().controls[i].get('tax');
  //     const qtyControl = this.getCart().controls[i].get('qty');

  //     if (purchaseRateControl && discountControl && taxControl && qtyControl) {
  //       const purchaseRate = +purchaseRateControl.value;
  //       const discount = +discountControl.value;
  //       const tax = +taxControl.value;
  //       const qty = +qtyControl.value;

  //       const discountPercentage = +discount
  //       const taxAmountPercentage = +tax;

  //       const taxAmount = (purchaseRate * taxAmountPercentage) / 100;
  //       const discountAmount = (purchaseRate * discountPercentage) / 100;
  //       const landingCost = (purchaseRate - discountAmount) + taxAmount;

  //       const totalForItem = landingCost * qty;

  //       total += totalForItem;
  //     }
  //   }
  //   return total;
  // }
  totalAmount: any
  calculateTotal() {
    let total = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const purchaseRateControl = this.getCart().controls[i].get('purchase_rate');
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
  calculateRoundoffValue(): number {
    const total = this.totalAmount; 
    const roundedTotal = Math.round(total * 100) / 100;
    const integerPart = Math.floor(roundedTotal);
    const decimalPart = (roundedTotal - integerPart) * 100; 
    if (decimalPart === 0 && integerPart === 0) {
      return 0; 
    }
    const subtractedValue = (100 - decimalPart) / 100; 
    if (subtractedValue === 1) {
      return 0;
    }
    return subtractedValue;
  }
  
  calculateTotalEveryIndex(index: number) {
    const cartItem = this.getCart().controls[index];
    const purchaseRate = +cartItem.get('purchase_rate').value;
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
      const purchaseRateControl = this.getCart().controls[i].get('purchase_rate');
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
    const purchaseRate = +cartItem.get('purchase_rate').value;
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
    this.purchaseForm.reset();
    this.supplierControl.reset()
  }
  printForm(): void {
    const printContents = document.getElementById('purchaseForm').outerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }



}
