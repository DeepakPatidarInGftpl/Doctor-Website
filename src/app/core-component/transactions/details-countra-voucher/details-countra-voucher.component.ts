import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-details-countra-voucher',
  templateUrl: './details-countra-voucher.component.html',
  styleUrls: ['./details-countra-voucher.component.scss']
})
export class DetailsCountraVoucherComponent implements OnInit {

  constructor(private transactionService: TransactionService, private Arout: ActivatedRoute,private location: Location ) { }
  countraVooucherDetails: any
  id: any
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.transactionService.getCountraVoucherById(this.id).subscribe(res=>{
      this.countraVooucherDetails=res
    })
  }

  goBack() {
    this.location.back();
  }
}

