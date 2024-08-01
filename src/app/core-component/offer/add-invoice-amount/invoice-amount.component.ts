import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { HrmServiceService } from 'src/app/Services/hrm/hrm-service.service';
import { OfferService } from 'src/app/Services/offer/offer.service';
import { SalesService } from 'src/app/Services/salesService/sales.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-invoice-amount',
  templateUrl: './invoice-amount.component.html',
  styleUrls: ['./invoice-amount.component.scss']
})
export class InvoiceAmountComponent implements OnInit {

  invoiceAmountForm!: FormGroup;
  get f() {
    return this.invoiceAmountForm.controls;
  }
  constructor(private fb: FormBuilder, private coreService: CoreService,
    private router: Router,
    private toastrService: ToastrService,
    private hrmService: HrmServiceService,
    private offerService: OfferService,
    private saleService: SalesService,
    private commonService: CommonServiceService) { }

  isMultiUse = true;
  isCompulsory = true;
  isCoupon = true;
  isAutoUpdatePrice = true;
  minDate: string = '';
  maxDate: string = '';
  endMinDate: string = '';
  endMaxDate: string = '';

  myControls: FormArray;
  ngOnInit(): void {
    this.invoiceAmountForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      start_date: new FormControl('', [Validators.required]),
      end_date: new FormControl('', [Validators.required]),
      business_location: new FormControl('', [Validators.required]), //branch key
      customers_group: new FormControl('', [Validators.required]), //membership id jygi
      multiuse: new FormControl('', [Validators.required]), // true false
      is_compulsory: new FormControl('', [Validators.required]), //boolean
      applicable_for_only_coupons: new FormControl('', [Validators.required]),//bool
      auto_update_price: new FormControl('', [Validators.required]),//bool
      is_active:new FormControl(''),
      discount_type: new FormControl('BasedOnInvoiceAmount', [Validators.required]),//select field
      brands: new FormArray([],), //brand m2m
      subcategory: new FormArray([],),//subcat m2m
      collection: new FormControl('',),// char
      offer_type: new FormControl('Free-item-on-invoice'),
      discount_cart: this.fb.array([]),

    });
    this.myControls = new FormArray([]);
    this.selectedCart='Free-item-on-invoice';
    this.addCart(0);
    this.getSubcate();
    this.getBrand();
    this.getBranch();
    this.getMembership();
    
    const financialYear = localStorage.getItem('financialYear');
    this.startDateValidation(financialYear);
    this.endDateValidation(financialYear);

    this.invoiceAmountForm.get('start_date').valueChanges.subscribe((date) => {
      this.updateEndDateMin(date, financialYear);
    });
  }


  discount_cart(): FormGroup {
    return this.fb.group({
      discount_offer_type: new FormControl('Free-item-on-invoice'),
      discount_type: ('%'),// select use
      invoice_amount: new FormControl(0,), // float use
      free_items: (''),//char use
      flat_discount: (0),//float use
      // start_price: (0),//float
      // end_price: (0),//float
      // purchase_qty: (0),//float
      // free_qty: (0),//float
    });
  }
  getCart(): FormArray {
    return this.invoiceAmountForm.get('discount_cart') as FormArray;
  }
  addCart(i:any) {
    this.getCart().push(this.discount_cart());
    const barcode = (this.invoiceAmountForm.get('discount_cart') as FormArray).at(i) as FormGroup;
    barcode.patchValue({
      discount_offer_type: this.selectedCart,
    });
    this.myControls.push(new FormControl(''));
  }
  removeCart(i: any) {
    this.getCart().removeAt(i)
    // const remove = this.invoiceAmountForm.get('discount_cart') as FormArray
    // if (remove.length > 1) {
    //   remove.removeAt(i)
    // } else {
    //   remove.reset()
    // }
  }
  isLastCart(index: number): boolean {
    const cartControls = this.getCart().controls;
    return index === cartControls.length - 1;
  }

  get name() {
    return this.invoiceAmountForm.get('name')
  }
  get start_date() {
    return this.invoiceAmountForm.get('start_date')
  }
  get end_date() {
    return this.invoiceAmountForm.get('end_date')
  }
  get business_location() {
    return this.invoiceAmountForm.get('business_location')
  }
  get customers_group() {
    return this.invoiceAmountForm.get('customers_group')
  }
  get multiuse() {
    return this.invoiceAmountForm.get('multiuse')
  }
  get is_compulsory() {
    return this.invoiceAmountForm.get('is_compulsory')
  }
  get applicable_for_only_coupons() {
    return this.invoiceAmountForm.get('applicable_for_only_coupons')
  }
  get auto_update_price() {
    return this.invoiceAmountForm.get('auto_update_price')
  }
  get discount_type() {
    return this.invoiceAmountForm.get('discount_type');
  }
  // get collection() {
  //   return this.invoiceAmountForm.get('collection');
  // }
  // get brands() {
  //   return this.invoiceAmountForm.get('brands');
  // }
  // get subcategory() {
  //   return this.invoiceAmountForm.get('subcategory');
  // }

  subcatList: any
  subCategoryList: any[] = [];
  filteredSubCategoryList: any[] = [];
  searchCategory: string = '';

  getSubcate() {
    this.coreService.getSubcategory().subscribe(res => {
      // console.log(res);
      this.subcatList = res
      this.subCategoryList = res;
      this.filteredSubCategoryList = [...this.subCategoryList];
    })
  }

  filterSubCategory() {
    if (this.searchCategory.trim() === '') {
      this.filteredSubCategoryList = [...this.subCategoryList];
    } else {
      this.filteredSubCategoryList = this.subCategoryList.filter(feature =>
        feature.title.toLowerCase().includes(this.searchCategory.toLowerCase())
      );
    }
  }

  updateEndDateMin(selectedDate: string, financialYear) {
    const dateControl = this.invoiceAmountForm.get('end_date');
    if (selectedDate) {
      const minDate = new Date(selectedDate);
      const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear, minDate);
      this.endMinDate = formattedMinDate;
      this.endMaxDate = formattedMaxDate;
    }
  }

  startDateValidation(financialYear) {
    const dateControl = this.invoiceAmountForm.get('start_date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear);
    this.endMinDate = formattedMinDate;
    this.endMaxDate = formattedMaxDate;
  }

  endDateValidation(financialYear) {
    const dateControl = this.invoiceAmountForm.get('end_date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear);
    this.minDate = formattedMinDate;
    this.maxDate = formattedMaxDate;
  }

  selectedSubCat = 0;
  selectedSubCategoryIds: any[] = [];
  check: any;
  onCheckSubCategory(event: any) {
    console.log(event);
    const formArray: any = this.invoiceAmountForm.get('subcategory') as FormArray;
    console.log(formArray);
    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(parseInt(event.target.value)));
      // parseInt(formArray.push(new FormControl(event.target.value)))
      this.selectedSubCat++;
      this.selectedSubCategoryIds = formArray.value
      // console.log( this.selectedSubCategoryIds);
    }
    /* unselected */
    else {
      // find the unselected element
      let i: number = 0;
      formArray.controls.forEach((ctrl: any) => {
        if (ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          this.selectedSubCat--;
          return;
        }
        i++;
      });
    }
  }

  brandList: any[] = [];
  filteredbrandList: any[] = [];
  searchBrand: string = '';
  getBrand() {
    this.coreService.getBrand().subscribe(res => {
      this.brandList = res
      this.filteredbrandList = [...this.brandList];
    })
  }

  filterBrand() {
    if (this.searchBrand.trim() === '') {
      this.filteredbrandList = [...this.brandList];
    } else {
      this.filteredbrandList = this.brandList.filter(brand =>
        brand.title.toLowerCase().includes(this.searchBrand.toLowerCase())
      );
    }
  }

  selectedBrand = 0;
  selectedBrandIds: any[] = [];

  onCheckBrand(event: any) {
    console.log(event);
    const formArray: any = this.invoiceAmountForm.get('brands') as FormArray;
    console.log(formArray);

    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(parseInt(event.target.value)));
      // parseInt(formArray.push(new FormControl(event.target.value)))

      this.selectedBrand++;
      this.selectedBrandIds = formArray.value
      // console.log( this.selectedSubCategoryIds);
    }
    /* unselected */
    else {
      // find the unselected element
      let i: number = 0;
      formArray.controls.forEach((ctrl: any) => {
        if (ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          this.selectedBrand--;
          return;
        }
        i++;
      });
    }
  }
  branchList: any;
  getBranch() {
    this.coreService.getBranch().subscribe(res => {
      this.branchList = res;
    })
  }
  membershipList: any;
  getMembership() {
    this.hrmService.getMembership().subscribe(res => {
      this.membershipList = res;
    })
  }


  addRes: any;
  loaders = false;
  submit() {
    console.log(this.invoiceAmountForm.value);
    if (this.invoiceAmountForm.valid) {
      this.loaders = true;
      let formData = new FormData();
      formData.append('name', this.invoiceAmountForm.get('name')?.value);
      formData.append('start_date', this.invoiceAmountForm.get('start_date')?.value);
      formData.append('end_date', this.invoiceAmountForm.get('end_date')?.value);
      formData.append('business_location', this.invoiceAmountForm.get('business_location')?.value);
      formData.append('customers_group', this.invoiceAmountForm.get('customers_group')?.value);
      formData.append('multiuse', this.invoiceAmountForm.get('multiuse')?.value);
      formData.append('is_compulsory', this.invoiceAmountForm.get('is_compulsory')?.value);
      formData.append('applicable_for_only_coupons', this.invoiceAmountForm.get('applicable_for_only_coupons')?.value);
      formData.append('auto_update_price', this.invoiceAmountForm.get('auto_update_price')?.value);
      formData.append('discount_type', this.invoiceAmountForm.get('discount_type')?.value);
      // formData.append('brands', JSON.stringify(this.invoiceAmountForm.get('brands')?.value));
      // formData.append('subcategory', JSON.stringify(this.invoiceAmountForm.get('subcategory')?.value));
      // formData.append('collection', this.invoiceAmountForm.get('collection')?.value);
      formData.append('is_active',this.invoiceAmountForm.get('is_active')?.value);

    const cartArray = this.invoiceAmountForm.get('discount_cart') as FormArray;
    const cartData = [];
    cartArray.controls.forEach((address) => {
      const cartGroup = address as FormGroup;
      const cartObject: any = {};
      // Append fields based on the value of isFree
      const flatDiscountString = cartGroup.get('flat_discount')?.value;
      let flatDiscountFloat: number;
      if (typeof flatDiscountString === 'string') {
        const flatDiscountCommasAndZeros = flatDiscountString.replace(/,/g, '').replace(/(\.\d*?)0+$/, '$1');
        flatDiscountFloat = parseFloat(flatDiscountCommasAndZeros);
      } else {
        flatDiscountFloat = parseFloat(flatDiscountString);
      }
      //invoice
      const invoiceString = cartGroup.get('invoice_amount')?.value;
      let invoiceFloat: number;
      if (typeof invoiceString === 'string') {
        const invoiceCommasAndZeros = invoiceString.replace(/,/g, '').replace(/(\.\d*?)0+$/, '$1');
        invoiceFloat = parseFloat(invoiceCommasAndZeros);
      } else {
        invoiceFloat = parseFloat(invoiceString);
      }
      if (this.isFree) {
        cartObject['invoice_amount'] = invoiceFloat
        cartObject['free_items'] = cartGroup.get('free_items')?.value;
        cartObject['discount_offer_type']=cartGroup.get('discount_offer_type')?.value;
      } else {
        cartObject['invoice_amount'] = invoiceFloat
        cartObject['flat_discount'] = flatDiscountFloat
        cartObject['discount_type'] = cartGroup.get('discount_type')?.value;
        cartObject['discount_offer_type']=cartGroup.get('discount_offer_type')?.value;
      }

      cartData.push(cartObject);
    });

    formData.append('discount_cart', JSON.stringify(cartData));

      this.offerService.addDiscount(formData).subscribe(res => {
        // console.log(res);
        this.addRes = res;
        if (this.addRes.success) {
          this.loaders = false;
          this.toastrService.success(this.addRes.msg);
          this.router.navigate(['offer/invoice-amount']);
        } else {
          this.loaders = false;
          this.toastrService.success(this.addRes.msg);
        }
      }, err => {
        this.loaders = false;
        this.toastrService.error(err.error.message)
      })
    } else {
      this.loaders = false;
      this.invoiceAmountForm.markAllAsTouched()
      this.toastrService.error('Please Fill All The Required Fields')
    }
  }
  //dropdown auto close stop
  onLabelClick(event: Event) {
    // Prevent the event from propagating to the dropdown menu
    event.stopPropagation();
  }

  variantList: any[] = [];
  barcode: any[] = [];
  isSearch = false;
  getVariant(search: any) {
    this.isSearch=true;
    this.offerService.searchProduct(search).subscribe((res: any) => {
      console.log(res);
      this.isSearch = false;
      this.variantList = res;
      console.log(this.variantList);
    });
  }

  oncheckVariant(event: any, index: any) {
    console.log(event);
    const selectedItemId = event.id;
    this.barcode[index] = event.sku;
    const barcode = (this.invoiceAmountForm.get('discount_cart') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      free_items: selectedItemId,
    });
    this.myControls.push(new FormControl(event?.product_title));
  }
  isFree = true;
  selectedCart:any;
  selectType(val: any) {
    this.selectedCart=val;
  if (val == 'Free-item-on-invoice') {
      this.isFree = true;
      const barcode = (this.invoiceAmountForm.get('discount_cart') as FormArray).at(0) as FormGroup;
      barcode.patchValue({
        discount_offer_type: this.selectedCart,
      });
    }else{
      this.isFree=false;
      const barcode = (this.invoiceAmountForm.get('discount_cart') as FormArray).at(0) as FormGroup;
      barcode.patchValue({
        discount_offer_type: this.selectedCart,
      });
    }
  }
}
