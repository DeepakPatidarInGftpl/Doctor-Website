import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-details-scrap-entry',
  templateUrl: './details-scrap-entry.component.html',
  styleUrls: ['./details-scrap-entry.component.scss']
})
export class DetailsScrapEntryComponent implements OnInit {

  constructor(private Arout: ActivatedRoute, private transactionService: TransactionService, private location: Location) { }
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
  }
  recieptVoucherDetail: any
  getdata() {
    this.transactionService.getScrapEntryById(this.id).subscribe((res:any) => {
      res.map((res:any)=>{
        if (this.id == res.id) {
          this.recieptVoucherDetail = res;
          console.log(this.recieptVoucherDetail);
          
          this.filteredData = this.recieptVoucherDetail?.logs.slice(); // Initialize filteredData with the original data
          this.filterData(); 
        }
      })
     
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

