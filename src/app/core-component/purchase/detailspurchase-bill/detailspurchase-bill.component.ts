import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { DatePipe, Location } from '@angular/common';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';

import { PdfgenService } from 'src/app/Services/PdfGenrate/pdfgen.service';
import autoTable from 'jspdf-autotable';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-detailspurchase-bill',
  templateUrl: './detailspurchase-bill.component.html',
  styleUrls: ['./detailspurchase-bill.component.scss', '../commonDetails.scss'],
  providers : [DatePipe,PdfgenService]
})
export class DetailspurchaseBillComponent implements OnInit {

  constructor(private companyService: CompanyService,private _dpipe : DatePipe,public _pdf : PdfgenService ,private Arout: ActivatedRoute, private purchaseService: PurchaseServiceService, private location: Location) { }
  id: any;
  companyDetails: any;
  printDetails: any;
  supplierAddress: any;
  selectedAddressBilling: any;
  selectedAddressShipping: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
    this.companyService.getCompany().subscribe(res => {
      this.companyDetails = res[0];
    })
  }
  purchaseBillDetail: any;
  totalPurchase: any[] = [];
  totalPurchaseRate = 0;
  totalmrp: any[] = [];
  totalMrp = 0;
  totallanding: any[] = [];
  totalLandingCost = 0;
  totalAdditional: any[] = [];
  totalAdditionalDiscount = 0;
  totalOnline: any[] = [];
  totalOnlinePrice = 0;
  totalOffline: any[] = [];
  totalOfflinePrice = 0;
  totalDealer: any[] = [];
  totalDealerPrice = 0;
  totalEmployee: any[] = [];
  totalEmployeePrice = 0;

  totalDiscount: any[] = [];
  totalDiscountt = 0

  totaltax: any[] = [];
  totalTax = 0;

  totalQty: any[] = [];
  totalQTY = 0;




  // tax rate

  TaxRate: any[] = [];
  totaltaxrate = 0;
  taxable_amount: any = [];
  totalTaxableAmount = 0;
  cgst_amount: any[] = [];
  totalCgstAmount = 0;
  igst_amount: any[] = [];
  totalIgstAmount = 0;
  sgst_amount: any[] = [];
  totalSgstAmount = 0;
  total_tax: any[] = [];
  totalTaxAmount=0;
  totaltaxsummary :any = {};
  getdata() {
    this.purchaseService.getPurchaseBillById(this.id).subscribe((res:any) => {
      // if (this.id == res.id) {
        this.purchaseBillDetail = res
        this.supplierAddress = res;
        res.TaxSummary.forEach((element:any) => {
          element.sumOfamount = 0;
          if ( element.igst > 0) {
            element.igst_amount =  element.igst;
            element.igst = element.tax;
            element.sumOfamount += element.total_tax
            
          }else{

            const taxs =( element.tax/2) || 0;
            const total_tax = (element.total_tax /2)

            element.cgst =  taxs;
            element.sgst =  taxs;
            element.cgst_amount = total_tax
            element.sgst_amount = total_tax
            element.sumOfamount += element.total_tax

          }

  
        });
        


       

        // console.log(res,'deepak')



        if (res.TaxSummary.length > 0) {
          ['cgst','cgst_amount' , 'igst','igst_amount', 'sgst','sgst_amount', 'sumOfamount', 'tax', 'taxable_value', 'total_tax', 'total_amount'].forEach((key:string) => {
            this.totaltaxsummary[key] = (this.totaltaxsummary[key] || 0) + res.TaxSummary.reduce((acc:number, element:any) => acc + element[key], 0);
          });
          console.log(this.totaltaxsummary,'deepak');
          console.log(res.TaxSummary,'deepak pa');
        }



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
        // calculation cart
        this.purchaseBillDetail?.cart?.forEach((res: any) => {
          this.totalPurchaseRate=0;
          this.totalPurchase.push(res?.unit_cost);
          this?.totalPurchase?.forEach((number: any) => {
            this.totalPurchaseRate += number;
          })
          // mrp
          this.totalMrp=0;
          this.totalmrp.push(res?.mrp);
          this?.totalmrp?.forEach((number: any) => {
            this.totalMrp += number;
          })
          //landing cost
          this.totallanding.push(res?.landing_cost);
          this.totalLandingCost=0;
          this?.totallanding?.forEach((number: any) => {
          this.totalLandingCost += number;
          })
          // additional discount
          this.totalAdditional.push(res?.additional_discount);
          this.totalAdditionalDiscount=0;
          this?.totalAdditional?.forEach((number: any) => {
          this.totalAdditionalDiscount += number;
          })
          // online
          this.totalOnline.push(res?.selling_price_online);
          this.totalOnlinePrice=0;
          this?.totalOnline?.forEach((number: any) => {
          this.totalOnlinePrice += number;
          })
          // offline
          this.totalOffline.push(res?.selling_price_offline);
          this.totalOfflinePrice=0;
          this?.totalOffline?.forEach((number: any) => {
          this.totalOfflinePrice += number;
          })
          //dealer
          this.totalDealer.push(res?.dealer_price);
          this.totalDealerPrice=0;
          this?.totalDealer?.forEach((number: any) => {
          this.totalDealerPrice += number;
          })
          // employee
          this.totalEmployee.push(res?.employee_price);
          this.totalEmployeePrice=0;
          this?.totalEmployee?.forEach((number: any) => {
            this.totalEmployeePrice += number;
          })
          // discount
          this.totalDiscount.push(res?.discount);
          this.totalDiscountt=0;
          this?.totalDiscount?.forEach((number: any) => {
            this.totalDiscountt += number;
          })
          // tax
          this.totaltax.push(res?.tax);
          this.totalTax=0;
          this?.totaltax?.forEach((number: any) => {
            this.totalTax += number;
          })
          // qty
          this.totalQty.push(res?.qty);
          this.totalQTY =0;
          this?.totalQty?.forEach((number: any) => {
            this.totalQTY += number;
          })
        })

        // tax rate
        this.purchaseBillDetail?.tax_rate?.forEach((tax: any) => {
          // tax Rate
          this.totaltaxrate=0;
          this.TaxRate.push(tax?.tax_rate);
          console.log(this.TaxRate); 
          this?.TaxRate?.forEach((number: any) => {
            this.totaltaxrate += number;
          })
          // taxable amount
          this.totalTaxableAmount=0;
          this.taxable_amount.push(tax?.taxable_amount);
          this?.taxable_amount?.forEach((number: any) => {
            this.totalTaxableAmount += number;
          })
          // igst amount
          this.totalIgstAmount=0;
          this.igst_amount.push(tax?.igst_amount);
          this?.igst_amount?.forEach((number: any) => {
            this.totalIgstAmount += number;
          })
          //cgst amount
          this.totalCgstAmount=0;
          this.cgst_amount.push(tax?.cgst_amount);
          this?.cgst_amount?.forEach((number: any) => {
            this.totalCgstAmount += number;
          })
          // sgst amount
          this.totalSgstAmount=0;
          this.sgst_amount.push(tax?.sgst_amount);
          this?.sgst_amount?.forEach((number: any) => {
            this.totalSgstAmount += number;
          })
          // total tax 
          this.totalTaxAmount=0;
          this.total_tax.push(tax?.total_tax);
          this?.total_tax?.forEach((number: any) => {
            this.totalTaxAmount += number;
          })

        })
      // }
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
  //       pdf.save('goodsRecievedNotes.pdf');
  //     });
  //   }
  // }









  generatePdf() {

    let mi_date = this._dpipe.transform(this.purchaseBillDetail?.supplier_bill_date, 'dd-MMM-yyyy');
    let due_date = this._dpipe.transform(this.purchaseBillDetail?.due_date , 'dd-MMM-yyyy');
    let shipping_date = this._dpipe.transform(this.purchaseBillDetail?.shipping_date , 'dd-MMM-yyyy');

        let arr2 = new Array() ;
        this.purchaseBillDetail?.cart.forEach((cart : any,n : number) => {
         arr2.push([`${n+1}`,`${cart?.barcode?.sku ?? ''}`,`${cart?.barcode?.product_title ?? '' }`,`${cart?.qty}`, `${cart?.unit_cost}`,`${cart?.mrp ?? '' }`,`${cart?.discount ?? ''}` ,`${cart?.additional_discount ?? ''}`,`${cart?.tax ?? ''}`,`${cart?.landing_cost ?? ""}`,`${cart?.total ?? ''}`])
       });




       // table 3 data set 
        let arr3 = new Array() ;
        console.warn(this.purchaseBillDetail)
        this.purchaseBillDetail?.TaxSummary.forEach((tax : any,n : number) => {
         arr3.push([`${tax.HSNCODE}`,`${tax?.taxable_value  }`,`${tax?.sgst_amount ? tax?.sgst_amount : 0  + '('+ tax?.sgst +"%)"}`, `${tax?.cgst_amount ? tax?.cgst_amount : 0 +"("+ tax?.cgst +"%"  +")"}`,`${(tax?.igst_amount ? tax?.igst_amount : 0 )+ "("+ tax?.igst +"%)" }`,`${tax?.sumOfamount ?? ''}`])
       });


let shows : boolean = (this.purchaseBillDetail?.TaxSummary?.length > 0);



       const obj = {
        'Thead3' : [['HSN/SAC	','Taxable Amount','State Tax','Central Tax','Integrated Tax','Total Tax Amount']],
        "show" : shows,
       'Type' : 'Invoice',
       'Fist_date' : (this.purchaseBillDetail?.purchase_return_date == null) ? '' : this.purchaseBillDetail?.purchase_return_date,
       'Secouand_date' : this.purchaseBillDetail?.shipping_date ?? '',
       'thead1' : ['Return No.','Supplier Name','Refrensh Bill No.','Material Inward No.','Payment Term','Reverse Charge','Bill Date','Due Date','Shipping Date'],
       'tbody1' : [
        `${this.purchaseBillDetail?.supplier_bill_no}`,
        `${this.purchaseBillDetail?.party?.company_name}`,
        `${this.purchaseBillDetail?.refrence_bill_no ?? ''}`,
        `${ this.purchaseBillDetail?.material_inward_no?.material_inward_no ?? ''}`,
        `${this.purchaseBillDetail?.payment_term?.title ?? ''}`,
        `${this.purchaseBillDetail?.reverse_charge ?? '' }`,
        `${ mi_date ?? ''}`,
        `${due_date  ?? ''}`,
        `${shipping_date ?? ''}`,
      ],

      
      
     
     
      'Tbody3' : arr3,
      'Tfoot3' : [
        [
          {
            content : 'Total',
            colSpan:2,
            styles: { halign: 'center' }
          },
          {
            content : `${(this.totaltaxsummary?.sgst_amount ? this.totaltaxsummary?.sgst_amount : 0 ) +'('+ this.totaltaxsummary?.sgst +'%)' }`,
            styles: { halign: 'center' }
          },
          {
            content : `${(this.totaltaxsummary?.cgst_amount ? this.totaltaxsummary?.cgst_amount : 0) +'('+ this.totaltaxsummary?.cgst +'%)'}`,
            styles: { halign: 'center' }
            
          },
          {
            content : `${(this.totaltaxsummary?.igst_amount ? this.totaltaxsummary?.igst_amount : 0)  + "("+ this.totaltaxsummary?.igst+"%)"}`,
            styles: { halign: 'center' }
            
          },
          {
            content : `${this.totaltaxsummary?.sumOfamount }`,
            styles: { halign: 'center' }
            
          },
         
        ],
      ],



       'table2head' : ['#','Barcode/SKU','Product Name','QTY','Cost Price','Mrp','Discount','Additional Discount','Tax','Landing Cost','Total'],
     
      'foot2' : [
         [
           {
             content : 'Total',
             colSpan:3,
             styles: { halign: 'center' }
           },
           {
             content : `${this.totalQTY}`,
             styles: { halign: 'center' }
           },
           {
             content : `${this.totalPurchaseRate}`,
             styles: { halign: 'center' }
             
           },
           {
             content : `${this.totalMrp}%`,
             styles: { halign: 'center' }
             
           },
           {
             content : `${this.totalDiscountt}%`,
             styles: { halign: 'center' }
             
           },
           {
             content : `${this.totalAdditionalDiscount}%`,
             styles: { halign: 'center' }
             
           },
          
           {
             content : `${this.totalTax}%`,
             styles: { halign: 'center' }
             
           },
           {
             content : `${this.totalLandingCost}`,
             styles: { halign: 'center' }
             
           },
           {
             content : `${this.purchaseBillDetail?.total}`,
             styles: { halign: 'center' }
             
           },
          
         ],
         [
           {
             content : `Please notify us on any disrepancies within 3 days of receipt Overdue invoices will be charged 24% interest.`,
             colSpan : 15,
             styles : {halign : 'left'}
           }
           
         ],
        [
           {
             content : '',
             colSpan : 9,
          
           },
          { content : 'Round Off',
           colSpan : 1,
           styles : {halign : 'right'}
         },
          { content : `${this.purchaseBillDetail?.round_off}`,
           colSpan : 1,
           styles : {halign : 'left'}
         },
         ],
         [
           {
             content : '',
             colSpan : 9,
             styles : {halign : 'left'}
           },
          { content : 'Total ',
           colSpan : 1,
           styles : {halign : 'right'}
         },
          { content : `${this.purchaseBillDetail?.total}`,
           colSpan : 1,
           styles : {halign : 'left'}
         },
         ],
      
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
         'phone' : this.purchaseBillDetail?.party?.mobile_no ?? '',
         'email' : this.purchaseBillDetail?.party?.email ?? ''
       },
       'SHIPPING_ADDRESS' : {
         'address_line_1':  this.selectedAddressShipping?.address_line_1 ?? '',
         'address_line_2' : this.selectedAddressShipping?.address_line_2 ?? '' +' , ' +this.selectedAddressShipping?.city?.city ?? '',
         'address_line_3' : this.selectedAddressBilling?.state?.state == null ? '' : this.selectedAddressBilling?.state?.state  + ' , ' + this.selectedAddressBilling?.country?.country_name == null ? '' : this.selectedAddressBilling?.country?.country_name  ,
         'phone' : this.purchaseBillDetail?.party?.mobile_no ?? '',
         'email' : this.purchaseBillDetail?.party?.email ?? '',
       },
       'table2body' : arr2,
       'order_no' : this.purchaseBillDetail?.refrence_bill_no,
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
      this.itemsPerPage = this.purchaseBillDetail?.logs?.length;
    }
  }
}

