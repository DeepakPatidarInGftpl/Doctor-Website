import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-subcategorydetails',
  templateUrl: './subcategorydetails.component.html',
  styleUrls: ['./subcategorydetails.component.scss']
})
export class SubcategorydetailsComponent implements OnInit {

  constructor(private coreService: CoreService, private Arout: ActivatedRoute, private router: Router,private location:Location) { }
  subcatDetails: any
  id: any
  imgUrl='https://pv.greatfuturetechno.com'
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.coreService.getProductSubcategoryById(this.id).subscribe(res=>{
      this.subcatDetails=res
      this.filteredData = this.subcatDetails?.logs.slice(); // Initialize filteredData with the original data
      this.filterData(); 
    })
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
    let filteredData = this.subcatDetails?.logs.slice();
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
    this.router.navigate(['//product/subcategorylist'], { state: { id: this.id } })
  }
}
