import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, Location } from '@angular/common';
import { SalesService } from 'src/app/Services/salesService/sales.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { PdfgenService } from 'src/app/Services/PdfGenrate/pdfgen.service';

@Component({
  selector: 'app-details-sales-return',
  templateUrl: './details-sales-return.component.html',
  styleUrls: ['./details-sales-return.component.scss','../commonDetails.scss'],
  providers : [DatePipe, PdfgenService]
})
export class DetailsSalesReturnComponent implements OnInit {

  totalItems: any;
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
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
    this.companyService.getCompany().subscribe(res=>{
      this.companyDetails=res[0];
    })
  }
  returnBillDetail: any
  totalmrp:any[]=[];
  totalMrp=0;

  totalDiscount:any[]=[];
  discount=0;
  totaldiscount=0;

  // tax
  calculateTax:any = 0;
  totalTax: any[] = [];
  getdata() {
    this.saleService.getSaleReturnById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.returnBillDetail = res
        //calculation
        this.totalItems = this.returnBillDetail?.cart?.length;
        this.returnBillDetail?.cart?.forEach((item:any)=>{
           // discount
           item.price = parseFloat(item.price+"")
           let d:any = (item.price.toFixed(2) * item.deduction) / 100;
           console.log(item.price.toFixed(2)-d.toFixed(2));
           this.discount=item.price.toFixed(2)-d.toFixed(2);
           this.totaldiscount=0;
           this.totalDiscount.push(d);
           console.log(this.totalDiscount);
           this.totalDiscount?.forEach((number:any)=>{
             this.totaldiscount +=number;
           });
           console.log(this.totaldiscount.toFixed(2));  

                // calulating tax
          let dis: any = (item?.price?.toFixed(2) * item?.deduction) / 100;
          console.log(item?.price?.toFixed(2) - dis.toFixed(2));
          this.discount = item?.price?.toFixed(2) - dis.toFixed(2);
          
          let taxPrice: any = (this.discount * item?.tax) / 100;
          console.log(taxPrice, 'taxprice');
          this.totalTax.push(taxPrice * item?.qty || 0);
          console.log(this.totalTax);  
          let totalTax = 0;
          this.totalTax.forEach((val)=> {
            totalTax += parseFloat(val);
          })
          this.calculateTax = totalTax.toFixed(2);
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

  // loaderPdf = false;
  // generatePdf() {
  //   this.loaderPdf = true;
  //   const elementToCapture = document.getElementById('debitNote');
  //   if (elementToCapture) {
  //     html2canvas(elementToCapture).then((canvas) => {
  //       this.loaderPdf = false;
  //       const imgData = canvas.toDataURL('image/png');
  //       const pdf = new jsPDF('p', 'mm', 'a4');
  //       const width = pdf.internal.pageSize.getWidth();
  //       const height = pdf.internal.pageSize.getHeight();
  //       pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
  //       pdf.save('salesReturn.pdf');
  //     });
  //   }
  // }
 
  generatePdf() {
    let p : number = parseFloat(this.totalMrp +'')
    console.log(typeof this.totalMrp)
        let arr2 = new Array() ;
        this.returnBillDetail?.cart.forEach((cart : any,n : number) => {
         arr2.push([`${n+1}`,`${cart?.barcode?.sku}`,`${cart?.item_name}`,`${cart?.price}`, `${cart?.qty}`,`${cart?.discount ?? '' }`,`${cart?.tax ?? ''}`,`${cart?.total}`])
       });
       const obj = {
       'Type' : 'Sales Return',
       'Fist_date' : this.returnBillDetail?.bill_date,
       'Secouand_date' : this.returnBillDetail?.return_date,
       'thead1' : ['Return Bill No.','Party Name','Sales Bill','Sales Bill Date','Sale Return Date'],
       'tbody1' : [`${this.returnBillDetail?.sale_return_bill_no}`,`${this.returnBillDetail?.customer?.name+ ' (' + this.returnBillDetail?.customer?.user_type + ')'}`,`${this.returnBillDetail?.sale_bill?.customer_bill_no}`,`${this.returnBillDetail?.bill_date}`,`${this.returnBillDetail?.return_date}`],
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
             content : `${this.returnBillDetail?.total_qty}`,
             styles: { halign: 'center' }
             
           },
           {
             content : `${this.returnBillDetail?.total_discount}%`,
             styles: { halign: 'center' }
             
           },
           {
             content : `${this.returnBillDetail?.total_tax}%`,
             styles: { halign: 'center' }
             
           },
           {
             content : `${this.returnBillDetail?.total}`,
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
             content : `${this.returnBillDetail?.subtotal}`,
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
          { content : `${this.returnBillDetail?.roundoff}`,
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
          { content : `${this.returnBillDetail?.total}`,
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
         'phone' : this.returnBillDetail?.customer?.phone_number ?? '',
         'email' : this.returnBillDetail?.party?.email ?? ''
       },
       'SHIPPING_ADDRESS' : {
         'address_line_1':  this.selectedAddressShipping?.address_line_1 ?? '',
         'address_line_2' : this.selectedAddressShipping?.address_line_2 ?? '' +' , ' +this.selectedAddressShipping?.city?.city ?? '',
         'address_line_3' : this.selectedAddressBilling?.state?.state + ' , ' + this.selectedAddressBilling?.country?.country_name  ,
         'phone' : this.returnBillDetail?.customer?.phone_number ?? '',
         'email' : this.returnBillDetail?.party?.email ?? '',
       },
       'table2body' : arr2,
       'order_no' : this.returnBillDetail?.sale_return_bill_no,
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
      this.itemsPerPage = this.returnBillDetail?.logs?.length;
    }
  }
}


