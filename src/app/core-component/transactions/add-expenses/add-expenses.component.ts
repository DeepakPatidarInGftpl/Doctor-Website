import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.scss']
})
export class AddExpensesComponent implements OnInit {
  toastr: any;

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private transactionService: TransactionService,
    private contactService: ContactService,
    private commonService: CommonServiceService,
  private coreService: CoreService) {
  }
  expensevoucherForm!: FormGroup;
  minDate: string = '';
  maxDate: string = '';
  selectedTaxPercentage: any[] = [];
  selectedPercentageData: any[] = [];
  taxSlabList: any[] = [];
  get f() {
    return this.expensevoucherForm.controls;
  }
  fromAccountControl = new FormControl();
  filteredFromAccount: Observable<any[]>;
  //party
  fromPartyControl = new FormControl();
  filteredFromParty: Observable<any[]>;
  ngOnInit(): void {
    const defaultDate = new Date().toISOString().split('T')[0]; // Get yyyy-MM-dd part
    this.expensevoucherForm = this.fb.group({
      party: new FormControl('', [Validators.required]),
      expense_date: new FormControl(defaultDate, [Validators.required]),
      expense_no: new FormControl('', [Validators.required]),
      refrence_bill_no: new FormControl('',),
      reverse_charge: new FormControl('',), //boolean
      created_from: new FormControl('ERP',),
      expenses_voucher_cart: this.fb.array([]),
      tax_amount: new FormControl(0),
      total_amount: new FormControl(0),
      round_off: new FormControl(0),
      net_amount: new FormControl(0),
      paid_amount: new FormControl(0),
      status: new FormControl(''),
      note: new FormControl(''),
    });
    this.getAccount();
    this.getUser();
    this.getprefix();
    this.addCart(0);
    this.getTaxSlabList();

    this.filteredFromAccount = this.fromAccountControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );
    // party
    this.filteredFromParty = this.fromPartyControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter2(value, true))
    );

    const financialYear = localStorage.getItem('financialYear');
    this.dateValidation(financialYear);

    this.isPercentage[0] = true;
    this.isAmount[0] = false;
  }

  dateValidation(financialYear) {
    const dateControl = this.expensevoucherForm.get('expense_date');
    const { formattedMinDate, formattedMaxDate } = this.commonService.setMinMaxDates(dateControl, financialYear);
    this.minDate = formattedMinDate;
    this.maxDate = formattedMaxDate;
  }

  prefixNo: any;
  getprefix() {
    this.transactionService.getExpenceVoucherPrefix().subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        // this.prefixNo = res.prefix;
        this.prefixNo = res?.data;
        this.expensevoucherForm.get('expense_no').patchValue(this.prefixNo[0]?.id);
      } else {
        this.toastr.error(res.msg);
      }
    }, err => {
      this.toastrService.error(err.error.msg)
    })
  }
  accountList: any[] = [];
  getAccount() {
    this.transactionService.getAccount().subscribe((res: any) => {
      this.accountList = res;
    })
  }
  userList: any[] = [];
  getUser() {
    this.contactService.getUser().subscribe((res: any) => {
      this.userList = res;
    })
  }
  private _filter(value: string | number, include: boolean): any[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredFromAccount = include
      ? this.accountList.filter(account => account?.account_id?.toLowerCase().includes(filterValue) || account?.title?.toLowerCase().includes(filterValue))
      : this.accountList.filter(account => !account?.account_id?.toLowerCase().includes(filterValue) || account?.title?.toLowerCase().includes(filterValue));
    if (!include && filteredFromAccount.length === 0) {
      filteredFromAccount.push({ account: "No data found" });
    }
    return filteredFromAccount;
  }

  private _filter2(value: string | number, include: boolean): any[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredFromParty = include
      ? this.userList.filter(party => party?.name?.toLowerCase().includes(filterValue) || party?.username?.toLowerCase().includes(filterValue))
      : this.userList.filter(party => !party?.name?.toLowerCase().includes(filterValue) || !party?.username?.toLowerCase().includes(filterValue));
    if (!include && filteredFromParty.length === 0) {
      filteredFromParty.push({ party: "No data found" });
    }
    return filteredFromParty;
  }

  oncheck(data: any, index: number) {
    const cart = (this.expensevoucherForm.get('expenses_voucher_cart') as FormArray).at(index) as FormGroup;
    cart.patchValue({
      account: data?.id,
    });
  }

  getTaxSlabList() {
    this.coreService.getTaxSlab().subscribe((res: any) => {
      console.log(res);
      this.taxSlabList = res;
    })
  }

  oncheckParty(party: any) {
    let partyId = party;
    this.expensevoucherForm.get('party')?.patchValue(partyId);
  }
  cart(): FormGroup {
    return this.fb.group({
      account: new FormControl('', [Validators.required]),
      service_or_product: new FormControl('Service',),
      amount: new FormControl(0, [Validators.required]),
      discount: new FormControl(0, [Validators.required, Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      tax: new FormControl(''),
      tax_value: new FormControl(0,),
      total: new FormControl(0,),
      description: ('')
    })
  }
  getCart(): FormArray {
    return this.expensevoucherForm.get('expenses_voucher_cart') as FormArray;
  }
  isCart = false;
  addCart(i) {
    this.getCart().push(this.cart());
    this.isCart = false;
    if (i > 0) {
      this.isPercentage[i] = true;
      this.isAmount[i] = false;
    }
  }
  removeCart(i: any) {
    this.getCart().removeAt(i);
    if (this.expensevoucherForm?.value?.expenses_voucher_cart?.length == 0) {
      this.isCart = true;
    }
  }

  isLastCart(index: number): boolean {
    const cartControls = this.getCart().controls;
    return index === cartControls.length - 1;
  }

  addRes: any;
  dateError = null;
  loaders = false;

  submit() {
    console.log(this.expensevoucherForm.value);
    if (this.expensevoucherForm.valid) {
      this.loaders = true;
      let formdata: any = new FormData();
      formdata.append('party', this.expensevoucherForm.get('party')?.value);
      formdata.append('expense_date', this.expensevoucherForm.get('expense_date')?.value);
      formdata.append('expense_no', this.expensevoucherForm.get('expense_no')?.value);
      formdata.append('refrence_bill_no', this.expensevoucherForm.get('refrence_bill_no')?.value);
      formdata.append('reverse_charge', this.expensevoucherForm.get('reverse_charge')?.value);
      formdata.append('created_from', this.expensevoucherForm.get('created_from')?.value);
      formdata.append('tax_amount', this.expensevoucherForm.get('tax_amount')?.value);
      formdata.append('total_amount', this.expensevoucherForm.get('total_amount')?.value);
      formdata.append('round_off', this.expensevoucherForm.get('round_off')?.value);
      formdata.append('net_amount', this.expensevoucherForm.get('net_amount')?.value);
      formdata.append('status', this.expensevoucherForm.get('status')?.value);
      formdata.append('note', this.expensevoucherForm.get('note')?.value);

      const cartArray = this.expensevoucherForm.get('expenses_voucher_cart') as FormArray;
      const cartData = [];
      cartArray.controls.forEach((address) => {
        const cartGroup = address as FormGroup;
        const cartObject: any = {};
        Object.keys(cartGroup.controls).forEach((key) => {
          const control = cartGroup.controls[key];
          if (key === 'service_or_product' || key === 'description') {
            cartObject[key] = control.value;
          } else if (!isNaN(control.value)) {
            cartObject[key] = parseFloat(control.value);
          } else {
            cartObject[key] = control.value;
          }
        });
        cartData.push(cartObject);
      });
      formdata.append('expenses_voucher_cart', JSON.stringify(cartData));
      this.transactionService.addExpensVoucher(formdata).subscribe((res: any) => {
        this.loaders = false;
        this.addRes = res
        if (this.addRes.success) {
          this.toastrService.success(this.addRes.msg)
          this.expensevoucherForm.reset()
          this.router.navigate(['//transaction/expensesList'])
        } else {
          this.loaders = false;
          if (res.error) {
            this.toastrService.error(res.error.party[0])
          }
        }
      }, err => {
        this.loaders = false;
      })
    } else {
      this.expensevoucherForm.markAllAsTouched()
      this.toastrService.error('Please Fill All The Required Fields')
    }

  }
  get party() {
    return this.expensevoucherForm.get('party');
  }
  get expense_date() {
    return this.expensevoucherForm.get('expense_date')
  }
  get expense_no() {
    return this.expensevoucherForm.get('expense_no')
  }
  get refrence_bill_no() {
    return this.expensevoucherForm.get('refrence_bill_no')
  }
  get reverse_charge() {
    return this.expensevoucherForm.get('reverse_charge')
  }
  get created_from() {
    return this.expensevoucherForm.get('created_from')
  }
  get tax_amount() {
    return this.expensevoucherForm.get('tax_amount')
  }
  get total_amount() {
    return this.expensevoucherForm.get('total_amount')
  }
  get round_off() {
    return this.expensevoucherForm.get('round_off')
  }
  get net_amount() {
    return this.expensevoucherForm.get('net_amount')
  }
  get paid_amount() {
    return this.expensevoucherForm.get('paid_amount')
  }
  get note() {
    return this.expensevoucherForm.get('note')
  }
  account(index: number) {
    return this.getCart().controls[index].get('account');
  }
  service_or_product(index: number) {
    return this.getCart().controls[index].get('service_or_product');
  }
  amount(index: number) {
    return this.getCart().controls[index].get('amount');
  }
  discount(index: number) {
    return this.getCart().controls[index].get('discount');
  }
  tax(index: number) {
    return this.getCart().controls[index].get('tax');
  }
  tax_value(index: number) {
    return this.getCart().controls[index].get('tax_value');
  }
  total(index: number) {
    return this.getCart().controls[index].get('total');
  }

  // calculations
  totalDiscount(): number {
    let totalDiscount = 0;
    this.getCart().controls.forEach((res: any, index: any) => {
      const discountControl = this.getCart().controls[index].get('discount');
      if (discountControl) {
        totalDiscount += +discountControl.value || 0;
      }
    })
    return totalDiscount;
  }

  totalAmount(): number {
    let totalAmount = 0;
    this.getCart().controls.forEach((res: any, index: any) => {
      const amountControl = this.getCart().controls[index].get('amount');
      if (amountControl) {
        totalAmount += +amountControl.value || 0;
        // this.expensevoucherForm.get('net_amount')?.patchValue(totalAmount);
      }
    })
    return totalAmount;
  }
  totalTax(): number {
    let totalAmount = 0;
    this.selectedTaxPercentage.forEach((val, index) => {
      totalAmount += +val || 0;
    })
    // this.getCart().controls.forEach((res: any, index: any) => {
    //   const amountControl = this.getCart().controls[index].get('tax');
    //   if (amountControl) {
    //     totalAmount += +amountControl.value || 0;
    //   }
    // })

    return totalAmount;
  }
  totalTaxValue(): number {
    let totalAmount = 0;
    this.getCart().controls.forEach((res: any, index: any) => {
      const amountControl = this.getCart().controls[index].get('tax_value');
      if (amountControl) {
        totalAmount += +amountControl.value || 0;
      }
    })
    return totalAmount;
  }
  totalTotal(): number {
    let totalAmount = 0;
    this.getCart().controls.forEach((res: any, index: any) => {
      const amountControl = this.getCart().controls[index].get('total');
      if (amountControl) {
        totalAmount += +amountControl.value || 0;
      }
    })
    return totalAmount;
  }

  calculateTaxAmout(index) {
    const taxControl = this.getCart().controls[index].get('tax');
    const amountControl = this.getCart().controls[index].get('amount');
    if (this.selectedPercentageData[index]?.variable_tax) {
      if (this.selectedPercentageData[index]?.amount_tax_slabs[1]?.from_amount < amountControl) {
        const taxPercentage = this.selectedPercentageData[index]?.amount_tax_slabs[1]?.tax?.tax_percentage;
        this.selectedTaxPercentage[index] = taxPercentage;
      } else {
        const taxPercentage = this.selectedPercentageData[index]?.amount_tax_slabs[0]?.tax?.tax_percentage;
        this.selectedTaxPercentage[index] = taxPercentage;
      }
    } else {
      const taxPercentage = this.selectedPercentageData[index]?.amount_tax_slabs[0]?.tax?.tax_percentage;
      this.selectedTaxPercentage[index] = taxPercentage;
    }
    this.totalTax();
    this.calculateTotalEveryIndex(index);
  }

  onChangePercentage(event, index) {
    console.log(event);
    const target = event.target as HTMLSelectElement;
    const selectedValue = target.value;
    const selectedPrefix = this.taxSlabList.find(prefix => prefix.slab_title === (selectedValue));

    if (selectedPrefix) {
      this.selectedPercentageData[index] = selectedPrefix;
    }
    console.log(selectedPrefix);
    this.calculateTaxAmout(index);
  }

  // 
  isPercentage: boolean[] = [];
  isAmount: boolean[] = [];
  percentage(index) {
    this.isPercentage[index] = false;
    this.isAmount[index] = true;
  }
  rupees(index) {
    this.isPercentage[index] = true;
    this.isAmount[index] = false;
  }

  taxIntoRupees: any[] = [];
  calculateTotalEveryIndex(index: number): number {
    const cartItem = this.getCart().controls[index];
    const amountControl = cartItem.get('amount');
    // const taxPercentageControl = cartItem.get('tax');
    const taxPercentageControl = this.selectedTaxPercentage[index];
    const discountPercentageControl = cartItem.get('discount');
    if (amountControl && taxPercentageControl && discountPercentageControl) {
      const discountPercentage = +discountPercentageControl.value || 0;
      const amountControlValue = +amountControl.value || 0;
      // const taxPercentageValue = +taxPercentageControl.value || 0;
      const taxPercentageValue = +taxPercentageControl || 0;
      console.log(discountPercentage, 'discountPercentage');
      console.log(amountControlValue, 'amountControlValue');
      console.log(taxPercentageValue, 'taxPercentageValue');
      // cost price 
      if (this.isPercentage[index] == true) {
        let getDiscountPrice = (amountControlValue * discountPercentage) / 100;
        console.log(getDiscountPrice, 'discount price');
        let getCoastPrice = amountControlValue - getDiscountPrice;
        console.log(getCoastPrice, 'getCoastPrice');
        //tax price
        let taxPrice = getCoastPrice * taxPercentageValue / 100;
        console.log(taxPrice, 'taxPrice');
        this.taxIntoRupees[index] = taxPrice || 0;
        console.log(this.taxIntoRupees, 'tax value');
        cartItem.get('tax_value')?.patchValue(taxPrice);
        let total = amountControlValue + taxPrice;
        cartItem.get('total')?.patchValue(total);
      } else if (this.isAmount[index] == true) {
        let getCoastPrice = amountControlValue - discountPercentage;
        console.log(getCoastPrice, 'getCoastPrice');
        //tax price
        let taxPrice = getCoastPrice * taxPercentageValue / 100;
        console.log(taxPrice, 'taxPrice');
        this.taxIntoRupees[index] = taxPrice || 0;
        console.log(this.taxIntoRupees, 'tax value');
        cartItem.get('tax_value')?.patchValue(taxPrice);
        let total = amountControlValue + taxPrice;
        cartItem.get('total')?.patchValue(total);
      }
    }
    return 0;
  }
  // round off 
  roundOff: any = 0;
  changeValue(value: any) {
    this.roundOff = this.expensevoucherForm.get('round_off')?.value;
    console.log(this.roundOff, 'this.roundoff');
    if (value) {
      this.expensevoucherForm.get('round_off')?.patchValue(value);
      console.log(this.expensevoucherForm.get('round_off')?.value);
      this.roundOff = value;
      console.log(this.expensevoucherForm.value);
    } else {
      this.expensevoucherForm.get('round_off')?.patchValue(this.roundOff);
    }
  }
  isMinus = false
  updateValue(sign: string) {
    this.roundOff = sign === '+' ? Math.abs(this.roundOff) : -Math.abs(this.roundOff);
    if (sign === '-') {
      this.isMinus = true;
    } else {
      this.isMinus = false;
    }
  }
  calculateTotal(): any {
    let totalAmount: any = 0;
    let total: any = 0;
    let roundOff: any = this.expensevoucherForm.get('round_off')?.value;
    this.getCart().controls.forEach((res: any, index: any) => {
      const amountControl = this.getCart().controls[index].get('total');
      if (amountControl) {
        totalAmount += +amountControl.value || 0;
      }
    })
    const parsedRoundOff = parseFloat(roundOff) || 0;
    total = totalAmount + parsedRoundOff;
    return total;
  }
}

