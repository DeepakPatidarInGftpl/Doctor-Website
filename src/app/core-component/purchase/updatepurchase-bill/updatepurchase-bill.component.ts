import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { tap } from 'rxjs/operators';
import { CoreService } from 'src/app/Services/CoreService/core.service';
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
    private Arout: ActivatedRoute,
    private coreService:CoreService) {
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
  supplierAddress: any;
  selectedAddress: string = ''
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.supplierControl.setValue('Loading...');
    this.myControls = new FormArray([]);
    this.puchaseBillForm = this.fb.group({
      party: new FormControl('', [Validators.required]),
      supplier_bill_date: new FormControl('', [Validators.required]),
      refrence_bill_no: new FormControl(''),
      supplier_bill_no: new FormControl('', [Validators.required,]),
      material_inward_no: new FormControl('', [Validators.required]),
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
      additional_charges: this.fb.array([]),
      tax_rate: this.fb.array([]),
      // total_tax: new FormControl('', ),
      // total_discount: new FormControl('', ),
      // sub_total: new FormControl('', ),
      round_off: new FormControl(''),
      note: new FormControl(''),
      total: new FormControl(''),
      additional_charge: new FormControl(''),
      // additional_discount: new FormControl('', [Validators.pattern(/^(100|[0-9]{1,2})$/)])
    });

    this.purchaseService.getPurchaseBillById(this.id).subscribe(res => {
      // console.log(res);
      this.getresbyId = res;
      this.puchaseBillForm.patchValue(res);
      this.puchaseBillForm.get('party')?.patchValue(res?.party?.id);
      this.puchaseBillForm.get('payment_term')?.patchValue(res?.payment_term?.id);
      this.puchaseBillForm.get('material_inward_no')?.patchValue(res?.material_inward_no?.id);
      this.puchaseBillForm.setControl('purchase_bill', this.udateCart(res?.cart));
      this.puchaseBillForm.setControl('tax_rate', this.udateTaxRate(res?.tax_rate));   
      this.displaySupplierName(res?.party?.id);
      this.supplierId = res?.party?.id;
      this.getVariant('', '','')
      this.totaladditionalCharge = res.additional_charge
      //patch local-date
      const formatteddue_date = new Date(this.getresbyId?.due_date).toISOString().slice(0, 16);
      this.puchaseBillForm.get('due_date')?.patchValue(formatteddue_date);
      this.puchaseBillForm.get('round_off')?.patchValue(this.getresbyId?.round_off)
      
      // const formattedshipping_date = new Date(this.getresbyId?.shipping_date).toISOString().slice(0, 16);
      // this.puchaseBillForm.get('shipping_date')?.patchValue(formattedshipping_date);
      
      const formattedsupplier_bill_date = new Date(this.getresbyId?.supplier_bill_date).toISOString().slice(0, 16);
      this.puchaseBillForm.get('supplier_bill_date')?.patchValue(formattedsupplier_bill_date);
      //call detail api
      this.contactService.getSupplierById(res.party.id).subscribe(res => {
        // console.log(res);
        this.supplierAddress = res;
        this.supplierControl.setValue(res.company_name);
        this.getprefix()
        this.supplierAddress.address.map((res: any) => {
          this.selectedAddressBilling = res
          // if (res.address_type == 'Billing') {
          //   this.selectedAddressBilling = res
          //   console.log(this.selectedAddressBilling);
          // } else if (res.address_type == 'Shipping') {
          //   this.selectedAddressShipping = res
          //   console.log(this.selectedAddressShipping);
          // }
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
    this.addAdditionalCharge();
    this.getAdditionalDiscount();
    this.getTax();
    this.getCategory()
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
      if (res.success == true) {
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
  value: any[] = []
  getAdditional(data: any, j) {
    console.log(data);
    this.purchaseService.getAdditionalCharge().subscribe((res: any) => {
      res.map((res: any) => {
        if (data == res.additional_charge) {
          this.value[j] = res.value
          console.log(this.value[j]);
        }
      })
    })
  }
  udateCart(add: any): FormArray {
    console.log(add);
    let formarr = new FormArray([]);
    add.forEach((j: any, i) => {
      const purchaseRate = j.unit_cost || 0;
      const taxPercentage = j.tax || 0;
      const landingCost= j.landing_cost || 0;
      // tax including & excluding
      if (j.tax == 18) {
        this.TotalWithoutTax[i] = j.unit_cost * j.qty;
        const calculatedTax = purchaseRate - (purchaseRate * (100 / (100 + taxPercentage)))
        this.taxIntoRupees[i] = calculatedTax;
        console.log(this.taxIntoRupees[i]);
      } else {
        this.TotalWithoutTax[i] = j.landing_cost * j.qty;
        let taxPrice = landingCost - (landingCost * (100 / (100 + taxPercentage)))
        this.taxIntoRupees[i] = taxPrice;
      }
      formarr.push(this.fb.group({
        barcode: j.barcode.id,
        qty: j.qty,
        unit_cost: j.unit_cost,
        mrp: j.mrp,
        discount: j.discount || 0,
        tax: j.tax || 0,
        landing_cost: j.landing_cost,
        selling_price_online: j.selling_price_online,
        selling_price_offline: j.selling_price_offline,
        dealer_price: j.dealer_price,
        employee_price: j.employee_price,
        total: j.total,
        // discount_type:j.discount_type,
        additional_discount: j.additional_discount

      }))
      this.coastprice[i] = j.unit_cost;
      this.totalCost[i] = j.total;
      this.landingCostEveryIndex[i] = j.landing_cost
      this.tax[i] = j.tax || 0;
      this.barcode[i] = j.barcode.sku;
      this.productName[i] = j.barcode.product_title;
      // this.myControl.setValue(j.barcode.product_title)
      this.myControls.push(new FormControl(j?.barcode?.product_title));

    })
    return formarr
  }

  udateTaxRate(add: any): FormArray {
    console.log(add);
    let formarr = new FormArray([]);
    add.forEach((j: any, i) => {
      formarr.push(this.fb.group({
        tax_rate: j.tax_rate || 0,
        taxable_amount: j.taxable_amount || 0,
        igst_amount: j.igst_amount || 0,
        cgst_amount: j.cgst_amount || 0,
        sgst_amount: j.sgst_amount || 0,
        total_tax: j.total_tax || 0,
      }))
    })
    return formarr
  }

  get supplier() {
    return this.puchaseBillForm.get('party') as FormControl;
  }
  discountt(index: number) {
    return this.getCart().controls[index].get('discount');
  }
  additional_discount(index: number) {
    return this.getCart().controls[index].get('additional_discount')
  }
  cart(): FormGroup {
    return this.fb.group({
      barcode: (0),
      qty: (1),
      unit_cost: (0),
      mrp: (0),
      discount: new FormControl(0, [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      tax: (0),
      landing_cost: (0),
      selling_price_online: (0),
      selling_price_offline: (0),
      dealer_price: (0),
      employee_price: (0),
      additional_discount: new FormControl(0, [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      total: (0)
    })
  }
  getCart(): FormArray {
    return this.puchaseBillForm.get('purchase_bill') as FormArray;
  }
  isCart=false;
  addCart() {
    this.getCart().push(this.cart());
    this.isCart=false;
  }
  removeCart(i: any) {
    this.getCart().removeAt(i);
    if(this.puchaseBillForm.value?.purchase_bill?.length==0){
      this.isCart=true
    }
  }

  additional_charges(): FormGroup {
    return this.fb.group({
      additional_charge: (0),
      value: (0),
      tax: (0),
      total: (0)
    })
  }
  getAdditionalCharge(): FormArray {
    return this.puchaseBillForm.get('additional_charges') as FormArray
  }
  addAdditionalCharge() {
    this.getAdditionalCharge().push(this.additional_charges())
  }
  removeAdditionalCharge(j: any) {
    this.getAdditionalCharge().removeAt(j)
  }
  taxRate(): FormGroup {
    return this.fb.group({
      tax_rate: (0),
      taxable_amount: (0),
      igst_amount: (0),
      cgst_amount: (0),
      sgst_amount: (0),
      total_tax: (0),
    })
  }

  getTaxRate(): FormArray {
    return this.puchaseBillForm.get('tax_rate') as FormArray;
  }
  addTaxRate() {
    this.getTaxRate().push(this.taxRate())
  }
  removeTax(i: any) {
    console.log('ghs');
    
    this.getTaxRate().removeAt(i)
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

       // select auto due date with time from days fields
       const today = new Date();
       const sevenDaysFromToday = new Date(today);
       sevenDaysFromToday.setDate(today.getDate() + this.paymentList?.days);
       const year = sevenDaysFromToday.getFullYear();
       const month = (sevenDaysFromToday.getMonth() + 1).toString().padStart(2, '0');
       const day = sevenDaysFromToday.getDate().toString().padStart(2, '0');
       const hours = sevenDaysFromToday.getHours().toString().padStart(2, '0');
       const minutes = sevenDaysFromToday.getMinutes().toString().padStart(2, '0');
       const defaultDateago7 = `${year}-${month}-${day}T${hours}:${minutes}`;
       this.puchaseBillForm.get('due_date').patchValue(defaultDateago7);
    })
  }
  selectedAddressBilling: any;
  selectedAddressShipping: any;
  selectBatch: any;
  supplierId: any;
  oncheck(event: any) {
    // console.log(event);
    const selectedItemId = event; // Assuming the ID field is 'item_id'
    // console.log(selectedItemId);
    this.supplierId = event;

    this.getVariant('', '','')
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

       // select auto due date with time from days fields
       const today = new Date();
       const sevenDaysFromToday = new Date(today);
       sevenDaysFromToday.setDate(today.getDate() + res?.payment_terms?.days);
       const year = sevenDaysFromToday.getFullYear();
       const month = (sevenDaysFromToday.getMonth() + 1).toString().padStart(2, '0');
       const day = sevenDaysFromToday.getDate().toString().padStart(2, '0');
       const hours = sevenDaysFromToday.getHours().toString().padStart(2, '0');
       const minutes = sevenDaysFromToday.getMinutes().toString().padStart(2, '0');
       const defaultDateago7 = `${year}-${month}-${day}T${hours}:${minutes}`;
       this.puchaseBillForm.get('due_date').patchValue(defaultDateago7);

      this.supplierAddress = res;
      this.supplierAddress.address.map((res: any) => {
        this.selectedAddressBilling = res
        // if (res.address_type == 'Billing') {
        //   this.selectedAddressBilling = res
        //   console.log(this.selectedAddressBilling);
        // } else if (res.address_type == 'Shipping') {
        //   this.selectedAddressShipping = res
        //   console.log(this.selectedAddressShipping);
        // }
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
      landing_cost: landingCost,
      dealer_price: address?.selling_price_dealer,
      employee_price: address?.selling_price_employee,
      selling_price_offline: address?.selling_price_offline,
      selling_price_online: address?.selling_price_online,
      additional_discount: address?.additional_discount
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

  // oncheckVariant(event: any, index) {
  //   const selectedItemId = event.id;
  //   console.log(event);
  //   this.selectedProductName = event.product_title
  //   this.selectBatch = event.batch
  //   console.log(event.batch.length);
  //   // console.log(selectedItemId);
  //   const barcode = (this.puchaseBillForm.get('purchase_bill') as FormArray).at(index) as FormGroup;
  //   barcode.patchValue({
  //     barcode: selectedItemId
  //   });
  //   if (event.batch.length > 0) {
  //     let discountRupees = (event.batch[0]?.cost_price * event.batch[0]?.discount) / 100
  //     console.log(discountRupees);
  //     let afterDiscountPrice=(event.batch[0]?.cost_price-discountRupees)
  //     let taxRupee: number = (afterDiscountPrice * event.batch[0]?.purchase_tax) / 100
  //     console.log(taxRupee);
  //     let landingCost = (event.batch[0]?.cost_price - discountRupees) + taxRupee;
  //     console.log(landingCost);
  //     barcode.patchValue({
  //       barcode: selectedItemId,
  //       mrp: event.batch[0]?.mrp,
  //       qty: event.batch[0]?.stock,
  //       tax: event.batch[0]?.purchase_tax,
  //       discount: event.batch[0]?.discount,
  //       unit_cost: event.batch[0]?.cost_price,
  //       landing_cost: landingCost,
  //       dealer_price:event.batch[0]?.selling_price_dealer,
  //       employee_price:event.batch[0]?.selling_price_employee,
  //       selling_price_offline:event.batch[0]?.selling_price_offline,
  //       selling_price_online:event.batch[0]?.selling_price_online,
  //       additional_discount:event.batch[0]?.additional_discount
  //     });

  //     console.log(event.batch);
  //   }
  // }
  originalCoastPrice: any;
  apiPurchaseTax: number;
  isTaxAvailable: any[] = [];
  taxIntoRupees: any[] = [];
  tax: any[] = [];
  batchDiscount: any;
  batchAdditionalDiscount: any
  totalDiscount: any;
  landingCost: any;
  batchCostPrice: any[] = [];
  oncheckVariant(event: any, index) {
    const selectedItemId = event.id;
    this.selectedProductName = event.product_title;
    this.selectBatch = event.batch;
    console.log(event.batch);
    this.apiPurchaseTax = event?.product?.purchase_tax?.amount_tax_slabs[0]?.tax?.tax_percentage || 0;
    console.log(this.apiPurchaseTax);
    this.batchDiscount = event.batch[0]?.discount || 0;
    this.batchAdditionalDiscount = event.batch[0]?.additional_discount || 0;
    this.totalDiscount = this.batchDiscount + this.batchAdditionalDiscount;
    this.isTaxAvailable[index] = event?.product?.purchase_tax_including;
    this.batchCostPrice[index] = event?.batch[0]?.cost_price || 0;
    if (event?.product?.purchase_tax_including == true) {
      let costprice = event?.batch[0]?.cost_price || 0;
      // landing cost
      let getDiscountPrice = (costprice * this.totalDiscount) / 100
      console.log(getDiscountPrice);
      let getCoastPrice = costprice - getDiscountPrice;
      console.log(getCoastPrice, 'getCoastPrice');
      this.landingCost = getCoastPrice;
      // cost price
      let taxPrice = getCoastPrice - (getCoastPrice * (100 / (100 + this.apiPurchaseTax)))
      console.log(taxPrice, 'taxprice');
      this.taxIntoRupees[index] = taxPrice || 0;
      this.originalCoastPrice = getCoastPrice - taxPrice;
    } else {
      let costprice = event?.batch[0]?.cost_price || 0;
      let purchaseTax = 18
      // cost price 
      let getDiscountPrice = (costprice * this.totalDiscount) / 100
      console.log(getDiscountPrice);
      let getCoastPrice = costprice - getDiscountPrice;
      this.originalCoastPrice = getCoastPrice
      // landing cost
      let taxPrice = getCoastPrice - (getCoastPrice * (100 / (100 + purchaseTax)))
      this.taxIntoRupees[index] = taxPrice || 0;
      let landingcost = getCoastPrice + taxPrice;
      this.landingCost = landingcost;
      console.log(landingcost);
    }
    if (event.batch.length > 0) {
      const barcode = (this.puchaseBillForm.get('purchase_bill') as FormArray).at(index) as FormGroup;
      this.tax[index] = this.apiPurchaseTax
      console.log(this.originalCoastPrice, 'this.originalCoastPrice');
      console.log(this.landingCost, 'this.landingCost');
      if (event?.product?.purchase_tax_including == true) {
        console.log(event.batch[0]?.mrp);

        barcode.patchValue({
          barcode: selectedItemId,
          mrp: event.batch[0]?.mrp,
          qty: event.batch[0]?.stock,
          tax: this.apiPurchaseTax,
          discount: event.batch[0]?.discount || 0,
          unit_cost: this.originalCoastPrice.toFixed(2),
          // landing_cost: landingCost,
          dealer_price: event.batch[0]?.selling_price_dealer,
          employee_price: event.batch[0]?.selling_price_employee,
          selling_price_offline: event.batch[0]?.selling_price_offline,
          selling_price_online: event.batch[0]?.selling_price_online,
          additional_discount: event.batch[0]?.additional_discount
        });
      } else {
        this.tax[index] = 18;
        barcode.patchValue({
          barcode: selectedItemId,
          mrp: event.batch[0]?.mrp,
          qty: event.batch[0]?.stock,
          tax: 18,
          discount: event.batch[0]?.discount || 0,
          unit_cost: event.batch[0]?.cost_price,
          // landing_cost: landingCost,
          dealer_price: event.batch[0]?.selling_price_dealer,
          employee_price: event.batch[0]?.selling_price_employee,
          selling_price_offline: event.batch[0]?.selling_price_offline,
          selling_price_online: event.batch[0]?.selling_price_online,
          additional_discount: event.batch[0]?.additional_discount
        });
      }
      console.log(event.batch);
    } else {
      this.tax[index] = 18
      const barcode = (this.puchaseBillForm.get('purchase_bill') as FormArray).at(index) as FormGroup;
      barcode.patchValue({
        barcode: selectedItemId,
        tax: 18,
      });
    }
    this.calculateTotalLandingCostEveryIndex(index);
    this.calculateTotal();
    this.calculateTotalEveryIndex(index);
    this.getgst(index)
  }

  // calculations
  coastprice: any[] = []
  landingPrice: any[] = []
  isdiscount: any[] = []
  getPurchaseCalculation(index: number) {
    console.log(this.coastprice[index]);
    this.batchCostPrice[index] = this.coastprice[index];
    console.log(this.batchCostPrice[index], 'index+', index);
    if (this.isTaxAvailable[index] == true) {
      let costprice = this.coastprice[index] || 0;
      // landing cost
      let getDiscountPrice = (costprice * this.totalDiscount) / 100
      console.log(getDiscountPrice);
      let getCoastPrice = costprice - getDiscountPrice;
      console.log(getCoastPrice, 'getCoastPrice');
      this.landingCost = getCoastPrice;
      // cost price 
      let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + this.apiPurchaseTax)))
      this.taxIntoRupees[index] = taxprice || 0;
      let purchasePrice = getCoastPrice - taxprice;
      this.originalCoastPrice = purchasePrice;
      console.log(this.originalCoastPrice);
      // this.coastprice[index] = this.originalCoastPrice.toFixed(2);
      // this.landingPrice[index]=this.landingCost.toFixed(2)
    } else {
      let costprice = this.coastprice[index] || 0;
      let purchaseTax = 18;
      // cost price 
      let getDiscountPrice = (costprice * this.totalDiscount) / 100
      console.log(getDiscountPrice, 'getDiscountPrice');
      let getCoastPrice = costprice - getDiscountPrice;
      this.originalCoastPrice = getCoastPrice;
      // this.coastprice[index] = this.originalCoastPrice.toFixed(2);
      console.log(this.coastprice[index]);
      // this.landingPrice[index]=this.landingCost.toFixed(2)
    }
  }
  userInputEntered: boolean[] = [];
  purchase(index) {
    this.userInputEntered[index] = true;
    const result = this.calculatePurchaseEveryIndex(index);
    this.coastprice[index] = result.toFixed(2);
    this.calculateTotalLandingCostEveryIndex(index)
    this.calculateTotalEveryIndex(index)
    this.getgstCostPrice(index)
    setTimeout(() => {
      this.calculateRoundoffValue()
    }, 2000);
  }
  calculatePurchaseEveryIndex(index: number): number {
    console.log('gfg');
    const cartItem = this.getCart().controls[index];
    const purchaseRateControl = cartItem.get('unit_cost');
    const taxPercentageControl = cartItem.get('tax');
    const discountPercentageControl = cartItem.get('discount');
    const additionDiscountPercentageControl = cartItem.get('additional_discount');
    this.batchCostPrice[index] = this.coastprice[index];
    if (purchaseRateControl && taxPercentageControl && discountPercentageControl) {
      if (this.isTaxAvailable[index] == true) {
        const discountPercentage = +discountPercentageControl.value || 0;
        const additionalDiscountPercentage = +additionDiscountPercentageControl.value || 0;
        const totalDiscount = discountPercentage + additionalDiscountPercentage;
        const taxPercentage = +taxPercentageControl.value || 0;
        const purchaseRate = +purchaseRateControl.value || 0;
        // landing cost
        let getDiscountPrice = (purchaseRate * totalDiscount) / 100
        let getCoastPrice = purchaseRate - getDiscountPrice;
        // cost price 
        let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + taxPercentage))) || 0
        this.taxIntoRupees[index] = taxprice || 0;
        let purchasePrice = getCoastPrice - taxprice;
        return purchasePrice;
      } else {
        const discountPercentage = +discountPercentageControl.value || 0;
        const additionalDiscountPercentage = +additionDiscountPercentageControl.value || 0;
        const totalDiscount = discountPercentage + additionalDiscountPercentage;
        const purchaseRate = +purchaseRateControl.value || 0;
        // cost price 
        let getDiscountPrice = (this.coastprice[index] * totalDiscount) / 100
        let getCoastPrice = this.coastprice[index] - getDiscountPrice;
        return getCoastPrice;
      }
    }
    return 0
  }
  TotalWithTax: any[] = [];
  TotalWithoutTax: any[] = [];
  landingCostEveryIndex: any[] = [];
  calculateTotalLandingCostEveryIndex(index: number): number {
    const cartItem = this.getCart().controls[index];
    const purchaseRateControl = cartItem.get('unit_cost');
    const taxPercentageControl = cartItem.get('tax');
    const discountPercentageControl = cartItem.get('discount');
    const additionDiscountPercentageControl = cartItem.get('additional_discount');
    const qtyControlControl = cartItem.get('qty');
    if (purchaseRateControl && taxPercentageControl && discountPercentageControl && qtyControlControl) {
      const barcode = (this.puchaseBillForm.get('purchase_bill') as FormArray).at(index) as FormGroup;
      if (this.isTaxAvailable[index] == true) {
        const purchaseRate = +purchaseRateControl.value || 0;
        const discountPercentage = +discountPercentageControl.value || 0;
        const additionalDiscountPercentage = +additionDiscountPercentageControl.value || 0;
        const totalDiscount = discountPercentage + additionalDiscountPercentage;
        const qty = +qtyControlControl.value || 0;
        if (this.batchCostPrice[index] > 0) {
          const discountAmount = (this.batchCostPrice[index] * totalDiscount) / 100;
          const afterDiscountAmount = this.batchCostPrice[index] - discountAmount
          this.TotalWithoutTax[index] = afterDiscountAmount * qty || 0
          const landingCost = afterDiscountAmount || 0;
          barcode.patchValue({
            landing_cost: landingCost.toFixed(2),
          });
          this.landingCostEveryIndex[index] = landingCost
          // without tax price 
          return landingCost;
        } else {
          const discountAmount = (this.costPrice * totalDiscount) / 100;
          const afterDiscountAmount = this.costPrice - discountAmount;
          this.TotalWithoutTax[index] = afterDiscountAmount * qty || 0
          const landingCost = afterDiscountAmount || 0;
          this.landingCostEveryIndex[index] = landingCost
          barcode.patchValue({
            landing_cost: landingCost.toFixed(2),
          });
          return landingCost;
        }
      } else {
        let purchaseTax = 18
        const discountPercentage = +discountPercentageControl.value || 0;
        const additionalDiscountPercentage = +additionDiscountPercentageControl.value || 0;
        const totalDiscount = discountPercentage + additionalDiscountPercentage;
        const qty = +qtyControlControl.value || 0;
        // cost price 
        let getDiscountPrice = (this.costPrice * totalDiscount) / 100
        let getCoastPrice = this.costPrice - getDiscountPrice;
        this.originalCoastPrice = getCoastPrice
        // without tax price 
        this.TotalWithoutTax[index] = getCoastPrice * qty || 0;
        // landing cost
        let taxPrice = getCoastPrice - (getCoastPrice * (100 / (100 + purchaseTax))) || 0
        this.taxIntoRupees[index] = taxPrice || 0;
        let landingCost = getCoastPrice + taxPrice || 0;
        barcode.patchValue({
          landing_cost: landingCost.toFixed(2),
        });
        this.landingCostEveryIndex[index] = landingCost
        return landingCost;
      }
    }
    return 0;
  }

  costPrice: any
  purchase2(costPrice: any) {
    this.costPrice = costPrice;
    console.log(this.costPrice);
  }
  purchase3(index) {
    const result = this.calculationAdditionalDiscountCostPrice(index);
    this.coastprice[index] = result.toFixed(2)
    this.calculateTotalLandingCostEveryIndex(index)
    this.getgstCostPrice(index)
    setTimeout(() => {
      this.calculateRoundoffValue()
    }, 2000);
  }
  calculationAdditionalDiscountCostPrice(index) {
    console.log(this.costPrice, 'calculationAdditionalDiscountCostPrice');
    const cartItem = this.getCart().controls[index];
    const purchaseRateControl = cartItem.get('unit_cost');
    const taxPercentageControl = cartItem.get('tax');
    const discountPercentageControl = cartItem.get('discount');
    const additionDiscountPercentageControl = cartItem.get('additional_discount');
    this.batchCostPrice[index] = this.coastprice[index];
    if (purchaseRateControl && taxPercentageControl && discountPercentageControl) {
      if (this.isTaxAvailable[index] == true) {
        const discountPercentage = +discountPercentageControl.value || 0;
        const additionalDiscountPercentage = +additionDiscountPercentageControl.value || 0;
        const totalDiscount = discountPercentage + additionalDiscountPercentage;
        const taxPercentage = +taxPercentageControl.value || 0;
        const purchaseRate = +purchaseRateControl.value || 0;
        // landing cost
        // let getDiscountPrice = (this.costPrice * totalDiscount) / 100
        // let getCoastPrice = this.costPrice - getDiscountPrice;
        // // cost price 
        // let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + taxPercentage))) || 0
        // this.taxIntoRupees[index] = taxprice || 0;
        // let purchasePrice = getCoastPrice - taxprice;
        // return purchasePrice;

        // landing cost
        if (this.costPrice > 0) {
          let getDiscountPrice = (this.costPrice * totalDiscount) / 100
          let getCoastPrice = this.costPrice - getDiscountPrice;
          // cost price 
          let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + taxPercentage))) || 0
          this.taxIntoRupees[index] = taxprice || 0;
          let purchasePrice = getCoastPrice - taxprice;
          return purchasePrice;
        } else {
          let getDiscountPrice = (this.batchCostPrice[index] * totalDiscount) / 100
          let getCoastPrice = this.batchCostPrice[index] - getDiscountPrice;
          // cost price 
          let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + taxPercentage))) || 0
          this.taxIntoRupees[index] = taxprice || 0;
          let purchasePrice = getCoastPrice - taxprice;
          return purchasePrice;
        }

      } else {
        const discountPercentage = +discountPercentageControl.value || 0;
        const additionalDiscountPercentage = +additionDiscountPercentageControl.value || 0;
        const totalDiscount = discountPercentage + additionalDiscountPercentage;
        const purchaseRate = +purchaseRateControl.value || 0;
        // cost price 
        let getDiscountPrice = (this.costPrice * totalDiscount) / 100
        let getCoastPrice = this.costPrice - getDiscountPrice;
        return getCoastPrice;
      }
    }
    return 0
  }
  purchase4(index) {
    const result = this.calculationAdditionalDiscountCostPrice(index);
    this.coastprice[index] = result.toFixed(2)
    this.calculateTotalLandingCostEveryIndex(index)
    this.getgstCostPrice(index)
    setTimeout(() => {
      this.calculateRoundoffValue()
    }, 2000);
  }
  calculationDiscountCostPrice(index) {
    console.log(this.costPrice, 'calculationAdditionalDiscountCostPrice');
    const cartItem = this.getCart().controls[index];
    const purchaseRateControl = cartItem.get('unit_cost');
    const taxPercentageControl = cartItem.get('tax');
    const discountPercentageControl = cartItem.get('discount');
    const additionDiscountPercentageControl = cartItem.get('additional_discount');
    this.batchCostPrice[index] = this.coastprice[index];
    if (purchaseRateControl && taxPercentageControl && discountPercentageControl) {
      if (this.isTaxAvailable[index] == true) {
        const discountPercentage = +discountPercentageControl.value || 0;
        const additionalDiscountPercentage = +additionDiscountPercentageControl.value || 0;
        const totalDiscount = discountPercentage + additionalDiscountPercentage;
        const taxPercentage = +taxPercentageControl.value || 0;
        const purchaseRate = +purchaseRateControl.value || 0;
        // landing cost
        // let getDiscountPrice = (this.costPrice * totalDiscount) / 100
        // let getCoastPrice = this.costPrice - getDiscountPrice;
        // // cost price 
        // let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + taxPercentage))) || 0
        // this.taxIntoRupees[index] = taxprice || 0;
        // let purchasePrice = getCoastPrice - taxprice;
        // return purchasePrice;

        if (this.costPrice > 0) {
          let getDiscountPrice = (this.costPrice * totalDiscount) / 100
          let getCoastPrice = this.costPrice - getDiscountPrice;
          // cost price 
          let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + taxPercentage))) || 0
          this.taxIntoRupees[index] = taxprice || 0;
          let purchasePrice = getCoastPrice - taxprice;
          return purchasePrice;
        } else {
          let getDiscountPrice = (this.batchCostPrice[index] * totalDiscount) / 100
          let getCoastPrice = this.batchCostPrice[index] - getDiscountPrice;
          // cost price 
          let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + taxPercentage))) || 0
          this.taxIntoRupees[index] = taxprice || 0;
          let purchasePrice = getCoastPrice - taxprice;
          return purchasePrice;
        }
      } else {
        const discountPercentage = +discountPercentageControl.value || 0;
        const additionalDiscountPercentage = +additionDiscountPercentageControl.value || 0;
        const totalDiscount = discountPercentage + additionalDiscountPercentage;
        const purchaseRate = +purchaseRateControl.value || 0;
        // cost price 
        let getDiscountPrice = (this.costPrice * totalDiscount) / 100
        let getCoastPrice = this.costPrice - getDiscountPrice;
        return getCoastPrice;
      }
    }
    return 0
  }


  calculateTotalWithTax(): number {
    let total = 0;
    this?.TotalWithTax?.forEach((number: any) => {
      total += number;
    })
    return total;
  }
  calculateTotalWithoutTax(): number {
    let total = 0
    this?.TotalWithoutTax?.forEach((number: any) => {
      total += number;
    })
    return total;
  }

  getRes: any;
  loader = false;
  loaderCreate=false;
  submit(type: any) {
    console.log(this.puchaseBillForm.value);
    if (this.puchaseBillForm.valid) {
      if (type == 'new') {
        this.loaderCreate=true;
      }else if(type=='save'){
        this.loader = true;
      }
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
      formdata.append('round_off', this.puchaseBillForm.get('round_off')?.value);
      formdata.append('additional_charge', this.puchaseBillForm.get('additional_charge')?.value);
      if (type == 'draft') {
        formdata.append('status', 'Draft');
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
      // formdata.append('cart', JSON.stringify(cartData));

      const cartArray = this.puchaseBillForm.get('purchase_bill') as FormArray;
      const cartData = [];
      cartArray.controls.forEach((address) => {
        const cartGroup = address as FormGroup;
        const cartObject = {};
        Object.keys(cartGroup.controls).forEach((key) => {
          const control = cartGroup.controls[key];
          // Convert the value to an integer if it's a number
          if (!isNaN(control.value)) {
            cartObject[key] = parseFloat(control.value);
          } else {
            cartObject[key] = control.value;
          }
        });

        cartData.push(cartObject);
      });
      formdata.append('purchase_bill', JSON.stringify(cartData));
      //tax rate
      const textArray = this.puchaseBillForm.get('tax_rate') as FormArray;
      const textData = [];
      textArray.controls.forEach((tax) => {
        const taxGroup = tax as FormGroup;
        const taxObject = {};
        Object.keys(taxGroup.controls).forEach((key) => {
          const control = taxGroup.controls[key];
          // Convert the value to an integer if it's a number
          if (!isNaN(control.value)) {
            taxObject[key] = parseFloat(control.value);
          } else {
            taxObject[key] = control.value;
          }
        });
        textData.push(taxObject);
      });
      formdata.append('tax_rate', JSON.stringify(textData));

      this.purchaseService.updatePurchaseBill(formdata, this.id).subscribe(res => {
        // console.log(res);
        this.getRes = res;
        if (this.getRes.success) {
          // this.router.navigate(['//purchase/goodsReceivedNote-list'])
          if (type == 'new') {
            this.loaderCreate=false;
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
            this.loader = false;
            this.toastrService.success(this.getRes.msg);
            this.router.navigate(['//purchase/goodsReceivedNote-list'])
          }
        }
        else{
          if (type == 'new') {
            this.loaderCreate=false;
          }else if(type=='save'){
            this.loader = false;
          }
        }
      },err=>{
        if (type == 'new') {
          this.loaderCreate=false;
        }else if(type=='save'){
          this.loader = false;
        }
      })
    } else {
      this.puchaseBillForm.markAllAsTouched()
    }
  }

  // private _filter(value: string | number, include: boolean): any[] {
  //   // console.log(value);
  //   const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
  //   const filteredSuppliers = include
  //     ? this.suppliers.filter(supplier => supplier.name.toLowerCase().includes(filterValue))
  //     : this.suppliers.filter(supplier => !supplier.name.toLowerCase().includes(filterValue));
  //   if (!include && filteredSuppliers.length === 0) {
  //     // console.log("No results found");
  //     filteredSuppliers.push({ name: "No data found" }); // Add a dummy entry for displaying "No data found"
  //   }
  //   return filteredSuppliers;
  // }

  // search with name & companyname 
  private _filter(value: string | number, include: boolean): any[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredSuppliers = include
      ? this.suppliers.filter(supplier =>
          supplier.name.toLowerCase().includes(filterValue) || supplier.company_name.toLowerCase().includes(filterValue)
        )
      : this.suppliers.filter(supplier =>
          !(supplier.name.toLowerCase().includes(filterValue) || supplier.company_name.toLowerCase().includes(filterValue))
        );
    if (!include && filteredSuppliers.length === 0) {
      filteredSuppliers.push({ name: "No data found" });
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
  isLastAdditionalCharge(index: number): boolean {
    const cartControls = this.getAdditionalCharge().controls;
    return index === cartControls.length - 1;
  }
  isLastTaxRate(index: number): boolean {
    const cartControls = this.getTaxRate().controls;
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
    this.getVariant('', '','')
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
      const qtyControl = this.getCart().controls[i].get('unit_cost') || 0;
      if (qtyControl) {
        totalQty += +qtyControl.value || 0;
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
  totalCost: any[] = []
  calculateTotalEveryIndex(index: any) {
    const cartItem = this.getCart().controls[index];
    const landingCost = +cartItem.get('landing_cost').value || 0;
    const qty = +cartItem.get('qty').value || 0;
    const totalForItem = landingCost * qty;
    this.totalCost[index] = totalForItem;
    const barcode = (this.puchaseBillForm.get('purchase_bill') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      total: totalForItem.toFixed(2)
    });
    return totalForItem;
  }
  totalAmount: any
  calculateTotal() {
    let total = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const purchaseRateControl = this.getCart().controls[i].get('unit_cost');
      const landingcost = this.getCart().controls[i].get('unit_cost');
      const qtyControl = this.getCart().controls[i].get('qty');
      if (purchaseRateControl && landingcost && qtyControl) {
        const landingCost = +landingcost.value || 0;
        const qty = +qtyControl.value || 0;
        const totalForItem = landingCost * qty;
        total += totalForItem;
      }
    }
    this.totalAmount = total
    // Round the total based on decimal value and add 1 if necessary
    const roundedTotal = Math.round(total * 100) / 100; // Round to two decimal places
    const decimalPart = roundedTotal - Math.floor(roundedTotal);
    setTimeout(() => {
      this.calculateRoundoffValue()
    }, 3000);
    if (decimalPart >= 0.5) {
      this.totalAmount = Math.floor(roundedTotal) + 1;
      return Math.floor(roundedTotal) + 1;
    } else {
      this.totalAmount = Math.floor(roundedTotal);
      return Math.floor(roundedTotal);
    }
  }

  roudoffValue: any
  calculateRoundoffValue(): any {
    const total = this.totalAmount || 0;
    const roundedTotal = Math.round(total * 100) / 100;
    const integerPart = Math.floor(roundedTotal);
    const decimalPart = (roundedTotal - integerPart) * 100;

    if (decimalPart === 0 && integerPart === 0) {
      this.roudoffValue = 0;
      // this.puchaseBillForm.get('round_off').patchValue(this.roudoffValue)
      return 0;
    }
    const subtractedValue = (100 - decimalPart) / 100;
    if (subtractedValue === 1) {
      this.roudoffValue = 0
      // this.puchaseBillForm.get('round_off').patchValue(this.roudoffValue)
      return 0;
    }
    this.roudoffValue = subtractedValue;
    this.puchaseBillForm.get('round_off').patchValue(this.roudoffValue)
    return subtractedValue;
  }
  taxIntoPrice = 0;
  calculateTotalTaxIntoRupees(): any {
    let total = 0;
    this.taxIntoRupees?.forEach((number: any) => {
      total += number || 0
    });
    return total;
  }
  calculateTaxintoPrice(index: number): any {
    const cartItem = this.getCart().controls[index];
    const purchaseRate = +cartItem.get('unit_cost').value || 0;
    const taxPercentage = +cartItem.get('tax').value || 0;
    const discountPercentage = +cartItem.get('discount').value || 0;
    const discount = (purchaseRate * discountPercentage) / 100;
    const afterDiscountAmount = purchaseRate - discount
    const taxAmount = (afterDiscountAmount * taxPercentage) / 100;
    console.log(taxAmount);
    const totalForTax = taxAmount
    return totalForTax;
  }
  calculateTotalAdditionalChargeEveryIndex(index: number): number {
    const Items = this.getAdditionalCharge().at(index);
    const value = +Items.get('value').value || 0;
    const tax = +Items.get('tax').value || 0;
    const ctax = (value * tax) / 100;
    const total = value + ctax;
    return total;
  }
isAdditionalDiscount=false;
  additionalcharg() {
    this.isAdditionalDiscount=true;
    this.calculateTotalAdditionalCharge()
  }
  totaladditionalCharge: any;
  calculateTotalAdditionalCharge(): number {
    let totaladditionalCharge = 0;
    for (let i = 0; i < this.getAdditionalCharge()?.controls?.length; i++) {
      const mrpControl = this.getAdditionalCharge().controls[i]?.get('total');
      if (mrpControl) {
        totaladditionalCharge += +mrpControl?.value;
        if(this.isAdditionalDiscount){
        this.puchaseBillForm.get('additional_charge').patchValue(totaladditionalCharge.toFixed(2))
        }
      }
    }
    return totaladditionalCharge;
  }

   //calculate otal tax rates
   calculateTotalTaxrate(): any {
    let totalTax = 0;
    for (let i = 0; i < this.getTaxRate().controls.length; i++) {
      const taxControl = this.getTaxRate().controls[i].get('tax_rate') || 0;
      if (taxControl) {
        totalTax += +taxControl.value || 0;
      }
    }
    return totalTax;
  }
   calculateTotalTaxAmount(): any {
    let totalTax = 0;
    for (let i = 0; i < this.getTaxRate().controls.length; i++) {
      const taxControl = this.getTaxRate().controls[i].get('taxable_amount') || 0;
      if (taxControl) {
        totalTax += +taxControl.value || 0;
      }
    }
    return totalTax;
  }
  calculateTotalIgst(): any {
    let totalTax = 0;
    for (let i = 0; i < this.getTaxRate().controls.length; i++) {
      const taxControl = this.getTaxRate().controls[i].get('igst_amount') || 0;
      if (taxControl) {
        totalTax += +taxControl.value || 0;
      }
    }
    return totalTax;
  }
  calculateTotalSgst(): any {
    let totalTax = 0;
    for (let i = 0; i < this.getTaxRate().controls.length; i++) {
      const taxControl = this.getTaxRate().controls[i].get('sgst_amount') || 0;
      if (taxControl) {
        totalTax += +taxControl.value || 0;
      }
    }
    return totalTax;
  }
  calculateTotalCgst(): any {
    let totalTax = 0;
    for (let i = 0; i < this.getTaxRate().controls.length; i++) {
      const taxControl = this.getTaxRate().controls[i].get('cgst_amount') || 0;
      if (taxControl) {
        totalTax += +taxControl.value || 0;
      }
    }
    return totalTax;
  }
  calculateTotalTaxRate(): any {
    let totalTax = 0;
    for (let i = 0; i < this.getTaxRate().controls.length; i++) {
      const taxControl = this.getTaxRate().controls[i].get('total_tax') || 0;
      if (taxControl) {
        totalTax += +taxControl.value || 0;
      }
    }
    return totalTax;
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
  additionalTable = false
  displayAdditiionalTable() {
    this.additionalTable = false;
  }
  hideAdditiionalTable() {
    this.additionalTable = true;
  }

  // calculateTotalTaxIntoRupees() {
  //   let total = 0;
  //   for (let i = 0; i < this.getCart().controls.length; i++) {
  //     const purchaseRateControl = this.getCart().controls[i].get('unit_cost');
  //     const taxControl = this.getCart().controls[i].get('tax');
  //     const discountControl = this.getCart().controls[i].get('discount');
  //     if (purchaseRateControl && discountControl) {
  //       const purchaseRate = +purchaseRateControl.value;
  //       const tax = +taxControl.value;
  //       const discount = +discountControl.value

  //       const discountAmountPercentage = +discount
  //       const discountAmount = (purchaseRate * discountAmountPercentage) / 100;
  //       const afterDiscuntAmount = purchaseRate - discountAmount
  //       const taxAmountPercentage = +tax;
  //       const taxAmount = (afterDiscuntAmount * taxAmountPercentage) / 100;

  //       total += taxAmount;
  //     }
  //   }
  //   return total;
  // }
  // calculateTaxintoPrice(index: number): number {
  //   const cartItem = this.getCart().controls[index];
  //   const purchaseRate = +cartItem.get('unit_cost').value;
  //   const taxPercentage = +cartItem.get('tax').value;
  //   const discountPercentage = +cartItem.get('discount').value;
  //   const discount = (purchaseRate * discountPercentage) / 100;
  //   const afterDiscountAmount = purchaseRate - discount
  //   const taxAmount = (afterDiscountAmount * taxPercentage) / 100;
  //   console.log(taxAmount);
  //   const totalForTax = taxAmount
  //   return totalForTax;
  // }

  category: any;
  subcategory: any;
  searc: any;
  myControls: FormArray;
  variantList: any[] = [];
  getVariant(search: any, index: any,barcode:any) {
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
        this.variantList = res;
        console.log(this.variantList);
        if (barcode === 'barcode') {
          this.oncheckVariant(res[0], index);
          this.myControls.push(new FormControl(res[0]?.product_title));
        }
        if (search) {
          //barcode patch
          this.searchs = res;
          this.productOption = res;
          // console.log(this.searchs);
          this.productName[index] = this.searchs[0]?.product_title;
          // console.log(this.productName);
          this.check = true;
          const barcode = (this.puchaseBillForm.get('purchase_bill') as FormArray).at(index) as FormGroup;
          barcode.patchValue({
            barcode: this.searchs[0].id
          });
        }
      });
    }
    else {
      this.purchaseService.filterVariant(this.supplierId, this.category, this.subcategory, search).subscribe((res: any) => {
        console.log(res);
        this.variantList = res;
        console.log(this.variantList);
        if (barcode === 'barcode') {
          this.oncheckVariant(res[0], index);
          this.myControls.push(new FormControl(res[0]?.product_title));
        }
        if (search) {
          //barcode patch
          this.searchs = res;
          this.productOption = res;
          // console.log(this.searchs);
          this.productName[index] = this.searchs[0]?.product_title;
          // console.log(this.productName);
          this.check = true;
          const barcode = (this.puchaseBillForm.get('purchase_bill') as FormArray).at(index) as FormGroup;
          barcode.patchValue({
            barcode: this.searchs[0]?.id
          });
        }
      });
    }
  }

  // cgst sgst 
  gstTaxRate: any[] = []
  costAmount: any[] = []
  getcgst: any[] = []
  discountValue: any[] = []
  additionalValue: any[] = []
  getgst(index) {
    const variants = this.puchaseBillForm.get('tax_rate') as FormArray;
    variants.clear();
    this.addTaxRate();
    const barcode = (this.puchaseBillForm.get('purchase_bill') as FormArray).at(index) as FormGroup;
    // patch value
    const taxRate = (this.puchaseBillForm.get('tax_rate') as FormArray).at(index) as FormGroup;
    this.gstTaxRate[index] = barcode.get('tax').value || 0;
    taxRate.patchValue({
      tax_rate: this.gstTaxRate[index],
      taxable_amount:this.coastprice[index]
    });
    this.costAmount[index] = barcode.get('unit_cost').value || 0;
    this.discountValue[index] = barcode.get('discount').value || 0;
    this.additionalValue[index] = barcode.get('additional_discount').value || 0;
    let totaldiscount = parseFloat(this.discountValue[index]) + parseFloat(this.additionalValue[index]);
    console.log(totaldiscount);
    // calculate cgstamt
    if (this.isTaxAvailable[index] == true) {
      let getDiscountPrice = (this.batchCostPrice[index] * totaldiscount) / 100
      let getCoastPrice = this.batchCostPrice[index] - getDiscountPrice;
      // cost price
      this.getcgst[index] = getCoastPrice - (getCoastPrice * (100 / (100 + this.gstTaxRate[index])));    
      if(this.supplierAddress?.check_sgst_cgst){
        taxRate.patchValue({
          cgst_amount:(this.getcgst[index].toFixed(2)/2),
          sgst_amount:(this.getcgst[index].toFixed(2)/2),
          total_tax:this.getcgst[index].toFixed(2)
        });
      }else{
        taxRate.patchValue({
          igst_amount: this.gstTaxRate[index],
          total_tax:this.getcgst[index].toFixed(2)
        });
      }
    } else {
      let getDiscountPrice = (this.costPrice * totaldiscount) / 100
      let getCoastPrice = this.costPrice - getDiscountPrice;
      // cost price
      this.getcgst[index] = getCoastPrice - (getCoastPrice * (100 / (100 + this.gstTaxRate[index])))
      if(this.supplierAddress?.check_sgst_cgst){
        taxRate.patchValue({
          cgst_amount:(this.getcgst[index].toFixed(2)/2),
          sgst_amount:(this.getcgst[index].toFixed(2)/2),
          total_tax:this.getcgst[index].toFixed(2)
        });
      }else{
        taxRate.patchValue({
          igst_amount: this.getcgst[index].toFixed(2),
          total_tax:this.getcgst[index].toFixed(2)
        });
      }
    }
    // this.getcgst[index] = this.batchCostPrice[index] - (this.batchCostPrice[index] * (100 / (100 + this.gstTaxRate[index])))
    // console.log(this.getcgst[index]);
  }
  // get gst without cgst sgst
  getgstCostPrice(index) {
    const barcode = (this.puchaseBillForm.get('purchase_bill') as FormArray).at(index) as FormGroup;
    const taxRate = (this.puchaseBillForm.get('tax_rate') as FormArray).at(index) as FormGroup;
    this.gstTaxRate[index] = barcode.get('tax').value || 0;
    taxRate.patchValue({
      tax_rate: this.gstTaxRate[index],
      taxable_amount:this.coastprice[index]
    });
    this.costAmount[index] = barcode.get('unit_cost').value || 0;
    this.discountValue[index] = barcode.get('discount').value || 0;
    this.additionalValue[index] = barcode.get('additional_discount').value || 0;
    let totaldiscount = parseFloat(this.discountValue[index]) + parseFloat(this.additionalValue[index]);
    // calculate cgstamt
    if (this.isTaxAvailable[index] == true) {
      if (this.costPrice > 0) {
        let getDiscountPrice = (this.costPrice * totaldiscount) / 100
        let getCoastPrice = this.costPrice - getDiscountPrice;
        // this.costAmount[index]=getCoastPrice
        // cost price
        this.getcgst[index] = getCoastPrice - (getCoastPrice * (100 / (100 + this.gstTaxRate[index])))
        if(this.supplierAddress?.check_sgst_cgst){
          taxRate.patchValue({
            cgst_amount:(this.getcgst[index].toFixed(2)/2),
            sgst_amount:(this.getcgst[index].toFixed(2)/2),
            total_tax:this.getcgst[index].toFixed(2)
          });
        }else{
          taxRate.patchValue({
            igst_amount: this.gstTaxRate[index],
            total_tax:this.getcgst[index].toFixed(2)
          });
        }
      } else {
        let getDiscountPrice = (this.batchCostPrice[index] * totaldiscount) / 100
        let getCoastPrice = this.batchCostPrice[index] - getDiscountPrice;
        // this.costAmount[index]=getCoastPrice
        // cost price
        this.getcgst[index] = getCoastPrice - (getCoastPrice * (100 / (100 + this.gstTaxRate[index])))
        if(this.supplierAddress?.check_sgst_cgst){
          taxRate.patchValue({
            cgst_amount:(this.getcgst[index].toFixed(2)/2),
            sgst_amount:(this.getcgst[index].toFixed(2)/2),
            total_tax:this.getcgst[index].toFixed(2)
          });
        }else{
          taxRate.patchValue({
            igst_amount: this.getcgst[index].toFixed(2),
            total_tax:this.getcgst[index].toFixed(2)
          });
        }
      }

    } else {
      let getDiscountPrice = (this.costPrice * totaldiscount) / 100
      let getCoastPrice = this.costPrice - getDiscountPrice;
      // this.costAmount[index]=getCoastPrice
      // cost price
      this.getcgst[index] = getCoastPrice - (getCoastPrice * (100 / (100 + this.gstTaxRate[index])))

      if(this.supplierAddress?.check_sgst_cgst){
        taxRate.patchValue({
          cgst_amount:(this.getcgst[index].toFixed(2)/2),
          sgst_amount:(this.getcgst[index].toFixed(2)/2),
          total_tax:this.getcgst[index].toFixed(2)
        });
      }else{
        taxRate.patchValue({
          igst_amount: this.getcgst[index].toFixed(2),
          total_tax:this.getcgst[index].toFixed(2)
        });
      }
    }
    // this.getcgst[index] = this.batchCostPrice[index] - (this.batchCostPrice[index] * (100 / (100 + this.gstTaxRate[index])))
    // console.log(this.getcgst[index]);
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
  getSubCategory(val:any) {
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

    this.getVariant('', '','')
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
    this.getVariant('', '','')
  }
  //dropdown auto close stop
  onLabelClick(event: Event) {
    // Prevent the event from propagating to the dropdown menu
    event.stopPropagation();
  }
}

