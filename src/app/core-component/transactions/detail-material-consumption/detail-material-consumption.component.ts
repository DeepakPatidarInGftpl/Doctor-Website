import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-detail-material-consumption',
  templateUrl: './detail-material-consumption.component.html',
  styleUrls: ['./detail-material-consumption.component.scss']
})
export class DetailMaterialConsumptionComponent implements OnInit {

  constructor(private transactionService: TransactionService, private Arout: ActivatedRoute,private location:Location) { }
  consuptionDetail: any
  id: any
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.transactionService.getMaterialConsuptionById(this.id).subscribe(res=>{
      this.consuptionDetail=res;
      this.filteredData = this.consuptionDetail?.logs.slice(); // Initialize filteredData with the original data
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
      let filteredData = this.consuptionDetail?.logs.slice();
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

