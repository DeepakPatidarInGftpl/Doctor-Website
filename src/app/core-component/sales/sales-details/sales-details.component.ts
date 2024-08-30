import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  Location } from '@angular/common';
import { SalesService } from 'src/app/Services/salesService/sales.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { PdfgenService } from 'src/app/Services/PdfGenrate/pdfgen.service';
@Component({
  selector: 'app-sales-details',
  templateUrl: './sales-details.component.html',
  styleUrls: ['./sales-details.component.scss','../commonDetails.scss'],
  providers : [PdfgenService]
})
export class SalesDetailsComponent implements OnInit {

  constructor(
    private companyService:CompanyService,
    private Arout: ActivatedRoute,
    private saleService: SalesService,
    private location: Location,
    public _pdf : PdfgenService
  
  ) { }
  id: any;
  companyDetails:any;
  supplierAddress:any;
  selectedAddressBilling:any;
  selectedAddressShipping:any;
  totalItems = 0;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
    this.companyService.getCompany().subscribe(res=>{
      this.companyDetails=res[0];
    })
  }
  orderDetail: any;
  totalmrp:any[]=[];
  totalMrp=0;

  totalDiscount:any[]=[];
  discount=0;
  totaldiscount=0;
  // tax
  calculateTax = 0;
  totalTax: any[] = [];
  getdata() {
    this.saleService.getSalesOrderById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.orderDetail = res;
        console.log('all order',this.orderDetail);
        this.totalItems = this.orderDetail?.cart?.length;
        this.orderDetail?.cart?.forEach((item:any)=>{
            // discount
            let d:any = (item.price * item.discount) / 100;
            // this.discount=item.price -d.toFixed(2);
            this.totaldiscount=0;
            this.totalDiscount.push(d);
            this.totalDiscount?.forEach((number:any)=>{
              this.totaldiscount +=number;
            });

            // calulating tax
          let dis: any = (item?.price * item?.discount) / 100;
          this.discount = item?.priceß - dis.toFixed(2);
          
          let taxPrice: any = this.discount - (this.discount * (100 / (100 + item?.tax)));
          console.log(taxPrice, 'taxprice');
          this.totalTax.push(taxPrice || 0);
          console.log(this.totalTax);  
          this.calculateTax = this.totaldiscount - taxPrice;
          console.log(this.calculateTax);
          // mrp
          this.totalmrp.push(item?.price);
          this.totalMrp=0;
          this?.totalmrp?.forEach((number: any) => {
            this.totalMrp += number;
          })
        });
        // address selected
        this.supplierAddress = res;

        this.supplierAddress?.customer?.detail?.address.map((res: any) => {
          if (res?.address_type == 'Billing') {
            this.selectedAddressBilling = res;
            console.log(this.selectedAddressBilling);
          } else if (res.address_type == 'Shipping') {
            this.selectedAddressShipping = res;
            console.log(this.selectedAddressShipping);
          }
        })
      }
    })
  }
  goBack() {
    this.location.back();
  }

  generatePdf() {
let p : number = parseFloat(this.totalMrp +'')
console.log(typeof this.totalMrp)
    let arr2 = new Array() ;
    this.orderDetail?.cart.forEach((cart : any,n : number) => {
     arr2.push([`${n+1}`,`${cart?.barcode?.sku}`,`${cart?.item_name}`,`${cart?.price}`, `${cart?.qty}`,`${cart?.discount ?? '' }`,`${cart?.tax ?? ''}`,`${cart?.total}`])
   });
   const obj = {
   'Type' : 'ORDER',
   'Fist_date' : this.orderDetail?.sale_order_date,
   'Secouand_date' : this.orderDetail?.due_date,
   'thead1' : ['Order No.','Party Name','Estimate No.','Payment Terms','Sale Order Date','Due Date'],
   'tbody1' : [`${this.orderDetail?.sale_order_no}`,`${this.orderDetail?.customer?.name+ ' (' + this.orderDetail?.customer?.user_type+ ')'}`,`${this.orderDetail?.estimate?.estimate_no}`,`${this.orderDetail?.payment_terms?.title}`,`${this.orderDetail?.sale_order_date}`, `${this.orderDetail?.due_date}`],
   'table2head' : ['#','Barcode/SKU','Product Name','Price','QTY','Discount(%)','Tax(%)','Total'],
   'foot2' : [
     [
       {
         content : 'Total',
         colSpan:3,
         styles: { halign: 'center' }
       },
       {
         content : `${p.toFixed(2)}`,
         styles: { halign: 'center' }
       },
       {
         content : `${this.orderDetail?.total_qty}`,
         styles: { halign: 'center' }
         
       },
       {
         content : `${this.orderDetail?.total_discount}%`,
         styles: { halign: 'center' }
         
       },
       {
         content : `${this.orderDetail?.total_tax}%`,
         styles: { halign: 'center' }
         
       },
       {
         content : `${this.orderDetail?.total}`,
         styles: { halign: 'center' }
         
       }
      
     ],
     [
       {
         content : `Please notify us on any disrepancies within 3 days of receipt Overdue invoices will be charged 24% interest.`,
         colSpan : 8,
         styles : {halign : 'left'}
       }
       
     ],
     [
       {
         content : ``,
         colSpan : 5,
       },
       {
         content : `Sub Total `,
         colSpan : 2,
         styles : {halign : 'right'}
       },
       {
         content : `${this.orderDetail?.subtotal}`,
         colSpan : 1,
         styles : {halign : 'left'}
       }
   
     ],
     [
       {
         content : '',
         colSpan : 5,
         // styles : {halign : 'left'}
       },
      { content : 'Round Off ',
       colSpan : 2,
       styles : {halign : 'right'}
     },
      { content : `${this.orderDetail?.roundoff}`,
       colSpan : 1,
       styles : {halign : 'left'}
     },
     ],
     [
       {
         content : '',
         colSpan : 5,
         styles : {halign : 'left'}
       },
      { content : 'Total ',
       colSpan : 2,
       styles : {halign : 'right'}
     },
      { content : `${this.orderDetail?.total}`,
       colSpan : 1,
       styles : {halign : 'left'}
     },
     ],
     [
       {
         content : '',
       colSpan : 5,
       },
       {
         content : '',
       colSpan : 3,
       },
     ]
   ],
   'company_name' : this.companyDetails?.name,
   'company_gst' : this.companyDetails?.gst,
   'top_left_address_line1' : `${this.companyDetails?.address}, ${this.companyDetails?.city?.city}`,
   'top_left_address_line2' : `${this.companyDetails?.state?.state}, ${this.companyDetails?.country?.country_name}, ${this.companyDetails?.pincode}`,
   'top_left_phone' : this.companyDetails?.phone,
   'top_left_email' : this.companyDetails?.email,
   'BILLING_ADDRESS' : {
     'address_line_1' : this.selectedAddressBilling?.address_line_1 ?? '',
     'address_line_2' : this.selectedAddressBilling?.address_line_2 ?? '' +' , ' +this.selectedAddressBilling?.city?.city ?? '',
     'address_line_3' : this.selectedAddressBilling?.state?.state  + ' , ' + this.selectedAddressBilling?.country?.country_name ,
     'phone' : this.orderDetail?.customer?.phone_number ?? '',
     'email' : this.orderDetail?.customer?.email ?? ''
   },
   'SHIPPING_ADDRESS' : {
     'address_line_1':  this.selectedAddressShipping?.address_line_1 ?? '',
     'address_line_2' : this.selectedAddressShipping?.address_line_2 ?? '' +' , ' +this.selectedAddressShipping?.city?.city ?? '',
     'address_line_3' : this.selectedAddressBilling?.state?.state + ' , ' + this.selectedAddressBilling?.country?.country_name  ,
     'phone' : this.orderDetail?.customer?.phone_number ?? '',
     'email' : this.orderDetail?.customer?.email ?? '',
   },
   'table2body' : arr2,
   'order_no' : this.orderDetail?.sale_order_no,
   }
   
    this._pdf.generatePdf(obj);
   
  }
 
  printForm(): void {
    const formElement = document.getElementById('debitNote');
    if (!formElement) {
        console.error('Form not found');
        return;
    }

    const clonedForm = formElement.cloneNode(true) as HTMLElement;

    const printContainer = document.createElement('div');
    printContainer.id = 'printContainer';
    printContainer.appendChild(clonedForm);

    const style = document.createElement('style');
    style.id = 'printStyle';
    style.textContent = `
        @media print {
            body * {
                visibility: hidden;
            }
            #printContainer, #printContainer * {
                visibility: visible;
            }
            #printContainer {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
            }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(printContainer);

    window.print();

    window.addEventListener('afterprint', () => {
      this.clearPrintContainer();
    });

    setTimeout(() => {
      this.clearPrintContainer();
    }, 2000);
}

clearPrintContainer(): void {
    const printContainer = document.getElementById('printContainer');
    const printStyle = document.getElementById('printStyle');

    if (printContainer) {
        printContainer.remove();
    }
    if (printStyle) {
        printStyle.remove();
    }
}

  p: number = 1
  pageSize: number = 10;
  itemsPerPage = 10;
  key = 'id';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.orderDetail?.logs?.length;
    }
  }
}

