import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/Services/ContactService/contact.service';

@Component({
  selector: 'app-detail-supplier',
  templateUrl: './detail-supplier.component.html',
  styleUrls: ['./detail-supplier.component.scss']
})
export class DetailSupplierComponent implements OnInit {

  constructor(private Arout: ActivatedRoute, private contactService: ContactService) { }

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
  supplierDetail: any
  getdata() {
    this.contactService.getSupplierById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.supplierDetail = res
        // console.log(res); 
      }
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

  isBatch = true;
  showBatch() {
    this.isBatch = false;
  }
  hideBatch() {
    this.isBatch = true;
  }
}

