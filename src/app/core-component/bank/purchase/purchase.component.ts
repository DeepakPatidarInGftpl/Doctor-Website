import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, debounceTime, map, startWith } from 'rxjs';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { PosDashboardService } from 'src/app/Services/pos-dashboard.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

  constructor(private fb: FormBuilder, private posService: PosDashboardService, private toastr: ToastrService, private purchaseService: PurchaseServiceService, private router: Router) { }
  recieptAdvanceForm!: FormGroup
  get f() {
    return this.recieptAdvanceForm.controls;
  }
  recieptAgainstForm!: FormGroup

  get g() {
    return this.recieptAdvanceForm.controls;
  }
  supplierControlName = 'party';
  supplierControl = new FormControl();
  productOption: any[] = [];
  filteredOptions: Observable<any>;
  suppliers: any[] = [];
  filteredSuppliers: Observable<any[]>;

  ngOnInit(): void {
    this.recieptAdvanceForm = this.fb.group({
      party: new FormControl('', [Validators.required]),
      receipt_method: new FormControl('Advance'),
      payment_mode: new FormControl('', [Validators.required]),
      amount: new FormControl(0, [Validators.required]),
      description: new FormControl('', [Validators.required]),
      bill_no: new FormControl(''),
      card_detail: new FormGroup({
        payment_account: new FormControl("",),
        customer_bank_name: new FormControl('',),
        card_payment_amount: new FormControl('',),
        card_holder_name: new FormControl('',),
        cart_transactions_no: new FormControl('',),
      }),
      bank_detail: new FormGroup({
        payment_account: new FormControl(''),
        account_no: new FormControl('')
      }),
      upi_detail: new FormGroup({
        upi_no: new FormControl(''),
        payment_account: new FormControl('')
      }),
    })

    this.recieptAgainstForm = this.fb.group({
      customer: new FormControl('', [Validators.required]),
      receipt_method: new FormControl('Against Bill', [Validators.required]),
      payment_mode: new FormControl('', [Validators.required]),
      amount: new FormControl(0, [Validators.required]),
      description: new FormControl('', [Validators.required]),
      bill_no: new FormControl('',),
      card_detail: new FormGroup({
        payment_account: new FormControl("",),
        customer_bank_name: new FormControl('',),
        card_payment_amount: new FormControl('',),
        card_holder_name: new FormControl('',),
        cart_transactions_no: new FormControl('',),
      }),
      bank_detail: new FormGroup({
        payment_account: new FormControl(''),
        account_no: new FormControl('')
      }),
      upi_detail: new FormGroup({
        upi_no: new FormControl(''),
        payment_account: new FormControl('')
      }),
    })
    this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );

    this.supplierControl.valueChanges.subscribe((res) => {
      if (res.length >= 3) {
        this.getSuuplier(res);
      } else {
        this.suppliers = [];
        this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value, true))
        );
      }
    })
    this.getBank();
  }

  bankList: any
  getBank() {
    this.posService.getCompanyBank().subscribe(res => {
      this.bankList = res;
    })
  }
  private _filter(value: string | number, include: boolean): any[] {
    // console.log(value);
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredSuppliers = include
      ? this.suppliers.filter(supplier => supplier.name.toLowerCase().includes(filterValue))
      : this.suppliers.filter(supplier => !supplier.name.toLowerCase().includes(filterValue));
    if (!include && filteredSuppliers.length === 0) {
      // console.log("No results found");
      filteredSuppliers.push({ name: "No data found" }); // Add a dummy entry for displaying "No data found"
    }
    return filteredSuppliers;
  }

  get supplier() {
    return this.recieptAdvanceForm.get('party') as FormControl;
  }
  supplierList: any;

  getSuuplier(query) {
    this.purchaseService.getSupplier(query).pipe(debounceTime(2000)).subscribe((res: any) => {
      this.suppliers = res;
      // this.variants=res;
      this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value, true))
      );
    })
  }

  oncheck(event: any) {
    // console.log(event);
    const selectedItemId = event;
    // console.log(selectedItemId);
    this.getSles(selectedItemId)
    this.recieptAdvanceForm.patchValue({
      party: selectedItemId
    });
  }
  salesList: any;
  getSles(id: any) {
    this.posService.getReceiptOrder(id).subscribe(res => {
      this.salesList = res;
    })
  }
  loaders = false
  addRes: any;
  onSubmit() {
    // console.log(this.recieptAdvanceForm.value);
    if (this.recieptAdvanceForm.valid) {
      const formData = new FormData();
      formData.append('party', this.recieptAdvanceForm.get('party')?.value);
      formData.append('receipt_method', this.recieptAdvanceForm.get('receipt_method')?.value);
      formData.append('payment_mode', this.recieptAdvanceForm.get('payment_mode')?.value);
      formData.append('amount', this.recieptAdvanceForm.get('amount')?.value);
      formData.append('description', this.recieptAdvanceForm.get('description')?.value);
      formData.append('bill_no', this.recieptAdvanceForm.get('bill_no')?.value);

      const selectedPaymentMode = this.f['payment_mode'].value;
      switch (selectedPaymentMode) {
        case 'Card':
          formData.append('card_detail', JSON.stringify(this.f['card_detail'].value));
          break;
        case 'Bank':
          formData.append('bank_detail', JSON.stringify(this.f['bank_detail'].value));
          break;
        case 'UPI':
          formData.append('upi_detail', JSON.stringify(this.f['upi_detail'].value));
          break;
        default:
          break;
      }

      this.loaders = true;
      this.posService.purchasePayment(formData).subscribe(
        (res: any) => {
          this.loaders = false;
          if (res.isSuccess) {
            this.toastr.success(res.msg);
            // this.recieptAdvanceForm.reset();
            this.router.navigate(['//bank/purchase'])
            this.ngOnInit();
          } else {
            this.loaders = false
            this.toastr.error(res.msg);
          }
        },
        (err) => {
          this.loaders = false;
          this.toastr.error(err?.error?.payment_account[0], 'Payment Account');
          this.toastr.error(err?.error?.account_no[0], 'Account No.');
        }
      );
    } else {
      this.recieptAdvanceForm.markAllAsTouched();
      this.toastr.error('Please Fill All The Required Fields')
    }
  }
  onAgainstSubmit() {
    // console.log(this.recieptAdvanceForm.value);
    if (this.recieptAdvanceForm.valid) {
      const formData = new FormData();
      formData.append('party', this.recieptAdvanceForm.get('party')?.value);
      formData.append('receipt_method', this.recieptAdvanceForm.get('receipt_method')?.value);
      formData.append('payment_mode', this.recieptAdvanceForm.get('payment_mode')?.value);
      formData.append('amount', this.recieptAdvanceForm.get('amount')?.value);
      formData.append('description', this.recieptAdvanceForm.get('description')?.value);
      formData.append('bill_no', this.recieptAdvanceForm.get('bill_no')?.value);

      const selectedPaymentMode = this.f['payment_mode'].value;
      switch (selectedPaymentMode) {
        case 'Card':
          formData.append('card_detail', JSON.stringify(this.f['card_detail'].value));
          break;
        case 'Bank':
          formData.append('bank_detail', JSON.stringify(this.f['bank_detail'].value));
          break;
        case 'UPI':
          formData.append('upi_detail', JSON.stringify(this.f['upi_detail'].value));
          break;
        default:
          break;
      }

      this.loaders = true;
      this.posService.purchasePayment(formData).subscribe(
        (res: any) => {
          this.loaders = false;
          if (res.isSuccess) {
            this.toastr.success(res.msg);
            // this.recieptAdvanceForm.reset();
            this.router.navigate(['//bank/purchase'])
            this.ngOnInit();
          } else {
            this.loaders = false
            this.toastr.error(res.msg);
          }
        },
        (err) => {
          this.loaders = false;
          this.toastr.error(err?.error?.payment_account[0], 'Payment Account');
          this.toastr.error(err?.error?.account_no[0], 'Account No.');
        }
      );
    } else {
      this.recieptAdvanceForm.markAllAsTouched();
      this.toastr.error('Please Fill All The Required Fields')
    }
  }
  get receipt_method() {
    return this.recieptAdvanceForm.get('receipt_method')
  }
  get payment_mode() {
    return this.recieptAdvanceForm.get('payment_mode')
  }
  get amount() {
    return this.recieptAdvanceForm.get('amount')
  }
  get description() {
    return this.recieptAdvanceForm.get('description')
  }
  get bill_no() {
    return this.recieptAdvanceForm.get('bill_no')
  }
  get account() {
    return this.recieptAdvanceForm.get('account_no')
  }
  get accountAgainst() {
    return this.recieptAgainstForm.get('account_no')
  }
}
