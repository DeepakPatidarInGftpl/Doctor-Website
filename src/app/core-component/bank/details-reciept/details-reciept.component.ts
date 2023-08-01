import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PosDashboardService } from 'src/app/Services/pos-dashboard.service';

@Component({
  selector: 'app-details-reciept',
  templateUrl: './details-reciept.component.html',
  styleUrls: ['./details-reciept.component.scss']
})

export class DetailsRecieptComponent implements OnInit {

  constructor(private Arout: ActivatedRoute, private posService: PosDashboardService) { }
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
 vendorDetail: any
  getdata() {
    this.posService.getRecipt().subscribe((res:any) => {
      res.map((res:any)=>{
        if (res.id == this.id){
          this.vendorDetail = res
          console.log(res);
        }
      })
    })
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
}

