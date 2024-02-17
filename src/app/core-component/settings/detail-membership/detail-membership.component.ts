import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HrmServiceService } from 'src/app/Services/hrm/hrm-service.service';

@Component({
  selector: 'app-detail-membership',
  templateUrl: './detail-membership.component.html',
  styleUrls: ['./detail-membership.component.scss']
})
export class DetailMembershipComponent implements OnInit {
  imgUrl = 'https://pv.greatfuturetechno.com';
  constructor(private hrmService: HrmServiceService, private Arout: ActivatedRoute, private router:Router ,private location: Location) { }
  
  termsDetails: any;
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.hrmService.getMembershipById(this.id).subscribe((res:any) => {
      if(res.id==this.id){
        this.termsDetails = res;
        this.filteredData = this.termsDetails?.logs.slice(); 
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
    let filteredData = this.termsDetails?.logs.slice();
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
    this.router.navigate(['//settings/terms'], { state: { id: this.id } })
  }
}


