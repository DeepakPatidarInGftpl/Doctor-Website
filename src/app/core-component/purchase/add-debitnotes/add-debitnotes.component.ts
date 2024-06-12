import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, debounceTime, map, startWith } from 'rxjs';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';

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
    private coreService: CoreService,
    private cdr: ChangeDetectorRef,
    private commonService: CommonServiceService
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
  minDate: string = '';
  maxDate: string = '';
  get f() {
    return this.debitNotesForm.controls;
  }

  subcategoryList;

  ngOnInit(): void {
    // const defaultDate = new Date().toISOString().split('T')[0]; // Get yyyy-MM-dd part
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const defaultDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;

    this.debitNotesForm = this.fb.group({
      party: new FormControl('', [Validators.required]),
      // related_name: new FormControl(''),
      purchase_return_no: new FormControl(''),
      purchase_return_date: new FormControl(defaultDateTime, [Validators.required]),
      refrence_bill_no: new FormControl(''),
      purchase_bill: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      reason: new FormControl('',),
      export: new FormControl(''),
      reverse_charge: new FormControl(''),
      total_qty: new FormControl(''),
      total_tax: new FormControl(''),
      total_deduction: new FormControl(''),
      sub_total: new FormControl(''),
      round_off: new FormControl(''),
      total: new FormControl(''),

      cart: this.fb.array([]),
      // payment_term: new FormControl('', [Validators.required]),
      // due_date: new FormControl(defaultDateTime, [Validators.required]),
      // shipping_date: new FormControl(defaultDateTime, [Validators.required]),
      status: new FormControl(''),
    });

    this.getCategory();
    this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );

    const financialYear = localStorage.getItem('financialYear');
    this.purchaseReturnDateValidation(financialYear);

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
    this.getPurchaseBill();
    this.getPaymentTerms();
    this.getprefix();
    this.isPercentage[0] = true;
    this.isAmount[0] = false;
  }

  get supplier() {
    return this.debitNotesForm.get('party') as FormControl;
  }

  purchaseReturnDateValidation(financialYear) {
    const dateControl = this.debitNotesForm.get('purchase_return_date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDatesForDateTime(dateControl, financialYear);
    this.minDate = formattedMinDate;
    this.maxDate = formattedMaxDate;
  }

  prefixNo: any;
  getprefix() {
    this.purchaseService.getDebitNotePrefix().subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        // this.prefixNo = res.prefix;
        this.prefixNo = res?.data;
        this.debitNotesForm.get('purchase_return_no').patchValue(this.prefixNo[0]?.id);
      } else {
        this.toastrService.error(res.msg);
      }
    }, err => {
      this.toastrService.error(err.error.msg)
    })
  }

  cart(): FormGroup {
    return this.fb.group({
      barcode: (0),
      qty: (1),
      unit_cost: (0),
      mrp: (0),
      deduction: new FormControl(0),
      tax: (0),
      landing_cost: (0),
      // batch: new FormControl(0, Validators.required),
      total: (0)
    })
  }
  getCart(): FormArray {
    return this.debitNotesForm.get('cart') as FormArray;
  }
  isCart = false;
  addCart(i: any) {
    this.getCart().push(this.cart())
    console.log(i);
    if (i > 0) {
      this.isPercentage[i] = true;
      this.isAmount[i] = false;
    }
    this.isCart = false
  }

  removeCart(i: any) {
    this.getCart().removeAt(i);
    if (this.debitNotesForm?.value?.cart?.length == 0) {
      this.isCart = true
    }
  }
  supplierList: any;

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
  supplierId: any
  oncheck(event: any) {
    // console.log(event);
    const selectedItemId = event; // Assuming the ID field is 'item_id'
    // console.log(selectedItemId);
    this.supplierId = event
    //call detail api
    this.contactService.getSupplierById(selectedItemId).subscribe(res => {
      this.getPaymentTerms = res?.payment_terms?.id;
      this.getVariant('', '', '')
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
    this.addCart(0);
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
  // oncheckVariant(event: any, index) {
  //   const selectedItemId = event.id;
  //   this.variantId = event.id
  //   // this.getBatch()
  //   this.selectedProductName = event.product_title
  //   this.selectBatch = event.batch
  //   // console.log(selectedItemId);
  //   const barcode = (this.debitNotesForm.get('cart') as FormArray).at(index) as FormGroup;
  //   barcode.patchValue({
  //     barcode: selectedItemId
  //   });
  //   if (event.batch.length > 0) {
  //     const barcode = (this.debitNotesForm.get('cart') as FormArray).at(index) as FormGroup;
  //     let discountRupees = (event.batch[0]?.cost_price * event.batch[0]?.discount) / 100
  //     console.log(discountRupees);
  //     let afterDiscountPrice = (event.batch[0]?.cost_price - discountRupees)
  //     let taxRupee: number = (afterDiscountPrice * event.batch[0]?.purchase_tax) / 100
  //     let landingCost = (event.batch[0]?.cost_price - discountRupees) + taxRupee;
  //     console.log(landingCost);
  //     barcode.patchValue({
  //       barcode: selectedItemId,
  //       mrp: event.batch[0]?.mrp,
  //       qty: event.batch[0]?.stock,
  //       tax: event.batch[0]?.purchase_tax,
  //       discount: event.batch[0]?.discount,
  //       unit_cost: event.batch[0]?.cost_price,
  //       landing_cost: landingCost
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
  landingCost: any;
  batchCostPrice: any[] = [];
  originalPrice: any[] = [];
  oncheckVariant(event: any, index) {
    const selectedItemId = event.id;
    console.log(event);
    this.selectedProductName = event.product_title;
    this.selectBatch = event.batch;
    this.apiPurchaseTax = event?.product?.purchase_tax?.amount_tax_slabs[0]?.tax?.tax_percentage || 0;
    this.batchDiscount = event.batch[0]?.discount || 0;
    this.isTaxAvailable[index] = event?.product?.purchase_tax_including;
    this.batchCostPrice[index] = event?.batch[0]?.cost_price || 0;
    this.originalPrice[index] = event?.batch[0]?.cost_price || 0;
    if (event?.product?.purchase_tax_including == true) {
      let costprice = event?.batch[0]?.cost_price || 0;
      // landing cost
      // let getDiscountPrice = (costprice * this.batchDiscount) / 100
      //for decution formula
      let getDiscountPrice = (costprice * 0) / 100;
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
      // let getDiscountPrice = (costprice * this.batchDiscount) / 100
      //for decution formula
      let getDiscountPrice = (costprice * 0) / 100
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
          // discount: event.batch[0]?.discount || 0,
          unit_cost: this.originalCoastPrice,
          landing_cost: this.landingCost
        });
      } else {
        this.tax[index] = 18
        barcode.patchValue({
          barcode: selectedItemId,
          mrp: event.batch[0]?.mrp,
          qty: event.batch[0]?.stock,
          tax: 18,
          // discount: event.batch[0]?.discount || 0,
          unit_cost: event.batch[0]?.cost_price,
          landing_cost: this.landingCost || 0
        });
      }
      console.log(event.batch);
    } else {
      this.tax[index] = 18
      const barcode = (this.debitNotesForm.get('cart') as FormArray).at(index) as FormGroup;
      barcode.patchValue({
        barcode: selectedItemId,
        tax: 18,
      });
    }
    this.purchase4(index)
  }
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
      let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + this.apiPurchaseTax))) || 0
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

  isPercentage: boolean[] = [];
  isAmount: boolean[] = [];
  percentage(index) {
    this.isPercentage[index] = false;
    this.isAmount[index] = true;
    console.log(this.isPercentage[index]);
    console.log(this.isAmount[index]);
  }
  amount(index) {
    this.isPercentage[index] = true;
    this.isAmount[index] = false;
    console.log(this.isPercentage[index]);
    console.log(this.isAmount[index])
  }

  userInputEntered: boolean[] = [];
  purchasee(index) {
    this.userInputEntered[index] = true;
    const result = this.calculatePurchaseEveryIndex(index);
    this.coastprice[index] = result.toFixed(2)
    setTimeout(() => {
      this.calculateRoundoffValue()
    }, 2000);
    this.calculateTotalLandingCostEveryIndex(index);
    this.calculateTotalEveryIndex(index)
  }
  costPrice: any[] = [];
  purchase2(costPrice: any, i) {
    this.costPrice[i] = costPrice;
    console.log(this.costPrice);
  }
  purchase4(index) {
    const result = this.calculationDiscountCostPrice(index);
    this.coastprice[index] = result.toFixed(2);
    console.log(this.coastprice[index], 'this.coastprice[index]');
    setTimeout(() => {
      this.calculateRoundoffValue()
    }, 2000);
    this.calculateTotalLandingCostEveryIndex(index);
    this.calculateTotalEveryIndex(index)
  }
  calculationDiscountCostPrice(index) {
    const cartItem = this.getCart().controls[index];
    const purchaseRateControl = cartItem.get('unit_cost');
    const taxPercentageControl = cartItem.get('tax');
    // const discountPercentageControl = cartItem.get('discount');
    const deductionPercentageControl = cartItem.get('deduction');
    this.batchCostPrice[index] = this.coastprice[index];
    if (purchaseRateControl && taxPercentageControl && deductionPercentageControl) {
      if (this.isTaxAvailable[index] == true) {
        // const discountPercentage = +discountPercentageControl.value || 0;
        const deductionPercentage = +deductionPercentageControl.value || 0;
        const taxPercentage = +taxPercentageControl.value || 0;
        const purchaseRate = +purchaseRateControl.value || 0;
        console.log(this.originalPrice[index], 'this.originalPrice[index] ');
        if (this.costPrice[index] > 0) {
          // landing cost
          if (this.isPercentage[index] == true) {
            let getDiscountPrice = (this.costPrice[index] * deductionPercentage) / 100
            let getCoastPrice = this.costPrice[index] - getDiscountPrice;
            // cost price 
            let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + taxPercentage))) || 0
            this.taxIntoRupees[index] = taxprice || 0;
            let purchasePrice = getCoastPrice - taxprice;
            return purchasePrice;
          } else if (this.isAmount[index] == true) {
            // let getDiscountPrice = (purchaseRate * discountPercentage) / 100
            let getCoastPrice = this.costPrice[index] - deductionPercentage;
            // cost price 
            let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + taxPercentage))) || 0
            this.taxIntoRupees[index] = taxprice || 0;
            let purchasePrice = getCoastPrice - taxprice;
            return purchasePrice;
          }
        } else {
          // landing cost
          if (this.isPercentage[index] == true) {
            let getDiscountPrice = (this.originalPrice[index] * deductionPercentage) / 100
            let getCoastPrice = this.originalPrice[index] - getDiscountPrice;
            // cost price 
            let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + taxPercentage))) || 0
            this.taxIntoRupees[index] = taxprice || 0;
            let purchasePrice = getCoastPrice - taxprice;
            return purchasePrice;
          } else if (this.isAmount[index] == true) {
            // let getDiscountPrice = (purchaseRate * discountPercentage) / 100
            let getCoastPrice = this.originalPrice[index] - deductionPercentage;
            // cost price 
            let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + taxPercentage))) || 0
            this.taxIntoRupees[index] = taxprice || 0;
            let purchasePrice = getCoastPrice - taxprice;
            return purchasePrice;
          }
        }

      } else {
        // const discountPercentage = +discountPercentageControl.value || 0;
        const deductionPercentage = +deductionPercentageControl.value || 0;
        const purchaseRate = +purchaseRateControl.value || 0;
        if (this.isPercentage[index] == true) {
          // cost price 
          let getDiscountPrice = (this.coastprice[index] * deductionPercentage) / 100
          let getCoastPrice = this.coastprice[index] - getDiscountPrice;
          return getCoastPrice;
        } else if (this.isAmount[index] == true) {
          // cost price 
          let getCoastPrice = this.coastprice[index] - deductionPercentage;
          return getCoastPrice;
        }
      }
    }
    return 0
  }
  calculatePurchaseEveryIndex(index: number): number {
    const cartItem = this.getCart().controls[index];
    const purchaseRateControl = cartItem.get('unit_cost');
    const taxPercentageControl = cartItem.get('tax');
    // const discountPercentageControl = cartItem.get('discount');
    const deductionPercentageControl = cartItem.get('deduction');
    this.batchCostPrice[index] = this.coastprice[index];
    if (purchaseRateControl && taxPercentageControl && deductionPercentageControl) {
      if (this.isTaxAvailable[index] == true) {
        // const discountPercentage = +discountPercentageControl.value || 0;
        const deductionPercentage = +deductionPercentageControl.value || 0;
        const taxPercentage = +taxPercentageControl.value || 0;
        const purchaseRate = +purchaseRateControl.value || 0;
        // landing cost
        if (this.isPercentage[index] == true) {
          let getDiscountPrice = (purchaseRate * deductionPercentage) / 100
          let getCoastPrice = purchaseRate - getDiscountPrice;
          // cost price 
          let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + taxPercentage))) || 0
          this.taxIntoRupees[index] = taxprice || 0;
          let purchasePrice = getCoastPrice - taxprice;
          return purchasePrice;
        } else if (this.isAmount[index] == true) {
          // let getDiscountPrice = (purchaseRate * discountPercentage) / 100
          let getCoastPrice = purchaseRate - deductionPercentage;
          // cost price 
          let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + taxPercentage))) || 0
          this.taxIntoRupees[index] = taxprice || 0;
          let purchasePrice = getCoastPrice - taxprice;
          return purchasePrice;
        }
      } else {
        // const discountPercentage = +discountPercentageControl.value || 0;
        const deductionPercentage = +deductionPercentageControl.value || 0;
        const purchaseRate = +purchaseRateControl.value || 0;
        if (this.isPercentage[index] == true) {
          // cost price 
          let getDiscountPrice = (this.coastprice[index] * deductionPercentage) / 100
          let getCoastPrice = this.coastprice[index] - getDiscountPrice;
          return getCoastPrice;
        } else if (this.isAmount[index] == true) {
          // cost price 
          let getCoastPrice = this.coastprice[index] - deductionPercentage;
          return getCoastPrice;
        }
      }
    }
    return 0
  }
  TotalWithTax: any[] = [];
  TotalWithoutTax: any[] = [];
  calculateTotalLandingCostEveryIndex(index: number): number {
    const cartItem = this.getCart().controls[index];
    const purchaseRateControl = cartItem.get('unit_cost');
    const taxPercentageControl = cartItem.get('tax');
    // const discountPercentageControl = cartItem.get('discount');
    const deductionPercentageControl = cartItem.get('deduction');
    const qtyControlControl = cartItem.get('qty');
    if (purchaseRateControl && taxPercentageControl && deductionPercentageControl && qtyControlControl) {
      if (this.isTaxAvailable[index] == true) {
        const purchaseRate = +purchaseRateControl.value || 0;
        // const discountPercentage = +discountPercentageControl.value || 0;   
        const qty = +qtyControlControl.value || 0;
        const deductionPercentage = +deductionPercentageControl.value || 0;
        if (this.batchCostPrice[index] > 0) {
          if (this.isPercentage[index] == true) {
            const discountAmount = (this.batchCostPrice[index] * deductionPercentage) / 100;
            const afterDiscountAmount = this.batchCostPrice[index] - discountAmount
            this.TotalWithoutTax[index] = afterDiscountAmount * qty || 0
            const landingCost = afterDiscountAmount || 0
            // without tax price 
            const barcode = (this.debitNotesForm.get('cart') as FormArray).at(index) as FormGroup;
            barcode.patchValue({
              landing_cost: landingCost.toFixed(2)
            });
            return landingCost;
          } else if (this.isAmount[index] == true) {
            const afterDiscountAmount = this.batchCostPrice[index] - deductionPercentage
            this.TotalWithoutTax[index] = afterDiscountAmount * qty || 0
            const landingCost = afterDiscountAmount || 0
            // without tax price 
            const barcode = (this.debitNotesForm.get('cart') as FormArray).at(index) as FormGroup;
            barcode.patchValue({
              landing_cost: landingCost.toFixed(2)
            });
            return landingCost;
          }
        } else {
          if (this.isPercentage[index] == true) {
            const discountAmount = (this.coastprice[index] * deductionPercentage) / 100;
            const afterDiscountAmount = this.coastprice[index] - discountAmount;
            this.TotalWithoutTax[index] = afterDiscountAmount * qty || 0
            const landingCost = afterDiscountAmount || 0
            const barcode = (this.debitNotesForm.get('cart') as FormArray).at(index) as FormGroup;
            barcode.patchValue({
              landing_cost: landingCost.toFixed(2)
            });
            return landingCost;
          } else if (this.isAmount[index] == true) {
            const afterDiscountAmount = this.coastprice[index] - deductionPercentage;
            this.TotalWithoutTax[index] = afterDiscountAmount * qty || 0
            const landingCost = afterDiscountAmount || 0
            const barcode = (this.debitNotesForm.get('cart') as FormArray).at(index) as FormGroup;
            barcode.patchValue({
              landing_cost: landingCost.toFixed(2)
            });
            return landingCost;
          }
        }
      } else {
        let purchaseTax = 18
        // const discountPercentage = +discountPercentageControl.value || 0;
        const deductionPercentage = +deductionPercentageControl.value || 0;
        const qty = +qtyControlControl.value || 0;
        if (this.isPercentage[index] == true) {
          // cost price 
          let getDiscountPrice = (this.costPrice[index] * deductionPercentage) / 100
          let getCoastPrice = this.costPrice[index] - getDiscountPrice;
          this.originalCoastPrice = getCoastPrice
          // without tax price 
          this.TotalWithoutTax[index] = getCoastPrice * qty || 0;
          // landing cost
          let taxPrice = getCoastPrice - (getCoastPrice * (100 / (100 + purchaseTax))) || 0
          this.taxIntoRupees[index] = taxPrice || 0;
          let landingCost = getCoastPrice + taxPrice || 0;
          const barcode = (this.debitNotesForm.get('cart') as FormArray).at(index) as FormGroup;
          barcode.patchValue({
            landing_cost: landingCost.toFixed(2)
          });
          return landingCost;
        } else if (this.isAmount[index] == true) {
          // cost price 
          let getCoastPrice = this.costPrice[index] - deductionPercentage;
          this.originalCoastPrice = getCoastPrice
          // without tax price 
          this.TotalWithoutTax[index] = getCoastPrice * qty || 0;
          // landing cost
          let taxPrice = getCoastPrice - (getCoastPrice * (100 / (100 + purchaseTax))) || 0
          this.taxIntoRupees[index] = taxPrice || 0;
          let landingCost = getCoastPrice + taxPrice || 0;
          const barcode = (this.debitNotesForm.get('cart') as FormArray).at(index) as FormGroup;
          barcode.patchValue({
            landing_cost: landingCost.toFixed(2)
          });
          return landingCost;
        }
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
    let total = 0;
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
  loaderCreate = false;
  formId: any;
  loaderPrint = false;
  loaderDraft = false;



  submit(type: any) {
    // console.log(this.debitNotesForm.value);
    if (this.debitNotesForm.valid) {
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
      formdata.append('total_deduction', this.debitNotesForm.get('total_deduction')?.value);
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
          // Convert the value to an integer if it's a number
          if (!isNaN(control.value)) {
            cartObject[key] = parseFloat(control.value);
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
        if (this.getRes.success) {
          if (type == 'new') {
            this.loaderCreate = false;
            this.debitNotesForm.reset()
            this.supplierControl.reset()
            this.ngOnInit()
          } else if (type == 'print') {
            this.toastrService.success(this.getRes.msg, '', { timeOut: 2000, });
            this.loaderPrint = false;
            this.router.navigate(['//purchase/details-purchaseReturn/' + this.getRes.id])
            // setTimeout(() => {
            //   // this.materialForm.reset()
            //   // this.ngOnInit()
            //   this.supplierControl.reset();
            // }, 3000);
          }
          else if (type == 'draft') {
            this.loaderDraft = false;
            this.toastrService.success(this.getRes.msg, '', { timeOut: 2000, });
            this.router.navigate(['//purchase/purchaseReturn-list'])
          }
          else {
            this.loader = false;
            this.toastrService.success(this.getRes.msg, '', { timeOut: 2000, });
            this.router.navigate(['//purchase/purchaseReturn-list'])
          }
        } else {
          this.toastrService.error(this.getRes.purchase[0])
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
      this.debitNotesForm.markAllAsTouched()
      this.toastrService.error('Please Fill All The Required Fields')
    }
  }
  get purchase_return_date() {
    return this.debitNotesForm.get('purchase_return_date') as FormControl;
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
    return this.debitNotesForm.get('purchase_bill') as FormControl;
  }
  // get related_name() {
  //   return this.debitNotesForm.get('related_name') as FormControl;
  // }
  // discountt(index: number) {
  //   return this.getCart().controls[index].get('discount');
  // }
  // batch(index: number) {
  //   return this.getCart().controls[index].get('batch');
  // }

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
    this.getVariant('', '', '')
  };
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
  calculateTotalDeduction(): number {
    let totalDeduction = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const deductionControl = this.getCart().controls[i].get('deduction');
      if (deductionControl) {
        totalDeduction += +deductionControl.value || 0;
      }
    }
    return totalDeduction;
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
    setTimeout(() => {
      this.calculateRoundoffValue()
    }, 3000);
    if (decimalPart >= 0.5) {
      return Math.floor(roundedTotal) + 1;
    } else {
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
      return 0;
    }
    const subtractedValue = (100 - decimalPart) / 100;
    if (subtractedValue === 1) {
      this.roudoffValue = 0
      return 0;
    }
    this.roudoffValue = subtractedValue;
    return subtractedValue;
  }
  totalCost: any[] = []
  calculateTotalEveryIndex(index: any) {
    const cartItem = this.getCart().controls[index];
    const landingCost = +cartItem.get('landing_cost').value || 0;
    const qty = +cartItem.get('qty').value || 0;
    console.log(landingCost, 'landing cost');
    console.log(qty);
    const totalForItem = landingCost * qty;
    this.totalCost[index] = totalForItem;
    const barcode = (this.debitNotesForm.get('cart') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      total: totalForItem.toFixed(2)
    });
    return totalForItem;
  }
  calculateTotalTaxIntoRupees(): any {
    let total = 0;
    this.taxIntoRupees?.forEach((number: any) => {
      total += number || 0
    });
    return total;
  }
  calculateTaxintoPrice(index: number): number {
    const cartItem = this.getCart().controls[index];
    const purchaseRate = +cartItem.get('price').value || 0;
    const taxPercentage = +cartItem.get('tax').value || 0;
    const discountPercentage = +cartItem.get('deduction').value;
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

  category: any;
  subcategory: any;
  searc: any;
  myControl = new FormControl('');
  variantList: any[] = [];

  getVariant(search: any, index: any, barcode: any) {
    this.isSearch = true;
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
          this.myControl.setValue(res[0].product_title)
        }
        if (search) {
          //barcode patch
          this.searchs = res;
          this.productOption = res;
          // console.log(this.searchs);
          this.productName[index] = this.searchs[0]?.product_title;
          // console.log(this.productName);
          this.check = true;
          const barcode = (this.debitNotesForm.get('cart') as FormArray).at(index) as FormGroup;
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
          this.oncheckVariant(res[0], index)
          this.myControl.setValue(res[0].product_title)
        }
        if (search) {
          //barcode patch
          this.searchs = res;
          this.productOption = res;
          // console.log(this.searchs);
          this.productName[index] = this.searchs[0]?.product_title;
          // console.log(this.productName);
          this.check = true;
          const barcode = (this.debitNotesForm.get('cart') as FormArray).at(index) as FormGroup;
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

}

