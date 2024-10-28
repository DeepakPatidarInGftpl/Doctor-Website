import { ChangeDetectorRef, Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription, debounceTime, distinctUntilChanged, map, startWith } from 'rxjs';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
import { OfferService } from 'src/app/Services/offer/offer.service';
import { SalesService } from 'src/app/Services/salesService/sales.service';

import * as bootstrap from 'bootstrap';
import { PosCartService } from 'src/app/Services/PosCart/pos-cart.service';
import { PaymentsComponent } from '../../payments/payments.component';
import { creditLimitInterfase } from 'src/app/interfaces/account';


@Component({
  selector: 'app-add-sale-bill',
  templateUrl: './add-sale-bill.component.html',
  styleUrls: ['./add-sale-bill.component.scss']
})
export class AddSaleBillComponent implements OnInit {


  searchControl = new FormControl();
  searchResults: any[] = [];

  totalQty: any;
  subTotal: any;
  discount: any;
  totalTax: any;
  roundOff: any;
  mrpPurchase: number = 0;
  priceQtyData: any = {};
  getCoastPrice: any;
  totalCartAmount: any;
  calculatingTotal: boolean = false;
  discountTypesApplied:any;
  skipQtyChange = false;
  taxPrice: any;
  productItemPrice: any[] = [];
  finalTotalAmount: any[] = [];
  currentEmployee: any;
  discountLimit: any;
  coupon_code: any;
  totalDiscountPrice: any = 0;
  couponDiscount = 0;
  couponUpTo = 0;
  discountErrorShown = false;
  isLimitErrorShown = false;
  totalFlatDiscountAmount: any = 0;
  addFlatDiscountPercentage: any[] = [];
  addFlatDiscountAmount: any[] = [];
  totalFlatDiscountPercentage: any = 0;
  selectedStates: boolean[] = [];
  // totalProductAmount: any;
  calculatedFinalTotal = 0;
  totalDiscountAmount: any = 0;
  private qtySubscriptions: Subscription[] = [];
  private discountSubscriptions: Subscription[] = [];
  changeFlatDiscount: any[] = [];
  changeFlatDiscountAmount: any[] = [];
  isPriceRangeFreeItemSelected = false;
  isPriceRangeDiscountSelected = false;
  isFreeItemOnInvoiceSelected = false;
  isDiscountOnInvoiceSelected = false;
  isQuantityPerPercentageSelected = false;
  isQuantityPerQuantitySelected = false;
  @ViewChild('child') __childComponent!: PaymentsComponent;

  constructor(private saleService: SalesService, private fb: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private contactService: ContactService,
    private purchaseService: PurchaseServiceService,
    private coreService: CoreService,
    private companyService: CompanyService,
    private commonService: CommonServiceService,
    private cdr: ChangeDetectorRef,
    private offerService: OfferService,
  ) {
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

  saleBillForm!: FormGroup;
  minDate: string = '';
  maxDate: string = '';
  dueMinDate: string = '';
  dueMaxDate: string = '';

  get f() {
    return this.saleBillForm.controls;
  }
  searchForm!: FormGroup;
  subcategoryList;
  isModalOpen: any;


  taxForm: FormGroup;
  Measurable_Product_QUT : number =0;
  Product_Measurable : number =0;

  
  ngOnInit(): void {

    // blur bg when modal open
    if (this.companyService.CheckBlur$) {
      this.companyService.CheckBlur$.subscribe((res: any) => {
        console.log(res);
        if (res !== null) {
          if (res) {
            this.isModalOpen = res;
            console.log(this.isModalOpen);
          } else if (res == false) {
            this.isModalOpen = res;
            console.log(this.isModalOpen);
          }
        }

      })
    }
    //end
    const defaultDate = new Date().toISOString().split('T')[0]; // Get yyyy-MM-dd part
    const today = new Date();
    const sevenDaysFromToday = new Date(today);
    sevenDaysFromToday.setDate(today.getDate() + 7);
    const defaultDateago7 = sevenDaysFromToday.toISOString().split('T')[0];
    this.myControl = this.fb.array([]);
    this.saleBillForm = this.fb.group({
      customer: new FormControl('', [Validators.required]),
      bill_date: new FormControl(defaultDate, [Validators.required]),
      customer_bill_no: new FormControl('', [Validators.required]),
      due_date: new FormControl(defaultDateago7),
      payment_terms: new FormControl('', [Validators.required]),
      sale_order: new FormControl(''),
      sale_bill_cart: this.fb.array([]),
      total_qty: new FormControl(1),
      total_tax: new FormControl(0),
      total_discount: new FormControl(0),
      subtotal: new FormControl(0),
      roundoff: new FormControl(0),
      total: new FormControl(0),
      status: new FormControl(''),
      note: new FormControl(''),
      additional_charges: new FormControl(0),
      additional_charge: this.fb.array([]),
      // additional_discount: new FormControl(0),
      // 2-1
      sales_man: new FormControl('', [Validators.required])
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
    );

    this.flat_discount.valueChanges.subscribe({
      next: (value) => {
        this.new_total = this.showPercentag ? this.calculateTotalForAll() - (this.calculateTotalForAll() * value) / 100 : this.calculateTotalForAll() - value;
      },
    });
    this.taxForm = this.fb.group({
      items: this.fb.array([]),
    });
    
    this.items.valueChanges.subscribe({
      next: (value: any[]) => {
        this.Measurable_Product_QUT = value.reduce((acc, item) => acc + Number(item.quantity), 0);
        this.Product_Measurable = value.reduce((acc, item) => acc + Number(item.measurement), 0);
      },
    });

    const financialYear = localStorage.getItem('financialYear');

    this.dueDateValidation(financialYear);
    this.saleOrderDateValidation(financialYear);

    this.saleBillForm.get('bill_date').valueChanges.subscribe((date) => {
      if (date) {
        const expiryDate = new Date(date);
        expiryDate.setDate(expiryDate.getDate() + 7);
        this.saleBillForm.get('due_date').patchValue(this.commonService.formatDate(expiryDate));
      }
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
    // this.getSaleOrder();
    this.getEmployee();
    this.getprefix();
    this.addAdditionalCharge();
    this.getAdditionalDiscount();
    this.getTax();
    this.getProfile();
    
  };
  flat_discount : FormControl = new FormControl();
  showPercentag : boolean = true;
  new_total : number
  ShowRupeeAndPer(){
    this.showPercentag = !this.showPercentag;
    const ctrl_val = this.flat_discount.value;
    this.new_total = this.showPercentag ? this.calculateTotalForAll() - (this.calculateTotalForAll() * ctrl_val / 100) : this.calculateTotalForAll() - ctrl_val;
  }


  updateDueDateMin(selectedDate: string, financialYear) {
    const dateControl = this.saleBillForm.get('due_date');
    if (selectedDate) {
      const minDate = new Date(selectedDate);
      const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear, minDate);
      this.dueMinDate = formattedMinDate;
      this.dueMaxDate = formattedMaxDate;
    }
  }

  dueDateValidation(financialYear) {
    const dateControl = this.saleBillForm.get('due_date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear);
    this.dueMinDate = formattedMinDate;
    this.dueMaxDate = formattedMaxDate;
  }

  saleOrderDateValidation(financialYear) {
    const dateControl = this.saleBillForm.get('bill_date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear);
    this.minDate = formattedMinDate;
    this.maxDate = formattedMaxDate;
  }

  changeSaleOrder(value) {
      this.saleService.getSalesOrder().subscribe((res:any) => {
      const [saleOrderData] = res?.filter((val)=> val.id === Number(value));
      const cart = saleOrderData?.cart;
        this.getCart().clear(); 
        const formArr = this.saleBillForm.get('sale_bill_cart') as FormArray;
        
        cart.forEach((j: any, i) => {
          const price = j.price || 0;
          const taxPercentage = j.tax || 0;
          const calculatedTax = price - (price * taxPercentage) / 100;
          this.taxIntoRupees[i] = calculatedTax;
          
          let taxPrice = (price * taxPercentage) / 100;
          this.taxIntoRupees[i] = taxPrice;
          let TotalWithoutTaxPrice = j.price - taxPrice;
          this.TotalWithoutTax[i] = (TotalWithoutTaxPrice * j?.qty).toFixed(2);
          
          let totalDiscount: any = 0;
          totalDiscount += parseFloat(j?.discount);
          
          if (!formArr.at(i)) {
            console.log('call 1')
            formArr.push(
              new FormGroup({
                barcode: new FormControl(j?.barcode.id),
                item_name: new FormControl(j?.item_name),
                qty: new FormControl(j?.qty),
                price: new FormControl(j.price),
                tax: new FormControl(j?.tax || 0),
                tax_amount: new FormControl(j?.tax_amount || 0),
                discount: new FormControl(j?.discount),
                additional_discount: new FormControl(j?.barcode?.batch[0]?.additional_discount),
                total: new FormControl(j?.total),

              })
            );
          } else {
            console.log('call 2')
            formArr.at(i).patchValue({
              barcode: j?.barcode.id,
              item_name: j?.item_name,
              qty: j?.qty,
              price: j.price,
              tax: j?.tax || 0,
              discount: j?.discount,
              additional_discount: j?.barcode?.batch[0]?.additional_discount,
              total: j?.total
            });
          }
          
          if (j?.barcode?.batch[0]?.discount) {
            console.log('call 3')
            j.barcode.batch[0].discount.forEach((discount: any) => {
              if (!this.discountTyp[i]) {
                this.discountTyp[i] = [];
              }
              this.discountTyp[i].push(discount);
            });
          }
          this.calculateTotalForAll();
          
          this.barcode[i] = j.barcode.sku;
          this.productName[i] = j.barcode.product_title;
          this.coastprice[i] = j.price;
          this.tax[i] = j.tax || 0;
          this.myControl.push(new FormControl(j?.barcode?.product_title));
          this.priceQtyData[i] = {
            price: Number(j?.price)?.toFixed(2),
            qty: j?.qty,
            additional_discount: j?.barcode?.batch[0]?.additional_discount || 0,
            tax: j.tax || 0,
            coastPrice: j.price,
            taxPrice: taxPrice
          };
          this.subscribeToQtyChanges(formArr.at(i) as FormGroup, i);
        });
        return formArr;
      })
  }

  prefixNo: any;
  getprefix() {
    this.saleService.getSaleBillPrefix().subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        // this.prefixNo = res.prefix;
        this.prefixNo = res?.data;
        this.saleBillForm.get('customer_bill_no').patchValue(this.prefixNo[0]?.id);
      } else {
        this.toastrService.error(res.msg);
      }
    }, err => {
      this.toastrService.error(err.error.msg)
    })
  }
  saleOderList: any
  getSaleOrder() {
    this.saleService.getSalesOrder().subscribe(res => {
      this.saleOderList = res;
    })
  }
  employeeList: any;
  getEmployee() {
    this.contactService.getEmployee().subscribe((res: any) => {
      this.employeeList = res;
    })
  }
  saleEstimateList: any
  getSaleEstimate() {
    this.saleService.getSalesEstimate().subscribe(res => {
      this.saleEstimateList = res;
    })
  }

  category: any;
  subcategory: any;
  searc: any;
  myControl: FormArray;
  variantList2: any[] = [];
  variantList: any[] = [];
  isSearch = false;
  searchLength: any;
  getVariant(search: any, index: any, barcode: any) {
    this.isSearch = true;
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
          this.variantList[index] = res;
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
            // const barcode = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;
            // barcode.patchValue({
            //   barcode: this.searchs[0].id,
            //   item_name: this.searchs[0]?.variant_name
            // });
          }
        });
      }
      else {
        this.saleService.filterVariant(this.category, this.subcategory, search).subscribe((res: any) => {
          console.log(res);
          this.isSearch = false;
          this.variantList[index] = res;
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
            // const barcode = (this.saleBillForm.get('sale_bill_cart') as FormArray)?.at(index) as FormGroup;
            // barcode.patchValue({
            //   barcode: this.searchs[0]?.id,
            //   item_name: this.searchs[0]?.variant_name
            // });
          }

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
    return this.saleBillForm.get('customer') as FormControl;
  }

  cart(): FormGroup {
    return this.fb.group({
      barcode: (0),
      item_name: (''),
      qty: (0),
      price: (0),
      discount_type: (''),
      // discount: new FormControl(0, [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      discount: new FormControl(''),
      additional_discount: new FormControl(0, [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      tax: new FormControl(0, [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      tax_amount: new FormControl(0),
      total: (0),
      description:'',
    })
  }
  getCart(): FormArray {
    return <FormArray>(this.saleBillForm.get('sale_bill_cart') as FormArray);
  }
  isCart = false;
  addCart() {
    this.getCart().push(this.cart());
    this.isCart = false;

    const cartControl = this.cart();
    this.getCart().controls.forEach((control, index) => {
      this.subscribeToQtyChanges(control as FormGroup, index);
      this.subscribeToDiscountChanges(control as FormGroup, index);
    });
  }

  onQtyChange(value: number, index: number) {
    if (this.skipQtyChange) {
      return;
    }
    const barcode = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;
    const discount =  barcode.controls['additional_discount'].value;
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
      if(totalProductQty === 0) {
        this.taxIntoRupees[index] = 0;
      }
      let totalWithoutTax = getCoastPrice - getTaxPrice;
      this.TotalWithoutTax[index] = (totalWithoutTax * value).toFixed(2);
      barcode.patchValue({
        qty: value,
        tax: totalProductQty === 0 ? 0 : taxPercentage,
        additional_discount: discount
      });
    }
  }

  onDisCountChange(value: number, index: number) {
    if (value > this.discountLimit) {
      this.isLimitErrorShown = true;
      if (!this.discountErrorShown) {
        this.toastrService.error(`Your maximum discount limit is ${this.discountLimit}`);
        this.discountErrorShown = true;
      }
    } else {
      this.isLimitErrorShown = false;
      this.discountErrorShown = false;
    }

    if (this.priceQtyData[index]) {
      this.priceQtyData[index].additional_discount = value;
    }
    if (this.priceQtyData[index]?.price) {
      const productAmout = this.productItemPrice[index];
      const discAmount = (productAmout * value) / 100;
      const getQuantity = Number(this.priceQtyData[index]?.qty);
      const getCoastPrice = Number(productAmout - (discAmount));
      const getTaxPrice = Number(this.priceQtyData[index]?.taxPrice)
      let totalWithoutTaxPrice = getCoastPrice - (getTaxPrice);
      let totalWithoutTax:any = (totalWithoutTaxPrice * getQuantity).toFixed(2);
      this.TotalWithoutTax[index] = totalWithoutTax; 
    }
  }

  unsubscribeAllQty() {
    this.qtySubscriptions.forEach(sub => sub.unsubscribe());
    this.qtySubscriptions = [];
    this.discountSubscriptions.forEach(sub => sub.unsubscribe());
    this.discountSubscriptions = [];
  }

  removeCart(i: any) {
    this.getCart().removeAt(i);
    this.barcode.splice(i, 1);
    if (this.saleBillForm?.value?.sale_bill_cart?.length == 0) {
      this.isCart = true;
    }
    this.TotalWithoutTax[i] = 0;
    this.calculateTotalWithoutTax();
    let total = 0;
    let cartArray = this.getCart();
   
    cartArray.controls.forEach((val)=> {
      total += Number(val.get('total').value)
    })
    this.calculatedFinalTotal = total;
    this.discountTyp.splice(i, 1);
  }

  additional_charge(): FormGroup {
    return this.fb.group({
      additional: (0),
      value: (0),
      tax: (0),
      total: ''
    })
  }
  getAdditionalCharge(): FormArray {
    return this.saleBillForm.get('additional_charge') as FormArray
  }
  addAdditionalCharge() {
    this.getAdditionalCharge().push(this.additional_charge())
  }
  removeAdditionalCharge(j: any) {
    this.getAdditionalCharge().removeAt(j)
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
      this.paymentTermsList.forEach((term: any) => {
        if (term.title == "7 Days") {
          this.saleBillForm.get('payment_terms').patchValue(term.id);
        }
      })
    })
  }
  selectDueDate(val) {
    console.log(val);
    this.paymentTermsList.map((res: any) => {
      if (res.id == val) {
        const today = new Date();
        const sevenDaysFromToday = new Date(today);
        sevenDaysFromToday.setDate(today.getDate() + res?.days);
        const defaultDateago7 = sevenDaysFromToday.toISOString().split('T')[0];
        this.saleBillForm.get('due_date')?.patchValue(defaultDateago7)
      }
    })
  }

  supplierAddress: any;
  selectedAddressBilling: any;
  selectedAddressShipping: any;
  selectBatch: any;
  paymentTerms: any;
  userType: any;
  userID :number;
  userIDs:number
  userTypes : any;
  membership_pointes : number;
  oncheck(data: any) {
    console.log(data,'deepak');
    this.membership_pointes = data?.detail?.membership?.maximum_redemption_points
    this.addressId =  data?.detail?.address[data?.detail?.address?.length -1].id ;
    console.log(this.addressId,'address')
    this.userID = data.detail.account
    const userName = data?.username;
    const selectedItemId = data.id;
    this.userType = data?.user_type;
    this.userIDs = data?.detail?.userid?.id;
    let point = data?.detail.total_points
    let ty = data.user_type
   
    this.userTypes = {
      point,
      ty
    } 
    this.showCreditLimit(this.userIDs)
    // console.log()
    let userId = data?.detail?.userid?.id ? data?.detail?.userid?.id : ''
    this.saleService.getSalesOrderByUserId(userId).subscribe(res => {
      this.saleOderList = res;
    })

    //call detail api
    // this.contactService.getCustomerById(selectedItemId).subscribe(res => {
    //   // console.log(res);
    //   this.supplierAddress = res;
    //   // this.saleBillForm.patchValue({
    //   //   payment_terms: res?.payment_terms?.id
    //   // })
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
    const variants = this.saleBillForm.get('sale_bill_cart') as FormArray;
    variants.clear();
    this.unsubscribeAllQty();
    this.addCart();
    this.saleBillForm.patchValue({
      customer: selectedItemId,

    });
      this.getCart().controls.forEach((control, index) => {
        this.subscribeToQtyChanges(control as FormGroup, index);
        this.subscribeToDiscountChanges(control as FormGroup, index);
      });
  }

  getProfile() {
    this.coreService.getProfile().subscribe((res: any) => {
      console.log(res);
      this.currentEmployee = res?.username;
      if(!!this.employeeList?.length){
        const user = this.employeeList.filter((val) => val?.name === this.currentEmployee);
        this.discountLimit = user[0]?.discount_limit;
      }
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
          (this.getCart().at(index) as FormGroup).patchValue({ total: this.totalCartAmount }, { emitEvent: false });
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

  subscribeToDiscountChanges(cartControl: FormGroup, index: number) {
    const discountControl = cartControl.get('additional_discount') as FormControl;
    if (discountControl) {
      const subscription = discountControl.valueChanges
        .pipe(distinctUntilChanged())
        .subscribe((value) => {
          this.onDisCountChange(value, index);
          this.totalCartAmount = this.calculateTotal(index, value);
          (this.getCart().at(index) as FormGroup).patchValue({ total: this.totalCartAmount }, { emitEvent: false });
          this.finalTotalAmount[index] = this.totalCartAmount;
          console.log(this.totalCartAmount);
          this.calculateTotalForAll(this.totalCartAmount, index);
          this.cdr.detectChanges();
        });
      this.discountSubscriptions.push(subscription);
    }
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
  discountCartIndex: any;
  openModalDiscount(index: number) {
    this.discountCartIndex = index;
    const modalId = `discountModal-${index}`;
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
    const barcode = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;
    let discountRupees = (address?.cost_price * address?.discount) / 100
    console.log(discountRupees);
    let afterDiscountPrice = (address?.cost_price - discountRupees)
    let taxRupee: number = (afterDiscountPrice * address?.sale_tax) / 100
    console.log(taxRupee);
    let landingCost = (address?.cost_price - discountRupees) + taxRupee;
    console.log(landingCost);
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
  closeModalDiscount(i: number) {
    console.log(i, 'index');
    const modal = document.getElementById(`discountModal-${i}`);
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
  //     const barcode = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;
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
  batchDiscount: any;
  additionalDiscount: any;
  totalDiscount: any;
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
    const currentControl = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;

    let is_measurable = event?.product?.is_measurable;
    if(is_measurable) {
      currentControl.get('qty').disable({emitEvent : false})
      this.ShowModal(index);
      this.addItem();
    }

    
    currentControl.controls['barcode'].setValue('');
    const priceQtyArray:any = Object.values(this.priceQtyData);
  
    const existingProductIndex = priceQtyArray.findIndex(item => item.barcode === selectedItemId);
    if (existingProductIndex !== -1) {
      priceQtyArray[existingProductIndex].qty += 1;
  
      const barcode = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(existingProductIndex) as FormGroup;
      barcode.patchValue({
        qty: priceQtyArray[existingProductIndex].qty
      });
  
      const currentControl = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;
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
      this.calculateTotalDiscount();
      return;
    }
  
    this.barcode[index] = event.sku;
    console.log(event);
    this.selecteProduct = event?.product;
    this.selectedProductName = event.product_title;
    this.selectBatch = event.batch;
    if(event?.batch?.length > 0) {
      this.apiPurchaseTax = event?.product?.sale_tax?.amount_tax_slabs[0]?.tax?.tax_percentage || 0;
    } else {
      // this.apiPurchaseTax = 0;
      this.apiPurchaseTax = event?.product?.sale_tax?.amount_tax_slabs[0]?.tax?.tax_percentage || 0;;
    }
    // this.batchDiscount = event.batch[0]?.discount || 0;
    this.batchDiscount = 0;
    this.additionalDiscount = event.batch[0]?.additional_discount || 0;
    this.totalDiscount = this.batchDiscount + this.additionalDiscount;
    this.isTaxAvailable[index] = event?.product?.sale_tax_including;
    this.batchCostPrice[index] = event?.batch[0]?.cost_price || 0;
    if (event?.product?.sale_tax_including) {
      if (this.userType == 'Employee') {
        let Employeeprice = event?.batch[0]?.selling_price_employee || 0;
        this.productItemPrice[index] = Employeeprice;
        this.originalPrice[index] = event?.batch[0]?.selling_price_employee || 0;
        // landing cost
        let getDiscountPrice = (Employeeprice * this.totalDiscount) / 100
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
        let getDiscountPrice = (dealerprice * this.totalDiscount) / 100
        console.log(getDiscountPrice);
        let getCoastPrice = dealerprice - getDiscountPrice;
        this.getCoastPrice = dealerprice - getDiscountPrice;
        let taxPrice;
        taxPrice = (getCoastPrice * this.apiPurchaseTax) / 100;
        this.taxPrice = (getCoastPrice * this.apiPurchaseTax) / 100;
        this.TotalWithoutTax[index] = ((getCoastPrice * 1) - (taxPrice * 1)).toFixed(2);
        console.log(taxPrice, 'taxprice');
        this.taxIntoRupees[index] = taxPrice || 0;
        console.log(this.taxIntoRupees[index])
        this.originalCoastPrice = getCoastPrice;
      } else {
      
        let offlineprice = event?.batch[0]?.selling_price_online || 0;
        this.productItemPrice[index] = offlineprice;
        this.originalPrice[index] = event?.batch[0]?.selling_price_online || 0;
        // landing cost
        let getDiscountPrice = (offlineprice * this.totalDiscount) / 100
        console.log(getDiscountPrice);
        let getCoastPrice = offlineprice - getDiscountPrice;
        this.getCoastPrice = offlineprice - getDiscountPrice;
        console.log(getCoastPrice, 'getCoastPrice');
        let taxPrice;
        taxPrice = (getCoastPrice * this.apiPurchaseTax) / 100;
        this.taxPrice = (getCoastPrice * this.apiPurchaseTax) / 100;
        this.TotalWithoutTax[index] = ((getCoastPrice * 1) - (taxPrice * 1)).toFixed(2);
        console.log(this.TotalWithoutTax[index], 'this.TotalWithoutTax[index]');
        console.log(taxPrice, 'taxprice');
        this.taxIntoRupees[index] = taxPrice || 0;
        console.log(this.taxIntoRupees[index])
        this.originalCoastPrice = getCoastPrice;
      }
    } else {
      let offlineprice = event?.batch[0]?.selling_price_online || 0;
      this.productItemPrice[index] = offlineprice;
      let getDiscountPrice = (offlineprice * this.totalDiscount) / 100
      console.log(getDiscountPrice);
      let getCoastPrice = offlineprice - getDiscountPrice;
      this.getCoastPrice = offlineprice - getDiscountPrice;
      let taxPrice;
      taxPrice = (getCoastPrice * this.apiPurchaseTax) / 100;
      this.taxPrice = (getCoastPrice * this.apiPurchaseTax) / 100;
      console.log(this.TotalWithoutTax[index]);

      this.taxIntoRupees[index] = taxPrice || 0;
      console.log(this.taxIntoRupees[index])
      this.originalCoastPrice = getCoastPrice + taxPrice;
      this.TotalWithoutTax[index] = ((getCoastPrice * 1) - (taxPrice * 1)).toFixed(2);
    }
    if (event.batch.length > 0) {
      console.log('calll for d if 1')

      const barcode = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;
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
          // discount: event.batch[0]?.discount || 0,
          additional_discount: parseInt(event.batch[0]?.additional_discount || 0),
          price: Number(this.originalCoastPrice).toFixed(2),
        });
        taxValue = this.apiPurchaseTax;

      } else {
        console.log('calll for d else 2')
        this.tax[index] = this.apiPurchaseTax
        barcode.patchValue({
          barcode: selectedItemId,
          item_name: event?.product_title,
          qty: 1,
          tax: this.apiPurchaseTax,
          // discount: event.batch[0]?.discount || 0,
          additional_discount: parseInt(event.batch[0]?.additional_discount || 0),
          price: Number(this.originalCoastPrice).toFixed(2),
          // landing_cost: this.landingCost || 0
        });
        taxValue = this.apiPurchaseTax;
      }
      this.priceQtyData[index] = {
        barcode: selectedItemId,
        price: this.originalCoastPrice.toFixed(2),
        qty: 1,
        additional_discount: parseInt(event.batch[0]?.additional_discount || 0),
        tax: taxValue,
        coastPrice: this.getCoastPrice,
        taxPrice: this.taxPrice
      };

      this.calculateTotal(index);
      this.updateTotalDiscount();
      console.log(event.batch);
    } else {
      console.log('calll for d else 3')
      this.tax[index] = this.apiPurchaseTax;
      const barcode = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;
      barcode.patchValue({
        barcode: selectedItemId,
        item_name: event?.product_title,
        tax: 0,
        qty: 0,
        additional_discount: 0,
        price: 0,
      });
      this.priceQtyData[index] = {
        barcode: selectedItemId,
        price: 0,
        qty: 0,
        additional_discount:  0,
        tax: 0,
        coastPrice: 0,
        taxPrice: 0
      };
    }
    const barcode = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;
    barcode.get('tax_amount').setValue(Number(this.taxIntoRupees[index]))
    this.addTaxInTable(event,index)
  };



  addressId : number;
  TaxTableData:any[] = [];
  addTaxInTable(item : any, i:number){
  
    console.log('call tax amount')
      const hsn_code = item ?.product?.hsncode?.hsn_code;
      const taxs = this.tax[i];
      const taxs_Amount = this.taxIntoRupees[i];
      const taxabelvalue : number = Number(this.TotalWithoutTax[i]);
      
  
      let ckTypeOfGst :any ;
       this.purchaseService.CkGstType(this.addressId)
       .subscribe({
        next : (value:any) => {
          ckTypeOfGst = value.GST
          console.log(ckTypeOfGst,'type of gst');
          const updateTaxTable = (element: any) => {
            element.igst_amount += taxs_Amount;
            element.sumOfamount += taxs_Amount;
            element.taxabelvalue += taxabelvalue;
          };
        
          const addNewTaxTableEntry = () => {
           const newtax  = (taxs/2);
           const newamount  = (taxs_Amount/2);
           console.warn(newtax,'waran',(typeof ckTypeOfGst ))
           let obj = {
            HSNCODE: hsn_code,
            sumOfamount: taxs_Amount || 0 ,
            taxabelvalue,
            sgst: (ckTypeOfGst) ? newtax : 0,
            sgst_amount: (ckTypeOfGst) ? newamount : 0,
            cgst: (ckTypeOfGst ) ? newtax : 0,
            cgst_amount: (ckTypeOfGst) ? newamount : 0,
            igst: (ckTypeOfGst == false) ? taxs : 0,
            igst_amount: (ckTypeOfGst == false) ? taxs_Amount : 0,
            gst_types: (ckTypeOfGst == false) ? "GST" : 'SGST_CGST'
          }

          this.TaxTableData[i] = obj
          };
          console.log(this.TaxTableData,'data')
        
          if(this.TaxTableData.length > 0) {
            this.TaxTableData.forEach((element: any) => {
              if (element.HSNCODE == hsn_code && element.gst_types == "GST" && !ckTypeOfGst && element.igst == taxs) {
                
                updateTaxTable(element);
              } else if (element.HSNCODE == hsn_code && element.gst_types == 'SGST_CGST' && ckTypeOfGst && element.cgst == taxs/2) {
             
                updateTaxTable(element);
              } 
              else{
                addNewTaxTableEntry();
              }
        
            });
          } else {
            addNewTaxTableEntry();
          }


        },
      })
     
  }
    UpdateTaxTable(i:number){
    if (this.TaxTableData.length > 0) {
      const real:any = this.TaxTableData[i];
      real.sumOfamount = this.taxIntoRupees[i];
      real.taxabelvalue = this.TotalWithoutTax[i];
      real.igst_amount = (real.gst_types == "GST" ? this.taxIntoRupees[i] : 0);
      real.sgst_amount = (real.gst_types == 'SGST_CGST' ? (this.taxIntoRupees[i]/2) : 0);
      real.cgst_amount = (real.gst_types == 'SGST_CGST' ? (this.taxIntoRupees[i]/2) : 0);
      // console.log(real)
      replaceValueAtIndex(this.TaxTableData,i,real)
    }
  
    function replaceValueAtIndex(array :any[], index : number, newValue : any) {
      if (index >= 0 && index < array.length) {
        array[index] = newValue; // Replace the value at the specified index
        return true; // Indicate successful replacement
      } else {
        return false; // Handle out-of-bounds case
      }
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
  addItem2() {
    if (this.taxForm.invalid) {
      this.ckForm = true;
      this.taxForm.markAllAsTouched();
      return;
    } else {
      this.addItem();
    }
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






    const barcode = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(this.sub_index) as FormGroup;
    barcode.patchValue({
      qty: this.Measurable_Product_QUT ,
      description : str

    });
   btn.click();
   this.items.reset();
   this.items.clear();
  

  }




  // end
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
      let getDiscountPrice = (costprice * this.totalDiscount) / 100
      // console.log(getDiscountPrice, 'getDiscountPrice');
      let getCoastPrice = costprice - getDiscountPrice;

      // tax price 
      let taxprice = ((getCoastPrice * purchaseTax) / 100) || 0
      this.taxIntoRupees[index] = taxprice || 0;
      let purchasePrice = getCoastPrice + taxprice;
      this.originalCoastPrice = purchasePrice;
      // this.coastprice[index] = this.originalCoastPrice.toFixed(2);
      // console.log(this.coastprice[index]);
      // this.landingPrice[index]=this.landingCost.toFixed(2)
    }
  }
  userInputEntered: boolean[] = [];
  costPrice: any
  calculatePurchaseEveryIndex(index: number): number {
    const cartItem = this.getCart().controls[index];
    const purchaseRateControl = cartItem.get('price');
    const taxPercentageControl = cartItem.get('tax');
    const discountPercentageControl = cartItem.get('discount');
    const additionalDiscountPercentageControl = cartItem.get('additional_discount');
    const QtyControl = cartItem.get('qty');
    this.batchCostPrice[index] = this.coastprice[index];
    if (purchaseRateControl && taxPercentageControl && discountPercentageControl) {
      if (this.isTaxAvailable[index] == true) {
        const discountPercentage = +discountPercentageControl.value || 0;
        const additionalDiscountPercentage = +additionalDiscountPercentageControl.value || 0;
        let totalDiscount = discountPercentage + additionalDiscountPercentage || 0;
        const taxPercentage = +taxPercentageControl.value || 0;
        const purchaseRate = +purchaseRateControl.value || 0;
        const qty = +QtyControl.value || 1;
        // landing cost
        let getDiscountPrice = (purchaseRate * totalDiscount) / 100;
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
        const additionalDiscountPercentage = +additionalDiscountPercentageControl.value || 0;
        let totalDiscount = discountPercentage + additionalDiscountPercentage || 0;
        const purchaseRate = +purchaseRateControl.value || 0;
        const qty = +QtyControl.value || 1;
        let purchaseTax = this.apiPurchaseTax;
        // cost price 
        let getDiscountPrice = (this.coastprice[index] * totalDiscount) / 100
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
    // const result = this.calculationDiscountCostPrice(index);
    // this.coastprice[index] = result.toFixed(2);
    console.log(this.coastprice[index], 'this.coastprice[index]');
    // setTimeout(() => {
      this.calculateRoundoffValue()
    // }, 2000);
  }
  calculationDiscountCostPrice(index) {
    console.log(this.costPrice);
    const cartItem = this.getCart().controls[index];
    const purchaseRateControl = cartItem.get('price');
    const taxPercentageControl = cartItem.get('tax');
    const discountPercentageControl = cartItem.get('discount');
    const discountTypeControl = cartItem.get('discount_type');
    const additionalDiscountPercentageControl = cartItem.get('additional_discount');
    const QtyControl = cartItem.get('qty');
    this.batchCostPrice[index] = this.coastprice[index];
    if (purchaseRateControl && taxPercentageControl && discountPercentageControl && discountTypeControl) {
      if (this.isTaxAvailable[index] == true) {
        const discountPercentage = +discountPercentageControl.value || 0;
        const additionalDiscountPercentage = +additionalDiscountPercentageControl.value || 0;
        const taxPercentage = +taxPercentageControl.value || 0;
        const purchaseRate = +purchaseRateControl.value || 0;
        const qty = +QtyControl.value;
        const discountType = discountTypeControl.value;
        if (discountType == '%') {
          let totalDiscount = discountPercentage + additionalDiscountPercentage || 0;
          if (this.costPrice > 0) {
            console.log(this.costPrice, 'this.costPrice > 0');
            let getDiscountPrice = (this.costPrice * totalDiscount) / 100;
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
            let getDiscountPrice = (this.originalPrice[index] * totalDiscount) / 100
            let getCoastPrice = this.originalPrice[index] - getDiscountPrice;
            this.TotalWithoutTax[index] = (getCoastPrice * qty).toFixed(2) || 0
            console.log(this.TotalWithoutTax[index]);
            console.log(getCoastPrice, 'getCoastPrice');
            // cost price 
            let taxprice = ((getCoastPrice * taxPercentage) / 100)|| 0
            this.taxIntoRupees[index] = taxprice || 0;
            let purchasePrice = getCoastPrice + taxprice;
            console.log(purchasePrice, 'purchasePrice');

            return purchasePrice;
          }
        } else {
          if (this.costPrice > 0) {
            console.log(this.costPrice, 'this.costPrice > 0');
            let getDiscountPrice = (this.costPrice * additionalDiscountPercentage) / 100;
            console.log(getDiscountPrice);
            let totalDiscount = discountPercentage + getDiscountPrice || 0;
            let getCoastPrice = this.costPrice - totalDiscount;
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
            let getDiscountPrice = (this.originalPrice[index] * additionalDiscountPercentage) / 100;
            let totalDiscount = discountPercentage + getDiscountPrice || 0;
            let getCoastPrice = this.originalPrice[index] - totalDiscount;
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
        const additionalDiscountPercentage = +additionalDiscountPercentageControl.value || 0;
        const purchaseRate = +purchaseRateControl.value || 0;
        let purchaseTax = this.apiPurchaseTax;
        const qty = +QtyControl.value;
        const discountType = discountTypeControl.value;
        if (discountType == '%') {
          let totalDiscount = discountPercentage + additionalDiscountPercentage || 0;
          // cost price 
          let getDiscountPrice = (this.costPrice * totalDiscount) / 100
          let getCoastPrice = this.costPrice - getDiscountPrice;
          this.TotalWithoutTax[index] = (getCoastPrice * qty).toFixed(2) || 0
          console.log(this.TotalWithoutTax[index]);
          let taxprice = ((getCoastPrice * purchaseTax) / 100) || 0
          this.taxIntoRupees[index] = taxprice || 0;
          let purchasePrice = getCoastPrice + taxprice;
          this.originalCoastPrice = purchasePrice;
          return purchasePrice;
        } else {
          // cost price 
          let getDiscountPrice = (this.costPrice * additionalDiscountPercentage) / 100
          let totalDiscount = discountPercentage + getDiscountPrice || 0;
          let getCoastPrice = this.costPrice - totalDiscount;
          this.TotalWithoutTax[index] = (getCoastPrice * qty).toFixed(2) || 0
          console.log(this.TotalWithoutTax[index]);
          let taxprice = ((getCoastPrice * purchaseTax) / 100) || 0
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
    let total = 0;
    let totalWithOutTax:any = 0;
    this?.TotalWithoutTax?.forEach((number: any) => {
      totalWithOutTax += parseFloat(number);
    })
    total = totalWithOutTax.toFixed(2);
    return total;
  }

  updateTotalDiscount() {
    this.totalDiscountPrice = this.calculateTotalAdditionalDiscount() + this.calculateTotalDiscount();
  }

  applyCouponCode() {
    if (this.coupon_code) {
      this.offerService.offerValidation(this.coupon_code).subscribe((res) => {
        console.log(res?.data);
        if (res.success) {
          this.couponDiscount = res?.data?.discount;
          this.couponUpTo = res?.data?.up_to;
          this.updateTotalDiscount();
          this.toastrService.success(res?.msg);
          var clicking = <HTMLElement>document.querySelector('.closeCouponModal');
          clicking.click();
        } else {
          this.toastrService.error(res?.msg);
          var clicking = <HTMLElement>document.querySelector('.closeCouponModal');
          clicking.click();
        }
      })
    } else {
      return;
    }
  }

  getRes: any;
  loader = false;
  loaderCreate = false;
  loaderPrint = false;
  loaderDraft = false;
  loaderPayment = false;


  ShowPaymentModal(type :string){
    this.loaderPayment = true;
    var myModal = new bootstrap.Modal(document.getElementById('Payment_Modal'))
    myModal.show();

  }
  creditLimitList: creditLimitInterfase;

  billShow : boolean = false;
  showCreditLimit(id = this.userIDs){
   this.contactService.getCreditLimitByUserId(id).subscribe({
      next : (value : creditLimitInterfase) => {
         this.creditLimitList = value;
         if (value.billable_amount <= this.calculateTotalForAll()) {
            this.billShow = true;
         }
      },
    })
  }


 async submit(type: any , btn?:any) {
    if (this.saleBillForm.valid && !this.isLimitErrorShown) {
      let formdata: any = new FormData();

      if (type == 'new') {
        this.loaderCreate = true;
      } else if (type == 'save') {
        this.loader = true;
      } else if (type == 'print') {
        this.loaderPrint = true;
      } else if (type == 'draft') {
        this.loaderDraft = true;
      }
      else if (type == 'payment') {
       
        const result =  await  this.__childComponent.Submit();
        const points = await this.__childComponent.GetValue('redeem_point');
        const types = await this.__childComponent.GetValue('point_type');
        console.log(result,'deepak data for old com')
    // return
      if (result?.success == false) {
        return
      }
      
      formdata.append('payment', JSON.stringify(result));
      if (this.userTypes.ty == 'Customer') {
        formdata.append('point_type', types);
        formdata.append('points', points);
      }
     
       await  btn.click()
    
      }
      formdata.append('customer', this.saleBillForm.get('customer')?.value);
      formdata.append('bill_date', this.saleBillForm.get('bill_date')?.value);
      formdata.append('customer_bill_no', this.saleBillForm.get('customer_bill_no')?.value);
      formdata.append('due_date', this.saleBillForm.get('due_date')?.value);
      formdata.append('payment_terms', this.saleBillForm.get('payment_terms')?.value);
      formdata.append('sale_order', this.saleBillForm.get('sale_order')?.value);
      formdata.append('note', this.saleBillForm.get('note')?.value);
      formdata.append('total_qty', parseInt(this.saleBillForm.get('total_qty')?.value));
      formdata.append('coupon_code', '');
      //2-1
      formdata.append('sales_man', this.saleBillForm.get('sales_man')?.value);
      // formdata.append('additional_discount', this.saleBillForm.get('additional_discount')?.value);
      //26-04
      const roundOffString = this.saleBillForm.get('roundoff')?.value;
      let roundOffFloat: number;
      if (typeof roundOffString === 'string') {
        // If the string matches the pattern "18.00.000", apply replacements and convert to float
        const subtotalWithoutCommasAndZeros = roundOffString.replace(/,/g, '').replace(/(\.\d*?)0+$/, '$1');
        roundOffFloat = parseFloat(subtotalWithoutCommasAndZeros);
      } else {
        // Otherwise, use the original value directly
        roundOffFloat = parseFloat(roundOffString.toFixed(2));
      }
      console.warn(typeof (roundOffFloat), 'roundoff');
      formdata.append('roundoff', roundOffFloat);
      // formdata.append('roundoff', parseFloat(this.saleBillForm.get('roundoff')?.value));
      //end round off
      //26-04
      

      //26-04
      const totalTaxString = this.saleBillForm.get('total_tax')?.value;
      let totalTaxFloat: number;
      if (typeof totalTaxString === 'string') {
        // If the string matches the pattern "18.00.000", apply replacements and convert to float
        const subtotalWithoutCommasAndZeros = totalTaxString.replace(/,/g, '').replace(/(\.\d*?)0+$/, '$1');
        totalTaxFloat = parseFloat(subtotalWithoutCommasAndZeros);
      } else {
        // Otherwise, use the original value directly
        totalTaxFloat = parseFloat(totalTaxString.toFixed(2));
      }
      console.warn(typeof (totalTaxFloat), 'total_tax');
      formdata.append('total_tax', totalTaxFloat);
      //  formdata.append('total_tax',parseFloat(this.saleBillForm.get('total_tax')?.value));
      //end total tax
      //26-04
      const totalDiscountString = this.saleBillForm.get('total_discount')?.value;
      let totalDiscountFloat: number;
      if (typeof totalDiscountString === 'string') {
        // If the string matches the pattern "18.00.000", apply replacements and convert to float
        const subtotalWithoutCommasAndZeros = totalDiscountString.replace(/,/g, '').replace(/(\.\d*?)0+$/, '$1');
        totalDiscountFloat = parseFloat(subtotalWithoutCommasAndZeros);
      } else {
        // Otherwise, use the original value directly
        totalDiscountFloat = parseFloat(totalDiscountString.toFixed(2));
      }
      console.warn(typeof (totalDiscountFloat), 'total_discount');
      formdata.append('total_discount', totalDiscountFloat);
      //    formdata.append('total_discount', this.saleBillForm.get('total_discount')?.value);
      //end total discount
      //26-04
      const subTotalString = this.saleBillForm.get('subtotal')?.value;
      let subTotalFloat: number;
      if (typeof subTotalString === 'string') {
        // If the string matches the pattern "18.00.000", apply replacements and convert to float
        const subtotalWithoutCommasAndZeros = subTotalString.replace(/,/g, '').replace(/(\.\d*?)0+$/, '$1');
        subTotalFloat = parseFloat(subtotalWithoutCommasAndZeros);
      } else {
        // Otherwise, use the original value directly
        subTotalFloat = parseFloat(subTotalString.toFixed(2));
      }
      console.warn(typeof (subTotalFloat), 'subtotal');
      formdata.append('subtotal', subTotalFloat);
      //  formdata.append('subtotal', parseFloat(this.saleBillForm.get('subtotal')?.value));
      //end sub total
      //26-04
      const TotalString = this.saleBillForm.get('total')?.value;
      let TotalFloat: number;
      if (typeof TotalString === 'string') {
        // If the string matches the pattern "18.00.000", apply replacements and convert to float
        const subtotalWithoutCommasAndZeros = TotalString.replace(/,/g, '').replace(/(\.\d*?)0+$/, '$1');
        TotalFloat = parseFloat(subtotalWithoutCommasAndZeros);
      } else {
        // Otherwise, use the original value directly
        TotalFloat = parseFloat(TotalString.toFixed(2));
      }
      console.warn(typeof (TotalFloat), 'total');

      let val = this.flat_discount.value;
      let vals : number = ((this.calculateTotalForAll() * val) / 100);
      this.new_total = this.showPercentag ? this.calculateTotalForAll() - vals : this.calculateTotalForAll() - val;
       formdata.append('flat_discount',this.showPercentag ? vals : val ?? 0);
      formdata.append('total', val ?  this.new_total : this.calculateTotalForAll());
        


      // formdata.append('total', this.calculateTotalForAll());
      //     formdata.append('total',parseFloat(this.saleBillForm.get('total')?.value));
      //end total 

      //26-04
      const additionalChargerString = this.saleBillForm.get('additional_charges')?.value;
      let addiionalChargesFloat: number;
      if (typeof additionalChargerString === 'string') {
        // If the string matches the pattern "18.00.000", apply replacements and convert to float
        const subtotalWithoutCommasAndZeros = additionalChargerString.replace(/,/g, '').replace(/(\.\d*?)0+$/, '$1');
        addiionalChargesFloat = parseFloat(subtotalWithoutCommasAndZeros);
      } else {
        // Otherwise, use the original value directly
        addiionalChargesFloat = parseFloat(additionalChargerString.toFixed(2));
      }
      console.warn(typeof (addiionalChargesFloat), 'additional_charges');
      formdata.append('additional_charges', addiionalChargesFloat);
      // formdata.append('additional_charges', this.saleBillForm.get('additional_charges')?.value);
      //end total 

      if (type == 'draft') {
        formdata.append('status', 'Draft');
      }
      const cartArray = this.saleBillForm.get('sale_bill_cart') as FormArray;
      const cartData = [];
      cartArray.controls.forEach((address) => {
        const cartGroup = address as FormGroup;
        const cartObject = {};
        Object.keys(cartGroup.controls).forEach((key) => {
          const control = cartGroup.controls[key];
          let value = control?.value;
          // Convert the value to an integer if it's a number, but keep item_name as a string
          if (value === null || value === undefined) {
            cartObject[key] = ""; // Replace null or undefined with an empty string
          }else if(value?.length === 0){
            cartObject[key] = 0;
          } else if (key !== 'item_name' && !isNaN(control.value)) {
            cartObject[key] = parseFloat(control.value);
            console.warn(cartObject[key]);

          } else {
            cartObject[key] = control.value;
          }
        });
        cartData.push(cartObject);
      });
      formdata.append('sale_bill_cart', JSON.stringify(cartData));

      this.saleService.addSalesBill(formdata).subscribe(async (res) => {
        // console.log(res);
        this.getRes = res;
        if (this.getRes.success) {
          if (type == 'new') {
            this.loaderCreate = false;
            this.saleBillForm.reset()
            this.ngOnInit()
            this.userControl.reset()
          } else if (type == 'print') {
            this.toastrService.success(this.getRes.msg);
            this.loaderPrint = false;
            this.router.navigate(['//sales/salesbilldetails/' + this.getRes?.id]);
          } else if (type == 'draft') {
            this.loaderDraft = false;
            this.toastrService.success(this.getRes.msg);
            this.router.navigate(['//sales/salesbill-list'])
          } else if (type == 'payment') {
            console.log(type ,'pay' )
           
            const myModal = new bootstrap.Modal(document.getElementById('Payment_Modal'))
             await myModal.hide();
            //  console.log('claosss')
            this.loaderPayment = false;
             
            this.toastrService.success(this.getRes.msg, '', {
              timeOut: 1000,
            });
            this.router.navigate(['//sales/salesbill-list'])
          } else {
            this.loader = false;
            this.toastrService.success(this.getRes.msg);
            this.router.navigate(['//sales/salesbill-list'])
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
          } else if (type == 'payment'){
            // this.loaderPayment = false;
          }
          this.toastrService.error(this.getRes.error.status[0])
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
        } else if (type == 'payment'){
          this.loaderPayment = false;
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
      }else if (type == 'payment'){
        this.loaderPayment = false;
      }
      this.saleBillForm.markAllAsTouched()
      this.toastrService.error('Please Fill All The Required Fields')
    }
  }

  get customer_bill_no() {
    return this.saleBillForm.get('customer_bill_no')
  }
  get bill_date() {
    return this.saleBillForm.get('bill_date')
  }
  get due_date() {
    return this.saleBillForm.get('due_date')
  }
  get shipping_note() {
    return this.saleBillForm.get('shipping_note')
  }
  get note() {
    return this.saleBillForm.get('note')
  }
  get payment_terms() {
    return this.saleBillForm.get('payment_terms')
  }
  get sale_order() {
    return this.saleBillForm.get('sale_order')
  }
  get sales_man() {
    return this.saleBillForm.get('sales_man')
  }
  discountt(index: number) {
    return this.getCart().controls[index].get('discount');
  }
  additionaldiscountt(index: number) {
    return this.getCart().controls[index].get('additional_discount');
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
  isLastAdditionalCharge(index: number): boolean {
    const cartControls = this.getAdditionalCharge().controls;
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
  selectedProduct: any[] = [];
  variantChanged(value: any, index) {
    this.selectedProduct.push(value);
    const modal = document.getElementById(`productModal-${index}`);
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
    // this.myControl.push(new FormControl(value?.product_title + ' ' + value?.variant_name));
    // this.barcode[index] = value.sku;
    this.v_id = value.id;
    const barcode = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      barcode: value.id
    });
    this.getVariant('', '', '');
    // batch discount
    // this.selectBtch.push(value.batch[0]);
    // this.selectBtch.forEach((res: any) => {
    //   this.selectedBatchDiscount.push(res);
    //   console.log(this.selectedBatchDiscount, 'discount confirm');
    // });
    this.allDiscount(value, index);
    //end
  };

  // discount filter many 

  // discount batch 
  selectedBatchDiscount: any[] = []
  selectBtch: any[] = [];
  // filter used
  discountTyp: any[] = [];
  isDiscountSelect: boolean[] = [];
  isInvoiceFree: boolean[] = [];
  isFreePriceRange: boolean[] = [];
  isQtyPerQty: boolean[] = [];
  isQtyPerPercentage: boolean[] = [];
  compulsoryDiscounts: any;
  flatDiscount: any[] = [];
  selectedDiscount: any[] = [];
  discountTypeSelect: any[] = [];
  //end

  //working
  invoiceFlatDiscount: any;
  allDiscount(product, index) {
    console.log(this.selectedBatchDiscount, 'selectedBatchDiscount');
    // this.selectedBatchDiscount.forEach((batch: any, i: number) => {
    // if (batch.discount.length > 0) {
    product?.batch[0]?.discount.forEach((discount: any) => {
      if (!this.discountTyp[index]) {
        this.discountTyp[index] = [];
      }
      this.discountTyp[index].push(discount);
      console.warn(this.discountTyp[index], 'discount selected based on index');
      // console.log(this.discountTyp);
      // auto selected data of isComuplsory
      if(this.discountTyp[index]?.length) {
        this.compulsoryDiscounts = this.discountTyp[index].filter(element => element?.is_compulsory);
      }
      // this.selectedStates = this.discountTyp[index].map(discount => discount?.is_compulsory);
    });

    if (this.compulsoryDiscounts?.length) {
      this.compulsoryDiscounts = Array.from(
        new Map(this.compulsoryDiscounts.map(item => [item?.id, item])).values()
      );
    }
    
    if (this.discountTyp?.[index]?.length) {
      this.discountTyp[index] = Array.from(
        new Map(this.discountTyp[index].map(item => [item?.id, item])).values()
      );
    }
    console.log(this.discountTyp);
    // console.log(this.compulsoryDiscounts);

    if (this.discountTyp[index]) {
      if (this.compulsoryDiscounts?.length > 0) {
        // if (this.selectedBatchDiscount.length - 1 == index) {
        // const lastCompulsoryDiscount = this.compulsoryDiscounts[this.compulsoryDiscounts.length - 1];
        // const lastCompulsoryDiscount = this.compulsoryDiscounts[0];
        // console.log(lastCompulsoryDiscount);
        this.discountTypesApplied = {
          'Price-range-free-item': false,
          'Price-range-discount': false,
          'Free-item-on-invoice': false,
          'Discount-on-Invoice': false,
          'Quantity-per-percentage': false,
          'Quantity-per-quantity': false
        };

        const discountStatus = new Map<number, Set<string>>();

// Initialize discount status for each index
        this.discountTyp.forEach((discountList, index) => {
          discountStatus.set(index, new Set<string>());
        });

        const saleBillCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup
        saleBillCart?.controls['discount'].setValue('');
        this.compulsoryDiscounts.forEach(value => {
          const discountType = value?.discount_offer_type;
          const statusMap = discountStatus.get(index) || new Set<string>();
          if (this.discountTypesApplied[discountType]) return;
          if(!!value?.is_compulsory) {
            this.totalFlatDiscountPercentage = 0;
            this.totalFlatDiscountAmount = 0;
            switch (discountType) {
              case 'Price-range-free-item':
                if (product?.batch[0]?.selling_price_online >= parseInt(value?.start_price) && product?.batch[0]?.selling_price_online <= parseInt(value?.end_price)) {
                  this.addCart();
                  const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;
                  // if (!previousCart?.controls['discount']?.value) {
                  //   previousCart.patchValue({ discount: 'Free Item' });
                  // }
                  const barcode = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index + 1) as FormGroup;
                  barcode.patchValue({
                    barcode: value?.free_items?.sku,
                    item_name: value?.free_items?.product_name,
                    qty: 1,
                    tax: 0,
                    discount: '',
                    additional_discount: 0,
                    price: value?.free_items?.mrp,
                  });
                  barcode.disable();
                  this.barcode[index + 1] = value?.free_items?.sku;
                  this.discountTypesApplied['Price-range-free-item'] = true;
                  statusMap.add('Price-range-free-item');
                  this.isPriceRangeFreeItemSelected = true;
                }
                break;
        
              case 'Price-range-discount':
                if (product?.batch[0]?.selling_price_online >= parseInt(value?.start_price) && product?.batch[0]?.selling_price_online <= parseInt(value?.end_price)) {
                  const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;
                  if (value?.discount_type === '%') {
                  // if (!previousCart?.controls['discount']?.value) {
                  //     previousCart.patchValue({
                  //       discount: value?.flat_discount,
                  //       discount_type: '%'
                  //     });
                  //   }
                    this.totalFlatDiscountPercentage += Number(value?.flat_discount);
                   } else {
                  // if (!previousCart?.controls['discount']?.value) {
                  //     previousCart.patchValue({
                  //       discount: value?.flat_discount,
                  //       discount_type: 'Rs'
                  //     });
                  //   }
                      this.totalFlatDiscountAmount += parseInt(value?.flat_discount);
                    }
                    this.purchase4(index);
                    this.discountTypesApplied['Price-range-discount'] = true;
                    statusMap.add('Price-range-discount');
                    this.isPriceRangeDiscountSelected = true;
                }
                break;
        
              case 'Free-item-on-invoice':
                if (this.calculateTotal(index) >= parseInt(value?.invoice_amount)) {
                  this.addCart();
                  const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;
                  // if (!previousCart?.controls['discount']?.value) {
                  //   previousCart.patchValue({ discount: 'Free Item Invoice' });
                  // }
                  const barcode = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index + 1) as FormGroup;
                  barcode.patchValue({
                    barcode: value?.free_items?.sku,
                    item_name: value?.free_items?.product_name,
                    qty: 1,
                    tax: 0,
                    discount: '',
                    additional_discount: 0,
                    price: value?.free_items?.mrp,
                  });
                  barcode.disable();
                  this.barcode[index + 1] = value?.free_items?.sku;
                  this.discountTypesApplied['Free-item-on-invoice'] = true;
                  statusMap.add('Free-item-on-invoice');
                  this.isFreeItemOnInvoiceSelected = true;
                }
                break;
        
              case 'Discount-on-Invoice':
                const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;
                if (value?.discount_type === '%') {
                // if (!previousCart?.controls['discount']?.value) {
                //     previousCart.patchValue({
                //       discount: 'Discount Invoice',
                //       discount_type: '%'
                //     });
                //   }
                  this.totalFlatDiscountPercentage += Number(value?.flat_discount);
                 } else {
                  //   if (!previousCart?.controls['discount']?.value) {
                  //   previousCart.patchValue({
                  //     discount: 'Discount Invoice',
                  //     discount_type: 'Rs'
                  //   });
                  // }
                    this.totalFlatDiscountAmount += parseInt(value?.flat_discount);
                  }
                  this.invoiceFlatDiscount = parseInt(value?.flat_discount);
                  this.discountTypesApplied['Discount-on-Invoice'] = true;
                  statusMap.add('Discount-on-Invoice');
                  this.isDiscountOnInvoiceSelected = true;
                
                break;
        
              case 'Quantity-per-percentage':
                if (product?.batch[0]?.selling_price_online >= parseInt(value?.purchase_qty)) {
                  const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;
                  if (value?.discount_type === '%') {
                  if (previousCart.get('qty').value >= parseInt(value?.purchase_qty)) {
                    // if (!previousCart?.controls['discount']?.value) {
                    //   previousCart.patchValue({
                    //     discount: value?.flat_discount,
                    //     discount_type: '%'
                    //   });
                    // }
                      this.totalFlatDiscountPercentage += Number(value?.flat_discount);
                    } else {
                    //   if (!previousCart?.controls['discount']?.value) {
                    //   previousCart.patchValue({
                    //     discount: value?.flat_discount,
                    //     discount_type: 'Rs'
                    //   });
                    // }
                      this.totalFlatDiscountAmount += parseInt(value?.flat_discount);
                    }
                    this.purchase4(index);
                    this.discountTypesApplied['Quantity-per-percentage'] = true;
                    statusMap.add('Quantity-per-percentage');
                    this.isQuantityPerPercentageSelected = true;
                  }
                }
                break;
        
              case 'Quantity-per-quantity':
                const previousCartQty = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;
                const currentQty = previousCartQty.get('qty').value; // Get current quantity value
                const newQty = currentQty + 1;
                this.isQtyPerQty[index] = true;
                previousCartQty.patchValue({ qty: newQty });
                if (!previousCartQty?.controls['discount']?.value) {
                  previousCartQty.patchValue({ discount: 'Qty Per Qty' });
                }
                this.discountTypesApplied['Quantity-per-quantity'] = true;
                statusMap.add('Quantity-per-quantity');
                this.isQuantityPerQuantitySelected = true;
                break;
        
              default:
                break;
            }
            discountStatus.set(index, statusMap);
          }
        });
        this.selectedStates = this.discountTyp.map(discountList => {
          let foundFirstCompulsory = false;
          return discountList.map(discount => {
            if (!!discount?.is_compulsory && !foundFirstCompulsory) {
              foundFirstCompulsory = true;
              return true; 
            } else {
              return false; 
            }
          });
        });

        if(this.totalFlatDiscountPercentage > 0) {
          saleBillCart?.controls['discount'].setValue(this.totalFlatDiscountPercentage);
        } else {
          saleBillCart?.controls['discount'].setValue(this.totalFlatDiscountAmount);
        }
      }
    }
    // });

  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }

  selectDiscount(val, i, index) {
    console.log(this.selectedStates[i][index]);
    switch (val?.discount_offer_type) {
      case 'Price-range-free-item':
        if(!!this.isPriceRangeFreeItemSelected){
          this.toastrService.error('This Type of discount is Already Selected');
          return;
        }
      break;
      case 'Price-range-discount':
        if(!!this.isPriceRangeDiscountSelected){
          this.toastrService.error('This Type of discount is Already Selected');
          return;
        }
      break;

      case 'Free-item-on-invoice':
        if(!!this.isFreeItemOnInvoiceSelected){
          this.toastrService.error('This Type of discount is Already Selected');
          return;
        }
      break;

      case 'Discount-on-Invoice':
        if(!!this.isDiscountOnInvoiceSelected){
          this.toastrService.error('This Type of discount is Already Selected');
          return;
        }
      break;

      case 'Quantity-per-percentage':
        if(!!this.isQuantityPerPercentageSelected){
          this.toastrService.error('This Type of discount is Already Selected');
          return;
        }
      break;

      case 'Quantity-per-quantity':
        if(!!this.isQuantityPerQuantitySelected){
          this.toastrService.error('This Type of discount is Already Selected');
          return;
        }
      break;
    }

    this.selectedStates[i][index] = !this.selectedStates[i][index];
    let product = this.selectedProduct[i];
    console.log(product);
    this.closeModalDiscount(i);
    // console.warn(val, 'selected discount' + i);
    if (val?.discount_offer_type == 'Price-range-free-item') {
      //  if (product?.batch[0]?.selling_price_online >= parseInt(lastCompulsoryDiscount.start_price) && product?.batch[0]?.selling_price_online <= parseInt(lastCompulsoryDiscount.end_price)) {
      this.addCart();
      const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i) as FormGroup;
    //   if(!previousCart?.controls['discount']?.value){
    //   previousCart.patchValue({
    //     discount: 'Free Item',
    //   })
    // }
      const barcode = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i + 1) as FormGroup;
      barcode.patchValue({
        barcode: val?.free_items?.sku,
        item_name: val?.free_items?.product_name,
        qty: 1,
        tax: 0,
        discount: '',
        additional_discount: 0,
        price: val?.free_items?.mrp,
      });
      barcode.disable();
      this.barcode[i + 1] = val?.free_items?.sku;
      console.log(this.barcode);
      // this.myControl.push(new FormControl(val?.free_items?.product_name));
      console.log(this.selectedBatchDiscount, 'selecteDiscount');
      this.isPriceRangeFreeItemSelected = true;
    } else if (val?.discount_offer_type == 'Price-range-discount') {
      if (product?.batch[0]?.selling_price_online >= parseInt(val.start_price) && product?.batch[0]?.selling_price_online <= parseInt(val.end_price)) {
        if (val?.discount_type == '%') {
          const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i) as FormGroup;
        //   if(!previousCart?.controls['discount']?.value){
        //   previousCart.patchValue({
        //     discount: val?.flat_discount,
        //     discount_type: '%'
        //   });
        // }
          this.addFlatDiscountPercentage[i] = Number(val?.flat_discount);
          this.purchase4(i)
        } else {
          const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i) as FormGroup;
        //   if(!previousCart?.controls['discount']?.value){
        //   previousCart.patchValue({
        //     discount: val?.flat_discount,
        //     discount_type: 'Rs'
        //   });
        // }
          this.addFlatDiscountAmount[i] = parseInt(val?.flat_discount);
          this.purchase4(i)
        }
        this.calculateTotalForAll();
      }
      this.isPriceRangeDiscountSelected = true;
    } else if (val?.discount_offer_type == 'Free-item-on-invoice') {
      console.warn(val);
      this.addCart();
      const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i) as FormGroup;
    //   if(!previousCart?.controls['discount']?.value){
    //   previousCart.patchValue({
    //     discount: 'Free Item Invoice',
    //   })
    // }
      const barcode = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i + 1) as FormGroup;
      barcode.patchValue({
        barcode: val?.free_items?.sku,
        item_name: val?.free_items?.product_name,
        qty: 1,
        tax: 0,
        discount: '',
        additional_discount: 0,
        price: val?.free_items?.mrp,
      });
      barcode.disable();
      this.barcode[i + 1] = val?.free_items?.sku;
      console.log(this.barcode);
      // this.myControl.push(new FormControl(val?.free_items?.product_name));
      console.log(this.selectedBatchDiscount, 'selecteDiscount');
      this.isFreeItemOnInvoiceSelected = true;
    } else if (val?.discount_offer_type == 'Discount-on-Invoice') {
      if (val?.discount_type == '%') {
        this.invoiceFlatDiscount = parseInt(val?.flat_discount);
        const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i) as FormGroup;
      //   if(!previousCart?.controls['discount']?.value){
      //   previousCart.patchValue({
      //     discount: 'Discount Invoice',
      //     discount_type: '%'
      //   });
      // }
        this.addFlatDiscountPercentage[i] = Number(val?.flat_discount);
      } else {
        const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i) as FormGroup;
      //   if(!previousCart?.controls['discount']?.value){
      //   previousCart.patchValue({
      //     discount: 'Discount Invoice',
      //     discount_type: 'Rs'
      //   });
      // }
        this.addFlatDiscountAmount[i] = parseInt(val?.flat_discount);
        this.invoiceFlatDiscount = parseInt(val?.flat_discount);
      }
      this.calculateTotalForAll();
      this.isDiscountOnInvoiceSelected = true;
    } else if (val?.discount_offer_type == 'Quantity-per-percentage') {
      this.isDiscountSelect[i] = true;
      this.selectedDiscount[i] = 'Qty % Discount';
      this.discountTypeSelect.push(val);
      const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i) as FormGroup;
      if (previousCart.get('qty').value >= parseInt(val?.purchase_qty)) {
        if (val?.discount_type == '%') {
        //   if(!previousCart?.controls['discount']?.value){
        //   previousCart.patchValue({
        //     discount: val?.flat_discount,
        //     discount_type: '%'
        //   });
        // }
          this.addFlatDiscountPercentage[i] = Number(val?.flat_discount);
          this.purchase4(i)
        } else {
          const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i) as FormGroup;
        //   if(!previousCart?.controls['discount']?.value){
        //   previousCart.patchValue({
        //     discount: val?.flat_discount,
        //     discount_type: 'Rs'
        //   });
        // }
          this.addFlatDiscountAmount[i] = parseInt(val?.flat_discount);
          this.purchase4(i)
        }
      }
      this.calculateTotalForAll();
      this.isQuantityPerPercentageSelected = true;
    } else if (val?.discount_offer_type == 'Quantity-per-quantity') {
      this.isDiscountSelect[i] = true;
      this.selectedDiscount[i] = 'Qty Per Qty';
      this.discountTypeSelect.push(val);
      const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i) as FormGroup;
      console.log(previousCart.get('qty').value);
      if (previousCart.get('qty').value >= parseInt(val?.purchase_qty)) {
        const currentQty = previousCart.get('qty').value; // Get current quantity value
        const newQty = currentQty + 1;
        this.isQtyPerQty[i] = true;
        this.skipQtyChange = true;
        previousCart.get('qty').setValue(newQty, { emitEvent: false });
        if(!previousCart?.value){
        previousCart.get('discount').setValue('Qty Per Qty', { emitEvent: false });
        }
        this.skipQtyChange = false;
        console.log(parseInt(val?.purchase_qty));
        return;
      }
      this.isQuantityPerQuantitySelected = true;
      //end
    }
    // this.calculateTotalForAll();
  }

  selectedDiscountChange(val, i, index) {
    this.selectedStates[i][index] = !this.selectedStates[i][index];
    console.log(val + i + index);
    console.log(JSON.stringify(val));
    if(val?.discount_offer_type === 'Price-range-free-item' || val?.discount_offer_type === 'Free-item-on-invoice'){
      if(val?.discount_offer_type === 'Price-range-free-item'){
        this.isPriceRangeFreeItemSelected = false;
      } 
      if(val?.discount_offer_type === 'Free-item-on-invoice'){
        this.isFreeItemOnInvoiceSelected = false;
      }
      this.removeCart(i + 1);
      this.discountTyp.splice(i, 1);
    }
    if(val?.discount_offer_type === 'Discount-on-Invoice' || val?.discount_offer_type == 'Quantity-per-percentage' || val?.discount_offer_type == 'Price-range-discount'){
      if(val?.discount_offer_type === 'Discount-on-Invoice'){
        this.isDiscountOnInvoiceSelected = false;
      }
      if(val?.discount_offer_type === 'Quantity-per-percentage'){
        this.isQuantityPerPercentageSelected = false;
      }
      if(val?.discount_offer_type === 'Price-range-discount'){
        this.isPriceRangeDiscountSelected = false;
      }
      if(val?.discount_type === '%'){
        this.changeFlatDiscount[i] = Number(val?.flat_discount);
      } else {
        this.changeFlatDiscountAmount[i] = Number(val?.flat_discount);
      }
    }
    if(val?.discount_offer_type === 'Quantity-per-quantity'){
      if(val?.discount_offer_type === 'Quantity-per-quantity'){
        this.isQuantityPerQuantitySelected = false;
      }
      const removeCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i) as FormGroup;
      const currentQty = removeCart.get('qty').value;
      const newQty = Number(currentQty) - 1;
        removeCart.patchValue({
          qty: newQty
        })
    }
    this.closeModalDiscount(i);
    this.calculateTotalForAll();
  }
  // end
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

  getTotalWithTax(): number {
    let totalWithTax = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      totalWithTax += this.calculateTotalEveryIndex(i);
    }
    return totalWithTax;
  }

  calculateTotalDiscount(): number {
    let totalDiscount = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const discountControl: any = this.getCart().controls[i].get('discount');
      const totalWithTax = this.calculateTotalEveryIndex(i);
      const discount = (totalWithTax * discountControl) / 100;
      // if (discountControl) {
      totalDiscount += +discount || 0;
      // }
    }
    if (this.couponDiscount && this.couponUpTo) {
      const totalWithTax = this.getTotalWithTax();
      const couponDiscountAmount = Math.min((totalWithTax * this.couponDiscount) / 100, this.couponUpTo);
      totalDiscount += couponDiscountAmount;
    }
    return totalDiscount;
  }

  calculateTotalAdditionalDiscount(): number {
    let total = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const totalControl = this.getCart().controls[i].get('additional_discount');
      const totalWithTax = this.calculateTotalEveryIndex(i);
      const discountPrice = (totalWithTax * totalControl.value) / 100;
      if (totalControl) {
        total += +discountPrice || 0;
      }
    }
    return total;
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

  isTotalAmount = false;
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
        const total = (Number(getCoastPrice) * qty);
        finalTotal = total;
      }
    }
    (this.getCart().at(index) as FormGroup).patchValue({ total: finalTotal }, { emitEvent: false });

    this.finalTotalAmount[index] = Number(finalTotal.toFixed(2));
    console.log(this.finalTotalAmount[index]);
    return Number(finalTotal.toFixed(2));
  }

  calculateTotalForAll(controlValue?, index?): any {
    let total = 0;
    let cartArray = this.getCart();
   
    cartArray.controls.forEach((val)=> {
      total += Number(val.get('total').value)
    })

    this.calculatedFinalTotal = total;

    if(Number(this.totalFlatDiscountPercentage) > 0){
      const totalDiscount = (total * this.totalFlatDiscountPercentage) / 100;
      this.totalDiscountAmount = totalDiscount;
      total = total - totalDiscount;
    }

    if(Number(this.totalFlatDiscountAmount) > 0){
      total = total - this.totalFlatDiscountAmount;
    }

    cartArray.controls.forEach((val,i)=> {
      let discountAmount = 0;
      let addDiscountAmount = 0;
      // let finalAmount = Number(val.get('total').value);
      if(!!this.addFlatDiscountPercentage[i]){
        let totalAmount = Number(val.get('total').value);
        addDiscountAmount = (totalAmount * this.addFlatDiscountPercentage[i]) / 100;
      }
      if(!!this.changeFlatDiscount[i]){
        let totalAmount = Number(val.get('total').value);
        discountAmount = (totalAmount * this.changeFlatDiscount[i]) / 100;
      }
      if(!!this.addFlatDiscountAmount[i]){
        addDiscountAmount = (this.addFlatDiscountPercentage[i])
      }
      if(!!this.changeFlatDiscountAmount[i]){
        discountAmount = (this.changeFlatDiscount[i]);
      }

      this.totalDiscountAmount = this.totalDiscountAmount - discountAmount + addDiscountAmount;;
      // total = totalAmount- discountAmount;
      total = (total + discountAmount - addDiscountAmount);
    })

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
    // console.log(totalForItem);
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
        // const discount = +discountControl.value || 0
        // const discountAmountPercentage = +discount
        // const discountAmount = (purchaseRate * discountAmountPercentage) / 100;
        // const afterDiscuntAmount = purchaseRate - discountAmount
        const taxAmountPercentage = +tax;
        const taxAmount = (purchaseRate * taxAmountPercentage) / 100;
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
    this.saleBillForm.reset();
    this.userControl.reset()
  }
  printForm(): void {
    const printContents = document.getElementById('saleBillForm').outerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  onLabelClick(event: Event) {
    event.stopPropagation();
  }
  additionalTable = true
  displayAdditiionalTable() {
    this.additionalTable = false;
  }
  hideAdditiionalTable() {
    this.additionalTable = true;
  }
  calculateTotalAdditionalChargeEveryIndex(index: number): number {
    const Items = this.getAdditionalCharge().at(index);
    const value = +Items.get('value').value || 0;
    const tax = +Items.get('tax').value || 0;
    const ctax = (value * tax) / 100;
    const total = value + ctax;
    return total;
  }
  calculateTotalAdditionalCharge(): number {
    let totaladditionalCharge = 0;
    for (let i = 0; i < this.getAdditionalCharge()?.controls?.length; i++) {
      const mrpControl = this.getAdditionalCharge().controls[i]?.get('total');
      if (mrpControl) {
        totaladditionalCharge += +mrpControl?.value;
      }
    }
    return totaladditionalCharge;
  }



  



  ngOnDestroy(): void {
    this.unsubscribeAllQty();
  }
}


