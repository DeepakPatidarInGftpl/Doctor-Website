import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { PosDashboardService } from 'src/app/Services/pos-dashboard.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-add-reciept-voucher',
  templateUrl: './add-reciept-voucher.component.html',
  styleUrls: ['./add-reciept-voucher.component.scss']
})
export class AddRecieptVoucherComponent implements OnInit {

  constructor(private fb: FormBuilder, private posService: PosDashboardService, private toastr: ToastrService, private router: Router,
    private transactionService: TransactionService) { }

  customerControlName = 'customer';
  customerControl = new FormControl();
  filteredCustomer: Observable<any[]>;

  // payer 
  payerControl = new FormControl();
  filteredPayer: Observable<any[]>;
  //sale bill
  saleBillControl = new FormControl();
  filteredsaleBill: Observable<any[]>;

  recieptVoucherForm!: FormGroup;
  get h() {
    return this.recieptVoucherForm.controls;
  }
  recieptVoucherBankForm!: FormGroup;
  get g() {
    return this.recieptVoucherBankForm.controls;
  }
  myControls: FormArray;

  ngOnInit(): void {
    const defaultDate = new Date().toISOString().split('T')[0];
    this.myControls = new FormArray([]);

    this.recieptVoucherForm = this.fb.group({
      receipt_type: new FormControl('Cash'),
      customer: new FormControl('', [Validators.required]),
      date: new FormControl(defaultDate, ),
      receipt_voucher_no: new FormControl('',),
      mode_type: new FormControl(''),
      amount: new FormControl(0),
      note: new FormControl(''),
      payer: new FormControl('',[Validators.required]), // account foreign key
      // against bill
      receipt_voucher_cart: this.fb.array([]),
    })

    this.recieptVoucherBankForm = this.fb.group({
      receipt_type: new FormControl('Bank'),
      customer: new FormControl('', [Validators.required]),
      date: new FormControl(defaultDate, ),
      receipt_voucher_no: new FormControl(''),
      mode_type: new FormControl('',),
      amount: new FormControl(0),
      note: new FormControl(''),
      payer: new FormControl('',[Validators.required]), // account foreign key
      // against bill
      bank_payment: new FormControl(''),
      transaction_id: new FormControl(''),
      transaction_date: new FormControl(defaultDate),
      receipt_voucher_cart: this.fb.array([]),
    })

    this.filteredCustomer = this.customerControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );
    //payer
    this.filteredPayer = this.payerControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterr(value, true))
    );

    this.getAccount();
    this.getSaleBill();
    this.getprefix();
  }
  prefixNo: any;
  getprefix() {
    this.transactionService.getReceiptVoucherPrefix().subscribe((res: any) => {
      console.log(res);
      if (res.success == true) {
        this.prefixNo = res.prefix
      } else {
        this.toastr.error(res.msg)
      }
    }, err => {
      this.toastr.error(err.error.msg)
    })
  }
  //
  cart(): FormGroup {
    return this.fb.group({
      sale_bill: new FormControl(0),
      original_amount: new FormControl(0),
      paid_amount: new FormControl(0),
      pending_amount: new FormControl(0),
      payment: new FormControl(0),
    })
  }
  getCart(): FormArray {
    return this.recieptVoucherForm.get('receipt_voucher_cart') as FormArray;
  }
  addCart() {
    this.getCart().push(this.cart());
    this.myControls.push(new FormControl(''));
    this.isCart = false;
  }
  isCart = false;
  removeCart(i: any) {
    this.getCart().removeAt(i);
    if (i == 0) {
      this.isCart = true;
    }
  }
  // bank
  getCartBank(): FormArray {
    return this.recieptVoucherBankForm.get('receipt_voucher_cart') as FormArray;
  }
  isCartBank=false;
  addCartBank() {
    this.getCartBank().push(this.cart())
    this.myControls.push(new FormControl(''));
    this.isCartBank=false;
  }
  removeCartBank(i: any) {
    this.getCartBank().removeAt(i);
    if(this.recieptVoucherBankForm?.value?.receipt_voucher_cart?.length==0){
      this.isCartBank=true;
    }
  }

  isAgainstBill = false;
  setRadioValue(value: string) {
    this.recieptVoucherForm.get('mode_type').setValue(value);
    if (value == 'Against Bill') {
      this.isAgainstBill = true;
      const cart = this.recieptVoucherForm.get('receipt_voucher_cart') as FormArray;
      cart.clear();
      this.addCart();
    } else {
      this.isAgainstBill = false;
    }
  }
  isAgainstBillBank = false;
  setRadioValue1(value: string) {
    this.recieptVoucherBankForm.get('mode_type').setValue(value);
    if (value == 'Against Bill') {
      this.isAgainstBillBank = true;
      const cart = this.recieptVoucherBankForm.get('receipt_voucher_cart') as FormArray;
      cart.clear();
      this.addCartBank();
    } else {
      this.isAgainstBillBank = false;
    }
  }
  isLastCart(index: number): boolean {
    const cartControls = this.getCart().controls;
    return index === cartControls.length - 1;
  }
  isLastCartBank(index: number): boolean {
    const cartControls = this.getCartBank().controls;
    return index === cartControls.length - 1;
  }

  accountList: any[] = [];
  getAccount() {
    this.transactionService.getAccount().subscribe((res: any) => {
      this.accountList = res;
    })
  }
  saleBillList: any[] = [];
  filterSaleBill: any[] = [];
  getSaleBill() {
    this.transactionService.getSalesBill().subscribe((res: any) => {
      this.saleBillList = res;
      this.filterSaleBill = res;
    })
  }

  getFilter(data: any) {
    this.filterSaleBill = this.saleBillList.filter(salebill => {
      if (salebill && salebill?.customer_bill_no) {
        const aliasLower = salebill?.customer_bill_no.toLowerCase();
        return aliasLower.includes(data);
      }
      return false;
    });
    console.log(this.filterSaleBill);
  }

  private _filter(value: string | number, include: boolean): any[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredCustomer = include
      ? this.accountList.filter(account => account?.account_id?.toLowerCase().includes(filterValue))
      : this.accountList.filter(account => !account?.account_id?.toLowerCase().includes(filterValue));
    if (!include && filteredCustomer.length === 0) {
      filteredCustomer.push({ account: "No data found" });
    }
    return filteredCustomer;
  }

  private _filterr(value: string | number, include: boolean): any[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredCustomer = include
      ? this.accountList.filter(account => account?.account_id?.toLowerCase().includes(filterValue))
      : this.accountList.filter(account => !account?.account_id?.toLowerCase().includes(filterValue));
    if (!include && filteredCustomer.length === 0) {
      filteredCustomer.push({ account: "No data found" });
    }
    return filteredCustomer;
  }
  get customer() {
    return this.recieptVoucherForm.get('customer') as FormControl;
  }
  oncheck(data: any) {
    const selectedItemId = data.id;
    this.recieptVoucherForm.patchValue({
      customer: selectedItemId
    });
  }
  oncheck1(data: any) {
    const selectedItemId = data.id;
    this.recieptVoucherForm.patchValue({
      payer: selectedItemId
    });
  }
  oncheck3(data: any, index: number) {
    console.log(data);
    const cart = (this.recieptVoucherForm.get('receipt_voucher_cart') as FormArray).at(index) as FormGroup;
    cart.patchValue({
      sale_bill: data?.id,
      original_amount: data?.original_amount,
      paid_amount: data?.paid_amount,
      pending_amount: data?.pending_amount,
    });
  }
  //bank
  oncheckBank(data: any) {
    const selectedItemId = data.id;
    this.recieptVoucherBankForm.patchValue({
      customer: selectedItemId
    });
  }
  oncheckBank1(data: any) {
    const selectedItemId = data.id;
    this.recieptVoucherBankForm.patchValue({
      payer: selectedItemId
    });
  }
  oncheckBank3(data: any, index: number) {
    const cart = (this.recieptVoucherBankForm.get('receipt_voucher_cart') as FormArray).at(index) as FormGroup;
    cart.patchValue({
      sale_bill: data?.id,
      original_amount: data?.original_amount,
      paid_amount: data?.paid_amount,
      pending_amount: data?.pending_amount,
    });
  }

  isBank = false;
  isCash = true;
  toggleBank() {
    this.isBank = true;
    this.isCash = false;
    this.customerControl.reset();
    this.payerControl.reset();
  }
  toggleCash() {
    this.isBank = false;
    this.isCash = true;
    this.customerControl.reset();
    this.payerControl.reset();
  }

  loaders = false
  addRes: any;
  onSubmit() {
    console.log(this.recieptVoucherForm.value);
    if (this.recieptVoucherForm.valid) {
      const formdata = new FormData();
      formdata.append('receipt_type', this.recieptVoucherForm.get('receipt_type')?.value);
      formdata.append('customer', this.recieptVoucherForm.get('customer')?.value);
      formdata.append('date', this.recieptVoucherForm.get('date')?.value);
      formdata.append('receipt_voucher_no', this.recieptVoucherForm.get('receipt_voucher_no')?.value);
      formdata.append('mode_type', this.recieptVoucherForm.get('mode_type')?.value);
      formdata.append('amount', this.recieptVoucherForm.get('amount')?.value);
      formdata.append('note', this.recieptVoucherForm.get('note')?.value);
      formdata.append('payer', this.recieptVoucherForm.get('payer')?.value);
      const cartArray = this.recieptVoucherForm.get('receipt_voucher_cart') as FormArray;
      const cartData = [];
      cartArray.controls.forEach((address) => {
        const cartGroup = address as FormGroup;
        const cartObject = {};
        Object.keys(cartGroup.controls).forEach((key) => {
          const control = cartGroup.controls[key];
          // Convert the value to an integer if it's a number
          if (!isNaN(control.value)) {
            cartObject[key] = parseFloat(control.value);
          } else {
            cartObject[key] = control.value;
          }
        });
        cartData.push(cartObject);
      });
      formdata.append('receipt_voucher_cart', JSON.stringify(cartData));
      this.loaders = true;
      this.transactionService.addRecieptVoucher(formdata).subscribe(
        (res: any) => {
          this.loaders = false;
          if (res.success) {
            this.toastr.success(res.msg);
            this.router.navigate(['//transaction/recieptVoucherList'])
          } else {
            this.loaders = false
            // this.toastr.error(res.msg);
            if(res.error?.mode_type){
              this.toastr.error('Select Mode Type',res.error?.mode_type[0])
              this.modeError=res.error?.mode_type[0]
              setTimeout(() => {
                this.modeError=''
              }, 5000);
            }
          }
        },
        (err) => {
          this.loaders = false;
        }
      );
    } else {
      // console.log('error');
      this.recieptVoucherForm.markAllAsTouched();
      this.toastr.error('Please Fill All The Required Fields')
    }
  }
  modeError:any;
  onBankSubmit() {
    console.log(this.recieptVoucherBankForm.value);
    if (this.recieptVoucherBankForm.valid) {
      const formdata = new FormData();
      formdata.append('receipt_type', this.recieptVoucherBankForm.get('receipt_type')?.value);
      formdata.append('customer', this.recieptVoucherBankForm.get('customer')?.value);
      formdata.append('date', this.recieptVoucherBankForm.get('date')?.value);
      formdata.append('receipt_voucher_no', this.recieptVoucherBankForm.get('receipt_voucher_no')?.value);
      formdata.append('mode_type', this.recieptVoucherBankForm.get('mode_type')?.value);
      formdata.append('amount', this.recieptVoucherBankForm.get('amount')?.value);
      formdata.append('note', this.recieptVoucherBankForm.get('note')?.value);
      formdata.append('payer', this.recieptVoucherBankForm.get('payer')?.value);

      formdata.append('bank_payment', this.recieptVoucherBankForm.get('bank_payment')?.value);
      formdata.append('transaction_id', this.recieptVoucherBankForm.get('transaction_id')?.value);
      formdata.append('transaction_date', this.recieptVoucherBankForm.get('transaction_date')?.value);


      const cartArray = this.recieptVoucherBankForm.get('receipt_voucher_cart') as FormArray;
      const cartData = [];
      cartArray.controls.forEach((address) => {
        const cartGroup = address as FormGroup;
        const cartObject = {};
        Object.keys(cartGroup.controls).forEach((key) => {
          const control = cartGroup.controls[key];
          // Convert the value to an integer if it's a number
          if (!isNaN(control.value)) {
            cartObject[key] = parseFloat(control.value);
          } else {
            cartObject[key] = control.value;
          }
        });
        cartData.push(cartObject);
      });
      formdata.append('receipt_voucher_cart', JSON.stringify(cartData));
      this.loaders = true;
      this.transactionService.addRecieptVoucher(formdata).subscribe(
        (res: any) => {
          this.loaders = false;
          if (res.success) {
            this.toastr.success(res.msg);
            this.router.navigate(['//transaction/recieptVoucherList'])
          } else {
            this.loaders = false
            // this.toastr.error(res.msg);
            if(res.error?.mode_type){
              this.toastr.error('Select Mode Type',res.error?.mode_type[0])
              this.modeError=res.error?.mode_type[0]
              setTimeout(() => {
                this.modeError=''
              }, 5000);
            }
          }
        },
        (err) => {
          this.loaders = false;
        }
      );
    } else {
      console.log('invalid');
      this.recieptVoucherBankForm.markAllAsTouched();
      this.toastr.error('Please Fill All The Required Fields')
    }
  }
  //bank
  get date1() {
    return this.recieptVoucherBankForm.get('date')
  }
  get payer1() {
    return this.recieptVoucherBankForm.get('payer')
  }
  get amount1() {
    return this.recieptVoucherBankForm.get('amount')
  }
  get description1() {
    return this.recieptVoucherBankForm.get('note')
  }
  get receipt_voucher_no1() {
    return this.recieptVoucherBankForm.get('receipt_voucher_no')
  }
  get mode_type1() {
    return this.recieptVoucherBankForm.get('mode_type')
  }
  sale_bill1(index: number) {
    return this.getCartBank().controls[index].get('sale_bill');
  }
  original_amount1(index: number) {
    return this.getCartBank().controls[index].get('original_amount');
  }
  paid_amount1(index: number) {
    return this.getCartBank().controls[index].get('paid_amount');
  }
  pending_amount1(index: number) {
    return this.getCartBank().controls[index].get('pending_amount');
  }
  payment1(index: number) {
    return this.getCartBank().controls[index].get('payment');
  }
  get bank_payment() {
    return this.recieptVoucherBankForm.get('bank_payment')
  }
  get transaction_id() {
    return this.recieptVoucherBankForm.get('transaction_id')
  }
  get transaction_date() {
    return this.recieptVoucherBankForm.get('transaction_date')
  }
  // bank end
  get date() {
    return this.recieptVoucherForm.get('date')
  }
  get payer() {
    return this.recieptVoucherForm.get('payer')
  }
  get amount() {
    return this.recieptVoucherForm.get('amount')
  }
  get description() {
    return this.recieptVoucherForm.get('note')
  }
  get receipt_voucher_no() {
    return this.recieptVoucherForm.get('receipt_voucher_no')
  }
  get mode_type() {
    return this.recieptVoucherForm.get('mode_type')
  }
  sale_bill(index: number) {
    return this.getCart().controls[index].get('sale_bill');
  }
  original_amount(index: number) {
    return this.getCart().controls[index].get('original_amount');
  }
  paid_amount(index: number) {
    return this.getCart().controls[index].get('paid_amount');
  }
  pending_amount(index: number) {
    return this.getCart().controls[index].get('pending_amount');
  }
  payment(index: number) {
    return this.getCart().controls[index].get('payment');
  }


}
