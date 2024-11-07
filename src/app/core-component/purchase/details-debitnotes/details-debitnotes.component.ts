import { PdfgenService } from 'src/app/Services/PdfGenrate/pdfgen.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { DatePipe, Location } from '@angular/common';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
// import html2canvas from 'html2canvas';
// import { jsPDF } from 'jspdf';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-details-debitnotes',
  templateUrl: './details-debitnotes.component.html',
  styleUrls: ['./details-debitnotes.component.scss','../commonDetails.scss'],
  providers : [DatePipe , PdfgenService]
})
export class DetailsDebitnotesComponent implements OnInit {

  constructor(private companyService:CompanyService,private _dpipe : DatePipe,private _pdf : PdfgenService,private Arout: ActivatedRoute, private purchaseService: PurchaseServiceService, private location: Location, private coreService: CoreService) { }
  id: any;
  companyDetails:any;
  printDetails: any;
  supplierAddress:any;
  selectedAddressBilling:any;
  selectedAddressShipping:any;
  isSyncLoading = false;
  userDetails: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
    this.companyService.getCompany().subscribe(res=>{
      this.companyDetails=res[0];
    })
    this.coreService.profileDetails.subscribe((res)=> {
      this.userDetails = res;
    })
  }
  purchaseBillDetail: any
  totalPurchase:any[]=[];
  totalPurchaseRate: any = 0;
  totalmrp:any[]=[];
  totalMrp: any = 0;
  totallanding:any[]=[];
  totalLandingCost: any = 0;
  totaltaxsummary : any ={}
  getdata() {
    this.purchaseService.getPurchaseReturnById(this.id).subscribe(res => {
      if (this.id == res.id) {
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
         // calculation
         this.purchaseBillDetail?.cart?.forEach((res:any)=>{
          this.totalPurchase.push(res?.unit_cost);
          // this.totalPurchaseRate = 0
          let purchaseRate = 0;
          this?.totalPurchase?.forEach((number: any) => {
            purchaseRate += number;
          })
          this.totalPurchaseRate = Number(purchaseRate).toFixed(2);
          // mrp
          this.totalmrp.push(res?.mrp);
          // this.totalMrp = 0;
          let mrp = 0;
          this?.totalmrp?.forEach((number: any) => {
          mrp += number;
          })
          this.totalMrp = Number(mrp).toFixed(2);
          //landing cost
          this.totallanding.push(res?.landing_cost);
          this.totalLandingCost = 0;
          let landingCost = 0;
          this?.totallanding?.forEach((number: any) => {
            landingCost += number;
          })
          this.totalLandingCost = Number(landingCost).toFixed(2);
          // total deduction
          
        })
      }
    })
  }
  goBack() {
    this.location.back();
  }

  getBadgeClass(status: string): string {
    switch (status) {
      case 'Pending':
        return 'pending-status-badge';
      case 'Approved':
        return 'approve-status-badge';
      case 'Rejected':
        return 'reject-status-badge';
      case 'Completed':
        return 'success-status-badge';
      default:
        return '';
    }
  }

  approve() {
    this.isSyncLoading = true;
    this.coreService.loaderBehaveSub.next(true);
    let id: any = Number(this.id)
    const formData = new FormData();
    formData.append('id', id)
    formData.append('status', 'Approved')
    this.purchaseService.purchaseReturnStatusUpdate(formData).subscribe((res)=> {
      console.log(res);
      setTimeout(() => {
        this.coreService.loaderBehaveSub.next(false);
        this.isSyncLoading = false;
        this.getdata();
        let closeModal = <HTMLElement>document.querySelector('.closeApprovalModal');
        closeModal.click();
      }, 500);
    },(err) => {
      this.isSyncLoading = false;
      this.coreService.loaderBehaveSub.next(false);
    })
  }

  reject() {
    this.isSyncLoading = true;
    this.coreService.loaderBehaveSub.next(true);
    let id: any = Number(this.id)
    const formData = new FormData();
    formData.append('id', id)
    formData.append('status', 'Rejected')
    this.purchaseService.purchaseReturnStatusUpdate(formData).subscribe((res)=> {
      console.log(res);
      setTimeout(() => {
        this.coreService.loaderBehaveSub.next(false);
        this.isSyncLoading = false;
        this.getdata();
        let closeModal = <HTMLElement>document.querySelector('.closeRejectModal');
        closeModal.click();
      }, 500);
    }, (err) => {
      this.isSyncLoading = false;
      this.coreService.loaderBehaveSub.next(false);
    })
  }
  Completed(btn:any) {
    this.isSyncLoading = true;
    this.coreService.loaderBehaveSub.next(true);
    let id: any = Number(this.id)
    const formData = new FormData();
    formData.append('id', id)
    formData.append('status', 'Completed')
    this.purchaseService.purchaseReturnStatusUpdate(formData).subscribe((res)=> {
      console.log(res);
      setTimeout(() => {
        this.coreService.loaderBehaveSub.next(false);
        this.isSyncLoading = false;
        this.getdata();
       btn.click()
      }, 500);
    }, (err) => {
      this.isSyncLoading = false;
      this.coreService.loaderBehaveSub.next(false);
    })
  }

  

  generatePdf() {

    let mi_date = this._dpipe.transform(this.purchaseBillDetail?.purchase_return_date , 'dd-MMMM-yyyy')

        let arr2 = new Array() ;
        this.purchaseBillDetail?.cart.forEach((cart : any,n : number) => {
         arr2.push([`${n+1}`,`${cart?.barcode?.sku ?? ''}`,`${cart?.qty ?? ''}`, `${cart?.unit_cost ?? ''}`,`${cart?.mrp ?? '' }`,`${cart?.deduction ?? ''}`, `${cart?.tax ?? ''}`,`${cart?.landing_cost ?? ''}`,`${cart?.total ?? ''}`])
       });
       const obj = {
       'Type' : 'Purchase Return',
       'Fist_date' : this.purchaseBillDetail?.purchase_return_date,
       'Secouand_date' : this.purchaseBillDetail?.purchase_return_date,
       'thead1' : ['Return No.','Supplier Name','Refrensh Bill No.','Return Date','Reverse Charge','Purchase Bill','Reason'],
       'tbody1' : [
        `${this.purchaseBillDetail?.purchase_return_no}`,
        `${this.purchaseBillDetail?.party?.company_name}`,
        `${this.purchaseBillDetail?.refrence_bill_no ?? ''}`,
        `${ mi_date ?? ''}`,
        `${this.purchaseBillDetail?.reverse_charge ?? ''}`,
        `${this.purchaseBillDetail?.purchase_bill?.refrence_bill_no ?? '' }`,
        `${this.purchaseBillDetail?.reason ?? ''}`
      ],
       'table2head' : ['#','Barcode/SKU','Product Name','QTY','Cost Price','Mrp','Deduction','Tax','Landing Cost','Total'],
       'foot2' : [
         [
           {
             content : 'Total',
             colSpan:3,
             styles: { halign: 'center' }
           },
           {
             content : `${this.purchaseBillDetail?.total_qty}`,
             styles: { halign: 'center' }
           },
           {
             content : `${this.totalPurchaseRate}`,
             styles: { halign: 'center' }
             
           },
           {
             content : `${this.totalMrp}`,
             styles: { halign: 'center' }
             
           },
           {
             content : `${this.purchaseBillDetail?.total_deduction}`,
             styles: { halign: 'center' }
             
           },
           {
             content : `${this.purchaseBillDetail?.total_tax}%`,
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
             colSpan : 10,
             styles : {halign : 'left'}
           }
           
         ],
         
         [
           {
             content : '',
             colSpan : 8,
             // styles : {halign : 'left'}
           },
          { content : 'Sub Total',
           colSpan : 1,
           styles : {halign : 'right'}
         },
          { content : `${this.purchaseBillDetail?.sub_total}`,
           colSpan : 1,
           styles : {halign : 'left'}
         },
         ],
         [
          {
            content : '',
            colSpan : 8,
          },
          {
            content : 'Total QTY',
            colSpan : 1,
            styles : {halign : 'right'}
          },
          {
            content : `${this.purchaseBillDetail?.total_qty}`,
            colSpan : 1,
            styles : {halign : 'left'}
          }
      
        ],
         [
          {
            content : '',
            colSpan : 8,
          },
          {
            content : 'Total Tax',
            colSpan : 1,
            styles : {halign : 'right'}
          },
          {
            content : `${this.purchaseBillDetail?.total_tax}`,
            colSpan : 1,
            styles : {halign : 'left'}
          }
      
        ],
         [
          {
            content : '',
            colSpan : 8,
          },
          {
            content : 'Total Discount',
            colSpan : 1,
            styles : {halign : 'right'}
          },
          {
            content : `${this.purchaseBillDetail?.total_discount}`,
            colSpan : 1,
            styles : {halign : 'left'}
          }
      
        ],
         [
          {
            content : '',
            colSpan : 8,
          },
          {
            content : 'Round Off',
            colSpan : 1,
            styles : {halign : 'right'}
          },
          {
            content : `${this.purchaseBillDetail?.round_off}`,
            colSpan : 1,
            styles : {halign : 'left'}
          }
      
        ],
    
  [
           {
             content : '',
             colSpan : 8,
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
         [
           {
             content : '',
           colSpan :8,
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
       'order_no' : this.purchaseBillDetail?.purchase_return_no,
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


