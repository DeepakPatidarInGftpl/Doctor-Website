import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { SalesService } from 'src/app/Services/salesService/sales.service';

@Component({
  selector: 'app-update-sales-return',
  templateUrl: './update-sales-return.component.html',
  styleUrls: ['./update-sales-return.component.scss']
})
export class UpdateSalesReturnComponent implements OnInit {


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
    private Arout :ActivatedRoute) {
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

  get f() {
    return this.saleReturnForm.controls;
  }
  searchForm!: FormGroup;
  subcategoryList;
  id:any;
  editRes:any;
  ngOnInit(): void {
    const defaultDate = new Date().toISOString().split('T')[0]; // Get yyyy-MM-dd part
    this.userControl.setValue('Loading...');
    this.id=this.Arout.snapshot.paramMap.get('id');
    this.myControl = new FormArray([]);
    this.saleReturnForm = this.fb.group({
      customer: new FormControl('', [Validators.required]),
      bill_date: new FormControl(defaultDate, [Validators.required]),
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
    });

    this.searchForm = this.fb.group({
      search: new FormControl()
    })
      //patch value
      this.saleService.getSaleReturnById(this.id).subscribe(res=>{
        this.editRes=res;
        this.saleReturnForm.patchValue(this.editRes);
        this.saleReturnForm.get('sale_bill').patchValue(this.editRes?.sale_bill)
        this.saleReturnForm.setControl('sale_return_cart', this.udateCart(this.editRes?.cart));
        this.saleReturnForm.get('customer')?.patchValue(this.editRes?.customer?.id);
        this.userControl.setValue(this.editRes?.customer?.name);
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
    this.getsalesBill();
    this.getprefix();
  
  }

  prefixNo: any;
  getprefix() {
    this.saleService.getSaleReturnPrefix().subscribe((res: any) => {
      console.log(res);
      if (res.success == true) {
        this.prefixNo = res.prefix
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
  myControl: FormArray;
  variantList: any[] = [];

  getVariant(search: any, index: any) {
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
        this.variantList = res;
        console.log(this.variantList);
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
        this.variantList = res;
        console.log(this.variantList);
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

    this.getVariant('', '')
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
    this.getVariant('', '')
  }

  get customer() {
    return this.saleReturnForm.get('customer') as FormControl;
  }
  udateCart(add: any): FormArray {
    console.log(add); 
    let formarr = new FormArray([]);
    add.forEach((j: any, i) => {
      const price = j.price || 0;
      const taxPercentage = j.tax || 0;
      const calculatedTax = price - (price * (100 / (100 + taxPercentage)))
      this.taxIntoRupees[i] = calculatedTax;
      // tax including & excluding
      if (j.tax == 18) {
        this.TotalWithoutTax[i] = j.price * j.qty;
        const calculatedTax = price - (price * (100 / (100 + taxPercentage)))
        this.taxIntoRupees[i] = calculatedTax;
      } else {
        this.TotalWithoutTax[i] = j.price * j.qty;
        console.log(this.TotalWithoutTax[i]);
        let taxPrice = price - (price * (100 / (100 + taxPercentage)))
        this.taxIntoRupees[i] = taxPrice;
      }
      this.isPercentage[i]=true;
      if(j.deduction>100){
        this.isAmount[i]=true;
      }
      formarr.push(this.fb.group({
        barcode: j.barcode.id,
        item_name: j.item_name,
        qty: j.qty,
        price: j.price,
        tax: j.tax || 0,
        deduction: j.deduction,
        total: j.total
      }))
      this.barcode[i] = j.barcode.sku;
      this.productName[i] = j.barcode.product_title;
      this.coastprice[i] = j.price;
      this.tax[i] = j.tax || 0;
      this.isPercentage[i]=true
      this.myControl.push(new FormControl(j?.barcode?.product_title));
    })
    return formarr
  }
  cart(): FormGroup {
    return this.fb.group({
      barcode: (0),
      item_name: (''),
      qty: (1),
      price: (0),
      deduction: (0),
      // amount: (0),
      // discount: new FormControl(0, [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      tax: new FormControl(0, [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      total: (0),

    })
  }
  getCart(): FormArray {
    return this.saleReturnForm.get('sale_return_cart') as FormArray;
  }
  addCart(i) {
    this.getCart().push(this.cart());
    if(i>0){
      this.isPercentage[i] = true;
      this.isAmount[i]=false
    }
  }
  removeCart(i: any) {
    this.getCart().removeAt(i)
  }
  getUser() {
    this.saleService.getUser().subscribe((res: any) => {
      this.users = res;
    })
  }
  salesBillList: any
  getsalesBill() {
    this.saleService.getSalesBill().subscribe(res => {
      this.salesBillList = res
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
    this.contactService.getCustomerById(selectedItemId).subscribe(res => {
      // console.log(res);
      this.supplierAddress = res;
      this.saleReturnForm.patchValue({
        sale_bill: res?.sale_bill?.id
      })
      this.supplierAddress?.address?.map((res: any) => {
        if (res.address_type == 'Billing') {
          this.selectedAddressBilling = res
          console.log(this.selectedAddressBilling);
        } else if (res.address_type == 'Shipping') {
          this.selectedAddressShipping = res
          console.log(this.selectedAddressShipping);
        }
      })
    })
    const variants = this.saleReturnForm.get('sale_return_cart') as FormArray;
    variants.clear();
    this.addCart('');
    this.saleReturnForm.patchValue({
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
    const barcode = (this.saleReturnForm.get('sale_return_cart') as FormArray).at(index) as FormGroup;
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
  //     const barcode = (this.saleReturnForm.get('sale_return_cart') as FormArray).at(index) as FormGroup;
  //     barcode.patchValue({
  //       barcode: selectedItemId,
  //       mrp: event.batch[0]?.mrp,
  //       qty: event.batch[0]?.stock,
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
  landingCost: any;
  batchCostPrice: any[] = [];
  oncheckVariant(event: any, index) {
    const selectedItemId = event.id;
    console.log(event);
    this.selectedProductName = event.product_title;
    this.selectBatch = event.batch;
    this.apiPurchaseTax = event?.product?.purchase_tax?.amount_tax_slabs[0]?.tax?.tax_percentage || 0;

    this.isTaxAvailable[index] = event?.product?.purchase_tax_including;
    this.batchCostPrice[index] = event?.batch[0]?.cost_price || 0;
    if (event?.product?.purchase_tax_including) {
      if (this.userType == 'Employee') {
        let Employeeprice = event?.batch[0]?.selling_price_employee || 0;
        this.originalPrice[index] = event?.batch[0]?.selling_price_employee || 0;
        // landing cost
        let getDiscountPrice = (Employeeprice * 0) / 100
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
        let getDiscountPrice = (dealerprice * 0) / 100
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
        let getDiscountPrice = (offlineprice * 0) / 100
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
      let getDiscountPrice = (offlineprice * 0) / 100
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
      const barcode = (this.saleReturnForm.get('sale_return_cart') as FormArray).at(index) as FormGroup;
      this.tax[index] = this.apiPurchaseTax
      console.log(this.originalCoastPrice, 'this.originalCoastPrice');
      if (event?.product?.purchase_tax_including == true) {
        barcode.patchValue({
          barcode: selectedItemId,
          item_name: event?.product_title,
          amount: event.batch[0]?.mrp,
          qty: event.batch[0]?.stock,
          tax: this.apiPurchaseTax,
          price: this.originalCoastPrice.toFixed(2),
        });

      } else {
        this.tax[index] = 18
        barcode.patchValue({
          barcode: selectedItemId,
          item_name: event?.product_title,
          qty: event.batch[0]?.stock,
          tax: 18,
          price: this.originalCoastPrice,
          // landing_cost: this.landingCost || 0
        });
      }
      console.log(event.batch);
    } else {
      this.tax[index] = 18
      const barcode = (this.saleReturnForm.get('sale_return_cart') as FormArray).at(index) as FormGroup;
      barcode.patchValue({
        barcode: selectedItemId,
        item_name: event?.product_title,
        tax: 18,
      });
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
      let purchaseTax = 18;
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
    this.isAmount[index]=true;
  }
  amount(index) {
    this.isPercentage[index] = true;
    this.isAmount[index]=false;
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
        if(this.isPercentage[index] == true){
          let getDiscountPrice = (purchaseRate * deductionPercentage) / 100;
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
        }else if(this.isAmount[index] == true){
          let getCoastPrice = purchaseRate - deductionPercentage;
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
        } 
      } else {
        const deductionPercentage = +deductionPercentageControl.value || 0;
        const purchaseRate = +purchaseRateControl.value || 0;
        const qty = +QtyControl.value || 1;
        let purchaseTax = 18;
        // cost price 
        if(this.isPercentage[index] == true){
          let getDiscountPrice = (this.coastprice[index] * deductionPercentage) / 100
          let getCoastPrice = this.coastprice[index] - getDiscountPrice;
          console.log(getCoastPrice);
          this.TotalWithoutTax[index] = getCoastPrice * qty || 0
          // tax price 
          let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + purchaseTax))) || 0
          this.taxIntoRupees[index] = taxprice || 0;
          let purchasePrice = getCoastPrice + taxprice;
          this.originalCoastPrice = purchasePrice;
          return purchasePrice;
        }else if(this.isAmount[index] == true){
          let getCoastPrice = this.coastprice[index] - deductionPercentage;
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
          if(this.isPercentage[index] == true){
            console.log(this.costPrice, 'this.costPrice > 0');
            let getDiscountPrice = (this.costPrice * deductionPercentage) / 100;
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
          }else if(this.isAmount[index] == true){
            let getCoastPrice = this.costPrice - deductionPercentage;
            this.TotalWithoutTax[index] = getCoastPrice * qty || 0
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
          if(this.isPercentage[index] == true){
            let getDiscountPrice = (this.originalPrice[index] * deductionPercentage) / 100
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
          }else if(this.isAmount[index] == true){
            let getCoastPrice = this.originalPrice[index] - deductionPercentage;
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
        const deductionPercentage = +deductionPercentageControl.value || 0;
        const purchaseRate = +purchaseRateControl.value || 0;
        let purchaseTax = 18;
        const qty = +QtyControl.value;
        // cost price 
        if(this.isPercentage[index] == true){
          let getDiscountPrice = (this.costPrice * deductionPercentage) / 100
          let getCoastPrice = this.costPrice - getDiscountPrice;
          this.TotalWithoutTax[index] = getCoastPrice * qty || 0
          console.log(this.TotalWithoutTax[index]);
          let taxprice = getCoastPrice - (getCoastPrice * (100 / (100 + purchaseTax))) || 0
          this.taxIntoRupees[index] = taxprice || 0;
          let purchasePrice = getCoastPrice + taxprice;
          this.originalCoastPrice = purchasePrice;
          return purchasePrice;
        }else if(this.isAmount[index] == true){
          let getCoastPrice = this.costPrice - deductionPercentage;
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
  submit(type: any) {
    console.log(this.saleReturnForm.value);
    if (this.saleReturnForm.valid) {
      if (type == 'new') {
        this.loaderCreate = true;
      } else if (type == 'save') {
        this.loader = true;
      }
      let formdata: any = new FormData();
      formdata.append('customer', this.saleReturnForm.get('customer')?.value);
      formdata.append('bill_date', this.saleReturnForm.get('bill_date')?.value);
      formdata.append('sale_return_bill_no', this.saleReturnForm.get('sale_return_bill_no')?.value);
      formdata.append('sale_bill', this.saleReturnForm.get('sale_bill')?.value);
      formdata.append('note', this.saleReturnForm.get('note')?.value);
      formdata.append('total_qty', this.saleReturnForm.get('total_qty')?.value);
      formdata.append('total_tax', this.saleReturnForm.get('total_tax')?.value);
      formdata.append('total_discount', this.saleReturnForm.get('total_discount')?.value);
      formdata.append('roundoff', this.saleReturnForm.get('roundoff')?.value);
      formdata.append('subtotal', this.saleReturnForm.get('subtotal')?.value);
      formdata.append('total', this.saleReturnForm.get('total')?.value);
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
          if (key !== 'item_name' && !isNaN(control.value)) {
            cartObject[key] = parseFloat(control.value);
          } else {
            cartObject[key] = control.value;
          }
        });
        cartData.push(cartObject);
      });
      formdata.append('sale_return_cart', JSON.stringify(cartData));
      this.saleService.updateSaleReturn(formdata,this.id).subscribe(res => {
        // console.log(res);
        this.getRes = res;
        if (this.getRes.success) {
          if (type == 'new') {
            this.loaderCreate = false;
            this.saleReturnForm.reset()
            this.ngOnInit()
            this.userControl.reset()
          } else if (type == 'print') {
            this.printForm()
            setTimeout(() => {
              this.saleReturnForm.reset()
              this.ngOnInit()
              this.userControl.reset()
            }, 3000);
          }
          else {
            this.loader = false;
            this.toastrService.success(this.getRes.msg);
            this.router.navigate(['//sales/salesReturnlist'])
          }
        } else {
           if (type == 'new') {
        this.loaderCreate = false;
      } else if (type == 'save') {
        this.loader = false;
      }
        }
      }, err => {
         if (type == 'new') {
        this.loaderCreate = false;
      } else if (type == 'save') {
        this.loader = false;
      }
      })
    } else {
       if (type == 'new') {
        this.loaderCreate = false;
      } else if (type == 'save') {
        this.loader = false;
      };
      this.saleReturnForm.markAllAsTouched()
      console.log('invald');
    }
  }

  get sale_return_bill_no() {
    return this.saleReturnForm.get('sale_return_bill_no')
  }
  get bill_date() {
    return this.saleReturnForm.get('bill_date')
  }
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
      ? this.users.filter(users => users?.name?.toLowerCase().includes(filterValue))
      : this.users.filter(users => !users?.name?.toLowerCase().includes(filterValue));
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
    console.log(value);
    // console.log(index);
    // console.log(value?.sku);
    this.barcode[index] = value.sku;
    // console.log(this.barcode[index]);
    // console.log(this.barcode);
    this.v_id = value.id;
    const barcode = (this.saleReturnForm.get('sale_return_cart') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      barcode: value.id
    });
    this.getVariant('', '')
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
  calculateTotalPrice(): any {
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
    let total = 0;
    this.taxIntoRupees.forEach((value) => { 
      total += value.toFixed(2);
    });
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
  calculateTotal(): number {
    let total = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const taxControl = this.getCart().controls[i].get('total');
      if (taxControl) {
        total += +taxControl.value || 0;
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
}


