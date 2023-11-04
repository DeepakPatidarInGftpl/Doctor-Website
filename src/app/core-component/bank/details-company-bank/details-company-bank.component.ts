import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-details-company-bank',
  templateUrl: './details-company-bank.component.html',
  styleUrls: ['./details-company-bank.component.scss']
})
export class DetailsCompanyBankComponent implements OnInit {

 
  constructor(private coreService: CoreService, private Arout: ActivatedRoute,private location:Location) { }
  bankDetails: any
  id: any
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.coreService.getCompanyBankById(this.id).subscribe(res=>{
      this.bankDetails=res
      this.filteredData = this.bankDetails?.logs.slice(); // Initialize filteredData with the original data
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
    let filteredData = this.bankDetails?.logs.slice();
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

