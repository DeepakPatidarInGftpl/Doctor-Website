import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-update-reciept-voucher',
  templateUrl: './update-reciept-voucher.component.html',
  styleUrls: ['./update-reciept-voucher.component.scss']
})
export class UpdateRecieptVoucherComponent implements OnInit {

  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router,
    private transactionService: TransactionService, private commonService: CommonServiceService,
    private Arout: ActivatedRoute, private coreService: CoreService) { }

  customerControl = new FormControl();
  filteredCustomer: Observable<any[]>;

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
  accountListData: any;
  taxAmount: any;
  selectedPercentageData: any;
  totalAmout: any;
  taxSlabList: any[] = [];
  taxPercentage = new FormControl('', [Validators.required]);
  bankTaxPercentage = new FormControl('', [Validators.required]);

  get h() {
    return this.recieptVoucherForm.controls;
  }
  recieptVoucherBankForm!: FormGroup;
  get g() {
    return this.recieptVoucherBankForm.controls;
  }
  myControls: FormArray;
  id: any;
  editRes: any;
  ngOnInit(): void {
    const defaultDate = new Date().toISOString().split('T')[0];
    this.myControls = new FormArray([]);
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.customerControl.setValue('Loading...');
    this.payerControl.setValue('Loading...');


    this.recieptVoucherForm = this.fb.group({
      receipt_type: new FormControl('Cash'),
      payment_account: new FormControl('', [Validators.required]),
      customer: new FormControl('', [Validators.required]),
      date: new FormControl(defaultDate, [Validators.required]),
      receipt_voucher_no: new FormControl('', [Validators.required]),
      mode_type: new FormControl(''),
      amount: new FormControl(0),
      note: new FormControl(''),
      payer: new FormControl(''), // account foreign key
      // against bill
      receipt_voucher_cart: this.fb.array([]),
    })

    this.recieptVoucherBankForm = this.fb.group({
      receipt_type: new FormControl('Bank'),
      payment_account: new FormControl('', [Validators.required]),
      date: new FormControl(defaultDate, [Validators.required]),
      receipt_voucher_no: new FormControl(''),
      mode_type: new FormControl('', [Validators.required]),
      amount: new FormControl(0),
      note: new FormControl(''),
      payer: new FormControl(''), // account foreign key
      // against bill
      bank_payment: new FormControl(''),
      transaction_id: new FormControl(''),
      transaction_date: new FormControl(defaultDate),
      receipt_voucher_cart: this.fb.array([]),
    })

    // this.filteredCustomer = this.customerControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value, true))
    // );
    //payer
    this.filteredPayer = this.payerControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterr(value, true))
    );

    const financialYear = localStorage.getItem('financialYear');
    this.dateValidation(financialYear);
    this.bankDateValidation(financialYear);
    this.bankTransactionDateValidation(financialYear);
    this.getTaxSlabList();
    this.getAccount();
    // this.getSaleBill();
    this.getprefix();

    this.transactionService.getRecieptVoucherById(this.id).subscribe(res => {
      this.editRes = res;
      const userId = res?.payer?.user ? res?.payer?.user : ''
      this.transactionService.getSalesBillByUserId(userId).subscribe((res: any) => {
      this.saleBillList = res;
      this.filterSaleBill = res;
      });

      // bank
      if (this.editRes?.receipt_type == 'Bank') {
        this.isBank = true;
        this.isCash = false;
        this.recieptVoucherBankForm.patchValue(this.editRes)
        this.recieptVoucherBankForm.get('payment_account')?.patchValue(this.editRes?.payment_account?.id);
        this.recieptVoucherBankForm.get('payer').patchValue(this.editRes?.payer?.id);
        setTimeout(() => {
          if(!!this.taxSlabList?.length){
            const taxTitle = this.getTaxTitleByPercentage(res?.tax_percentage);
            if (taxTitle) {
              this.bankTaxPercentage.setValue(taxTitle);
            }
          }
        }, 2000);
        // this.recieptVoucherBankForm.get('receipt_voucher_no').patchValue(this.editRes?.receipt_voucher_no?.id);
        if (this.editRes?.bill_cart.length > 0) {
          this.recieptVoucherBankForm.setControl('receipt_voucher_cart', this.udateCartBank(this.editRes?.bill_cart));
        } else {
          this.isCartBank = true;
          this.isAgainstBillBank = true;
        }

        this.customerControl.setValue(this.editRes?.customer?.account_id);
        this.payerControl.setValue(this.editRes?.payer?.account_id);
        this.getAccountByAlies('bank-accounts');
      } else {
        this.recieptVoucherForm.patchValue(this.editRes);
        this.recieptVoucherForm.get('payment_account').patchValue(this.editRes?.payment_account?.id);
        this.recieptVoucherForm.get('payer').patchValue(this.editRes?.payer?.id);
        setTimeout(() => {
          if(!!this.taxSlabList?.length){
            const taxTitle = this.getTaxTitleByPercentage(res?.tax_percentage);
            if (taxTitle) {
              this.taxPercentage.setValue(taxTitle);
            }
          }
        }, 2000);
        // this.recieptVoucherForm.get('receipt_voucher_no').patchValue(this.editRes?.receipt_voucher_no?.id);
        if (this.editRes?.bill_cart.length > 0) {
          this.recieptVoucherForm.setControl('receipt_voucher_cart', this.udateCart(this.editRes?.bill_cart));
        } else {
          this.isCart = true;
          this.isAgainstBill = true;
        }
        this.payerControl.setValue(this.editRes?.payer?.account_id);
        this.customerControl.setValue(this.editRes?.customer?.account_id);
        this.getAccountByAlies('cash-in-hand');
      }

    })
  }

  dateValidation(financialYear) {
    const dateControl = this.recieptVoucherForm.get('date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear);
    this.minDate = formattedMinDate;
    this.maxDate = formattedMaxDate;
  }

  bankDateValidation(financialYear) {
    const dateControl = this.recieptVoucherBankForm.get('date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear);
    this.bankMinDate = formattedMinDate;
    this.bankMaxDate = formattedMaxDate;
  }

  getTaxTitleByPercentage(taxPercentage: number): string {
    for (let taxSlab of this.taxSlabList) {
        for (let amountTaxSlab of taxSlab?.amount_tax_slabs) {
            if (amountTaxSlab.tax.tax_percentage === Number(taxPercentage)) {
                return taxSlab?.slab_title;
            }
        }
    }
    return '';
}

  bankTransactionDateValidation(financialYear) {
    const dateControl = this.recieptVoucherBankForm.get('transaction_date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear);
    this.transactionMinDate = formattedMinDate;
    this.transactionMaxDate = formattedMaxDate;
  }

  prefixNo: any;
  getprefix() {
    this.transactionService.getReceiptVoucherPrefix().subscribe((res: any) => {
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
  //
  udateCart(add: any): FormArray {
    let formarr = new FormArray([]);
    add.forEach((j: any, i) => {
      this.isAgainstBill = true;
      formarr.push(this.fb.group({
        sale_bill: j.sale_bill?.id,
        original_amount: j?.original_amount,
        paid_amount: j?.paid_amount,
        pending_amount: j?.pending_amount,
        payment: j?.payment,
      }))


      this.myControls.push(new FormControl(j?.sale_bill?.customer_bill_no));
    })
    return formarr
  }
  udateCartBank(add: any): FormArray {
    let formarr = new FormArray([]);
    add.forEach((j: any, i) => {
      this.isAgainstBillBank = true;
      formarr.push(this.fb.group({
        sale_bill: j.sale_bill?.id,
        original_amount: j?.original_amount,
        paid_amount: j?.paid_amount,
        pending_amount: j?.pending_amount,
        payment: j?.payment,
      }))
      console.log(j);

      this.myControls.push(new FormControl(j?.sale_bill?.customer_bill_no));
    })
    return formarr
  }
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
  isCart = false;
  addCart() {
    this.getCart().push(this.cart())
    this.myControls.push(new FormControl(''));
    this.isCart = false;
  }

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
  addCartBank() {
    this.getCartBank().push(this.cart())
    this.myControls.push(new FormControl(''));
    this.isCartBank = false;
  }
  isCartBank = false;
  removeCartBank(i: any) {
    this.getCartBank().removeAt(i);
    if (this.recieptVoucherBankForm?.value?.receipt_voucher_cart?.length == 0) {
      this.isCartBank = true;
    }
  }

  isAgainstBill = false;
  setRadioValue(value: string) {
    this.recieptVoucherForm.get('mode_type').setValue(value);
    const payer = this.recieptVoucherForm.get('payer').value;
    if (value == 'Against Bill' && !!payer) {
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
    })
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

  // private _filter(value: string | number, include: boolean): any[] {
  //   const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
  //   const filteredCustomer = include
  //     ? this.accountList.filter(account => account?.account_id?.toLowerCase().includes(filterValue))
  //     : this.accountList.filter(account => !account?.account_id?.toLowerCase().includes(filterValue));
  //   if (!include && filteredCustomer.length === 0) {
  //     filteredCustomer.push({ account: "No data found" });
  //   }
  //   return filteredCustomer;
  // }

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
  get payment_account() {
    return this.recieptVoucherForm.get('payment_account') as FormControl;
  }
  oncheck(data: any) {
    const selectedItemId = data.id;
    this.recieptVoucherForm.patchValue({
      payment_account: selectedItemId
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
    const cart = (this.recieptVoucherForm.get('receipt_voucher_cart') as FormArray).at(index) as FormGroup;
    cart.patchValue({
      sale_bill: data?.id,
      original_amount: data?.original_amount,
      paid_amount: data?.paid_amount,
      pending_amount: data?.pending_amount
    });
  }
  //bank
  oncheckBank(data: any) {
    const selectedItemId = data.id;
    this.recieptVoucherBankForm.patchValue({
      payment_account: selectedItemId
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
    const cart = (this.recieptVoucherBankForm.get('receipt_voucher_cart') as FormArray).at(index) as FormGroup;
    cart.patchValue({
      sale_bill: data?.id,
      original_amount: data?.original_amount,
      paid_amount: data?.paid_amount,
      pending_amount: data?.pending_amount
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

  loaders = false
  addRes: any;
  modeError: any
  onSubmit() {
    this.calculateTaxAmout('cash');
    console.log(this.recieptVoucherForm.value);
    const amount = this.recieptVoucherForm.get('amount')?.value;
    if (!amount || Number(amount) < 1) {
      this.toastr.error('Receipt voucher amount must be greater than 0.');
      return;
    }
    if (this.recieptVoucherForm.valid) {
      const formdata = new FormData();
      formdata.append('receipt_type', this.recieptVoucherForm.get('receipt_type')?.value);
      formdata.append('payment_account', this.recieptVoucherForm.get('payment_account')?.value);
      formdata.append('date', this.recieptVoucherForm.get('date')?.value);
      formdata.append('receipt_voucher_no', this.recieptVoucherForm.get('receipt_voucher_no')?.value);
      formdata.append('mode_type', this.recieptVoucherForm.get('mode_type')?.value);
      formdata.append('amount', this.recieptVoucherForm.get('amount')?.value);
      formdata.append('note', this.recieptVoucherForm.get('note')?.value);
      formdata.append('payer', this.recieptVoucherForm.get('payer')?.value);
      formdata.append('tax_percentage', '');
      formdata.append('tax_amount', '');
      formdata.append('place_of_supply', '');
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
      this.transactionService.updateRecieptVoucher(formdata, this.id).subscribe(
        (res: any) => {
          this.loaders = false;
          if (res.success) {
            this.toastr.success(res.msg);
            this.router.navigate(['//transaction/recieptVoucherList'])
          } else {
            this.loaders = false
            // this.toastr.error(res.msg);
          }
        },
        (err) => {
          this.loaders = false;
          if (err.error.error?.mode_type) {
            this.toastr.error('Select Mode Type', err.error.error?.mode_type[0])
            this.modeError = err.error.error?.mode_type[0]
            setTimeout(() => {
              this.modeError = ''
            }, 5000);
          }
        }
      );
    } else {
      // console.log('error');
      this.recieptVoucherForm.markAllAsTouched();
      this.toastr.error('Please Fill All The Required Fields')
    }
  }
  onBankSubmit() {
    this.calculateTaxAmout('bank');
    console.log(this.recieptVoucherBankForm.value);
    const amount = this.recieptVoucherBankForm.get('amount')?.value;
    if (!amount || Number(amount) < 1) {
      this.toastr.error('Receipt voucher amount must be greater than 0.');
      return;
    }
    if (this.recieptVoucherBankForm.valid) {
      const formdata = new FormData();
      formdata.append('receipt_type', this.recieptVoucherBankForm.get('receipt_type')?.value);
      formdata.append('payment_account', this.recieptVoucherBankForm.get('payment_account')?.value);
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
      this.transactionService.updateRecieptVoucher(formdata, this.id).subscribe(
        (res: any) => {
          this.loaders = false;
          if (res.success) {
            this.toastr.success(res.msg);
            this.router.navigate(['//transaction/recieptVoucherList'])
          } else {
            this.loaders = false
            this.toastr.error(res.msg);
            if (res.error?.mode_type) {
              this.toastr.error('Select Mode Type', res.error?.mode_type[0])
              this.modeError = res.error?.mode_type[0]
              setTimeout(() => {
                this.modeError = ''
              }, 5000);
            }
          }
        },
        (err) => {
          this.loaders = false;
          if (err.error.error?.mode_type) {
            this.toastr.error('Select Mode Type', err.error.error?.mode_type[0])
            this.modeError = err.error.error?.mode_type[0]
            setTimeout(() => {
              this.modeError = ''
            }, 5000);
          }
        }
      );
    } else {
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
