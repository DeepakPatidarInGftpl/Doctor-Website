import { __values } from 'tslib';
import { AfterContentInit, AfterViewChecked, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PosCartService } from 'src/app/Services/PosCart/pos-cart.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { creditLimitInterfase } from 'src/app/interfaces/account';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit,OnDestroy {
  paymentModeList:any[] = [];
  accountListAlies: any[] = [];
  sub : Subscription = new Subscription();
  paymentForm : FormGroup;
 @Input() total :any;
 @Input() userId :number;
 @Input() creditLimits :number;

//  @Output() paymentData = new EventEmitter();
  constructor(
    private cartService: PosCartService,
    private _fb : FormBuilder,
    private transactionService: TransactionService,
    private _contact : ContactService
  ) { }

  ngOnInit(): void {
    this.paymentForm = this._fb.group({
      paymentArray : this._fb.array([])
    });
    this.PaymentMothod.push(this.cart());
       this.PageLoadApiCall();
       this.SetAmountForm(this.total,'amount');
       
  }
  
 

  get PaymentMothod():FormArray {
    return <FormArray>(this.paymentForm.get('paymentArray') as FormArray)
  }
  
  cart():FormGroup{
    const data = new Date().toLocaleString('en-CA', { timeZone: 'America/Vancouver' }).split(',')[0];
  return  this._fb.group({
      mode_type: ["AgainstBill",Validators.required],
      user_account_id:[this.userId,Validators.required],
      payment_account:["",Validators.required],
      receipt_type:["",Validators.required],
      payment_mode:[""],
      transaction_date:[data,Validators.required],
      transaction_id:[""],
      note:[""],
      amount:[0,Validators.required],
      credit_note : ""
    });
  };


  SetAmountForm(total: number,type:string){
    this.PaymentMothod.controls.forEach((ctrl:FormControl)=>ctrl.get(type).setValue(total));
  };


  SetByIndex(index: number,total:number){
    this.PaymentMothod.at(index).get('amount').setValue(total)
  }
  showError : boolean = false;
  AddToCart(){
    let Recieved_Amount : number = this.calculetPayment();
   
    if (Recieved_Amount < this.total ) {
      this.PaymentMothod.push(this.cart());
      let val = (this.total - Recieved_Amount);
      let index = this.PaymentMothod.controls.length -1
      this.SetByIndex(Number(index),Number(val))
    }else{
      this.showError = true;
    }

    console.log(this.paymentForm.value)
    
    
  };



ckForm : boolean = false;
showCrError : boolean = false;
Submit(){
  console.log(this.paymentForm)
  if(this.paymentForm.invalid){
    this.ckForm = true;
    return {success : false}
  }
  const val = this.paymentForm.value;

  if (this.paymentForm.valid) {
    const recieved_Amount : number = this.calculetPayment()
     if(recieved_Amount == this.total){
     return val.paymentArray
    }else if (recieved_Amount < this.total) {
      let new_total = (this.total - recieved_Amount)
     if (this.creditLimitsList.billable_amount >= new_total) {
         return val.paymentArray
      }else {
     
        this.showCrError = true;
        return {success : false}
      }
     
    }
  }
 
 
}
calculetPayment(){
  let recieved_Amount : number = 0;
   return recieved_Amount = this.PaymentMothod.controls.reduce((acc, ctrl) => acc + +ctrl.get('amount').value, 0);
}

creditLimitsList : creditLimitInterfase
  PageLoadApiCall(){
    this.sub = this.cartService.paymentModesLogo().subscribe((res :any) => {
      this.paymentModeList = res;
      
    });
    this._contact.getCreditLimitByUserId(this.creditLimits).subscribe({
      next : (value) =>{
        this.creditLimitsList = value
        console.log(value,'creditLimits')
      },
    })
  }

  onSelectPaymentAccount(val:string, index:number){
      const formGroup = this.PaymentMothod.at(index) as FormGroup;
      formGroup.get('payment_account').setValue(val);
      console.log(this.paymentForm.value,'valu')
  };

  receiptTypeChange(event :any, i : number){
   if (event.target.value == 'Bank'){
      this.PaymentMothod.at(i).get('payment_mode').setValidators([Validators.required]);
      this.PaymentMothod.updateValueAndValidity();
    }
    const aliesType = event.target.value === 'Cash' ? 'cash-in-hand' : 'bank-accounts';
    this.getAccountByAlies(aliesType, i);
  };
  getAccountByAlies(value: string, index: number) {
    this.transactionService.getAccoutAlies(value).subscribe((res: any) => {
      const paymentGroup = this.PaymentMothod.at(index) as FormGroup;
      paymentGroup.get('payment_account').setValue('');
      this.accountListAlies[index] = res;
    });
  };

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
