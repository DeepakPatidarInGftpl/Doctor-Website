import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { WebsiteService } from 'src/app/Services/website/website.service';

import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.scss']
})
export class ProductOrderComponent implements OnInit {

  public tableData: any
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  // public tableData: any=[
  //   {
  //       "id": 5,
  //       "carts": [
  //           {
  //               "id": 9,
  //               "product": {
  //                   "title": "ABCDE",
  //                   "product_images": [
  //                       {
  //                           "id": 11,
  //                           "product_colour": "blue",
  //                           "image": "/media/pv_image_Ww2wK8R.webp",
  //                           "is_active": true,
  //                           "product": 4
  //                       },
  //                       {
  //                           "id": 12,
  //                           "product_colour": "pink",
  //                           "image": null,
  //                           "is_active": true,
  //                           "product": 4
  //                       },
  //                       {
  //                           "id": 20,
  //                           "product_colour": "qwertyui",
  //                           "image": "/media/python-plus-django-1.webp",
  //                           "is_active": true,
  //                           "product": 4
  //                       },
  //                       {
  //                           "id": 22,
  //                           "product_colour": "pink",
  //                           "image": "/media/pv_image_update_bfVX9le.webp",
  //                           "is_active": true,
  //                           "product": 4
  //                       }
  //                   ]
  //               },
  //               "variant": {
  //                   "id": 37,
  //                   "variant_name": "Blackxl"
  //               },
  //               "brand": {
  //                   "id": 1,
  //                   "title": "BOOSH",
  //                   "discount": 20
  //               },
  //               "color": {
  //                   "id": 3,
  //                   "title": "pinkish",
  //                   "color_code": "#9966dd",
  //                   "is_active": true
  //               },
  //               "size": {
  //                   "id": 5,
  //                   "title": "XXL",
  //                   "code": "55",
  //                   "is_active": true
  //               },
  //               "mrp": 10,
  //               "selling_price": 10,
  //               "category_discount": 10,
  //               "subcategory_discount": 40,
  //               "brand_discount": 10,
  //               "extra_discount": 10,
  //               "qty": 4,
  //               "cart_status": true,
  //               "status": "New",
  //               "cod_available": true,
  //               "sub_total": 100.0,
  //               "discount_total": 100.0,
  //               "total_amount": 100.0,
  //               "is_return": true
  //           }
  //       ],
  //       "address_type": "Deliver",
  //       "store_address": {
  //           "id": 5,
  //           "name": "abc",
  //           "email": "abc@gmail.com",
  //           "mobile_no": "10011",
  //           "alternative_mobile_no": "110212",
  //           "address": "abc abc",
  //           "line1": "abc",
  //           "line2": "abc",
  //           "country": "aa",
  //           "state": "aa",
  //           "city": "aa",
  //           "pincode": 123211020,
  //           "is_active": true,
  //           "is_delete": false,
  //           "datetime": "2023-08-08T15:15:09.523796+05:30"
  //       },
  //       "billing_address": {
  //           "id": 11,
  //           "address_type": "Billing",
  //           "name": "abc",
  //           "email": "abd@bad.jdn",
  //           "mobile_no": "74185296300",
  //           "alternative_mobile_no": "7845128745",
  //           "address": "avcb",
  //           "line1": "5424512",
  //           "line2": "7844512",
  //           "country": "54124521",
  //           "state": "4514521",
  //           "city": "54215421",
  //           "pincode": 5425425
  //       },
  //       "shipping_address": {
  //           "id": 12,
  //           "address_type": "Billing",
  //           "name": "abc",
  //           "email": "abd@bad.jdn",
  //           "mobile_no": "74185296300",
  //           "alternative_mobile_no": "7845128745",
  //           "address": "avcb",
  //           "line1": "5424512",
  //           "line2": "7844512",
  //           "country": "54124521",
  //           "state": "4514521",
  //           "city": "54215421",
  //           "pincode": 5425425
  //       },
  //       "status": "New",
  //       "payment_status": "Success",
  //       "payment_type": "Online",
  //       "sub_total_amount": 10.0,
  //       "total_discount": 101.0,
  //       "couopn_discount": 101010,
  //       "total_amount": 10.0,
  //       "final_amount": 10.0,
  //       "cancel_date": "2023-08-08T15:15:45+05:30",
  //       "cancel_reason": {
  //           "id": 6,
  //           "type": "Cancel",
  //           "title": "9565",
  //           "is_active": true,
  //           "is_delete": false
  //       },
  //       "order_date": "2023-08-08T15:16:08.890591+05:30",
  //       "accepted_at": "2023-08-08T15:16:03+05:30",
  //       "dispatched_at": "2023-08-08T15:16:05+05:30",
  //       "delivered_at": "2023-08-08T15:16:07+05:30"
  //   }
  // ]

  titlee: any;
  p:number=1
  pageSize: number = 10;
  itemsPerPage:number=10;

  constructor(private websiteService: WebsiteService, private QueryService: QueryService,) {
    this.QueryService.filterToggle()
  }

 
loader=true;
isAdd:any;
isEdit:any;
isDelete:any;

  ngOnInit(): void {
    this.websiteService.getProductOrder().subscribe(res => {
      console.log(res);
      this.tableData = res;
      this.loader=false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
    console.log(this.tableData);
    
  }

  allSelected: boolean = false;
  selectedRows:boolean[]
  selectAlll() {
    this.selectedRows.fill(this.allSelected);
  }

select=false
  selectAll(initChecked: boolean) {
    if (!initChecked) {
      this.tableData.forEach((f: any) => {
        f.isSelected = true
      })
    } else {
      this.tableData.forEach((f: any) => {
        f.isSelected = false
      })
    }
  }
 
  // search() {
  //   if (this.titlee == "") {
  //     this.ngOnInit();
  //   } else {
  //     const searchTerm = this.titlee.toLocaleLowerCase();
  //     this.tableData = this.tableData.filter(res => {
  //       const nameLower = res?.customer?.name.toLocaleLowerCase();
  //       const companyNameLower = res.id.toString().toLocaleLowerCase();
  //       if (nameLower.match(searchTerm)) {
  //         return true;
  //       } else if (companyNameLower.match(searchTerm)) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   }
  // }

  search() {
    if (this.titlee === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase(); 
      this.tableData = this.tableData.filter(res => {
        const nameLower = res?.carts[0]?.product?.title?.toString().toLocaleLowerCase(); 
        return nameLower.includes(searchTerm); 
      });
    }
  }
  key = 'id'
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }
}



