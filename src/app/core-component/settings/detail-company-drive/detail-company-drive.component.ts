import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-detail-company-drive',
  templateUrl: './detail-company-drive.component.html',
  styleUrls: ['./detail-company-drive.component.scss']
})
export class DetailCompanyDriveComponent implements OnInit {

  constructor(private contactService: CoreService, private Arout: ActivatedRoute, private router:Router ,private location: Location) { }
  
  financialYearDetails: any;
  id: any;
  imageUrl="https://pv.greatfuturetechno.com"
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.contactService.getCompanyDriveById(this.id).subscribe((res:any) => {
      // res.map((res:any)=>{
        if(res.id==this.id){
          this.financialYearDetails = res;
          this.filteredData = this.financialYearDetails?.logs.slice(); 
          this.filterData(); 
        }
      // })
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
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.filteredData?.length;
    }
  }
}

