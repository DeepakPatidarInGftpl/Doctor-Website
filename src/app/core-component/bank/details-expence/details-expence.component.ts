import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PosDashboardService } from 'src/app/Services/pos-dashboard.service';
@Component({
  selector: 'app-details-expence',
  templateUrl: './details-expence.component.html',
  styleUrls: ['./details-expence.component.scss']
})
export class DetailsExpenceComponent implements OnInit {

  constructor(private Arout: ActivatedRoute, private posService: PosDashboardService,private location:Location) { }
  id: any
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
  }

  ngAfterViewInit() {
    this.jquery("assets/plugins/owlcarousel/owl.carousel.min.js")
    this.LoadScript("assets/js/product-details.js")
  }
  jquery(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  LoadScript(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
 expenceDetail: any
  getdata() {
    this.posService.getExpenseById(this.id).subscribe((res:any) => {
      res.map((res:any)=>{
        if (res.id == this.id){
          this.expenceDetail = res
          this.filteredData = this.expenceDetail?.logs.slice(); // Initialize filteredData with the original data
          this.filterData(); 
          
        }
      })
    })
  }

  p: number = 1
  pageSize: number = 10;
  itemsPerPage = 10;
  key = 'id';
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }
    // filter data
    filteredData: any[]; 
    filterOpertion:any;
    filterData() {
      let filteredData = this.expenceDetail?.logs.slice();
      if (this.filterOpertion) {
        filteredData = filteredData.filter((item) => item?.operation_type === this.filterOpertion);
      }
      this.filteredData = filteredData;
    }
    clearFilter() {
      this.filterOpertion=null;
      this.filterData();
    }
  sho = true;
  sho1 = false;
  sho2 = false;
  hide() {
    this.sho = false;
    this.sho1 = !this.sho1;
    this.sho2 = false;
  }
  hide1() {
    this.sho = true;
    this.sho1 = false;
    this.sho2 = !this.sho2;
  }

  goBack(){
    this.location.back();
  }
}

