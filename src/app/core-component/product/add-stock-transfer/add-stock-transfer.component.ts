import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { SalesService } from 'src/app/Services/salesService/sales.service';

@Component({
  selector: 'app-add-stock-transfer',
  templateUrl: './add-stock-transfer.component.html',
  styleUrls: ['./add-stock-transfer.component.scss']
})
export class AddStockTransferComponent implements OnInit {

 
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

  saleMaterialOutwardForm!: FormGroup;

  get f() {
    return this.saleMaterialOutwardForm.controls;
  }
  searchForm!: FormGroup;
  subcategoryList;

  ngOnInit(): void {
    const defaultDate = new Date().toISOString().split('T')[0]; 

    this.saleMaterialOutwardForm = this.fb.group({
      from_branch: new FormControl('', [Validators.required]),
      to_branch: new FormControl('', [Validators.required]),
      transfer_date: new FormControl(defaultDate, [Validators.required]),
      transfer_number: new FormControl(''),
      total_product: new FormControl(''),
      cart: this.fb.array([]),
      total_qty: new FormControl(''),
      status: new FormControl(''),
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
    this.saleService.getMaterialOutwardPrefix().subscribe((res: any) => {
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
  myControl = new FormControl('');
  variantList: any[] = [];

  getVariant(search: any, index: any, barcode: any) {
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

          const barcode = (this.saleMaterialOutwardForm.get('material_outward_cart') as FormArray).at(index) as FormGroup;
          barcode.patchValue({
            // barcode: this.searchs[0].id,
            // item_name: this.searchs[0]?.variant_name
          });
        }
        console.log(this.saleMaterialOutwardForm.value);


      });
    }
    else {
      this.saleService.filterVariant(this.category, this.subcategory, search).subscribe((res: any) => {
        console.log(res);
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
          const barcode = (this.saleMaterialOutwardForm.get('material_outward_cart') as FormArray)?.at(index) as FormGroup;
          barcode.patchValue({
            // barcode: this.searchs[0]?.id,
            // item_name: this.searchs[0]?.variant_name
          });
        }
        console.log(this.saleMaterialOutwardForm.value);

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

  get customer() {
    return this.saleMaterialOutwardForm.get('customer') as FormControl;
  }

  cart(): FormGroup {
    return this.fb.group({
      barcode: (0),
      quantity: (1),
    })
  }
  getCart(): FormArray {
    return this.saleMaterialOutwardForm.get('material_outward_cart') as FormArray;
  }
  isCart = false;
  addCart() {
    this.getCart().push(this.cart());
    this.isCart = false;
  }
  removeCart(i: any) {
    this.getCart().removeAt(i);
    if (this.saleMaterialOutwardForm?.value?.material_outward_cart?.length == 0) {
      this.isCart = true;
    }
  }
  getUser() {
    this.saleService.getUser().subscribe((res: any) => {
      this.users = res;
    })
  }
  paymentTermsList: any
  getPaymentTerms() {
    this.contactService.getPaymentTerms().subscribe(res => {
      this.paymentTermsList = res
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
      this.saleMaterialOutwardForm.patchValue({
        payment_terms: res?.payment_terms?.id
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
    const variants = this.saleMaterialOutwardForm.get('material_outward_cart') as FormArray;
    variants.clear();
    this.addCart();
    this.saleMaterialOutwardForm.patchValue({
      customer: selectedItemId,

    });
  }

  selectedProductName: any;
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
    console.log(event);
    this.selectedProductName = event.product_title;
    this.selectBatch = event.batch;
    this.apiPurchaseTax = event?.product?.purchase_tax?.amount_tax_slabs[0]?.tax?.tax_percentage || 0;
    this.batchDiscount = event.batch[0]?.discount || 0;
    this.isTaxAvailable[index] = event?.product?.purchase_tax_including;
    this.batchCostPrice[index] = event?.batch[0]?.cost_price || 0;

    if (event.batch.length > 0) {
      const barcode = (this.saleMaterialOutwardForm.get('material_outward_cart') as FormArray).at(index) as FormGroup;
      this.tax[index] = this.apiPurchaseTax;
      if (event?.product?.purchase_tax_including == true) {
        barcode.patchValue({
          barcode: selectedItemId,
          item_name: event?.product_title,
          qty: event.batch[0]?.stock,
        });
      } else {
        this.tax[index] = 18
        barcode.patchValue({
          barcode: selectedItemId,
          item_name: event?.product_title,
          qty: event.batch[0]?.stock,
        });
      }
      console.log(event.batch);
    } else {
      this.tax[index] = 18
      const barcode = (this.saleMaterialOutwardForm.get('material_outward_cart') as FormArray).at(index) as FormGroup;
      barcode.patchValue({
        barcode: selectedItemId,
        item_name: event?.product_title,
        tax: 18,
      });
    }
  }


  getRes: any;
  loader = false;
  loaderCreate = false;
  loaderPrint=false;
  loaderDraft=false;
  submit(type: any) {
    console.log(this.saleMaterialOutwardForm.value);
    if (this.saleMaterialOutwardForm.valid) {
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
      formdata.append('customer', this.saleMaterialOutwardForm.get('customer')?.value);
      formdata.append('mo_date', this.saleMaterialOutwardForm.get('mo_date')?.value);
      formdata.append('refund_status', this.saleMaterialOutwardForm.get('refund_status')?.value);
      formdata.append('note', this.saleMaterialOutwardForm.get('note')?.value);
      formdata.append('total_qty', this.saleMaterialOutwardForm.get('total_qty')?.value);
      formdata.append('voucher_number', this.saleMaterialOutwardForm.get('voucher_number')?.value);

      if (type == 'draft') {
        formdata.append('status', 'Draft');
      }
      const cartArray = this.saleMaterialOutwardForm.get('material_outward_cart') as FormArray;
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
      formdata.append('material_outward_cart', JSON.stringify(cartData));
      this.saleService.addSalesMaterialOutward(formdata).subscribe(res => {
        // console.log(res);
        this.getRes = res;
        if (this.getRes.success) {
          if (type == 'new') {
            this.loaderCreate = false;
            this.saleMaterialOutwardForm.reset()
            this.ngOnInit()
            this.userControl.reset()
          } else if (type == 'print') { 
            this.toastrService.success(this.getRes.msg);
            this.loaderPrint=false;
            this.router.navigate(['//sales/salesMaterialOutwardDetails/'+this?.getRes?.id]);
          } else if (type == 'draft') {
            this.toastrService.success(this.getRes.msg);
            this.loaderDraft = false;
            this.router.navigate(['//sales/salesMaterialOutward-list'])
          } else {
            this.loader = false;
            this.toastrService.success(this.getRes.msg);
            this.router.navigate(['//sales/salesMaterialOutward-list'])
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
      this.saleMaterialOutwardForm.markAllAsTouched()
      console.log('invald');
    }
  }

  get mo_date() {
    return this.saleMaterialOutwardForm.get('mo_date')
  }
  get refund_status() {
    return this.saleMaterialOutwardForm.get('refund_status')
  }
  get voucher_number() {
    return this.saleMaterialOutwardForm.get('voucher_number')
  }
  get note() {
    return this.saleMaterialOutwardForm.get('note')
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
    const barcode = (this.saleMaterialOutwardForm.get('material_outward_cart') as FormArray).at(index) as FormGroup;
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

  onLabelClick(event: Event) {
    event.stopPropagation();
  }

  clearForm(){
    this.saleMaterialOutwardForm.reset();
    
  }
}

