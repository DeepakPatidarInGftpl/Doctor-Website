import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-updatepurchase-bill',
  templateUrl: './updatepurchase-bill.component.html',
  styleUrls: ['./updatepurchase-bill.component.scss']
})
export class UpdatepurchaseBillComponent implements OnInit {

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
    private Arout: ActivatedRoute) {
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

  puchaseBillForm!: FormGroup;
  get f() {
    return this.puchaseBillForm.controls;
  }

  subcategoryList;
  id: any;
  getresbyId: any;
  supplierAddress:any;
  selectedAddress: string = ''
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.supplierControl.setValue('Loading...'); 
    this.myControls = new FormArray([]);
    this.puchaseBillForm = this.fb.group({
      party: new FormControl('', [Validators.required]),
      supplier_bill_date: new FormControl('', [Validators.required]),
      refrence_bill_no: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      supplier_bill_no: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      material_inward_no: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      payment_term: new FormControl(''),
      due_date: new FormControl('', [Validators.required]),
      reverse_charge: new FormControl('',),
      shipping_date: new FormControl('', [Validators.required]),
      export: new FormControl('', [Validators.required]),
      // selling_price_online: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      // selling_price_offline: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      // dealer_price: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      // employee_price: new FormControl('', [Validators.pattern(/^[0-9]*$/)]),
      status: new FormControl(''),
      purchase_bill: this.fb.array([]),
      additional_charges:this.fb.array([]),
      // total_tax: new FormControl('', ),
      // total_discount: new FormControl('', ),
      // sub_total: new FormControl('', ),
      // round_off: new FormControl('', ),
      note: new FormControl(''),
      total: new FormControl(''),
      additional_charge: new FormControl(''),
      // additional_discount: new FormControl('', [Validators.pattern(/^(100|[0-9]{1,2})$/)])
    });

    this.purchaseService.getPurchaseBillById(this.id).subscribe(res => {
      // console.log(res);
      this.getresbyId = res;
      this.puchaseBillForm.patchValue(res);
      this.puchaseBillForm.get('party')?.patchValue(res?.party.id);
      this.puchaseBillForm.get('material_inward_no')?.patchValue(res?.material_inward_no?.id);
      this.puchaseBillForm.setControl('purchase_bill', this.udateCart(res?.cart));
      this.displaySupplierName(res.party.id);
      this.supplierId=res.party.id;
      this.getVariant('','')

        //patch local-date
        const formatteddue_date = new Date(this.getresbyId?.due_date).toISOString().slice(0, 16);
        this.puchaseBillForm.get('due_date')?.patchValue(formatteddue_date);
       
        const formattedshipping_date = new Date(this.getresbyId?.shipping_date).toISOString().slice(0, 16);
        this.puchaseBillForm.get('shipping_date')?.patchValue(formattedshipping_date);      
               //call detail api
     this.contactService.getSupplierById(res.party.id).subscribe(res=>{
      // console.log(res);
      this.supplierAddress=res;
      this.supplierControl.setValue(res.company_name); 
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

    this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );
    this.filteredVariants = this.variantControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filtr(value, true))
    )
    this.getSuuplier();
    // this.getVariants();
    this.getPurchase();
    this.getMaterialInward();
    this.getPaymentTerms()
  }

  displaySupplierName(supplierId: number): void {
    // this.filteredSuppliers
    //   .pipe(
        // tap(data => console.log('Data emitted:', data)), // Add this line to check emitted data
    //     map(suppliers => suppliers.filter(supplier => supplier.id === supplierId))
    //   )
    //   .subscribe(matchedSuppliers => {
    //     if (matchedSuppliers.length > 0) {
    //       this.supplierControl.setValue(matchedSuppliers[0].name);
    //     }
    //   });
  }

  prefixNo: any;
  getprefix() {
    this.purchaseService.getPurchaseBillPrefix().subscribe((res: any) => {
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

  additionalData: any;
  getAdditionalDiscount() {
    this.purchaseService.getAdditionalCharge().subscribe(res => {
      console.log(res);
      this.additionalData = res;
    })
  }
  taxData: any;
  getTax() {
    this.purchaseService.getTax().subscribe(res => {
      this.taxData = res;
    })
  }
  value:any[]=[]
  getAdditional(data:any,j){
    console.log(data);
    this.purchaseService.getAdditionalCharge().subscribe((res:any) => {
      res.map((res:any)=>{
        if(data==res.additional_charge){
          this.value[j]=res.value
          console.log(this.value[j]);   
        }
      })
    })
  }
  udateCart(add: any): FormArray {
    let formarr = new FormArray([]);
    add.forEach((j: any, i) => {
      formarr.push(this.fb.group({
        barcode: j.barcode.id,
        qty: j.qty,
        unit_cost: j.unit_cost,
        mrp: j.mrp,
        discount: j.discount,
        tax: j.tax,
        landing_cost: j.landing_cost,
        selling_price_online: j.selling_price_online,
        selling_price_offline: j.selling_price_offline,
        dealer_price: j.dealer_price,
        employee_price: j.employee_price,
        // total: j.total,
        // discount_type:j.discount_type,
        additional_discount: j.additional_discount
        // total: j.total
      }))
      this.barcode[i] = j.barcode.sku;
      this.productName[i] = j.barcode.product_title;
      this.myControls.push(new FormControl(j?.barcode?.product_title));
    })
    return formarr
  }

  get supplier() {
    return this.puchaseBillForm.get('party') as FormControl;
  }
  discountt(index: number) {
    return this.getCart().controls[index].get('discount');
  }
  additional_discount(index:number){
    return this.getCart().controls[index].get('additional_discount')
  }
  purchase_bill(): FormGroup {
    return this.fb.group({
      barcode: (0),
      qty: (0),
      unit_cost: (0),
      mrp: (0),
      discount: new FormControl(0, [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      tax: (0),
      landing_cost: (0),
      selling_price_online: (0),
      selling_price_offline: (0),
      dealer_price: (0),
      employee_price: (0),
      additional_discount:new FormControl(0, [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
    })
  }
  getCart(): FormArray {
    return this.puchaseBillForm.get('purchase_bill') as FormArray;
  }
  addCart() {
    this.getCart().push(this.purchase_bill())
  }
  removeCart(i: any) {
    this.getCart().removeAt(i)
  }

  additional_charges():FormGroup{
    return this.fb.group({
      additional_charge:(0),
      value:(0),
      tax:(0)
    })
  }
  getAdditionalCharge():FormArray{
    return this.puchaseBillForm.get('additional_charges') as FormArray
  }
  addAdditionalCharge(){
    this.getAdditionalCharge().push(this.additional_charges())
  }
  removeAdditionalCharge(j:any){
    this.getAdditionalCharge().removeAt(j)
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
  materialList: any;
  getMaterialInward() {
    this.purchaseService.getMaterial().subscribe(res => {
      // console.log(res);
      this.materialList = res;
    })
  }
  paymentList: any;
  getPaymentTerms() {
    this.contactService.getPaymentTerms().subscribe(res => {
      // console.log(res);
      this.paymentList = res;
    })
  }
  selectedAddressBilling: any;
  selectedAddressShipping: any;
  selectBatch: any;
  supplierId:any;
  oncheck(event: any) {
    // console.log(event);
    const selectedItemId = event; // Assuming the ID field is 'item_id'
    // console.log(selectedItemId);
    this.supplierId=event;

    this.getVariant('','')
    if (this.getresbyId.cart.length >= 0) {
      const variants = this.puchaseBillForm.get('purchase_bill') as FormArray;
      variants.clear();
      this.addCart();
    }
    this.puchaseBillForm.patchValue({
      party: selectedItemId
    });
  //call detail api
  this.contactService.getSupplierById(selectedItemId).subscribe(res => {
    this.getPaymentTerms = res?.payment_terms?.id;
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
    
  }

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
    const barcode = (this.puchaseBillForm.get('purchase_bill') as FormArray).at(index) as FormGroup;
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
      unit_cost: address?.cost_price,
      landing_cost: landingCost,
      dealer_price:address?.selling_price_dealer,
      employee_price:address?.selling_price_employee,
      selling_price_offline:address?.selling_price_offline,
      selling_price_online:address?.selling_price_online,
      additional_discount:address?.additional_discount
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
    // console.log(selectedItemId);
    const barcode = (this.puchaseBillForm.get('purchase_bill') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      barcode: selectedItemId
    });
    if (event.batch.length > 0) {
      let discountRupees = (event.batch[0]?.cost_price * event.batch[0]?.discount) / 100
      console.log(discountRupees);
      let afterDiscountPrice=(event.batch[0]?.cost_price-discountRupees)
      let taxRupee: number = (afterDiscountPrice * event.batch[0]?.purchase_tax) / 100
      console.log(taxRupee);
      let landingCost = (event.batch[0]?.cost_price - discountRupees) + taxRupee;
      console.log(landingCost);
      barcode.patchValue({
        barcode: selectedItemId,
        mrp: event.batch[0]?.mrp,
        qty: event.batch[0]?.stock,
        tax: event.batch[0]?.purchase_tax,
        discount: event.batch[0]?.discount,
        unit_cost: event.batch[0]?.cost_price,
        landing_cost: landingCost,
        dealer_price:event.batch[0]?.selling_price_dealer,
        employee_price:event.batch[0]?.selling_price_employee,
        selling_price_offline:event.batch[0]?.selling_price_offline,
        selling_price_online:event.batch[0]?.selling_price_online,
        additional_discount:event.batch[0]?.additional_discount
      });

      console.log(event.batch);
    }
  }
  getRes: any;
  loader = false;
  submit(type: any) {
    // console.log(this.puchaseBillForm.value);
    if (this.puchaseBillForm.valid) {

      this.loader = true;
      let formdata: any = new FormData();
      formdata.append('party', this.puchaseBillForm.get('party')?.value);
      formdata.append('supplier_bill_date', this.puchaseBillForm.get('supplier_bill_date')?.value);
      formdata.append('refrence_bill_no', this.puchaseBillForm.get('refrence_bill_no')?.value);
      formdata.append('supplier_bill_no', this.puchaseBillForm.get('supplier_bill_no')?.value);
      formdata.append('material_inward_no', this.puchaseBillForm.get('material_inward_no')?.value);
      formdata.append('payment_term', this.puchaseBillForm.get('payment_term')?.value);
      formdata.append('due_date', this.puchaseBillForm.get('due_date')?.value);
      formdata.append('reverse_charge', this.puchaseBillForm.get('reverse_charge')?.value);
      formdata.append('shipping_date', this.puchaseBillForm.get('shipping_date')?.value);
      formdata.append('export', this.puchaseBillForm.get('export')?.value);
      
      // formdata.append('selling_price_online', this.puchaseBillForm.get('selling_price_online')?.value);
      // formdata.append('selling_price_offline', this.puchaseBillForm.get('selling_price_offline')?.value);
      // formdata.append('dealer_price', this.puchaseBillForm.get('dealer_price')?.value);
      // formdata.append('employee_price', this.puchaseBillForm.get('employee_price')?.value);
      // formdata.append('status', this.puchaseBillForm.get('status')?.value);
      formdata.append('note', this.puchaseBillForm.get('note')?.value);
      formdata.append('total', this.puchaseBillForm.get('total')?.value);
      formdata.append('additional_charge', this.puchaseBillForm.get('additional_charge')?.value);
     if (type == 'draft') {
        formdata.append('status', 'draft');
      }

      // nested addrs data 
      // const cartArray = this.puchaseBillForm.get('purchase_bill') as FormArray;
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
      // formdata.append('purchase_bill', JSON.stringify(cartData));

      const cartArray = this.puchaseBillForm.get('purchase_bill') as FormArray;
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
      formdata.append('purchase_bill', JSON.stringify(cartData));


      this.purchaseService.updatePurchaseBill(formdata, this.id).subscribe(res => {
        // console.log(res);
        this.getRes = res;
        if (this.getRes.IsSuccess == "True") {
          this.loader = false;
          this.toastrService.success(this.getRes.msg);
          // this.router.navigate(['//purchase/purchase-bill-list'])
          if (type == 'new') {
            this.puchaseBillForm.reset()
            this.supplierControl.reset()
            this.ngOnInit()
          } else if (type == 'print') {
            this.printForm()
            setTimeout(() => {
              this.puchaseBillForm.reset()
              this.supplierControl.reset()
              this.ngOnInit()
            }, 3000);
          }
          else {
            this.router.navigate(['//purchase/purchase-bill-list'])
          }
        }
      })
    } else {
      this.puchaseBillForm.markAllAsTouched()
    }
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
    const barcode = (this.puchaseBillForm.get('purchase_bill') as FormArray).at(index) as FormGroup;
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
        // this.productOption = res;
        // console.log(this.searchs);
        this.productName[index] = this.searchs[0].product_title;
        // console.log(this.productName);
        this.check = true;
        const barcode = (this.puchaseBillForm.get('purchase_bill') as FormArray).at(index) as FormGroup;
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
  calculateTotalAdditionalDiscount(): number {
    let totalQty = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const qtyControl = this.getCart().controls[i].get('additional_discount');
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
    let totalQty = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const qtyControl = this.getCart().controls[i].get('unit_cost');
      if (qtyControl) {
        totalQty += +qtyControl.value;
      }
    }
    return totalQty;
  }
  calculateTotalDealerPrice(): number {
    let totalPurchase = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const purchaseControl = this.getCart().controls[i].get('dealer_price');
      if (purchaseControl) {
        totalPurchase += +purchaseControl.value;
      }
    }
    return totalPurchase;
  }
  calculateTotalEmployeePrice(): number {
    let totalPurchase = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const purchaseControl = this.getCart().controls[i].get('employee_price');
      if (purchaseControl) {
        totalPurchase += +purchaseControl.value;
      }
    }
    return totalPurchase;
  }
  calculateTotalSellingPriceOnline(): number {
    let totalPurchase = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const purchaseControl = this.getCart().controls[i].get('selling_price_online');
      if (purchaseControl) {
        totalPurchase += +purchaseControl.value;
      }
    }
    return totalPurchase;
  }
  calculateTotalSellingPriceOffline(): number {
    let totalPurchase = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const purchaseControl = this.getCart().controls[i].get('selling_price_offline');
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

  clearForm() {
    this.puchaseBillForm.reset();
    this.supplierControl.reset()
  }
  printForm(): void {
    const printContents = document.getElementById('purchaseForm').outerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }
  additionalTable = true
  displayAdditiionalTable() {
    this.additionalTable = false;
  }
  hideAdditiionalTable(){
    this.additionalTable = true;
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

  category:any;
  subcategory:any;
  searc:any;
  myControls: FormArray;
  variantList: any[] = []; 
    getVariant(search:any,index:any) {
      this.purchaseService.filterVariant(this.supplierId,this.category,this.subcategory,search).subscribe((res:any) => {
        console.log(res);
        this.variantList=res;
        console.log(this.variantList);
        if (search) {
           // barcode patch
           this.searchs = res;
           this.productOption = res;
           // console.log(this.searchs);
           this.productName[index] = this.searchs[0].product_title;
           // console.log(this.productName);
           this.check = true;
           const barcode = (this.puchaseBillForm.get('purchase_bill') as FormArray).at(index) as FormGroup;
           barcode.patchValue({
             barcode: this.searchs[0].id
           });
          }
      });
    }
}

