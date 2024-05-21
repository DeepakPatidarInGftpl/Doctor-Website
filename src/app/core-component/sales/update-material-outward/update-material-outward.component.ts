import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { SalesService } from 'src/app/Services/salesService/sales.service';

@Component({
  selector: 'app-update-material-outward',
  templateUrl: './update-material-outward.component.html',
  styleUrls: ['./update-material-outward.component.scss']
})
export class UpdateMaterialOutwardComponent implements OnInit {

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
    private Arout: ActivatedRoute,
    private coreService:CoreService) {
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
  id: any
  editRes: any;
  
  isStatusDraft=false; //21-5
  ngOnInit(): void {

    const defaultDate = new Date().toISOString().split('T')[0]; // Get yyyy-MM-dd part
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.userControl.setValue('Loading...');
    this.myControl = new FormArray([]);

    this.saleMaterialOutwardForm = this.fb.group({
      customer: new FormControl('', [Validators.required]),
      mo_date: new FormControl(defaultDate, [Validators.required]),
      refund_status: new FormControl(''),
      voucher_number: new FormControl(''),
      material_outward_cart: this.fb.array([]),
      total_qty: new FormControl(''),
      status: new FormControl(''),
      note: new FormControl(''),
    });

    this.searchForm = this.fb.group({
      search: new FormControl()
    })

    //patch value
    this.saleService.getSalesMaterialOutwardById(this.id).subscribe(res => {
      this.editRes = res;
      this.saleMaterialOutwardForm.patchValue(this.editRes);
           // 21-5
           if(this.editRes.status=='Draft' || this.editRes.status==null){
            this.isStatusDraft=true;
            this.getprefix();
          }else{
            this.saleMaterialOutwardForm.get('voucher_number').patchValue(this.editRes?.voucher_number) // 21-5
          }
    //end 21-5
      if(this.editRes?.cart.length>0){
        this.saleMaterialOutwardForm.setControl('material_outward_cart', this.udateCart(this.editRes?.cart));
      }else{
        this.isCart=true;
      }
      // this.saleMaterialOutwardForm.get('voucher_number')?.patchValue(this.editRes); // 20-5
      this.saleMaterialOutwardForm.get('customer')?.patchValue(this.editRes?.customer?.id);

      this.userControl.setValue(this.editRes?.customer?.name+ ' '+ this.editRes?.customer?.user_type);
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
    

  }

  prefixNo: any;
  getprefix() {
    this.saleService.getMaterialOutwardPrefix().subscribe((res: any) => {
      console.log(res);
      if (res.success == true) {
        this.prefixNo = res.data;
        this.saleMaterialOutwardForm.get('voucher_number').patchValue(this.prefixNo[0]?.id) 
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
  variantList2: any[] = [];
  variantList: any[] = [];
  isSearch=false;
  getVariant(search: any, index: any, barcode: any) {
    this.isSearch=true;
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
       this.variantList[index]=res
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
          console.log(this.searchs[0]?.variant_name);
          console.log(this.searchs);

          const barcode = (this.saleMaterialOutwardForm.get('material_outward_cart') as FormArray).at(index) as FormGroup;
          barcode.patchValue({
            barcode: this.searchs[0].id,
            item_name: this.searchs[0]?.variant_name
          });
        }
        console.log(this.saleMaterialOutwardForm.value);


      });
    }
    else {
      this.saleService.filterVariant(this.category, this.subcategory, search).subscribe((res: any) => {
        console.log(res);
        this.isSearch=false;
       this.variantList[index]=res
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
          const barcode = (this.saleMaterialOutwardForm.get('material_outward_cart') as FormArray)?.at(index) as FormGroup;
          barcode.patchValue({
            barcode: this.searchs[0]?.id,
            item_name: this.searchs[0]?.variant_name
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


  udateCart(add: any): FormArray {
    console.log(add);
    let formarr = new FormArray([]);
    add.forEach((j: any, i) => {
      formarr.push(this.fb.group({
        barcode: j.barcode.id,
        item_name: j.item_name,
        qty: j.qty,
      }))
      this.myControl.push(new FormControl(j?.barcode?.product_title));
      this.barcode[i] = j?.barcode?.sku
    })
    return formarr
  }
  cart(): FormGroup {
    return this.fb.group({
      barcode: (0),
      item_name: (''),
      qty: (1),
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
      this.isCart = true
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
    // this.contactService.getCustomerById(selectedItemId).subscribe(res => {
    //   // console.log(res);
    //   this.supplierAddress = res;
    //   this.saleMaterialOutwardForm.patchValue({
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
    
    const variants = this.saleMaterialOutwardForm.get('material_outward_cart') as FormArray;
    variants.clear();
    this.addCart();
    this.saleMaterialOutwardForm.patchValue({
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
    if(type=='productModal'){
      const modal = document.getElementById('productModal');
      if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
      }
    }else{
      const modal = document.getElementById('batchModal');
      if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
      }
    }
    const barcode = (this.saleMaterialOutwardForm.get('material_outward_cart') as FormArray).at(index) as FormGroup;
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
  //     const barcode = (this.saleMaterialOutwardForm.get('material_outward_cart') as FormArray).at(index) as FormGroup;
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
    const selectedItemId = event.id;
    console.log(event);
    this.selecteProduct=event?.product;
    this.selectedProductName = event.product_title;
    this.selectBatch = event.batch;
    this.apiPurchaseTax = event?.product?.sale_tax?.amount_tax_slabs[0]?.tax?.tax_percentage || 0;
    this.batchDiscount = event.batch[0]?.discount || 0;
    this.isTaxAvailable[index] = event?.product?.sale_tax_including;
    this.batchCostPrice[index] = event?.batch[0]?.cost_price || 0;

    if (event.batch.length > 0) {
      const barcode = (this.saleMaterialOutwardForm.get('material_outward_cart') as FormArray).at(index) as FormGroup;
      this.tax[index] = this.apiPurchaseTax;
      if (event?.product?.sale_tax_including == true) {
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
  loaderDraft = false;
  loaderPrint = false;
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
      // formdata.append('voucher_number', this.saleMaterialOutwardForm.get('voucher_number')?.value);
        // 21-5
        if(this.isStatusDraft){
          formdata.append('voucher_number', this.saleMaterialOutwardForm.get('voucher_number')?.value);
        }
        // end
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
      this.saleService.updateSalesMaterialOutward(formdata, this.id).subscribe(res => {
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
            this.router.navigate(['//sales/salesMaterialOutwardDetails/'+this?.id]);
          } else if (type == 'draft') {
            this.toastrService.success(this.getRes.msg);
            this.loaderDraft = false;
            this.router.navigate(['//sales/salesMaterialOutward-list'])
          }
          else {
            this.loader = false;
            this.toastrService.success(this.getRes.msg);
            this.router.navigate(['//sales/salesMaterialOutward-list'])
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
      this.saleMaterialOutwardForm.markAllAsTouched()
            this.toastrService.error('Please Fill All The Required Fields')
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
      ? this.users.filter(users => users?.name?.toLowerCase().includes(filterValue)|| users.username.toLowerCase().includes(filterValue))
      : this.users.filter(users => !users?.name?.toLowerCase().includes(filterValue)|| users.username.toLowerCase().includes(filterValue));
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

  clearForm() {
    this.saleMaterialOutwardForm.reset();
    this.userControl.reset()
  }
  printForm(): void {
    const printContents = document.getElementById('saleMaterialOutwardForm').outerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  onLabelClick(event: Event) {
    event.stopPropagation();
  }
}


