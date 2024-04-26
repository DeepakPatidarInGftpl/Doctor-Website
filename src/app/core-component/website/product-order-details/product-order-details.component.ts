import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DashboardService } from 'src/app/Services/DashboardService/dashboard.service';
import { WebsiteService } from 'src/app/Services/website/website.service';
import Swal from 'sweetalert2';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-product-order-details',
  templateUrl: './product-order-details.component.html',
  styleUrls: ['./product-order-details.component.scss']
})

export class ProductOrderDetailsComponent implements OnInit {
  imgUrl = 'https://pv.greatfuturetechno.com';
  public tableDatas: any = [
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
  tableData: any
  constructor(private Arout: ActivatedRoute, private dashboardService: DashboardService, private fb: FormBuilder,
    private toastr: ToastrService, private websiteService: WebsiteService) { }
  id: any;
  acceptForm: FormGroup;
  get f() {
    return this.acceptForm.controls;
  }
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
    this.getBranch();
    this.acceptForm = this.fb.group({
      length: new FormControl('',[Validators.min(1)]),
      breadth: new FormControl('',[Validators.min(1)]),
      height: new FormControl('',[Validators.min(1)]),
      weight: new FormControl('',[Validators.required,Validators.min(1)]),
      branch: new FormControl('',[Validators.required,Validators.min(1)]),
      id: new FormControl(this.id,[Validators.required,Validators.min(1)]),
    });

    this.tableDatas.map((res) => {
      if (this.id == res.id) {
        this.tableData = res;
        // console.log(this.tableData);
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
  productOrderDetail: any;
  qty: any[] = [];
  totalQty = 0;
  mrp: any[] = [];
  totalMrp = 0;
  selling: any[] = [];
  totalSelling = 0;
  ExtraDiscount: any[] = [];
  totalExtraDiscount = 0;
  discount: any[] = [];
  totalDiscount = 0;
  tax: any[] = [];
  totalTax = 0;
  subTotal: any[] = [];
  totalSubTotal = 0;
  Total: any[] = [];
  totalTotal = 0;
  getdata() {
    this.websiteService.getProductOrderById(this.id).subscribe(res => {
      this.productOrderDetail = res;
      this.productOrderDetail.carts.forEach((cart: any) => {
        // qty
        this.qty.push(cart?.qty);
        this.totalQty = 0;
        this?.qty?.forEach((number: any) => {
          this.totalQty += number;
        });
        // mrp
        this.mrp.push(cart?.mrp);
        this.totalMrp = 0;
        this?.mrp?.forEach((number: any) => {
          this.totalMrp += number;
        });
        // selling
        this.selling.push(cart?.selling_price);
        this.totalSelling = 0;
        this?.selling?.forEach((number: any) => {
          this.totalSelling += number;
        });
        // extra discount
        this.ExtraDiscount.push(cart?.extra_discount);
        this.totalExtraDiscount = 0;
        this?.ExtraDiscount?.forEach((number: any) => {
          this.totalExtraDiscount += number;
        });
        // discount
        this.discount.push(cart?.discount_total);
        this.totalDiscount = 0;
        this?.discount?.forEach((number: any) => {
          this.totalDiscount += number;
        });
        // tax
        this.tax.push(cart?.tax);
        this.totalTax = 0;
        this?.tax?.forEach((number: any) => {
          this.totalTax += number;
        });
        // sub total
        this.subTotal.push(cart?.sub_total);
        this.totalSubTotal = 0;
        this?.subTotal?.forEach((number: any) => {
          this.totalSubTotal += number;
        });
        // total
        this.Total.push(cart?.total_amount);
        this.totalTotal = 0;
        this?.Total?.forEach((number: any) => {
          this.totalTotal += number;
        });
      })
    })
  }
  branchList: any;
  getBranch() {
    this.dashboardService.getBranch().subscribe((res: any) => {
      this.branchList = res;
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
  isModalOpen = false;
  openModalBatch() {
    // Trigger Bootstrap modal using JavaScript
    const modal = document.getElementById('batchModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
         //blur bg
         this.isModalOpen = true;
         this.websiteService.setCheckBlur(true);
    }
  }
  closeModalBatch() {
    const modal = document.getElementById('batchModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
      this.isModalOpen = false;
      this.websiteService.setCheckBlur(false);
    }
  }

  get length() {
    return this.acceptForm.get('length');
  }
  get breadth() {
    return this.acceptForm.get('breadth');
  }
  get height() {
    return this.acceptForm.get('height');
  }
  get weight() {
    return this.acceptForm.get('weight');
  }
  get branch() {
    return this.acceptForm.get('branch');
  }
  loaders = false
  acceptSubmit() {
    console.warn(this.acceptForm.value);
    let formData = new FormData();
    formData.append('length', this.acceptForm.get('length')?.value);
    formData.append('breadth', this.acceptForm.get('breadth')?.value);
    formData.append('height', this.acceptForm.get('height')?.value);
    formData.append('weight', this.acceptForm.get('weight')?.value);
    formData.append('branch', this.acceptForm.get('branch')?.value);
    formData.append('id', this.acceptForm.get('id')?.value);
    if (this.acceptForm.valid) {
      this.loaders = true
      this.websiteService.addAcceptOrder(formData).subscribe((res: any) => {
        console.log(res); 
        this.loaders = false;
        if(res.success){
          this.toastr.success(res.msg); 
          this.closeModalBatch();
        }
        if (res.status == false) {
          this.toastr.error(res.error?.message);
          this.loaders = false;
          if(res.error.order_date){
            this.loaders = false;
            this.toastr.error(res.error?.order_date[0]);  
          }
        }
      }, err => {
        this.loaders = false;
        this.toastr.error()
      });
    } else {
      this.loaders = false;
      this.acceptForm.markAllAsTouched();
    }
  }
  delRes:any;
  rejectOrder(id: any) {
    console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: "Do You Want To Reject Order!",
      allowEnterKey:false,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Reject it!',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
    }).then((t) => {
      if (t.isConfirmed) {
        this.websiteService.rejectOrder(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            Swal.fire({
              icon: 'success',
              title: 'Rejected!',
              text: this.delRes.msg,
            });
            this.ngOnInit();
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Not Rejected!',
              text: this.delRes.error,
            });
          }
        })
      }
    });
  }

  loaderPdf = false;
  generatePdf() {
    this.loaderPdf = true;
    const elementToCapture = document.getElementById('debitNote');
    if (elementToCapture) {
      html2canvas(elementToCapture).then((canvas) => {
        this.loaderPdf = false;
        const imgData = canvas.toDataURL('image/jpeg');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const width = pdf.internal.pageSize.getWidth();
        const height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
        pdf.save('websiteOrder.pdf');
      });
    }
  }
  
  generatePDFAgain() {
    const doc = new jsPDF();
    const subtitle = 'PV';
    const title = 'Order';
    const heading = `User: `;
    const heading2 = '';  // Remove the placeholder
    // Load the image from assets
    const imgData = 'assets/dummy/pos.png';
    doc.setFontSize(12);
    doc.setTextColor(33, 43, 54);
    doc.text(subtitle, 86, 5);
    doc.text(title, 82, 10);
    doc.text(heading, 10, 18);
    // Add the image to the PDF
    doc.addImage(imgData, 'JPEG', 5, 10, 35, 15);
    doc.text('', 10, 30); // Margin after image
    doc.text(heading2, 10, 30); // Place heading after the image
    // Pass tableData to autoTable
    autoTable(doc, {
      head: [
        ['#', 'Product', 'QTY', 'MRP', 'Selling Price', 'Extra Discount', 'Total Discount','Tax','Sub Total','Total Amount']
      ],
      body: this.productOrderDetail?.carts.map((row: any, index: number) => [
        index + 1,
        row?.product?.title+','+row?.variant?.variant_name+','+row?.brand?.title,
        row.qty,
        row.mrp,
        row.selling_price,
        row.extra_discount,
        row.discount_total,
        row.tax,
        row.sub_total,
        row.total_amount,
      ]),
      theme: 'grid',
      headStyles: {
        fillColor: [255, 159, 67]
      },
      startY: 35, // Margin top after image
    });
  
    doc.save('Abc_Analysis.pdf');
  }
  
}

