import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
@Component({
  selector: 'app-editpurchase',
  templateUrl: './editpurchase.component.html',
  styleUrls: ['./editpurchase.component.scss']
})
export class EditpurchaseComponent implements OnInit {

  searchControl = new FormControl();
  searchResults: any[] = [];


  //
  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings | any;
  dropdownSettingsProduct: IDropdownSettings;
  selectedProduct: any[] = [];
  //
  constructor(private purchaseService: PurchaseServiceService, private fb: FormBuilder,
    private router: Router,
    private toastrService: ToastrService, private Arout: ActivatedRoute, private contactService: ContactService) {
  }

  supplierControlName = 'supplier';
  supplierControl = new FormControl();
  suppliers: any[] = [];

  filteredSuppliers: Observable<any[]>;
  purchaseForm!: FormGroup;
  get f() {
    return this.purchaseForm.controls;
  }
  searchForm!: FormGroup;
  subcategoryList;
  id: any;


  variantControlName = 'barcode';
  variantControl = new FormControl();
  variants: any[] = [];
  filteredVariants: Observable<any[]>;
  getresbyId: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.supplierControl.setValue('Loading...');
    // this.myControl.setValue('Loading...')
    this.myControls = new FormArray([]);
    
    this.purchaseForm = this.fb.group({
      party: new FormControl('', [Validators.required]),
      order_date: new FormControl(''),
      order_no: new FormControl('', [Validators.required]),
      shipping_date: new FormControl('', [Validators.required]),
      shipping_note: new FormControl(''),
      purchase_cart: this.fb.array([]),
      note: new FormControl(''),
      status: new FormControl(''),
      export: new FormControl(''),
      total_qty: new FormControl(''),
      total_tax: new FormControl('', ),
      total_discount: new FormControl('', ),
      sub_total: new FormControl('', ),
      round_off: new FormControl('', ),
      total: new FormControl('', ),
    });
    this.purchaseService.getPurchaseById(this.id).subscribe(res => {
      // console.log(res);
      this.getresbyId = res;
      this.purchaseForm.patchValue(res);
      this.purchaseForm.get('party')?.patchValue(res.party.id)
      this.purchaseForm.setControl('purchase_cart', this.udateCart(res?.cart));
      this.displaySupplierName(res.party.id);

       //patch local-date
       const formattedOrderDate = new Date(this.getresbyId?.order_date).toISOString().slice(0, 16);
       this.purchaseForm.get('order_date')?.patchValue(formattedOrderDate);
      
       const formattedshipping_date = new Date(this.getresbyId?.shipping_date).toISOString().slice(0, 16);
       this.purchaseForm.get('shipping_date')?.patchValue(formattedshipping_date);
      

      this.supplierId = res.party.id
      this.getVariant('', '')

      //call detail api
      this.contactService.getSupplierById(res.party.id).subscribe(res => {
        // console.log(res);
        this.supplierAddress = res;
        this.supplierControl.setValue(res?.company_name);
        console.log(this.supplierControl);
        
        this.getprefix()
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
    })

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

  }

  displaySupplierName(supplierId: number): void {
    // console.log(supplierId);
    // console.log(this.supplierList);


    // this.filteredSuppliers
    //   .pipe(
    //     tap(data => console.log('Data emitted:', data)), // Add this line to check emitted data
    //     map(suppliers => suppliers.filter(supplier => supplier.id === supplierId))
    //   )
    //   .subscribe(matchedSuppliers => {
    //     if (matchedSuppliers.length > 0) {
    //       console.log(matchedSuppliers[0].name,'matchsupplier');

    //       this.supplierControl.setValue(matchedSuppliers[0].name);
    //     }
    //   });

    // console.log(this.supplierControl);

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
  udateCart(add: any): FormArray {
    let formarr = new FormArray([]);
    add.forEach((j: any, i) => {
      formarr.push(this.fb.group({
        barcode: j.barcode.id,
        qty: j.qty,
        purchase_rate: j.purchase_rate,
        mrp: j.mrp,
        discount: j.discount,
        tax: j.tax || 0,
        landing_cost: j.landing_cost,
        total: j.total
      }))
      this.barcode[i] = j.barcode.sku;
      this.productName[i] = j.barcode.product_title;
      // this.myControl.setValue(j.barcode.product_title)
      this.myControls.push(new FormControl(j?.barcode?.product_title));

    })
    return formarr
  }

  onItemSelect(item: any) {
    // console.log(item);
    this.oncheck(item)
    // console.log(this.dropdownSettings.noFilteredDataAvailablePlaceholderText);
  }
  onItemSelectProduct(item: any) {
    // console.log(item);
  }
  onSelectAll(items: any) {
    // console.log(items);
  }
  searchInputValue: string = '';

  noData = false
  onSearchKeyUp(event: KeyboardEvent) {
    // console.log(event.key);
    if (this.dropdownSettings.noFilteredDataAvailablePlaceholderText) {
      // console.log('caleddd');
      this.noData = true
    }
    this.searchInputValue = (event.target as HTMLInputElement).value;
  }
  get supplier() {
    return this.purchaseForm.get('party') as FormControl;
  }
  purchase_cart(): FormGroup {
    return this.fb.group({
      barcode: (''),
      qty: (''),
      purchase_rate: (''),
      mrp: (''),
      discount: new FormControl('', [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      tax: new FormControl('', [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      landing_cost: (''),
      total: (''),
    })
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
  additional_charges(): FormGroup {
    return this.fb.group({
      additional_charge: (0),
      value: (0),
      tax: (0)
    })
  }
  getAdditionalCharge(): FormArray {
    return this.purchaseForm.get('additional_charges') as FormArray
  }
  addAdditionalCharge() {
    this.getAdditionalCharge().push(this.additional_charges())
  }
  removeAdditionalCharge(j: any) {
    this.getAdditionalCharge().removeAt(j)
  }
  supplierList: any;
  getSuuplier() {
    this.purchaseService.getSupplier().subscribe((res: any) => {
      // console.log(res);
      this.suppliers = res;
      // console.log(this.suppliers);
    })
  }


  supplierAddress: any;

  selectedAddressBilling: any;
  selectedAddressShipping: any;
  selectBatch: any;
  supplierId: any;
  oncheck(event: any) {
    // console.log(event);
    const selectedItemId = event.id;
    // console.log(selectedItemId);
    this.supplierId = selectedItemId
    this.contactService.getSupplierById(selectedItemId).subscribe(res => {
      // console.log(res);
      this.getVariant('', '')
      this.supplierAddress = res;
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

    if (this.getresbyId.cart.length >= 0) {
      const variants = this.purchaseForm.get('purchase_cart') as FormArray;
      variants.clear();
      this.addCart();
    }

    this.purchaseForm.patchValue({
      party: selectedItemId
    });
    // this.displaySupplierName(event);
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
  oncheckVariant(event: any, index) {
    const selectedItemId = event.id;
    // console.log(selectedItemId);
    const barcode = (this.purchaseForm.get('purchase_cart') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      barcode: selectedItemId
    });
  }
  loader = false;
  getRes: any;
  submit(type: any) {
    // console.log(this.purchaseForm.value);
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

      this.purchaseService.updatePurchase(formdata, this.id).subscribe(res => {
        // console.log(res);
        this.getRes = res;
        if (this.getRes.IsSuccess == "True") {
          this.toastrService.success(this.getRes.msg);
          // this.router.navigate(['//purchase/purchaselist'])
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
      this.purchaseForm.markAllAsTouched()
      console.log('invLID FORM');
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
  sear: any;
  check = false;
  srchData = [];
  hideSearch() {
    this.searchs = undefined;
  }
  barcode: any[] = [];
  v_id: any;

  variantChanged(value: any, index) {
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
    this.getVariant('', '')
  };

  searchs: any[] = [];
  Qty: any[] = []
  productName: any[] = [];
  isProduct = true;
  staticValue: string = 'Static Value';

  searchProduct(event: any, index: any) {
    // console.log(event);
    // const searchValue = event.target.value;
    // console.log(searchValue);
    if (event) {
      this.purchaseService.searchProduct(event).subscribe((res: any) => {
        this.searchs = res;
        // this.productOption = res;
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
      const purchaseControl = this.getCart().controls[i]?.get('purchase_rate') || 0;
      if (purchaseControl) {
        totalPurchase += +purchaseControl.value;
      }
    }
    return totalPurchase;
  }
  calculateTotalTax(): number {
    let totalTax = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const taxControl = this.getCart().controls[i]?.get('tax') || 0;
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
      const purchaseRateControl = cartControls[i]?.get('purchase_rate') || 0;
      const discountControl = cartControls[i]?.get('discount') || 0;
      const taxAmountControl = cartControls[i]?.get('tax') || 0;
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
    const purchaseRateControl = cartItem?.get('purchase_rate') || 0;
    const taxPercentageControl = cartItem?.get('tax') || 0;
    const discountPercentageControl = cartItem?.get('discount') || 0;
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
      const qtyControl = this.getCart().controls[i]?.get('qty') || 0;
      const mrpControl = this.getCart().controls[i]?.get('mrp') || 0;
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
  calculateTotal(): number {
    let total = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const purchaseRateControl = this.getCart().controls[i]?.get('purchase_rate') || 0;
      const discountControl = this.getCart().controls[i]?.get('discount') || 0;
      const taxControl = this.getCart().controls[i]?.get('tax') || 0;
      const qtyControl = this.getCart().controls[i]?.get('qty') || 0;
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
    const total = this.totalAmount; // Use your existing calculateTotal function
    const roundedTotal = Math.round(total * 100) / 100; // Round to two decimal places
    const integerPart = Math.floor(roundedTotal);
    const decimalPart = (roundedTotal - integerPart) * 100; // Convert decimal part to whole number

    if (decimalPart === 0 && integerPart === 0) {
      return 0; // Both parts are 0, so subtractedValue is 0
    }

    const subtractedValue = (100 - decimalPart) / 100; // Subtract decimal part from 100 and convert to fraction

    // Check if subtractedValue is 1 and change it to 0
    if (subtractedValue === 1) {
      return 0;
    }

    return subtractedValue;
  }


  calculateTotalEveryIndex(index: number): number {
    const cartItem = this.getCart().controls[index];
    const purchaseRate = +cartItem?.get('purchase_rate').value || 0;
    const discountPercentage = +cartItem?.get('discount').value || 0;
    const taxAmountPercentage = +cartItem?.get('tax').value || 0;
    const qty = +cartItem?.get('qty').value;
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
    const purchaseRate = +cartItem?.get('purchase_rate').value || 0;
    const taxPercentage = +cartItem?.get('tax').value || 0;
    const discountPercentage = +cartItem?.get('discount').value || 0;
    const discount = (purchaseRate * discountPercentage) / 100;
    const afterDiscountAmount = purchaseRate - discount
    const taxAmount = (afterDiscountAmount * taxPercentage) / 100;
    console.log(taxAmount);
    const totalForTax = taxAmount
    return totalForTax;
  }
  clearForm() {
    this.purchaseForm.reset()
  }
  printForm(): void {
    const printContents = document.getElementById('purchaseForm').outerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  // search result 
  titlee: any;
  searchSupplier() {
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      this.suppliers = this.suppliers.filter(res => {
        // console.log(res);
        // console.log(res.title.toLocaleLowerCase());
        // console.log(res.title.match(this.titlee));
        return res.title.match(this.titlee);
      })
    }
  }


  category: any;
  subcategory: any;
  searc: any;
  myControls: FormArray;
  variantList: any[] = [];

  getVariant(search: any, index: any) {
    this.purchaseService.filterVariant(this.supplierId, this.category, this.subcategory, search).subscribe((res: any) => {
      console.log(res);
      this.variantList = res;
      console.log(this.variantList);

      if (search) {
        //barcode patch
        this.searchs = res;
        // console.log(this.searchs);
        this.productName[index] = this.searchs[0].product_title;
        // console.log(this.productName);
        this.check = true;
        const barcode = (this.purchaseForm.get('purchase_cart') as FormArray).at(index) as FormGroup;
        barcode.patchValue({
          barcode: this.searchs[0].id
        });
      }

    });
  }

}
