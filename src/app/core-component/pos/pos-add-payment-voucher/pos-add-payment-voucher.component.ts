import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, debounceTime, map, startWith } from 'rxjs';
import { PosCartService } from 'src/app/Services/PosCart/pos-cart.service';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-pos-add-payment-voucher',
  templateUrl: './pos-add-payment-voucher.component.html',
  styleUrls: ['./pos-add-payment-voucher.component.scss']
})
export class PosAddPaymentVoucherComponent implements OnInit {

  supplierControl = new FormControl();
  filteredsupplier: Observable<any[]>;
  // payer 
  filteredPayer: Observable<any[]>;
  //sale bill
  saleBillControl = new FormControl();
  filteredsaleBill: Observable<any[]>;
  @Output() modalClose = new EventEmitter<any>();

  paymentVoucherForm!: FormGroup;
  get h() {
    return this.paymentVoucherForm.controls;
  }
  paymentVoucherBankForm!: FormGroup;
  minDate: string = '';
  maxDate: string = '';
  bankMinDate: string = '';
  bankMaxDate: string = '';
  transactionMinDate: string = '';
  transactionMaxDate: string = '';
  accountListData: any;
  get g() {
    return this.paymentVoucherBankForm.controls;
  }
  myControls: FormArray;
  debitNoteControl: FormArray;
  constructor(private fb: FormBuilder, private toastr: ToastrService,
    private router: Router, private transactionService: TransactionService,
    private commonService: CommonServiceService, private posCartService: PosCartService) { }

  ngOnInit(): void {
    const defaultDate = new Date().toISOString().split('T')[0];
    this.myControls = new FormArray([]);
    this.debitNoteControl = new FormArray([]);

    this.paymentVoucherForm = this.fb.group({
      // receipt_type: new FormControl('Cash'),
      payment_type: new FormControl('Cash'),
      supplier: new FormControl('', [Validators.required]),
      payment_account: new FormControl('', [Validators.required]),
      date: new FormControl(defaultDate,),
      payment_voucher_no: new FormControl(''),
      mode_type: new FormControl(''),
      amount: new FormControl(0),
      note: new FormControl(''),
      payment_voucher_cart: this.fb.array([]),
    })

    this.paymentVoucherBankForm = this.fb.group({
      // receipt_type: new FormControl('Bank'),
      payment_type: new FormControl('Bank'),
      supplier: new FormControl('', [Validators.required]),
      payment_account: new FormControl('', [Validators.required]),
      date: new FormControl(defaultDate),
      payment_voucher_no: new FormControl(''),
      mode_type: new FormControl(''),
      amount: new FormControl(0),
      note: new FormControl(''),
      // against bill
      bank_payment: new FormControl(''),
      transaction_id: new FormControl(''),
      transaction_date: new FormControl(defaultDate),
      payment_voucher_cart: this.fb.array([]),
    })

    this.filteredsupplier = this.supplierControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );

    const financialYear = localStorage.getItem('financialYear');
    this.dateValidation(financialYear);
    this.bankDateValidation(financialYear);
    this.bankTransactionDateValidation(financialYear);

    this.supplierControl.valueChanges.subscribe((res) => {
      if (res?.length >= 3) {
        this.getSupplier(res);
      } else {
        this.supplierList = [];
        this.filteredsupplier = this.supplierControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value, true))
        );
      }
    })

    this.getAccount();
    this.getPurchaseBill();
    this.getDebitNote()
    this.getprefix();
    this.getAccountByAlies('cash-in-hand');
  }

  dateValidation(financialYear) {
    const dateControl = this.paymentVoucherForm.get('date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear);
    this.minDate = formattedMinDate;
    this.maxDate = formattedMaxDate;
  }

  bankDateValidation(financialYear) {
    const dateControl = this.paymentVoucherBankForm.get('date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear);
    this.bankMinDate = formattedMinDate;
    this.bankMaxDate = formattedMaxDate;
  }

  bankTransactionDateValidation(financialYear) {
    const dateControl = this.paymentVoucherBankForm.get('transaction_date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear);
    this.transactionMinDate = formattedMinDate;
    this.transactionMaxDate = formattedMaxDate;
  }

  prefixNo: any;
  getprefix() {
    this.transactionService.getPaymentVoucherPrefix().subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        // this.prefixNo = res.prefix;
        this.prefixNo = res?.data;
        this.paymentVoucherForm.get('payment_voucher_no').patchValue(this.prefixNo[0]?.id);
        this.paymentVoucherBankForm.get('payment_voucher_no').patchValue(this.prefixNo[0]?.id);
      } else {
        this.toastr.error(res.msg);
      }
    }, err => {
      this.toastr.error(err.error.msg)
    })
  }

  cart(): FormGroup {
    return this.fb.group({
      purchase_bill: new FormControl(0),
      original_amount: new FormControl(0),
      paid_amount: new FormControl(0),
      pending_amount: new FormControl(0),
      payment: new FormControl(0),
      debit_note_cart: this.fb.array([])
    })
  }
  getCart(): FormArray {
    return this.paymentVoucherForm.get('payment_voucher_cart') as FormArray;
  }
  isCart = false;
  addCart() {
    this.getCart().push(this.cart())
    this.myControls.push(new FormControl(''));
    this.isCart = false;
  }
  removeCart(i: any) {
    this.getCart().removeAt(i);
    if (this.paymentVoucherForm?.value?.payment_voucher_cart?.length == 0) {
      this.isCart = true;
    }
  }

  // debit note cart
  debitNoteIntoCart(): FormGroup {
    return this.fb.group({
      debit_note: new FormControl(0),
      original_amount: new FormControl(0),
      redeem_amount: new FormControl(0),
      pending_amount: new FormControl(0),
      amount: new FormControl(0),
    })
  }
  // debit note cart form group 
  getDebitNoteCartForm1(i: any): FormArray {
    return this.getCart().at(i).get('debit_note_cart') as FormArray;
  }
  addDebitNoteCartForm1(i: any) {
    this.getDebitNoteCartForm1(i).push(this.debitNoteIntoCart());
    this.debitNoteControl.push(new FormControl(''));
  }
  removeDebitNoteForm1(e: any, i: any) {
    this.getDebitNoteCartForm1(e).removeAt(i);
    if (this.paymentVoucherForm?.value?.payment_voucher_cart[e]?.debit_note_cart?.length == 0) {
      this.isDebitNoteCart1[e] = false;
    }
  }
  // bank
  getCartBank(): FormArray {
    return this.paymentVoucherBankForm.get('payment_voucher_cart') as FormArray;
  }
  addCartBank() {
    this.getCartBank().push(this.cart())
    this.myControls.push(new FormControl(''));
    this.isCartBank = false;
  }
  isCartBank = false;
  removeCartBank(i: any) {
    this.getCartBank().removeAt(i);
    if (this.paymentVoucherBankForm?.value?.payment_voucher_cart?.length == 0) {
      this.isCartBank = true;
    }
  }
  // debit not cart
  getDebitNoteCartForm(i: any): FormArray {
    return this.getCartBank().at(i).get('debit_note_cart') as FormArray;
  }
  addDebitNoteCartForm(i: any) {
    this.getDebitNoteCartForm(i).push(this.debitNoteIntoCart());
    this.debitNoteControl.push(new FormControl(''));
  }
  removeDebitNoteForm(e: any, i: any) {
    this.getDebitNoteCartForm(e).removeAt(i);
    if (this.paymentVoucherBankForm?.value?.payment_voucher_cart[e]?.debit_note_cart?.length == 0) {
      this.isDebitNoteCart[e] = false;
    }
  }

  // end 
  isAgainstBill = false;
  setRadioValue(value: string) {
    this.paymentVoucherForm.get('mode_type').setValue(value);
    if (value == 'Against Bill') {
      this.isAgainstBill = true;
      const cart = this.paymentVoucherForm.get('payment_voucher_cart') as FormArray;
      cart.clear();
      this.addCart();
    } else {
      this.isAgainstBill = false;
    }
  }
  isAgainstBillBank = false;
  setRadioValue1(value: string) {
    this.paymentVoucherBankForm.get('mode_type').setValue(value);
    if (value == 'Against Bill') {
      this.isAgainstBillBank = true;
      const cart = this.paymentVoucherBankForm.get('payment_voucher_cart') as FormArray;
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
  //debit note Cart
  isLastDebitNote(cartIndex: number, rowIndex: number): boolean {
    const cartControl = this.getCartBank().at(cartIndex).get('debit_note_cart') as FormArray;
    return rowIndex === cartControl.length - 1;
  }
  isLastDebitNote1(cartIndex: number, rowIndex: number): boolean {
    const cartControl = this.getCart().at(cartIndex).get('debit_note_cart') as FormArray;
    return rowIndex === cartControl.length - 1;
  }
  isDebitNoteCart: boolean[] = [];
  debitNoteCartIndex(i: any) {
    this.isDebitNoteCart[i] = true;
    this.addDebitNoteCartForm(i)
  }
  // for cash
  isDebitNoteCart1: boolean[] = [];
  debitNoteCartIndex1(i: any) {
    this.isDebitNoteCart1[i] = true;
    this.addDebitNoteCartForm1(i);
  }
  // end
  supplierList: any[] = [];

  getSupplier(query) {
    this.transactionService.getSupplier(query).pipe(debounceTime(2000)).subscribe((res: any) => {
      this.supplierList = res;
      this.filteredsupplier = this.supplierControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value, true))
      );
    })
  }
  accountList: any[] = [];
  getAccount() {
    this.transactionService.getAccount().subscribe((res: any) => {
      this.accountList = res;
    })
  }
  purchaseBillList: any[] = [];
  filterPurchaseBill: any[] = [];
  getPurchaseBill() {
    this.transactionService.getPurchaseBill().subscribe((res: any) => {
      this.purchaseBillList = res;
      this.filterPurchaseBill = res;
    })
  }
  getFilter(data: any) {
    this.filterPurchaseBill = this.purchaseBillList.filter(salebill => {
      if (salebill && salebill?.refrence_bill_no) {
        const aliasLower = salebill?.refrence_bill_no.toLowerCase();
        return aliasLower.includes(data);
      }
      return false;
    });
    console.log(this.filterPurchaseBill);
  }

  debitNoteList: any[] = [];
  filterdebitNote: any[] = [];
  getDebitNote() {
    this.transactionService.getDebitNote().subscribe((res: any) => {
      this.debitNoteList = res;
      this.filterdebitNote = res;
    })
  }
  getFilterDebit(data: any) {
    this.filterdebitNote = this.debitNoteList.filter(debit => {
      if (debit && debit?.debit_note_no) {
        const aliasLower = debit?.debit_note_no?.toLowerCase();
        return aliasLower.includes(data);
      }
      return false;
    });
    console.log(this.filterdebitNote);
  }

  private _filter(value: string | number, include: boolean): any[] {
    const filterValue = typeof value === 'string' ? value?.toLowerCase() : value?.toString().toLowerCase();
    const filteredSuppliers = include
      ? this.supplierList.filter(supplier =>
        supplier.name.toLowerCase().includes(filterValue) || supplier.company_name.toLowerCase().includes(filterValue)
      )
      : this.supplierList.filter(supplier =>
        !(supplier.name.toLowerCase().includes(filterValue) || supplier.company_name.toLowerCase().includes(filterValue))
      );
    if (!include && filteredSuppliers.length === 0) {
      filteredSuppliers.push({ name: "No data found" });
    }
    return filteredSuppliers;
  }

  private _filterr(value: string | number, include: boolean): any[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredPayer = include
      ? this.accountList.filter(account => account?.account_id?.toLowerCase().includes(filterValue))
      : this.accountList.filter(account => !account?.account_id?.toLowerCase().includes(filterValue));
    if (!include && filteredPayer.length === 0) {
      filteredPayer.push({ account: "No data found" });
    }
    return filteredPayer;
  }

  get supplier() {
    return this.paymentVoucherForm.get('supplier') as FormControl;
  }
  oncheck(data: any) {
    const selectedItemId = data.id;
    this.paymentVoucherForm.patchValue({
      supplier: selectedItemId
    });
  }
  oncheck1(data: any) {
    const selectedItemId = data.id;
    this.paymentVoucherForm.patchValue({
      payment_account: selectedItemId
    });
  }
  oncheck3(data: any, index: number) {
    console.log(data);
    const cart = (this.paymentVoucherForm.get('payment_voucher_cart') as FormArray).at(index) as FormGroup;
    cart.patchValue({
      purchase_bill: data?.id,
      original_amount: data?.total || 0,
      paid_amount: data?.paid_amount || 0,
      pending_amount: data?.pending_amount || 0,
    });
  }
  oncheckBankDebit1(data: any, index: number, debitNoteIndex: number) {
    const cart = (this.paymentVoucherForm.get('payment_voucher_cart') as FormArray).at(index) as FormGroup;
    const debitNoteCart = cart.get('debit_note_cart') as FormArray;
    debitNoteCart.at(debitNoteIndex).patchValue({
      debit_note: data?.id,
      original_amount: data?.total || 0,
      redeem_amount: data?.redeem_amount || 0,
      pending_amount: data?.pending_amount || 0,
    });
  }

  //bank
  oncheckBank(data: any) {
    const selectedItemId = data.id;
    this.paymentVoucherBankForm.patchValue({
      supplier: selectedItemId
    });
  }
  oncheckBank1(data: any) {
    const selectedItemId = data.id;
    this.paymentVoucherBankForm.patchValue({
      payment_account: selectedItemId
    });
  }
  oncheckBank3(data: any, index: number) {
    const cart = (this.paymentVoucherBankForm.get('payment_voucher_cart') as FormArray).at(index) as FormGroup;
    cart.patchValue({
      purchase_bill: data?.id,
      original_amount: data?.total || 0,
      paid_amount: data?.paid_amount || 0,
      pending_amount: data?.pending_amount || 0,
    });
  }
  oncheckBankDebit2(data: any, index: number, debitNoteIndex: number) {
    const cart = (this.paymentVoucherBankForm.get('payment_voucher_cart') as FormArray).at(index) as FormGroup;
    const debitNoteCart = cart.get('debit_note_cart') as FormArray;
    debitNoteCart.at(debitNoteIndex).patchValue({
      debit_note: data?.id,
      original_amount: data?.total || 0,
      redeem_amount: data?.redeem_amount || 0,
      pending_amount: data?.pending_amount || 0,
    });
  }

  isBank = false;
  isCash = true;
  toggleBank() {
    this.isBank = true;
    this.isCash = false;
    this.supplierControl.reset();
    this.getAccountByAlies('bank-accounts');
  }
  toggleCash() {
    this.isBank = false;
    this.isCash = true;
    this.supplierControl.reset();
    this.getAccountByAlies('cash-in-hand');
  }

  getAccountByAlies(value: string) {
    this.transactionService.getAccoutAlies(value).subscribe((res: any) => {
      this.accountListData = res;
    });
  }

  loaders = false
  addRes: any;
  onSubmit() {
    console.log(this.paymentVoucherForm.value);
    if (this.paymentVoucherForm.valid) {
      const formdata = new FormData();
      formdata.append('payment_type', this.paymentVoucherForm.get('payment_type')?.value);
      formdata.append('supplier', this.paymentVoucherForm.get('supplier')?.value);
      formdata.append('date', this.paymentVoucherForm.get('date')?.value);
      formdata.append('payment_voucher_no', this.paymentVoucherForm.get('payment_voucher_no')?.value);
      formdata.append('mode_type', this.paymentVoucherForm.get('mode_type')?.value);
      formdata.append('amount', this.paymentVoucherForm.get('amount')?.value);
      formdata.append('note', this.paymentVoucherForm.get('note')?.value);
      formdata.append('payment_account', this.paymentVoucherForm.get('payment_account')?.value);

      const cartArray = this.paymentVoucherForm.get('payment_voucher_cart') as FormArray;
      const cartData = [];
      cartArray.controls.forEach((paymentCart) => {
        const paymentCartGroup = paymentCart as FormGroup;
        const cartObject = {};

        Object.keys(paymentCartGroup.controls).forEach((key) => {
          const control = paymentCartGroup.controls[key];
          if (!isNaN(control.value)) {
            cartObject[key] = parseFloat(control.value);
          } else {
            cartObject[key] = control.value;
          }
        });

        //debit_note_cart into payment_voucher_cart
        const debitNoteCartArray = paymentCartGroup.get('debit_note_cart') as FormArray;
        const debitNoteCartData = [];

        debitNoteCartArray.controls.forEach((debitNote) => {
          const debitNoteGroup = debitNote as FormGroup;
          const debitNoteObject = {};

          Object.keys(debitNoteGroup.controls).forEach((key) => {
            const debitNoteControl = debitNoteGroup.controls[key];
            // Convert  value float 
            if (!isNaN(debitNoteControl.value)) {
              debitNoteObject[key] = parseFloat(debitNoteControl.value);
            } else {
              debitNoteObject[key] = debitNoteControl.value;
            }
          });

          debitNoteCartData.push(debitNoteObject);
        });

        cartObject['debit_note_cart'] = debitNoteCartData;

        cartData.push(cartObject);
      });

      formdata.append('payment_voucher_cart', JSON.stringify(cartData));

      this.loaders = true;
      this.posCartService.addPosPaymentVoucher(formdata).subscribe(
        (res: any) => {
          this.loaders = false;
          if (res.success) {
            this.toastr.success(res.msg);
            this.paymentVoucherForm.reset();
            this.supplierControl.setValue('');
            this.modalClose.next(new Date());
          } else {
            this.loaders = false
            this.toastr.error(res.msg);
            if (res.error.amount) {
              this.toastr.error(res.error.amount[0])
            }
          }
        },
        (err) => {
          this.loaders = false;
        }
      );
    } else {
      // console.log('error');
      this.paymentVoucherForm.markAllAsTouched();
      this.toastr.error('Please Fill All The Required Fields')
    }
  }
  onBankSubmit() {
    console.log(this.paymentVoucherBankForm.value);
    if (this.paymentVoucherBankForm.valid) {
      const formdata = new FormData();

      formdata.append('payment_type', this.paymentVoucherBankForm.get('payment_type')?.value);
      formdata.append('supplier', this.paymentVoucherBankForm.get('supplier')?.value);
      formdata.append('date', this.paymentVoucherBankForm.get('date')?.value);
      formdata.append('payment_voucher_no', this.paymentVoucherBankForm.get('payment_voucher_no')?.value);
      formdata.append('mode_type', this.paymentVoucherBankForm.get('mode_type')?.value);
      formdata.append('amount', this.paymentVoucherBankForm.get('amount')?.value);
      formdata.append('note', this.paymentVoucherBankForm.get('note')?.value);
      formdata.append('payment_account', this.paymentVoucherBankForm.get('payment_account')?.value);

      formdata.append('bank_payment', this.paymentVoucherBankForm.get('bank_payment')?.value);
      formdata.append('transaction_id', this.paymentVoucherBankForm.get('transaction_id')?.value);
      formdata.append('transaction_date', this.paymentVoucherBankForm.get('transaction_date')?.value);

      const cartArray = this.paymentVoucherBankForm.get('payment_voucher_cart') as FormArray;
      const cartData = [];
      cartArray.controls.forEach((paymentCart) => {
        const paymentCartGroup = paymentCart as FormGroup;
        const cartObject = {};

        Object.keys(paymentCartGroup.controls).forEach((key) => {
          const control = paymentCartGroup.controls[key];
          if (!isNaN(control.value)) {
            cartObject[key] = parseFloat(control.value);
          } else {
            cartObject[key] = control.value;
          }
        });

        //debit_note_cart into payment_voucher_cart
        const debitNoteCartArray = paymentCartGroup.get('debit_note_cart') as FormArray;
        const debitNoteCartData = [];
        debitNoteCartArray.controls.forEach((debitNote) => {
          const debitNoteGroup = debitNote as FormGroup;
          const debitNoteObject = {};
          Object.keys(debitNoteGroup.controls).forEach((key) => {
            const debitNoteControl = debitNoteGroup.controls[key];
            // Convert  value float 
            if (!isNaN(debitNoteControl.value)) {
              debitNoteObject[key] = parseFloat(debitNoteControl.value);
            } else {
              debitNoteObject[key] = debitNoteControl.value;
            }
          });
          debitNoteCartData.push(debitNoteObject);
        });
        cartObject['debit_note_cart'] = debitNoteCartData;
        cartData.push(cartObject);
      });

      formdata.append('payment_voucher_cart', JSON.stringify(cartData));
      this.loaders = true;
      this.transactionService.addPaymentVoucher(formdata).subscribe(
        (res: any) => {
          this.loaders = false;
          if (res.success) {
            this.toastr.success(res.msg);
            this.paymentVoucherBankForm.reset();
            this.supplierControl.setValue('');
            this.modalClose.next(new Date());
          } else {
            this.loaders = false
            this.toastr.error(res.msg);
            if (res.error.amount) {
              this.toastr.error(res.error.amount[0])
            }
          }
        },
        (err) => {
          this.loaders = false;
        }
      );
    } else {
      console.log('invalid');
      this.paymentVoucherBankForm.markAllAsTouched();
      this.toastr.error('Please Fill All The Required Fields')
    }
  }
  //bank
  get Supplier() {
    return this.paymentVoucherBankForm.get('supplier')
  }
  get date1() {
    return this.paymentVoucherBankForm.get('date')
  }
  get payer1() {
    return this.paymentVoucherBankForm.get('payment_account')
  }
  get amount1() {
    return this.paymentVoucherBankForm.get('amount')
  }
  get description1() {
    return this.paymentVoucherBankForm.get('note')
  }
  get payment_voucher_no1() {
    return this.paymentVoucherBankForm.get('payment_voucher_no')
  }
  get mode_type1() {
    return this.paymentVoucherBankForm.get('mode_type')
  }
  sale_bill1(index: number) {
    return this.getCartBank().controls[index].get('purchase_bill');
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
    return this.paymentVoucherBankForm.get('bank_payment')
  }
  get transaction_id() {
    return this.paymentVoucherBankForm.get('transaction_id')
  }
  get transaction_date() {
    return this.paymentVoucherBankForm.get('transaction_date')
  }
  // bank end
  get Supplier1() {
    return this.paymentVoucherForm.get('supplier')
  }
  get date() {
    return this.paymentVoucherForm.get('date')
  }
  get payer() {
    return this.paymentVoucherForm.get('payment_account')
  }
  get amount() {
    return this.paymentVoucherForm.get('amount')
  }
  get description() {
    return this.paymentVoucherForm.get('note')
  }
  get payment_voucher_no() {
    return this.paymentVoucherForm.get('payment_voucher_no')
  }
  get mode_type() {
    return this.paymentVoucherForm.get('mode_type')
  }
  sale_bill(index: number) {
    return this.getCart().controls[index].get('purchase_bill');
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