import { company } from './../../interfaces/company';

import jsPDF from 'jspdf';
import { DatePipe } from '@angular/common';
import autoTable from 'jspdf-autotable';
import { CompanyService } from '../Companyservice/company.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class PdfgenService{
constructor(
    private _date_pipe : DatePipe,
    private _com : CompanyService
){}

public loaderPdf = new BehaviorSubject(false)

public generatePdf(obj : any) {

    // table2.body = obj.table2Body
//     let arr2 = new Array() 
//  this.purchaseDetail?.cart.forEach((cart : any,n : number) => {
//   arr2.push([`${n+1}`,`${cart?.barcode?.sku}`,`${cart?.barcode?.product_title}`,`${cart?.qty}`,`${cart?.purchase_rate}`,`${cart?.mrp}`,`${cart?.discount ?? '' }`,`${cart?.tax ?? ''}`,`${cart?.landing_cost}`,`${cart?.total}`])
// });
this.loaderPdf.next(true)
    
    this._com.loadImage().then((img : any)=>{
    const pdf = new jsPDF('p','mm','a4');
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const width = 200;
      const heigth = 200;
      canvas.width = width;
      canvas.height = heigth;
      ctx.clearRect(0,0,width,heigth); // remove Black Bg from images
      ctx.drawImage(img,0,0,width,heigth);
      const compressedImage = canvas.toDataURL('image/png',0.9); // set of images qulity
      // all Dates
      const Fist_date = this._date_pipe.transform(obj.Fist_date, 'dd-MMMM-yyyy');
      const Secouand_date = this._date_pipe.transform(obj.Secouand_date, 'dd-MMMM-yyyy');
      const thead1 = [obj.thead1];
      const tbody1 = [obj.tbody1];
      const table2head = [obj.table2head];
      const foot2 = obj.foot2 ;
let row : number = 21;
let len = foot2.length;
let lenArr = obj.table2body.length;
if(obj.Type === 'Goods Received'){
  // row  = 13;
  

}else if(obj.Type === 'Invoice'){
  row  = 18;

}else if(obj.Type === 'Purchase Return'){
  row  = 18;

  let loop = (lenArr % row);
  let newval = (row - loop);
  if (loop !== 0) for(let i = 0; i < newval; i++) obj.table2body.push([]);

}


else{


  let loop = (lenArr % row);
  let newval = (row - loop);
  if (loop !== 0) for(let i = 0; i < newval; i++) obj.table2body.push([]);
}


let tableHeight : number = 0;
(pdf as any).autoTable({
      head : table2head,
      body : obj.table2body,
      foot : foot2,
       
      startY:   obj.Type === 'Goods Received'? 99 :  92,
      
      headStyles:{
        fontSize : 7,
        textColor :[0,0,0],
        fillColor :[255, 202, 153],

       },
      bodyStyles:{
        fillColor :[255, 255, 255],
        fontSize : 8,
    
       },
      footStyles:{
          fillColor :[255, 255, 255],
          textColor :[0,0,0],
          fontSize : 7,
          halign :'left',
        },
      margin : {top :obj.Type === 'Goods Received'? 99 :  92},
      alternateRowStyles:{ fillColor :[255, 255, 255] },



    didDrawCell: (data : any)=>{
// console.log('deepak', data)
        tableHeight += data.row.height;

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
        if(data.row.index === 0 || data.row.index === 1 || (data.row.index === len-1) ){
          pdf.setDrawColor(0,0,0);
          pdf.setLineWidth(0.2);
          pdf.line(x,y,x+width,y);
          pdf.line(x,y+height,x+width,y+height);
         }
         
        if (obj.Type === 'Invoice' || obj.Type === 'Goods Received'  && data.row.index === 2) {
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


  
  if (obj.Type === 'Goods Received' && obj.show) {
  // console.log('deepak',tableHeight)
let tote = Math.floor(tableHeight) -105;
  
 (pdf as any).autoTable({
    head : obj.Thead3,
    body : obj.Tbody3,
    foot : obj.Tfoot3,
    startY:  tote ,
    headStyles:{
      fontSize : 7,
      textColor :[0,0,0],
      fillColor :[255, 202, 153],

     },
    bodyStyles:{
      fillColor :[255, 255, 255],
      fontSize : 8,
  
     },
    footStyles:{
        fillColor :[255, 255, 255],
        textColor :[0,0,0],
        fontSize : 7,
        halign :'left',
      },
    margin : {top :tote},
    alternateRowStyles:{ fillColor :[255, 255, 255] },
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
      if(data.row.index === 0 || data.row.index === 1 || data.row.index === len-1 ){
        pdf.setDrawColor(0,0,0);
        pdf.setLineWidth(0.2);
        pdf.line(x,y,x+width,y);
        pdf.line(x,y+height,x+width,y+height);

      }
      if (obj.Type === 'Invoice' || obj.Type === 'Goods Received'  && data.row.index === 2) {
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

  
}














 const pageCount = pdf.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
    pdf.setPage(i)
    pdf.setFontSize(9)
    pdf.setFontSize(8);
    if(i === pageCount) {
 if(obj.table2body.length >= 20){
        pdf.text(`${obj.company_name} - Proudly coded`,16,276.4)
        pdf.setTextColor(24,129,176)
        pdf.text("by GFTPL",60,276.4)
        pdf.setTextColor(0,0,0)
        pdf.text("Thank You For The Business",157,276.4) 
      }else{
        pdf.text(`${obj.company_name} - Proudly coded`,16,275.5)
        pdf.setTextColor(24,129,176)
        pdf.text("by GFTPL",60,275.5)
        pdf.setTextColor(0,0,0)
        pdf.text("Thank You For The Business",157,275.5) 
    
      }
}else{ 
      if(obj.table2body.length >= 20){
        pdf.text("Continued on next page",160,280.5);
      }else {
        pdf.text("Continued on next page",190,275);
    } } 
    let leftcontantSpaces : number = 14;
    // lift content
    pdf.addImage(compressedImage,"PNG",leftcontantSpaces, 8, 31, 10)
    pdf.setFontSize(18)
    pdf.setTextColor(256,112,8)

    pdf.text(`${(obj.company_name as string)}`,51,15)

    pdf.setTextColor(256,112,8)
    // pdf.text(`${obj.topLift.company_name}`,35,13);
    pdf.setTextColor(0,0,0)
    pdf.setFontSize(9)
    pdf.text(`GST ${obj.company_gst}`,leftcontantSpaces,23);
    pdf.text(`${obj.top_left_address_line1}`,leftcontantSpaces,27);
    pdf.text(`${obj.top_left_address_line2}`,leftcontantSpaces,31)
    pdf.text(`Phone: ${obj.top_left_phone}`,leftcontantSpaces,39);
    pdf.text(`Email: ${obj.top_left_email}`,leftcontantSpaces,35);
    pdf.setTextColor(256,112,8)
    pdf.setFontSize(11)
    pdf.text('BILLING ADDRESS',leftcontantSpaces,48);
    pdf.setTextColor(0,0,0)
    pdf.setFontSize(9)
    pdf.text(`${obj.company_name}`,leftcontantSpaces,55)
    pdf.text(`${obj.BILLING_ADDRESS.address_line_1} ,${obj.BILLING_ADDRESS.address_line_2}`,leftcontantSpaces,59);
    pdf.text(`${obj.BILLING_ADDRESS.address_line_3}`,leftcontantSpaces,63);
    pdf.text(`Phone: ${obj.BILLING_ADDRESS.phone}`,leftcontantSpaces,67);
    pdf.text(`${obj.BILLING_ADDRESS.email}`,leftcontantSpaces,71);
    // pdf.text(`GST ${obj.company_gst}`,leftcontantSpaces,74);

    // right content
    pdf.setTextColor(0,0,0)
    pdf.setFontSize(19)
    pdf.text(`${obj.Type}`,145,14);

// fist row
    pdf.setDrawColor(0, 0, 0)
    pdf.setLineWidth(0.2);
    pdf.line(197,17,142,17)
    pdf.setFontSize(7)
    pdf.text(`${obj.Type} DATE : ${Fist_date}`,145,20);
    pdf.setDrawColor(0, 0, 0)
    pdf.setLineWidth(0.2);
    pdf.line(197,22,142,22)
    pdf.text(`${obj.Type} NO : ${obj.order_no}`,145,25);
    pdf.setDrawColor(0, 0, 0)
    pdf.setLineWidth(0.2);
    pdf.line(197,27,142,27)

    pdf.text(`PAGE : ${i}`,145,30);
 
    pdf.setDrawColor(0, 0, 0)
    pdf.setLineWidth(0.2);
    pdf.line(197,32,142,32)

    let lineHigth : number = 32;
    if(Secouand_date){

        pdf.text(`Expiry Date : ${Secouand_date}`,145,35);
        pdf.setDrawColor(0, 0, 0)
        pdf.setLineWidth(0.2);
        pdf.line(197,37,142,37)
        lineHigth = 37
    }

// left
    pdf.setDrawColor(0, 0, 0)
    pdf.setLineWidth(0.2);
    pdf.line(142,lineHigth,142,17)
// rigth
    pdf.setDrawColor(0, 0, 0)
    pdf.setLineWidth(0.2);
    pdf.line(197,lineHigth,197,17)

    let SHIPPING_ADDRESS_X_value : number = 159

    pdf.setTextColor(256,112,8)
    pdf.setFontSize(11)
    pdf.text('SHIPPING ADDRESS',SHIPPING_ADDRESS_X_value,48);
    pdf.setTextColor(0,0,0)
    pdf.setFontSize(9)
    pdf.text(`${obj.company_name}`,SHIPPING_ADDRESS_X_value,55)
    pdf.text(`${obj.SHIPPING_ADDRESS.address_line_1 } ,${obj.SHIPPING_ADDRESS.address_line_2 }`,SHIPPING_ADDRESS_X_value,59);
    pdf.text(`${obj.SHIPPING_ADDRESS.address_line_3}`,SHIPPING_ADDRESS_X_value,63);
    pdf.text(`Phone: ${obj.SHIPPING_ADDRESS.phone}`,SHIPPING_ADDRESS_X_value,67);
    pdf.text(`${obj.SHIPPING_ADDRESS.email}`,SHIPPING_ADDRESS_X_value,71);
    // pdf.text(`GST ${obj.company_gst}`,SHIPPING_ADDRESS_X_value,74);
    
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
    fontSize : obj.Type === 'Goods Received'? 8 :  9,
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
    }}}})


if(obj.Type=== 'Goods Received'){

  
    pdf.setDrawColor(0, 0, 0)
    pdf.setLineWidth(0.2);
    pdf.line(14,105.5,196,105.5)
}else{

  pdf.setDrawColor(0, 0, 0)
  pdf.setLineWidth(0.2);
  pdf.line(14,98.5,196,98.5)


}


    }
    pdf.save(`${obj.Type}.pdf`,{returnPromise : true}).then(()=>{
        setTimeout(() => {
            
            this.loaderPdf.next(false);
        }, 1000);
    })
  })
}
}