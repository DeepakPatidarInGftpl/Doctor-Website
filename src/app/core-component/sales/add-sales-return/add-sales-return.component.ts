import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription, debounceTime, distinctUntilChanged, map, startWith } from 'rxjs';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
import { SalesService } from 'src/app/Services/salesService/sales.service';

import * as bootstrap from 'bootstrap'

@Component({
  selector: 'app-add-sales-return',
  templateUrl: './add-sales-return.component.html',
  styleUrls: ['./add-sales-return.component.scss']
})
export class AddSalesReturnComponent implements OnInit {


  searchControl = new FormControl();
  searchResults: any[] = [];
  selectedBillDate: any;
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
    private coreService: CoreService,
    private commonService: CommonServiceService,
    private cdr: ChangeDetectorRef,
  private contactService: ContactService) {
  }

  customerControlName = 'customer';
  userControl = new FormControl();
  productOption: any[] = [];
  filteredOptions: Observable<any>;
  users: any[] = [];
  filteredusers: Observable<any[]>;

  variantControlName = 'customer';
  variantControl = new FormControl();
  variants: any[] = [];
  filteredVariants: Observable<any[]>;

  saleReturnForm!: FormGroup;
  minDate: string = '';
  maxDate: string = '';
  data: any;

  get f() {
    return this.saleReturnForm.controls;
  }
  searchForm!: FormGroup;
  subcategoryList;



  taxForm: FormGroup;
  Measurable_Product_QUT : number =0;
  ngOnInit(): void {
    const defaultDate = new Date().toISOString().split('T')[0]; // Get yyyy-MM-dd part
    this.myControl = new FormArray([]);
    this.saleReturnForm = this.fb.group({
      customer: new FormControl('', [Validators.required]),
      // bill_date: new FormControl(defaultDate, [Validators.required]),
      sale_bill: new FormControl('', [Validators.required]),
      sale_return_bill_no: new FormControl('', [Validators.required]),
      sale_return_cart: this.fb.array([]),
      total_qty: new FormControl(''),
      total_tax: new FormControl(''),
      total_discount: new FormControl(''),
      subtotal: new FormControl(''),
      roundoff: new FormControl(''),
      total: new FormControl(''),
      status: new FormControl(''),
      note: new FormControl(''),

      //2-1
      return_date: new FormControl(defaultDate, [Validators.required])
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
    this.taxForm = this.fb.group({
      items: this.fb.array([]),
    });
    
    this.items.valueChanges.subscribe({
      next: (value: any[]) => {
        this.Measurable_Product_QUT = value.reduce((acc, item) => acc + Number(item.quantity), 0);
      },
    });
    const financialYear = localStorage.getItem('financialYear');
    this.saleReturnDateValidation(financialYear);

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
    // this.getsalesBill();
    this.getprefix();
    this.getProfile();
    this.getEmployee();
    this.isPercentage[0] = true;
    this.isAmount[0] = false;

    this.saleReturnForm.controls['sale_bill'].valueChanges.subscribe((res: any) => {
      if(!!this.salesBillList?.length){
        const selectedBillDate = this.salesBillList.filter((val) => val?.id === Number(res));
        this.selectedBillDate = selectedBillDate[0]?.bill_date;
        console.log(this.selectedBillDate);
      }
    })
  }

  saleReturnDateValidation(financialYear) {
    const dateControl = this.saleReturnForm.get('return_date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear);
    this.minDate = formattedMinDate;
    this.maxDate = formattedMaxDate;
  }

  prefixNo: any;
  getprefix() {
    this.saleService.getSaleReturnPrefix().subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        // this.prefixNo = res.prefix;
        this.prefixNo = res?.data;
        this.saleReturnForm.get('sale_return_bill_no').patchValue(this.prefixNo[0]?.id);
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
  myControl: FormArray;
  variantList: any[] = [];
  variantList2: any[] = [];
  isSearch = false;
  searchLength: any;
  getVariant(search: any, index: any, barcode: any) {
    this.searchLength = search
    this.isSearch = true;
    if (search.toString().length >= 3) {
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
          this.variantList[index] = res
          this.variantList2 = res;
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
            const barcode = (this.saleReturnForm.get('sale_return_cart') as FormArray).at(index) as FormGroup;
            barcode.patchValue({
              // barcode: this.searchs[0].id,
              // item_name: this.searchs[0]?.variant_name
            });
          }
          console.log(this.saleReturnForm.value);
        });
      }
      else {
        this.saleService.filterVariant(this.category, this.subcategory, search).subscribe((res: any) => {
          this.variantList[index] = res
          this.variantList2 = res;
          this.isSearch = false;
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
            const barcode = (this.saleReturnForm.get('sale_return_cart') as FormArray)?.at(index) as FormGroup;
            barcode.patchValue({
              // barcode: this.searchs[0]?.id,
              // item_name: this.searchs[0]?.variant_name
            });
          }
          console.log(this.saleReturnForm.value);

        });
      }
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
  SubcategoryList: any[] = [];
  filteredSubCategoryList: any[] = [];
  searchSubCategory: string = '';
  getSubCategory(val: any) {
    this.coreService.getSubcategoryByCategory(val).subscribe((res: any) => {
      this.SubcategoryList = res;
      this.filteredSubCategoryList = [...this.SubcategoryList];
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

  get customer() {
    return this.saleReturnForm.get('customer') as FormControl;
  }

  cart(): FormGroup {
    return this.fb.group({
      barcode: (0),
      item_name: (''),
      qty: (0),
      price: (0),
      deduction: (0),
      mrp: (0),
      // tax:(0),
      tax_amount:(0),
      // amount: (0),
      // discount: new FormControl(0, [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      tax: new FormControl(0, [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      total: (0),
      description:''
    })
  }
  getCart(): FormArray {
    return this.saleReturnForm.get('sale_return_cart') as FormArray;
  }
  isCart = false;
  addCart(i) {
    this.getCart().push(this.cart());
    this.isCart = false;
    if (i > 0) {
      this.isPercentage[i] = true;
      this.isAmount[i] = false;
    }
    const cartControl = this.cart();
    this.getCart().controls.forEach((control, index) => {
      this.subscribeToQtyChanges(control as FormGroup, index);
    });
  }
  removeCart(i: any) {
    this.getCart().removeAt(i);
    if (this.saleReturnForm?.value?.sale_return_cart?.length == 0) {
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
  salesBillList: any
  getsalesBill() {
    this.saleService.getSalesBill().subscribe(res => {
      this.salesBillList = res
    })
  }

  onQtyChange(value: number, index: number) {
    const barcode = (this.saleReturnForm.get('sale_return_cart') as FormArray).at(index) as FormGroup;
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
    this.discountSubscriptions.forEach(sub => sub.unsubscribe());
    this.discountSubscriptions = [];
  }

  supplierAddress: any;
  selectedAddressBilling: any;
  selectedAddressShipping: any;
  selectBatch: any;
  paymentTerms: any;
  userType: any;
  supplierId : number
  oncheck(data: any) {
    console.log(data);
    const userName = data?.name;
    const selectedItemId = data.id;
    this.supplierId = data.id;
    this.userType = data?.user_type;
    const user = this.employeeList.filter((val) => val?.name === userName);
    this.discountLimit = user[0]?.discount_limit;

    let userId = data?.detail?.userid?.id ? data?.detail?.userid?.id : '';
    this.saleService.getSalesBillByUserId(userId).subscribe(res => {
      this.salesBillList = res
    })
    //call detail api
    // this.contactService.getCustomerById(selectedItemId).subscribe(res => {
    //   // console.log(res);
    //   this.supplierAddress = res;
    //   this.saleReturnForm.patchValue({
    //     sale_bill: res?.sale_bill?.id
    //   })
    //   this.supplierAddress?.address?.map((res: any) => {
    //     if (res.address_type == 'Billing') {
    //       this.selectedAddressBilling = res
    //       console.log(this.selectedAddressBilling);
    //     } else if (res.address_type == 'Shipping') {
    //       this.selectedAddressShipping = res
    //       console.log(this.selectedAddressShipping);
    //     }
    //   })
    // })

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
    const variants = this.saleReturnForm.get('sale_return_cart') as FormArray;
    variants.clear();
    this.unsubscribeAllQty();
    this.addCart(0);
    this.saleReturnForm.patchValue({
      customer: selectedItemId,
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
  selecBatchtModel(address: any, index: any, type: string) {
    if (type == 'productModal') {
      const modal = document.getElementById('productModal');
      if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
      }
    } else {
      const modal = document.getElementById('batchModal');
      if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
      }
    }
    const barcode = (this.saleReturnForm.get('sale_return_cart') as FormArray).at(index) as FormGroup;
    let discountRupees = (address?.cost_price * address?.discount) / 100
    console.log(discountRupees);
    let afterDiscountPrice = (address?.cost_price - discountRupees)
    let taxRupee: number = (afterDiscountPrice * address?.sale_tax) / 100
    console.log(taxRupee);
    let landingCost = (address?.cost_price - discountRupees) + taxRupee;
    console.log(landingCost);

    const cartControls: any = this.getCart().controls;
    cartControls[index].controls?.mrp.setValue(address?.mrp);

    if (address?.stock > 0) {
      barcode.patchValue({
        mrp: address?.mrp,
        qty: address?.stock,
        tax: address?.sale_tax,
        discount: address?.discount,
        price: address?.cost_price,
        landing_cost: landingCost
        // additional_discount: address?.additional_discount,
        // discount_type: '%',
        // price: 0,
      });
    } else {
      this.toastrService.error('Stock is not available at this price');
    }
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
  closeModalProduct(i: number) {
    console.log(i, 'index');
    const modal = document.getElementById(`productModal-${i}`);
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
  //     const barcode = (this.saleReturnForm.get('sale_return_cart') as FormArray).at(index) as FormGroup;
  //     barcode.patchValue({
  //       barcode: selectedItemId,
  //       mrp: event.batch[0]?.mrp,
  //       qty: 1,
  //       tax: event.batch[0]?.sale_tax,
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
  landingCost: any;
  batchCostPrice: any[] = [];
  selecteProduct: any;

  sub_index:number ;
  ShowModal(i:number){
    let myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
    myModal.show();
    this.sub_index = i;

  }

  oncheckVariant(event: any, index : number) {
    const selectedItemId = event.id;

    let is_measurable = event?.product?.is_measurable;
    console.log(is_measurable,'deepak')
    if(is_measurable) {
      this.ShowModal(index);
      this.addItem();
    }
    

  const currentControl = (this.saleReturnForm.get('sale_return_cart') as FormArray).at(index) as FormGroup;
  currentControl.controls['barcode'].setValue('');
  const priceQtyArray:any = Object.values(this.priceQtyData);

  const existingProductIndex = priceQtyArray.findIndex(item => item.barcode === selectedItemId);
  if (existingProductIndex !== -1) {
    priceQtyArray[existingProductIndex].qty += 1;

    const barcode = (this.saleReturnForm.get('sale_return_cart') as FormArray).at(existingProductIndex) as FormGroup;
    barcode.patchValue({
      qty: priceQtyArray[existingProductIndex].qty
    });

    const currentControl = (this.saleReturnForm.get('sale_return_cart') as FormArray).at(index) as FormGroup;
    currentControl.reset();
    console.log(currentControl);
    this.barcode[index] = '';
      currentControl.patchValue({
        barcode: 0,
        item_name: '',
        qty: 0,
        price: 0,
        deduction: 0
    });
    this.calculateTotal(existingProductIndex);
    return;
  }

    this.barcode[index] = event.sku;
    console.log(event);
    this.selecteProduct = event?.product;
    this.selectedProductName = event.product_title;
    this.selectBatch = event.batch;
    this.apiPurchaseTax = event?.product?.sale_tax?.amount_tax_slabs[0]?.tax?.tax_percentage || 0;

    this.isTaxAvailable[index] = event?.product?.sale_tax_including;
    this.batchCostPrice[index] = event?.batch[0]?.cost_price || 0;
    if (event?.product?.sale_tax_including) {
      if (this.userType == 'Employee') {
        let Employeeprice = event?.batch[0]?.selling_price_employee || 0;
        this.productItemPrice[index] = Employeeprice;
        this.originalPrice[index] = event?.batch[0]?.selling_price_employee || 0;
        // landing cost
        let getDiscountPrice = (Employeeprice * 0) / 100
        console.log(getDiscountPrice);
        let getCoastPrice = Employeeprice - getDiscountPrice;
        this.getCoastPrice = Employeeprice - getDiscountPrice;
        let taxPrice;
        taxPrice = (getCoastPrice * this.apiPurchaseTax) / 100;
        this.taxPrice = (getCoastPrice * this.apiPurchaseTax) / 100;
        this.TotalWithoutTax[index] = ((getCoastPrice * 1) - (taxPrice * 1)).toFixed(2);
        this.taxIntoRupees[index] = taxPrice || 0;
        this.originalCoastPrice = getCoastPrice;
      } else if (this.userType == 'Dealer') {
        let dealerprice = event?.batch[0]?.selling_price_dealer || 0;
        this.productItemPrice[index] = dealerprice;
        this.originalPrice[index] = event?.batch[0]?.selling_price_dealer || 0;
        // landing cost
        let getDiscountPrice = (dealerprice * 0) / 100
        console.log(getDiscountPrice);
        let getCoastPrice = dealerprice - getDiscountPrice;
        this.getCoastPrice = dealerprice - getDiscountPrice;
        let taxPrice;
        taxPrice = (getCoastPrice * this.apiPurchaseTax) / 100;
        this.taxPrice = (getCoastPrice * this.apiPurchaseTax) / 100;
        this.TotalWithoutTax[index] = ((getCoastPrice * 1) - (taxPrice * 1)).toFixed(2);
        console.log(taxPrice, 'taxprice');
        this.taxIntoRupees[index] = taxPrice || 0;
        this.originalCoastPrice = getCoastPrice;
      } else {
        let offlineprice = event?.batch[0]?.selling_price_offline || 0;
        this.productItemPrice[index] = offlineprice;
        this.originalPrice[index] = event?.batch[0]?.selling_price_offline || 0;
        // landing cost
        let getDiscountPrice = (offlineprice * 0) / 100
        console.log(getDiscountPrice);
        let getCoastPrice = offlineprice - getDiscountPrice;
        console.log(getCoastPrice, 'getCoastPrice');
        this.getCoastPrice = offlineprice - getDiscountPrice;
        console.log(getCoastPrice, 'getCoastPrice');
        let taxPrice;
        taxPrice = (getCoastPrice * this.apiPurchaseTax) / 100;
        this.taxPrice = (getCoastPrice * this.apiPurchaseTax) / 100;
        this.TotalWithoutTax[index] = ((getCoastPrice * 1) - (taxPrice * 1)).toFixed(2);
        console.log(this.TotalWithoutTax[index], 'this.TotalWithoutTax[index]');
        console.log(taxPrice, 'taxprice');
        this.taxIntoRupees[index] = taxPrice || 0;
        this.originalCoastPrice = getCoastPrice;
      }
    } else {
      let offlineprice = event?.batch[0]?.selling_price_offline || 0;
      this.productItemPrice[index] = offlineprice;
      // cost price 
      let getDiscountPrice = (offlineprice * 0) / 100
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
      const barcode = (this.saleReturnForm.get('sale_return_cart') as FormArray).at(index) as FormGroup;
      this.tax[index] = this.apiPurchaseTax
      console.log(this.originalCoastPrice, 'this.originalCoastPrice');
      let taxValue = 0;
      if (event?.product?.sale_tax_including == true) {
        barcode.patchValue({
          mrp: event.batch[0]?.mrp,
          barcode: selectedItemId,
          item_name: event?.product_title,
          amount: event.batch[0]?.mrp,
          qty: 1,
          tax: this.apiPurchaseTax,
          price: Number(this.originalCoastPrice).toFixed(2),
        });
        taxValue = this.apiPurchaseTax;
      } else {
        this.tax[index] = this.apiPurchaseTax
        barcode.patchValue({
          mrp: event.batch[0]?.mrp,
          barcode: selectedItemId,
          item_name: event?.product_title,
          qty: 1,
          tax: this.apiPurchaseTax,
          price: Number(this.originalCoastPrice).toFixed(2),
          // landing_cost: this.landingCost || 0
        });
        taxValue = this.apiPurchaseTax;
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
      // this.calculateTotalDiscount();
      console.log(event.batch);
    } else {
      this.tax[index] = 0
      const barcode = (this.saleReturnForm.get('sale_return_cart') as FormArray).at(index) as FormGroup;
      barcode.patchValue({
        mrp: 0,
        barcode: selectedItemId,
        item_name: event?.product_title,
        tax: 0,
        qty: 0,
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
  };



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






    const barcode = (this.saleReturnForm.get('sale_return_cart') as FormArray).at(this.sub_index) as FormGroup;
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
      let getDiscountPrice = (costprice * 0) / 100
      console.log(getDiscountPrice);
      let getCoastPrice = costprice - getDiscountPrice;
      // cost price 
      let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + this.apiPurchaseTax))) || 0
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
      let getDiscountPrice = (costprice * 0) / 100
      console.log(getDiscountPrice, 'getDiscountPrice');
      let getCoastPrice = costprice - getDiscountPrice;
      // tax price 
      let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + purchaseTax))) || 0
      this.taxIntoRupees[index] = taxprice || 0;
      let purchasePrice = getCoastPrice + taxprice;
      this.originalCoastPrice = purchasePrice;
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
  }
  amount(index) {
    this.isPercentage[index] = true;
    this.isAmount[index] = false;
  }

  userInputEntered: boolean[] = [];
  purchase(index) {
    this.userInputEntered[index] = true;
    const result = this.calculatePurchaseEveryIndex(index);
    this.coastprice[index] = result.toFixed(2)
    setTimeout(() => {
      this.calculateRoundoffValue()
    }, 2000);
    this.calculateTotalEveryIndex(index)
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
    const deductionPercentageControl = cartItem.get('deduction');
    const QtyControl = cartItem.get('qty');
    this.batchCostPrice[index] = this.coastprice[index];
    if (purchaseRateControl && taxPercentageControl && deductionPercentageControl) {
      if (this.isTaxAvailable[index] == true) {
        const deductionPercentage = +deductionPercentageControl.value || 0;
        const taxPercentage = +taxPercentageControl.value || 0;
        const purchaseRate = +purchaseRateControl.value || 0;
        const qty = +QtyControl.value || 1;
        // landing cost
        if (this.isPercentage[index] == true) {
          let getDiscountPrice = (purchaseRate * deductionPercentage) / 100;
          let getCoastPrice = purchaseRate - getDiscountPrice;
          console.log(getCoastPrice);
          console.log(qty);
          this.TotalWithoutTax[index] = (getCoastPrice * qty).toFixed(2) || 0
          console.log(this.TotalWithoutTax[index]);
          // cost price 
          let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + taxPercentage))) || 0
          this.taxIntoRupees[index] = taxprice || 0;
          let purchasePrice = getCoastPrice + taxprice;
          console.log(purchasePrice);
          return purchasePrice;
        } else if (this.isAmount[index] == true) {
          let getCoastPrice = purchaseRate - deductionPercentage;
          console.log(getCoastPrice);
          console.log(qty);
          this.TotalWithoutTax[index] = (getCoastPrice * qty).toFixed(2) || 0
          console.log(this.TotalWithoutTax[index]);
          // cost price 
          let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + taxPercentage))) || 0
          this.taxIntoRupees[index] = taxprice || 0;
          let purchasePrice = getCoastPrice + taxprice;
          console.log(purchasePrice);
          return purchasePrice;
        }
      } else {
        const deductionPercentage = +deductionPercentageControl.value || 0;
        const purchaseRate = +purchaseRateControl.value || 0;
        const qty = +QtyControl.value || 1;
        let purchaseTax = this.apiPurchaseTax;
        // cost price 
        if (this.isPercentage[index] == true) {
          let getDiscountPrice = (this.coastprice[index] * deductionPercentage) / 100
          let getCoastPrice = this.coastprice[index] - getDiscountPrice;
          console.log(getCoastPrice);
          this.TotalWithoutTax[index] = (getCoastPrice * qty).toFixed(2) || 0
          // tax price 
          let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + purchaseTax))) || 0
          this.taxIntoRupees[index] = taxprice || 0;
          let purchasePrice = getCoastPrice + taxprice;
          this.originalCoastPrice = purchasePrice;
          return purchasePrice;
        } else if (this.isAmount[index] == true) {
          let getCoastPrice = this.coastprice[index] - deductionPercentage;
          console.log(getCoastPrice);
          this.TotalWithoutTax[index] = (getCoastPrice * qty).toFixed(2) || 0
          // tax price 
          let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + purchaseTax))) || 0
          this.taxIntoRupees[index] = taxprice || 0;
          let purchasePrice = getCoastPrice + taxprice;
          this.originalCoastPrice = purchasePrice;
          return purchasePrice;
        }
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
    this.calculateTotalEveryIndex(index)
  }
  calculationDiscountCostPrice(index) {
    console.log(this.costPrice);
    const cartItem = this.getCart().controls[index];
    const purchaseRateControl = cartItem.get('price');
    const taxPercentageControl = cartItem.get('tax');
    const deductionPercentageControl = cartItem.get('deduction');
    const QtyControl = cartItem.get('qty');
    this.batchCostPrice[index] = this.coastprice[index];
    if (purchaseRateControl && taxPercentageControl && deductionPercentageControl) {
      if (this.isTaxAvailable[index] == true) {
        const deductionPercentage = +deductionPercentageControl.value || 0;
        const taxPercentage = +taxPercentageControl.value || 0;
        const purchaseRate = +purchaseRateControl.value || 0;
        const qty = +QtyControl.value;
        if (this.costPrice > 0) {
          if (this.isPercentage[index] == true) {
            console.log(this.costPrice, 'this.costPrice > 0');
            let getDiscountPrice = (this.costPrice * deductionPercentage) / 100;
            console.log(getDiscountPrice);
            let getCoastPrice = this.costPrice - getDiscountPrice;
            this.TotalWithoutTax[index] = (getCoastPrice * qty).toFixed(2) || 0
            // cost price 
            console.log(getCoastPrice, 'cost price this');
            let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + taxPercentage))) || 0
            this.taxIntoRupees[index] = taxprice || 0;
            console.log(taxprice);
            let purchasePrice = getCoastPrice + taxprice;
            return purchasePrice;
          } else if (this.isAmount[index] == true) {
            let getCoastPrice = this.costPrice - deductionPercentage;
            this.TotalWithoutTax[index] = (getCoastPrice * qty).toFixed(2) || 0
            // cost price 
            console.log(getCoastPrice, 'cost price this');
            let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + taxPercentage))) || 0
            this.taxIntoRupees[index] = taxprice || 0;
            console.log(taxprice);
            let purchasePrice = getCoastPrice + taxprice;
            return purchasePrice;
          }
        } else {
          console.log(this.originalPrice[index], 'this.originalPrice[index]');
          if (this.isPercentage[index] == true) {
            let getDiscountPrice = (this.originalPrice[index] * deductionPercentage) / 100
            let getCoastPrice = this.originalPrice[index] - getDiscountPrice;
            this.TotalWithoutTax[index] = (getCoastPrice * qty).toFixed(2) || 0
            console.log(this.TotalWithoutTax[index]);
            console.log(getCoastPrice, 'getCoastPrice');
            // cost price 
            let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + taxPercentage))) || 0
            this.taxIntoRupees[index] = taxprice || 0;
            let purchasePrice = getCoastPrice + taxprice;
            console.log(purchasePrice, 'purchasePrice');
            return purchasePrice;
          } else if (this.isAmount[index] == true) {
            let getCoastPrice = this.originalPrice[index] - deductionPercentage;
            this.TotalWithoutTax[index] = (getCoastPrice * qty).toFixed(2) || 0
            console.log(this.TotalWithoutTax[index]);
            console.log(getCoastPrice, 'getCoastPrice');
            // cost price 
            let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + taxPercentage))) || 0
            this.taxIntoRupees[index] = taxprice || 0;
            let purchasePrice = getCoastPrice + taxprice;
            console.log(purchasePrice, 'purchasePrice');
            return purchasePrice;
          }
        }
        // // landing cost
        // let getDiscountPrice = (this.costPrice * totalDiscount) / 100
        // let getCoastPrice = this.costPrice - getDiscountPrice;
        // // cost price 
        // let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + taxPercentage))) || 0
        // this.taxIntoRupees[index] = taxprice || 0;
        // let purchasePrice = getCoastPrice - taxprice;
        // return purchasePrice;
      } else {
        const deductionPercentage = +deductionPercentageControl.value || 0;
        const purchaseRate = +purchaseRateControl.value || 0;
        let purchaseTax = this.apiPurchaseTax;
        const qty = +QtyControl.value;
        // cost price 
        if (this.isPercentage[index] == true) {
          let getDiscountPrice = (this.costPrice * deductionPercentage) / 100
          let getCoastPrice = this.costPrice - getDiscountPrice;
          this.TotalWithoutTax[index] = (getCoastPrice * qty).toFixed(2) || 0
          console.log(this.TotalWithoutTax[index]);
          let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + purchaseTax))) || 0
          this.taxIntoRupees[index] = taxprice || 0;
          let purchasePrice = getCoastPrice + taxprice;
          this.originalCoastPrice = purchasePrice;
          return purchasePrice;
        } else if (this.isAmount[index] == true) {
          let getCoastPrice = this.costPrice - deductionPercentage;
          this.TotalWithoutTax[index] = (getCoastPrice * qty).toFixed(2) || 0
          console.log(this.TotalWithoutTax[index]);
          let taxprice = (getCoastPrice * purchaseTax) / 100 || 0
          this.taxIntoRupees[index] = taxprice || 0;
          let purchasePrice = getCoastPrice + taxprice;
          this.originalCoastPrice = purchasePrice;
          return purchasePrice;
        }
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
    let total:any = 0;
    let totalWithoutTax = 0;
    this?.TotalWithoutTax?.forEach((number: any) => {
      totalWithoutTax += parseFloat(number);
    })
    total = totalWithoutTax.toFixed(2)
    return total;
  }

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

  getRes: any;
  loader = false;
  loaderCreate = false;
  loaderPrint = false;
  loaderDraft = false;
  submit(type: any) {
    console.log(this.saleReturnForm.value);
    const totalMrp = this.calculateSubtotal()
    if (this.saleReturnForm.valid) {
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
      formdata.append('customer', this.saleReturnForm.get('customer')?.value);
      formdata.append('bill_date', this.selectedBillDate);
      formdata.append('sale_return_bill_no', this.saleReturnForm.get('sale_return_bill_no')?.value);
      formdata.append('sale_bill', this.saleReturnForm.get('sale_bill')?.value);
      formdata.append('note', this.saleReturnForm.get('note')?.value);
      formdata.append('total_qty', this.saleReturnForm.get('total_qty')?.value);
      formdata.append('total_tax', this.saleReturnForm.get('total_tax')?.value);
      formdata.append('total_discount', this.saleReturnForm.get('total_discount')?.value);
      formdata.append('roundoff', this.saleReturnForm.get('roundoff')?.value);
      formdata.append('subtotal', this.saleReturnForm.get('subtotal')?.value);
      formdata.append('total', this.calculateTotalForAll());

      // 22-1
      formdata.append('return_date', this.saleReturnForm.get('return_date')?.value)
      if (type == 'draft') {
        formdata.append('status', 'Draft');
      }
      const cartArray = this.saleReturnForm.get('sale_return_cart') as FormArray;
      const cartData = [];
      cartArray.controls.forEach((address) => {
        const cartGroup = address as FormGroup;
        const cartObject = {};
        Object.keys(cartGroup.controls).forEach((key) => {
          const control = cartGroup.controls[key];
          // Convert the value to an integer if it's a number, but keep item_name as a string
          let value: any = (control.value === null || control.value.length === 0) ? 0 : control.value;
          if (key !== 'item_name' && value !== '' && !isNaN(value)) {
            if (key === 'price') {
              this.data = Number(parseFloat(value).toFixed(2))
            }
            cartObject[key] = key !== 'price' ? parseFloat(value) : parseFloat(this.data)
          } else {
            cartObject[key] = value;
          }
        });
        cartData.push(cartObject);
      });
      formdata.append('sale_return_cart', JSON.stringify(cartData));
      this.saleService.addSaleReturn(formdata).subscribe(res => {
        // console.log(res);
        this.getRes = res;
        if (this.getRes.success) {
          if (type == 'new') {
            this.loaderCreate = false;
            this.saleReturnForm.reset()
            this.ngOnInit()
            this.userControl.reset()
          } else if (type == 'print') {
            this.toastrService.success(this.getRes.msg);
            this.loaderPrint = false;
            this.router.navigate(['//sales/salesReturnedetails/' + this.getRes?.id]);
          } else if (type == 'draft') {
            this.loaderDraft = false;
            this.toastrService.success(this.getRes.msg);
            this.router.navigate(['//sales/salesReturnlist']);
          } else {
            this.loader = false;
            this.toastrService.success(this.getRes.msg);
            this.router.navigate(['//sales/salesReturnlist']);
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
      this.saleReturnForm.markAllAsTouched()
      this.toastrService.error('Please Fill All The Required Fields')
    }
  }

  get sale_return_bill_no() {
    return this.saleReturnForm.get('sale_return_bill_no')
  }
  // get bill_date() {
  //   return this.saleReturnForm.get('bill_date')
  // }
  get estimate_expiry_date() {
    return this.saleReturnForm.get('estimate_expiry_date')
  }
  get shipping_note() {
    return this.saleReturnForm.get('shipping_note')
  }
  get note() {
    return this.saleReturnForm.get('note')
  }
  get sale_bill() {
    return this.saleReturnForm.get('sale_bill')
  }
  //2-1
  get return_date() {
    return this.saleReturnForm.get('return_date')
  }
  deductiont(index: number) {
    return this.getCart().controls[index].get('deduction');
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
      filteredUsers.push({ name: "No data found" }); // Add a dummy entry for displaying "No data found"
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
    const modal = document.getElementById(`productModal-${index}`);
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
    this.myControl.push(new FormControl(value?.product_title + ' ' + value?.variant_name));
    console.log(value);
    // this.barcode[index] = value.sku;
    this.v_id = value.id;
    const barcode = (this.saleReturnForm.get('sale_return_cart') as FormArray).at(index) as FormGroup;
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
  calculateTotalDeduction(): number {
    let totaldeduction = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const deductionControl = this.getCart().controls[i].get('deduction');
      if (deductionControl) {
        totaldeduction += +deductionControl.value || 0;
      }
    }
    return totaldeduction;
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
  calculateTotalTaxIntoRupees() {
    // let total = 0;
    // this.taxIntoRupees.forEach((value) => {
    //   total += value.toFixed(2);
    // });
    // return total;
    let total = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const purchaseRateControl = this.getCart().controls[i].get('price');
      const taxControl = this.getCart().controls[i].get('tax');
      const discountControl = this.getCart().controls[i].get('deduction');
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
    // const discount = +cartItem.get('discount').value || 0;
    const subtotal = this.TotalWithoutTax[index]
    const qty = +cartItem.get('qty').value || 0;
    const totalForItem = price * qty || 0;
    const barcode = (this.saleReturnForm.get('sale_return_cart') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      total: totalForItem.toFixed(2)
    });
    return totalForItem;
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
    this.saleReturnForm.reset();
    this.userControl.reset()
  }
  printForm(): void {
    const printContents = document.getElementById('saleReturnForm').outerHTML;
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


