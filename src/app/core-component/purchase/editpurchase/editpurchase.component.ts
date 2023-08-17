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
    this.supplierControl.setValue('Loading...'); // or any other default value

    this.purchaseForm = this.fb.group({
      supplier: new FormControl('', [Validators.required]),
      order_date: new FormControl(''),
      order_no: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      shipping_date: new FormControl(''),
      shipping_note: new FormControl(''),
      sub_total: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      purchase_cart: this.fb.array([]),
      total_tax: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      total_discount: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      round_off: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      total: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      note: new FormControl(''),
    });

    this.purchaseService.getPurchaseById(this.id).subscribe(res => {
      console.log(res);
      this.getresbyId = res;
      this.purchaseForm.patchValue(res);
      this.purchaseForm.get('supplier')?.patchValue(res.party.id)
      this.purchaseForm.setControl('purchase_cart', this.udateCart(res.cart));
      this.displaySupplierName(res.party.id);

      //call detail api
      this.contactService.getSupplierById(res.party.id).subscribe(res => {
        console.log(res);
        this.supplierAddress = res;
        this.supplierControl.setValue(res.name); 
        this.selectedAddress = this.supplierAddress.address[0];
        console.log(this.selectedAddress);
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

    this.getVariants();
  }

  displaySupplierName(supplierId: number): void {
    console.log(supplierId);
console.log(this.supplierList);


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

    console.log(this.supplierControl);

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
        tax: j.tax,
        landing_cost: j.landing_cost,
        total: j.total,
        discount_type:j.discount_type,
        additional_discount:j.additional_discount
      }))
      this.barcode[i] = j.barcode.sku;
      this.productName[i] = j.barcode.product_title;
    })
    return formarr
  }

  onItemSelect(item: any) {
    console.log(item);
    this.oncheck(item)
    console.log(this.dropdownSettings.noFilteredDataAvailablePlaceholderText);
  }
  onItemSelectProduct(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  searchInputValue: string = '';

  noData = false
  onSearchKeyUp(event: KeyboardEvent) {
    console.log(event.key);
    if (this.dropdownSettings.noFilteredDataAvailablePlaceholderText) {
      console.log('caleddd');
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
      tax: (''),
      landing_cost: (''),
      total: (''),
      discount_type:(''),
      additional_discount:new FormControl(0,[Validators.pattern(/^[0-9]*$/)])
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
  supplierList: any;
  getSuuplier() {
    this.purchaseService.getSupplier().subscribe((res: any) => {
      console.log(res);
      this.suppliers = res;
      console.log(this.suppliers);
    })
  }
  getVariants() {
    this.purchaseService.productVariant().subscribe((res: any) => {
      console.log(res);
      this.variants = res;
    })
  }

  supplierAddress: any;
  selectedAddress: string = ''

  oncheck(event: any) {
    console.log(event);
    const selectedItemId = event.id;
    console.log(selectedItemId);

    //call detail api
    this.contactService.getSupplierById(selectedItemId).subscribe(res => {
      console.log(res);
      this.supplierAddress = res;
      this.selectedAddress = this.supplierAddress.address[0];
      console.log(this.selectedAddress);
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
    console.log(selectedItemId);
    const barcode = (this.purchaseForm.get('purchase_cart') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      barcode: selectedItemId
    });
  }
  loader = false;
  getRes: any;
  submit() {
    console.log(this.purchaseForm.value);
    if (this.purchaseForm.valid) {
      this.loader = true;
      let formdata: any = new FormData();
      formdata.append('supplier', this.purchaseForm.get('supplier')?.value);
      formdata.append('order_date', this.purchaseForm.get('order_date')?.value);
      formdata.append('order_no', this.purchaseForm.get('order_no')?.value);
      formdata.append('shipping_date', this.purchaseForm.get('shipping_date')?.value);
      formdata.append('shipping_note', this.purchaseForm.get('shipping_note')?.value);
      formdata.append('sub_total', this.purchaseForm.get('sub_total')?.value);
      formdata.append('total_tax', this.purchaseForm.get('total_tax')?.value);
      formdata.append('total_discount', this.purchaseForm.get('total_discount')?.value);
      formdata.append('round_off', this.purchaseForm.get('round_off')?.value);
      formdata.append('total', this.purchaseForm.get('total')?.value);
      formdata.append('note', this.purchaseForm.get('note')?.value);

      // nested addrs data 
      const cartArray = this.purchaseForm.get('purchase_cart') as FormArray;
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
      formdata.append('purchase_cart', JSON.stringify(cartData));

      this.purchaseService.updatePurchase(formdata, this.id).subscribe(res => {
        console.log(res);
        this.getRes = res;
        if (this.getRes.IsSuccess == "True") {
          this.toastrService.success(this.getRes.msg);
          this.router.navigate(['//purchase/purchaselist'])
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
    console.log(index);
    console.log(value?.sku);
    this.barcode[index] = value.sku;
    console.log(this.barcode[index]);
    console.log(this.barcode);

    this.v_id = value.id;
    const barcode = (this.purchaseForm.get('purchase_cart') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      barcode: value.id
    });
    this.searchProduct('someQuery', '');
  };

  searchs: any[] = [];
  Qty: any[] = []
  productName: any[] = [];
  isProduct = true;
  staticValue: string = 'Static Value';

  searchProduct(event: any, index: any) {
    console.log(event);
    // const searchValue = event.target.value;
    // console.log(searchValue);
    if (event) {
      this.purchaseService.searchProduct(event).subscribe((res: any) => {
        this.searchs = res;
        // this.productOption = res;
        console.log(this.searchs);
        this.productName[index] = this.searchs[0].product_title;
        console.log(this.productName);
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

  // search result 
  titlee: any;
  searchSupplier() {
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      this.suppliers = this.suppliers.filter(res => {
        console.log(res);
        console.log(res.title.toLocaleLowerCase());
        console.log(res.title.match(this.titlee));
        return res.title.match(this.titlee);
      })
    }
  }


}
