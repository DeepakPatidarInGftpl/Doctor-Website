import { AfterContentInit, AfterViewChecked, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PosCartService } from 'src/app/Services/PosCart/pos-cart.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

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
  constructor(
    private cartService: PosCartService,
    private _fb : FormBuilder,
    private transactionService: TransactionService,
  ) { }

  ngOnInit(): void {
    this.paymentForm = this._fb.group({
      paymentArray : this._fb.array([])
    });
    this.PaymentMothod.push(this.cart());
       this.PageLoadApiCall();
      this.SetAmountForm(this.total);
       
  }
  // ngAfterContentInit(): void {
  //   this.PaymentMothod.controls.forEach((ctrl:FormControl)=>ctrl.get('amount').setValue(this.total));
  //   console.log('call')
  // }
 

  get PaymentMothod():FormArray {
    return <FormArray>(this.paymentForm.get('paymentArray') as FormArray)
  }
  
  cart():FormGroup{
    const data = new Date().toLocaleString('en-CA', { timeZone: 'America/Vancouver' }).split(',')[0];;
    // console.log(first)
    
  return  this._fb.group({
      mode_type: ["",Validators.required],
      user_account_id:["",Validators.required],
      payment_account:["",Validators.required],
      receipt_type:["",Validators.required],
      payment_mode:["",Validators.required],
      transaction_date:[data,Validators.required],
      transaction_id:["",Validators.required],
      note:["",Validators.required],
      amount:[0,Validators.required],
    });
  };

  SetAmountForm(total: number){
    this.PaymentMothod.controls.forEach((ctrl:FormControl)=>ctrl.get('amount').setValue(total));
  };
  SetByIndex(index: number,total:number){
    this.PaymentMothod.at(index).get('amount').setValue(total)
  }
  showError : boolean = false;
  AddToCart(){
    let Recieved_Amount : number = 0;
    this.PaymentMothod.controls.forEach((ctrl:FormControl)=>{
      Recieved_Amount += +ctrl.get('amount').value;
    });
    if (Recieved_Amount < this.total ) {
      this.PaymentMothod.push(this.cart());
      let val = (this.total - Recieved_Amount);
      let index = this.PaymentMothod.controls.length -1
      this.SetByIndex(Number(index),Number(val))
    }else{
      this.showError = true;
    }

    
    
  };

  PageLoadApiCall(){
    this.sub = this.cartService.paymentModesLogo().subscribe((res :any) => {
      this.paymentModeList = res;
      
    });
  }

  onSelectPaymentAccount(val:string, index:number){
      const formGroup = this.PaymentMothod.at(index) as FormGroup;
      formGroup.get('payment_account').setValue(val);
      console.log(this.paymentForm.value,'valu')
  };

  receiptTypeChange(event :any, i : number){
    
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
