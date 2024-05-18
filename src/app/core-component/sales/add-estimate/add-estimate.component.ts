import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { SalesService } from 'src/app/Services/salesService/sales.service';
@Component({
  selector: 'app-add-estimate',
  templateUrl: './add-estimate.component.html',
  styleUrls: ['./add-estimate.component.scss']
})
export class AddEstimateComponent implements OnInit {


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
    private coreService:CoreService) {
  }

  customerControlName = 'customer';
 
  productOption: any[] = [];
  filteredOptions: Observable<any>;
  users: any[] = [];
  filteredusers: Observable<any[]>;
  userControl = new FormControl();
  variantControlName = 'customer';
  variantControl = new FormControl();
  variants: any[] = [];
  filteredVariants: Observable<any[]>;

  saleEstimateForm!: FormGroup;

  get f() {
    return this.saleEstimateForm.controls;
  }
  searchForm!: FormGroup;
  subcategoryList;

  ngOnInit(): void {
    const defaultDate = new Date().toISOString().split('T')[0]; // Get yyyy-MM-dd part
    this.myControl = new FormArray([]);
    const today = new Date();
    const sevenDaysFromToday = new Date(today);
    sevenDaysFromToday.setDate(today.getDate() + 7);
    const defaultDateago7 = sevenDaysFromToday.toISOString().split('T')[0];

    this.saleEstimateForm = this.fb.group({
      customer: new FormControl('', [Validators.required]),
      estimate_date: new FormControl(defaultDate, [Validators.required]),
      estimate_no: new FormControl('', [Validators.required]),
      estimate_expiry_date: new FormControl(defaultDateago7, [Validators.required]),
      payment_terms: new FormControl('',[Validators.required]),
      estimate_cart: this.fb.array([]),
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
    this.getUser();
    this.getCategory();
    this.getPaymentTerms();
    this.getprefix();
  }

  prefixNo: any;
  getprefix() {
    this.saleService.getEstimatePrefix().subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        // this.prefixNo = res.prefix;
        this.prefixNo=res?.data;
        this.saleEstimateForm.get('estimate_no').patchValue(this.prefixNo[0]?.id);
      } else {
        this.toastrService.error(res.msg);
      }
    }, err => {
      this.toastrService.error(err.error.msg);
    })
  }

  category: any;
  subcategory: any;
  searc: any;
  myControl: FormArray;
  variantList: any[] = [];
  variantList2: any[] = [];
  isSearch=false;
  searchLength:any;
  getVariant(search: any, index: any, barcode) {
    this.searchLength=search
    this.isSearch=true;
    if(search.toString().length>=3){
    if(this.search.toString().length>=3){
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
        this.isSearch=false;
        this.variantList[index]
        this.variantList2 = res;
        console.log(this.variantList);
        if (barcode === 'barcode') {
          this.oncheckVariant(res[0], index);
          this.myControl.push(res[0].product_title)
        }
        if (search) {
          //barcode patch
          this.searchs = res;
          this.productOption = res;
          // console.log(this.searchs);
          this.productName[index] = this.searchs[0]?.product_title;
          // console.log(this.productName);
          this.check = true;
          // console.log(this.searchs[0]?.variant_name);

          const barcode = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
          barcode.patchValue({
            // barcode: this.searchs[0].id,
            // item_name: this.searchs[0]?.variant_name
          });
        }
        // console.log(this.saleEstimateForm.value);


      });
    }
    else {
      this.saleService.filterVariant(this.category, this.subcategory, search).subscribe((res: any) => {
        this.isSearch=false;
        this.variantList[index] = res;
        this.variantList2 = res;
        console.log(this.variantList);
        if (barcode === 'barcode') {
          this.oncheckVariant(res[0], index);
          this.myControl.push(res[0]?.product_title)
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
        // console.log(this.saleEstimateForm.value);
      });
    }
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
  getSubCategory(val:any) {
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
  }

  get customer() {
    return this.saleEstimateForm.get('customer') as FormControl;
  }

  cart(): FormGroup {
    return this.fb.group({
      barcode: (0),
      item_name: (''),
      qty: (1),
      price: (0),
      // amount: (0),
      discount: new FormControl(''),
      discount_type: (''),
      tax: new FormControl(0, [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      total: (0),
    })
  }
  getCart(): FormArray {
    return this.saleEstimateForm.get('estimate_cart') as FormArray;
  }
  isCart = false;
  cartIndex:any[]=[];
  addCart(i:number) {
    this.getCart().push(this.cart());
    this.isCart = false;
    this.cartIndex.push(i);
    console.log(this.cartIndex,'cartindex');
  }
  removeCart(i: any) {
    this.getCart().removeAt(i);
    if (this.saleEstimateForm?.value?.estimate_cart?.length == 0) {
      this.isCart = true;
    }
  }
  getUser() {
    this.saleService.getUser().subscribe((res: any) => {
      this.users = res?.data;
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
    this.supplierAddress=data?.detail;
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
    this.addCart(0);
    this.saleEstimateForm.patchValue({
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
  batchCartIndex:any;
  openModalBatch(i:number) {
    this.batchCartIndex=i
    // Trigger Bootstrap modal using JavaScript
    const modal = document.getElementById('batchModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  }
  indexCartValue:any;
  openModalProduct(index: number) {
    console.log(index,'index');
    // this.cartIndex.findIndex(index)
    this.indexCartValue=index
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
  selecBatchtModel(address: any, index: any,type:string) {
    console.log(index,'index');
    
   
      const modal = document.getElementById('batchModal');
      if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
      }
    
    console.log(address);
 
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
  landingCost: any;
  batchCostPrice: any[] = [];
  selecteProduct:any;

  oncheckVariant(event: any, index) {
    console.log(index,'index');
    const selectedItemId = event.id;
    console.log(event);
    this.selecteProduct=event?.product;
    console.log(this.selecteProduct);

    this.selectedProductName = event.product_title;
    this.selectBatch = event.batch;
    this.apiPurchaseTax = event?.product?.sale_tax?.amount_tax_slabs[0]?.tax?.tax_percentage || 0;
    // this.batchDiscount = event.batch[0]?.discount || 0;
    this.batchDiscount = 0;
    this.isTaxAvailable[index] = event?.product?.sale_tax_including;
    this.batchCostPrice[index] = event?.batch[0]?.cost_price || 0;
    if (event?.product?.sale_tax_including) {
      if (this.userType == 'Employee') {
        let Employeeprice = event?.batch[0]?.selling_price_employee || 0;
        this.originalPrice[index] = event?.batch[0]?.selling_price_employee || 0;
        // landing cost
        let getDiscountPrice = (Employeeprice * this.batchDiscount) / 100
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
        let getDiscountPrice = (dealerprice * this.batchDiscount) / 100
        console.log(getDiscountPrice);
        let getCoastPrice = dealerprice - getDiscountPrice;
        this.TotalWithoutTax[index] = getCoastPrice * event.batch[0]?.stock || 1;
        // cost price
        let taxPrice = getCoastPrice - (getCoastPrice * (100 / (100 + this.apiPurchaseTax)))
        console.log(taxPrice, 'taxprice');
        this.taxIntoRupees[index] = taxPrice || 0;
        this.originalCoastPrice = getCoastPrice + taxPrice;
      } else {
        let offlineprice = event?.batch[0]?.selling_price_offline || 0;
        this.originalPrice[index] = event?.batch[0]?.selling_price_offline || 0;
        // landing cost
        let getDiscountPrice = (offlineprice * this.batchDiscount) / 100
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
      let offlineprice = event?.batch[0]?.selling_price_offline || 0;
      let purchaseTax = 18
      // cost price 
      let getDiscountPrice = (offlineprice * this.batchDiscount) / 100
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
      const barcode = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
      this.tax[index] = this.apiPurchaseTax
      console.log(this.originalCoastPrice, 'this.originalCoastPrice');
      if (event?.product?.sale_tax_including == true) {
        barcode.patchValue({
          barcode: selectedItemId,
          item_name: event?.product_title,
          amount: event.batch[0]?.mrp,
          qty: event.batch[0]?.stock,
          tax: this.apiPurchaseTax,
          discount: 0,
          price: this.originalCoastPrice.toFixed(2),
        });

      } else {
        this.tax[index] = 18
        barcode.patchValue({
          barcode: selectedItemId,
          item_name: event?.product_title,
          qty: event.batch[0]?.stock,
          tax: 18,
          discount: 0,
          price: this.originalCoastPrice.toFixed(2),
          // landing_cost: this.landingCost || 0
        });
      }
      console.log(event.batch);
    } else {
      this.tax[index] = 18
      const barcode = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
      barcode.patchValue({
        barcode: selectedItemId,
        item_name: event?.product_title,
        tax: 18,
      });
    }
    
  }
  handleEvent(prod,i){
      console.log(i,'index');
      const prodd = this.getCart().controls[i].value; 
  }

//end
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
      let getDiscountPrice = (costprice * this.batchDiscount) / 100
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
        const purchaseRate = +purchaseRateControl.value || 0;
        const qty = +QtyControl.value || 1;
        let purchaseTax = 18;
        // cost price 
        let getDiscountPrice = (this.coastprice[index] * discountPercentage) / 100
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
          let getDiscountPrice = (this.originalPrice[index] * discountPercentage) / 100
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
        const purchaseRate = +purchaseRateControl.value || 0;
        let purchaseTax = 18;
        const qty = +QtyControl.value;
        // cost price 
        let getDiscountPrice = (this.costPrice * discountPercentage) / 100
        let getCoastPrice = this.costPrice - getDiscountPrice;
        this.TotalWithoutTax[index] = getCoastPrice * qty || 0
        console.log(this.TotalWithoutTax[index]);
        let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + purchaseTax))) || 0
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
      total += number;
    })
    return total;
  }

  getRes: any;
  loader = false;
  loaderCreate = false;
  loaderPrint=false;
  loaderDraft=false;
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
      formdata.append('customer', this.saleEstimateForm.get('customer')?.value);
      formdata.append('estimate_date', this.saleEstimateForm.get('estimate_date')?.value);
      formdata.append('estimate_no', this.saleEstimateForm.get('estimate_no')?.value);
      formdata.append('estimate_expiry_date', this.saleEstimateForm.get('estimate_expiry_date')?.value);
      formdata.append('payment_terms', this.saleEstimateForm.get('payment_terms')?.value);
      formdata.append('note', this.saleEstimateForm.get('note')?.value);
      formdata.append('total_qty', this.saleEstimateForm.get('total_qty')?.value);
      formdata.append('total_tax', this.saleEstimateForm.get('total_tax')?.value);
      formdata.append('total_discount', this.saleEstimateForm.get('total_discount')?.value);
      formdata.append('roundoff', this.saleEstimateForm.get('roundoff')?.value);
      formdata.append('subtotal', this.saleEstimateForm.get('subtotal')?.value);
      formdata.append('total', this.saleEstimateForm.get('total')?.value);
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


      this.saleService.addSalesEstimate(formdata).subscribe(res => {
        // console.log(res);
        this.getRes = res;
        if (this.getRes.success) {
          if (type == 'new') {
            this.loaderCreate = false;
            this.saleEstimateForm.reset()
            this.ngOnInit()
            this.userControl.reset()
          } else if (type == 'print') { 
            this.loaderPrint=false;
            this.toastrService.success(this.getRes.msg);
            this.router.navigate(['//sales/salesEstimatedetails/'+this.getRes?.id])
          } else if (type == 'draft') {
            this.loaderDraft = false;
            this.toastrService.success(this.getRes.msg);
            this.router.navigate(['//sales/salesEstimatelist'])
          } else {
            this.loader = false;
            this.toastrService.success(this.getRes.msg);
            this.router.navigate(['//sales/salesEstimatelist'])
          }
        } else {
          if (type == 'new') {
            this.loaderCreate = false;
          } else if (type == 'save') {
            this.loader = false;
          }else if (type == 'print') {
            this.loaderPrint = false;
          }else if (type == 'draft') {
            this.loaderDraft = false;
          }
        }
      }, err => {
        if (type == 'new') {
          this.loaderCreate = false;
        } else if (type == 'save') {
          this.loader = false;
        }else if (type == 'print') {
          this.loaderPrint = false;
        }else if (type == 'draft') {
          this.loaderDraft = false;
        }
      })
    } else {
      if (type == 'new') {
        this.loaderCreate = false;
      } else if (type == 'save') {
        this.loader = false;
      }else if (type == 'print') {
        this.loaderPrint = false;
      }else if (type == 'draft') {
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
      : this.users.filter(users => !users?.name?.toLowerCase().includes(filterValue)|| users.username.toLowerCase().includes(filterValue));
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
  //4-5
  selectedProduct:any[]=[];
  variantChanged(value: any, index) {
    console.log(value);
    //4-5
    this.selectedProduct.push(value);
    // console.log(index);
    // console.log(value?.sku);
    this.barcode[index] = value.sku;
    // console.log(this.barcode[index]);
    // console.log(this.barcode);
    this.v_id = value.id;
    const modal = document.getElementById(`productModal-${index}`);
      if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
      }
    this.myControl.push(new FormControl(value?.product_title + ' ' + value?.variant_name));

    this.allDiscount(value, index);//4-5
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
                  this.addCart(index+1);
                  const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
                  previousCart.patchValue({
                    discount: 'Free Item',
                  })
                  const barcode = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index + 1) as FormGroup;
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
                    const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
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
                    const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
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
                    this.addCart(index+1);
                    const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
                    previousCart.patchValue({
                      discount: 'Free Item Invoice',
                    });
                    console.log(previousCart);
                    
                    const barcode = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index + 1) as FormGroup;
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
                  const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
                  previousCart.patchValue({
                    discount: 'Discount Invoice',
                    discount_type: '%'
                  });
                } else {
                  const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
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
                const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
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
                    const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
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
                const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(index) as FormGroup;
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
  let product=this.selectedProduct[i];
  console.log(product); 
    this.closeModalDiscount(i);
    console.warn(val, 'selected discount' + i);
    if (val?.discount_offer_type == 'Price-range-free-item') {
       //remove
       const removeCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i) as FormGroup;
       console.log(removeCart.get('discount').value);
       let dis=removeCart.get('discount').value;
       const currentQty = removeCart.get('qty').value; 
       const newQty = currentQty - 1;
       if(dis=='Qty Per Qty'){
         removeCart.patchValue({
          qty:newQty
         })
       } if(dis>0){
        removeCart.patchValue({
          discount:'',
          discount_type:''
         })
       }if(dis=='Free Item'){
        this.removeCart(i+1);
        this.discountTyp.splice(i+1, 1);
        console.warn(this.discountTyp);
      } if(dis=='Free Item Invoice'){
        this.removeCart(i+1);
        this.discountTyp.splice(i+1, 1);
        console.warn(this.discountTyp);
      }
      
     //end
     //add 
    //  if (product?.batch[0]?.selling_price_online >= parseInt(lastCompulsoryDiscount.start_price) && product?.batch[0]?.selling_price_online <= parseInt(lastCompulsoryDiscount.end_price)) {
      this.addCart(i+1);
      const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i) as FormGroup;
      previousCart.patchValue({
        discount: 'Free Item',
      })
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
    // }
     //and
    } else if (val?.discount_offer_type == 'Price-range-discount') {
        //remove
        const removeCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i) as FormGroup;
        console.log(removeCart.get('discount').value);
        let dis=removeCart.get('discount').value;
        const currentQty = removeCart.get('qty').value; 
        const newQty = currentQty - 1;
        if(dis=='Qty Per Qty'){
          removeCart.patchValue({
           qty:newQty
          })
        } if(dis>0){
         removeCart.patchValue({
           discount:'',
           discount_type:''
          })
        }if(dis=='Free Item'){
          this.removeCart(i+1);
          this.discountTyp.splice(i+1, 1);
          console.warn(this.discountTyp);
        } if(dis=='Free Item Invoice'){
          this.removeCart(i+1);
          this.discountTyp.splice(i+1, 1);
          console.warn(this.discountTyp);
        }
      //end
      //add
      if (product?.batch[0]?.selling_price_online >= parseInt(val.start_price) && product?.batch[0]?.selling_price_online <= parseInt(val.end_price)) {
        if (val?.discount_type == '%') {
          let flatDisc = product?.batch[0]?.selling_price_online * parseInt(val?.flat_discount) / 100;
          console.log(flatDisc);
          const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i) as FormGroup;
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
          const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i) as FormGroup;
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
        const removeCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i) as FormGroup;
        console.log(removeCart.get('discount').value);
        let dis=removeCart.get('discount').value;
        const currentQty = removeCart.get('qty').value; 
        const newQty = currentQty - 1;
        if(dis=='Qty Per Qty'){
          removeCart.patchValue({
           qty:newQty
          })
        } if(dis>0){
         removeCart.patchValue({
           discount:'',
           discount_type:''
          })
        }if(dis=='Free Item'){
          this.removeCart(i+1);
          this.discountTyp.splice(i+1, 1);
          console.warn(this.discountTyp);
        } if(dis=='Free Item Invoice'){
          this.removeCart(i+1);
          this.discountTyp.splice(i+1, 1);
          console.warn(this.discountTyp);
        }
      //end
          console.warn(val);
          this.addCart(i+1);
          const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i) as FormGroup;
          previousCart.patchValue({
            discount: 'Free Item Invoice',
          })
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
      //   }
      // }, 3000);

    } else if (val?.discount_offer_type == 'Discount-on-Invoice') {
      //remove
      const removeCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i) as FormGroup;
      console.log(removeCart.get('discount').value);
      let dis=removeCart.get('discount').value;
      const currentQty = removeCart.get('qty').value; 
      const newQty = currentQty - 1;
      if(dis=='Qty Per Qty'){
        removeCart.patchValue({
         qty:newQty
        })
      } if(dis>0){
       removeCart.patchValue({
         discount:'',
         discount_type:''
        })
      }if(dis=='Free Item'){
        this.removeCart(i+1);
        this.discountTyp.splice(i+1, 1);
        console.warn(this.discountTyp);
      } if(dis=='Free Item Invoice'){
        this.removeCart(i+1);
        this.discountTyp.splice(i+1, 1);
        console.warn(this.discountTyp);
      }
    //end
    //add
    if (val?.discount_type == '%') {
      this.invoiceFlatDiscount = parseInt(val?.flat_discount);
      const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i) as FormGroup;
      previousCart.patchValue({
        discount: 'Discount Invoice',
        discount_type: '%'
      });
    } else {
      const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i) as FormGroup;
      previousCart.patchValue({
        discount: 'Discount Invoice',
        discount_type: 'Rs'
      });
      this.invoiceFlatDiscount = parseInt(val?.flat_discount);
    }
    //end
    } else if (val?.discount_offer_type == 'Quantity-per-percentage') {
      //remove
      const removeCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i) as FormGroup;
      console.log(removeCart.get('discount').value);
      let dis=removeCart.get('discount').value;
      const currentQty = removeCart.get('qty').value; 
      const newQty = currentQty - 1;
      if(dis=='Qty Per Qty'){
        removeCart.patchValue({
         qty:newQty
        })
      } if(dis>0){
       removeCart.patchValue({
         discount:'',
         discount_type:''
        })
      }if(dis=='Free Item'){
        this.removeCart(i+1);
        this.discountTyp.splice(i+1, 1);
        console.warn(this.discountTyp);
      } if(dis=='Free Item Invoice'){
        this.removeCart(i+1);
        this.discountTyp.splice(i+1, 1);
        console.warn(this.discountTyp);
      }
    //end
    //add
    this.isDiscountSelect[i] = true;
                this.selectedDiscount[i] = 'Qty % Discount';
                this.discountTypeSelect.push(val);
                const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i) as FormGroup;
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
                    const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i) as FormGroup;
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
       const removeCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i) as FormGroup;
       console.log(removeCart.get('discount').value);
       console.log(i,'index');
       console.warn(i+1);
       
       let dis=removeCart.get('discount').value;
       const currentQty = removeCart.get('qty').value; 
       const newQty = currentQty - 1;
       if(dis=='Qty Per Qty'){
         removeCart.patchValue({
          qty:newQty
         })
       } if(dis>0){
        removeCart.patchValue({
          discount:'',
          discount_type:''
         });
       }if(dis=='Free Item'){
         this.removeCart(i+1);
         this.discountTyp.splice(i+1, 1);
         console.warn(this.discountTyp);
       } if(dis=='Free Item Invoice'){
         this.removeCart(i+1);
         this.discountTyp.splice(i+1, 1);
         console.warn(this.discountTyp);
       }
       
     //end
     //add
     this.isDiscountSelect[i] = true;
     this.selectedDiscount[i] = 'Qty Per Qty';
     this.discountTypeSelect.push(val);
     const previousCart = (this.saleEstimateForm.get('estimate_cart') as FormArray).at(i) as FormGroup;
     console.log(previousCart.get('qty').value);
     if (previousCart.get('qty').value >= parseInt(val?.purchase_qty)) {

       const currentQty1 = previousCart.get('qty').value; // Get current quantity value
       const newQty1 = currentQty1 + 1;
       this.isQtyPerQty[i] = true;
       previousCart.patchValue({
         qty: newQty1,
         discount: 'Qty Per Qty'
       });
       console.log(parseInt(val?.purchase_qty));
     }
     //end
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
  calculateTotal(): number {
    let total = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const taxControl = this.getCart().controls[i].get('total');
      //4-5
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
    this.totalAmount = total
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
}

