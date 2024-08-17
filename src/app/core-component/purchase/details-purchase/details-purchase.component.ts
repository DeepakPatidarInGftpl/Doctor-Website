import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { Location ,DatePipe} from '@angular/common';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

// import {autoTable} from 'jspdf-autotable'

type address_type = {
  address_type : 'Billing' | 'Shipping'
}
@Component({
  selector: 'app-details-purchase',
  templateUrl: './details-purchase.component.html',
  styleUrls: ['./details-purchase.component.scss','../commonDetails.scss'],
  providers : [DatePipe]

})
export class DetailsPurchaseComponent implements OnInit {

  constructor(private companyService:CompanyService,private Arout: ActivatedRoute, private purchaseService: PurchaseServiceService, private location: Location,
    private _date_pipe : DatePipe
  ) { }
  id: any;
  companyDetails:any;
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
  purchaseDetail: any = [];
  totalPurchase:any[]=[];
  totalPurchaseRate=0;
  totalmrp:any[]=[];
  totalMrp=0;
  totallanding:any[]=[];
  totalLandingCost=0;
  getdata() {
    this.purchaseService.getPurchaseById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.purchaseDetail = res
        this.supplierAddress = res;
        console.log(this.supplierAddress); 
        this.supplierAddress?.party?.address.map((res: address_type) => {
          if (res?.address_type == 'Billing') {
            this.selectedAddressBilling = res;
            console.log(this.selectedAddressBilling);
          } else if (res.address_type == 'Shipping') {
            this.selectedAddressShipping = res;
            console.log(this.selectedAddressShipping);
          }
        })

        // calculation
        this.purchaseDetail?.cart?.forEach((res:any)=>{
          this.totalPurchase.push(res?.purchase_rate);
          this.totalPurchaseRate=0;
          this?.totalPurchase?.forEach((number: any) => {
            this.totalPurchaseRate += number;
          })
          // mrp
          this.totalmrp.push(res?.mrp);
          this.totalMrp=0
          this?.totalmrp?.forEach((number: any) => {
            this.totalMrp += number;
          })
          //landing cost
          this.totallanding.push(res?.landing_cost);
          this.totalLandingCost=0;
          this?.totallanding?.forEach((number: any) => {
            this.totalLandingCost += number;
          })
        })
      }
    })
  }
  goBack() {
    this.location.back();
  }

  loaderPdf = false;
  generatePdf() {
    // this.loaderPdf = true;
    // const elementToCapture = document.getElementById('debitNote');
    // if (elementToCapture) {
    //   html2canvas(elementToCapture).then((canvas) => {
    //     this.loaderPdf = false;
    //     const imgData = canvas.toDataURL('image/png');
    //     const pdf = new jsPDF('p', 'mm', 'a4');
    //     const width = pdf.internal.pageSize.getWidth();
    //     const height = pdf.internal.pageSize.getHeight();
    //     pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
    //     pdf.save('purchaseOrder.pdf').;
    //   });
    // }
    const pdf = new jsPDF('p','mm','a4');
   const order_date = this._date_pipe.transform(this.purchaseDetail?.order_date, 'dd-MMMM-yyyy');
    const shipping_date = this._date_pipe.transform(this.purchaseDetail?.shipping_date, 'dd-MMMM-yyyy');

    const thead1 = [['Order No.','Supplier Name','Purchase Date','Shipping Date','Shipping Note']];
    const tbody1 = [[`${this.purchaseDetail?.order_no}`,`${this.purchaseDetail?.order_no}`,`${order_date}`,`${shipping_date}`,`${this.purchaseDetail?.shipping_note}`]]



        
        const table2 = {
          head : [['#', 'Barcode/SKU' , 'Product Name','QTY','Cost Price','Mrp','Discount %','Tax','Landing Cost','Total']],
         
          body : [
            ['1' ,' 3/4" ADAPTER' , '3/4" ADAPTER', '2.00','1','2.00','56','345','rer','93'],
          ],
          // foot2 :[
          //   [],
          //   [
          //     {content :'THIS QUOTATION REMAINS VALID FOR 7 DAYS WITH THE EXCEPTION OF COMMODITY ITEMS INCLUDING GIVEN ITEMS AS PRICING IS SUBJECT  TO CHANGE WITHOUT NOTICE.', colSpan:3
          //   },
          //   {
          //     content:'Sub Total',
          //     colSpan:2
          //   },
          //   {
          //     content: `${obj.subtotal}`
          //   }
          //   ],
          //   // [{content :'', colSpan:3
          //   // },
          //   // {
          //   //   content: "ENV FEES",
          //   //   colSpan:2
          //   // },
          //   // {
          //   //   content: `${obj.env_tax}`
          //   // }
          //   // ],
          //   // [
          //   //   {content :'', colSpan:3
          //   // },
          //   // {
          //   //   content: "GST ",
          //   //   colSpan:2
          //   // },
          //   // {
          //   //   content: `${obj.GST}`
          //   // }
            
          //   // ],
          //   // [
          //   //   {
          //   //     content:" ",
          //   //     colSpan:3
    
          //   //   }
          //   //   ,{
          //   //     content: "HST ",
          //   //     colSpan:2
          //   //   },
          //   //   {
          //   //     content: `${obj.HST}`
          //   //   }
          //   // ],
          //   // [
          //   //   {
          //   //     content:" ",
          //   //     colSpan:3
    
          //   //   }
          //   //   ,{
          //   //     content: "PST ",
          //   //     colSpan:2
          //   //   },
          //   //   {
          //   //     content: `${obj.PST}`
          //   //   }
            
          //   // ],
            
          //   // [
          //   //   {
          //   //     content:" ",
          //   //     colSpan:3
    
          //   //   }
          //   //   ,{
          //   //     content: "Round Off ",
          //   //     colSpan:2
          //   //   },
          //   //   {
          //   //     content: `${obj.roundoff}`
          //   //   }
            
          //   // ],
          //   // [
          //   //   {
          //   //     content:" ",
          //   //     colSpan:3
    
          //   //   }
          //   //   ,{
          //   //     content: "Delivery Charge ",
          //   //     colSpan:2
          //   //   },
          //   //   {
          //   //     content: `${obj.delivery_charge}`
          //   //   }
            
          //   // ],
          //   [
          //     {
          //       content:" ",
          //       colSpan:3
    
          //     }
          //     ,{
          //       content: "Total ",
          //       colSpan:2
          //     },
          //     {
          //       content: `${obj.Total}`
          //     }
            
          //   ],
            
          //   // [
          //   // {
          //   //     content:" ",
          //   //     colSpan:3
    
          //   // }
          //   // ,{
          //   //     content: "",
          //   //     colSpan:3
          //   // }],
            
            
           
          // ],
          
        }
        const foot2 = [
          [
          {
            content :'THIS QUOTATION REMAINS VALID FOR 7 DAYS WITH THE EXCEPTION OF COMMODITY ITEMS INCLUDING GIVEN ITEMS AS PRICING IS SUBJECT TO CHANGE WITHOUT NOTICE.', colSpan:3,
            styles : {fontSize : 5}
          },
          
          {
            content: 'Sub Total',
            styles: { halign: 'right' },
            colSpan:2
    
          },
          {
            content: `hiii`,
            styles: { halign: 'lift' }
          }
          ],
    
          [
            {
              content:" ",
              colSpan:3
    
            }
            ,{
              content: "Total ",
              colSpan:2,
            styles: { halign: 'right' }
    
            },
            {
              content: `hiii`,
            styles: { halign: 'lift' }
    
            }
          
          ],
        ];
    
    
        const addTaxDetail = (taxType: string, show: boolean, taxValue: number, index: number) => {
          if (taxValue > 0 || (show && (taxType === 'PST' || taxType === 'GST' || taxType === 'HST'))) {
            let arr = [
              { content: '', colSpan: 3, styles: { fontSize: 5 } },
              { content: taxType, colSpan: 2, styles: { halign: 'right' } },
              { content: taxValue+"", styles: { halign: 'left' } }
            ];
            foot2.splice(index, 0, arr);
            return null;
          }
          return index;
        };
    
        
    // let a = addTaxDetail("ENV FEES",false ,obj.env_tax, 1);
    // let b = addTaxDetail("GST", obj.gst_show,obj.GST, (a ? a : 2));
    // let c = addTaxDetail("Round Off", false,obj.roundoff, (b ? b : 2));
    // let d = addTaxDetail("HST", obj.hst_show,obj.HST, (c ? c : 3));
    // let e = addTaxDetail("PST",obj.pst_show ,obj.PST, (d ? d : 4));
    // let f = addTaxDetail("Delivery Charge",false ,obj.delivery_charge, (e ? e : 5));
    if (foot2.length <= 8) {
      let lens = ( 8 - foot2.length);
      
        for (let i = 0; i < lens; i++) {
          if(i === lens-1){
            console.log('last')
            foot2.push([{
              content:"",
              colSpan:3}
          ,{
              content: "",
              colSpan:3
          }
          ])
    }
    else if(i === lens-2){
      foot2.push([{
        content:`Note : ${''}`,
        // content:`Note : ${obj.notes ? obj.notes.substring(0,100) : ''}`,
        colSpan:12
      }
    ,
    
    ])
    }
    
    else{
          foot2.push([{
                content:"",
                colSpan:3}
            ,{
                content: "",
                colSpan:2
            }
            ])
          }
        
      }
      
      
      }
    
    
    // table2.body = obj.table2Body
    let len = foot2.length;
    // let lenArr = table2.body.length
    // let row : number = 20
    // let loop = (lenArr % row);
    // let newval = (row - loop)
    // if (loop !== 0) for(let i = 0; i < newval; i++) table2.body.push([]);
    (pdf as any).autoTable({
      head : table2.head,
      body : table2.body,
      foot : foot2,
      startY: 88,
      headStyles:{
        fontSize : 9,
        textColor :[0,0,0],
        fillColor :[255,255,255],
       },
      bodyStyles:{
        fillColor :[255, 255, 255],
        fontSize : 8,
    
       },
      footStyles:{
          fillColor :[255, 255, 255],
          textColor :[0,0,0],
          fontSize : 7,
          halign :'left'
    
       },
      styles:{
        lineColor:[0,0,0],
        
       },
      margin : {top :88},
      alternateRowStyles:{
        fillColor :[255, 255, 255],
    
    },
      didDrawCell: (data : any)=>{
        const {cell} = data;
        const {x,y,width,height} = cell;
          pdf.setDrawColor(0,0,0);
          pdf.setLineWidth(0.2);
          pdf.line(cell.x + cell.width ,cell.y,cell.x + cell.width, cell.y + cell.height);
         
        if( data.section === 'head' ){
            // top
          if (data.row.index == 0 || data.row.index == 1) {
            pdf.setDrawColor(0,0,0);
            pdf.setLineWidth(0.2);
            pdf.line(cell.x,cell.y,cell.x+cell.width,cell.y)
          }
          if (data.row.index == 2) {
            pdf.setDrawColor(0,0,0);
            pdf.setLineWidth(0.2);
            pdf.line(cell.x,cell.y+cell.height,cell.x+cell.width,cell.y+cell.height)
          }}
    
        if( data.section === 'foot'){
          if(data.row.index === 0 || data.row.index === len-1 || data.row.index === len-2 ){
            pdf.setDrawColor(0,0,0);
            pdf.setLineWidth(0.2);
            pdf.line(x,y,x+width,y);
            pdf.line(x,y+height,x+width,y+height);
    
          }
          if (data.row.index == 1) {
            pdf.setDrawColor(0,0,0);
            pdf.setLineWidth(0.2);
            pdf.line(cell.x,cell.y,cell.x+cell.width,cell.y)
          }
    
    
        }
          // lift  
        if (data.column.index == 0) {
          pdf.setDrawColor(0,0,0);
          pdf.setLineWidth(0.2);
          pdf.line(cell.x,cell.y,cell.x,cell.y+cell.height)
        }
    
       
    },
    });
    
    
    
    
    const pageCount = pdf.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
    pdf.setPage(i)
    pdf.setFontSize(9)
    pdf.text(`Page ${i} of ${pageCount}`,14 , 287);
    pdf.setFontSize(8);
    if(i === pageCount) {
      if(table2.body.length >= 20){
        pdf.text("Instant Light - Proudly coded",16,280.5)
        pdf.setTextColor(24,129,176)
        pdf.text("by GFTPL",54,280.5)
        pdf.setTextColor(0,0,0)
        pdf.text("Thank You For The Business",157,280.5) 
      }else{
        pdf.text("Instant Light - Proudly coded",16,260.5)
        pdf.setTextColor(24,129,176)
        pdf.text("by GFTPL",54,260.5)
        pdf.setTextColor(0,0,0)
        pdf.text("Thank You For The Business",157,260.5) 
    
      }
    
    
    }
    
    else{ 
      if(table2.body.length >= 20){
        pdf.text("Continued on next page",160,280.5);
      }else {
        pdf.text("Continued on next page",190,275);
    
      }
    } 
    
   
    
    
    
    // lift content
    // pdf.addImage('../../../../assets/dummy/pos.png', 'PNG', 10, 0, 40, 16);
    pdf.setTextColor(256,112,8)
    pdf.setFontSize(18)
    // pdf.text(`${obj.topLift.company_name}`,35,13);
    pdf.setTextColor(0,0,0)
    pdf.setFontSize(7)
    pdf.text(`GST ${this.companyDetails?.gst}`,10,22);
    pdf.setFontSize(6)
    pdf.text(`Company Name : ${this.companyDetails?.name}`,10,26);
    pdf.text(`Financial Year: ${this.companyDetails?.financial_year?.financial_year}`,10,30);
    pdf.text(`Address : ${this.companyDetails?.address+' , '+this.companyDetails?.city?.city+' , '+this.companyDetails?.state?.state+' , '+this.companyDetails?.country?.country_name+' , '+this.companyDetails?.pincode}`,10,34);
    pdf.text(`Phone: ${this.companyDetails?.phone}`,10,34);
    pdf.setTextColor(256,112,8)
    pdf.setFontSize(8)
    pdf.text('BILLING ADDRESS',16,41);
    pdf.setTextColor(0,0,0)
    pdf.setFontSize(7)
    // pdf.text(`${obj.BILLING_address.company_name}`,16,45);
    pdf.text(`${this.selectedAddressBilling?.address_line_1==null?'':this.selectedAddressBilling?.address_line_1}`,16,49);
    pdf.text(`${this.selectedAddressBilling?.address_line_2==null?'':this.selectedAddressBilling?.address_line_2}`,16,53);
    pdf.text(`${this.selectedAddressBilling?.city?.city+' ,'+this.selectedAddressBilling?.state?.state + ' ,' +this.selectedAddressBilling?.country?.country_name}`,16,57);
    // pdf.text(`Phone: ${this.purchaseDetail?.party?.mobile_no}`,16,61);
    pdf.text(`${this.purchaseDetail?.party?.email}`,16,65);
    // pdf.text(`GST ${obj.BILLING_address?.gst}`,16,69);
    
    
    // right content
    pdf.setTextColor(0,0,0)
    pdf.setFontSize(19)
    pdf.text(`INVOICE`,145,11);
    pdf.setFontSize(7)
    pdf.text(`${this.purchaseDetail?.party?.gstin}`,145,16);
    pdf.text(`INVOICE DATE : ${order_date}`,145,20);
    // if(obj.type === 'Order')
    pdf.text(`INVOICE NO : ${this.purchaseDetail?.order_no}`,145,25);
    pdf.text(`EXPIRY DATE : ${shipping_date}`,145,30);
    pdf.setTextColor(256,112,8)
    pdf.setFontSize(8)
    pdf.text('SHIPPING ADDRESS',147,41);
    pdf.setTextColor(0,0,0)
    pdf.setFontSize(7)
    // pdf.text(`${obj.SHIPPING_address.company_name}`,147,45);
    pdf.text(`${this.selectedAddressBilling?.address_line_1==null?'':this.selectedAddressBilling?.address_line_1 }`,147,49);
    pdf.text(`${this.selectedAddressBilling?.address_line_2==null?'':this.selectedAddressBilling?.address_line_2 }`,147,53);
    pdf.text(`${this.selectedAddressShipping?.city?.city+" ,"+this.selectedAddressBilling?.state?.state + ' , ' +this.selectedAddressBilling?.country?.country_name}`,147,57);
    pdf.text(`Phone: ${this.purchaseDetail?.party?.mobile_no}`,147,61);
    pdf.text(`${this.purchaseDetail?.party?.email}`,147,65);
    // pdf.text(`GST ${obj.SHIPPING_address?.gst}`,147,69);
    
    // add bottom border
    const pageWigth = pdf.internal.pageSize.getWidth();
    const margin =5;
    pdf.setDrawColor(224, 224, 224)
    pdf.setLineWidth(0.2);
    pdf.line(margin,37,pageWigth-margin,37)
    //add table first
    
    autoTable(pdf,{
    head : thead1,
    body : tbody1,
    startY: 71,
    headStyles:{
    fontSize : 9,
    textColor :[0,0,0],
    fillColor :[255,255,255],
    
    },
    alternateRowStyles:{
      fillColor :[255, 255, 255],
    
    },
    styles:{
    lineWidth :0,
    fillColor:undefined,
    halign :'center'
    },
    
    didDrawCell: (data)=>{
    if(data.section === 'body' || data.section === 'head' ){
    const {cell,table} = data;
    // top
    if (data.row.index == 0) {
    pdf.setDrawColor(0,0,0);
    pdf.setLineWidth(0.2);
    pdf.line(cell.x,cell.y,cell.x+cell.width,cell.y)
    }
    // bottom
    if (data.row.index == table.body.length-1) {
    pdf.setDrawColor(0,0,0);
    pdf.setLineWidth(0.2);
    pdf.line(cell.x,cell.y+cell.height,cell.x+cell.width,cell.y+cell.height)
    }
    // lift
    if (data.column.index == 0) {
    pdf.setDrawColor(0,0,0);
    pdf.setLineWidth(0.2);
    pdf.line(cell.x,cell.y,cell.x,cell.y+cell.height)
    }
    // right
    if (data.column.index == table.columns.length -1) {
    pdf.setDrawColor(0,0,0);
    pdf.setLineWidth(0.2);
    pdf.line(cell.x+cell.width,cell.y,cell.x+cell.width,cell.y+cell.height)
    }
    }
    
    
    
    
    }
    })
    
    pdf.setDrawColor(0, 0, 0)
    pdf.setLineWidth(0.2);
    pdf.line(14,95.5,196,95.5)
    
    }
    
    
    
    pdf.save('purchase-order.pdf')
    
    
    
    
    
    
    
    
    





























  }

  printForm(): void {
    const printContents = document.getElementById('debitNote').outerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
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
      this.itemsPerPage = this.purchaseDetail?.logs?.length;
    }
  }
}
