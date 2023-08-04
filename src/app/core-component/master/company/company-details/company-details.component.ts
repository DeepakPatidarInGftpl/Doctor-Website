import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {

  constructor(private companyService: CompanyService, private Arout: ActivatedRoute) { }



  subscription!: Subscription

  id:any
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getId();
  }

  companyDetails:any
  getId(){
    this.companyService.getCompanyById(this.id).subscribe(res=>{
      this.companyDetails=res;
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
