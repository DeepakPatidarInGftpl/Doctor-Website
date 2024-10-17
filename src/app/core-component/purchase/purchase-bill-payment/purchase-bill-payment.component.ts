import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators} from '@angular/forms';

import { Subscription } from 'rxjs';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { PosCartService } from 'src/app/Services/PosCart/pos-cart.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';
import { creditLimitInterfase } from 'src/app/interfaces/account';
@Component({
  selector: 'app-purchase-bill-payment',
  templateUrl: './purchase-bill-payment.component.html',
  styleUrls: ['./purchase-bill-payment.component.scss']
})
export class PurchaseBillPaymentComponent implements OnInit {

  
  accountListAlies: any[] = [];
  paymentForm : FormGroup;
 @Input() total :any;
 @Input() userData :any;
 @Input() creditLimits :number;
 @Output() paymentData = new EventEmitter();
  constructor(
    private _fb : FormBuilder,
    private transactionService: TransactionService,
    private _contact : ContactService
  ) { }

  ngOnInit(): void {
    this.paymentForm = this._fb.group({
      paymentArray : this._fb.array([])
    });
    this.PaymentMothod.push(this.cart());
      
       this.SetAmountForm(this.total,'amount');
       console.log(this.creditLimits)
       this.pageloadApiCall()
       
  }
  
 

  get PaymentMothod():FormArray {
    return <FormArray>(this.paymentForm.get('paymentArray') as FormArray)
  }
  
  cart():FormGroup{
    const data = new Date().toLocaleString('en-CA', { timeZone: 'America/Vancouver' }).split(',')[0];

  return  this._fb.group({
   
      mode_type: ["Against Bill",Validators.required],
      supplier:[this.userData.id,Validators.required],
      date:[this.userData.date,Validators.required],
      payment_account:["",Validators.required],
      transaction_date:[data,Validators.required],
      transaction_id:[""],
      note:[""],
      amount:[0,Validators.required],
      payment_type : ['',Validators.required],
      bank_payment  :[''],
      debit_note_cart : this._fb.array([]),

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
    const reciving = this.calculetPayment()
     if (reciving < this.total ) {
      this.PaymentMothod.push(this.cart());
      let val = (this.total - reciving);
      let index = this.PaymentMothod.controls.length -1
      this.SetByIndex(Number(index),Number(val))
    }else{
      this.showError = true;
    }

    console.log(this.paymentForm.value)
    
    
  };

calculetPayment(){
  let recieved_Amount : number = 0;
   return recieved_Amount = this.PaymentMothod.controls.reduce((acc, ctrl) => acc + +ctrl.get('amount').value, 0);
}

ckForm : boolean = false;
showCrError : boolean = false;
Submit(){
  console.log('call submit')
  if(this.paymentForm.invalid){
    this.ckForm = true;
    return {success : false}
  }
 
  if (this.paymentForm.valid) {
   let recieved_Amount : number = this.calculetPayment();
   const val = this.paymentForm.value;
   return val.paymentArray
  //  if(recieved_Amount == this.total){
  //    return val.paymentArray
  //   }else if (recieved_Amount < this.total) {
  //     let new_total = (this.total - recieved_Amount)
  //    if (this.creditLimitsList.billable_amount >= new_total) {
  //        return val.paymentArray
  //     }else {
     
  //       this.showCrError = true;
  //       return {success : false}
  //     }
     
  //   }
 }
 
 
}
creditLimitsList: creditLimitInterfase;
pageloadApiCall(){
// this._contact.getCreditLimitByUserId(this.creditLimits).subscribe({
//   next : (value : creditLimitInterfase) =>{
//     console.log(value)
//     this.creditLimitsList = value
//   },
// })
}

  

  onSelectPaymentAccount(val:string, index:number){
      const formGroup = this.PaymentMothod.at(index) as FormGroup;
      formGroup.get('payment_account').setValue(Number(val));
      console.log(this.paymentForm.value,'valu')
  };

  receiptTypeChange(event :any, i : number){
   if (event.target.value == 'Bank'){
      this.PaymentMothod.at(i).get('bank_payment').setValidators([Validators.required]);
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
 
  }

}
