import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-financial-year-details',
  templateUrl: './financial-year-details.component.html',
  styleUrls: ['./financial-year-details.component.scss']
})
export class FinancialYearDetailsComponent implements OnInit {

  constructor(private contactService: CoreService, private Arout: ActivatedRoute, private router:Router ,private location: Location) { }
  
  financialYearDetails: any;
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.contactService.getFinancialYearById(this.id).subscribe((res:any) => {
      res.map((res:any)=>{
        if(res.id==this.id){
          this.financialYearDetails = res;
          this.filteredData = this.financialYearDetails?.logs.slice(); 
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
    let filteredData = this.financialYearDetails?.logs.slice();
    if (this.filterOpertion) {
      filteredData = filteredData.filter((item) => item?.operation_type === this.filterOpertion);
    }
    this.filteredData = filteredData;
  }
  clearFilter() {
    this.filterOpertion=null;
    this.filterData();
  }

  navigate(){
    this.router.navigate(['//settings/finncialYear'], { state: { id: this.id } })
  }
}

