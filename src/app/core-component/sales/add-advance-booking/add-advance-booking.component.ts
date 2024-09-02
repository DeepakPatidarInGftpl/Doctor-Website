import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription, debounceTime, distinctUntilChanged, map, startWith } from 'rxjs';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
import { SalesService } from 'src/app/Services/salesService/sales.service';
@Component({
  selector: 'app-add-advance-booking',
  templateUrl: './add-advance-booking.component.html',
  styleUrls: ['./add-advance-booking.component.scss']
})
export class AddAdvanceBookingComponent implements OnInit {


  searchControl = new FormControl();
  searchResults: any[] = [];

  totalQty: any;
  subTotal: any;
  discount: any;
  totalTax: any;
  roundOff: any;
  mrpPurchase: number = 0;
  priceQtyData:any = {};
  getCoastPrice: any;
  totalCartAmount: any;
  calculatingTotal: boolean = false;
  totalDiscountPrice: any = 0;
  taxPrice: any;
  productItemPrice: any[] = [];
  finalTotalAmount: any[] = [];
  currentEmployee: any;
  discountLimit: any;
  isFromSubmitted = false;
  employeeList: any;
  private qtySubscriptions: Subscription[] = [];
  private discountSubscriptions: Subscription[] = [];

  constructor(private saleService: SalesService, private fb: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private contactService: ContactService,
    private commonService: CommonServiceService,
    private cdr: ChangeDetectorRef,
    private coreService: CoreService) {
  }

  accountControlName = 'account';
  userControl = new FormControl();
  productOption: any[] = [];
  filteredOptions: Observable<any>;
  users: any[] = [];
  filteredusers: Observable<any[]>;

  variantControlName = 'account';
  variantControl = new FormControl();
  variants: any[] = [];
  filteredVariants: Observable<any[]>;

  saleEstimateForm!: FormGroup;
  minDate: string = '';
  maxDate: string = '';
  dueMinDate: string = '';
  dueMaxDate: string = '';

  get f() {
    return this.saleEstimateForm.controls;
  }
  searchForm!: FormGroup;
  subcategoryList;

  ngOnInit(): void {
    const defaultDate = new Date().toISOString().split('T')[0]; // Get yyyy-MM-dd part

    const today = new Date();
    const sevenDaysFromToday = new Date(today);
    sevenDaysFromToday.setDate(today.getDate() + 7);
    const defaultDateago7 = sevenDaysFromToday.toISOString().split('T')[0];

    this.saleEstimateForm = this.fb.group({
      account: new FormControl('', [Validators.required]),
      booking_date: new FormControl(defaultDate, [Validators.required]),
      booking_no: new FormControl('', [Validators.required]),
      due_date: new FormControl(defaultDateago7, [Validators.required]),
      payment_terms: new FormControl('', [Validators.required]),

      advance_booking_cart: this.fb.array([]),
      total_qty: new FormControl(0),
      total_tax: new FormControl(0),
      total_discount: new FormControl(0),
      subtotal: new FormControl(0),
      roundoff: new FormControl(0),
      total: new FormControl(0),
      status: new FormControl(''),
      note: new FormControl(''),
    });

    this.searchForm = this.fb.group({
      search: new FormControl()
    })
    this.filteredusers = this.userControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );
    this.filteredVariants = this.variantControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filtr(value, true))
    )

    const financialYear = localStorage.getItem('financialYear');

    this.dueDateValidation(financialYear);
    this.saleAdvanceBookingDateValidation(financialYear);

    this.saleEstimateForm.get('booking_date').valueChanges.subscribe((date) => {
      this.updateDueDateMin(date, financialYear);
    });

    this.userControl.valueChanges.subscribe((res) => {
      if (res.length >= 3) {
        this.getUser(res);
      } else {
        this.users = [];
        this.filteredusers = this.userControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value, true))
        );
      }
    })
    this.getCategory();
    this.getPaymentTerms();
    this.getprefix();
    this.getProfile();
    this.getEmployee();
  }

  updateDueDateMin(selectedDate: string, financialYear) {
    const dateControl = this.saleEstimateForm.get('due_date');
    if (selectedDate) {
      const minDate = new Date(selectedDate);
      const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear, minDate);
      this.dueMinDate = formattedMinDate;
      this.dueMaxDate = formattedMaxDate;
    }
  }

  dueDateValidation(financialYear) {
    const dateControl = this.saleEstimateForm.get('due_date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear);
    this.dueMinDate = formattedMinDate;
    this.dueMaxDate = formattedMaxDate;
  }

  saleAdvanceBookingDateValidation(financialYear) {
    const dateControl = this.saleEstimateForm.get('booking_date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear);
    this.minDate = formattedMinDate;
    this.maxDate = formattedMaxDate;
  }
  prefixNo: any;
  getprefix() {
    this.saleService.getAdvanceBookingPrefix().subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        // this.prefixNo = res.prefix;
        this.prefixNo = res?.data;
        this.saleEstimateForm.get('booking_no').patchValue(this.prefixNo[0]?.id);
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
  myControl = new FormControl('');
  variantList: any[] = [];
  isSearch = false;
  getVariant(search: any, index: any, barcode) {
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
      this.saleService.filterVariant(this.category, this.subcategory, search).subscribe((res: any) => {
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
          console.log(this.searchs[0]?.variant_name);

          const barcode = (this.saleEstimateForm.get('advance_booking_cart') as FormArray).at(index) as FormGroup;
          barcode.patchValue({
            // barcode: this.searchs[0].id,
            // item_name: this.searchs[0]?.variant_name
          });
        }
        console.log(this.saleEstimateForm.value);


      });
    }
    else {
      this.saleService.filterVariant(this.category, this.subcategory, search).subscribe((res: any) => {
        console.log(res);
        this.isSearch = false;
        this.variantList = res;
        console.log(this.variantList);
        if (barcode === 'barcode') {
          this.oncheckVariant(res[0], index);
          this.myControl.setValue(res[0]?.product_title)
        }
        if (search) {
          //barcode patch
          this.searchs = res;
          this.productOption = res;
          // console.log(this.searchs);
          this.productName[index] = this.searchs[0]?.product_title;
          // console.log(this.productName);
          this.check = true;
          const barcode = (this.saleEstimateForm.get('advance_booking_cart') as FormArray)?.at(index) as FormGroup;
          barcode.patchValue({
            // barcode: this.searchs[0]?.id,
            // item_name: this.searchs[0]?.variant_name
          });
        }
        console.log(this.saleEstimateForm.value);
      });
    }
  }

  categoryList: any[] = [];
  filteredCategoryList: any[] = [];
  searchCategory: string = '';
  getCategory() {
    this.saleService.getSearchProduct().subscribe((res: any) => {
      this.categoryList = res;
      this.filteredCategoryList = [...this.categoryList];
    })
  }
  filterCategory() {
    if (this.searchCategory.trim() === '') {
      this.filteredCategoryList = [...this.categoryList];
    } else {
      this.filteredCategoryList = this.categoryList.filter(product =>
        product?.product_title?.toLowerCase().includes(this.searchCategory.toLowerCase())
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

  get account() {
    return this.saleEstimateForm.get('account') as FormControl;
  }

  cart(): FormGroup {
    return this.fb.group({
      barcode: (0),
      item_name: (''),
      qty: (0),
      price: (0),
      // amount: (0),
      discount: new FormControl(0, [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      tax: new FormControl(0, [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      total: (0),
    })
  }
  getCart(): FormArray {
    return this.saleEstimateForm.get('advance_booking_cart') as FormArray;
  }
  isCart = false;
  addCart() {
    this.getCart().push(this.cart());
    this.isCart = false;
    const cartControl = this.cart();
    this.getCart().controls.forEach((control, index) => {
      this.subscribeToQtyChanges(control as FormGroup, index);
    });
  }

  onQtyChange(value: number, index: number) {
    const barcode = (this.saleEstimateForm.get('advance_booking_cart') as FormArray).at(index) as FormGroup;
    if (this.priceQtyData[index]) {
      this.priceQtyData[index].qty = value;
    }

    if (this.priceQtyData[index]?.price) {
      const totalProductPrice = Number(this.priceQtyData[index]?.price);
      const totalProductQty = Number(this.priceQtyData[index]?.qty);
      const taxPercentage = Number(this.priceQtyData[index]?.tax);
      const getCoastPrice = Number(this.priceQtyData[index]?.coastPrice)
      const getTaxPrice = Number(this.priceQtyData[index]?.taxPrice)
      if (totalProductPrice && taxPercentage) {
        this.taxIntoRupees[index] = (totalProductPrice * taxPercentage) / 100;
      }
      let totalWithoutTax = getCoastPrice - getTaxPrice;
      this.TotalWithoutTax[index] = (totalWithoutTax * value).toFixed(2);
      barcode.patchValue({
        qty: value,
        tax: taxPercentage,
        additional_discount: this.priceQtyData[0]?.additional_discount
      });
    }
  }

  unsubscribeAllQty() {
    this.qtySubscriptions.forEach(sub => sub.unsubscribe());
    this.qtySubscriptions = [];
  }

  removeCart(i: any) {
    this.getCart().removeAt(i);
    if (this.saleEstimateForm?.value?.advance_booking_cart?.length == 0) {
      this.isCart = true;
    }
  }
  getUser(query) {
    this.saleService.getUser(query).pipe(debounceTime(2000)).subscribe((res: any) => {
      this.users = res?.data;
      this.filteredusers = this.userControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value, true))
      );
    })
  }
  paymentTermsList: any
  getPaymentTerms() {
    this.contactService.getPaymentTerms().subscribe(res => {
      this.paymentTermsList = res;
      this.saleEstimateForm.get('payment_terms').patchValue(this.paymentTermsList[0]?.id)
    })
  }

  supplierAddress: any;
  selectedAddressBilling: any;
  selectedAddressShipping: any;
  selectBatch: any;
  paymentTerms: any;
  userType: any;

  oncheck(data: any) {
    console.log(data);
    const userName = data?.name;
    const selectedItemId = data?.detail?.account;
    this.userType = data?.account_id;
    const user = this.employeeList.filter((val) => val?.name === userName);
    this.discountLimit = user[0]?.discount_limit;
    //call detail api
    // this.contactService.getCustomerById(selectedItemId).subscribe(res => {
    //   // console.log(res);
    //   this.supplierAddress = res;
    //   this.saleEstimateForm.patchValue({
    //     payment_terms: res?.payment_terms?.id
    //   })
    //   this.supplierAddress?.address?.map((res: any) => {
    //     if (res?.address_type == 'Billing') {
    //       this.selectedAddressBilling = res
    //       console.log(this.selectedAddressBilling);
    //     } else if (res?.address_type == 'Shipping') {
    //       this.selectedAddressShipping = res
    //       console.log(this.selectedAddressShipping);
    //     }
    //   })
    // })

    // data available in data argument
    this.supplierAddress = data?.detail;
    this.supplierAddress?.address?.map((res: any) => {
      if (res?.address_type == 'Billing') {
        this.selectedAddressBilling = res
        console.log(this.selectedAddressBilling);
      } else if (res?.address_type == 'Shipping') {
        this.selectedAddressShipping = res
        console.log(this.selectedAddressShipping);
      }
    })
    const variants = this.saleEstimateForm.get('advance_booking_cart') as FormArray;
    variants.clear();
    this.unsubscribeAllQty();
    this.addCart();
    this.saleEstimateForm.patchValue({
      account: selectedItemId,
    });
    this.getCart().controls.forEach((cartControl: any, index) => {
      this.getCart().controls.forEach((control, index) => {
        this.subscribeToQtyChanges(control as FormGroup, index);
      });
    });
  }

  getProfile() {
    this.coreService.getProfile().subscribe((res: any) => {
      console.log(res);
      this.currentEmployee = res?.username;
    })
  }

  subscribeToQtyChanges(cartControl: FormGroup, index: number) {
    const qtyControl = cartControl.get('qty') as FormControl;
    if (qtyControl) {
      const subscription = qtyControl.valueChanges
        .pipe(distinctUntilChanged())
        .subscribe((value) => {
          this.onQtyChange(value, index);
          this.totalCartAmount = this.calculateTotal(index);
          (this.getCart().at(index) as FormGroup).patchValue({ total: this.totalCartAmount?.toFixed(2) }, { emitEvent: false });
          console.log(this.totalCartAmount);
          this.finalTotalAmount[index] = this.totalCartAmount;
          console.log(this.totalCartAmount);
          // setTimeout(() => {
          this.calculateTotalForAll();
          this.cdr.detectChanges();
          // }, 1000);
        });
      this.qtySubscriptions.push(subscription);
    }
  }

  getEmployee() {
    this.contactService.getEmployee().subscribe((res: any) => {
      this.employeeList = res;
    })
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
    const barcode = (this.saleEstimateForm.get('advance_booking_cart') as FormArray).at(index) as FormGroup;
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
      price: address?.cost_price,
      landing_cost: landingCost
      // additional_discount: address?.additional_discount,
      // discount_type: '%',
      // price: 0,
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
  //   if (event.batch.length > 0) {
  //     const barcode = (this.saleEstimateForm.get('advance_booking_cart') as FormArray).at(index) as FormGroup;
  //     barcode.patchValue({
  //       barcode: selectedItemId,
  //       mrp: event.batch[0]?.mrp,
  //       qty: 1,
  //       tax: event.batch[0]?.purchase_tax,
  //       discount: event.batch[0]?.discount,
  //       price: event.batch[0]?.cost_price,
  //     });
  //     console.log(event.batch);
  //   }
  // }

  originalCoastPrice: any;
  originalPrice: any[] = []
  apiPurchaseTax: number;
  isTaxAvailable: any[] = [];
  taxIntoRupees: any[] = [];
  tax: any[] = [];
  batchDiscount: any;
  landingCost: any;
  batchCostPrice: any[] = [];
  oncheckVariant(event: any, index) {
    const selectedItemId = event.id;

  const currentControl = (this.saleEstimateForm.get('advance_booking_cart') as FormArray).at(index) as FormGroup;
  currentControl.controls['barcode'].setValue('');
  const priceQtyArray:any = Object.values(this.priceQtyData);

  const existingProductIndex = priceQtyArray.findIndex(item => item.barcode === selectedItemId);
  if (existingProductIndex !== -1) {
    priceQtyArray[existingProductIndex].qty += 1;

    const barcode = (this.saleEstimateForm.get('advance_booking_cart') as FormArray).at(existingProductIndex) as FormGroup;
    barcode.patchValue({
      qty: priceQtyArray[existingProductIndex].qty
    });

    const currentControl = (this.saleEstimateForm.get('advance_booking_cart') as FormArray).at(index) as FormGroup;
    currentControl.reset();
    console.log(currentControl);
    this.barcode[index] = '';
      currentControl.patchValue({
        barcode: 0,
        item_name: '',
        qty: 0,
        price: 0,
        discount: 0
    });
    this.calculateTotal(existingProductIndex);
    return;
  }

    this.barcode[index] = event.sku;
    console.log(event);
    this.selectedProductName = event.product_title;
    this.selectBatch = event.batch;
    this.apiPurchaseTax = event?.product?.sale_tax?.amount_tax_slabs[0]?.tax?.tax_percentage || 0;
    this.batchDiscount = event.batch[0]?.discount || 0;
    this.isTaxAvailable[index] = event?.product?.sale_tax_including;
    this.batchCostPrice[index] = event?.batch[0]?.cost_price || 0;
    if (event?.product?.sale_tax_including) {
      if (this.userType == 'Employee') {
        let Employeeprice = event?.batch[0]?.selling_price_employee || 0;
        this.productItemPrice[index] = Employeeprice;
        this.originalPrice[index] = event?.batch[0]?.selling_price_employee || 0;
        // landing cost
        let getDiscountPrice = (Employeeprice * this.batchDiscount) / 100
        console.log(getDiscountPrice);
        let getCoastPrice = Employeeprice - getDiscountPrice;
        this.getCoastPrice = Employeeprice - getDiscountPrice;
        let taxPrice;
        taxPrice = (getCoastPrice * this.apiPurchaseTax) / 100;
        this.taxPrice = (getCoastPrice * this.apiPurchaseTax) / 100;
        this.TotalWithoutTax[index] = ((getCoastPrice * 1) - (taxPrice * 1)).toFixed(2) || 1;
        this.taxIntoRupees[index] = taxPrice || 0;
        this.originalCoastPrice = getCoastPrice;
      } else if (this.userType == 'Dealer') {
        let dealerprice = event?.batch[0]?.selling_price_dealer || 0;
        this.productItemPrice[index] = dealerprice;
        this.originalPrice[index] = event?.batch[0]?.selling_price_dealer || 0;
        // landing cost
        let getDiscountPrice = (dealerprice * this.batchDiscount) / 100
        console.log(getDiscountPrice);
        let getCoastPrice = dealerprice - getDiscountPrice;
        this.getCoastPrice = dealerprice - getDiscountPrice;
        let taxPrice;
        taxPrice = (getCoastPrice * this.apiPurchaseTax) / 100;
        this.taxPrice = (getCoastPrice * this.apiPurchaseTax) / 100;
        this.TotalWithoutTax[index] = ((getCoastPrice * 1) - (taxPrice * 1)).toFixed(2) || 1;
        console.log(taxPrice, 'taxprice');
        this.taxIntoRupees[index] = taxPrice || 0;
        this.originalCoastPrice = getCoastPrice;
      } else {
        let offlineprice = event?.batch[0]?.selling_price_offline || 0;
        this.productItemPrice[index] = offlineprice;
        this.originalPrice[index] = event?.batch[0]?.selling_price_offline || 0;
        // landing cost
        let getDiscountPrice = (offlineprice * this.batchDiscount) / 100
        console.log(getDiscountPrice);
        let getCoastPrice = offlineprice - getDiscountPrice;
        this.getCoastPrice = offlineprice - getDiscountPrice;
        console.log(getCoastPrice, 'getCoastPrice');
        let taxPrice;
        taxPrice = (getCoastPrice * this.apiPurchaseTax) / 100;
        this.taxPrice = (getCoastPrice * this.apiPurchaseTax) / 100;
        this.TotalWithoutTax[index] = ((getCoastPrice * 1) - (taxPrice * 1)).toFixed(2) || 1;
        console.log(this.TotalWithoutTax[index], 'this.TotalWithoutTax[index]');
        console.log(taxPrice, 'taxprice');
        this.taxIntoRupees[index] = taxPrice || 0;
        this.originalCoastPrice = getCoastPrice;
      }
    } else {
      let offlineprice = event?.batch[0]?.selling_price_offline || 0;
      this.productItemPrice[index] = offlineprice;
      // cost price 
      let getDiscountPrice = (offlineprice * this.batchDiscount) / 100
      console.log(getDiscountPrice);
      let getCoastPrice = offlineprice - getDiscountPrice;
      this.getCoastPrice = offlineprice - getDiscountPrice;
      let taxPrice;
      taxPrice = (getCoastPrice * this.apiPurchaseTax) / 100;
      this.taxPrice = (getCoastPrice * this.apiPurchaseTax) / 100;
      console.log(this.TotalWithoutTax[index]);
      this.taxIntoRupees[index] = taxPrice || 0;
      this.originalCoastPrice = getCoastPrice + taxPrice;
      this.TotalWithoutTax[index] = ((getCoastPrice * 1) - (taxPrice * 1)).toFixed(2) || 0;
      // this.originalCoastPrice = getCoastPrice
    }
    if (event.batch.length > 0) {
      const barcode = (this.saleEstimateForm.get('advance_booking_cart') as FormArray).at(index) as FormGroup;
      this.tax[index] = this.apiPurchaseTax
      console.log(this.originalCoastPrice, 'this.originalCoastPrice');
      let taxValue = 0;
      if (event?.product?.sale_tax_including == true) {
        barcode.patchValue({
          barcode: selectedItemId,
          item_name: event?.product_title,
          amount: event.batch[0]?.mrp,
          qty: 1,
          tax: this.apiPurchaseTax,
          discount: event.batch[0]?.discount || 0,
          price: Number(this.originalCoastPrice).toFixed(2),
        });
        taxValue = this.apiPurchaseTax;
      } else {
        this.tax[index] = event?.product?.sale_tax?.amount_tax_slabs[0]?.tax?.tax_percentage
        barcode.patchValue({
          barcode: selectedItemId,
          item_name: event?.product_title,
          qty: 1,
          tax: event?.product?.sale_tax?.amount_tax_slabs[0]?.tax?.tax_percentage,
          discount: event.batch[0]?.discount || 0,
          price: Number(this.originalCoastPrice).toFixed(2),
          // landing_cost: this.landingCost || 0
        });
        taxValue = event?.product?.sale_tax?.amount_tax_slabs[0]?.tax?.tax_percentage;
      }
      this.priceQtyData[index] = {
        barcode: selectedItemId,
        price: this.originalCoastPrice.toFixed(2),
        qty: 1,
        additional_discount: event.batch[0]?.additional_discount || 0,
        tax: taxValue,
        coastPrice: this.getCoastPrice,
        taxPrice: this.taxPrice
      };
      this.calculateTotal(index);
      this.calculateTotalDiscount();
      console.log(event.batch);
    } else {
      this.tax[index] = 0
      const barcode = (this.saleEstimateForm.get('advance_booking_cart') as FormArray).at(index) as FormGroup;
      barcode.patchValue({
        barcode: selectedItemId,
        item_name: event?.product_title,
        tax: 0,
        qty: 0,
        discount: 0,
        price: 0,
      });
      
      this.priceQtyData[index] = {
        barcode: selectedItemId,
        price: 0,
        qty: 0,
        additional_discount: 0,
        tax: 0,
        coastPrice: 0,
        taxPrice: 0
      };
    }
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
      // cost price 
      let taxprice = ((getCoastPrice * this.apiPurchaseTax) / 100) || 0
      this.taxIntoRupees[index] = taxprice || 0;
      let purchasePrice = getCoastPrice + taxprice;
      this.originalCoastPrice = purchasePrice;
      console.log(this.originalCoastPrice);
      // this.coastprice[index] = this.originalCoastPrice.toFixed(2);
      // this.landingPrice[index]=this.landingCost.toFixed(2)
    } else {
      let costprice = this.coastprice[index] || 0;
      let purchaseTax = this.apiPurchaseTax;
      // cost price 
      let getDiscountPrice = (costprice * this.batchDiscount) / 100
      console.log(getDiscountPrice, 'getDiscountPrice');
      let getCoastPrice = costprice - getDiscountPrice;

      // tax price 
      let taxprice = ((getCoastPrice * purchaseTax) / 100) || 0
      this.taxIntoRupees[index] = taxprice || 0;
      let purchasePrice = getCoastPrice + taxprice;
      this.originalCoastPrice = purchasePrice;
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
    setTimeout(() => {
      this.calculateRoundoffValue()
    }, 2000);
  }
  costPrice: any
  purchase2(costPrice: any) {
    this.costPrice = costPrice;
    console.log(this.costPrice);
  }
  calculatePurchaseEveryIndex(index: number): number {
    const cartItem = this.getCart().controls[index];
    const purchaseRateControl = cartItem.get('price');
    const taxPercentageControl = cartItem.get('tax');
    const discountPercentageControl = cartItem.get('discount');
    const QtyControl = cartItem.get('qty');
    this.batchCostPrice[index] = this.coastprice[index];
    if (purchaseRateControl && taxPercentageControl && discountPercentageControl) {
      if (this.isTaxAvailable[index] == true) {
        const discountPercentage = +discountPercentageControl.value || 0;
        const taxPercentage = +taxPercentageControl.value || 0;
        const purchaseRate = +purchaseRateControl.value || 0;
        const qty = +QtyControl.value || 1;
        // landing cost
        let getDiscountPrice = (purchaseRate * discountPercentage) / 100;
        let getCoastPrice = purchaseRate - getDiscountPrice;
        console.log(getCoastPrice);
        console.log(qty);

        this.TotalWithoutTax[index] = (getCoastPrice * qty).toFixed(2) || 0
        console.log(this.TotalWithoutTax[index]);

        // cost price 
        let taxprice = ((getCoastPrice * taxPercentage) / 100) || 0
        this.taxIntoRupees[index] = taxprice || 0;
        let purchasePrice = getCoastPrice + taxprice;
        console.log(purchasePrice);

        return purchasePrice;
      } else {
        const discountPercentage = +discountPercentageControl.value || 0;
        const purchaseRate = +purchaseRateControl.value || 0;
        const qty = +QtyControl.value || 1;
        let purchaseTax = this.apiPurchaseTax;
        // cost price 
        let getDiscountPrice = (this.coastprice[index] * discountPercentage) / 100
        let getCoastPrice = this.coastprice[index] - getDiscountPrice;
        console.log(getCoastPrice);
        this.TotalWithoutTax[index] = (getCoastPrice * qty).toFixed(2) || 0
        // tax price 
        let taxprice = ((getCoastPrice * purchaseTax) / 100) || 0
        this.taxIntoRupees[index] = taxprice || 0;
        let purchasePrice = getCoastPrice + taxprice;
        this.originalCoastPrice = purchasePrice;
        return purchasePrice;
      }
    }
    return 0
  }
  purchase4(index) {
    const result = this.calculationDiscountCostPrice(index);
    this.coastprice[index] = result.toFixed(2);
    console.log(this.coastprice[index], 'this.coastprice[index]');

    setTimeout(() => {
      this.calculateRoundoffValue()
    }, 2000);
  }
  calculationDiscountCostPrice(index) {
    console.log(this.costPrice);
    const cartItem = this.getCart().controls[index];
    const purchaseRateControl = cartItem.get('price');
    const taxPercentageControl = cartItem.get('tax');
    const discountPercentageControl = cartItem.get('discount');
    const QtyControl = cartItem.get('qty');
    this.batchCostPrice[index] = this.coastprice[index];
    if (purchaseRateControl && taxPercentageControl && discountPercentageControl) {
      if (this.isTaxAvailable[index] == true) {
        const discountPercentage = +discountPercentageControl.value || 0;
        const taxPercentage = +taxPercentageControl.value || 0;
        const purchaseRate = +purchaseRateControl.value || 0;
        const qty = +QtyControl.value;
        if (this.costPrice > 0) {
          console.log(this.costPrice, 'this.costPrice > 0');
          let getDiscountPrice = (this.costPrice * discountPercentage) / 100;
          console.log(getDiscountPrice);
          let getCoastPrice = this.costPrice - getDiscountPrice;
          this.TotalWithoutTax[index] = (getCoastPrice * qty).toFixed(2) || 0
          // cost price 
          console.log(getCoastPrice, 'cost price this');
          let taxprice = ((getCoastPrice * taxPercentage) / 100) || 0
          this.taxIntoRupees[index] = taxprice || 0;
          console.log(taxprice);
          let purchasePrice = getCoastPrice + taxprice;
          return purchasePrice;
        } else {
          console.log(this.originalPrice[index], 'this.originalPrice[index]');
          let getDiscountPrice = (this.originalPrice[index] * discountPercentage) / 100
          let getCoastPrice = this.originalPrice[index] - getDiscountPrice;
          this.TotalWithoutTax[index] = (getCoastPrice * qty).toFixed(2) || 0
          console.log(this.TotalWithoutTax[index]);
          console.log(getCoastPrice, 'getCoastPrice');
          // cost price 
          let taxprice = ((getCoastPrice * taxPercentage) / 100) || 0
          this.taxIntoRupees[index] = taxprice || 0;
          let purchasePrice = getCoastPrice + taxprice;
          console.log(purchasePrice, 'purchasePrice');

          return purchasePrice;
        }
        // // landing cost
        // let getDiscountPrice = (this.costPrice * totalDiscount) / 100
        // let getCoastPrice = this.costPrice - getDiscountPrice;
        // // cost price 
        // let taxprice = ((getCoastPrice * taxPercentage) / 100) || 0
        // this.taxIntoRupees[index] = taxprice || 0;
        // let purchasePrice = getCoastPrice - taxprice;
        // return purchasePrice;
      } else {
        const discountPercentage = +discountPercentageControl.value || 0;
        const purchaseRate = +purchaseRateControl.value || 0;
        let purchaseTax = this.apiPurchaseTax;
        const qty = +QtyControl.value;
        // cost price 
        let getDiscountPrice = (this.costPrice * discountPercentage) / 100
        let getCoastPrice = this.costPrice - getDiscountPrice;
        this.TotalWithoutTax[index] = (getCoastPrice * qty).toFixed(2) || 0
        console.log(this.TotalWithoutTax[index]);
        let taxprice = ((getCoastPrice * purchaseTax)/ 100) || 0
        this.taxIntoRupees[index] = taxprice || 0;
        let purchasePrice = getCoastPrice + taxprice;
        this.originalCoastPrice = purchasePrice;
        return purchasePrice;
      }
    }
    return 0
  }
  TotalWithTax: any[] = [];
  TotalWithoutTax: any[] = [];
  calculateTotalWithTax(): number {
    let total = 0;
    this?.TotalWithTax?.forEach((number: any) => {
      total += number;
    })
    return total;
  }
  calculateTotalWithoutTax(): number {
    let total = 0;
    let totalWithoutTax:any = 0;
    this?.TotalWithoutTax?.forEach((number: any) => {
      totalWithoutTax += parseFloat(number);
    })
    total = totalWithoutTax.toFixed(2)
    return total;
  }

  getRes: any;
  loader = false;
  loaderCreate = false;
  loaderPrint = false;
  loaderDraft = false;
  submit(type: any) {
    console.log(this.saleEstimateForm.value);
    if (this.saleEstimateForm.valid) {
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
      formdata.append('account', this.saleEstimateForm.get('account')?.value);
      formdata.append('booking_date', this.saleEstimateForm.get('booking_date')?.value);
      formdata.append('booking_no', this.saleEstimateForm.get('booking_no')?.value);
      formdata.append('due_date', this.saleEstimateForm.get('due_date')?.value);
      formdata.append('payment_terms', this.saleEstimateForm.get('payment_terms')?.value);
      formdata.append('note', this.saleEstimateForm.get('note')?.value);
      formdata.append('total_qty', this.saleEstimateForm.get('total_qty')?.value);
      formdata.append('total_tax', this.saleEstimateForm.get('total_tax')?.value);
      formdata.append('total_discount', this.saleEstimateForm.get('total_discount')?.value);
      formdata.append('roundoff', this.saleEstimateForm.get('roundoff')?.value);
      formdata.append('subtotal', this.saleEstimateForm.get('subtotal')?.value);
      formdata.append('total', this.calculateTotalForAll());
      if (type == 'draft') {
        formdata.append('status', 'Draft');
      }
      const cartArray = this.saleEstimateForm.get('advance_booking_cart') as FormArray;
      const cartData = [];
      cartArray.controls.forEach((address) => {
        const cartGroup = address as FormGroup;
        const cartObject = {};
        Object.keys(cartGroup.controls).forEach((key) => {
          const control = cartGroup.controls[key];
          let value = control?.value;
          // Convert the value to an integer if it's a number, but keep item_name as a string
          if(value?.length === 0){
            cartObject[key] = 0;
          } else if (key !== 'item_name' && !isNaN(control.value)) {
            cartObject[key] = parseFloat(control.value);
          } else {
            cartObject[key] = control.value;
          }
        });
        cartData.push(cartObject);
      });
      formdata.append('advance_booking_cart', JSON.stringify(cartData));


      this.saleService.addAdvanceBooking(formdata).subscribe(res => {
        // console.log(res);
        this.getRes = res;
        if (this.getRes.success) {
          if (type == 'new') {
            this.loaderCreate = false;
            this.saleEstimateForm.reset()
            this.ngOnInit()
            this.userControl.reset()
          } else if (type == 'print') {
            this.loaderPrint = false;
            this.toastrService.success(this.getRes.msg);
            this.router.navigate(['//sales/detail-advance-booking/' + this.getRes?.id])
          } else if (type == 'draft') {
            this.loaderDraft = false;
            this.toastrService.success(this.getRes.msg);
            this.router.navigate(['//sales/advance-booking-list'])
          } else {
            this.loader = false;
            this.toastrService.success(this.getRes.msg);
            this.router.navigate(['//sales/advance-booking-list'])
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
      if (type == 'new') {
        this.loaderCreate = false;
      } else if (type == 'save') {
        this.loader = false;
      } else if (type == 'print') {
        this.loaderPrint = false;
      } else if (type == 'draft') {
        this.loaderDraft = false;
      }
      this.saleEstimateForm.markAllAsTouched()
      this.toastrService.error('Please Fill All The Required Fields')
    }
  }

  get booking_no() {
    return this.saleEstimateForm.get('booking_no')
  }
  get booking_date() {
    return this.saleEstimateForm.get('booking_date')
  }
  get due_date() {
    return this.saleEstimateForm.get('due_date')
  }
  get shipping_note() {
    return this.saleEstimateForm.get('shipping_note')
  }
  get note() {
    return this.saleEstimateForm.get('note')
  }
  get payment_terms() {
    return this.saleEstimateForm.get('payment_terms')
  }
  discountt(index: number) {
    return this.getCart().controls[index].get('discount');
  }
  taxx(index: number) {
    return this.getCart().controls[index].get('tax');
  }


  private _filter(value: string | number, include: boolean): any[] {
    // console.log(value);
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredUsers = include
      ? this.users.filter(users => users?.name?.toLowerCase().includes(filterValue) || users.username.toLowerCase().includes(filterValue))
      : this.users.filter(users => !users?.name?.toLowerCase().includes(filterValue) || users.username.toLowerCase().includes(filterValue));
    if (!include && filteredUsers.length === 0) {
      // console.log("No results found");
      filteredUsers.push({ name: "No data found" });
    }
    return filteredUsers;
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
    // this.barcode[index] = value.sku;
    this.v_id = value.id;
    const barcode = (this.saleEstimateForm.get('advance_booking_cart') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      barcode: value.id
    });
    this.getVariant('', '', '')
  };

  searchs: any[] = [];
  productName: any[] = [];
  isProduct = true;
  open() {
    this.isProduct = false
  }
  calculateTotalQty(): any {
    let totalQty = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const qtyControl = this.getCart().controls[i].get('qty') || 0;
      if (qtyControl) {
        totalQty += +qtyControl.value || 0;
      }
    }
    return totalQty;
  }
  calculateTotalAmount(): any {
    let totalMrp = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const mrpControl = this.getCart().controls[i]?.get('amount') || 0;
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
        totalDiscount += +discountControl?.value || 0;
      }
    }
    return totalDiscount;
  }
  calculateTotalPrice(): number {
    let totalPurchase = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const purchaseControl = this.getCart().controls[i].get('price') || 0;
      if (purchaseControl) {
        totalPurchase += +purchaseControl.value || 0;
      }
    }
    return totalPurchase;
  }
  calculateTotalTax(): number {
    let totalTax = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const taxControl = this.getCart().controls[i].get('tax');
      if (taxControl) {
        totalTax += +taxControl.value || 0;
      }
    }
    return totalTax;
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
  totalAmount: any
  // calculateTotal() {
  //   let total = 0;
  //   for (let i = 0; i < this.getCart().controls.length; i++) {
  //     const purchaseRateControl = this.getCart().controls[i].get('price');
  //     const qtyControl = this.getCart().controls[i].get('qty');
  //     if (purchaseRateControl && qtyControl) {
  //       const purchaseRate = +purchaseRateControl.value || 0;
  //       const qty = +qtyControl.value || 0;
  //       const totalForItem = purchaseRate * qty;
  //       total += totalForItem;
  //     }
  //   }
  //   this.totalAmount = total
  //   // Round the total based on decimal value and add 1 if necessary
  //   const roundedTotal = Math.round(total * 100) / 100; // Round to two decimal places
  //   const decimalPart = roundedTotal - Math.floor(roundedTotal);

  //   if (decimalPart >= 0.5) {
  //     return Math.floor(roundedTotal) + 1;
  //   } else {
  //     return Math.floor(roundedTotal);
  //   }
  // }

  // calculateTotal(): number {
  //   let total = 0;
  //   for (let i = 0; i < this.getCart().controls.length; i++) {
  //     const taxControl = this.getCart().controls[i].get('total');
  //     if (taxControl) {
  //       total += +taxControl.value || 0;
  //     }
  //   }
  //   this.totalAmount = total
  //   // Round the total based on decimal value and add 1 if necessary
  //   const roundedTotal = Math.round(total * 100) / 100; // Round to two decimal places
  //   const decimalPart = roundedTotal - Math.floor(roundedTotal);

  //   if (decimalPart >= 0.5) {
  //     return Math.floor(roundedTotal) + 1;
  //   } else {
  //     return Math.floor(roundedTotal);
  //   }
  //   return total;
  // }

  calculateTotal(index: number, value?): number {
    let finalTotal = 0;
    if (this.priceQtyData[index]?.coastPrice && !value) {
      const data = this.priceQtyData[index];
      const qty = this.priceQtyData[index]?.qty;
      const total = (Number(data?.coastPrice) * qty);
      finalTotal = total;
    } else {
      if (this.priceQtyData[index]?.price) {
        const data = this.priceQtyData[index];
        const productAmout = this.productItemPrice[index];
        const discAmount = (productAmout * value) / 100;
        const getCoastPrice = Number(productAmout - discAmount);
        const qty = this.priceQtyData[index]?.qty;
        const total = (Number(getCoastPrice) * qty) + Number(data?.taxPrice * qty);
        finalTotal = total;
      }
    }
    console.log(finalTotal);

    (this.getCart().at(index) as FormGroup).patchValue({ total: finalTotal.toFixed(2) }, { emitEvent: false });

    this.finalTotalAmount[index] = Number(finalTotal.toFixed(2));
    console.log(this.finalTotalAmount[index]);
    return Number(finalTotal.toFixed(2));
  }

  calculateTotalForAll(controlValue?, index?): any {
    let total = 0;
    if (this.finalTotalAmount.length > 0) {
      if (controlValue) {
        this.finalTotalAmount[index] = controlValue;
      }
      Object.values(this.finalTotalAmount).forEach((value, index) => {
        total += Number(value);
      });
    }

    // const totalDiscount = this.calculateTotalDiscount();
    this.totalAmount = total;
    return this.totalAmount;
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
  calculateTotalEveryIndex(index: any) {
    const cartItem = this.getCart().controls[index];
    const price = +cartItem.get('price').value || 0;
    const tax = +cartItem.get('tax').value || 0;
    const discount = +cartItem.get('discount').value || 0;
    const subtotal = this.TotalWithoutTax[index]
    const qty = +cartItem.get('qty').value || 0;
    const totalForItem = price * qty || 0
    return totalForItem;
  }
  calculateTotalTaxIntoRupees() {
    let total = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const purchaseRateControl = this.getCart().controls[i].get('price');
      const taxControl = this.getCart().controls[i].get('tax');
      const discountControl = this.getCart().controls[i].get('discount');
      const discountQty = this.getCart().controls[i].get('qty');
      if (purchaseRateControl && discountControl) {
        const purchaseRate = +purchaseRateControl.value || 0;
        const tax = +taxControl.value || 0;
        const discount = +discountControl.value || 0
        const discountAmountPercentage = +discount
        const discountAmount = (purchaseRate * discountAmountPercentage) / 100;
        const afterDiscuntAmount = purchaseRate - discountAmount
        const taxAmountPercentage = +tax;
        const taxAmount = (afterDiscuntAmount * taxAmountPercentage) / 100;
        // total += taxAmount;
        const totalTaxAmount = taxAmount * discountQty.value;
        total += totalTaxAmount;
      }
    }
    return total;
  }
  calculateTaxintoPrice(index: number): number {
    const cartItem = this.getCart().controls[index];
    const purchaseRate = +cartItem.get('price').value || 0;
    const taxPercentage = +cartItem.get('tax').value || 0;
    const discountPercentage = +cartItem.get('discount').value;
    const discount = (purchaseRate * discountPercentage) / 100;
    const afterDiscountAmount = purchaseRate - discount
    const taxAmount = (afterDiscountAmount * taxPercentage) / 100;
    console.log(taxAmount);
    const totalForTax = taxAmount
    return totalForTax;
  }
  clearForm() {
    this.saleEstimateForm.reset();
    this.userControl.reset()
  }
  printForm(): void {
    const printContents = document.getElementById('saleEstimateForm').outerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  onLabelClick(event: Event) {
    event.stopPropagation();
  }

  ngOnDestroy(): void {
    this.unsubscribeAllQty();
  }
}


