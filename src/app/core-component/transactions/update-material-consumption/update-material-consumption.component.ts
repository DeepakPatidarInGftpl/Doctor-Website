import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, debounceTime, map, startWith } from 'rxjs';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { StockService } from 'src/app/Services/stockService/stock.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-update-material-consumption',
  templateUrl: './update-material-consumption.component.html',
  styleUrls: ['./update-material-consumption.component.scss']
})
export class UpdateMaterialConsumptionComponent implements OnInit {
  constructor(private fb: FormBuilder, private inventoryService: StockService,
    private transactionService: TransactionService, private Arout: ActivatedRoute, private toastr: ToastrService, private router: Router,
    private commonService: CommonServiceService) { }
  materialConsumptionForm!: FormGroup;

  get f() {
    return this.materialConsumptionForm.controls;
  }

  supplierControl = new FormControl();
  filteredSuppliers: Observable<any[]>;
  minDate: string = '';
  maxDate: string = '';
  //
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-indexed
    const day = now.getDate().toString().padStart(2, '0');

    const defaultDateTime = `${year}-${month}-${day}`;

    this.materialConsumptionForm = this.fb.group({
      user: new FormControl('', [Validators.required]),
      consumption_date: new FormControl(defaultDateTime, [Validators.required]),
      prefix: new FormControl('',),
      consumption_no: new FormControl('',),
      consumption_type: new FormControl('', [Validators.required]),
      remarks: new FormControl(''),
      barcode: new FormControl(''),
      qty: new FormControl(1),
      price: new FormControl(0,),
      total_action: new FormControl(0),
    })
    this.transactionService.getMaterialConsuptionById(this.id).subscribe((res: any) => {
      this.materialConsumptionForm.patchValue(res);
      this.materialConsumptionForm.get('user')?.patchValue(res.user?.id);
      this.materialConsumptionForm.get('barcode')?.patchValue(res.barcode?.id);

      // this.materialConsumptionForm.get('prefix')?.patchValue(res?.prefix?.id) // 20-5
      // this.materialConsumptionForm.get('consumption_no')?.patchValue(res?.consumption_no?.id) // 20-5
      this.supplierControl.setValue(res.user.username);
      this.barcodeControl.setValue(res.barcode.product_title + '-' + res.barcode.variant_name)
    })
    this.getprefix()

    this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );

    this.supplierControl.valueChanges.subscribe((res) => {
      if (res.length >= 3) {
        this.getUser(res);
      } else {
        this.userList = [];
        this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(this.supplierControl?.value, true))
        );
      }
    })

    const financialYear = localStorage.getItem('financialYear');
    this.materialDateValidation(financialYear);
  }

  prefixNo: any;
  getprefix() {
    this.transactionService.getMaterialConsuptionPrefix().subscribe((res: any) => {
      console.log(res);
      if (res.success == true) {
        this.prefixNo = res.data

      } else {
        this.toastr.error(res.msg)
      }
    }, err => {
      this.toastr.error(err.error.msg)
    })
  }

  materialDateValidation(financialYear) {
    const dateControl = this.materialConsumptionForm.get('consumption_date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear);
    this.minDate = formattedMinDate;
    this.maxDate = formattedMaxDate;
  }

  amounts: any = 0;
  taxs: any = 0;
  totals: any = 0;
  calculateTax() {
    if (this.taxs) {
      // let taxAmount = (this.amounts * this.taxs) / 100;
      let taxAmount = this.amounts - (this.amounts * (100 / (100 + this.taxs)))
      let total = this.amounts + taxAmount;
      this.totals = total.toFixed(2);
    } else {
      this.totals = this.amounts.toFixed(2)

    }

  }

  userList: any[] = [];
  getUser(query) {
    this.transactionService.getUser(query).pipe(debounceTime(2000)).subscribe((res: any) => {
      this.userList = res?.data;
      this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(this.supplierControl?.value, true))
      );
    })
  }

  private _filter(value: string | number, include: boolean): any[] {
    // console.log(value);
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredSuppliers = include
      ? this.userList.filter(supplier => supplier?.detail?.company_name?.toLowerCase().includes(filterValue))
      : this.userList.filter(supplier => !supplier?.detail?.company_name?.toLowerCase().includes(filterValue));
    if (!include && filteredSuppliers.length === 0) {
      filteredSuppliers.push({ username: "No data found" });
    }
    return filteredSuppliers;
  }

  oncheck(data: any) {
    console.log(data);
    this.materialConsumptionForm.patchValue({
      user: data
    })
  }
  get supplier() {
    return this.materialConsumptionForm.get('user') as FormControl;
  }
  addRes: any;
  dateError = null;
  loaders = false;
  submit() {
    if (this.materialConsumptionForm.valid) {
      this.loaders = true;
      const formdata = new FormData();

      formdata.append('user', this.materialConsumptionForm.get('user')?.value);
      formdata.append('consumption_date', this.materialConsumptionForm.get('consumption_date')?.value);
      formdata.append('prefix', this.materialConsumptionForm.get('prefix')?.value);
      formdata.append('consumption_no', this.materialConsumptionForm.get('consumption_no')?.value);
      formdata.append('consumption_type', this.materialConsumptionForm.get('consumption_type')?.value);
      formdata.append('remarks', this.materialConsumptionForm.get('remarks')?.value);
      formdata.append('barcode', this.materialConsumptionForm.get('barcode')?.value);
      formdata.append('qty', this.materialConsumptionForm.get('qty')?.value);
      formdata.append('price', this.materialConsumptionForm.get('price')?.value);
      formdata.append('total_action', this.materialConsumptionForm.get('total_action')?.value);
      this.transactionService.updateMaterialConsuption(formdata, this.id).subscribe(res => {
        // console.log(res);
        this.loaders = false;
        this.addRes = res
        if (this.addRes.success) {
          this.toastr.success(this.addRes.msg)
          this.materialConsumptionForm.reset()
          this.router.navigate(['//transaction/materialConsuption'])
        } else {
          this.loaders = false;
        }
      }, err => {
        this.loaders = false;
      })
    } else {
      this.materialConsumptionForm.markAllAsTouched()
      this.toastr.error('Please Fill All The Required Fields')
    }
  }

  get user() {
    return this.materialConsumptionForm.get('user')
  }
  get consumption_date() {
    return this.materialConsumptionForm.get('consumption_date')
  }
  get prefix() {
    return this.materialConsumptionForm.get('prefix')
  }
  get consumption_no() {
    return this.materialConsumptionForm.get('consumption_no')
  }
  get consumption_type() {
    return this.materialConsumptionForm.get('consumption_type')
  }
  get remarks() {
    return this.materialConsumptionForm.get('remarks')
  }
  get barcode() {
    return this.materialConsumptionForm.get('barcode')
  }
  get qty() {
    return this.materialConsumptionForm.get('qty')
  }
  get price() {
    return this.materialConsumptionForm.get('price')
  }
  get total_action() {
    return this.materialConsumptionForm.get('total_action')
  }
  variantList: any[] = [];
  barcodeControl = new FormControl('');
  getVariant(search: any) {
    this.inventoryService.filterVariant('', '', search).subscribe((res: any) => {
      console.log(res);
      this.variantList = res;
      console.log(this.variantList);
    });
  }
  oncheckProduct(product: any) {
    console.log(product);

    this.materialConsumptionForm.get('barcode')?.patchValue(product?.id)
  }
}

