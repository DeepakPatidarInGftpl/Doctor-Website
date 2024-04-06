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
      this.countraVooucherDetails=res;
      this.filteredData = this.countraVooucherDetails?.logs.slice(); // Initialize filteredData with the original data
      this.filterData(); 
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
      let filteredData = this.countraVooucherDetails?.logs.slice();
      if (this.filterOpertion) {
        filteredData = filteredData.filter((item) => item?.operation_type === this.filterOpertion);
      }
      this.filteredData = filteredData;
    }
    clearFilter() {
      this.filterOpertion=null;
      this.filterData();
    }
    changePg(val: any) {
      console.log(val);
      if (val == -1) {
        this.itemsPerPage = this.filteredData?.length;
      }
    }
}

