import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-staticpage-detals',
  templateUrl: './staticpage-detals.component.html',
  styleUrls: ['./staticpage-detals.component.scss']
})
export class StaticpageDetalsComponent implements OnInit {

  constructor(private coreService: CoreService, private Arout: ActivatedRoute) { }

  slug: any
  details:any
  ngOnInit(): void {
    this.slug = this.Arout.snapshot.paramMap.get('slug');

    this.coreService.getStaticPageBySlug(this.slug).subscribe(res=>{
      console.log(res);
      this.details=res;
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
