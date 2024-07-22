import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription, map, startWith } from 'rxjs';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { debounceTime, tap } from 'rxjs/operators';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { PrintMaterialInwardComponent } from '../print-material-inward/print-material-inward.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
@Component({
  selector: 'app-updatematerial-inward',
  templateUrl: './updatematerial-inward.component.html',
  styleUrls: ['./updatematerial-inward.component.scss']
})
export class UpdatematerialInwardComponent implements OnInit {

  searchControl = new FormControl();
  searchResults: any[] = [];

  totalQty: any;
  subTotal: any;
  discount: any;
  totalTax: any;
  roundOff: any;

  constructor(private purchaseService: PurchaseServiceService, private fb: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private Arout: ActivatedRoute,
    private contactService: ContactService,
    private coreService: CoreService,
    public dialog: MatDialog,
    private commonService: CommonServiceService) {
  }

  supplierControlName = 'party';
  supplierControl = new FormControl();
  productOption: any[] = [];
  filteredOptions: Observable<any>;
  suppliers: any[] = [];
  filteredSuppliers: Observable<any[]>;
  companyName!: string;

  variantControlName = 'barcode';
  variantControl = new FormControl();

  variants: any[] = [];
  filteredVariants: Observable<any[]>;

  materialForm!: FormGroup;
  minDate: string = '';
  maxDate: string = '';
  materialMinDate: string = '';
  materialMaxDate: string = '';
  isFormCartInvalid = false;
  subscriptions: Subscription[] = [];
  get f() {
    return this.materialForm.controls;
  }

  subcategoryList;
  id: any;
  getresbyId: any;
  isStatusDraft = false; //21-5

  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.supplierControl.setValue('Loading...');
    // this.myControls = new FormArray([]);
    this.materialForm = this.fb.group({
      party: new FormControl('', [Validators.required]),
      purchase_order: new FormControl(''),
      po_date: new FormControl(''),
      material_inward_date: new FormControl('', [Validators.required]),
      material_inward_no: new FormControl(''),
      shipping_note: new FormControl(''),
      recieved_by: new FormControl('', [Validators.required,]),
      material_inward_cart: this.fb.array([]),
      total: new FormControl('',),
      export: new FormControl(''),
      note: new FormControl(''),
      status: new FormControl(''),
      product_type: new FormControl('')
    });


    this.purchaseService.getMaterialById(this.id).subscribe(res => {
      // console.log(res);
      this.companyName = res.party?.company_name;
      this.getresbyId = res;
      this.materialForm.patchValue(res);
      // this.materialForm.get('material_inward_no')?.patchValue(res?.party);
      this.materialForm.get('party')?.patchValue(res?.party?.id);

      this.materialForm.get('purchase_order')?.patchValue(res?.purchase_order?.id === undefined ? '' : res?.purchase_order?.id);
      this.materialForm.get('product_type')?.patchValue(res?.product_type == null ? '' : res?.product_type)
      if (res?.cart?.length > 0) {
        this.materialForm.setControl('material_inward_cart', this.udateCart(res?.cart));
      } else {
        this.isCart = true;
      }
      // 21-5
      if (res.status == 'Draft' || res.status == null) {
        this.isStatusDraft = true;
        this.getprefix();
      } else {
        this.materialForm.get('material_inward_no').patchValue(res?.material_inward_no) // 21-5
      }
      //end 21-5
      this.displaySupplierName(res?.party?.id);
      this.supplierId = res?.party?.id
      this.getVariant('', '', '')

      //patch local-date
      //patch local-date
      const formattedpodate = new Date(this.getresbyId?.po_date).toISOString().slice(0, 16);
      this.materialForm.get('po_date')?.patchValue(formattedpodate);

      const formattedmaterial_inward_date = new Date(this.getresbyId?.material_inward_date).toISOString().slice(0, 16);
      this.materialForm.get('material_inward_date')?.patchValue(formattedmaterial_inward_date);
      //call detail api
      this.contactService.getSupplierById(res?.party?.id).subscribe(res => {
        // console.log(res);
        this.supplierAddress = res;
        this.supplierControl.setValue(res?.company_name);
        this.supplierAddress.address.map((res: any) => {
          if (res?.address_type == 'Billing') {
            this.selectedAddressBilling = res
            console.log(this.selectedAddressBilling);
          } else if (res?.address_type == 'Shipping') {
            this.selectedAddressShipping = res
            console.log(this.selectedAddressShipping);
          }
        })
      })
    })

    this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );

    const financialYear = localStorage.getItem('financialYear');

    this.poDateValidation(financialYear);
    this.materialDateValidation(financialYear);

    this.supplierControl.valueChanges.subscribe((res) => {
      const isFieldChanged = res !== this.companyName;
      if (res.length >= 3 && isFieldChanged) {
        this.getSuuplier(res);
      } else {
        this.suppliers = [];
        this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value, true))
        );
      }
    })

    this.filteredVariants = this.variantControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filtr(value, true))
    )
    this.getPurchase();
    this.getCategory();
  }

  materialDateValidation(financialYear) {
    const dateControl = this.materialForm.get('material_inward_date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDatesForDateTime(dateControl, financialYear);
    this.materialMinDate = formattedMinDate;
    this.materialMaxDate = formattedMaxDate;
  }

  poDateValidation(financialYear) {
    const dateControl = this.materialForm.get('po_date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDatesForDateTime(dateControl, financialYear);
    this.minDate = formattedMinDate;
    this.maxDate = formattedMaxDate;
  }

  setupValueChanges() {
    const cartArray = this.getCart();
    cartArray.controls.forEach((cartItem, index) => {
      this.subscriptions.push(
        cartItem.valueChanges.subscribe((value) => {
          this.isFormCartInvalid = false;
        })
      );
    });
  }

  prefixNo: any;
  getprefix() {
    this.purchaseService.getPurchaseOrderPrefix().subscribe((res: any) => {
      console.log(res);
      if (res.success == true) {
        this.prefixNo = res.data; // 21-5
        this.materialForm.get('material_inward_no').patchValue(this.prefixNo[0]?.id);
      } else {
        this.toastrService.error(res.msg)
      }
    }, err => {
      this.toastrService.error(err.error.msg)
    })
  }
  displaySupplierName(supplierId: number): void {
    // this.filteredSuppliers
    //   .pipe(
    //     tap(data => console.log('Data emitted:', data)), // Add this line to check emitted data
    //     map(suppliers => suppliers.filter(supplier => supplier.id === supplierId))
    //   )
    //   .subscribe(matchedSuppliers => {
    //     if (matchedSuppliers.length > 0) {
    //       this.supplierControl.setValue(matchedSuppliers[0].name);
    //     }
    //   });
  }
  get supplier() {
    return this.materialForm.get('party') as FormControl;
  }
  material_inward_cart(): FormGroup {
    return this.fb.group({
      barcode: (''),
      qty: (1),
      po_qty: (1),
      // unit_cost: (''),
      mrp: (0),
      // discount:new FormControl('',[Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      // tax: (''),
      // landing_cost: (''),
      // total: (''),
      // discount_type:(''),
      // additional_discount:new FormControl(0,[Validators.pattern(/^[0-9]*$/)])
    })
  }
  udateCart(add: any): FormArray {
    // let formarr = new FormArray([]);
    const formarr = this.materialForm.get('material_inward_cart') as FormArray;
    add.forEach((j: any, i) => {
      formarr.push(this.fb.group({
        barcode: j.barcode.id,
        qty: j.qty,
        po_qty: j?.po_qty,
        // unit_cost: j?.unit_cost ||0,
        mrp: j.mrp,
        // discount: j.discount,
        // tax: j.tax,
        // landing_cost: j.landing_cost,
        // total: j.total,
        // discount_type:j.discount_type,
        // additional_discount:j.additional_discount
      }))
      this.barcode[i] = j.barcode.sku;
      this.productName[i] = j.barcode.product_title;
      this.myControls.push(new FormControl(j?.barcode?.product_title));
    })
    return formarr
  }
  getCart(): FormArray {
    return this.materialForm.get('material_inward_cart') as FormArray;
  }
  isCart = false;
  addCart() {
    this.getCart().push(this.material_inward_cart());
    this.isCart = false;
    this.setupValueChanges();
  }
  removeCart(i: any) {
    this.getCart().removeAt(i);
    if (this.materialForm?.value?.material_inward_cart?.length == 0) {
      this.isCart = true
    }
  }
  supplierList: any;

  getSuuplier(query) {
    this.purchaseService.getSupplier(query).pipe(debounceTime(2000)).subscribe((res: any) => {
      this.suppliers = res;
      this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value, true))
      );
    })
  }

  purchaseList: any;
  getPurchase() {
    this.purchaseService.getPurchase().subscribe(res => {
      this.purchaseList = res;
      // console.log(this.purchaseList);
    })
  }
  supplierAddress: any;
  selectedAddressBilling: any;
  selectedAddressShipping: any;
  selectBatch: any;
  supplierId: any;
  oncheck(event: any) {
    // console.log(event);
    const selectedItemId = event;
    // console.log(selectedItemId);
    this.supplierId = event;
    //call detail api
    this.contactService.getSupplierById(selectedItemId).subscribe(res => {
      // console.log(res);
      this.getVariant('', '', '')
      this.supplierAddress = res;
      console.log(this.selectedAddressBilling);
      this.supplierAddress.address.map((res: any) => {
        if (res.address_type == 'Billing') {
          this.selectedAddressBilling = res
          console.log(this.selectedAddressBilling);
        } else if (res.address_type == 'Shipping') {
          this.selectedAddressShipping = res
          console.log(this.selectedAddressShipping);
        }
      })

    })

    if (this.getresbyId.cart.length >= 0) {
      const variants = this.materialForm.get('material_inward_cart') as FormArray;
      variants.clear();
      this.addCart();
    }
    this.setupValueChanges();
    this.materialForm.patchValue({
      party: selectedItemId
    });
  }


  selectedAddress: string = ''
  // oncheckVariant(event: any, index) {
  //   const selectedItemId = event.id;
  //   // console.log(selectedItemId);

  //  this.contactService.getSupplierById(selectedItemId).subscribe(res=>{
  //   // console.log(res);
  //   this.supplierAddress=res;
  //   this.selectedAddress=this.supplierAddress.address[0];
  //   // console.log(this.selectedAddress);

  // })
  //   const barcode = (this.materialForm.get('material_inward_cart') as FormArray).at(index) as FormGroup;
  //   barcode.patchValue({
  //     barcode: selectedItemId
  //   });
  // }

  selectedProductName: any;
  oncheckVariant(event: any, index) {
    const selectedItemId = event.id;
    console.log(event);
    this.selectedProductName = event.product_title
    this.selectBatch = event.batch
    console.log(event.batch.length);
    const barcode = (this.materialForm.get('material_inward_cart') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      barcode: selectedItemId
    });

    if (event.batch.length > 0) {
      const barcode = (this.materialForm.get('material_inward_cart') as FormArray).at(index) as FormGroup;
      barcode.patchValue({
        mrp: event.batch[0]?.mrp || 0,
        qty: event.batch[0]?.stock || 1,
        po_qty: 1,
        // unit_cost: event.batch[0]?.cost_price || 0,
      });

      console.log(event.batch);
      this.isFormCartInvalid = false;
    } else {
      const barcode = (this.materialForm.get('material_inward_cart') as FormArray).at(index) as FormGroup;
      barcode.patchValue({
        mrp: event.batch[0]?.mrp || 0,
        qty: event.batch[0]?.stock || 0,
        po_qty: 0,
        // unit_cost: event.batch[0]?.cost_price || 0,
      });
    }
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
  selecBatchtModel(address: any, index: any) {
    const modal = document.getElementById('batchModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
    const barcode = (this.materialForm.get('material_inward_cart') as FormArray).at(index) as FormGroup;
    let taxRupee = (address?.purchase_rate * address?.purchase_tax) / 100
    console.log(taxRupee);
    let discountRupees = (address?.purchase_rate * address?.discount) / 100
    console.log(discountRupees);
    let landingCost = (address?.purchase_rate - discountRupees) + taxRupee;
    console.log(landingCost);
    barcode.patchValue({
      mrp: address?.mrp,
      po_qty: 1,
      qty: address?.stock,
      // unit_cost: address?.cost_price,
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
  getRes: any;
  loader = false;
  loaderCreate = false;
  loaderPrint = false;
  loaderDraft = false;
  formId: any;

  checkCartValidation() {
    const cartTotal = this.calculateTotal();
    console.log(cartTotal);
    if(cartTotal === 0){
      this.toastrService.error('Please add the Product in the cart', '', { timeOut: 1000 });
      this.isFormCartInvalid = true;
      return
    } else {
      this.isFormCartInvalid = false;
    }
  }

  checkCartValidationSync(): boolean {
    const cartTotal = this.calculateTotal();
    const isValid = cartTotal > 0;
    return isValid;
}

  submit(type: any) {
    this.checkCartValidation();
    if(this.checkCartValidationSync()){
    if (this.materialForm.valid) {
      if (type == 'new') {
        this.loaderCreate = true;
      } else if (type == 'save') {
        this.loader = true;
      }
      else if (type == 'print') {
        this.loaderPrint = true;
      } else if (type == 'draft') {
        this.loaderDraft = true;
      }

      let formdata: any = new FormData();
      formdata.append('party', this.materialForm.get('party')?.value);
      formdata.append('purchase_order', this.materialForm.get('purchase_order')?.value);
      formdata.append('po_date', this.materialForm.get('po_date')?.value);
      formdata.append('material_inward_date', this.materialForm.get('material_inward_date')?.value);
      // formdata.append('material_inward_no', this.materialForm.get('material_inward_no')?.value);
      // 21-5
      if (this.isStatusDraft) {
        formdata.append('material_inward_no', this.materialForm.get('material_inward_no')?.value);
      }
      // end
      formdata.append('shipping_note', this.materialForm.get('shipping_note')?.value);
      formdata.append('recieved_by', this.materialForm.get('recieved_by')?.value);
      formdata.append('note', this.materialForm.get('note')?.value);
      formdata.append('total', this.materialForm.get('total')?.value);
      formdata.append('product_type', this.materialForm.get('product_type')?.value);
      if (type == 'draft') {
        formdata.append('status', 'Draft');
      }
      // nested addrs data 
      // const cartArray = this.materialForm.get('material_inward_cart') as FormArray;
      // const cartData = [];
      // cartArray.controls.forEach((address) => {
      //   const cartGroup = address as FormGroup;
      //   const cartObject = {};
      //   Object.keys(cartGroup.controls).forEach((key) => {
      //     const control = cartGroup.controls[key];
      //     cartObject[key] = control.value;
      //   });
      //   cartData.push(cartObject);
      // });
      // formdata.append('material_inward_cart', JSON.stringify(cartData));
      const cartArray = this.materialForm.get('material_inward_cart') as FormArray;
      const cartData = [];
      cartArray.controls.forEach((address) => {
        const cartGroup = address as FormGroup;
        const cartObject = {};
        Object.keys(cartGroup.controls).forEach((key) => {
          const control = cartGroup.controls[key];
          // Convert the value to an integer if it's a number
          if (!isNaN(control.value)) {
            cartObject[key] = parseInt(control.value, 10);
          } else {
            cartObject[key] = control.value;
          }
        });

        cartData.push(cartObject);
      });
      formdata.append('material_inward_cart', JSON.stringify(cartData));
      this.purchaseService.updateMaterial(formdata, this.id).subscribe(res => {
        // console.log(res);
        this.getRes = res;
        if (this.getRes.success) {
          if (type == 'new') {
            this.loaderCreate = false;
            this.materialForm.reset()
            this.ngOnInit()
            this.supplierControl.reset()
          } else if (type == 'print') {
            this.loaderPrint = false;
            this.toastrService.success(this.getRes.msg, '', { timeOut: 2000, });
            this.loaderPrint = false;
            this.router.navigate(['//purchase/material-InwardDetails/' + this.id])
            // this.openDialog()

            // setTimeout(() => {
            //   // this.materialForm.reset()
            //   // this.ngOnInit()
            //   this.supplierControl.reset();
            // }, 3000);
          }
          else if (type == 'draft') {
            this.loaderDraft = false;
            this.toastrService.success(this.getRes.msg, '', { timeOut: 1000, });
            this.router.navigate(['//purchase/material-Inward-list'])
          }
          else {
            this.loader = false;
            this.toastrService.success(this.getRes.msg);
            this.router.navigate(['//purchase/material-Inward-list']);
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
      this.materialForm.markAllAsTouched();
      this.toastrService.error('Please Fill All The Required Fields', '', { timeOut: 1000 })
    }
  }
  }

  openDialog() {
    this.dialog.open(PrintMaterialInwardComponent, {
      height: '100%',
      data: this.id
    });
  }

  discountt(index: number) {
    return this.getCart().controls[index].get('discount');
  }
  additional_discount(index: number) {
    return this.getCart().controls[index].get('additional_discount')
  }
  get material_inward_date() {
    return this.materialForm.get('material_inward_date');
  }
  get material_inward_no() {
    return this.materialForm.get('material_inward_no');
  }
  get recieved_by() {
    return this.materialForm.get('recieved_by');
  }
  get shipping_note() {
    return this.materialForm.get('shipping_note');
  }
  get purchase_order() {
    return this.materialForm.get('purchase_order');
  }
  private _filter(value: string | number, include: boolean): any[] {
    // console.log(value);
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredSuppliers = include
      ? this.suppliers.filter(supplier => supplier.name.toLowerCase().includes(filterValue) || supplier.company_name.toLowerCase().includes(filterValue))
      : this.suppliers.filter(supplier => !supplier.name.toLowerCase().includes(filterValue) || supplier.company_name.toLowerCase().includes(filterValue));
    if (!include && filteredSuppliers.length === 0) {
      // console.log("No results found");
      filteredSuppliers.push({ name: "No data found" }); // Add a dummy entry for displaying "No data found"
    }
    return filteredSuppliers;
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
    // console.log(index);
    // console.log(value?.sku);
    this.barcode[index] = value.sku;
    // console.log(this.barcode[index]);
    // console.log(this.barcode);

    this.v_id = value.id;
    const barcode = (this.materialForm.get('material_inward_cart') as FormArray).at(index) as FormGroup;
    barcode.patchValue({
      barcode: value.id
    });
    // this.searchProduct('someQuery', '');
    this.getVariant('', '', '')
  };
  staticValue: string = 'Static Value';
  searchs: any[] = [];
  productName: any[] = [];
  isProduct = true;
  isSearch = false;
  searchProduct(event: any, index: any) {
    // console.log(event);
    // const searchValue = event.target.value;
    // console.log(searchValue);
    this.isSearch = true;
    if (event) {
      this.purchaseService.searchProduct(event).subscribe((res: any) => {
        this.searchs = res;
        this.isSearch = false;
        // this.productOption = res;
        // console.log(this.searchs);
        this.productName[index] = this.searchs[0].product_title;
        // console.log(this.productName);
        this.check = true;
        const barcode = (this.materialForm.get('material_inward_cart') as FormArray).at(index) as FormGroup;
        barcode.patchValue({
          barcode: this.searchs[0].id
        });
      });
    } else {
      this.searchs = [];
    }
  }
  open() {
    this.isProduct = false
  }
  calculateTotalQty(): number {
    let totalQty = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const qtyControl = this.getCart().controls[i].get('qty');
      if (qtyControl) {
        totalQty += +qtyControl.value;
      }
    }
    return totalQty;
  }
  calculateTotalPOQty(): number {
    let totalQty = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const qtyControl = this.getCart().controls[i].get('po_qty');
      if (qtyControl) {
        totalQty += +qtyControl.value;
      }
    }
    return totalQty;
  }
  calculateTotalMrp(): number {
    let totalMrp = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const mrpControl = this.getCart().controls[i].get('mrp');
      if (mrpControl) {
        totalMrp += +mrpControl.value;
      }
    }
    return totalMrp;
  }
  calculateTotalUnitCost(): number {
    let totalunitCost = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const unitCostControl = this.getCart().controls[i].get('unit_cost') || 0;
      if (unitCostControl) {
        totalunitCost += +unitCostControl.value;
      }
    }
    return totalunitCost;
  }
  // calculateTotalDiscount(): number {
  //   let totalDiscount = 0;
  //   for (let i = 0; i < this.getCart().controls.length; i++) {
  //     const discountControl = this.getCart().controls[i].get('discount');
  //     if (discountControl) {
  //       totalDiscount += +discountControl.value;
  //     }
  //   }
  //   return totalDiscount;
  // }
  // calculateTotalPurchase(): number {
  //   let totalPurchase = 0;
  //   for (let i = 0; i < this.getCart().controls.length; i++) {
  //     const purchaseControl = this.getCart().controls[i].get('purchase_rate');
  //     if (purchaseControl) {
  //       totalPurchase += +purchaseControl.value;
  //     }
  //   }
  //   return totalPurchase;
  // }
  // calculateTotalTax(): number {
  //   let totalTax = 0;
  //   for (let i = 0; i < this.getCart().controls.length; i++) {
  //     const taxControl = this.getCart().controls[i].get('tax');
  //     if (taxControl) {
  //       totalTax += +taxControl.value;
  //     }
  //   }
  //   return totalTax;
  // }
  // calculateTotalLandingCost(): number {
  //   let totalLandingCost = 0;
  //   for (let i = 0; i < this.getCart().controls.length; i++) {
  //     const landingControl = this.getCart().controls[i].get('landing_cost');
  //     if (landingControl) {
  //       totalLandingCost += +landingControl.value;
  //     }
  //   }
  //   return totalLandingCost;
  // }
  // // subTotal
  // calculateSubtotal(): number {
  //   let subtotal = 0;
  //   for (let i = 0; i < this.getCart().controls.length; i++) {
  //     const qtyControl = this.getCart().controls[i].get('qty');
  //     const mrpControl = this.getCart().controls[i].get('mrp');

  //     if (qtyControl && mrpControl) {
  //       const qty = +qtyControl.value;
  //       const mrp = +mrpControl.value;

  //       const itemSubtotal = mrp * qty;
  //       subtotal += itemSubtotal;
  //     }
  //   }
  //   return subtotal;
  // }
  calculateTotal(): number {
    let total = 0;
    for (let i = 0; i < this.getCart().controls.length; i++) {
      const qtyControl = this.getCart().controls[i].get('qty');
      const mrpControl = this.getCart().controls[i].get('mrp') || 0;
      if (qtyControl && mrpControl) {
        const qty = +qtyControl.value;
        const mrp = +mrpControl.value;
        const subtotal = mrp * qty;
        total += subtotal;
      }
    }
    return total;
  }
  calculateTotalEveryIndex(index: number): number {
    const cartItem = this.getCart().controls[index];
    const qty = +cartItem.get('qty').value;
    const unit_cost = +cartItem.get('unit_cost').value || 0;
    const subtotal = unit_cost * qty;
    return subtotal;
  }

  clearForm() {
    this.materialForm.reset();
    this.supplierControl.reset()
  }
  printForm(): void {
    const printContents = document.getElementById('purchaseForm').outerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  category: any;
  subcategory: any;
  searc: any;
  myControls: FormControl[] = [];
  variantList: any[] = [];
  getVariant(search: any, index: any, barcode: any) {
    this.isSearch = true;
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
      this.purchaseService.filterVariant(this.supplierId, this.category, this.subcategory, search).subscribe((res: any) => {
        console.log(res);
        this.isSearch = false;
        this.variantList = res;
        console.log(this.variantList);
        if (barcode === 'barcode') {
          this.oncheckVariant(res[0], index);
          this.myControls.push(new FormControl(res[0]?.product_title));
        }
        if (search) {
          //barcode patch
          this.searchs = res;
          this.productOption = res;
          // console.log(this.searchs);
          this.productName[index] = this.searchs[0]?.product_title;
          // console.log(this.productName);
          this.check = true;
          const barcode = (this.materialForm.get('material_inward_cart') as FormArray).at(index) as FormGroup;
          barcode.patchValue({
            barcode: this.searchs[0].id
          });
        }
      });
    }
    else {
      this.purchaseService.filterVariant(this.supplierId, this.category, this.subcategory, search).subscribe((res: any) => {
        console.log(res);
        this.isSearch = false;
        this.variantList = res;
        console.log(this.variantList);
        if (barcode === 'barcode') {
          this.oncheckVariant(res[0], index)
          this.myControls.push(new FormControl(res[0]?.product_title));
        }
        if (search) {
          //barcode patch
          this.searchs = res;
          this.productOption = res;
          // console.log(this.searchs);
          this.productName[index] = this.searchs[0]?.product_title;
          // console.log(this.productName);
          this.check = true;
          const barcode = (this.materialForm.get('material_inward_cart') as FormArray).at(index) as FormGroup;
          barcode.patchValue({
            barcode: this.searchs[0]?.id
          });
        }
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
    this.coreService.getSubcategoryByCategory(val).subscribe((res: any) => {
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
  //dropdown auto close stop
  onLabelClick(event: Event) {
    // Prevent the event from propagating to the dropdown menu
    event.stopPropagation();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
