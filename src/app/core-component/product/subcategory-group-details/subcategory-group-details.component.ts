import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-subcategory-group-details',
  templateUrl: './subcategory-group-details.component.html',
  styleUrls: ['./subcategory-group-details.component.scss']
})
export class SubcategoryGroupDetailsComponent implements OnInit {
  constructor(private coreService: CoreService, private Arout: ActivatedRoute,) { }
  subcategoryDetails: any
  id: any
  imgUrl='https://pv.greatfuturetechno.com'
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.coreService.getSubcategoryGroupById(this.id).subscribe(res=>{
      this.subcategoryDetails=res
      // console.log(this.subcategoryDetails?.category);
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
