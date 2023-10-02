import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-details-journal-voucher',
  templateUrl: './details-journal-voucher.component.html',
  styleUrls: ['./details-journal-voucher.component.scss']
})
export class DetailsJournalVoucherComponent implements OnInit {

  constructor(private Arout: ActivatedRoute, private transactionService: TransactionService, private location: Location) { }
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
  }
  journelVoucherDetail: any
  getdata() {
    this.transactionService.getJournalVoucherById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.journelVoucherDetail = res;
      }
    })
  }
  goBack() {
    this.location.back();
  }
}
