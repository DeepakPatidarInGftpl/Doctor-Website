import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-detail-expenses',
  templateUrl: './detail-expenses.component.html',
  styleUrls: ['./detail-expenses.component.scss']
})
export class DetailExpensesComponent implements OnInit {

  constructor(private Arout: ActivatedRoute, private transactionService: TransactionService, private location: Location) { }
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
  }
  journelVoucherDetail: any;
  discount:any[]=[];
  totalDiscount=0;
  //tax
  tax:any[]=[];
  totalTax=0;
  getdata() {
    this.transactionService.getExpensVoucherById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.journelVoucherDetail = res;
        this.journelVoucherDetail?.cart.map((res:any)=>{
          //discount 
          this.discount.push(res?.discount);
          this.totalDiscount=0
          this?.discount?.forEach((number: any) => {
            this.totalDiscount += number;
          })
          //tax
          this.tax.push(res?.tax);
          this.totalTax=0
          this?.tax?.forEach((number: any) => {
            this.totalTax += number;
          })
        })
        this.filteredData = this.journelVoucherDetail?.logs.slice(); // Initialize filteredData with the original data
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
      let filteredData = this.journelVoucherDetail?.logs.slice();
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
        this.itemsPerPage = this.journelVoucherDetail?.logs?.length;
      }
    }
}
