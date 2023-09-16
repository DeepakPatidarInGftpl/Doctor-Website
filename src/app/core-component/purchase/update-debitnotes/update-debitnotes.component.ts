import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-update-debitnotes',
  templateUrl: './update-debitnotes.component.html',
  styleUrls: ['./update-debitnotes.component.scss']
})
export class UpdateDebitnotesComponent implements OnInit {

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
    private coreService: CoreService) {
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
  id: any;
  getresbyId: any;
  supplierAddress: any;
  selectedAddress: string = ''
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.supplierControl.setValue('Loading...');
    this.myControls = new FormArray([]);
    this.debitNotesForm = this.fb.group({
      party: new FormControl('', [Validators.required]),
      // related_name: new FormControl(''),
      purchase_return_no: new FormControl(''),
      purchase_return_date: new FormControl(''),
      refrence_bill_no: new FormControl(''),
      purchase_bill: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
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

    this.purchaseService.getPurchaseReturnById(this.id).subscribe((res: any) => {
      // console.log(res);
      this.getresbyId = res;
      this.debitNotesForm.patchValue(res);
      this.debitNotesForm.get('party')?.patchValue(res?.party.id);
      this.debitNotesForm.get('reverse_charge')?.patchValue(res?.reverse_charge);
      // this.debitNotesForm.get('payment_term')?.patchValue(res?.payment_term.id);
      this.debitNotesForm.get('purchase_bill')?.patchValue(res?.purchase_bill);
      this.debitNotesForm.setControl('cart', this.udateCart(res?.cart));
      this.displaySupplierName(res?.party?.id);
      this.supplierId = res.party.id
      this.getVariant('', '')
      const formattedOrderDate = new Date(this.getresbyId?.purchase_return_date).toISOString().slice(0, 16);
      this.debitNotesForm.get('purchase_return_date')?.patchValue(formattedOrderDate);
      //call detail api
      this.contactService.getSupplierById(res?.party?.id).subscribe(res => {
        // console.log(res);
        this.supplierAddress = res;
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
    // this.getBatchComplete()
    this.getPurchaseBill();
    // this.getPaymentTerms()
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

  displaySupplierName(supplierId: number): void {
    // this.filteredSuppliers
    //   .pipe(
    //     tap(data => console.log('Data emitted:', data)), // Add this line to check emitted data
    //     map(suppliers => suppliers.filter(supplier => supplier.id === supplierId))
    //   )
    //   .subscribe(matchedSuppliers => {
    //     if (matchedSuppliers.length > 0) {
    //       this.supplierControl.setValue(matchedSuppliers[0].name);
    //     }
    //   });
  }
  get supplier() {
    return this.debitNotesForm.get('party') as FormControl;
  }
  discountt(index: number) {
    return this.getCart().controls[index].get('discount');
  }
  additional_discount(index: number) {
    return this.getCart().controls[index].get('additional_discount')
  }
  batch(index: number) {
    return this.getCart().controls[index].get('batch');
  }
  udateCart(add: any): FormArray {
    let formarr = new FormArray([]);
    add.forEach((j: any, i) => {
      const purchaseRate = j.unit_cost || 0;
      const taxPercentage = j.tax || 0;
      const landingCost=j.landing_cost||0;
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
        discount: j.discount == null ? 0 : j.discount,
        tax: j.tax || 0,
        landing_cost: j.landing_cost,
        total: j.total
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
  cart(): FormGroup {
    return this.fb.group({
      barcode: (0),
      qty: (1),
      unit_cost: (0),
      mrp: (0),
      discount: new FormControl(0, [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      tax: (0),
      landing_cost: (0),
      // batch: new FormControl(0, Validators.required),
      total: (0)
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
  getBatchComplete() {
    this.coreService.getBatch().subscribe(res => {
      // console.log(res);
      this.batchList = res;
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

  // selectedAddressBilling: any;
  // selectedAddressShipping: any;
  // selectBatch: any;
  // selectPaymentTerm: any
  // supplierId
  // oncheck(event: any) {
  //   // console.log(event);
  //   const selectedItemId = event; // Assuming the ID field is 'item_id'
  //   // console.log(selectedItemId);
  //   this.supplierId=event
  //   if (this.getresbyId.cart.length >= 0) {
  //     const variants = this.debitNotesForm.get('cart') as FormArray;
  //     variants.clear();
  //     this.addCart();
  //   }
  //   this.debitNotesForm.patchValue({
  //     party: selectedItemId
  //   });

  //   //call detail api
  //   this.contactService.getSupplierById(selectedItemId).subscribe(res => {
  //     this.getPaymentTerms = res?.payment_terms?.id;
  //     this.getVariant('','')
  //     // this.debitNotesForm.get('payment_term').patchValue(this.getPaymentTerms)
  //     this.supplierAddress = res;
  //     this.supplierAddress.address.map((res: any) => {
  //       if (res.address_type == 'Billing') {
  //         this.selectedAddressBilling = res
  //         console.log(this.selectedAddressBilling);
  //       } else if (res.address_type == 'Shipping') {
  //         this.selectedAddressShipping = res
  //         console.log(this.selectedAddressShipping);
  //       }
  //     })
  //   })
  // }

  // address 


  selectedAddressBilling: any;
  selectedAddressShipping: any;
  selectBatch: any;
  selectPaymentTerm: any
  variantId: any;
  supplierId: any
  oncheck(event: any) {
    // console.log(event);
    const selectedItemId = event; // Assuming the ID field is 'item_id'
    // console.log(selectedItemId);
    this.supplierId = event
    //call detail api
    this.contactService.getSupplierById(selectedItemId).subscribe(res => {
      this.getPaymentTerms = res?.payment_terms?.id;
      this.getVariant('', '')
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
  originalCoastPrice: any;
  apiPurchaseTax: number;
  isTaxAvailable: any[] = [];
  taxIntoRupees: any[] = [];
  tax: any[] = [];
  batchDiscount: any;
  landingCost: any;
  batchCostPrice: any[] = [];

  oncheckVariant(event: any, index) {
    const selectedItemId = event.id;
    // const barcode = (this.debitNotesForm.get('cart') as FormArray).at(index) as FormGroup;
    // barcode.patchValue({
    //   barcode: selectedItemId
    // });

    // calculation
    this.selectedProductName = event.product_title;
    this.selectBatch = event.batch;
    this.apiPurchaseTax = event?.product?.purchase_tax?.amount_tax_slabs[0]?.tax?.tax_percentage || 0;
    this.batchDiscount = event.batch[0]?.discount || 0;
    this.isTaxAvailable[index] = event?.product?.purchase_tax_including;
    this.batchCostPrice[index] = event?.batch[0]?.cost_price || 0;
    if (event?.product?.purchase_tax_including == true) {
      let costprice = event?.batch[0]?.cost_price || 0;
      // landing cost
      let getDiscountPrice = (costprice * this.batchDiscount) / 100;
      let getCoastPrice = costprice - getDiscountPrice;
      this.landingCost = getCoastPrice;
      // cost price
      let taxPrice = getCoastPrice - (getCoastPrice * (100 / (100 + this.apiPurchaseTax)))
      this.taxIntoRupees[index] = taxPrice || 0;
      this.originalCoastPrice = getCoastPrice - taxPrice;
    } else {
      let costprice = event?.batch[0]?.cost_price || 0;
      let purchaseTax = 18
      // cost price 
      let getDiscountPrice = (costprice * this.batchDiscount) / 100
      console.log(getDiscountPrice);
      let getCoastPrice = costprice - getDiscountPrice;
      this.originalCoastPrice = getCoastPrice
      // landing cost
      let taxPrice = getCoastPrice - (getCoastPrice * (100 / (100 + purchaseTax)))
      this.taxIntoRupees[index] = taxPrice || 0;
      let landingcost = getCoastPrice + taxPrice;
      this.landingCost = landingcost;
    }
    if (event.batch.length > 0) {
      const barcode = (this.debitNotesForm.get('cart') as FormArray).at(index) as FormGroup;
      this.tax[index] = this.apiPurchaseTax
      console.log(this.originalCoastPrice, 'this.originalCoastPrice');
      console.log(this.landingCost, 'this.landingCost');
      if (event?.product?.purchase_tax_including == true) {
        barcode.patchValue({
          barcode: selectedItemId,
          mrp: event.batch[0]?.mrp,
          qty: event.batch[0]?.stock,
          tax: this.apiPurchaseTax,
          discount: event.batch[0]?.discount || 0,
          unit_cost: this.originalCoastPrice.toFixed(2),
          // landing_cost: this.landingCost
        });
      } else {
        this.tax[index] = 18
        barcode.patchValue({
          barcode: selectedItemId,
          mrp: event.batch[0]?.mrp,
          qty: event.batch[0]?.stock,
          tax: 18,
          discount: event.batch[0]?.discount || 0,
          unit_cost: event.batch[0]?.cost_price,
          // landing_cost: this.landingCost || 0
        });
      }
    } else {
      this.tax[index] = 18
      const barcode = (this.debitNotesForm.get('cart') as FormArray).at(index) as FormGroup;
      barcode.patchValue({
        barcode: selectedItemId,
        tax: 18,
      });
    }
    this.calculateTotalLandingCostEveryIndex(index);
    this.calculateTotal();
    this.calculateTotalEveryIndex(index);
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
      let getDiscountPrice = (costprice * this.batchDiscount) / 100
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
      let getDiscountPrice = (costprice * this.batchDiscount) / 100
      console.log(getDiscountPrice, 'getDiscountPrice');
      let getCoastPrice = costprice - getDiscountPrice;
      this.originalCoastPrice = getCoastPrice;
      // this.coastprice[index] = this.originalCoastPrice.toFixed(2);
      console.log(this.coastprice[index]);
      // this.landingPrice[index]=this.landingCost.toFixed(2)
    }
  }

  userInputEntered: boolean[] = [];
  purchasee(index) {
    this.userInputEntered[index] = true;
    const result = this.calculatePurchaseEveryIndex(index);
    this.calculateTotalLandingCostEveryIndex(index)
    this.calculateTotalEveryIndex(index)
    this.coastprice[index] = result.toFixed(2);
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
    this.batchCostPrice[index] = this.coastprice[index];
    if (purchaseRateControl && taxPercentageControl && discountPercentageControl) {
      if (this.isTaxAvailable[index] == true) {
        const discountPercentage = +discountPercentageControl.value || 0;
        const taxPercentage = +taxPercentageControl.value || 0;
        const purchaseRate = +purchaseRateControl.value || 0;
        // landing cost
        let getDiscountPrice = (purchaseRate * discountPercentage) / 100
        let getCoastPrice = purchaseRate - getDiscountPrice;
        // cost price 
        let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + taxPercentage))) || 0
        this.taxIntoRupees[index] = taxprice || 0;
        let purchasePrice = getCoastPrice - taxprice;
        return purchasePrice;
      } else {
        const discountPercentage = +discountPercentageControl.value || 0;
        const purchaseRate = +purchaseRateControl.value || 0;
        // cost price 
        let getDiscountPrice = (this.coastprice[index] * discountPercentage) / 100
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
    const qtyControlControl = cartItem.get('qty');
    if (purchaseRateControl && taxPercentageControl && discountPercentageControl && qtyControlControl) {
      const barcode = (this.debitNotesForm.get('cart') as FormArray).at(index) as FormGroup;
      if (this.isTaxAvailable[index] == true) {
        const purchaseRate = +purchaseRateControl.value || 0;
        const discountPercentage = +discountPercentageControl.value || 0;
        const qty = +qtyControlControl.value || 0;
        if (this.batchCostPrice[index] > 0) {
          const discountAmount = (this.batchCostPrice[index] * discountPercentage) / 100;
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
          const discountAmount = (this.coastprice[index] * discountPercentage) / 100;
          const afterDiscountAmount = this.coastprice[index] - discountAmount;
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
        const qty = +qtyControlControl.value || 0;
        // cost price 
        let getDiscountPrice = (this.batchCostPrice[index] * discountPercentage) / 100
        let getCoastPrice = this.batchCostPrice[index] - getDiscountPrice;
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
      formdata.append('purchase_return_date', this.debitNotesForm.get('purchase_return_date')?.value);
      formdata.append('purchase_return_no', this.debitNotesForm.get('purchase_return_no')?.value);
      formdata.append('refrence_bill_no', this.debitNotesForm.get('refrence_bill_no')?.value);
      // formdata.append('related_name', this.debitNotesForm.get('related_name')?.value);
      formdata.append('reverse_charge', this.debitNotesForm.get('reverse_charge')?.value);
      formdata.append('purchase_bill', this.debitNotesForm.get('purchase_bill')?.value);
      formdata.append('export', this.debitNotesForm.get('export')?.value);
      formdata.append('reason', this.debitNotesForm.get('reason')?.value);

      formdata.append('total_qty', this.debitNotesForm.get('total_qty')?.value);
      formdata.append('total_tax', this.debitNotesForm.get('total_tax')?.value);
      formdata.append('total_discount', this.debitNotesForm.get('total_discount')?.value);
      formdata.append('sub_total', this.debitNotesForm.get('sub_total')?.value);
      formdata.append('round_off', this.debitNotesForm.get('round_off')?.value);
      formdata.append('total', this.debitNotesForm.get('total')?.value);
      if (type == 'draft') {
        formdata.append('status', 'Draft');
      }

      const cartArray = this.debitNotesForm.get('cart') as FormArray;
      const cartData = [];
      cartArray.controls.forEach((address) => {
        const cartGroup = address as FormGroup;
        const cartObject = {};
        Object.keys(cartGroup.controls).forEach((key) => {
          const control = cartGroup.controls[key];
          if (!isNaN(control.value)) {
            cartObject[key] = parseInt(control.value, 10);
          } else {
            cartObject[key] = control.value;
          }
        });
        cartData.push(cartObject);
      });
      formdata.append('cart', JSON.stringify(cartData));

      this.purchaseService.updatePurchaseReturn(formdata, this.id).subscribe(res => {
        // console.log(res);
        this.getRes = res;
        if (this.getRes.Is_Success == "True") {
          this.loader = false;
          this.toastrService.success(this.getRes.msg);
          // this.router.navigate(['//purchase/debit-notes-list'])
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
          this.loader = false;
        }
      }, err => {
        this.loader = false
      })
    } else {
      this.debitNotesForm.markAllAsTouched()
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

    this.v_id = value.id;
    const barcode = (this.debitNotesForm.get('cart') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      barcode: value.id
    });
    this.searchProduct('someQuery', '');
    this.getVariant('', '')
  };
  staticValue: string = 'Static Value';
  searchs: any[] = []; productName: any[] = [];
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
        totalQty += +qtyControl.value || 0;
      }
    }
    return totalQty;
  }
  calculateTotalMrp(): number {
    let totalMrp = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const mrpControl = this.getCart().controls[i]?.get('mrp');
      if (mrpControl) {
        totalMrp += +mrpControl.value || 0;
      }
    }
    return totalMrp;
  }
  calculateTotalDiscount(): number {
    let totalDiscount = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const discountControl = this.getCart().controls[i].get('discount');
      if (discountControl) {
        totalDiscount += +discountControl.value || 0;
      }
    }
    return totalDiscount;
  }
  calculateTotalAdditionDiscount(): number {
    let totalDiscount = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const discountControl = this.getCart().controls[i].get('additional_discount');
      if (discountControl) {
        totalDiscount += +discountControl.value || 0;
      }
    }
    return totalDiscount;
  }
  calculateTotalPurchase(): number {
    let totalPurchase = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const purchaseControl = this.getCart().controls[i].get('unit_cost');
      if (purchaseControl) {
        totalPurchase += +purchaseControl.value || 0;
      }
    }
    return totalPurchase;
  }
  calculateTotalTax(): number {
    let totalTax = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const taxControl = this.getCart()?.controls[i].get('tax') || 0;
      if (taxControl) {
        totalTax += +taxControl.value || 0;
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

  calculateTotalLandingCost(): any {
    let totalLandingCost = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const landingCostControl = this.getCart().controls[i]?.get('landing_cost') || 0;
      if (landingCostControl) {
        totalLandingCost += +landingCostControl.value || 0;
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
        const qty = +qtyControl.value || 0;
        const mrp = +mrpControl.value || 0;
        const itemSubtotal = mrp * qty;
        subtotal += itemSubtotal;
      }
    }
    return subtotal;
  }
  // calculateTotal(): number {
  //   let total = 0;
  //   for (let i = 0; i < this.getCart().controls.length; i++) {
  //     const purchaseRateControl = this.getCart().controls[i].get('unit_cost');
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
      const purchaseRateControl = this.getCart().controls[i].get('unit_cost');
      const landingcost = this.getCart().controls[i].get('landing_cost');
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
    this.calculateRoundoffValue()
    if (decimalPart >= 0.5) {
      this.totalAmount = Math.floor(roundedTotal) + 1;
      return Math.floor(roundedTotal) + 1;
    } else {
      this.totalAmount = Math.floor(roundedTotal);
      return Math.floor(roundedTotal);
    }

  }
  roudoffValue: any
  // calculateRoundoffValue(): any {
  //   const total = this.totalAmount || 0;
  //   const roundedTotal = Math.round(total * 100) / 100;
  //   const integerPart = Math.floor(roundedTotal);
  //   const decimalPart = (roundedTotal - integerPart) * 100;
  //   if (decimalPart === 0 && integerPart === 0) {
  //     return 0;
  //   }
  //   const subtractedValue = (100 - decimalPart) / 100;
  //   if (subtractedValue === 1) {
  //     return 0;
  //   }
  //   console.log(decimalPart,'decimalPart');
  //   console.log(subtractedValue,'subtractedValue');
  //   this.roudoffValue=subtractedValue;
  //   return subtractedValue;
  // }
  calculateRoundoffValue(): any {
    const total = this.totalAmount || 0;
    const roundedTotal = Math.round(total * 100) / 100;
    const integerPart = Math.floor(roundedTotal);
    const decimalPart = (roundedTotal - integerPart) * 100;
    if (decimalPart === 0 && integerPart === 0) {
      this.roudoffValue = 0;
      this.debitNotesForm.get('round_off').patchValue(this.roudoffValue.toFixed(2))
      return 0;
    }
    const subtractedValue = (100 - decimalPart) / 100;
    if (subtractedValue === 1) {
      this.roudoffValue = 0
      this.debitNotesForm.get('round_off').patchValue(this.roudoffValue.toFixed(2))
      return 0;
    }
    this.roudoffValue = subtractedValue;
    this.debitNotesForm.get('round_off').patchValue(this.roudoffValue.toFixed(2))
    return subtractedValue;
  }

  totalCost: any[] = []
  calculateTotalEveryIndex(index: any) {
    const cartItem = this.getCart().controls[index];
    const landingCost = +cartItem.get('landing_cost').value || 0;
    const qty = +cartItem.get('qty').value || 0;
    const totalForItem = landingCost * qty;
    this.totalCost[index] = totalForItem;
    const barcode = (this.debitNotesForm.get('cart') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      total: totalForItem.toFixed(2)
    });
    return totalForItem;
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

  clearForm() {
    this.debitNotesForm.reset();
    this.supplierControl.reset()
  }
  printForm(): void {
    const printContents = document.getElementById('debitNotesForm').outerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }


  get purchase_return_date() {
    return this.debitNotesForm.get('purchase_return_date') as FormControl;
  }
  get refrence_bill_no() {
    return this.debitNotesForm.get('refrence_bill_no') as FormControl;
  }
  get purchase() {
    return this.debitNotesForm.get('purchase_bill') as FormControl;
  }
  // get related_name() {
  //   return this.debitNotesForm.get('related_name') as FormControl;
  // }

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
      }
    });
  }
}

