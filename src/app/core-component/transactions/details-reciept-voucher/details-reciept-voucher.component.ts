import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-details-reciept-voucher',
  templateUrl: './details-reciept-voucher.component.html',
  styleUrls: ['./details-reciept-voucher.component.scss']
})
export class DetailsRecieptVoucherComponent implements OnInit {

  constructor(private Arout: ActivatedRoute, private transactionService: TransactionService, private location: Location) { }
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
  }
  recieptVoucherDetail: any
  getdata() {
    this.transactionService.getRecieptVoucherById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.recieptVoucherDetail = res;
        this.filteredData = this.recieptVoucherDetail?.logs.slice(); // Initialize filteredData with the original data
        this.filterData(); 
      }
    })
  }
  goBack() {
    this.location.back();
  }
  p: number = 1
  pageSize: number = 10;
  itemsPerPage = 10;
  key = 'id';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }
    // filter data
    filteredData: any[]; 
    filterOpertion:any;
    filterData() {
      let filteredData = this.recieptVoucherDetail?.logs.slice();
      if (this.filterOpertion) {
        filteredData = filteredData.filter((item) => item?.operation_type === this.filterOpertion);
      }
      this.filteredData = filteredData;
    }
    clearFilter() {
      this.filterOpertion=null;
      this.filterData();
    }
}
