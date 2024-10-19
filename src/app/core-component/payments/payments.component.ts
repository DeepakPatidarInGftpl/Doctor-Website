import { __values } from 'tslib';
import {  Component, Input, OnDestroy, OnInit } from '@angular/core';
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
  sub2 : Subscription = new Subscription();
  paymentForm : FormGroup;
 @Input() total :any;
 @Input() userId :number;
 @Input() creditLimits :number;
 @Input() TypeOfuser :any;
 new_total :any;


  constructor(
    private cartService: PosCartService,
    private _fb : FormBuilder,
    private transactionService: TransactionService,
    private _contact : ContactService
  ) { }

  ngOnInit(): void {
    this.paymentForm = this._fb.group({
      paymentArray : this._fb.array([]),
      point_type : [''],
      redeem_point : ['']
   });
    this.PaymentMothod.push(this.cart());
       this.PageLoadApiCall();
       this.SetAmountForm(this.total,'amount');
       

   this.new_total = this.total

  this.sub2 = this.paymentForm.get('redeem_point').valueChanges.subscribe({
        next : (value)=> {
          this.new_total = this.total;
          this.SetAmountForm((this.new_total - value),'amount');
         },
       })
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
   
if (this.TypeOfuser?.ty == 'Customer') {
  
 let vals : number =  Number(this.GetValue('redeem_point'))
 this.new_total = this.new_total - vals
}
 if (Recieved_Amount < this.new_total ) {
      this.PaymentMothod.push(this.cart());
      let val = (this.new_total - Recieved_Amount);
      let index = this.PaymentMothod.controls.length -1
      this.SetByIndex(Number(index),Number(val))
    }
    else{
      this.showError = true;
    }

    
    
  };

  GetValue(str : string) :string{
   return this.paymentForm.get(str).value;
  }


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
     if(recieved_Amount == this.new_total){
      return val.paymentArray
    }else if (recieved_Amount < this.new_total) {
      let new_total = (this.new_total - recieved_Amount)
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
    console.log('if',this.paymentForm)
      this.PaymentMothod.at(i).get('payment_mode').setValidators([Validators.required]);
      this.PaymentMothod.updateValueAndValidity();
    }else{
      console.log('else',this.paymentForm)

      this.PaymentMothod.at(i).get('payment_mode').setValidators(null);
      this.PaymentMothod.updateValueAndValidity();
    }
    
    this.PaymentMothod.updateValueAndValidity();
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
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }

}
