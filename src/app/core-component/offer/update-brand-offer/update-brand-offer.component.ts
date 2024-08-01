import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { HrmServiceService } from 'src/app/Services/hrm/hrm-service.service';
import { OfferService } from 'src/app/Services/offer/offer.service';
import { SalesService } from 'src/app/Services/salesService/sales.service';
@Component({
  selector: 'app-update-brand-offer',
  templateUrl: './update-brand-offer.component.html',
  styleUrls: ['./update-brand-offer.component.scss']
})
export class UpdateBrandOfferComponent implements OnInit {

  brandOfferForm!: FormGroup;
  get f() {
    return this.brandOfferForm.controls;
  }
  constructor(private fb: FormBuilder, private coreService: CoreService,
    private router: Router,
    private toastrService: ToastrService,
    private hrmService: HrmServiceService,
    private offerService: OfferService,
    private saleService: SalesService,
    private Arout:ActivatedRoute,
    private commonService: CommonServiceService) { }

  isMultiUse = true;
  isCompulsory = true;
  isCoupon = true;
  isAutoUpdatePrice = true;
  myControls: FormArray;
  id:any;
  updateData:any;
  selectSubcat: any = [];
  selectBrand: any = [];
  minDate: string = '';
  maxDate: string = '';
  endMinDate: string = '';
  endMaxDate: string = '';
  ngOnInit(): void {
    this.id=this.Arout.snapshot.paramMap.get('id');
    this.brandOfferForm = this.fb.group({
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
      discount_type: new FormControl('BasedOnBrands', [Validators.required]),//select field
      brands: new FormArray([],), //brand m2m
      subcategory: new FormArray([],),//subcat m2m
      collection: new FormControl('',),// char
      offer_type: new FormControl('Price-range-discount'),
      discount_cart: this.fb.array([]),

    })
       // display updated data
       this.offerService.getDiscountById(this.id).subscribe(res => {
        if (this.id == res.id) {
          console.log(res);
          this.updateData = res;
          this.brandOfferForm.patchValue(res);
          this.brandOfferForm.get('customers_group')?.patchValue(res?.customers_group?.id);
          this.brandOfferForm.get('business_location')?.patchValue(res?.business_location?.id);
          // this.selectSubcat = res?.subcategory.map((res: any) => res.id);
          this.selectBrand = res?.brands.map((res: any) => res?.id)
          this.selectedCart=this.updateData.discount_cart[0]?.discount_offer_type;
          this.brandOfferForm.get('offer_type')?.patchValue(this.updateData.discount_cart[0]?.discount_offer_type);
          this.brandOfferForm.setControl('discount_cart', this.udateCart(this.updateData?.discount_cart));
          if(this.updateData.discount_cart[0]?.discount_offer_type=='Price-range-discount'){
            this.isPriceRange = true;
          }else{
            this.isPriceRange = false;
          }
        }
      });
    this.myControls = new FormArray([]);
  
    // this.getSubcate();
    this.getBrand();
    this.getBranch();
    this.getMembership();

    const financialYear = localStorage.getItem('financialYear');
    this.startDateValidation(financialYear);
    this.endDateValidation(financialYear);

    this.brandOfferForm.get('start_date').valueChanges.subscribe((date) => {
      this.updateEndDateMin(date, financialYear);
    });
  }

  udateCart(add: any): FormArray {
    let formarr = new FormArray([]);
    add.forEach((j: any, i) => {
      formarr.push(this.fb.group({
        discount_offer_type: j.discount_offer_type,
        start_price: j?.start_price,
        end_price: j?.end_price,
        flat_discount: j?.flat_discount,
        discount_type: j?.discount_type,
        purchase_qty: j?.purchase_qty,
      }));
      this.myControls.push(new FormControl(j?.free_items?.product_title));
     
    });
    return formarr;
  }

  discount_cart(): FormGroup {
    return this.fb.group({
      discount_offer_type: new FormControl('Price-range-discount',),    
      // invoice_amount: new FormControl(0,), // float use
      // free_items: (''),//char use
      start_price: (0),//float
      end_price: (0),//float
      flat_discount: (0),//float use
      discount_type: ('%'),// select use
      purchase_qty: (1),//float
      // free_qty: (0),//float
    });
  }
  getCart(): FormArray {
    return this.brandOfferForm.get('discount_cart') as FormArray;
  }
  addCart(i:any) {
    this.getCart().push(this.discount_cart());
    const barcode = (this.brandOfferForm.get('discount_cart') as FormArray).at(i) as FormGroup;
    barcode.patchValue({
      discount_offer_type: this.selectedCart,
    });
    this.myControls.push(new FormControl(''));
  }
  removeCart(i: any) {
    this.getCart().removeAt(i)
    // const remove = this.brandOfferForm.get('discount_cart') as FormArray
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
    return this.brandOfferForm.get('name')
  }
  get start_date() {
    return this.brandOfferForm.get('start_date')
  }
  get end_date() {
    return this.brandOfferForm.get('end_date')
  }
  get business_location() {
    return this.brandOfferForm.get('business_location')
  }
  get customers_group() {
    return this.brandOfferForm.get('customers_group')
  }
  get multiuse() {
    return this.brandOfferForm.get('multiuse')
  }
  get is_compulsory() {
    return this.brandOfferForm.get('is_compulsory')
  }
  get applicable_for_only_coupons() {
    return this.brandOfferForm.get('applicable_for_only_coupons')
  }
  get auto_update_price() {
    return this.brandOfferForm.get('auto_update_price')
  }
  get discount_type() {
    return this.brandOfferForm.get('discount_type');
  }
  get collection() {
    return this.brandOfferForm.get('collection');
  }
  get brands() {
    return this.brandOfferForm.get('brands');
  }
  get subcategory() {
    return this.brandOfferForm.get('subcategory');
  }

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
        // update auto display data
        this.subCategoryList.map((map: any) => {
          // console.log(this.selectSubcat);
          this.selectedSubCat = this.selectSubcat.length
          // console.log(this.selectSubcat.includes(map.id), 'subcategory');
          if (this.selectSubcat.includes(map.id)) {
            const formArray = this.brandOfferForm.get('subcategory') as FormArray;
            formArray.push(new FormControl(map.id));
          }
        });
    })
  }

  updateEndDateMin(selectedDate: string, financialYear) {
    const dateControl = this.brandOfferForm.get('end_date');
    if (selectedDate) {
      const minDate = new Date(selectedDate);
      const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear, minDate);
      this.endMinDate = formattedMinDate;
      this.endMaxDate = formattedMaxDate;
    }
  }

  startDateValidation(financialYear) {
    const dateControl = this.brandOfferForm.get('start_date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear);
    this.endMinDate = formattedMinDate;
    this.endMaxDate = formattedMaxDate;
  }

  endDateValidation(financialYear) {
    const dateControl = this.brandOfferForm.get('end_date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear);
    this.minDate = formattedMinDate;
    this.maxDate = formattedMaxDate;
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

  selectedSubCat = 0;
  selectedSubCategoryIds: any[] = [];
  check: any;
  onCheckSubCategory(event: any) {
    console.log(event);
    const formArray: any = this.brandOfferForm.get('subcategory') as FormArray;
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

        // update auto display data
        this.brandList.map((map: any) => {
          // console.log(this.selectSubcat);
          this.selectedBrand = this.selectBrand.length; // display selected item
          // console.log(this.selectBrand.includes(map.id), 'subcategory');
          if (this.selectBrand.includes(map.id)) {
            const formArray = this.brandOfferForm.get('brands') as FormArray;
            formArray.push(new FormControl(map.id));
          }
        });
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
    const formArray: any = this.brandOfferForm.get('brands') as FormArray;
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
    console.log(this.brandOfferForm.value);
    if (this.brandOfferForm.valid) {
      this.loaders = true;
      let formData = new FormData();
      formData.append('name', this.brandOfferForm.get('name')?.value);
      formData.append('start_date', this.brandOfferForm.get('start_date')?.value);
      formData.append('end_date', this.brandOfferForm.get('end_date')?.value);
      formData.append('business_location', this.brandOfferForm.get('business_location')?.value);
      formData.append('customers_group', this.brandOfferForm.get('customers_group')?.value);
      formData.append('multiuse', this.brandOfferForm.get('multiuse')?.value);
      formData.append('is_compulsory', this.brandOfferForm.get('is_compulsory')?.value);
      formData.append('applicable_for_only_coupons', this.brandOfferForm.get('applicable_for_only_coupons')?.value);
      formData.append('auto_update_price', this.brandOfferForm.get('auto_update_price')?.value);
      formData.append('discount_type', this.brandOfferForm.get('discount_type')?.value);
      formData.append('brands', JSON.stringify(this.brandOfferForm.get('brands')?.value));
      // formData.append('subcategory', JSON.stringify(this.brandOfferForm.get('subcategory')?.value));
      // formData.append('collection', this.brandOfferForm.get('collection')?.value);
formData.append('is_active',this.brandOfferForm.get('is_active')?.value);
    const cartArray = this.brandOfferForm.get('discount_cart') as FormArray;
    const cartData = [];
    cartArray.controls.forEach((address) => {
      const cartGroup = address as FormGroup;
      const cartObject: any = {};
      // Append fields based on the value of isPriceRange
       //29-03
       const startPriceString = cartGroup.get('start_price')?.value;
       let startPriceFloat: number;
       if (typeof startPriceString === 'string') {
         const startPriceCommasAndZeros = startPriceString.replace(/,/g, '').replace(/(\.\d*?)0+$/, '$1');
         startPriceFloat = parseFloat(startPriceCommasAndZeros);
       } else {
         startPriceFloat = parseFloat(startPriceString);
       }
       const endPriceString = cartGroup.get('end_price')?.value;
       let endPriceFloat: number;
       if (typeof endPriceString === 'string') {
         const endPriceCommasAndZeros = endPriceString.replace(/,/g, '').replace(/(\.\d*?)0+$/, '$1');
         endPriceFloat = parseFloat(endPriceCommasAndZeros);
       } else {
         endPriceFloat = parseFloat(endPriceString);
       }
       const flatDiscountString = cartGroup.get('flat_discount')?.value;
       let flatDiscountFloat: number;
       if (typeof flatDiscountString === 'string') {
         const flatDiscountCommasAndZeros = flatDiscountString.replace(/,/g, '').replace(/(\.\d*?)0+$/, '$1');
         flatDiscountFloat = parseFloat(flatDiscountCommasAndZeros);
       } else {
         flatDiscountFloat = parseFloat(flatDiscountString);
       }
 //29-03 end
      if (this.isPriceRange) {
        cartObject['start_price'] = startPriceFloat;
        cartObject['end_price'] = endPriceFloat;
        cartObject['flat_discount'] = flatDiscountFloat;
        cartObject['discount_type'] = cartGroup.get('discount_type')?.value;
        cartObject['discount_offer_type']=cartGroup.get('discount_offer_type')?.value;
      } else {
        cartObject['purchase_qty'] = cartGroup.get('purchase_qty')?.value;
        cartObject['flat_discount'] = flatDiscountFloat;
        cartObject['discount_type'] = cartGroup.get('discount_type')?.value;
        cartObject['discount_offer_type']=cartGroup.get('discount_offer_type')?.value;
      }

      cartData.push(cartObject);
    });

    formData.append('discount_cart', JSON.stringify(cartData));

      this.offerService.updateDiscount(formData,this.id).subscribe(res => {
        // console.log(res);
        this.addRes = res;
        if (this.addRes.success) {
          this.loaders = false;
          this.toastrService.success(this.addRes.msg);
          this.router.navigate(['offer/brand-offer']);
        } else {
          this.loaders = false;
          this.toastrService.success(this.addRes.msg);
        }
      }, err => {
        console.log(err);
        
        this.loaders = false;
        this.toastrService.error(err.error.message)
      })
    } else {
      this.loaders = false;
      this.brandOfferForm.markAllAsTouched()
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
    this.offerService.searchProduct(search).subscribe((res: any) => {
      console.log(res);
      this.isSearch = false;
      this.variantList = res;
      console.log(this.variantList);
      this.myControls.push(res[0].product_title)
    });
  }

  oncheckVariant(event: any, index: any) {
    console.log(event);
    const selectedItemId = event.id;
    this.barcode[index] = event.sku;
    const barcode = (this.brandOfferForm.get('discount_cart') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      free_items: selectedItemId,
    });
  }
  isPriceRange = true;
  selectedCart:any;
  selectType(val: any) {
    this.selectedCart=val;
    this.getCart()?.clear();
    if (val == 'Price-range-discount') {
      this.isPriceRange = true; 
      this.addCart(0);
    }else{
      this.isPriceRange=false
      this.addCart(0);
    }
    const barcode = (this.brandOfferForm.get('discount_cart') as FormArray).at(0) as FormGroup;
    barcode.patchValue({
      discount_offer_type: this.selectedCart,
    });
  }
}


