import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription, debounceTime, distinctUntilChanged, map, startWith } from 'rxjs';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
import { SalesService } from 'src/app/Services/salesService/sales.service';

@Component({
  selector: 'app-update-estimate',
  templateUrl: './update-estimate.component.html',
  styleUrls: ['./update-estimate.component.scss']
})
export class UpdateEstimateComponent implements OnInit {

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
  isFromSubmitted = false;
  employeeList: any;
  private qtySubscriptions: Subscription[] = [];
  private discountSubscriptions: Subscription[] = [];
  constructor(private saleService: SalesService, private fb: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private contactService: ContactService,
    private Arout: ActivatedRoute,
    private coreService: CoreService,
    private commonService: CommonServiceService,
    private cdr: ChangeDetectorRef
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

  saleEstimateForm!: FormGroup;
  minDate: string = '';
  maxDate: string = '';
  expiryMinDate: string = '';
  expiryMaxDate: string = '';

  get f() {
    return this.saleEstimateForm.controls;
  }
  searchForm!: FormGroup;
  subcategoryList;
  myControl: FormArray;
  id: any;
  editRes: any;
  isStatusDraft = false; //21-5
  selectedBatchDiscount: any[] = []
  selectBtch: any[] = [];
  isDiscountSelect: boolean[] = [];
  isInvoiceFree: boolean[] = [];
  isFreePriceRange: boolean[] = [];
  isQtyPerQty: boolean[] = [];
  isQtyPerPercentage: boolean[] = [];
  compulsoryDiscounts: any;
  flatDiscount: any[] = [];
  selectedDiscount: any[] = [];
  discountTypeSelect: any[] = [];
  changeFlatDiscount: any[] = [];
  changeFlatDiscountAmount: any[] = [];
  isPriceRangeFreeItemSelected = false;
  isPriceRangeDiscountSelected = false;
  isFreeItemOnInvoiceSelected = false;
  isDiscountOnInvoiceSelected = false;
  isQuantityPerPercentageSelected = false;
  isQuantityPerQuantitySelected = false;
  totalFlatDiscountAmount: any = 0;
  addFlatDiscountPercentage: any[] = [];
  addFlatDiscountAmount: any[] = [];
  totalFlatDiscountPercentage: any = 0;
  selectedStates: boolean[] = [];
  // totalProductAmount: any;
  calculatedFinalTotal = 0;
  totalDiscountAmount: any = 0;
  discountTypesApplied:any;
  skipQtyChange = false;
  invoiceFlatDiscount: any;
  totalDefaultDiscount = 0;
  discountTyp: any[] = [];
  excludeDiscountIndexes = [];

  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    const defaultDate = new Date().toISOString().split('T')[0]; // Get yyyy-MM-dd part
    this.userControl.setValue('Loading...');
    this.myControl = new FormArray([]);
    this.saleEstimateForm = this.fb.group({
      customer: new FormControl('', [Validators.required]),
      estimate_date: new FormControl(defaultDate, [Validators.required]),
      estimate_no: new FormControl('', [Validators.required]),
      estimate_expiry_date: new FormControl(''),
      payment_terms: new FormControl('', [Validators.required]),
      estimate_cart: this.fb.array([]),
      total_qty: new FormControl(''),
      total_tax: new FormControl(''),
      total_discount: new FormControl(''),
      subtotal: new FormControl(''),
      roundoff: new FormControl(''),
      total: new FormControl(''),
      status: new FormControl(''),
      note: new FormControl(''),
    });

    this.searchForm = this.fb.group({
      search: new FormControl()
    })
    //patch value
    this.saleService.getSalesEstimateById(this.id).subscribe(res => {
      this.editRes = res;
      this.saleEstimateForm.patchValue(this.editRes);
      // 21-5
      if (this.editRes.status == 'Draft' || this.editRes.status == null) {
        this.isStatusDraft = true;
        this.getprefix();
      } else {
        this.saleEstimateForm.get('estimate_no').patchValue(this.editRes?.estimate_no) // 21-5
      }
      //end 21-5

      this.saleEstimateForm.get('payment_terms').patchValue(this.editRes?.payment_terms.id)

      if (this.editRes?.cart.length > 0) {
        this.saleEstimateForm.setControl('estimate_cart', this.udateCart(this.editRes?.cart));
      } else {
        this.isCart = true;
      }
      this.saleEstimateForm.get('customer')?.patchValue(this.editRes?.customer?.id);
      this.userControl.setValue(this.editRes?.customer?.phone_number ? (this.editRes?.customer?.name + ' (' + this.editRes?.customer?.phone_number + ')') : this.editRes?.customer?.name);
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

    this.estimateDateValidation(financialYear);
    this.expiryDateValidation(financialYear);

    this.saleEstimateForm.get('estimate_date').valueChanges.subscribe((date) => {
      if (date) {
        const expiryDate = new Date(date);
        expiryDate.setDate(expiryDate.getDate() + 7);
        this.saleEstimateForm.get('estimate_expiry_date').patchValue(this.commonService.formatDate(expiryDate));
      }
      this.updateExpiryDateMin(date, financialYear);
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
    this.getProfile();
    this.getEmployee();
  }

  prefixNo: any;
  getprefix() {
    this.saleService.getEstimatePrefix().subscribe((res: any) => {
      console.log(res);
      if (res.success == true) {
        this.prefixNo = res.data;
        this.saleEstimateForm.get('estimate_no').patchValue(this.prefixNo[0]?.id);
      } else {
        this.toastrService.error(res.msg)
      }
    }, err => {
      this.toastrService.error(err.error.msg)
    })
  }

  category: any;
  subcategory: any;
  searc: any;
  variantList2: any[] = [];
  variantList: any[] = [];
  isSearch = false;
  searchLength: any;

  updateExpiryDateMin(selectedDate: string, financialYear) {
    const dateControl = this.saleEstimateForm.get('estimate_expiry_date');
    if (selectedDate) {
      const minDate = new Date(selectedDate);
      const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear, minDate);
      this.expiryMinDate = formattedMinDate;
      this.expiryMaxDate = formattedMaxDate;
    }
  }

  expiryDateValidation(financialYear) {
    const dateControl = this.saleEstimateForm.get('estimate_expiry_date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear);
    this.expiryMinDate = formattedMinDate;
    this.expiryMaxDate = formattedMaxDate;
  }

  estimateDateValidation(financialYear) {
    const dateControl = this.saleEstimateForm.get('estimate_date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear);
    this.minDate = formattedMinDate;
    this.maxDate = formattedMaxDate;
  }

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
            this.myControl.push(new FormControl(res[0]?.product_title));
          }
          if (search) {
            //barcode patch
            this.searchs = res;
            this.productOption = res;
            // console.log(this.searchs);
            this.productName[index] = this.searchs[0]?.product_title;
            // console.log(this.productName);
            this.check = true;
            const barcode = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
            barcode.patchValue({
              // barcode: this.searchs[0].id,
              // item_name: this.searchs[0]?.variant_name
            });
          }

        });
      }
      else {
        this.saleService.filterVariant(this.category, this.subcategory, search).subscribe((res: any) => {
          console.log(res);
          this.isSearch = false;
          this.variantList[index] = res
          this.variantList2 = res;
          console.log(this.variantList);
          if (barcode === 'barcode') {
            this.oncheckVariant(res[0], index);
            this.myControl.push(new FormControl(res[0]?.product_title));
          }
          if (search) {
            //barcode patch
            this.searchs = res;
            this.productOption = res;
            // console.log(this.searchs);
            this.productName[index] = this.searchs[0]?.product_title;
            // console.log(this.productName);
            this.check = true;
            const barcode = (this.saleEstimateForm.get('estimate_cart') as FormArray)?.at(index) as FormGroup;
            barcode.patchValue({
              // barcode: this.searchs[0]?.id,
              // item_name: this.searchs[0]?.variant_name
            });
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
    return this.saleEstimateForm.get('customer') as FormControl;
  }

  udateCart(add: any): FormArray {
    this.addCart();
    const formArr = this.saleEstimateForm.get('estimate_cart') as FormArray;
    add.forEach((j: any, i) => {
        const price = j.price || 0;
        const taxPercentage = j.tax || 0;
        const calculatedTax = price - (price * taxPercentage) / 100;
        this.taxIntoRupees[i] = calculatedTax;
        
            let taxPrice = (price * taxPercentage) / 100;
            this.taxIntoRupees[i] = taxPrice;
            let totalWithoutTaxPrice = j.price - taxPrice;
            let TotalWithoutTax = (totalWithoutTaxPrice* j.qty);
            this.TotalWithoutTax[i] = parseFloat(''+TotalWithoutTax);
            console.log(this.TotalWithoutTax[i]);
        
        let totalDiscount: any = 0;
         totalDiscount += parseFloat(j?.discount);
        this.totalDefaultDiscount = totalDiscount;
        if (!formArr.at(i)) {
            formArr.push(
                new FormGroup({
                    barcode: new FormControl(j?.barcode.id),
                    item_name: new FormControl(j?.item_name),
                    qty: new FormControl(j?.qty),
                    price: new FormControl(j.price),

                    tax: new FormControl(parseInt( j?.tax || 0)),
                    discount: new FormControl(parseInt( j?.discount)),

                    total: new FormControl(j?.total)
                })
            );
        } else {
            formArr.at(i).patchValue({
                barcode: j?.barcode.id,
                item_name: j?.item_name,
                qty: j?.qty,
                price: j.price,

                tax: parseInt( j?.tax || 0),

                discount: parseInt(j?.discount),
                total: j?.total
            });
        }

        if (j?.barcode?.batch[0]?.discount) {
            j.barcode.batch[0].discount.forEach((discount: any) => {
                if (!this.discountTyp[i]) {
                    this.discountTyp[i] = [];
                }
                this.discountTyp[i].push(discount);
            });
        }

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

        this.excludeDiscountIndexes.push(i);
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
            tax: j?.tax || 0,
            coastPrice: j?.price,
            taxPrice: taxPrice 
        };
        this.subscribeToQtyChanges(formArr.at(i) as FormGroup, i);
    });

    return formArr;
}

  cart(): FormGroup {
    return this.fb.group({
      barcode: (0),
      item_name: (''),
      qty: (1),
      price: (0),
      // amount: (0),
      discount: new FormControl(0, [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      // tax: new FormControl(0, [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      tax: new FormControl(0),
      total: (0),
    })
  }
  getCart(): FormArray {
    return this.saleEstimateForm.get('estimate_cart') as FormArray;
  }
  isCart = false;
  addCart() {
    this.getCart().push(this.cart());
    this.isCart = false;
    const cartControl = this.cart();
    this.qtySubscriptions.forEach(subscription => subscription.unsubscribe());
    this.qtySubscriptions = [];
    this.getCart().controls.forEach((control, index) => {
      this.subscribeToQtyChanges(control as FormGroup, index);
    });
  }
  removeCart(i: any) {
    this.getCart().removeAt(i);
    if (this.saleEstimateForm?.value?.estimate_cart?.length == 0) {
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
      this.paymentTermsList = res
    })
  }

  onQtyChange(value: number, index: number) {
    if (this.skipQtyChange) {
      return;
    }
    const barcode = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
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

  oncheck(data: any) {
    console.log(data);
    const selectedItemId = data.id;
    this.userType = data?.user_type;
    //call detail api
    // this.contactService.getCustomerById(selectedItemId).subscribe(res => {
    //   // console.log(res);
    //   this.supplierAddress = res;
    //   this.saleEstimateForm.patchValue({
    //     payment_terms: res?.payment_terms?.id
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
    // });
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
    const variants = this.saleEstimateForm.get('estimate_cart') as FormArray;
    variants.clear();
    this.unsubscribeAllQty();
    this.addCart();
    this.saleEstimateForm.patchValue({
      customer: selectedItemId
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
    const barcode = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
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
      discount: parseInt(address?.discount),
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
  //     const barcode = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
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

  closeModalDiscount(i: number) {
    console.log(i, 'index');
    const modal = document.getElementById(`discountModal-${i}`);
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }

  allDiscount(product, index) {
    if (this.excludeDiscountIndexes.includes(index)) {
      this.excludeDiscountIndexes.filter((val) => val !== index);
    }
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
      if(this.discountTyp[index]?.length > 0) {
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

        const saleOrderCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup
        saleOrderCart?.controls['discount'].setValue('');
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
                  const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
                  // if (!previousCart?.controls['discount']?.value) {
                  //   previousCart.patchValue({ discount: 'Free Item' });
                  // }
                  const barcode = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index + 1) as FormGroup;
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
                  const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
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
                  const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
                  // if (!previousCart?.controls['discount']?.value) {
                  //   previousCart.patchValue({ discount: 'Free Item Invoice' });
                  // }
                  const barcode = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index + 1) as FormGroup;
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
                const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
                if (value?.discount_type === '%') {
                // if (!previousCart?.controls['discount']?.value) {
                //     previousCart.patchValue({
                //       discount: 'Discount Invoice',
                //       discount_type: '%'
                //     });
                //   }
                  this.totalFlatDiscountPercentage += Number(value?.flat_discount);
                 } else {
                // if (!previousCart?.controls['discount']?.value) {
                //     previousCart.patchValue({
                //       discount: 'Discount Invoice',
                //       discount_type: 'Rs'
                //     });
                //   }
                    this.totalFlatDiscountAmount += parseInt(value?.flat_discount);
                  }
                  this.invoiceFlatDiscount = parseInt(value?.flat_discount);
                  this.discountTypesApplied['Discount-on-Invoice'] = true;
                  statusMap.add('Discount-on-Invoice');
                  this.isDiscountOnInvoiceSelected = true;
                break;
        
              case 'Quantity-per-percentage':
                if (product?.batch[0]?.selling_price_online >= parseInt(value?.purchase_qty)) {
                  const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
                  if (value?.discount_type === '%') {
                  if (previousCart.get('qty').value >= parseInt(value?.purchase_qty)) {
                // if (!previousCart?.controls['discount']?.value) {
                //       previousCart.patchValue({
                //         discount: value?.flat_discount,
                //         discount_type: '%'
                //       });
                //     }
                      this.totalFlatDiscountPercentage += Number(value?.flat_discount);
                    } else {
                // if (!previousCart?.controls['discount']?.value) {
                //       previousCart.patchValue({
                //         discount: value?.flat_discount,
                //         discount_type: 'Rs'
                //       });
                //     }
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
                const previousCartQty = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
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
          saleOrderCart?.controls['discount'].setValue(this.totalFlatDiscountPercentage);
        } else {
          saleOrderCart?.controls['discount'].setValue(this.totalFlatDiscountAmount);
        }
      }
    }
    // });

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
      const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i) as FormGroup;
    //   if(!previousCart?.controls['discount']?.value){
    //   previousCart.patchValue({
    //     discount: 'Free Item',
    //   })
    // }
      const barcode = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i + 1) as FormGroup;
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
      this.isPriceRangeFreeItemSelected = true;
    } else if (val?.discount_offer_type == 'Price-range-discount') {
      if (product?.batch[0]?.selling_price_online >= parseInt(val.start_price) && product?.batch[0]?.selling_price_online <= parseInt(val.end_price)) {
        if (val?.discount_type == '%') {
          const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i) as FormGroup;
        //   if(!previousCart?.controls['discount']?.value){
        //   previousCart.patchValue({
        //     discount: val?.flat_discount,
        //     discount_type: '%'
        //   });
        // }
          this.addFlatDiscountPercentage[i] = Number(val?.flat_discount);
          this.purchase4(i)
        } else {
          const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i) as FormGroup;
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
      const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i) as FormGroup;
    //   if(!previousCart?.controls['discount']?.value){
    //   previousCart.patchValue({
    //     discount: 'Free Item Invoice',
    //   })
    // }
      const barcode = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i + 1) as FormGroup;
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
      this.isFreeItemOnInvoiceSelected = true;
    } else if (val?.discount_offer_type == 'Discount-on-Invoice') {
      if (val?.discount_type == '%') {
        this.invoiceFlatDiscount = parseInt(val?.flat_discount);
        const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i) as FormGroup;
      //   if(!previousCart?.controls['discount']?.value){
      //   previousCart.patchValue({
      //     discount: 'Discount Invoice',
      //     discount_type: '%'
      //   });
      // }
        this.addFlatDiscountPercentage[i] = Number(val?.flat_discount);
      } else {
        const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i) as FormGroup;
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
      const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i) as FormGroup;
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
          const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i) as FormGroup;
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
      const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i) as FormGroup;
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
      const removeCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i) as FormGroup;
      const currentQty = removeCart.get('qty').value;
      const newQty = Number(currentQty) - 1;
        removeCart.patchValue({
          qty: newQty
        })
    }
    this.closeModalDiscount(i);
    this.calculateTotalForAll();
  }

  originalCoastPrice: any;
  originalPrice: any[] = []
  apiPurchaseTax: number;
  isTaxAvailable: any[] = [];
  taxIntoRupees: any[] = [];
  tax: any[] = [];
  batchDiscount: any;
  landingCost: any;
  batchCostPrice: any[] = [];
  selecteProduct: any;
  oncheckVariant(event: any, index) {
    const selectedItemId = event.id;

    const currentControl = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
  currentControl.controls['barcode'].setValue('');
  const priceQtyArray:any = Object.values(this.priceQtyData);

  const existingProductIndex = priceQtyArray.findIndex(item => item.barcode === selectedItemId);
  if (existingProductIndex !== -1) {
    priceQtyArray[existingProductIndex].qty += 1;

    const barcode = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(existingProductIndex) as FormGroup;
    barcode.patchValue({
      qty: priceQtyArray[existingProductIndex].qty
    });

    const currentControl = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
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

    console.log(event);
    this.barcode[index] = event.sku;
    this.selecteProduct = event?.product;
    this.selectedProductName = event.product_title;
    this.selectBatch = event.batch;
    if(event?.batch?.length > 0) {
      this.apiPurchaseTax = event?.product?.sale_tax?.amount_tax_slabs[0]?.tax?.tax_percentage || 0;
    } else {
      this.apiPurchaseTax = 0;
    }
    this.batchDiscount = 0;
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
      this.taxIntoRupees[index] = taxPrice || 0;
      this.originalCoastPrice = getCoastPrice + taxPrice;
      this.TotalWithoutTax[index] = ((getCoastPrice * 1) - (taxPrice * 1)).toFixed(2) || 0;
      // this.originalCoastPrice = getCoastPrice
    }
    if (event.batch.length > 0) {
      const barcode = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
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
          discount: parseInt(event.batch[0]?.discount || 0),
          price: Number(this.originalCoastPrice).toFixed(2),
        });
        taxValue = this.apiPurchaseTax;

      } else {
        this.tax[index] = this.apiPurchaseTax
        barcode.patchValue({
          barcode: selectedItemId,
          item_name: event?.product_title,
          qty: 1,
          tax: this.apiPurchaseTax,
          discount: 0,
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
      this.calculateTotalDiscount();
      console.log(event.batch);
    } else {
      this.tax[index] = 0
      const barcode = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
      barcode.patchValue({
        barcode: selectedItemId,
        item_name: event?.product_title,
        tax: 0,
        qty: 0,
        discount: 0,
        price: 0
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
  // purchase(index) {
  //   this.userInputEntered[index] = true;
  //   const result = this.calculatePurchaseEveryIndex(index);
  //   this.coastprice[index] = result.toFixed(2)
  //   this.calculateTotalEveryIndex(index)
  //   // setTimeout(() => {
  //     this.calculateRoundoffValue()
  //   // }, 2000);
  // }
  costPrice: any
  // purchase2(costPrice: any) {
  //   this.costPrice = costPrice;
  //   console.log(this.costPrice);
  // }
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
    this.calculateTotalEveryIndex(index)
    // setTimeout(() => {
      this.calculateRoundoffValue()
    // }, 2000);
  }
  calculationDiscountCostPrice(index:number) {
    console.log(index,'costPrice');
    const cartItem = this.getCart().controls[index];
    const purchaseRateControl = cartItem.get('price');
    const taxPercentageControl = cartItem.get('tax');
    const discountPercentageControl = cartItem.get('discount');
    const QtyControl = cartItem.get('qty');
    this.batchCostPrice[index] = this.coastprice[index];
    if (purchaseRateControl.value && taxPercentageControl.value && discountPercentageControl.value) {
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
        let calu = (getCoastPrice * qty).toFixed(2)
        this.TotalWithoutTax[index] = calu || 0
        console.log(this.TotalWithoutTax[index]);
        let taxprice = ((getCoastPrice * purchaseTax) / 100) || 0
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
    this?.TotalWithoutTax?.forEach((number: any) => {
      total += Number(number);
    })
    return total;
  }

  getRes: any;
  loader = false;
  loaderCreate = false;
  loaderPrint = false;
  loaderDraft = false;
  submit(type: any) {
    console.log(this.saleEstimateForm);
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
      formdata.append('customer', this.saleEstimateForm.get('customer')?.value);
      formdata.append('estimate_date', this.saleEstimateForm.get('estimate_date')?.value);
      // 21-5
      if (this.isStatusDraft) {
        formdata.append('estimate_no', this.saleEstimateForm.get('estimate_no')?.value);
      }
      // end
      formdata.append('estimate_expiry_date', this.saleEstimateForm.get('estimate_expiry_date')?.value);
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
      const cartArray = this.saleEstimateForm.get('estimate_cart') as FormArray;
      const cartData = [];
      cartArray.controls.forEach((address) => {
        const cartGroup = address as FormGroup;
        const cartObject = {};
        Object.keys(cartGroup.controls).forEach((key) => {
          const control = cartGroup.controls[key];
          // Convert the value to an integer if it's a number, but keep item_name as a string
          if (key !== 'item_name' && !isNaN(control.value)) {
            cartObject[key] = parseFloat(control.value);
          } else {
            cartObject[key] = control.value;
          }
        });
        cartData.push(cartObject);
      });
      formdata.append('estimate_cart', JSON.stringify(cartData));
      this.saleService.updateSalesEstimate(formdata, this.id).subscribe(res => {
        // console.log(res);
        this.getRes = res;
        if (this.getRes.success) {
          if (type == 'new') {
            this.loaderCreate = false;
            this.saleEstimateForm.reset()
            this.ngOnInit()
            this.userControl.reset()
          } else if (type == 'print') {
            this.toastrService.success(this.getRes.msg);
            this.loaderPrint = false;
            this.router.navigate(['//sales/salesEstimatedetails/' + this.id])
          } else if (type == 'draft') {
            this.loaderDraft = false;
            this.toastrService.success(this.getRes.msg);
            this.router.navigate(['//sales/salesEstimatelist'])
          }
          else {
            this.loader = false;
            this.toastrService.success(this.getRes.msg);
            this.router.navigate(['//sales/salesEstimatelist'])
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

  get estimate_no() {
    return this.saleEstimateForm.get('estimate_no')
  }
  get estimate_date() {
    return this.saleEstimateForm.get('estimate_date')
  }
  get estimate_expiry_date() {
    return this.saleEstimateForm.get('estimate_expiry_date')
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
  selectedProduct: any[] = [];
  variantChanged(value: any, index) {
    this.selectedProduct.push(value);
    const modal = document.getElementById(`productModal-${index}`);
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
    this.myControl.push(new FormControl(value?.product_title + ' ' + value?.variant_name));
    // console.log(index);
    // console.log(value?.sku);
    this.barcode[index] = value.sku;
    // console.log(this.barcode[index]);
    // console.log(this.barcode);
    this.v_id = value.id;
    const barcode = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      barcode: value.id
    });
    this.getVariant('', '', '')
    this.allDiscount(value, index);
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
        totalDiscount += +discountControl.value || 0;
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
    let cartArray = this.getCart();
   
    cartArray.controls.forEach((val)=> {
      total += Number(val.get('total').value)
    })
    this.calculatedFinalTotal = total;
    let discountAmount = 0;
    let totalDiscountAmount = 0;
    cartArray.controls.forEach((val, index)=> {
      const totalAmount = Number(val.get('total').value);
      // console.log(totalAmount);
      const discount = val.get('discount').value;
      if (this.excludeDiscountIndexes.includes(index)) {
        total = total - Number(this.totalDefaultDiscount);
        this.totalDiscountAmount = totalDiscountAmount;
      } else if(discount){
        discountAmount = (totalAmount * Number(discount)) / 100;
        totalDiscountAmount += discountAmount;
        total = total - discountAmount;
        this.totalDiscountAmount += totalDiscountAmount;
      }
    })
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
      total = (total + discountAmount - addDiscountAmount);
    })

    // const totalDiscount = this.calculateTotalDiscount();
    this.totalAmount = total;
    return this.totalAmount;
  }

  calculateRoundoffValue(): number {
    const total = this.totalAmount;
    if(total){
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
    } else {
      return 0
    }
  }
  calculateTotalEveryIndex(index: any) {
    const cartItem = this.getCart().controls[index];
    const price = +cartItem.get('price').value || 0;
    const tax = +cartItem.get('tax').value || 0;
    const discount = +cartItem.get('discount').value || 0;
    const subtotal = this.TotalWithoutTax[index]
    const qty = +cartItem.get('qty').value || 0;
    const totalForItem = price * qty || 0;
    const barcode = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      total: totalForItem.toFixed(2)
    });
    console.log(totalForItem);
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

