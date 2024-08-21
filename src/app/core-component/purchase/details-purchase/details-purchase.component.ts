import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { Location ,DatePipe} from '@angular/common';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { content } from 'html2canvas/dist/types/css/property-descriptors/content';
type address_type = {
  address_type : 'Billing' | 'Shipping'
}

@Component({
  selector: 'app-details-purchase',
  templateUrl: './details-purchase.component.html',
  styleUrls: ['./details-purchase.component.scss','../commonDetails.scss'],
  providers : [DatePipe]

})
export class DetailsPurchaseComponent  implements OnInit  {

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
  getdata() : void {
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
    const img  = new Image();
    const pdf = new jsPDF('p','mm','a4');
    img.src = 'assets/logo/pdfLogo.png';
    img.onload = ()=>{
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const width =200;
      const heigth = 200;
      canvas.width = width;
      canvas.height = heigth;
      ctx.clearRect(0,0,width,heigth);
      ctx.drawImage(img,0,0,width,heigth);
      const compressedImage = canvas.toDataURL('image/png',0.9);
      const order_date = this._date_pipe.transform(this.purchaseDetail?.order_date, 'dd-MMMM-yyyy');
      const shipping_date = this._date_pipe.transform(this.purchaseDetail?.shipping_date, 'dd-MMMM-yyyy');

    const thead1 = [['Order No.','Supplier Name','Purchase Date','Shipping Date','Shipping Note']];
    const tbody1 = [[`${this.purchaseDetail?.order_no}`,`${this.purchaseDetail?.order_no}`,`${order_date}`,`${shipping_date}`,`${this.purchaseDetail?.shipping_note}`]];
    const table2head = [['#', 'Barcode/SKU' , 'Product Name','QTY','Cost Price','Mrp','Discount %','Tax','Landing Cost','Total']];
    const foot2 = [
          [
            {
              content : 'Total',
              colSpan:3,
              styles: { halign: 'center' }
            },
            {
              content : `${this.purchaseDetail?.total_qty}`,
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
              content : `${this.purchaseDetail?.total_discount}%`,
              styles: { halign: 'center' }
              
            },
            {
              content : `${this.purchaseDetail?.total_tax}%`,
              styles: { halign: 'center' }
              
            },
            {
              content : `${this.totalLandingCost} `,
              styles: { halign: 'center' }
              
            },
            {
              content : `${this.purchaseDetail?.total} `,
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
              content : ``,
              colSpan : 7,
            },
            {
              content : `Sub Total `,
              colSpan : 2,
              styles : {halign : 'right'}
            },
            {
              content : `${this.purchaseDetail?.sub_total}`,
              colSpan : 1,
              styles : {halign : 'left'}
            }

          ],
          [
            {
              content : '',
              colSpan : 7,
              // styles : {halign : 'left'}
            },
           { content : 'Round Off ',
            colSpan : 2,
            styles : {halign : 'right'}
          },
           { content : `${this.purchaseDetail?.round_off}`,
            colSpan : 1,
            styles : {halign : 'left'}
          },
          ],
          [
            {
              content : '',
              colSpan : 7,
              styles : {halign : 'left'}
            },
           { content : 'Total ',
            colSpan : 2,
            styles : {halign : 'right'}
          },
           { content : `${this.purchaseDetail?.total}`,
            colSpan : 1,
            styles : {halign : 'left'}
          },
          ],
          [
            {
              content : '',
            colSpan : 7,
            },
            {
              content : '',
            colSpan : 3,
            },
          ]
        ];
    
    

        
          
    
    
    // table2.body = obj.table2Body
    let arr2 = new Array() 
 this.purchaseDetail?.cart.forEach((cart : any,n : number) => {
  arr2.push([`${n+1}`,`${cart?.barcode?.sku}`,`${cart?.barcode?.product_title}`,`${cart?.qty}`,`${cart?.purchase_rate}`,`${cart?.mrp}`,`${cart?.discount ?? '' }`,`${cart?.tax ?? ''}`,`${cart?.landing_cost}`,`${cart?.total}`])
});


let len = foot2.length;
let lenArr = arr2.length;
let row : number = 21;
let loop = (lenArr % row);
let newval = (row - loop);
if (loop !== 0) for(let i = 0; i < newval; i++) arr2.push([]);
 (pdf as any).autoTable({
      head : table2head,
      body : arr2,
      foot : foot2,
      startY: 92,
      
      headStyles:{
        fontSize : 7,
        textColor :[0,0,0],
        fillColor :[255, 202, 153],
        // lineColor:[0,0,0],
        // lineWidth:0.1,  
       },
      bodyStyles:{
        fillColor :[255, 255, 255],
        fontSize : 8,
    
       },
      footStyles:{
          fillColor :[255, 255, 255],
          textColor :[0,0,0],
          fontSize : 7,
          // lineHeight : 0.7,
          // cellPadding:0.7,
          halign :'left',

    
       },
      styles:{
           
       },
      margin : {top :92},
      alternateRowStyles:{
        fillColor :[255, 255, 255],
    
    },
    


    didDrawCell: (data : any)=>{
      const {cell,table} = data;
      const {x,y,width,height} = cell;

          if (data.column.index == table.columns.length -1) {
            pdf.setDrawColor(0,0,0);
            pdf.setLineWidth(0.2);
            pdf.line(cell.x+cell.width,cell.y,cell.x+cell.width,cell.y+cell.height)
          }else{
            pdf.setDrawColor(0,0,0);
            pdf.setLineWidth(0.4);
            pdf.line(cell.x + cell.width ,cell.y,cell.x + cell.width, cell.y + cell.height);
          }

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
          pdf.line(cell.x,cell.y,cell.x+cell.width,cell.y)
        }
        if(data.column.index === 4){
            pdf.setDrawColor(0,0,0);
            pdf.setLineWidth(0);
            pdf.line(cell.x + cell.width ,cell.y,cell.x + cell.width, cell.y + cell.height);
        
          }
        }
  
      if( data.section === 'foot'){
        if(data.row.index === 0 ||data.row.index === 1 || data.row.index === len-1 ){
          pdf.setDrawColor(0,0,0);
          pdf.setLineWidth(0.2);
          pdf.line(x,y,x+width,y);
          pdf.line(x,y+height,x+width,y+height);
  
        }
      }
        // lift  
      if (data.column.index == 0) {
        pdf.setDrawColor(0,0,0);
        pdf.setLineWidth(0.2);
        pdf.line(cell.x,cell.y,cell.x,cell.y+cell.height)
      }
  }
  });

  
    
    // console.log('deepak',totalHightOfTable2)
    
    
    
    const pageCount = pdf.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
    pdf.setPage(i)
    pdf.setFontSize(9)
    // pdf.text(`Page ${i} of ${pageCount}`,14 , 287);
    pdf.setFontSize(8);
    if(i === pageCount) {






      if(arr2.length >= 20){
        pdf.text(`${this.companyDetails?.name} - Proudly coded`,16,276.4)
        pdf.setTextColor(24,129,176)
        pdf.text("by GFTPL",60,276.4)
        pdf.setTextColor(0,0,0)
        pdf.text("Thank You For The Business",157,276.4) 
      }else{
        pdf.text(`${this.companyDetails?.name} - Proudly coded`,16,262.5)
        pdf.setTextColor(24,129,176)
        pdf.text("by GFTPL",60,262.5)
        pdf.setTextColor(0,0,0)
        pdf.text("Thank You For The Business",157,262.5) 
    
      }
    
    
    }
    
    else{ 
      if(arr2.length >= 20){
        pdf.text("Continued on next page",160,280.5);
      }else {
        pdf.text("Continued on next page",190,275);
    
      }
    } 
    
   
    
    let leftcontantSpaces : number = 14;
   
    
    // lift content
    pdf.addImage(compressedImage,"PNG",leftcontantSpaces, 8, 31, 10)
    pdf.setFontSize(18)
    pdf.setTextColor(256,112,8)

    pdf.text(`${(this.companyDetails?.name as string)}`,51,15)

    pdf.setTextColor(256,112,8)
    // pdf.text(`${obj.topLift.company_name}`,35,13);
    pdf.setTextColor(0,0,0)
    pdf.setFontSize(9)
    pdf.text(`GST ${this.companyDetails?.gst}`,leftcontantSpaces,23);
    pdf.text(`${this.companyDetails?.address+' , '+this.companyDetails?.city?.city}`,leftcontantSpaces,27);
    pdf.text(`${this.companyDetails?.state?.state+' , '+this.companyDetails?.country?.country_name+' , '+this.companyDetails?.pincode}`,leftcontantSpaces,31)
    pdf.text(`Phone: ${this.companyDetails?.phone}`,leftcontantSpaces,39);
    pdf.text(`Email: ${this.companyDetails?.email}`,leftcontantSpaces,35);
    console.log('comm',this.companyDetails)
    pdf.setTextColor(256,112,8)
    pdf.setFontSize(11)
    pdf.text('BILLING ADDRESS',leftcontantSpaces,48);
    pdf.setTextColor(0,0,0)
    pdf.setFontSize(9)
    pdf.text(`${this.companyDetails?.name}`,leftcontantSpaces,55)
    pdf.text(`${this.selectedAddressBilling?.address_line_1==null?'':this.selectedAddressBilling?.address_line_1} ,${this.selectedAddressBilling?.address_line_2==null?'':this.selectedAddressBilling?.address_line_2}`,leftcontantSpaces,59);
    pdf.text(`${this.selectedAddressBilling?.city?.city+' ,'+this.selectedAddressBilling?.state?.state + ' ,' +this.selectedAddressBilling?.country?.country_name}`,leftcontantSpaces,63);
    pdf.text(`Phone: ${this.purchaseDetail?.party?.mobile_no}`,leftcontantSpaces,67);
    pdf.text(`${this.purchaseDetail?.party?.email}`,leftcontantSpaces,71);
    // pdf.text(`GST ${obj.BILLING_address?.gst}`,16,69);
    
    // console.log('biil', this.selectedAddressBilling)
    // right content
    pdf.setTextColor(0,0,0)
    pdf.setFontSize(19)
    pdf.text(`Purchase Order`,145,14);
    // pdf.setFontSize(9)
    // pdf.text(`INVOICE DATE : ${order_date}`,145,20);
    // pdf.text(`INVOICE NO : ${this.purchaseDetail?.order_no}`,145,25);

// fist row
    pdf.setDrawColor(0, 0, 0)
    pdf.setLineWidth(0.2);
    pdf.line(197,17,142,17)
    pdf.setFontSize(7)
    pdf.text(`PURCHASE ORDER DATE : ${order_date}`,145,20);

    pdf.setDrawColor(0, 0, 0)
    pdf.setLineWidth(0.2);
    pdf.line(197,22,142,22)

    pdf.text(`PURCHASE ORDER NO : ${this.purchaseDetail?.order_no}`,145,25);


    pdf.setDrawColor(0, 0, 0)
    pdf.setLineWidth(0.2);
    pdf.line(197,27,142,27)

    pdf.text(`PAGE : ${i}`,145,30);
 
    pdf.setDrawColor(0, 0, 0)
    pdf.setLineWidth(0.2);
    pdf.line(197,32,142,32)

// left
    pdf.setDrawColor(0, 0, 0)
    pdf.setLineWidth(0.2);
    pdf.line(142,32,142,17)
// rigth
    pdf.setDrawColor(0, 0, 0)
    pdf.setLineWidth(0.2);
    pdf.line(197,32,197,17)

    let SHIPPING_ADDRESS_X_value : number = 159

    pdf.setTextColor(256,112,8)
    pdf.setFontSize(11)
    pdf.text('SHIPPING ADDRESS',SHIPPING_ADDRESS_X_value,48);
    pdf.setTextColor(0,0,0)
    pdf.setFontSize(9)
    pdf.text(`${this.companyDetails?.name}`,SHIPPING_ADDRESS_X_value,55)
    pdf.text(`${this.selectedAddressBilling?.address_line_1==null?'':this.selectedAddressBilling?.address_line_1 } ,${this.selectedAddressBilling?.address_line_2==null?'':this.selectedAddressBilling?.address_line_2 }`,SHIPPING_ADDRESS_X_value,59);
    pdf.text(`${this.selectedAddressShipping?.city?.city+" ,"+this.selectedAddressBilling?.state?.state + ' , ' +this.selectedAddressBilling?.country?.country_name}`,SHIPPING_ADDRESS_X_value,63);
    pdf.text(`Phone: ${this.purchaseDetail?.party?.mobile_no}`,SHIPPING_ADDRESS_X_value,67);
    pdf.text(`${this.purchaseDetail?.party?.email}`,SHIPPING_ADDRESS_X_value,71);
    // pdf.text(`GST ${obj.SHIPPING_address?.gst}`,147,69);
    
    // add bottom border
    const pageWigth = pdf.internal.pageSize.getWidth();
    const margin =5;
    pdf.setDrawColor(224, 224, 224)
    pdf.setLineWidth(0.2);
    pdf.line(margin,42,pageWigth-margin,42)
    //add table first
    
    autoTable(pdf,{
    head : thead1,
    body : tbody1,
    startY: 75,
    headStyles:{
    fontSize : 9,
    textColor :[0,0,0],
    fillColor :[255, 202, 153],
    
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
      // totalHightOfTable1 =Math.floor(data.cursor.y - data.settings.startY);
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
    pdf.line(14,98.5,196,98.5)
    
    }
    pdf.save('purchase-order.pdf')
  } 
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
