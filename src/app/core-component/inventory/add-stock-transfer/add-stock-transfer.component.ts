import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { StockService } from 'src/app/Services/stockService/stock.service';

@Component({
  selector: 'app-add-stock-transfer',
  templateUrl: './add-stock-transfer.component.html',
  styleUrls: ['./add-stock-transfer.component.scss']
})
export class AddStockTransferComponent implements OnInit {

  constructor(private stockService: StockService, private fb: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private contactService: ContactService,
    private commonService: CommonServiceService) {
  }

  productOption: any[] = [];
  branch: any[] = [];

  //branch filter
  fromBranchControl = new FormControl();
  filteredFromBranch: Observable<any[]>;

  toBranchControl = new FormControl();
  filteredToBranch: Observable<string[]>;


  variantControl = new FormControl();
  variants: any[] = [];
  filteredVariants: Observable<any[]>;

  stockTransferForm!: FormGroup;
  minDate: string = '';
  maxDate: string = '';

  get f() {
    return this.stockTransferForm.controls;
  }
  searchForm!: FormGroup;
  subcategoryList;

  ngOnInit(): void {
    const defaultDate = new Date().toISOString().split('T')[0];
    this.stockTransferForm = this.fb.group({
      from_branch: new FormControl('', [Validators.required]),
      to_branch: new FormControl('', [Validators.required]),
      transfer_date: new FormControl(defaultDate, [Validators.required]),
      transfer_number: new FormControl(''),
      cart: this.fb.array([]),
      total_qty: new FormControl(''),
      total_product: new FormControl(''),
      status: new FormControl(''),
    });

    this.searchForm = this.fb.group({
      search: new FormControl()
    })

    this.filteredFromBranch = this.fromBranchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );

    this.filteredToBranch = this.toBranchControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterr(value, true)),
    );

    this.filteredVariants = this.variantControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filtr(value, true))
    )
    this.getBranch();
    this.getCategory();
    this.getprefix();
    // add cart
    this.addCart();

    const financialYear = localStorage.getItem('financialYear');
    this.stockTransferDateValidation(financialYear);
  }

  prefixNo: any;
  getprefix() {
    this.stockService.getStockTransferPrefix().subscribe((res: any) => {
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
      this.stockService.filterVariant(this.category, this.subcategory, search).subscribe((res: any) => {
        console.log(res);
        this.variantList[index] = res;
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

          const barcode = (this.stockTransferForm.get('cart') as FormArray).at(index) as FormGroup;
          barcode.patchValue({
            // barcode: this.searchs[0].id,
            // item_name: this.searchs[0]?.variant_name
          });
        }
        console.log(this.stockTransferForm.value);


      });
    }
    else {
      this.stockService.filterVariant(this.category, this.subcategory, search).subscribe((res: any) => {
        console.log(res);
        this.variantList[index] = res;
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
          const barcode = (this.stockTransferForm.get('cart') as FormArray)?.at(index) as FormGroup;
          barcode.patchValue({
            // barcode: this.searchs[0]?.id,
            // item_name: this.searchs[0]?.variant_name
          });
        }

      });
    }
  }

  stockTransferDateValidation(financialYear) {
    const dateControl = this.stockTransferForm.get('transfer_date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear);
    this.minDate = formattedMinDate;
    this.maxDate = formattedMaxDate;
  }

  categoryList: any[] = [];
  filteredCategoryList: any[] = [];
  searchCategory: string = '';
  getCategory() {
    this.stockService.getCategory().subscribe((res: any) => {
      this.categoryList = res;
      this.filteredCategoryList = [...this.categoryList];
    })
  }
  filterCategory() {
    if (this.searchCategory.trim() === '') {
      this.filteredCategoryList = [...this.categoryList];
    } else {
      this.filteredCategoryList = this.categoryList.filter(product =>
        product?.title?.toLowerCase().includes(this.searchCategory.toLowerCase())
      );
    }
  }

  SubcategoryList: any[] = [];
  filteredSubCategoryList: any[] = [];
  searchSubCategory: string = '';
  getSubCategory(val: any) {
    this.stockService.getSubcategoryByCategory(val).subscribe((res: any) => {
      this.SubcategoryList = res;
      this.filteredSubCategoryList = [...this.SubcategoryList];
    })
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

  get from_branch() {
    return this.stockTransferForm.get('from_branch') as FormControl;
  }
  get to_branch() {
    return this.stockTransferForm.get('to_branch') as FormControl;
  }
  get status() {
    return this.stockTransferForm.get('status') as FormControl;
  }
  cart(): FormGroup {
    return this.fb.group({
      barcode: (0),
      variant_name: (''),
      quantity: (1),
    })
  }
  getCart(): FormArray {
    return this.stockTransferForm.get('cart') as FormArray;
  }
  isCart = false;
  addCart() {
    this.getCart().push(this.cart());
    this.isCart = false;
  }
  removeCart(i: any) {
    this.getCart().removeAt(i);
    if (this.stockTransferForm?.value?.cart?.length == 0) {
      this.isCart = true;
    }
  }
  toBranch: any[] = [];
  getBranch() {
    this.stockService.getBranch().subscribe((res: any) => {
      this.branch = res;
      this.toBranch = res;
    })
  }
  supplierAddress: any;
  selectedAddressBilling: any;
  selectedAddressShipping: any;
  selectBatch: any;
  paymentTerms: any;
  userType: any;

  oncheck(data: any) {
    const selectedItemId = data.id;
    this.userType = data?.user_type;
    this.stockTransferForm.patchValue({
      from_branch: selectedItemId,
    });
  }
  oncheck1(data: any) {
    const selectedItemId = data.id;
    this.userType = data?.user_type;
    this.stockTransferForm.patchValue({
      to_branch: selectedItemId,
    });
  }


  oncheckVariant(event: any, index) {
    const selectedItemId = event.id;
    console.log(event);
    const barcode = (this.stockTransferForm.get('cart') as FormArray).at(index) as FormGroup;
    if (event) {
      barcode.patchValue({
        barcode: selectedItemId,
        item_name: event?.product_title,
        variant_name: event?.variant_name,
        quantity: event.batch[0]?.stock,
      });
    }
  }


  getRes: any;
  loader = false;
  submit() {
    console.log(this.stockTransferForm.value);
    if (this.stockTransferForm.valid) {
      console.log('valid');
      let formdata: any = new FormData();
      formdata.append('from_branch', this.stockTransferForm.get('from_branch')?.value);
      formdata.append('to_branch', this.stockTransferForm.get('to_branch')?.value);
      formdata.append('transfer_date', this.stockTransferForm.get('transfer_date')?.value);
      formdata.append('transfer_number', this.stockTransferForm.get('transfer_number')?.value);
      formdata.append('total_qty', this.stockTransferForm.get('total_qty')?.value);
      formdata.append('total_product', this.stockTransferForm.get('total_product')?.value);
      formdata.append('status', this.stockTransferForm.get('status')?.value);

      const cartArray = this.stockTransferForm.get('cart') as FormArray;
      const cartData = [];
      cartArray.controls.forEach((address) => {
        const cartGroup = address as FormGroup;
        const cartObject = {};
        Object.keys(cartGroup.controls).forEach((key) => {
          const control = cartGroup.controls[key];
          // Convert the value to an integer if it's a number, but keep item_name as a string
          if (!isNaN(control.value)) {
            cartObject[key] = parseFloat(control.value);
          } else {
            cartObject[key] = control.value;
          }
        });
        cartData.push(cartObject);
      });
      formdata.append('cart', JSON.stringify(cartData));
      this.stockService.addStockTransfer(formdata).subscribe(res => {
        console.log(res);
        this.getRes = res;
        if (this.getRes.success) {
          this.loader = false;
          this.toastrService.success(this.getRes.msg);
          this.router.navigate(['//inventory/list-stock-transfer'])
        } else {
          this.loader = false;
        }
      }, err => {
        this.loader = false;
      })
    } else {
      this.loader = false;
      this.stockTransferForm.markAllAsTouched()
            this.toastrService.error('Please Fill All The Required Fields')
      this.toastrService.error('Please Fill All The Required Fields')
    }
  }

  get transfer_date() {
    return this.stockTransferForm.get('transfer_date')
  }
  get refund_status() {
    return this.stockTransferForm.get('refund_status')
  }
  get transfer_number() {
    return this.stockTransferForm.get('transfer_number')
  }
  get note() {
    return this.stockTransferForm.get('note')
  }
  // branch
  private _filter(value: string | number, include: boolean): any[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredFromBranch = include
      ? this.branch.filter(branch => branch?.title?.toLowerCase().includes(filterValue))
      : this.branch.filter(branch => !branch?.title?.toLowerCase().includes(filterValue));
    if (!include && filteredFromBranch.length === 0) {
      filteredFromBranch.push({ title: "No data found" });
    }
    return filteredFromBranch;
  }

  private _filterr(value: string | number, include: boolean): any[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredToBranch = include
      ? this.toBranch.filter(branch => branch?.title?.toLowerCase().includes(filterValue))
      : this.toBranch.filter(branch => !branch?.title?.toLowerCase().includes(filterValue));
    if (!include && filteredToBranch.length === 0) {
      filteredToBranch.push({ title: "No data found" });
    }
    return filteredToBranch;
  }

  // end

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
    const barcode = (this.stockTransferForm.get('cart') as FormArray).at(index) as FormGroup;
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
      const qtyControl = this.getCart().controls[i].get('quantity') || 0;
      if (qtyControl) {
        totalQty += +qtyControl.value || 0;
      }
    }
    return totalQty;
  }

  calculateTotalProduct(): any {
    let totalQty = 0;
    totalQty = this.getCart().controls.length;
    return totalQty;
  }


  onLabelClick(event: Event) {
    event.stopPropagation();
  }

  clearForm() {
    this.stockTransferForm.reset();

  }

  indexCartValue: any;
  openModalProduct(index: number) {
    this.indexCartValue = index
    const modalId = `productModal-${index}`;
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  }

  closeModalProduct(i: number) {
    const modal = document.getElementById(`productModal-${i}`);
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }
}

