import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-subcategorydetails',
  templateUrl: './subcategorydetails.component.html',
  styleUrls: ['./subcategorydetails.component.scss']
})
export class SubcategorydetailsComponent implements OnInit {

  constructor(private coreService: CoreService, private Arout: ActivatedRoute,) { }
  subcatDetails: any
  id: any
  imgUrl='https://pv.greatfuturetechno.com'
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.coreService.getProductSubcategoryById(this.id).subscribe(res=>{
      this.subcatDetails=res
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
}
