import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, debounceTime, map, startWith } from 'rxjs';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { StockService } from 'src/app/Services/stockService/stock.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-add-material-consumption',
  templateUrl: './add-material-consumption.component.html',
  styleUrls: ['./add-material-consumption.component.scss']
})
export class AddMaterialConsumptionComponent implements OnInit {
  constructor(private fb: FormBuilder, private inventoryService: StockService,
    private transactionService: TransactionService, private purchaseService: PurchaseServiceService, private toastr: ToastrService, private router: Router) { }
  materialConsumptionForm!: FormGroup;

  get f() {
    return this.materialConsumptionForm.controls;
  }

  supplierControl = new FormControl();
  filteredSuppliers: Observable<any[]>;
  //
  billControl = new FormControl();

  ngOnInit(): void {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-indexed
    const day = now.getDate().toString().padStart(2, '0');

    const defaultDateTime = `${year}-${month}-${day}`;

    this.materialConsumptionForm = this.fb.group({
      user: new FormControl('', [Validators.required]),
      consumption_date: new FormControl(defaultDateTime, [Validators.required]),
      prefix: new FormControl('', [Validators.required]),
      consumption_no: new FormControl('',),
      consumption_type: new FormControl('', [Validators.required]),
      remarks: new FormControl(''),
      barcode: new FormControl(''),
      qty: new FormControl(1),
      price: new FormControl(0,),
      total_action: new FormControl(0),
    })

    this.getprefix()

    this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );

    this.supplierControl.valueChanges.subscribe((res) => {
      if (res.length >= 3) {
        this.getSupplier(res);
      } else {
        this.userList = [];
        this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value, true))
        );
      }
    })
  }

  prefixNo: any;
  getprefix() {
    this.transactionService.getMaterialConsuptionPrefix().subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        // this.prefixNo = res.prefix;
        this.prefixNo = res?.data;
        this.materialConsumptionForm.get('consumption_no').patchValue(this.prefixNo[0]?.id);
        this.materialConsumptionForm.get('prefix').patchValue(this.prefixNo[0]?.id);
      } else {
        this.toastr.error(res.msg);
      }
    }, err => {
      this.toastr.error(err.error.msg)
    })
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
  getSupplier(query) {
    this.transactionService.getUser(query).pipe(debounceTime(2000)).subscribe((res: any) => {
      this.userList = res?.data;
      this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value, true))
      );
    })
  }

  private _filter(value: string | number, include: boolean): any[] {
    // console.log(value);
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredSuppliers = include
      ? this.userList.filter(supplier => supplier.username.toLowerCase().includes(filterValue))
      : this.userList.filter(supplier => !supplier.username.toLowerCase().includes(filterValue));
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
      this.transactionService.addMaterialConsuption(formdata).subscribe(res => {
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

