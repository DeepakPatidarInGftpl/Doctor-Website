import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { SalesService } from 'src/app/Services/salesService/sales.service';

@Component({
  selector: 'app-add-delivery-challan',
  templateUrl: './add-delivery-challan.component.html',
  styleUrls: ['./add-delivery-challan.component.scss']
})
export class AddDeliveryChallanComponent implements OnInit {

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
  // sale bill
  billControl = new FormControl();
  filteredBill: Observable<any[]>;
  // transporter account
  accountControl = new FormControl();
  filteredAccount: Observable<any[]>;
  deliveryChallanForm!: FormGroup;

  get f() {
    return this.deliveryChallanForm.controls;
  }
  searchForm!: FormGroup;
  subcategoryList;

  ngOnInit(): void {
    const defaultDate = new Date().toISOString().split('T')[0]; // Get yyyy-MM-dd part
    this.myControl = new FormArray([]);
    this.deliveryChallanForm = this.fb.group({
      account: new FormControl('', [Validators.required]),
      bill_date: new FormControl(defaultDate, [Validators.required]),
      sale_bill: new FormControl('',[Validators.required]), // banan hai
      transporter_account: new FormControl('',[Validators.required]),//bnana hai

      delivery_challan_bill_no: new FormControl('',[Validators.required]),
      cart: this.fb.array([]),
      total_qty: new FormControl(1),
      status: new FormControl(''),
      note: new FormControl(''),
    });

    this.searchForm = this.fb.group({
      search: new FormControl()
    });
    //account
    this.filteredusers = this.userControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );
    //bill
    this.filteredBill = this.billControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterBill(value, true))
    );
  //account
  this.filteredAccount = this.accountControl.valueChanges.pipe(
    startWith(''),
    map(value => this._filterAccount(value, true))
  );
    this.filteredVariants = this.variantControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filtr(value, true))
    )
    this.getAccount();
    this.getCategory();
    this.getSaleBill();
    this.getprefix();

  }

  prefixNo: any;
  getprefix() {
    this.saleService.getMaterialOutwardPrefix().subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        // this.prefixNo = res.prefix;
        this.prefixNo=res?.data;
        this.deliveryChallanForm.get('delivery_challan_bill_no').patchValue(this.prefixNo[0]?.id);
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
    this.searchLength = search;
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
            console.log(this.searchs[0]?.variant_name);

            const barcode = (this.deliveryChallanForm.get('cart') as FormArray).at(index) as FormGroup;
            barcode.patchValue({
              // barcode: this.searchs[0].id,
              // item_name: this.searchs[0]?.variant_name
            });
          }
          console.log(this.deliveryChallanForm.value);
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
            const barcode = (this.deliveryChallanForm.get('cart') as FormArray)?.at(index) as FormGroup;
            barcode.patchValue({
              // barcode: this.searchs[0]?.id,
              // item_name: this.searchs[0]?.variant_name
            });
          }
          console.log(this.deliveryChallanForm.value);

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

  get account() {
    return this.deliveryChallanForm.get('account') as FormControl;
  }

  cart(): FormGroup {
    return this.fb.group({
      barcode: (0),
      item_name: (''),
      qty: (1),
      mrp: (0)
    })
  }
  getCart(): FormArray {
    return this.deliveryChallanForm.get('cart') as FormArray;
  }
  isCart = false;
  addCart() {
    this.getCart().push(this.cart());
    this.isCart = false;
  }
  removeCart(i: any) {
    this.getCart().removeAt(i);
    if (this.deliveryChallanForm?.value?.cart?.length == 0) {
      this.isCart = true;
    }
  }
  accountList:any[]=[];
  getAccount() {
    this.coreService.getAccount().subscribe((res: any) => {
      this.users = res;
      this.accountList=res;
    })
  }
  saleBillList: any[] = [];
  getSaleBill() {
    this.saleService.getSalesBill().subscribe((res: any) => {
      this.saleBillList = res;
      console.log(this.saleBillList);
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
    this.getVariant('...','','')
    const selectedItemId = data.id;
    this.userType = data?.user_type;
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
    const variants = this.deliveryChallanForm.get('cart') as FormArray;
    variants.clear();
    this.addCart();
    this.deliveryChallanForm.patchValue({
      account: selectedItemId,
    });
  }
  oncheckBill(data: any) {
    this.deliveryChallanForm.patchValue({
      sale_bill: data?.id,

    });
  }
  oncheckAccount(data: any) {
    this.deliveryChallanForm.patchValue({
      transporter_account: data?.id,
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
    const modal = document.getElementById('batchModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }

    const barcode = (this.deliveryChallanForm.get('cart') as FormArray).at(index) as FormGroup;
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
 
  oncheckVariant(event: any, index) {
    const selectedItemId = event.id;
    console.log(event);
    const barcode = (this.deliveryChallanForm.get('cart') as FormArray).at(index) as FormGroup;
    if (event.batch.length > 0) {
        barcode.patchValue({
          barcode: selectedItemId,
          item_name: event?.product_title,
          qty: event.batch[0]?.stock,
          mrp: event.batch[0]?.mrp
        });
    }else{
      barcode.patchValue({
        barcode: selectedItemId,
        item_name: event?.product_title,
        qty: 1,
        mrp: 0
      });
    }
  }

  getRes: any;
  loader = false;
  loaderCreate = false;
  loaderPrint = false;
  loaderDraft = false;
  submit(type: any) {
    console.log(this.deliveryChallanForm.value);
    if (this.deliveryChallanForm.valid) {
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
      formdata.append('account', this.deliveryChallanForm.get('account')?.value);
      formdata.append('bill_date', this.deliveryChallanForm.get('bill_date')?.value);
      formdata.append('note', this.deliveryChallanForm.get('note')?.value);
      formdata.append('total_qty', this.deliveryChallanForm.get('total_qty')?.value);
      formdata.append('delivery_challan_bill_no', this.deliveryChallanForm.get('delivery_challan_bill_no')?.value);
      formdata.append('transporter_account', this.deliveryChallanForm.get('transporter_account')?.value);
      formdata.append('sale_bill', this.deliveryChallanForm.get('sale_bill')?.value);

      if (type == 'draft') {
        formdata.append('status', 'Draft');
      }
      const cartArray = this.deliveryChallanForm.get('cart') as FormArray;
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
      formdata.append('cart', JSON.stringify(cartData));
      this.saleService.addDelivryChallan(formdata).subscribe(res => {
        // console.log(res);
        this.getRes = res;
        if (this.getRes.success) {
          if (type == 'new') {
            this.loaderCreate = false;
            this.deliveryChallanForm.reset()
            this.ngOnInit()
            this.userControl.reset()
          } else if (type == 'print') {
            this.toastrService.success(this.getRes.msg);
            this.loaderPrint = false;
            this.router.navigate(['//sales/detail-delivery-challan/' + this?.getRes?.id]);
          } else if (type == 'draft') {
            this.toastrService.success(this.getRes.msg);
            this.loaderDraft = false;
            this.router.navigate(['//sales/delivery-challan-list'])
          } else {
            this.loader = false;
            this.toastrService.success(this.getRes.msg);
            this.router.navigate(['//sales/delivery-challan-list'])
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
      this.deliveryChallanForm.markAllAsTouched()
      this.toastrService.error('Please Fill All The Required Fields')
    }
  }

  get bill_date() {
    return this.deliveryChallanForm.get('bill_date')
  }

  get delivery_challan_bill_no() {
    return this.deliveryChallanForm.get('delivery_challan_bill_no')
  }
  get note() {
    return this.deliveryChallanForm.get('note')
  }
  get sale_bill() {
    return this.deliveryChallanForm.get('sale_bill')
  }
  get transporter_account() {
    return this.deliveryChallanForm.get('transporter_account')
  }
  private _filter(value: string | number, include: boolean): any[] {
    // console.log(value);
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredUsers = include
      ? this.users.filter(users => users?.title?.toLowerCase().includes(filterValue))
      : this.users.filter(users => !users?.title?.toLowerCase().includes(filterValue));
    if (!include && filteredUsers.length === 0) {
      // console.log("No results found");
      filteredUsers.push({ title: "No data found" }); // Add a dummy entry for displaying "No data found"
    }
    return filteredUsers;
  }
  private _filterAccount(value: string | number, include: boolean): any[] {
    console.log(value);
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredAccount = include
      ? this.accountList.filter(account => account?.title?.toLowerCase().includes(filterValue))
      : this.accountList.filter(account => !account?.title?.toLowerCase().includes(filterValue));
    if (!include && filteredAccount.length === 0) {
      // console.log("No results found");
      filteredAccount.push({ title: "No data found" }); // Add a dummy entry for displaying "No data found"
    }
    return filteredAccount;
  }
  private _filterBill(value: string | number, include: boolean): any[] {
    console.log(value);
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    console.log(this.saleBillList);
    const filteredBills = include
      ? this.saleBillList.filter(bill => bill?.customer_bill_no?.toLowerCase().includes(filterValue) || bill.customer?.username?.toLowerCase().includes(filterValue))
      : this.saleBillList.filter(bill => !bill?.customer_bill_no?.toLowerCase().includes(filterValue) || bill.customer?.username?.toLowerCase().includes(filterValue));
    if (!include && filteredBills.length === 0) {
      // console.log("No results found");
      filteredBills.push({ customer_bill_no: "No data found" }); // Add a dummy entry for displaying "No data found"
    }
    return filteredBills;
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
    const modal = document.getElementById(`productModal-${index}`);
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
    this.myControl.push(new FormControl(value?.product_title + ' ' + value?.variant_name));
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
  calculateTotalMRP(): any {
    let totalQty = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const qtyControl = this.getCart().controls[i].get('mrp') || 0;
      if (qtyControl) {
        totalQty += +qtyControl.value || 0;
      }
    }
    return totalQty;
  }
  clearForm() {
    this.deliveryChallanForm.reset();
    this.userControl.reset()
  }
  printForm(): void {
    const printContents = document.getElementById('deliveryChallanForm').outerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  onLabelClick(event: Event) {
    event.stopPropagation();
  }
}

