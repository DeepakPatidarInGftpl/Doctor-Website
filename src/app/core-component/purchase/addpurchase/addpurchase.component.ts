import { __values } from 'tslib';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription, debounceTime, map, startWith } from 'rxjs';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
import  * as bootstrap  from 'bootstrap'
@Component({
  selector: 'app-addpurchase',
  templateUrl: './addpurchase.component.html',
  styleUrls: ['./addpurchase.component.scss']
})
export class AddpurchaseComponent implements OnInit {

  searchControl = new FormControl();
  searchResults: any[] = [];
  subscriptions: Subscription[] = [];
  isFormCartInvalid = false;
  totalQty: any;
  subTotal: any;
  discount: any;
  totalTax: any;
  roundOff: any;
  mrpPurchase: number = 0;

  constructor(private purchaseService: PurchaseServiceService, private coreService: CoreService, private fb: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private contactService: ContactService,
    private commonService: CommonServiceService,
    private cdr: ChangeDetectorRef) {
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
  minDate: string = '';
  maxDate: string = '';
  shippingMinDate: string = '';
  shippingMaxDate: string = '';

  get f() {
    return this.purchaseForm.controls;
  }
  searchForm!: FormGroup;
  taxForm: FormGroup;
  subcategoryList;


  Measurable_Product_QUT : number =0;
  ngOnInit(): void {
    const defaultDate = new Date().toISOString().split('T')[0]; // Get yyyy-MM-dd part
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
      shipping_date: new FormControl(defaultDate, [Validators.required]),
      shipping_note: new FormControl(''),
      purchase_cart: this.fb.array([]),
      note: new FormControl(''),
      status: new FormControl(''),
      export: new FormControl(false),
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


    this.taxForm = this.fb.group({
      items: this.fb.array([]),
    });

    this.items.valueChanges.subscribe({
      next: (value: any[]) => {
        this.Measurable_Product_QUT = value.reduce((acc, item) => acc + Number(item.quantity), 0);
      },
    });







    this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );

    const financialYear = localStorage.getItem('financialYear');

    this.shippingDateValidation(financialYear);
    this.orderDateValidation(financialYear);

    this.purchaseForm.get('order_date').valueChanges.subscribe((date) => {
      this.updateShippingDateMin(date, financialYear);
    });

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
    this.getprefix();
    this.getCategory();
    // this.getSubCategory();
    const inputData = [943, 940, 939, 939, 939];

    const uniqueData = inputData.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    console.log(uniqueData);
    const formArray = this.getCart();
    this.userInputEntered = new Array(formArray.length).fill(false);
  }

  updateShippingDateMin(selectedDate: string, financialYear) {
    const dateControl = this.purchaseForm.get('shipping_date');
    if (selectedDate) {
      const minDate = new Date(selectedDate);
      const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear, minDate);
      this.shippingMinDate = formattedMinDate;
      this.shippingMaxDate = formattedMaxDate;
    }
  }

  shippingDateValidation(financialYear) {
    const dateControl = this.purchaseForm.get('shipping_date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDatesForDateTime(dateControl, financialYear);
    this.shippingMinDate = formattedMinDate;
    this.shippingMaxDate = formattedMaxDate;
  }

  orderDateValidation(financialYear) {
    const dateControl = this.purchaseForm.get('order_date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDatesForDateTime(dateControl, financialYear);
    this.minDate = formattedMinDate;
    this.maxDate = formattedMaxDate;
  }

  prefixNo: any;
  getprefix() {
    this.purchaseService.getPurchaseOrderPrefix().subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        // this.prefixNo = res.prefix;
        this.prefixNo = res?.data;
        this.purchaseForm.get('order_no').patchValue(this.prefixNo[0]?.id);
      } else {
        this.toastrService.error(res.msg);
      }
    }, err => {
      this.toastrService.error(err.error.msg)
    })
  }


  category: any;
  subcategory: any;
  searc: any;
  myControls: FormControl[] = [];
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
        if (res) {
          
        this.variantList[index] = res;
        console.log(this.variantList);
        if (barcode === 'barcode') {
          this.oncheckVariant(res[0], index)
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
          const barcode = (this.purchaseForm.get('purchase_cart') as FormArray).at(index) as FormGroup;
          barcode.patchValue({
            barcode: this.searchs[0]?.id
          });
        }

      }


      });
    }
    else {
      this.purchaseService.filterVariant(this.supplierId, this.category, this.subcategory, search).subscribe((res: any) => {
        console.log(res);
        this.isSearch = false;
        if (res && res.length > 0) {
          
        this.variantList[index] = res;
        console.log(this.variantList);
        if (barcode === 'barcode') {
          this.oncheckVariant(res[0], index)
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
          const barcode = (this.purchaseForm.get('purchase_cart') as FormArray).at(index) as FormGroup;
          barcode.patchValue({
            barcode: this.searchs[0]?.id
          });
        }
      }

      });
    }
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
      tax: new FormControl(0, [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      landing_cost: (0),
      total: (0),
      description :'',
    })
  }

  indexCartValue: any;
  openModalProduct(index: number) {
    console.log(index, 'index');
    // this.cartIndex.findIndex(index)
    this.indexCartValue = index
    const modalId = `productModal-${index}`;
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  }

  closeModalProduct(i: number) {
    console.log(i, 'index');
    const modal = document.getElementById(`productModal-${i}`);
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
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
  isCart = false;
  addCart() {
    this.getCart().push(this.purchase_cart());
    this.isCart = false
    const newIndex = this.getCart().controls.length;
    // this.taxIntoRupees = new Array(this.getCart().controls.length).fill(0);
    this.taxIntoRupees[newIndex - 1] = 0
    this.TotalWithoutTax[newIndex - 1] = 0;
    this.setupValueChanges();
    this.myControls.push(new FormControl());
  }
  removeCart(i: any) {
    this.getCart().removeAt(i);
    if (this.purchaseForm?.value?.purchase_cart?.length == 0) {
      this.isCart = true;
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

  supplierAddress: any;
  selectedAddressBilling: any;
  selectedAddressShipping: any;
  selectBatch: any;
  supplierId: any;
  oncheck(event: any) {
    // console.log(event);
    const selectedItemId = event;
    this.supplierId = event;
    // console.log(selectedItemId);
    //call detail api
    this.contactService.getSupplierById(selectedItemId).subscribe(res => {
    
      this.supplierAddress = res;
      this.getVariant('', '', '')
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
    this.setupValueChanges();
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










sub_index:number ;
ShowModal(i:number){
  let myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
  myModal.show();
  this.sub_index = i;

}
  

  
  oncheckVariant(event: any, index : number) {
 

    if(event){
    const selectedItemId = event.id;
    console.log(event);
    let is_measurable = event?.product?.is_measurable;
    // console.log(is_measurable,'deepak')
    if(is_measurable) {
      this.ShowModal(index);
      this.addItem();
    }
    
   
  
   














    this.selectedProductName = event.product_title;
    this.selectBatch = event.batch;

    const purchaseBillFormArray = this.getCart();
    const currentControl = purchaseBillFormArray.at(index) as FormGroup;
    currentControl.controls['barcode'].setValue('');

    const existingProductIndex = purchaseBillFormArray.controls.findIndex(control => control.value.barcode === selectedItemId);
    if (existingProductIndex !== -1) {
      const existingProduct = purchaseBillFormArray.at(existingProductIndex) as FormGroup;
      const currentQty = existingProduct.get('qty').value || 0;
      existingProduct.patchValue({ qty: Number(currentQty) + 1 });

      const currentControl = purchaseBillFormArray.at(index) as FormGroup;
      currentControl.reset();
      this.barcode[index] = '';
      currentControl.patchValue({
        barcode: 0,
        qty: 0,
        purchase_rate: 0,
        mrp: 0,
        discount: 0,
        landing_cost: 0
    });
      this.myControls[index].reset();
      this.updateTotal(existingProductIndex);
      this.updateLandingCost(existingProductIndex);
      return;
    }

    this.barcode[index] = event.sku;
    this.v_id = event.id;
    this.getVariant('', '', '');

    this.apiPurchaseTax = event?.product?.purchase_tax?.amount_tax_slabs[0]?.tax?.tax_percentage || 0;
    this.batchDiscount = event.batch[0]?.discount || 0;
    this.isTaxAvailable[index] = event?.product?.purchase_tax_including;
    this.batchCostPrice[index] = event?.batch[0]?.cost_price || 0;
    if (event?.product?.purchase_tax_including == true) {
      let costprice = event?.batch[0]?.cost_price || 0;
      // landing cost
      let getDiscountPrice = (costprice * this.batchDiscount) / 100
      console.log(getDiscountPrice);
      let getCoastPrice = costprice - getDiscountPrice;
      console.log(getCoastPrice, 'getCoastPrice');
      this.landingCost = getCoastPrice;
      // cost price
      let taxPrice = (costprice * this.apiPurchaseTax) / 100;
      console.log(taxPrice, 'taxprice');
      this.taxIntoRupees[index] = taxPrice || 0;
      this.originalCoastPrice = getCoastPrice;
    } else {
      let costprice = event?.batch[0]?.cost_price || 0;
      let purchaseTax = this.apiPurchaseTax;
      // cost price 
      let getDiscountPrice = (costprice * this.batchDiscount) / 100
      console.log(getDiscountPrice);
      let getCoastPrice = costprice - getDiscountPrice;
      this.originalCoastPrice = getCoastPrice
      // landing cost
      let taxPrice = (costprice * purchaseTax) / 100;
      this.taxIntoRupees[index] = taxPrice || 0;
      let landingcost = getCoastPrice + taxPrice;
      this.landingCost = landingcost;
      console.log(landingcost);
    }
    if (event.batch.length > 0) {
      const barcode = (this.purchaseForm.get('purchase_cart') as FormArray).at(index) as FormGroup;
      this.tax[index] = this.apiPurchaseTax
      console.log(this.originalCoastPrice, 'this.originalCoastPrice');
      console.log(this.landingCost, 'this.landingCost');
      if (event?.product?.purchase_tax_including == true) {
        barcode.patchValue({
          barcode: selectedItemId,
          mrp: event.batch[0]?.mrp,
          qty: 1,
          tax: this.apiPurchaseTax,
          discount: event.batch[0]?.discount || 0,
          purchase_rate: this.originalCoastPrice.toFixed(2),
          landing_cost: this.landingCost
        });
      } else {
        this.tax[index] = this.apiPurchaseTax
        barcode.patchValue({
          barcode: selectedItemId,
          mrp: event.batch[0]?.mrp,
          qty: 1,
          tax: this.apiPurchaseTax,
          discount: event.batch[0]?.discount || 0,
          purchase_rate: event.batch[0]?.cost_price,
          landing_cost: this.landingCost || 0
        });
      }
      console.log(event.batch);
    } else {
      this.tax[index] = this.apiPurchaseTax
      const barcode = (this.purchaseForm.get('purchase_cart') as FormArray).at(index) as FormGroup;
      barcode.patchValue({
        barcode: selectedItemId,
        tax: this.apiPurchaseTax,
        mrp: event.batch[0]?.mrp || 0,
        qty: 1 || 0,
        discount: event.batch[0]?.discount || 0,
        purchase_rate: event.batch[0]?.cost_price || 0,
        landing_cost: this.landingCost || 0
      });
    }
    this.updateTotal(index);
    this.updateLandingCost(index);





  }

  }







  get items():FormArray {
    return this.taxForm.get('items') as FormArray;
  }


  addItem() {
    const item = this.fb.group({
      measurement: ['',Validators.required],
      quantity: ['',Validators.required],
    });
    this.items.push(item);
    // console.log(this.items)
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

   isLastItem(index: number): boolean {
    const cartControls = this.items.controls;
    return index === cartControls.length - 1;
  }
  ckForm:boolean = false;
  HendalSubmit(btn:any){
    if(this.items.invalid){
      this.ckForm = true;
       return
    }

    let str:string = ''
this.items.controls.forEach((res:any,i :number)=>{
  let val = res.get('measurement').value;
  let val2 = res.get('quantity').value;
  str += val+"*"+val2
  if (i !== this.items.controls.length -1) {
    str += ","
  }
})
// console.log(str,'val')






    const barcode = (this.purchaseForm.get('purchase_cart') as FormArray).at(this.sub_index) as FormGroup;
    barcode.patchValue({
      qty: this.Measurable_Product_QUT ,
      description : str

    });
   btn.click();
   this.items.reset();
   this.items.clear()
  

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
      let taxprice = ((costprice * this.apiPurchaseTax) / 100) || 0
      this.taxIntoRupees[index] = taxprice || 0;
      let purchasePrice = getCoastPrice - taxprice;
      this.originalCoastPrice = purchasePrice;
      console.log(this.originalCoastPrice);
      // this.coastprice[index] = this.originalCoastPrice.toFixed(2);
      // this.landingPrice[index]=this.landingCost.toFixed(2)
    } else {
      let costprice = this.coastprice[index] || 0;
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
  purchase(index) {
    this.userInputEntered[index] = true;
    const result = this.calculatePurchaseEveryIndex(index);
    this.coastprice[index] = result.toFixed(2)
    // setTimeout(() => {
      this.calculateRoundoffValue()
    // }, 2000);
  }

  calculatePurchaseEveryIndex(index: number): number {
    const cartItem = this.getCart().controls[index];
    const purchaseRateControl = cartItem.get('purchase_rate');
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
        let taxprice = ((purchaseRate * taxPercentage) / 100) || 0
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

  setupValueChanges() {
    const cartArray = this.getCart();
    cartArray.controls.forEach((cartItem, index) => {
      this.subscriptions.push(
        cartItem.valueChanges.subscribe((value) => {
          this.isFormCartInvalid = false;
          this.updateLandingCost(index);
          this.updateTotal(index);
        })
      );
    });
  }

  updateTotal(index: number) {
    const totalForItem = this.calculateTotalEveryIndex(index);
    const cartItem = this.getCart().controls[index];
    cartItem.get('total').setValue(totalForItem.toFixed(2), { emitEvent: false });
  }

  TotalWithTax: any[] = [];
  TotalWithoutTax: any[] = [];
  calculateTotalLandingCostEveryIndex(index: number): number {
    const cartItem = this.getCart().controls[index];
    const purchaseRateControl = cartItem.get('purchase_rate');
    const taxPercentageControl = cartItem.get('tax');
    const discountPercentageControl = cartItem.get('discount');
    const qtyControlControl = cartItem.get('qty');
    if (purchaseRateControl && taxPercentageControl && discountPercentageControl && qtyControlControl) {
      if (this.isTaxAvailable[index] == true) {
        const purchaseRate = +purchaseRateControl.value || 0;
        const discountPercentage = +discountPercentageControl.value || 0;
        const qty = +qtyControlControl.value || 0;
        if (this.batchCostPrice[index] > 0) {
          let taxPrice = (purchaseRate * taxPercentageControl.value) / 100;
          const discountAmount = (this.batchCostPrice[index] * discountPercentage) / 100;
          const afterDiscountAmount = Number(this.batchCostPrice[index]) - discountAmount;
          if(afterDiscountAmount) {
            let totalWithoutTax:any = (purchaseRate * qty).toFixed(2)
            this.TotalWithoutTax[index] = (totalWithoutTax - (taxPrice * qtyControlControl.value)).toFixed(2) || 0
          } else {
            this.TotalWithoutTax[index] = 0;
          }
          const landingCost = afterDiscountAmount || 0
          // without tax price 
          return landingCost;
        } else {
          let taxPrice = (purchaseRate * taxPercentageControl.value) / 100;
          const discountAmount = (this.coastprice[index] * discountPercentage) / 100;
          const afterDiscountAmount = this.coastprice[index] - discountAmount;
          let totalWithoutTax:any = (purchaseRate * qty).toFixed(2)

          this.TotalWithoutTax[index] = (totalWithoutTax - (taxPrice * qtyControlControl.value)).toFixed(2) || 0
          console.log(this.TotalWithoutTax[index]);
          
          const landingCost = afterDiscountAmount || 0
          return landingCost;
        }
      } else {
        let purchaseTax = this.apiPurchaseTax;
        const discountPercentage = +discountPercentageControl.value || 0;
        const qty = +qtyControlControl.value || 0;
        // cost price 
        let getDiscountPrice = 0;
        if(discountPercentage > 0){
           getDiscountPrice = (Number(purchaseRateControl?.value) * discountPercentage) / 100
        }
        let getCoastPrice = Number(purchaseRateControl?.value) - getDiscountPrice;
        this.originalCoastPrice = getCoastPrice
        // without tax price 
        let taxPrice = ((purchaseRateControl?.value * purchaseTax) / 100) || 0
        let totalWithoutTax:any = (getCoastPrice * qty).toFixed(2);
        if(getCoastPrice) {
          this.TotalWithoutTax[index] = (totalWithoutTax - (taxPrice * qtyControlControl.value)).toFixed(2) || 0;
        } else {
          this.TotalWithoutTax[index] = 0;
        }
        // landing cost
        this.taxIntoRupees[index] = taxPrice || 0;
        let landingCost = getCoastPrice || 0;

        return landingCost;
      }
    }
    return 0;
  }

  updateLandingCost(index: number) {
    const landingCost = this.calculateTotalLandingCostEveryIndex(index);
    const cartItem = this.getCart().controls[index];
    cartItem.get('landing_cost').setValue(landingCost.toFixed(2), { emitEvent: false });
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
    let TotalWithoutTax: any = 0;
    this?.TotalWithoutTax?.forEach((number: any) => {
      TotalWithoutTax += parseFloat(number);
    });
    total = TotalWithoutTax.toFixed(2);
    return total;
  }

  getRes: any;
  loader = false;
  loaderCreate = false;
  formId: any;
  loaderPrint = false;
  loaderDraft = false

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

  isCartQtyInvalid(index: number): boolean {
    const formControl = (this.getCart().controls[index] as FormGroup).get('qty');
    return formControl?.invalid && formControl?.touched;
  }

  checkCartValidationSync(): boolean {
    const cartTotal = this.calculateTotal();
    const isValid = cartTotal > 0;
    return isValid;
}

  submit(type: any) {
    this.checkCartValidation();
    if(this.checkCartValidationSync()){
    console.log(this.purchaseForm.value);
    if (this.purchaseForm.valid) {
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
      formdata.append('party', this.purchaseForm.get('party')?.value);
      formdata.append('order_date', this.purchaseForm.get('order_date')?.value);
      formdata.append('order_no', this.purchaseForm.get('order_no')?.value);
      formdata.append('shipping_date', this.purchaseForm.get('shipping_date')?.value);
      formdata.append('shipping_note', this.purchaseForm.get('shipping_note')?.value);
      formdata.append('note', this.purchaseForm.get('note')?.value);
      formdata.append('export', this.purchaseForm.get('export')?.value);
      formdata.append('total_qty', this.purchaseForm.get('total_qty')?.value);
      formdata.append('total_tax', this.calculateTotalTax());
      formdata.append('total_discount', this.calculateTotalDiscount());
      formdata.append('round_off', this.purchaseForm.get('round_off')?.value);
      formdata.append('sub_total', this.purchaseForm.get('sub_total')?.value);
      formdata.append('total', this.purchaseForm.get('total')?.value);
      if (type == 'draft') {
        formdata.append('status', 'Draft');
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
        let qtyValue = 0; 
        Object.keys(cartGroup.controls).forEach((key) => {
          const control:any = cartGroup.controls[key];
          let value = control.value;
          if (key === 'qty') {
            qtyValue = parseFloat(value); 
          }
          if(value?.length === 0){
            cartObject[key] = 0;
          } 
          else if (!isNaN(control.value)) {
            cartObject[key] = parseFloat(control.value);
          } else {
            cartObject[key] = control.value;
          }
        });
        if (qtyValue > 0) {
        cartData.push(cartObject);
        }
      });
      formdata.append('purchase_cart', JSON.stringify(cartData));
      this.purchaseService.addPurchase(formdata).subscribe(res => {
        // console.log(res);
        this.getRes = res;
        if (this.getRes.success) {
          if (type == 'new') {
            this.purchaseForm.reset();
            this.loaderCreate = false;
            this.ngOnInit()
            this.supplierControl.reset()
          } else if (type == 'print') {
            this.toastrService.success(this.getRes.msg, '', { timeOut: 2000, });
            this.loaderPrint = false;
            this.router.navigate(['//purchase/purchaseDetails/' + this.getRes.id])
            // setTimeout(() => {
            //   // this.materialForm.reset()
            //   // this.ngOnInit()
            //   this.supplierControl.reset();
            // }, 3000);
          }
          else if (type == 'draft') {
            this.loaderDraft = false;
            this.toastrService.success(this.getRes.msg, '', { timeOut: 2000, });
            this.router.navigate(['//purchase/purchaselist'])
          }
          else {
            this.loader = false;
            this.toastrService.success(this.getRes.msg, '', { timeOut: 1000, })
            this.router.navigate(['//purchase/purchaselist'])
          }
        } else {
          if (type == 'new') {
            this.loaderCreate = true;
          } else if (type == 'save') {
            this.loader = true;
          } else if (type == 'print') {
            this.loaderPrint = false;
          } else if (type == 'draft') {
            this.loaderDraft = false;
          }
        }
      }, err => {
        if (type == 'new') {
          this.loaderCreate = true;
        } else if (type == 'save') {
          this.loader = true;
        } else if (type == 'print') {
          this.loaderPrint = false;
        } else if (type == 'draft') {
          this.loaderDraft = false;
        }
      })
    } else {
      if (type == 'new') {
        this.loaderCreate = false;
      } else if (type == 'save') {
        this.loader = false;
      }
      this.purchaseForm.markAllAsTouched()
      this.toastrService.error('Please Fill All The Required Fields','', {timeOut: 1000})
    }
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
      ? this.suppliers.filter(supplier =>
        supplier.name.toLowerCase().includes(filterValue) || supplier.company_name.toLowerCase().includes(filterValue)
      )
      : this.suppliers.filter(supplier =>
        !(supplier.name.toLowerCase().includes(filterValue) || supplier.company_name.toLowerCase().includes(filterValue))
      );
    if (!include && filteredSuppliers.length === 0) {
      // console.log("No results found");
      filteredSuppliers.push({ company_name: "No data found" }); // Add a dummy entry for displaying "No data found"
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
    // this.searchProduct('someQuery', '');
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
        const barcode = (this.purchaseForm.get('purchase_cart') as FormArray).at(index) as FormGroup;
        barcode.patchValue({
          barcode: this.searchs[0]?.id
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
      const purchaseControl = this.getCart().controls[i].get('purchase_rate');
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
    // setTimeout(() => {
      this.calculateRoundoffValue()
    // }, 3000);
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
  calculateTotalEveryIndex(index: any) {
    const cartItem = this.getCart().controls[index];
    const landingCost = +cartItem.get('landing_cost').value || 0;
    const qty = +cartItem.get('qty').value || 0;
    const totalForItem = landingCost * qty;
    return totalForItem;
  }

  calculateTotalTaxIntoRupees(): any {
    let total = 0;
    this.taxIntoRupees?.forEach((number: any) => {
      total += number || 0
    });
    return total;
  }
  calculateTaxintoPrice(index: number): any {
    const cartItem = this.getCart().controls[index];
    const purchaseRate = +cartItem.get('purchase_rate').value || 0;
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

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
