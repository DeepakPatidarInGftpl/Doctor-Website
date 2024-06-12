import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, debounceTime, map, startWith } from 'rxjs';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
import { SalesService } from 'src/app/Services/salesService/sales.service';
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

  constructor(private saleService: SalesService, private fb: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private contactService: ContactService,
    private purchaseService: PurchaseServiceService,
    private coreService: CoreService,
    private companyService: CompanyService,
    private commonService: CommonServiceService) {
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
    )

    const financialYear = localStorage.getItem('financialYear');

    this.dueDateValidation(financialYear);
    this.saleOrderDateValidation(financialYear);

    this.saleBillForm.get('bill_date').valueChanges.subscribe((date) => {
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
    this.getSaleOrder();
    this.getEmployee();
    this.getprefix();
    this.addAdditionalCharge();
    this.getAdditionalDiscount();
    this.getTax();
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
      this.saleOderList = res;
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
      qty: (1),
      price: (0),
      // discount_type: (''),
      // discount: new FormControl(0, [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      discount: new FormControl(''),
      additional_discount: new FormControl(0, [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      tax: new FormControl(0, [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      total: (0),
    })
  }
  getCart(): FormArray {
    return this.saleBillForm.get('sale_bill_cart') as FormArray;
  }
  isCart = false;
  addCart() {
    this.getCart().push(this.cart());
    this.isCart = false;
  }

  removeCart(i: any) {
    this.getCart().removeAt(i);
    this.barcode.splice(i, 1);
    if (this.saleBillForm?.value?.sale_bill_cart?.length == 0) {
      this.isCart = true;
    }

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

  oncheck(data: any) {
    console.log(data);
    const selectedItemId = data.id;
    this.userType = data?.user_type;
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
    this.addCart();
    this.saleBillForm.patchValue({
      customer: selectedItemId,

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
  //       qty: event.batch[0]?.stock,
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
  selecteProduct: any
  oncheckVariant(event: any, index) {
    const selectedItemId = event.id;
    console.log(event);
    this.selecteProduct = event?.product;
    this.selectedProductName = event.product_title;
    this.selectBatch = event.batch;
    this.apiPurchaseTax = event?.product?.sale_tax?.amount_tax_slabs[0]?.tax?.tax_percentage || 0;
    // this.batchDiscount = event.batch[0]?.discount || 0;
    this.batchDiscount = 0;
    this.additionalDiscount = event.batch[0]?.additional_discount || 0;
    this.totalDiscount = this.batchDiscount + this.additionalDiscount;
    this.isTaxAvailable[index] = event?.product?.sale_tax_including;
    this.batchCostPrice[index] = event?.batch[0]?.cost_price || 0;
    if (event?.product?.sale_tax_including) {
      if (this.userType == 'Employee') {
        let Employeeprice = event?.batch[0]?.selling_price_employee || 0;
        this.originalPrice[index] = event?.batch[0]?.selling_price_employee || 0;
        // landing cost
        let getDiscountPrice = (Employeeprice * this.totalDiscount) / 100
        console.log(getDiscountPrice);
        let getCoastPrice = Employeeprice - getDiscountPrice;
        this.TotalWithoutTax[index] = getCoastPrice * event.batch[0]?.stock || 1;
        // cost price
        let taxPrice = getCoastPrice - (getCoastPrice * (100 / (100 + this.apiPurchaseTax)))
        this.taxIntoRupees[index] = taxPrice || 0;
        this.originalCoastPrice = getCoastPrice + taxPrice;
      } else if (this.userType == 'Dealer') {
        let dealerprice = event?.batch[0]?.selling_price_dealer || 0;
        this.originalPrice[index] = event?.batch[0]?.selling_price_dealer || 0;
        // landing cost
        let getDiscountPrice = (dealerprice * this.totalDiscount) / 100
        console.log(getDiscountPrice);
        let getCoastPrice = dealerprice - getDiscountPrice;
        this.TotalWithoutTax[index] = getCoastPrice * event.batch[0]?.stock || 1;
        // cost price
        let taxPrice = getCoastPrice - (getCoastPrice * (100 / (100 + this.apiPurchaseTax)))
        console.log(taxPrice, 'taxprice');
        this.taxIntoRupees[index] = taxPrice || 0;
        this.originalCoastPrice = getCoastPrice + taxPrice;
      } else {
        let offlineprice = event?.batch[0]?.selling_price_online || 0;
        this.originalPrice[index] = event?.batch[0]?.selling_price_online || 0;
        // landing cost
        let getDiscountPrice = (offlineprice * this.totalDiscount) / 100
        console.log(getDiscountPrice);
        let getCoastPrice = offlineprice - getDiscountPrice;
        console.log(getCoastPrice, 'getCoastPrice');
        this.TotalWithoutTax[index] = getCoastPrice * event.batch[0]?.stock || 1;
        console.log(this.TotalWithoutTax[index], 'this.TotalWithoutTax[index]');
        // cost price
        let taxPrice = getCoastPrice - (getCoastPrice * (100 / (100 + this.apiPurchaseTax)))
        console.log(taxPrice, 'taxprice');
        this.taxIntoRupees[index] = taxPrice || 0;
        this.originalCoastPrice = getCoastPrice + taxPrice;
      }
    } else {
      let offlineprice = event?.batch[0]?.selling_price_online || 0;
      let purchaseTax = 18
      // cost price 
      let getDiscountPrice = (offlineprice * this.totalDiscount) / 100
      console.log(getDiscountPrice);
      let getCoastPrice = offlineprice - getDiscountPrice;
      this.TotalWithoutTax[index] = getCoastPrice * event.batch[0]?.stock || 0;
      // here adding tax into getcostprice
      let taxPrice = getCoastPrice - (getCoastPrice * (100 / (100 + purchaseTax)))
      this.taxIntoRupees[index] = taxPrice || 0;
      this.originalCoastPrice = getCoastPrice + taxPrice;
      // this.originalCoastPrice = getCoastPrice
    }
    if (event.batch.length > 0) {
      const barcode = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;
      this.tax[index] = this.apiPurchaseTax
      console.log(this.originalCoastPrice, 'this.originalCoastPrice');
      if (event?.product?.sale_tax_including == true) {
        barcode.patchValue({
          barcode: selectedItemId,
          item_name: event?.product_title,
          amount: event.batch[0]?.mrp,
          qty: event.batch[0]?.stock,
          tax: this.apiPurchaseTax,
          // discount: event.batch[0]?.discount || 0,
          additional_discount: event.batch[0]?.additional_discount || 0,
          price: this.originalCoastPrice.toFixed(2),
        });

      } else {
        this.tax[index] = 18
        barcode.patchValue({
          barcode: selectedItemId,
          item_name: event?.product_title,
          qty: event.batch[0]?.stock,
          tax: 18,
          // discount: event.batch[0]?.discount || 0,
          additional_discount: event.batch[0]?.additional_discount || 0,
          price: this.originalCoastPrice.toFixed(2),
          // landing_cost: this.landingCost || 0
        });
      }
      console.log(event.batch);
    } else {
      this.tax[index] = 18
      const barcode = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;
      barcode.patchValue({
        barcode: selectedItemId,
        item_name: event?.product_title,
        tax: 18,
      });
    }
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
      let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + this.apiPurchaseTax))) || 0
      this.taxIntoRupees[index] = taxprice || 0;
      let purchasePrice = getCoastPrice + taxprice;
      this.originalCoastPrice = purchasePrice;
      console.log(this.originalCoastPrice);
      // this.coastprice[index] = this.originalCoastPrice.toFixed(2);
      // this.landingPrice[index]=this.landingCost.toFixed(2)
    } else {
      let costprice = this.coastprice[index] || 0;
      let purchaseTax = 18;
      // cost price 
      let getDiscountPrice = (costprice * this.totalDiscount) / 100
      // console.log(getDiscountPrice, 'getDiscountPrice');
      let getCoastPrice = costprice - getDiscountPrice;

      // tax price 
      let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + purchaseTax))) || 0
      this.taxIntoRupees[index] = taxprice || 0;
      let purchasePrice = getCoastPrice + taxprice;
      this.originalCoastPrice = purchasePrice;
      // this.coastprice[index] = this.originalCoastPrice.toFixed(2);
      // console.log(this.coastprice[index]);
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
        this.TotalWithoutTax[index] = getCoastPrice * qty || 0
        console.log(this.TotalWithoutTax[index]);
        // cost price 
        let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + taxPercentage))) || 0
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
        let purchaseTax = 18;
        // cost price 
        let getDiscountPrice = (this.coastprice[index] * totalDiscount) / 100
        let getCoastPrice = this.coastprice[index] - getDiscountPrice;
        console.log(getCoastPrice);
        this.TotalWithoutTax[index] = getCoastPrice * qty || 0
        // tax price 
        let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + purchaseTax))) || 0
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
            this.TotalWithoutTax[index] = getCoastPrice * qty || 0
            // cost price 
            console.log(getCoastPrice, 'cost price this');
            let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + taxPercentage))) || 0
            this.taxIntoRupees[index] = taxprice || 0;
            console.log(taxprice);
            let purchasePrice = getCoastPrice + taxprice;
            return purchasePrice;
          } else {
            console.log(this.originalPrice[index], 'this.originalPrice[index]');
            let getDiscountPrice = (this.originalPrice[index] * totalDiscount) / 100
            let getCoastPrice = this.originalPrice[index] - getDiscountPrice;
            this.TotalWithoutTax[index] = getCoastPrice * qty || 0
            console.log(this.TotalWithoutTax[index]);
            console.log(getCoastPrice, 'getCoastPrice');
            // cost price 
            let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + taxPercentage))) || 0
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
            this.TotalWithoutTax[index] = getCoastPrice * qty || 0
            // cost price 
            console.log(getCoastPrice, 'cost price this');
            let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + taxPercentage))) || 0
            this.taxIntoRupees[index] = taxprice || 0;
            console.log(taxprice);
            let purchasePrice = getCoastPrice + taxprice;
            return purchasePrice;
          } else {
            console.log(this.originalPrice[index], 'this.originalPrice[index]');
            let getDiscountPrice = (this.originalPrice[index] * additionalDiscountPercentage) / 100;
            let totalDiscount = discountPercentage + getDiscountPrice || 0;
            let getCoastPrice = this.originalPrice[index] - totalDiscount;
            this.TotalWithoutTax[index] = getCoastPrice * qty || 0
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
        const discountPercentage = +discountPercentageControl.value || 0;
        const additionalDiscountPercentage = +additionalDiscountPercentageControl.value || 0;
        const purchaseRate = +purchaseRateControl.value || 0;
        let purchaseTax = 18;
        const qty = +QtyControl.value;
        const discountType = discountTypeControl.value;
        if (discountType == '%') {
          let totalDiscount = discountPercentage + additionalDiscountPercentage || 0;
          // cost price 
          let getDiscountPrice = (this.costPrice * totalDiscount) / 100
          let getCoastPrice = this.costPrice - getDiscountPrice;
          this.TotalWithoutTax[index] = getCoastPrice * qty || 0
          console.log(this.TotalWithoutTax[index]);
          let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + purchaseTax))) || 0
          this.taxIntoRupees[index] = taxprice || 0;
          let purchasePrice = getCoastPrice + taxprice;
          this.originalCoastPrice = purchasePrice;
          return purchasePrice;
        } else {
          // cost price 
          let getDiscountPrice = (this.costPrice * additionalDiscountPercentage) / 100
          let totalDiscount = discountPercentage + getDiscountPrice || 0;
          let getCoastPrice = this.costPrice - totalDiscount;
          this.TotalWithoutTax[index] = getCoastPrice * qty || 0
          console.log(this.TotalWithoutTax[index]);
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
    this?.TotalWithoutTax?.forEach((number: any) => {
      total += number;
    })
    return total;
  }

  getRes: any;
  loader = false;
  loaderCreate = false;
  loaderPrint = false;
  loaderDraft = false;
  submit(type: any) {
    console.log(this.saleBillForm.value);
    if (this.saleBillForm.valid) {
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
      formdata.append('customer', this.saleBillForm.get('customer')?.value);
      formdata.append('bill_date', this.saleBillForm.get('bill_date')?.value);
      formdata.append('customer_bill_no', this.saleBillForm.get('customer_bill_no')?.value);
      formdata.append('due_date', this.saleBillForm.get('due_date')?.value);
      formdata.append('payment_terms', this.saleBillForm.get('payment_terms')?.value);
      formdata.append('sale_order', this.saleBillForm.get('sale_order')?.value);
      formdata.append('note', this.saleBillForm.get('note')?.value);
      formdata.append('total_qty', parseInt(this.saleBillForm.get('total_qty')?.value));
      //2-1
      formdata.append('sales_man', this.saleBillForm.get('sales_man')?.value);
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
      formdata.append('total', TotalFloat);
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
          // Convert the value to an integer if it's a number, but keep item_name as a string
          if (key !== 'item_name' && !isNaN(control.value)) {
            cartObject[key] = parseFloat(control.value);
            console.warn(cartObject[key]);

          } else {
            cartObject[key] = control.value;
          }
        });
        cartData.push(cartObject);
      });
      formdata.append('sale_bill_cart', JSON.stringify(cartData));
      this.saleService.addSalesBill(formdata).subscribe(res => {
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
    console.log(value);
    // console.log(index);
    // console.log(value?.sku);
    this.barcode[index] = value.sku;
    console.log(this.barcode);
    // console.log(this.barcode);
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
      console.log(this.discountTyp);
      // auto selected data of isComuplsory
      this.compulsoryDiscounts = this.discountTyp[index].filter(element => element.is_compulsory);
      console.log(this.compulsoryDiscounts);
    });


    if (this.discountTyp[index]) {
      if (this.compulsoryDiscounts) {
        // if (this.selectedBatchDiscount.length - 1 == index) {
        const lastCompulsoryDiscount = this.compulsoryDiscounts[this.compulsoryDiscounts.length - 1];
        // const lastCompulsoryDiscount = this.compulsoryDiscounts[0];
        console.log(lastCompulsoryDiscount);
        if (lastCompulsoryDiscount?.is_compulsory) {
          // console.log(lastCompulsoryDiscount, 'lastCompulsoryDiscount');
          if (lastCompulsoryDiscount?.discount_offer_type == 'Price-range-free-item') {
            if (product?.batch[0]?.selling_price_online >= parseInt(lastCompulsoryDiscount.start_price) && product?.batch[0]?.selling_price_online <= parseInt(lastCompulsoryDiscount.end_price)) {
              this.addCart();
              const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;
              previousCart.patchValue({
                discount: 'Free Item',
              })
              const barcode = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index + 1) as FormGroup;
              barcode.patchValue({
                barcode: lastCompulsoryDiscount?.free_items?.sku,
                item_name: lastCompulsoryDiscount?.free_items?.product_name,
                qty: 1,
                tax: 0,
                discount: '',
                additional_discount: 0,
                price: lastCompulsoryDiscount?.free_items?.mrp,
              });
              this.barcode[index + 1] = lastCompulsoryDiscount?.free_items?.sku;
              console.log(this.barcode);
              // this.myControl.push(new FormControl(lastCompulsoryDiscount?.free_items?.product_name));
              console.log(this.selectedBatchDiscount, 'selecteDiscount');
            }
          } else if (lastCompulsoryDiscount?.discount_offer_type == 'Price-range-discount') {
            if (product?.batch[0]?.selling_price_online >= parseInt(lastCompulsoryDiscount.start_price) && product?.batch[0]?.selling_price_online <= parseInt(lastCompulsoryDiscount.end_price)) {
              if (lastCompulsoryDiscount?.discount_type == '%') {
                let flatDisc = product?.batch[0]?.selling_price_online * parseInt(lastCompulsoryDiscount?.flat_discount) / 100;
                console.log(flatDisc);
                const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;
                previousCart.patchValue({
                  discount: lastCompulsoryDiscount?.flat_discount,
                  discount_type: '%'
                });
                console.log(this.userType);
                if (product?.product?.sale_tax_including) {
                  if (this.userType == 'Employee') {
                    this.costPrice = product?.batch[0]?.selling_price_employee || 0;
                  } else if (this.userType == 'Dealer') {
                    this.costPrice = product?.batch[0]?.selling_price_dealer || 0;
                  } else {
                    this.costPrice = product?.batch[0]?.selling_price_online || 0;
                  }
                } else {
                  this.costPrice = product?.batch[0]?.selling_price_online || 0;
                }
                console.warn(this.costPrice);
                this.purchase4(index)
              } else {
                const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;
                previousCart.patchValue({
                  discount: lastCompulsoryDiscount?.flat_discount,
                  discount_type: 'Rs'
                });
                if (product?.product?.sale_tax_including) {
                  if (this.userType == 'Employee') {
                    this.costPrice = product?.batch[0]?.selling_price_employee || 0;
                  } else if (this.userType == 'Dealer') {
                    this.costPrice = product?.batch[0]?.selling_price_dealer || 0;
                  } else {
                    this.costPrice = product?.batch[0]?.selling_price_online || 0;
                  }
                } else {
                  this.costPrice = product?.batch[0]?.selling_price_online || 0;
                }
                console.warn(this.costPrice);
                this.purchase4(index)
              }
            }
          } else if (lastCompulsoryDiscount?.discount_offer_type == 'Free-item-on-invoice') {
            setTimeout(() => {
              if (this.calculateTotal() >= parseInt(lastCompulsoryDiscount?.invoice_amount)) {
                console.warn(lastCompulsoryDiscount);
                this.addCart();
                const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;
                previousCart.patchValue({
                  discount: 'Free Item Invoice',
                })
                const barcode = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index + 1) as FormGroup;
                barcode.patchValue({
                  barcode: lastCompulsoryDiscount?.free_items?.sku,
                  item_name: lastCompulsoryDiscount?.free_items?.product_name,
                  qty: 1,
                  tax: 0,
                  discount: '',
                  additional_discount: 0,
                  price: lastCompulsoryDiscount?.free_items?.mrp,
                });
                this.barcode[index + 1] = lastCompulsoryDiscount?.free_items?.sku;
                console.log(this.barcode);
                // this.myControl.push(new FormControl(lastCompulsoryDiscount?.free_items?.product_name));
                console.log(this.selectedBatchDiscount, 'selecteDiscount');
              }
            }, 3000);

          } else if (lastCompulsoryDiscount?.discount_offer_type == 'Discount-on-Invoice') {
            if (lastCompulsoryDiscount?.discount_type == '%') {
              this.invoiceFlatDiscount = parseInt(lastCompulsoryDiscount?.flat_discount);
              const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;
              previousCart.patchValue({
                discount: 'Discount Invoice',
                discount_type: '%'
              });
            } else {
              const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;
              previousCart.patchValue({
                discount: 'Discount Invoice',
                discount_type: 'Rs'
              });
              this.invoiceFlatDiscount = parseInt(lastCompulsoryDiscount?.flat_discount);
            }
          } else if (lastCompulsoryDiscount?.discount_offer_type == 'Quantity-per-percentage') {
            this.isDiscountSelect[index] = true;
            this.selectedDiscount[index] = 'Qty % Discount';
            this.discountTypeSelect.push(lastCompulsoryDiscount);
            const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;
            if (previousCart.get('qty').value >= parseInt(lastCompulsoryDiscount?.purchase_qty)) {
              if (lastCompulsoryDiscount?.discount_type == '%') {
                let flatDisc = product?.batch[0]?.selling_price_online * parseInt(lastCompulsoryDiscount?.flat_discount) / 100;
                console.log(flatDisc);
                previousCart.patchValue({
                  discount: lastCompulsoryDiscount?.flat_discount,
                  discount_type: '%'
                });
                console.log(this.userType);
                if (product?.product?.sale_tax_including) {
                  if (this.userType == 'Employee') {
                    this.costPrice = product?.batch[0]?.selling_price_employee || 0;
                  } else if (this.userType == 'Dealer') {
                    this.costPrice = product?.batch[0]?.selling_price_dealer || 0;
                  } else {
                    this.costPrice = product?.batch[0]?.selling_price_online || 0;
                  }
                } else {
                  this.costPrice = product?.batch[0]?.selling_price_online || 0;
                }
                console.warn(this.costPrice);
                this.purchase4(index)
              } else {
                let totalFlatDiscount = product?.batch[0]?.selling_price_online - parseInt(lastCompulsoryDiscount?.flat_discount);
                const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;
                previousCart.patchValue({
                  discount: lastCompulsoryDiscount?.flat_discount,
                  discount_type: 'Rs'
                });
                console.log(this.userType);
                if (product?.product?.sale_tax_including) {
                  if (this.userType == 'Employee') {
                    this.costPrice = product?.batch[0]?.selling_price_employee || 0;
                  } else if (this.userType == 'Dealer') {
                    this.costPrice = product?.batch[0]?.selling_price_dealer || 0;
                  } else {
                    this.costPrice = product?.batch[0]?.selling_price_online || 0;
                  }
                } else {
                  this.costPrice = product?.batch[0]?.selling_price_online || 0;
                }
                console.warn(this.costPrice);
                this.purchase4(index)
                console.warn(totalFlatDiscount);
              }
            }
          } else if (lastCompulsoryDiscount?.discount_offer_type == 'Quantity-per-quantity') {
            this.isDiscountSelect[index] = true;
            this.selectedDiscount[index] = 'Qty Per Qty';
            this.discountTypeSelect.push(lastCompulsoryDiscount);
            const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(index) as FormGroup;
            console.log(previousCart.get('qty').value);
            // if (previousCart.get('qty').value >= parseInt(lastCompulsoryDiscount?.purchase_qty)) {
            const currentQty = previousCart.get('qty').value; // Get current quantity value
            const newQty = currentQty + 1;
            this.isQtyPerQty[index] = true;
            previousCart.patchValue({
              qty: newQty,
              discount: 'Qty Per Qty'
            });
            console.log(parseInt(lastCompulsoryDiscount?.purchase_qty));
            // }
          }
        }
        // }
      }
    }
    // });

  }
  selectDiscount(val, i) {
    let product = this.selectedProduct[i];
    console.log(product);
    this.closeModalDiscount(i);
    console.warn(val, 'selected discount' + i);
    if (val?.discount_offer_type == 'Price-range-free-item') {
      //remove
      const removeCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i) as FormGroup;
      console.log(removeCart.get('discount').value);
      let dis = removeCart.get('discount').value;
      const currentQty = removeCart.get('qty').value;
      const newQty = currentQty - 1;
      if (dis == 'Qty Per Qty') {
        removeCart.patchValue({
          qty: newQty
        })
      } if (dis > 0) {
        removeCart.patchValue({
          discount: '',
          discount_type: ''
        })
      } if (dis == 'Free Item') {
        this.removeCart(i + 1);
        this.discountTyp.splice(i + 1, 1);
        console.warn(this.discountTyp);
      } if (dis == 'Free Item Invoice') {
        this.removeCart(i + 1);
        this.discountTyp.splice(i + 1, 1);
        console.warn(this.discountTyp);
      }

      //end
      //add 
      //  if (product?.batch[0]?.selling_price_online >= parseInt(lastCompulsoryDiscount.start_price) && product?.batch[0]?.selling_price_online <= parseInt(lastCompulsoryDiscount.end_price)) {
      this.addCart();
      const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i) as FormGroup;
      previousCart.patchValue({
        discount: 'Free Item',
      })
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
      this.barcode[i + 1] = val?.free_items?.sku;
      console.log(this.barcode);
      // this.myControl.push(new FormControl(val?.free_items?.product_name));
      console.log(this.selectedBatchDiscount, 'selecteDiscount');
      // }
      //and
    } else if (val?.discount_offer_type == 'Price-range-discount') {
      //remove
      const removeCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i) as FormGroup;
      console.log(removeCart.get('discount').value);
      let dis = removeCart.get('discount').value;
      const currentQty = removeCart.get('qty').value;
      const newQty = currentQty - 1;
      if (dis == 'Qty Per Qty') {
        removeCart.patchValue({
          qty: newQty
        })
      } if (dis > 0) {
        removeCart.patchValue({
          discount: '',
          discount_type: ''
        })
      } if (dis == 'Free Item') {
        this.removeCart(i + 1);
        this.discountTyp.splice(i + 1, 1);
        console.warn(this.discountTyp);
      } if (dis == 'Free Item Invoice') {
        this.removeCart(i + 1);
        this.discountTyp.splice(i + 1, 1);
        console.warn(this.discountTyp);
      }
      //end
      //add
      if (product?.batch[0]?.selling_price_online >= parseInt(val.start_price) && product?.batch[0]?.selling_price_online <= parseInt(val.end_price)) {
        if (val?.discount_type == '%') {
          let flatDisc = product?.batch[0]?.selling_price_online * parseInt(val?.flat_discount) / 100;
          console.log(flatDisc);
          const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i) as FormGroup;
          previousCart.patchValue({
            discount: val?.flat_discount,
            discount_type: '%'
          });
          console.log(this.userType);
          if (product?.product?.sale_tax_including) {
            if (this.userType == 'Employee') {
              this.costPrice = product?.batch[0]?.selling_price_employee || 0;
            } else if (this.userType == 'Dealer') {
              this.costPrice = product?.batch[0]?.selling_price_dealer || 0;
            } else {
              this.costPrice = product?.batch[0]?.selling_price_online || 0;
            }
          } else {
            this.costPrice = product?.batch[0]?.selling_price_online || 0;
          }
          console.warn(this.costPrice);
          this.purchase4(i)
        } else {
          const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i) as FormGroup;
          previousCart.patchValue({
            discount: val?.flat_discount,
            discount_type: 'Rs'
          });
          if (product?.product?.sale_tax_including) {
            if (this.userType == 'Employee') {
              this.costPrice = product?.batch[0]?.selling_price_employee || 0;
            } else if (this.userType == 'Dealer') {
              this.costPrice = product?.batch[0]?.selling_price_dealer || 0;
            } else {
              this.costPrice = product?.batch[0]?.selling_price_online || 0;
            }
          } else {
            this.costPrice = product?.batch[0]?.selling_price_online || 0;
          }
          console.warn(this.costPrice);
          this.purchase4(i)
        }
      }
      //end
    } else if (val?.discount_offer_type == 'Free-item-on-invoice') {
      // setTimeout(() => {
      //   if (this.calculateTotal() >= parseInt(val?.invoice_amount)) {
      //remove
      const removeCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i) as FormGroup;
      console.log(removeCart.get('discount').value);
      let dis = removeCart.get('discount').value;
      const currentQty = removeCart.get('qty').value;
      const newQty = currentQty - 1;
      if (dis == 'Qty Per Qty') {
        removeCart.patchValue({
          qty: newQty
        })
      } if (dis > 0) {
        removeCart.patchValue({
          discount: '',
          discount_type: ''
        })
      } if (dis == 'Free Item') {
        this.removeCart(i + 1);
        this.discountTyp.splice(i + 1, 1);
        console.warn(this.discountTyp);
      } if (dis == 'Free Item Invoice') {
        this.removeCart(i + 1);
        this.discountTyp.splice(i + 1, 1);
        console.warn(this.discountTyp);
      }
      //end
      console.warn(val);
      this.addCart();
      const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i) as FormGroup;
      previousCart.patchValue({
        discount: 'Free Item Invoice',
      })
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
      this.barcode[i + 1] = val?.free_items?.sku;
      console.log(this.barcode);
      // this.myControl.push(new FormControl(val?.free_items?.product_name));
      console.log(this.selectedBatchDiscount, 'selecteDiscount');
      //   }
      // }, 3000);

    } else if (val?.discount_offer_type == 'Discount-on-Invoice') {
      //remove
      const removeCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i) as FormGroup;
      console.log(removeCart.get('discount').value);
      let dis = removeCart.get('discount').value;
      const currentQty = removeCart.get('qty').value;
      const newQty = currentQty - 1;
      if (dis == 'Qty Per Qty') {
        removeCart.patchValue({
          qty: newQty
        })
      } if (dis > 0) {
        removeCart.patchValue({
          discount: '',
          discount_type: ''
        })
      } if (dis == 'Free Item') {
        this.removeCart(i + 1);
        this.discountTyp.splice(i + 1, 1);
        console.warn(this.discountTyp);
      } if (dis == 'Free Item Invoice') {
        this.removeCart(i + 1);
        this.discountTyp.splice(i + 1, 1);
        console.warn(this.discountTyp);
      }
      //end
      //add
      if (val?.discount_type == '%') {
        this.invoiceFlatDiscount = parseInt(val?.flat_discount);
        const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i) as FormGroup;
        previousCart.patchValue({
          discount: 'Discount Invoice',
          discount_type: '%'
        });
      } else {
        const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i) as FormGroup;
        previousCart.patchValue({
          discount: 'Discount Invoice',
          discount_type: 'Rs'
        });
        this.invoiceFlatDiscount = parseInt(val?.flat_discount);
      }
      //end
    } else if (val?.discount_offer_type == 'Quantity-per-percentage') {
      //remove
      const removeCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i) as FormGroup;
      console.log(removeCart.get('discount').value);
      let dis = removeCart.get('discount').value;
      const currentQty = removeCart.get('qty').value;
      const newQty = currentQty - 1;
      if (dis == 'Qty Per Qty') {
        removeCart.patchValue({
          qty: newQty
        })
      } if (dis > 0) {
        removeCart.patchValue({
          discount: '',
          discount_type: ''
        })
      } if (dis == 'Free Item') {
        this.removeCart(i + 1);
        this.discountTyp.splice(i + 1, 1);
        console.warn(this.discountTyp);
      } if (dis == 'Free Item Invoice') {
        this.removeCart(i + 1);
        this.discountTyp.splice(i + 1, 1);
        console.warn(this.discountTyp);
      }
      //end
      //add
      this.isDiscountSelect[i] = true;
      this.selectedDiscount[i] = 'Qty % Discount';
      this.discountTypeSelect.push(val);
      const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i) as FormGroup;
      if (previousCart.get('qty').value >= parseInt(val?.purchase_qty)) {
        if (val?.discount_type == '%') {
          let flatDisc = product?.batch[0]?.selling_price_online * parseInt(val?.flat_discount) / 100;
          console.log(flatDisc);
          previousCart.patchValue({
            discount: val?.flat_discount,
            discount_type: '%'
          });
          console.log(this.userType);
          if (product?.product?.sale_tax_including) {
            if (this.userType == 'Employee') {
              this.costPrice = product?.batch[0]?.selling_price_employee || 0;
            } else if (this.userType == 'Dealer') {
              this.costPrice = product?.batch[0]?.selling_price_dealer || 0;
            } else {
              this.costPrice = product?.batch[0]?.selling_price_online || 0;
            }
          } else {
            this.costPrice = product?.batch[0]?.selling_price_online || 0;
          }
          console.warn(this.costPrice);
          this.purchase4(i)
        } else {
          let totalFlatDiscount = product?.batch[0]?.selling_price_online - parseInt(val?.flat_discount);
          const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i) as FormGroup;
          previousCart.patchValue({
            discount: val?.flat_discount,
            discount_type: 'Rs'
          });
          console.log(this.userType);
          if (product?.product?.sale_tax_including) {
            if (this.userType == 'Employee') {
              this.costPrice = product?.batch[0]?.selling_price_employee || 0;
            } else if (this.userType == 'Dealer') {
              this.costPrice = product?.batch[0]?.selling_price_dealer || 0;
            } else {
              this.costPrice = product?.batch[0]?.selling_price_online || 0;
            }
          } else {
            this.costPrice = product?.batch[0]?.selling_price_online || 0;
          }
          console.warn(this.costPrice);
          this.purchase4(i)
          console.warn(totalFlatDiscount);
        }
      }
      //end
    } else if (val?.discount_offer_type == 'Quantity-per-quantity') {
      //remove
      const removeCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i) as FormGroup;
      console.log(removeCart.get('discount').value);
      console.log(i, 'index');
      console.warn(i + 1);

      let dis = removeCart.get('discount').value;
      const currentQty = removeCart.get('qty').value;
      const newQty = currentQty - 1;
      if (dis == 'Qty Per Qty') {
        removeCart.patchValue({
          qty: newQty
        })
      } if (dis > 0) {
        removeCart.patchValue({
          discount: '',
          discount_type: ''
        });
      } if (dis == 'Free Item') {
        this.removeCart(i + 1);
        this.discountTyp.splice(i + 1, 1);
        console.warn(this.discountTyp);
      } if (dis == 'Free Item Invoice') {
        this.removeCart(i + 1);
        this.discountTyp.splice(i + 1, 1);
        console.warn(this.discountTyp);
      }

      //end
      //add
      this.isDiscountSelect[i] = true;
      this.selectedDiscount[i] = 'Qty Per Qty';
      this.discountTypeSelect.push(val);
      const previousCart = (this.saleBillForm.get('sale_bill_cart') as FormArray).at(i) as FormGroup;
      console.log(previousCart.get('qty').value);
      if (previousCart.get('qty').value >= parseInt(val?.purchase_qty)) {
        const currentQty = previousCart.get('qty').value; // Get current quantity value
        const newQty = currentQty + 1;
        this.isQtyPerQty[i] = true;
        previousCart.patchValue({
          qty: newQty,
          discount: 'Qty Per Qty'
        });
        console.log(parseInt(val?.purchase_qty));
      }
      //end
    }
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

  calculateTotalAdditionalDiscount(): number {
    let total = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const totalControl = this.getCart().controls[i].get('additional_discount');
      if (totalControl) {
        total += +totalControl.value || 0;
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
  calculateTotal(): number {
    let total = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const taxControl = this.getCart().controls[i].get('total');
      const discountControl = this.getCart().controls[i].get('discount');
      const discountTypeControl = this.getCart().controls[i].get('discount_type');
      if (taxControl) {
        total += +taxControl.value || 0;
        if (discountTypeControl && discountControl) {
          let discountType = discountTypeControl.value;
          let discountValue = discountControl.value;
          if (discountValue == 'Discount Invoice' && this.invoiceFlatDiscount) {
            if (discountType == '%') {
              let flatDis = total * this.invoiceFlatDiscount / 100;
              total = total - flatDis;
            } else {
              total = total - this.invoiceFlatDiscount;
            }
          }
        }
      }
    }
    this.totalAmount = total;
    // Round the total based on decimal value and add 1 if necessary
    const roundedTotal = Math.round(total * 100) / 100; // Round to two decimal places
    const decimalPart = roundedTotal - Math.floor(roundedTotal);

    if (decimalPart >= 0.5) {
      return Math.floor(roundedTotal) + 1;
    } else {
      return Math.floor(roundedTotal);
    }
    return total;
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
      if (purchaseRateControl && discountControl) {
        const purchaseRate = +purchaseRateControl.value || 0;
        const tax = +taxControl.value || 0;
        const discount = +discountControl.value || 0
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
}


