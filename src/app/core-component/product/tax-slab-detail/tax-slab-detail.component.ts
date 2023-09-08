import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-tax-slab-detail',
  templateUrl: './tax-slab-detail.component.html',
  styleUrls: ['./tax-slab-detail.component.scss']
})
export class TaxSlabDetailComponent implements OnInit {

 
  constructor(private Arout: ActivatedRoute, private coreService: CoreService) { }
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
  productDetail: any
  getdata() {
    this.coreService.getTaxSlabById(this.id).subscribe(res => {
          this.productDetail = res
          // console.log(res);
    })
  }
}

