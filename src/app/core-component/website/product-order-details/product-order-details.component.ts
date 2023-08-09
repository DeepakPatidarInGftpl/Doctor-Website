import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { WebsiteService } from 'src/app/Services/website/website.service';

@Component({
  selector: 'app-product-order-details',
  templateUrl: './product-order-details.component.html',
  styleUrls: ['./product-order-details.component.scss']
})
export class ProductOrderDetailsComponent implements OnInit {

  public tableDatas: any=[
    {
        "id": 5,
        "carts": [
            {
                "id": 9,
                "product": {
                    "title": "ABCDE",
                    "product_images": [
                        {
                            "id": 11,
                            "product_colour": "blue",
                            "image": "/media/pv_image_Ww2wK8R.webp",
                            "is_active": true,
                            "product": 4
                        },
                        {
                            "id": 12,
                            "product_colour": "pink",
                            "image": null,
                            "is_active": true,
                            "product": 4
                        },
                        {
                            "id": 20,
                            "product_colour": "qwertyui",
                            "image": "/media/python-plus-django-1.webp",
                            "is_active": true,
                            "product": 4
                        },
                        {
                            "id": 22,
                            "product_colour": "pink",
                            "image": "/media/pv_image_update_bfVX9le.webp",
                            "is_active": true,
                            "product": 4
                        }
                    ]
                },
                "variant": {
                    "id": 37,
                    "variant_name": "Blackxl"
                },
                "brand": {
                    "id": 1,
                    "title": "BOOSH",
                    "discount": 20
                },
                "color": {
                    "id": 3,
                    "title": "pinkish",
                    "color_code": "#9966dd",
                    "is_active": true
                },
                "size": {
                    "id": 5,
                    "title": "XXL",
                    "code": "55",
                    "is_active": true
                },
                "mrp": 10,
                "selling_price": 10,
                "category_discount": 10,
                "subcategory_discount": 40,
                "brand_discount": 10,
                "extra_discount": 10,
                "qty": 4,
                "cart_status": true,
                "status": "New",
                "cod_available": true,
                "sub_total": 100.0,
                "discount_total": 100.0,
                "total_amount": 100.0,
                "is_return": true
            }
        ],
        "address_type": "Deliver",
        "store_address": {
            "id": 5,
            "name": "abc",
            "email": "abc@gmail.com",
            "mobile_no": "10011",
            "alternative_mobile_no": "110212",
            "address": "abc abc",
            "line1": "abc",
            "line2": "abc",
            "country": "aa",
            "state": "aa",
            "city": "aa",
            "pincode": 123211020,
            "is_active": true,
            "is_delete": false,
            "datetime": "2023-08-08T15:15:09.523796+05:30"
        },
        "billing_address": {
            "id": 11,
            "address_type": "Billing",
            "name": "abc",
            "email": "abd@bad.jdn",
            "mobile_no": "74185296300",
            "alternative_mobile_no": "7845128745",
            "address": "avcb",
            "line1": "5424512",
            "line2": "7844512",
            "country": "54124521",
            "state": "4514521",
            "city": "54215421",
            "pincode": 5425425
        },
        "shipping_address": {
            "id": 12,
            "address_type": "Billing",
            "name": "abc",
            "email": "abd@bad.jdn",
            "mobile_no": "74185296300",
            "alternative_mobile_no": "7845128745",
            "address": "avcb",
            "line1": "5424512",
            "line2": "7844512",
            "country": "54124521",
            "state": "4514521",
            "city": "54215421",
            "pincode": 5425425
        },
        "status": "New",
        "payment_status": "Success",
        "payment_type": "Online",
        "sub_total_amount": 10.0,
        "total_discount": 101.0,
        "couopn_discount": 101010,
        "total_amount": 10.0,
        "final_amount": 10.0,
        "cancel_date": "2023-08-08T15:15:45+05:30",
        "cancel_reason": {
            "id": 6,
            "type": "Cancel",
            "title": "9565",
            "is_active": true,
            "is_delete": false
        },
        "order_date": "2023-08-08T15:16:08.890591+05:30",
        "accepted_at": "2023-08-08T15:16:03+05:30",
        "dispatched_at": "2023-08-08T15:16:05+05:30",
        "delivered_at": "2023-08-08T15:16:07+05:30"
    }
  ]
  tableData:any
  constructor(private Arout: ActivatedRoute, private websiteService: WebsiteService) { }
  id: any
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
  
    this.tableDatas.map((res)=>{
      if(this.id==res.id){
        this.tableData=res;
        console.log(this.tableData);
      }
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
 productOrderDetail: any
  getdata() {
    this.websiteService.getProductOrderById(this.id).subscribe(res => {
      this.productOrderDetail = res
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

