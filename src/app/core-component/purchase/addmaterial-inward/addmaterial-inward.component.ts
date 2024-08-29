import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription, debounceTime, map, startWith } from 'rxjs';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';

import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { MatDialog } from '@angular/material/dialog';
import { PrintMaterialInwardComponent } from '../print-material-inward/print-material-inward.component';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
@Component({
  selector: 'app-addmaterial-inward',
  templateUrl: './addmaterial-inward.component.html',
  styleUrls: ['./addmaterial-inward.component.scss']
})
export class AddmaterialInwardComponent implements OnInit {
  searchControl = new FormControl();
  searchResults: any[] = [];

  totalQty: any;
  subTotal: any;
  discount: any;
  totalTax: any;
  roundOff: any;
  isFormCartInvalid = false;
  subscriptions: Subscription[] = [];

  constructor(private purchaseService: PurchaseServiceService, private fb: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private contactService: ContactService,
    private coreService: CoreService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private commonService: CommonServiceService) {
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

  materialForm!: FormGroup;
  minDate: string = '';
  maxDate: string = '';
  materialMinDate: string = '';
  materialMaxDate: string = '';
  get f() {
    return this.materialForm.controls;
  }

  subcategoryList;
  loading: boolean = false;
  ngOnInit(): void {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-indexed
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const defaultDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;

    this.materialForm = this.fb.group({
      party: new FormControl('', [Validators.required]),
      purchase_order: new FormControl('',),
      po_date: new FormControl(defaultDateTime),
      material_inward_date: new FormControl(defaultDateTime, [Validators.required]),
      material_inward_no: new FormControl('', [Validators.required]),
      shipping_note: new FormControl(''),
      recieved_by: new FormControl('', [Validators.required]),
      material_inward_cart: this.fb.array([]),
      total: new FormControl('',),
      export: new FormControl(''),
      note: new FormControl(''),
      status: new FormControl(''),
      product_type: new FormControl('')
    });
    this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );

    const financialYear = localStorage.getItem('financialYear');

    this.poDateValidation(financialYear);
    this.materialDateValidation(financialYear);

    this.supplierControl.valueChanges.subscribe((res) => {
      if (res.length >= 3) {
        this.getSuuplier(res);
      } else {
        this.suppliers = [];
        this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value, true))
        );
      }
    })

    this.filteredVariants = this.variantControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filtr(value, true))
    )
    // this.getVariants();
    // this.getPurchase();
    this.getprefix();
    this.getCategory();


    this.loading = true;
    this.route.params.subscribe(params => {
      const orderType = params['type'];
      const orderId = params['orderId'];
      console.log(orderType); // Output: homeDelivery
      console.log(orderId); // Output: ABC123 (if provided)
      // this.api.company_details().subscribe({
      //   next: (res: any) => {
      //     this.company = res;
      //     console.log(res, 'company');
      //   },
      //   error: (error) => {
      //     console.log('error in company');
      //   }
    })
  }

  materialDateValidation(financialYear) {
    const dateControl = this.materialForm.get('material_inward_date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDatesForDateTime(dateControl, financialYear);
    this.materialMinDate = formattedMinDate;
    this.materialMaxDate = formattedMaxDate;
  }

  poDateValidation(financialYear) {
    const dateControl = this.materialForm.get('po_date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDatesForDateTime(dateControl, financialYear);
    this.minDate = formattedMinDate;
    this.maxDate = formattedMaxDate;
  }

  prefixNo: any;
  getprefix() {
    this.purchaseService.getMaterialInwardPrefix().subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        // this.prefixNo = res.prefix;
        this.prefixNo = res?.data;
        this.materialForm.get('material_inward_no').patchValue(this.prefixNo[0]?.id);
      } else {
        this.toastrService.error(res.msg);
      }
    }, err => {
      this.toastrService.error(err.error.msg)
    })
  }
  get supplier() {
    return this.materialForm.get('party') as FormControl;
  }
  material_inward_cart(): FormGroup {
    return this.fb.group({
      barcode: (0),
      variant_name: (''),
      qty: (0),
      po_qty: (0),
      mrp: (0),
      // unit_cost:(0)
    })
  }
  getCart(): FormArray {
    return this.materialForm.get('material_inward_cart') as FormArray;
  }
  isCart = false;
  addCart() {
    this.getCart().push(this.material_inward_cart());
    this.isCart = false;
    this.myControls.push(new FormControl());
  }
  removeCart(i: any) {
    this.getCart().removeAt(i);
    if (this.materialForm.value?.material_inward_cart?.length == 0) {
      this.isCart = true;
    }
  }
  supplierList: any;

  setupValueChanges() {
    const cartArray = this.getCart();
    cartArray.controls.forEach((cartItem, index) => {
      this.subscriptions.push(
        cartItem.valueChanges.subscribe((value) => {
          this.isFormCartInvalid = false;
        })
      );
    });
  }

  getSuuplier(query) {
    this.purchaseService.getSupplier(query).pipe(debounceTime(2000)).subscribe((res: any) => {
      this.suppliers = res;
      this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value, true))
      );
    })
  }

  getVariants() {
    this.purchaseService.productVariant().subscribe((res: any) => {
      // console.log(res);
      this.variants = res;
    })
  }
  purchaseList: any;
  getPurchase() {
    this.purchaseService.getPurchase().subscribe(res => {
      this.purchaseList = res;
      // console.log(this.purchaseList);
    })
  }

  supplierAddress: any;
  selectedAddressBilling: any;
  selectedAddressShipping: any;
  selectBatch: any;
  supplierId: any;
  oncheck(event: any, data) {
    // console.log(event);
    console.log(data);
    const selectedItemId = event;
    // console.log(selectedItemId);
    this.supplierId = event;
    //call detail api
    let userId = data?.userid?.id ? data?.userid?.id : ''
    this.purchaseService.getPurchaseOrderByUserId(userId).subscribe(res => {
      this.purchaseList = res;
    })

    this.contactService.getSupplierById(selectedItemId).subscribe(res => {
      // console.log(res);
      this.getVariant('', '', '')
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
    const variants = this.materialForm.get('material_inward_cart') as FormArray;
    variants.clear();
    this.addCart();
    this.materialForm.patchValue({
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
  batchCartIndex: any;
  openModalBatch(i: number) {
    this.batchCartIndex = i
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
    const barcode = (this.materialForm.get('material_inward_cart') as FormArray).at(index) as FormGroup;
    let taxRupee = (address?.purchase_rate * address?.purchase_tax) / 100
    console.log(taxRupee);
    let discountRupees = (address?.purchase_rate * address?.discount) / 100
    console.log(discountRupees);
    let landingCost = (address?.purchase_rate - discountRupees) + taxRupee;
    console.log(landingCost);
    barcode.patchValue({
      mrp: address?.mrp || 0,
      po_qty: 1,
      qty: address?.stock || 1,
      // unit_cost:address?.cost_price || 0
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
  productDetails: any[] = [];
  oncheckVariant(event: any, index) {
    console.log(event);
    this.productDetails[index] = event
    const selectedItemId = event.id;
    console.log(event);
    this.selectedProductName = event.product_title
    this.selectBatch = event.batch

    const purchaseBillFormArray = this.getCart();
    const currentControl = purchaseBillFormArray.at(index) as FormGroup;
    currentControl.controls['barcode'].setValue('');

    const existingProductIndex = purchaseBillFormArray.controls.findIndex(control => control.value.barcode === selectedItemId);
    if (existingProductIndex !== -1) {
      const existingProduct = purchaseBillFormArray.at(existingProductIndex) as FormGroup;
      const currentQty = existingProduct.get('qty').value || 0;
      const currentPoQty = existingProduct.get('po_qty').value || 0;
      existingProduct.patchValue({
         qty: Number(currentQty) + 1 ,
         po_qty: Number(currentPoQty) + 1 
        });
      const currentControl = purchaseBillFormArray.at(index) as FormGroup;
      currentControl.reset();
      this.barcode[index] = '';
      currentControl.patchValue({
        barcode: 0,
        qty: 0,
        variant_name: 0,
        mrp: 0,
        po_qty: 0
    });
      this.myControls[index].reset();
      // this.updateTotal(existingProductIndex);
      // this.updateLandingCost(existingProductIndex);
      return;
    }

    this.barcode[index] = event.sku;
    this.v_id = event.id;
    this.getVariant('', '', '');

    const barcode = (this.materialForm.get('material_inward_cart') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      barcode: selectedItemId
    });
    if (event?.batch?.length > 0) {
      const barcode = (this.materialForm.get('material_inward_cart') as FormArray).at(index) as FormGroup;
      barcode.patchValue({
        mrp: event.batch[0]?.mrp,
        qty: 1,
        po_qty: 1,
        variant_name: event?.variant_name
        // unit_cost:event.batch[0]?.cost_price
      });
      this.isFormCartInvalid = false;
      console.log(event.batch);
    } else {
      const barcode = (this.materialForm.get('material_inward_cart') as FormArray).at(index) as FormGroup;
      barcode.patchValue({
        mrp: event.batch[0]?.mrp || 0,
        qty: 1 || 0,
        po_qty: 0,
        variant_name: event?.variant_name
        // unit_cost: event.batch[0]?.cost_price || 0,
      });
    }
  }


  getRes: any;
  loader = false;
  loaderCreate = false;
  loaderPrint = false;
  loaderDraft = false;
  formDetails: any;
  formId: any;

  checkCartValidationSync(): boolean {
    const cartTotal = this.calculateTotal();
    const isValid = cartTotal > 0;
    return isValid;
}

  checkCartValidation() {
    const cartTotal = this.calculateTotal();
    console.log(cartTotal);
    if(cartTotal === 0){
      this.toastrService.error('Please add the Product in the cart', '', { timeOut: 1000 });
      this.isFormCartInvalid = true;
      return
    } else {
      this.isFormCartInvalid = false;
    }
  }

  submit(type: any) {
    this.checkCartValidation();
    if(this.checkCartValidationSync()){
    this.formDetails = this.materialForm.value;
    console.log(this.formDetails);
    if (this.materialForm.valid) {
      if (type == 'new') {
        this.loaderCreate = true;
      } else if (type == 'save') {
        this.loader = true;
      } else if (type == 'print') {
        this.loaderPrint = true;
      } else if (type == 'draft') {
        this.loaderDraft = true;
      }
      let formdata: any = new FormData();
      formdata.append('party', this.materialForm.get('party')?.value);
      formdata.append('purchase_order', this.materialForm.get('purchase_order')?.value);
      formdata.append('po_date', this.materialForm.get('po_date')?.value);
      formdata.append('material_inward_date', this.materialForm.get('material_inward_date')?.value);
      formdata.append('material_inward_no', this.materialForm.get('material_inward_no')?.value);
      formdata.append('shipping_note', this.materialForm.get('shipping_note')?.value);
      formdata.append('recieved_by', this.materialForm.get('recieved_by')?.value);
      formdata.append('note', this.materialForm.get('note')?.value);
      formdata.append('total', this.materialForm.get('total')?.value);
      formdata.append('product_type', this.materialForm.get('product_type')?.value);
      if (type == 'draft') {
        formdata.append('status', 'Draft');
      }
      // nested addrs data 
      // const cartArray = this.materialForm.get('material_inward_cart') as FormArray;
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
      // formdata.append('material_inward_cart', JSON.stringify(cartData));
      const cartArray = this.materialForm.get('material_inward_cart') as FormArray;
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
      formdata.append('material_inward_cart', JSON.stringify(cartData));
      this.purchaseService.addMaterial(formdata).subscribe(res => {
        this.getRes = res;
        if (this.getRes.success) {
          // this.router.navigate(['//purchase/material-Inward-list'])
          if (type == 'new') {
            this.loaderCreate = false;
            this.materialForm.reset();
            this.ngOnInit()
            this.supplierControl.reset()
          }
          else if (type == 'print') {
            this.toastrService.success(this.getRes.msg, '', { timeOut: 2000, });
            this.loaderPrint = false;
            this.router.navigate(['//purchase/material-InwardDetails/' + this.getRes.id])
            // setTimeout(() => {
            //   // this.materialForm.reset()
            //   // this.ngOnInit()
            //   this.supplierControl.reset();
            // }, 3000);
          }
          else if (type == 'draft') {
            this.loaderDraft = false;
            this.toastrService.success(this.getRes.msg, '', { timeOut: 2000, });
            this.router.navigate(['//purchase/material-Inward-list'])
          }
          else {
            this.loader = false;
            this.toastrService.success(this.getRes.msg, '', { timeOut: 2000, });
            this.router.navigate(['//purchase/material-Inward-list'])
          }
        } else {
          if (type == 'new') {
            this.loaderCreate = false;
          } else if (type == 'save') {
            this.loader = false;
          } else if (type == 'print') {
            this.loaderPrint = false;
          } else if (type == 'draft') {
            this.loaderDraft = false;
          }
        }
      }, err => {
        if (type == 'new') {
          this.loaderCreate = false;
        } else if (type == 'save') {
          this.loader = false;
        } else if (type == 'print') {
          this.loaderPrint = false;
        } else if (type == 'draft') {
          this.loaderDraft = false;
        }
      })
    } else {
      this.materialForm.markAllAsTouched()
      this.toastrService.error('Please Fill All The Required Fields', '', { timeOut: 1000 })
    }
  }
  }

  openDialog() {
    this.loaderPrint = false;
    this.dialog.open(PrintMaterialInwardComponent, {
      height: '100%',
      data: this.formId
    });
  }


  discountt(index: number) {
    return this.getCart().controls[index].get('discount');
  }

  get material_inward_date() {
    return this.materialForm.get('material_inward_date');
  }
  get material_inward_no() {
    return this.materialForm.get('material_inward_no');
  }
  get recieved_by() {
    return this.materialForm.get('recieved_by');
  }
  get shipping_note() {
    return this.materialForm.get('shipping_note');
  }
  get purchase_order() {
    return this.materialForm.get('purchase_order');
  }
  private _filter(value: string | number, include: boolean): any[] {
    // console.log(value);
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredSuppliers = include
      ? this.suppliers.filter(supplier => supplier.name.toLowerCase().includes(filterValue) || supplier.company_name.toLowerCase().includes(filterValue))
      : this.suppliers.filter(supplier => !supplier.name.toLowerCase().includes(filterValue) || supplier.company_name.toLowerCase().includes(filterValue));
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
  staticValue: string = 'Static Value';
  searchs: any[] = [];
  productName: any[] = [];
  isProduct = true;
  isSearch = false;
  searchProduct(event: any, index: any) {
    // console.log(event);
    // const searchValue = event.target.value;
    // console.log(searchValue);
    this.isSearch = true;
    if (event) {
      this.purchaseService.searchProduct(event).subscribe((res: any) => {
        this.searchs = res;
        this.isSearch = false;
        this.productOption = res;
        // console.log(this.searchs);
        this.productName[index] = this.searchs[0].product_title;
        // console.log(this.productName);
        this.check = true;
        const barcode = (this.materialForm.get('material_inward_cart') as FormArray).at(index) as FormGroup;
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
  calculateTotalPOQty(): number {
    let totalQty = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const qtyControl = this.getCart().controls[i].get('po_qty');
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
  calculateTotalUnitCost(): number {
    let totalunitCost = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const unitCostControl = this.getCart().controls[i].get('unit_cost') || 0;
      if (unitCostControl) {
        totalunitCost += +unitCostControl.value;
      }
    }
    return totalunitCost;
  }
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
      const unitCostControl = this.getCart().controls[i].get('mrp') || 0;
      if (qtyControl && unitCostControl) {
        const qty = +qtyControl.value;
        const unitCost = +unitCostControl.value;
        const subtotal = unitCost * qty;
        total += subtotal;
      }
    }
    return total;
  }
  calculateTotalEveryIndex(index: number): number {
    const cartItem = this.getCart().controls[index];
    const qty = +cartItem.get('qty').value;
    const mrp = +cartItem.get('unit_cost').value || 0;
    const subtotal = mrp * qty;
    return subtotal;
  }

  clearForm() {
    this.materialForm.reset();
    this.supplierControl.reset()
  }
  printForm(): void {
    const printContents = document.getElementById('debitNote').outerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  category: any;
  subcategory: any;
  searc: any;
  myControls: FormControl[] = [];
  variantList: any[] = [];
  getVariant(search: any, index: any, barcode: any) {
    this.isSearch = true;
    console.log(search);
    if (this.selectData.length > 0 || this.selectSubCate.length > 0) {
      if (this.selectData.length > 0) {
        this.category = JSON.stringify(this.selectData);
        console.log(this.category);
      } else {
        this.category = undefined
        console.log(this.category, 'else part');
      }
      if (this.selectSubCate.length > 0) {
        this.subcategory = JSON.stringify(this.selectSubCate)
      } else {
        this.subcategory = undefined
      }
      this.purchaseService.filterVariant(this.supplierId, this.category, this.subcategory, search).subscribe((res: any) => {
        console.log(res);
        this.isSearch = false;
        this.variantList = res;
        console.log(this.variantList);
        if (barcode === 'barcode') {
          this.oncheckVariant(res[0], index);
          this.myControls[index].setValue(res[0].product_title);
        }
        if (search) {
          //barcode patch
          this.searchs = res;
          this.productOption = res;
          // console.log(this.searchs);
          this.productName[index] = this.searchs[0]?.product_title;
          // console.log(this.productName);
          this.check = true;
          const barcode = (this.materialForm.get('material_inward_cart') as FormArray).at(index) as FormGroup;
          barcode.patchValue({
            barcode: this.searchs[0].id
          });
        }
      });
    }
    else {
      this.purchaseService.filterVariant(this.supplierId, this.category, this.subcategory, search).subscribe((res: any) => {
        console.log(res);
        this.isSearch = false;
        this.variantList = res;
        console.log(this.variantList);
        if (barcode === 'barcode') {
          this.oncheckVariant(res[0], index);
          this.myControls[index].setValue(res[0].product_title);
        }
        if (search) {
          //barcode patch
          this.searchs = res;
          this.productOption = res;
          // console.log(this.searchs);
          this.productName[index] = this.searchs[0]?.product_title;
          // console.log(this.productName);
          this.check = true;
          const barcode = (this.materialForm.get('material_inward_cart') as FormArray).at(index) as FormGroup;
          barcode.patchValue({
            barcode: this.searchs[0]?.id
          });
        }
      });
    }
  }


  categoryList: any[] = [];
  filteredCategoryList: any[] = [];
  searchCategory: string = '';
  getCategory() {
    this.coreService.getCategory().subscribe((res: any) => {
      this.categoryList = res;
      this.filteredCategoryList = [...this.categoryList];
    })
  }
  filterCategory() {
    if (this.searchCategory.trim() === '') {
      this.filteredCategoryList = [...this.categoryList];
    } else {
      this.filteredCategoryList = this.categoryList.filter(product =>
        product?.title?.toLowerCase().includes(this.searchCategory.toLowerCase())
      );
    }
  }

  SubcategoryList: any[] = [];
  filteredSubCategoryList: any[] = [];
  searchSubCategory: string = '';
  getSubCategory(val: any) {
    this.coreService.getSubcategoryByCategory(val).subscribe((res: any) => {
      this.SubcategoryList = res;
      this.filteredSubCategoryList = [...this.SubcategoryList];
    })
  }
  filterSubCategory() {
    if (this.searchSubCategory.trim() === '') {
      this.filteredSubCategoryList = [...this.SubcategoryList];
    } else {
      this.filteredSubCategoryList = this.SubcategoryList.filter(product =>
        product?.title?.toLowerCase().includes(this.searchSubCategory.toLowerCase())
      );
    }
  }
  selectData: any[] = []
  SelectedProduct(variant: any) {
    // this.selectData.push(variant)
    const index = this.selectData.indexOf(variant);
    if (index !== -1) {
      this.selectData.splice(index, 1);
    } else {
      this.selectData.push(variant);
    }
    console.log(this.selectData, 'selected data');

    this.getVariant('', '', '')
  }
  selectSubCate: any[] = []
  SelectedProductSubCat(variant: any) {
    // this.selectData.push(variant)
    const index = this.selectSubCate.indexOf(variant);
    if (index !== -1) {
      this.selectSubCate.splice(index, 1);
    } else {
      this.selectSubCate.push(variant);
    }
    console.log(this.selectSubCate, 'selected data');
    this.getVariant('', '', '')
  }
  //dropdown auto close stop
  onLabelClick(event: Event) {
    // Prevent the event from propagating to the dropdown menu
    event.stopPropagation();
  }

  // print and save 
  loaderPdf = false;
  generatePdf() {
    this.loaderPdf = true;
    const elementToCapture = document.getElementById('debitNote');
    if (elementToCapture) {
      html2canvas(elementToCapture).then((canvas) => {
        this.loaderPdf = false;
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const width = pdf.internal.pageSize.getWidth();
        const height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
        pdf.save('addMaterialInward.pdf');
      });
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
