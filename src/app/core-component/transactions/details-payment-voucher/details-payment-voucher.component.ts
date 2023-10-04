import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-details-payment-voucher',
  templateUrl: './details-payment-voucher.component.html',
  styleUrls: ['./details-payment-voucher.component.scss']
})
export class DetailsPaymentVoucherComponent implements OnInit {

  constructor(private Arout: ActivatedRoute, private transactionService: TransactionService, private location: Location) { }
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
  }
  
  paymentVoucherDetail: any
  getdata() {
    this.transactionService.getPaymentVoucherById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.paymentVoucherDetail = res;
        }
    })
  }

  goBack() {
    this.location.back();
  }
}

