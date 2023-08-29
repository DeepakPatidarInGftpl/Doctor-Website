import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';

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

  constructor(private purchaseService: PurchaseServiceService, private fb: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private contactService:ContactService) {
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
  get f() {
    return this.materialForm.controls;
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

    this.materialForm = this.fb.group({
      party: new FormControl('', [Validators.required]),
      purchase_order: new FormControl('', [Validators.required]),
      po_date: new FormControl(defaultDateTime),
      material_inward_date: new FormControl(defaultDateTime, [Validators.required]),
      material_inward_no: new FormControl('',[Validators.required]),
      shipping_note: new FormControl(''),
      recieved_by: new FormControl('',[Validators.required,]),
      material_inward_cart: this.fb.array([]),
      total: new FormControl('', ),
      export:new FormControl(''),
      note: new FormControl(''),
      status:new FormControl('')
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
    this.getprefix();
  }
  prefixNo: any;
  getprefix() {
    this.purchaseService.getMaterialInwardPrefix().subscribe((res: any) => {
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
  get supplier() {
    return this.materialForm.get('party') as FormControl;
  }
  material_inward_cart(): FormGroup {
    return this.fb.group({
      barcode: (''),
      qty: (''),
      po_qty: (''),
      mrp: (''),
  
    })
  }
  getCart(): FormArray {
    return this.materialForm.get('material_inward_cart') as FormArray;
  }
  addCart() {
    this.getCart().push(this.material_inward_cart())
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
  oncheck(event: any) {
    // console.log(event);
    const selectedItemId = event; // Assuming the ID field is 'item_id'
    // console.log(selectedItemId);
   //call detail api
   this.contactService.getSupplierById(selectedItemId).subscribe(res => {
    // console.log(res);
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
    const barcode = (this.materialForm.get('material_inward_cart') as FormArray).at(index) as FormGroup;
    let taxRupee = (address?.purchase_rate * address?.purchase_tax) / 100
    console.log(taxRupee);
    let discountRupees = (address?.purchase_rate * address?.discount) / 100
    console.log(discountRupees);
    let landingCost = (address?.purchase_rate - discountRupees) + taxRupee;
    console.log(landingCost); 
    barcode.patchValue({
      mrp: address?.mrp,
      // po_qty: address?.stock,
      qty: address?.stock,
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
    const barcode = (this.materialForm.get('material_inward_cart') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      barcode: selectedItemId
    });

    if (event.batch.length > 0) {
      const barcode = (this.materialForm.get('material_inward_cart') as FormArray).at(index) as FormGroup;
      barcode.patchValue({
        mrp: event.batch[0]?.mrp,
        qty: event.batch[0]?.stock,
      });

      console.log(event.batch);
    }
  }

  getRes: any;
  loader = false;
  submit(type: any) {
    // console.log(this.materialForm.value);
    if (this.materialForm.valid) {

      this.loader = true;
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
      if (type == 'draft') {
        formdata.append('status', 'draft');
      }
      // nested addrs data 
      const cartArray = this.materialForm.get('material_inward_cart') as FormArray;
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
      formdata.append('material_inward_cart', JSON.stringify(cartData));
      this.purchaseService.addMaterial(formdata).subscribe(res => {
        // console.log(res);
        this.getRes = res;
        if (this.getRes.IsSuccess == "True") {
          this.loader = false;
          this.toastrService.success(this.getRes.msg);
          // this.router.navigate(['//purchase/material-Inward-list'])
          if (type == 'new') {
            this.materialForm.reset()
            this.ngOnInit()
            this.supplierControl.reset()
          } else if (type == 'print') {
            this.printForm()
            setTimeout(() => {
              this.materialForm.reset()
              this.ngOnInit()
              this.supplierControl.reset()
            }, 3000);
          }
          else {
            this.router.navigate(['//purchase/material-Inward-list'])
          }
        }else{
          this.loader=false;
        }
      },err=>{
        this.loader=false
      })
    } else {
      this.materialForm.markAllAsTouched()
    }
  }
  discountt(index: number) {
    return this.getCart().controls[index].get('discount');
  }
 
  get material_inward_date() {
    return this.materialForm.get('material_inward_date') ;
  }
  get material_inward_no() {
    return this.materialForm.get('material_inward_no') ;
  }
  get recieved_by() {
    return this.materialForm.get('recieved_by') ;
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
    // console.log(this.barcode[index]);
    // console.log(this.barcode);

    this.v_id = value.id;
    const barcode = (this.materialForm.get('material_inward_cart') as FormArray).at(index) as FormGroup;
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
  // calculateTotalDiscount(): number {
  //   let totalDiscount = 0;
  //   for (let i = 0; i < this.getCart().controls.length; i++) {
  //     const discountControl = this.getCart().controls[i].get('discount');
  //     if (discountControl) {
  //       totalDiscount += +discountControl.value;
  //     }
  //   }
  //   return totalDiscount;
  // }
  // calculateTotalPurchase(): number {
  //   let totalPurchase = 0;
  //   for (let i = 0; i < this.getCart().controls.length; i++) {
  //     const purchaseControl = this.getCart().controls[i].get('purchase_rate');
  //     if (purchaseControl) {
  //       totalPurchase += +purchaseControl.value;
  //     }
  //   }
  //   return totalPurchase;
  // }
  // calculateTotalTax(): number {
  //   let totalTax = 0;
  //   for (let i = 0; i < this.getCart().controls.length; i++) {
  //     const taxControl = this.getCart().controls[i].get('tax');
  //     if (taxControl) {
  //       totalTax += +taxControl.value;
  //     }
  //   }
  //   return totalTax;
  // }
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
      if (qtyControl && mrpControl) {
        const qty = +qtyControl.value;
        const mrp = +mrpControl.value;
        const subtotal = mrp * qty;
        // const taxAmount = (subtotal * tax) / 100;
        // const discountAmount = (subtotal * discount) / 100;

        total += subtotal;
      }
    }
    return total;
  }
  calculateTotalEveryIndex(index: number): number {
    const cartItem = this.getCart().controls[index];
    const qty = +cartItem.get('qty').value;
    const mrp = +cartItem.get('mrp').value;
    const subtotal = mrp * qty;
    console.log(subtotal);
    
    return subtotal;
  }

  clearForm() {
    this.materialForm.reset();
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
