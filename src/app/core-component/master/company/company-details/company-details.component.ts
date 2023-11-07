import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {

  constructor(private companyService: CompanyService, private Arout: ActivatedRoute, private location: Location) { }
  companyDetails: any;
  id: any;

  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.companyService.getCompanyById(this.id).subscribe(res => {
      this.companyDetails = res;
      this.filteredData = this.companyDetails?.logs.slice(); // Initialize filteredData with the original data
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
  filterOpertion: any;
  filterData() {
    let filteredData = this.companyDetails?.logs.slice();
    if (this.filterOpertion) {
      filteredData = filteredData.filter((item) => item?.operation_type === this.filterOpertion);
    }
    this.filteredData = filteredData;
  }
  clearFilter() {
    this.filterOpertion = null;
    this.filterData();
  }
}
