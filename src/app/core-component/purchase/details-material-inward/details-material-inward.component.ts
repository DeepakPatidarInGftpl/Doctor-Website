import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { DatePipe, Location } from '@angular/common';

import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { PdfgenService } from 'src/app/Services/PdfGenrate/pdfgen.service';

@Component({
  selector: 'app-details-material-inward',
  templateUrl: './details-material-inward.component.html',
  styleUrls: ['./details-material-inward.component.scss','../commonDetails.scss'],
  providers : [DatePipe, PdfgenService]
})
export class DetailsMaterialInwardComponent implements OnInit {

  constructor(private Arout: ActivatedRoute,private _dpipe : DatePipe,public _pdf : PdfgenService ,private purchaseService: PurchaseServiceService, private location: Location,
    private companyService:CompanyService) { }

  id: any;
  companyDetails:any;
  materialDetail: any
  printDetails: any;
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

  totalPurchase:any[]=[];
  totalPurchaseRate=0;
  totalmrp:any[]=[];
  totalMrp=0;
  totallanding:any[]=[];
  totalLandingCost=0;
  getdata() {
    this.purchaseService.getMaterialById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.materialDetail = res
        this.supplierAddress = res;
        console.log(this.supplierAddress);
        
        this.supplierAddress?.party?.address.map((res: any) => {
          if (res?.address_type == 'Billing') {
            this.selectedAddressBilling = res;
            console.log(this.selectedAddressBilling);
          } else if (res.address_type == 'Shipping') {
            this.selectedAddressShipping = res;
            console.log(this.selectedAddressShipping);
          }
        })
            // calculation
            this.materialDetail?.cart?.forEach((res:any)=>{
              this.totalPurchase.push(res?.qty);
              this.totalPurchaseRate =0
              this?.totalPurchase?.forEach((number: any) => {
                this.totalPurchaseRate += number;
              })
              // mrp
              this.totalmrp.push(res?.mrp);
              this.totalMrp=0;
              this?.totalmrp?.forEach((number: any) => {
                this.totalMrp += number;
              })
              //landing cost
              this.totallanding.push(res?.po_qty);
              this.totalLandingCost=0;
              this?.totallanding?.forEach((number: any) => {
                this.totalLandingCost += number;
              })
              // total deduction
              
            })
      }
    })
  }
  goBack() {
    this.location.back();
  }

  


  generatePdf() {

    let mi_date = this._dpipe.transform(this.materialDetail?.material_inward_date , 'dd-MMMM-yyyy')

        let arr2 = new Array() ;
        this.materialDetail?.cart.forEach((cart : any,n : number) => {
         arr2.push([`${n+1}`,`${cart?.barcode?.sku}`,`${cart?.barcode?.product_title}`,`${cart?.qty}`, `${cart?.po_qty}`,`${cart?.mrp ?? '' }`])
       });
       const obj = {
       'Type' : 'Material Inward',
       'Fist_date' : this.materialDetail?.material_inward_date,
      //  'Secouand_date' : this.materialDetail?.po_date,
       'thead1' : ['Order No.','Supplier Name','Purchase Order','MI Date','Recieved By','Shipping Note','Product Type'],
       'tbody1' : [
        `${this.materialDetail?.material_inward_no}`,
        `${this.materialDetail?.party?.company_name}`,
        `${this.materialDetail?.purchase_order?.order_no ?? ''}`,
        `${ mi_date ?? ''}`,
        `${this.materialDetail?.recieved_by ?? ''}`,
        `${this.materialDetail?.shipping_note ?? '' }`,
        `${this.materialDetail?.product_type ?? ''}`
      ],
       'table2head' : ['#','Barcode/SKU','Product Name','QTY','PO QTY','Mrp'],
       'foot2' : [
         [
           {
             content : 'Total',
             colSpan:3,
             styles: { halign: 'center' }
           },
           {
             content : `${this.totalPurchaseRate.toFixed(2)}`,
             styles: { halign: 'center' }
           },
           {
             content : `${this.totalLandingCost}`,
             styles: { halign: 'center' }
             
           },
          //  {
          //    content : `${this.returnBillDetail?.total_discount}%`,
          //    styles: { halign: 'center' }
             
          //  },
          //  {
          //    content : `${this.returnBillDetail?.total_tax}%`,
          //    styles: { halign: 'center' }
             
          //  },
          //  {
          //    content : `${this.returnBillDetail?.total}`,
          //    styles: { halign: 'center' }
             
          //  }
          
         ],
         [
           {
             content : `Please notify us on any disrepancies within 3 days of receipt Overdue invoices will be charged 24% interest.`,
             colSpan : 6,
             styles : {halign : 'left'}
           }
           
         ],
         [
           {
             content : ``,
             colSpan : 4,
           },
           {
             content : ``,
             colSpan : 1,
             styles : {halign : 'right'}
           },
           {
             content : '',
             colSpan : 1,
             styles : {halign : 'left'}
           }
       
         ],
         [
           {
             content : '',
             colSpan : 4,
             // styles : {halign : 'left'}
           },
          { content : '',
           colSpan : 1,
           styles : {halign : 'right'}
         },
          { content : '',
           colSpan : 1,
           styles : {halign : 'left'}
         },
         ],
         [
           {
             content : '',
             colSpan : 4,
             styles : {halign : 'left'}
           },
          { content : 'Total ',
           colSpan : 1,
           styles : {halign : 'right'}
         },
          { content : `${this.materialDetail?.total}`,
           colSpan : 1,
           styles : {halign : 'left'}
         },
         ],
         [
           {
             content : '',
           colSpan :4,
           },
           {
             content : '',
           colSpan : 2,
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
         'address_line_2' : this.selectedAddressBilling?.address_line_2 ?? '' +' , ' +(this.selectedAddressBilling?.city?.city == null) ? '' : this.selectedAddressBilling?.city?.city,
         'address_line_3' : this.selectedAddressBilling?.state?.state == null ? '' : this.selectedAddressBilling?.state?.state + ' , ' + this.selectedAddressBilling?.country?.country_name == null ? '' :this.selectedAddressBilling?.country?.country_name ,
         'phone' : this.materialDetail?.party?.mobile_no ?? '',
         'email' : this.materialDetail?.party?.email ?? ''
       },
       'SHIPPING_ADDRESS' : {
         'address_line_1':  this.selectedAddressShipping?.address_line_1 ?? '',
         'address_line_2' : this.selectedAddressShipping?.address_line_2 ?? '' +' , ' +this.selectedAddressShipping?.city?.city ?? '',
         'address_line_3' : this.selectedAddressBilling?.state?.state == null ? '' : this.selectedAddressBilling?.state?.state  + ' , ' + this.selectedAddressBilling?.country?.country_name == null ? '' : this.selectedAddressBilling?.country?.country_name  ,
         'phone' : this.materialDetail?.party?.mobile_no ?? '',
         'email' : this.materialDetail?.party?.email ?? '',
       },
       'table2body' : arr2,
       'order_no' : this.materialDetail?.material_inward_no,
       }
       
        this._pdf.generatePdf(obj);
       
      }

   
  // generatePdf() {
  //   this.loaderPdf = true;
  //   const elementToCapture = document.getElementById('debitNote');
  //   if (elementToCapture) {
  //     html2canvas(elementToCapture).then((canvas) => {
  //       // Enable image smoothing for better text rendering
  //       const ctx = canvas.getContext('2d');
  //       ctx.imageSmoothingEnabled = true;
  
  //       this.loaderPdf = false;
  //       const imgData = canvas.toDataURL('image/png');
  //       const pdf = new jsPDF('p', 'mm', 'a4');
  //       const width = pdf.internal.pageSize.getWidth();
  //       const height = pdf.internal.pageSize.getHeight();
  //       pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
  //       pdf.save('addMaterialInward.pdf');
  //     });
  //   }
  // }
  
  // print

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

  pp: number = 1
  pageSizee: number = 10;
  itemsPerPagee = 10;
  keyy = 'id';
  reversee: boolean = false;
  sortt(key) {
    this.keyy = key;
    this.reversee = !this.reversee
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.materialDetail?.logs?.length;
    }
  }
}

