import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { PosDashboardService } from 'src/app/Services/pos-dashboard.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-add-reciept-voucher',
  templateUrl: './add-reciept-voucher.component.html',
  styleUrls: ['./add-reciept-voucher.component.scss'],
})
export class AddRecieptVoucherComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private posService: PosDashboardService,
    private toastr: ToastrService,
    private router: Router,
    private transactionService: TransactionService,
    private commonService: CommonServiceService,
    private coreService: CoreService,
    private _renderer : Renderer2
  ) {}

  customerControlName = 'payment_account';
  customerControl = new FormControl();
  filteredCustomer: Observable<any[]>;
  @ViewChild('inp') Input : ElementRef<any>

  // payer
  payerControl = new FormControl();
  filteredPayer: Observable<any[]>;
  //sale bill
  saleBillControl = new FormControl();
  filteredsaleBill: Observable<any[]>;

  recieptVoucherForm!: FormGroup;
  minDate: string = '';
  maxDate: string = '';
  bankMinDate: string = '';
  bankMaxDate: string = '';
  transactionMinDate: string = '';
  transactionMaxDate: string = '';
  stateList: any[] = [];
  taxSlabList: any[] = [];
  taxAmount: any;
  selectedPercentageData: any;
  totalAmout: any;
  taxPercentage = new FormControl('', [Validators.required]);
  bankTaxPercentage = new FormControl('', [Validators.required]);
  accountListData: any;

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
      payment_account: new FormControl('', [Validators.required]),
      date: new FormControl(defaultDate),
      receipt_voucher_no: new FormControl(''),
      place_of_supply: new FormControl('', [Validators.required]),
      mode_type: new FormControl(''),
      amount: new FormControl(0),
      note: new FormControl(''),
      payer: new FormControl('', [Validators.required]), // account foreign key
      // against bill
      receipt_voucher_cart: this.fb.array([]),
    });

    this.recieptVoucherBankForm = this.fb.group({
      receipt_type: new FormControl('Bank'),
      payment_account: new FormControl('', [Validators.required]),
      date: new FormControl(defaultDate),
      receipt_voucher_no: new FormControl(''),
      place_of_supply: new FormControl('', [Validators.required]),
      mode_type: new FormControl(''),
      amount: new FormControl(0),
      note: new FormControl(''),
      payer: new FormControl('', [Validators.required]), // account foreign key
      // against bill
      bank_payment: new FormControl(''),
      transaction_id: new FormControl(''),
      transaction_date: new FormControl(defaultDate),
      receipt_voucher_cart: this.fb.array([]),
    });

    // this.filteredCustomer = this.customerControl.valueChanges.pipe(
    //   startWith(''),
    //   map((value) => this._filter(value, true))
    // );
    //payer
    this.filteredPayer = this.payerControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterr(value, true))
    );

    const financialYear = localStorage.getItem('financialYear');
    this.dateValidation(financialYear);
    this.bankDateValidation(financialYear);
    this.bankTransactionDateValidation(financialYear);

    this.getAccount();
    // this.getSaleBill();
    this.getprefix();
    this.getStateList();
    this.getTaxSlabList();
    this.getAccountByAlies('cash-in-hand');
  }

  dateValidation(financialYear) {
    const dateControl = this.recieptVoucherForm.get('date');
    const { formattedMinDate, formattedMaxDate } =
      this.commonService.setMinMaxDates(dateControl, financialYear);
    this.minDate = formattedMinDate;
    this.maxDate = formattedMaxDate;
  }

  bankDateValidation(financialYear) {
    const dateControl = this.recieptVoucherBankForm.get('date');
    const { formattedMinDate, formattedMaxDate } =
      this.commonService.setMinMaxDates(dateControl, financialYear);
    this.bankMinDate = formattedMinDate;
    this.bankMaxDate = formattedMaxDate;
  }

  bankTransactionDateValidation(financialYear) {
    const dateControl = this.recieptVoucherBankForm.get('transaction_date');
    const { formattedMinDate, formattedMaxDate } =
      this.commonService.setMinMaxDates(dateControl, financialYear);
    this.transactionMinDate = formattedMinDate;
    this.transactionMaxDate = formattedMaxDate;
  }

  prefixNo: any;
  getprefix() {
    this.transactionService.getReceiptVoucherPrefix().subscribe(
      (res: any) => {
        console.log(res);
        if (res.success) {
          // this.prefixNo = res.prefix;
          this.prefixNo = res?.data;
          this.recieptVoucherForm
            .get('receipt_voucher_no')
            .patchValue(this.prefixNo[0]?.id);
          this.recieptVoucherBankForm
            .get('receipt_voucher_no')
            .patchValue(this.prefixNo[0]?.id);
        } else {
          this.toastr.error(res.msg);
        }
      },
      (err) => {
        this.toastr.error(err.error.msg);
      }
    );
  }
  //
  cart(data?:any): FormGroup {
    return this.fb.group({
      sale_bill: new FormControl(data ? data.id : 0),
      original_amount: new FormControl(data ? data.original_amount :0),
      paid_amount: new FormControl(data ? data.paid_amount :0),
      pending_amount: new FormControl(data ? data.pending_amount :0),
      payment: new FormControl(data ? data.pending_amount :0),
    });
  }
  getCart(): FormArray {
    return this.recieptVoucherForm.get('receipt_voucher_cart') as FormArray;
  }
  addCart(data?:any) {
    this.getCart().push(this.cart(data));
    this.myControls.push(new FormControl(data ? data.customer_bill_no :''));
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
  isCartBank = false;
  addCartBank() {
    this.getCartBank().push(this.cart());
    this.myControls.push(new FormControl(''));
    this.isCartBank = false;
  }
  removeCartBank(i: any) {
    this.getCartBank().removeAt(i);
    if (this.recieptVoucherBankForm?.value?.receipt_voucher_cart?.length == 0) {
      this.isCartBank = true;
    }
  }

  isAgainstBill = false;
  
  totalPending_Amount : number = 0;
  totalPayment_Amount : number = 0;
  setRadioValue(value: string) {
    this.recieptVoucherForm.get('mode_type').setValue(value);
    const payer = this.recieptVoucherForm.get('payer').value;
    if (value == 'Against Bill' && !!payer) {
      this.isAgainstBill = true;
      const cart = this.recieptVoucherForm.get(
        'receipt_voucher_cart'
      ) as FormArray;
      cart.clear();

      for (let index = 0; index < this.filterSaleBill.length; index++) {
// console.log(this.filterSaleBill[index])
        this.totalPending_Amount +=  +this.filterSaleBill[index].pending_amount
        this.totalPayment_Amount +=  +this.filterSaleBill[index].pending_amount
        this.addCart(this.filterSaleBill[index]);
      
      }

this.recieptVoucherForm.get('amount')?.setValue(this.totalPayment_Amount.toFixed(2));
// receipt_voucher_cart formarray



this.recieptVoucherForm.get('receipt_voucher_cart').valueChanges.subscribe((res:any)=>{
  let arr :any[] = this.getCart().value;
  let total : number = 0
  for (let a = 0; a < arr.length; a++) {
    total += +arr[a].payment
  }
  this.recieptVoucherForm.get('amount')?.setValue(total.toFixed(2));
  })

  this._renderer.setAttribute(this.Input.nativeElement,'readonly','true')


      // this.addCart();
    } else {
      this.isAgainstBill = false;
    }
  }
 
  isAgainstBillBank = false;
  setRadioValue1(value: string) {
    this.recieptVoucherBankForm.get('mode_type').setValue(value);
    const payer = this.recieptVoucherForm.get('payer').value;
    if (value == 'Against Bill' && !!payer) {
      this.isAgainstBillBank = true;
      const cart = this.recieptVoucherBankForm.get(
        'receipt_voucher_cart'
      ) as FormArray;
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
    });
  }

  getAccountByAlies(value: string) {
    this.transactionService.getAccoutAlies(value).subscribe((res: any) => {
      this.accountListData = res;
    });
  }

  saleBillList: any[] = [];
  filterSaleBill: any[] = [];
  getSaleBill() {
    this.transactionService.getSalesBill().subscribe((res: any) => {
      this.saleBillList = res;
      this.filterSaleBill = res;
    });
  }

  getStateList() {
    this.coreService.getstate().subscribe((res: any) => {
      console.log(res);
      this.stateList = res;
    });
  }

  getFilter(data: any) {
    this.filterSaleBill = this.saleBillList.filter((salebill) => {
      if (salebill && salebill?.customer_bill_no) {
        const aliasLower = salebill?.customer_bill_no.toLowerCase();
        return aliasLower.includes(data);
      }
      return false;
    });
    console.log(this.filterSaleBill);
  }

  // private _filter(value: string | number, include: boolean): any[] {
  //   const filterValue =
  //     typeof value === 'string'
  //       ? value.toLowerCase()
  //       : value?.toString().toLowerCase();
  //   const filteredCustomer = include
  //     ? this.accountList.filter((account) =>
  //         account?.account_id?.toLowerCase().includes(filterValue)
  //       )
  //     : this.accountList.filter(
  //         (account) => !account?.account_id?.toLowerCase().includes(filterValue)
  //       );
  //   if (!include && filteredCustomer.length === 0) {
  //     filteredCustomer.push({ account: 'No data found' });
  //   }
  //   return filteredCustomer;
  // }

  private _filterr(value: string | number, include: boolean): any[] {
    const filterValue =
      typeof value === 'string'
        ? value.toLowerCase()
        : value?.toString().toLowerCase();
    const filteredCustomer = include
      ? this.accountList.filter((account) =>
          account?.account_id?.toLowerCase().includes(filterValue)
        )
      : this.accountList.filter(
          (account) => !account?.account_id?.toLowerCase().includes(filterValue)
        );
    if (!include && filteredCustomer.length === 0) {
      filteredCustomer.push({ account: 'No data found' });
    }
    return filteredCustomer;
  }
  get payment_account() {
    return this.recieptVoucherForm.get('payment_account') as FormControl;
  }
  oncheck(data: any) {
    const selectedItemId = data.id;
    this.recieptVoucherForm.patchValue({
      payment_account: selectedItemId,
    });
  }
  oncheck1(data: any) {
    const selectedItemId = data.id;
    this.recieptVoucherForm.patchValue({
      payer: selectedItemId,
    });

    const userId = data?.user ? data?.user : ''
    this.transactionService.getSalesBillByUserId(userId).subscribe((res: any) => {
      this.saleBillList = res;
      this.filterSaleBill = res;
    });

    const modeType = this.recieptVoucherForm.get('mode_type').value;
    const payer = this.recieptVoucherForm.get('payer').value;
    if (modeType === 'Against Bill' && !!payer) {
      this.isAgainstBill = true;
      const cart = this.recieptVoucherForm.get(
        'receipt_voucher_cart'
      ) as FormArray;
      cart.clear();
      this.addCart();
    } else {
      this.isAgainstBill = false;
    }
  }
  oncheck3(data: any, index: number) {
    console.log(data);
    const cart = (
      this.recieptVoucherForm.get('receipt_voucher_cart') as FormArray
    ).at(index) as FormGroup;
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
      payment_account: selectedItemId,
    });
  }
  oncheckBank1(data: any) {
    const selectedItemId = data.id;
    this.recieptVoucherBankForm.patchValue({
      payer: selectedItemId,
    });
    const modeType = this.recieptVoucherBankForm.get('mode_type').value;
    const payer = this.recieptVoucherBankForm.get('payer').value;
    if (modeType === 'Against Bill' && !!payer) {
      this.isAgainstBillBank = true;
      const cart = this.recieptVoucherBankForm.get(
        'receipt_voucher_cart'
      ) as FormArray;
      cart.clear();
      this.addCartBank();
    } else {
      this.isAgainstBillBank = false;
    }
  }
  oncheckBank3(data: any, index: number) {
    const cart = (
      this.recieptVoucherBankForm.get('receipt_voucher_cart') as FormArray
    ).at(index) as FormGroup;
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
    this.getAccountByAlies('bank-accounts');
  }
  toggleCash() {
    this.isBank = false;
    this.isCash = true;
    this.customerControl.reset();
    this.payerControl.reset();
    this.getAccountByAlies('cash-in-hand');
  }

  getTaxSlabList() {
    this.coreService.getTaxSlab().subscribe((res: any) => {
      console.log(res);
      this.taxSlabList = res;
    });
  }

  calculateTaxAmout(type) {
    if (this.selectedPercentageData?.variable_tax) {
      if (type === 'cash') {
        this.totalAmout = this.recieptVoucherForm.get('amount')?.value;
      } else {
        this.totalAmout = this.recieptVoucherBankForm.get('amount')?.value;
      }
      if (
        this.selectedPercentageData?.amount_tax_slabs[1]?.from_amount <
        this.totalAmout
      ) {
        const taxPercentage =
          this.selectedPercentageData?.amount_tax_slabs[1]?.tax?.tax_percentage;
        if (type === 'cash') {
          const amount = this.recieptVoucherForm.get('amount')?.value;
          this.taxPercentage.setValue(taxPercentage);
          this.taxAmount = (amount * taxPercentage) / 100;
        } else {
          const amount = this.recieptVoucherBankForm.get('amount')?.value;
          this.bankTaxPercentage.setValue(taxPercentage);
          this.taxAmount = (amount * taxPercentage) / 100;
        }
      } else {
        const taxPercentage =
          this.selectedPercentageData?.amount_tax_slabs[0]?.tax?.tax_percentage;
        if (type === 'cash') {
          const amount = this.recieptVoucherForm.get('amount')?.value;
          this.taxPercentage.setValue(taxPercentage);
          this.taxAmount = (amount * taxPercentage) / 100;
        } else {
          const amount = this.recieptVoucherBankForm.get('amount')?.value;
          this.bankTaxPercentage.setValue(taxPercentage);
          this.taxAmount = (amount * taxPercentage) / 100;
        }
      }
    } else {
      const taxPercentage =
        this.selectedPercentageData?.amount_tax_slabs[0]?.tax?.tax_percentage;
      if (type === 'cash') {
        const totalAmount = this.recieptVoucherForm.get('amount')?.value;
        this.taxPercentage.setValue(taxPercentage);
        this.taxAmount = (totalAmount * taxPercentage) / 100;
      } else {
        const totalAmount = this.recieptVoucherBankForm.get('amount')?.value;
        this.bankTaxPercentage.setValue(taxPercentage);
        this.taxAmount = (totalAmount * taxPercentage) / 100;
      }
    }
  }

  onChangePercentage(event: Event, type: string): void {
    const target = event.target as HTMLSelectElement;
    const selectedValue = target.value;
    const selectedPrefix = this.taxSlabList.find(
      (prefix) => prefix.id === Number(selectedValue)
    );

    if (selectedPrefix) {
      this.selectedPercentageData = selectedPrefix;
    }
  }

  loaders = false;
  addRes: any;
  onSubmit() {
    this.calculateTaxAmout('cash');
    console.log(this.recieptVoucherForm.value);
    const amount = this.recieptVoucherForm.get('amount')?.value;
    if (!amount || amount < 1) {
      this.toastr.error('Receipt voucher amount must be greater than 0.');
      return;
    }
    if (this.recieptVoucherForm.valid) {
      const formdata = new FormData();
      formdata.append(
        'receipt_type',
        this.recieptVoucherForm.get('receipt_type')?.value
      );
      formdata.append(
        'payment_account',
        this.recieptVoucherForm.get('payment_account')?.value
      );
      formdata.append('date', this.recieptVoucherForm.get('date')?.value);
      formdata.append(
        'receipt_voucher_no',
        this.recieptVoucherForm.get('receipt_voucher_no')?.value
      );
      formdata.append(
        'mode_type',
        this.recieptVoucherForm.get('mode_type')?.value
      );
      formdata.append('amount', this.recieptVoucherForm.get('amount')?.value);
      formdata.append('note', this.recieptVoucherForm.get('note')?.value);
      formdata.append('payer', this.recieptVoucherForm.get('payer')?.value);
      formdata.append('tax_percentage', this.taxPercentage.value);
      formdata.append('tax_amount', this.taxAmount);
      formdata.append(
        'place_of_supply',
        this.recieptVoucherForm.get('place_of_supply')?.value
      );
      const cartArray = this.recieptVoucherForm.get(
        'receipt_voucher_cart'
      ) as FormArray;
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
            this.router.navigate(['//transaction/recieptVoucherList']);
          } else {
            this.loaders = false;
            // this.toastr.error(res.msg);
            if (res.error?.mode_type) {
              this.toastr.error('Select Mode Type', res.error?.mode_type[0]);
              this.modeError = res.error?.mode_type[0];
              setTimeout(() => {
                this.modeError = '';
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
      this.toastr.error('Please Fill All The Required Fields');
    }
  }
  modeError: any;
  onBankSubmit() {
    this.calculateTaxAmout('bank');
    console.log(this.recieptVoucherBankForm.value);
    const amount = this.recieptVoucherBankForm.get('amount')?.value;
    if (!amount || amount < 1) {
      this.toastr.error('Receipt voucher amount must be greater than 0.');
      return;
    }
    if (this.recieptVoucherBankForm.valid) {
      const formdata = new FormData();
      formdata.append(
        'receipt_type',
        this.recieptVoucherBankForm.get('receipt_type')?.value
      );
      formdata.append(
        'payment_account',
        this.recieptVoucherBankForm.get('payment_account')?.value
      );
      formdata.append('date', this.recieptVoucherBankForm.get('date')?.value);
      formdata.append(
        'receipt_voucher_no',
        this.recieptVoucherBankForm.get('receipt_voucher_no')?.value
      );
      formdata.append(
        'mode_type',
        this.recieptVoucherBankForm.get('mode_type')?.value
      );
      formdata.append(
        'amount',
        this.recieptVoucherBankForm.get('amount')?.value
      );
      formdata.append('note', this.recieptVoucherBankForm.get('note')?.value);
      formdata.append('payer', this.recieptVoucherBankForm.get('payer')?.value);

      formdata.append(
        'bank_payment',
        this.recieptVoucherBankForm.get('bank_payment')?.value
      );
      formdata.append(
        'transaction_id',
        this.recieptVoucherBankForm.get('transaction_id')?.value
      );
      formdata.append(
        'transaction_date',
        this.recieptVoucherBankForm.get('transaction_date')?.value
      );
      formdata.append('tax_percentage', this.bankTaxPercentage.value);
      formdata.append('tax_amount', this.taxAmount);
      formdata.append(
        'place_of_supply',
        this.recieptVoucherBankForm.get('place_of_supply')?.value
      );

      const cartArray = this.recieptVoucherBankForm.get(
        'receipt_voucher_cart'
      ) as FormArray;
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
            this.router.navigate(['//transaction/recieptVoucherList']);
          } else {
            this.loaders = false;
            // this.toastr.error(res.msg);
            if (res.error?.mode_type) {
              this.toastr.error('Select Mode Type', res.error?.mode_type[0]);
              this.modeError = res.error?.mode_type[0];
              setTimeout(() => {
                this.modeError = '';
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
      this.toastr.error('Please Fill All The Required Fields');
    }
  }
  //bank
  get date1() {
    return this.recieptVoucherBankForm.get('date');
  }
  get payer1() {
    return this.recieptVoucherBankForm.get('payer');
  }
  get amount1() {
    return this.recieptVoucherBankForm.get('amount');
  }
  get description1() {
    return this.recieptVoucherBankForm.get('note');
  }
  get receipt_voucher_no1() {
    return this.recieptVoucherBankForm.get('receipt_voucher_no');
  }
  get place_of_supply1() {
    return this.recieptVoucherBankForm.get('place_of_supply');
  }
  get mode_type1() {
    return this.recieptVoucherBankForm.get('mode_type');
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
    return this.recieptVoucherBankForm.get('bank_payment');
  }
  get transaction_id() {
    return this.recieptVoucherBankForm.get('transaction_id');
  }
  get transaction_date() {
    return this.recieptVoucherBankForm.get('transaction_date');
  }
  // bank end
  get date() {
    return this.recieptVoucherForm.get('date');
  }
  get payer() {
    return this.recieptVoucherForm.get('payer');
  }
  get amount() {
    return this.recieptVoucherForm.get('amount');
  }
  get description() {
    return this.recieptVoucherForm.get('note');
  }
  get receipt_voucher_no() {
    return this.recieptVoucherForm.get('receipt_voucher_no');
  }
  get place_of_supply() {
    return this.recieptVoucherForm.get('place_of_supply');
  }
  get mode_type() {
    return this.recieptVoucherForm.get('mode_type');
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
