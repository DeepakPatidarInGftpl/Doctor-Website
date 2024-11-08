
import jsPDF from 'jspdf';
import { DatePipe } from '@angular/common';
import autoTable from 'jspdf-autotable';
import { CompanyService } from '../Companyservice/company.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type addresss ={
  address_type : 'Billing' | 'Shipping',
  is_default : Boolean
}



@Injectable()
export class PdfgenService{
constructor(
    private _date_pipe : DatePipe,
    private _com : CompanyService
){}

public loaderPdf = new BehaviorSubject(false)

public generatePdf(obj : any) {

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
      const len = foot2.length;



let row: number = 21;


if (obj.Type === 'Goods Received' || obj.Type === 'New Stock Transfer' || obj.Type === 'Stock Transfer Request') {
  row = 13;
} else if (obj.Type === 'Invoice') {
  row = 18;
} else if (obj.Type === 'Purchase Return') {
  row = 18;
} else if (obj.Type === 'Scrap Entry') {
  row = 28;
}
((row: number) => {
  const lenArr = obj.table2body.length;
  const loop = lenArr % row;
  const newval = row - loop;
  if (loop !== 0) {
    for (let i = 0; i < newval; i++) {
      obj.table2body.push([]);
    }
  }
})(row);

if (obj.Type !== 'Countra Voucher' && obj.Type !== 'Debit Note' && obj.Type !== 'Credit Note') {

  const startY = obj.Type === 'Goods Received' ? 99 : obj.Type === 'Scrap Entry' ? 47 : 92;
  const marginTop = { top: startY };

  (pdf as any).autoTable({
    head: table2head,
    body: obj.table2body,
    foot: foot2,
    startY,
    margin: marginTop,
    headStyles: {
      fontSize: 7,
      textColor: [0, 0, 0],
      fillColor: [255, 202, 153],
    },
    bodyStyles: {
      fillColor: [255, 255, 255],
      fontSize: 8,
    },
    footStyles: {
      fillColor: [255, 255, 255],
      textColor: [0, 0, 0],
      fontSize: 7,
      halign: 'left',
    },
    alternateRowStyles: { fillColor: [255, 255, 255] },

    didDrawCell: (data: any) => {
      const { cell, table } = data;
      const { x, y, width, height } = cell;

      pdf.setDrawColor(0, 0, 0);

      if (data.column.index === table.columns.length - 1) {
        pdf.setLineWidth(0.2);
      } else {
        pdf.setLineWidth(0.4);
      }
      pdf.line(cell.x + cell.width, cell.y, cell.x + cell.width, cell.y + cell.height);

      if (data.section === 'head') {
        if (data.row.index <= 2) {
          pdf.setLineWidth(0.2);
          pdf.line(cell.x, cell.y, cell.x + cell.width, cell.y);
        }
        if (data.column.index === 4) {
          pdf.setLineWidth(0);
          pdf.line(cell.x + cell.width, cell.y, cell.x + cell.width, cell.y + cell.height);
        }
      }

      if (data.section === 'foot') {
        const drawFootLine = (data.row.index === 0 || data.row.index === 1 || data.row.index === len - 1);
        const specialTypes = obj.Type === 'Invoice' || obj.Type === 'Goods Received' || obj.Type === 'New Stock Transfer' || obj.Type === 'Stock Transfer Request';

        if (drawFootLine || (specialTypes && data.row.index === 2)) {
          pdf.setLineWidth(0.2);
          pdf.line(x, y, x + width, y);
          pdf.line(x, y + height, x + width, y + height);
        }
      }

      if (data.column.index === 0) {
        pdf.setLineWidth(0.2);
        pdf.line(cell.x, cell.y, cell.x, cell.y + cell.height);
      }
    },
  });
}

  // new table
  if (obj.Type === 'Goods Received' || obj.Type === 'New Stock Transfer' || obj.Type === 'Stock Transfer Request' && obj.show) {

  
 (pdf as any).autoTable({
    head : obj.Thead3,
    body : obj.Tbody3,
    foot : obj.Tfoot3,
    startY:  (pdf as any).lastAutoTable.finalY + 2 ,
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
    margin : {top :(pdf as any).lastAutoTable.finalY + 2},
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
    if (data.column.index == 0 ) {
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

if (i === pageCount) {
  const yPos = obj.Type === 'Scrap Entry' ? 278.4 : obj.table2body.length >= 20 ? 276.4 : 275.5;

  pdf.text(`${obj.company_name} - Proudly coded`, 16, yPos);
  pdf.setTextColor(24, 129, 176);
  pdf.text("by GFTPL", 60, yPos);
  pdf.setTextColor(0, 0, 0);
  pdf.text("Thank You For The Business", 157, yPos);

} else {
  const yPos = obj.table2body.length >= 20 ? 280.5 : 275;
  pdf.text("Continued on next page", obj.table2body.length >= 20 ? 160 : 190, yPos);
}



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

if (obj.Type !== 'Scrap Entry') {
  
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
}


    // right content
    pdf.setTextColor(0,0,0);
    (obj.Type === 'Stock Transfer Request')  ? pdf.setFontSize(16) : pdf.setFontSize(19);
   pdf.text(`${obj.Type}`,145,14);

// fist row
    pdf.setDrawColor(0, 0, 0)
    pdf.setLineWidth(0.2);
    pdf.line(197,17,142,17)
    pdf.setFontSize(7)
    pdf.text(`${obj.Type} date : ${Fist_date}`,144,20);
    pdf.line(197,22,142,22)
    pdf.text(`${obj.Type} no: ${obj.order_no}`,144,25);
    pdf.line(197,27,142,27)
    pdf.text(`Page : ${i}`,144,30);
    pdf.line(197,32,142,32)

    let lineHigth : number = 32;
    if(Secouand_date){

        pdf.text(`Expiry Date : ${Secouand_date}`,145,35);
        
        pdf.line(197,37,142,37)
        lineHigth = 37
    }

// left
    pdf.line(142,lineHigth,142,17)
// rigth
    pdf.line(197,lineHigth,197,17)

    let SHIPPING_ADDRESS_X_value : number = 159

    if (obj.Type !== 'Scrap Entry') {


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
    }
    // add bottom border
    const pageWigth = pdf.internal.pageSize.getWidth();
    const margin =5;
    pdf.setDrawColor(224, 224, 224)
    pdf.setLineWidth(0.2);
    pdf.line(margin,42,pageWigth-margin,42)
    //add table first
    autoTable(pdf,{
    head : thead1,
    body : obj.Type == 'Scrap Entry'? obj.tbody1 : tbody1,
    // body :  tbody1,
    startY: 75,
    headStyles:{
    fontSize : obj.Type === 'Goods Received'? 8 : obj.Type === 'Expense Voucher' ? 7 : 9,
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
    pdf.setDrawColor(0,0,0);
    pdf.setLineWidth(0.2);
    if (data.row.index == 0) {
    pdf.line(cell.x,cell.y,cell.x+cell.width,cell.y)
    }
    // bottom
    if (data.row.index == table.body.length-1) {

    pdf.line(cell.x,cell.y+cell.height,cell.x+cell.width,cell.y+cell.height)
    }
    // lift
    if (data.column.index == 0) {
    
    pdf.line(cell.x,cell.y,cell.x,cell.y+cell.height)
    }
    // right
    if (data.column.index == table.columns.length -1) {
    
    pdf.line(cell.x+cell.width,cell.y,cell.x+cell.width,cell.y+cell.height)
    }}}})

    pdf.setDrawColor(0, 0, 0)
    pdf.setLineWidth(0.2);
if(obj.Type=== 'Goods Received'){

    pdf.line(14,108.3,196,108.3)

    
}else if(obj.Type == 'Scrap Entry'){
 pdf.line(14,53.5,196,53.5)
}
else  if(obj.Type !== 'Countra Voucher' && obj.Type !== 'Debit Note' && obj.Type !== 'Credit Note') {
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

public generateNewPdf(obj : any) {
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
        const table3head = obj.table3head;
        const table2head = [obj.table2head];
        const table3body = obj.table3body;
        const table1body = obj.tbody1;
        const foot2 = obj.foot2;
        const table4head = obj.table4head;
        const table4body = obj.table4body;
        const table4foot = obj.table4foot
        const foot2Len = foot2.length; 
        const table4bodyLen = table4body.length; 
        const table4footLen = table4foot.length; 
        let row: number = 2;
  
  ((row: number) => {
    const lenArr = obj.table2body.length;
    const loop = lenArr % row;
    const newval = row - loop;
    if (loop !== 0) {
      for (let i = 0; i < newval; i++) {
        obj.table2body.push([]);
      }
    }
  })(row);
  
    const startY = 90
    const marginTop = { top: startY };
    const imageUrl = "https://example.com/image.jpg"; // Ensure this is accessible
    (pdf as any).autoTable({
      head: table2head,
      body: obj.table2body,
      foot: foot2,
      startY,
      margin: marginTop,
      headStyles: {
        fontSize: 8,
        textColor: [0, 0, 0],
        fillColor: [255, 255, 255],
      },
      bodyStyles: {
        fillColor: [255, 255, 255],
        fontSize: 8,
        textColor: [0, 0, 0],
      },
      footStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
        fontSize: 8,
        fontStyle: "normal"
        
      },
      alternateRowStyles: { fillColor: [255, 255, 255] },
  
      didDrawCell: (data: any) => {
        const { cell, table } = data;
        const { x, y, width, height } = cell;
        pdf.setDrawColor(0, 0, 0);
        if (data.section === 'body' || data.section === 'head') {
          const isFirstRow = data.row.index === 0;
          const isLastRow = data.row.index === row - 1;
          const isFirstColumn = data.column.index === 0;
          const isLastColumn = data.column.index === table.columns.length - 1;
          if (!isFirstColumn && !isLastColumn && !isFirstRow && !isLastRow) {
            cell.styles.lineWidth = 0;
          } else {
            pdf.setLineWidth(0.2);
            if (isFirstRow || isLastRow) {
              pdf.line(cell.x, cell.y, cell.x + cell.width, cell.y); // Top border for the first row
              pdf.line(cell.x, cell.y + cell.height, cell.x + cell.width, cell.y + cell.height); // Bottom border for the last row
            }
        
            if (isFirstColumn) {
              pdf.line(cell.x, cell.y, cell.x, cell.y + cell.height); // Left border for the first column
            }
        
            if (isLastColumn) {
              pdf.line(cell.x + cell.width, cell.y, cell.x + cell.width, cell.y + cell.height); // Right border for the last column
            }
          }
        }
        
        if (data.section === 'foot') {
          pdf.setLineWidth(0.2);
          const isFirstRow = data.row.index === 0;
          const isLastRow = data.row.index === foot2Len - 1;
          const isFirstColumn = data.column.index === 0;
          const isLastColumn = data.column.index === data.table.columns.length - 1;
        
          if (cell.colSpan === 5 && data.row.index === 0 && data.column.index === 0) {
            // Remove all borders by default
            cell.styles.lineWidth = 0;
        
            // Keep borders only for the first and last columns and rows
            if (isFirstRow) {
              pdf.line(x, y, x + width, y); // Top border
            }
            if (isLastRow) {
              pdf.line(x, y + height, x + width, y + height); // Bottom border
            }
            if (isFirstColumn) {
              pdf.line(x, y, x, y + height); // Left border for first column
            }
            if (isLastColumn) {
              pdf.line(x + width, y, x + width, y + height); // Right border for last column
            }
            try {
              const img = new Image();
              img.src = compressedImage;
              console.log(img.src)
              // img.onload = () => {
              //   pdf.addImage(img, 'JPEG', x + 2, y + 2, 100, 100); // Adjust positioning as needed
              //   pdf.setLineWidth(0.2);
              // };
              pdf.addImage(compressedImage,"PNG", x + 86, y + 16, 34, 10)
            } catch (error) {
              console.error("Error loading image:", error);
            }
          } else if (cell.colSpan === 3 ) {
            pdf.line(x, y, x + width, y);
            pdf.setLineWidth(0.2);// Set lineWidth to 0 for no border effect
            pdf.line(x, y, x, y + height); // Left border if needed
            pdf.line(x, y + height, x + width, y + height); // Bottom border if needed

          } else if (cell.colSpan === 2) {
            pdf.line(x, y, x + width, y);
            pdf.setLineWidth(0.2); // Set lineWidth to 0 for no border effect
            pdf.line(x, y + height, x + width, y + height);
            pdf.line(x + width, y, x + width, y + height); // Right border
        
          }
          }
        
      },
    });
  const spacing = -1;
  (pdf as any).autoTable({
    head: table3head,
    body: table3body,
    startY: (pdf as any).lastAutoTable.finalY + spacing,
    headStyles: {
      fontSize: 8,
      textColor: [0, 0, 0],
      fillColor: [255, 255, 255],
    }, 
    bodyStyles: {
      fillColor: [255, 255, 255],
      fontSize: 8,
    },
    footStyles: {
      fillColor: [255, 255, 255],
      textColor: [0, 0, 0],
      fontSize: 8,
      halign: 'left',
      
    },
    alternateRowStyles: { fillColor: [255, 255, 255] },
  
    didDrawCell: (data: any) => {
      const { cell, table } = data;
      const { x, y, width, height } = cell;
      pdf.setDrawColor(0, 0, 0);
      if (data.section === 'body' || data.section === 'head') {
      pdf.setLineWidth(0.2);
      
      // Left border
      pdf.line(x, y, x, y + height);
      
      // Right border
      pdf.line(x + width, y, x + width, y + height);
      
      // Top border
      pdf.line(x, y, x + width, y);
      
      // Bottom border
      pdf.line(x, y + height, x + width, y + height);
      }
  if (data.column.index === 0 || data.column.index === 1 || data.column.index === table.columns.length) {
        pdf.setLineWidth(0.2);
        pdf.line(cell.x, cell.y, cell.x, cell.y + cell.height);
        pdf.line(cell.x + cell.width, cell.y, cell.x + cell.width, cell.y + cell.height);
  
      }
    },
  });
  
  (pdf as any).autoTable({
    head: table4head,
    body:table4body,
    foot: table4foot,
    startY: (pdf as any).lastAutoTable.finalY + spacing ,
    headStyles: {
      fontSize: 9,
      textColor: [0, 0, 0],
      fillColor: [255, 255, 255],
    },
    bodyStyles: {
      fillColor: [255, 255, 255],
      fontSize: 9,
      textColor: [0, 0, 0]
    },
    footStyles: {
      fillColor: [255, 255, 255],
      textColor: [0, 0, 0],
      fontSize: 9,
    },
    alternateRowStyles: { fillColor: [255, 255, 255] },
  
    didDrawCell: (data: any) => {
      const { cell, table } = data;
      const { x, y, width, height } = cell;
      pdf.setDrawColor(0, 0, 0);
      if (data.section === 'head' || data.section === 'body') {
        // For the first and last rows in the body and head sections
        if (data.row.index === 0 || data.row.index === table4bodyLen) {
          pdf.setLineWidth(0.2);
          pdf.line(x, y, x + width, y); // Top border
          pdf.line(x, y + height, x + width, y + height); // Bottom border
        }
      
        // Set the right border for the last column in the body
        if (data.column.index === table.columns.length - 1) {
          pdf.setLineWidth(0.2);
          pdf.line(cell.x + cell.width, cell.y, cell.x + cell.width, cell.y + cell.height); // Right border for last column
        } else {
          pdf.setLineWidth(0.2); 
         pdf.line(cell.x + cell.width, cell.y, cell.x + cell.width, cell.y + cell.height); // Right border
       
        }
      
        // Draw left border for the first column and right border for the last column
        if (data.column.index === 0 || data.column.index === table.columns.length - 1) {
          pdf.setLineWidth(0.2);
          pdf.line(cell.x, cell.y, cell.x, cell.y + cell.height); // Left border
          pdf.line(cell.x + cell.width, cell.y, cell.x + cell.width, cell.y + cell.height); // Right border
        }
      }
      
      if (data.section === 'foot') {
        const isFirstRow = data.row.index === 0;
        const isLastRow = data.row.index === table4footLen - 1;
        const isFirstColumn = data.column.index === 0;
        const isLastColumn = data.column.index === table.columns.length - 1;
      
        // Remove middle cell borders in the footer except for first and last row/column
        if (!isFirstColumn && !isLastColumn && !isFirstRow && !isLastRow) {
          cell.styles.lineWidth = 0;
        } else {
          pdf.setLineWidth(0.2);
      
          if (isFirstRow) {
            pdf.line(cell.x, cell.y, cell.x + cell.width, cell.y); // Top border for the first row
          }
          if (isLastRow) {
            pdf.line(cell.x, cell.y + cell.height, cell.x + cell.width, cell.y + cell.height); // Bottom border for the last row
          }
      
          if (isFirstColumn) {
            pdf.line(cell.x, cell.y, cell.x, cell.y + cell.height); // Left border for the first column
          }
      
          // Set the right border for the last column in the footer
          if (isLastColumn) {
            pdf.line(cell.x + cell.width, cell.y, cell.x + cell.width, cell.y + cell.height); // Right border for last column
          }

          if (data.column.index === table.columns.length - 1) {
            pdf.setLineWidth(0.2);
            pdf.line(cell.x + cell.width, cell.y, cell.x + cell.width, cell.y + cell.height); // Right border for last column
          } else {
            pdf.setLineWidth(0.2); 
           pdf.line(cell.x + cell.width, cell.y, cell.x + cell.width, cell.y + cell.height); // Right border
         
          }
        }
      }
    },
  });
  
   const pageCount = pdf.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
      pdf.setPage(i)
      pdf.setFontSize(9)
      pdf.setFontSize(8);
  
  if (i === pageCount) {
    const yPos = obj.Type === 'Scrap Entry' ? 220.4 : obj.table2body.length >= 2 ? 218.4 : 217.5;
    pdf.setTextColor(24, 129, 176);
    pdf.setTextColor(0, 0, 0);
    pdf.setFont(undefined, 'bold');
    pdf.text("Thank You For The Business", 85, yPos);
  } else {
    const yPos = obj.table2body.length >= 2 ? 280.5 : 275;
    pdf.text("Continued on next page", obj.table2body.length >= 2 ? 160 : 190, yPos);
  }

  let leftContentSpaces = 14;
      // lift content
      pdf.setFontSize(16)
      pdf.setTextColor(0,0,0)
      pdf.setFont(undefined, 'bold');
      pdf.text(`${(obj.company_name as string).toUpperCase()}`,leftContentSpaces,15)
  
      pdf.setTextColor(256,112,8)
      pdf.setTextColor(0,0,0)
      pdf.setFontSize(9)
      pdf.setFont(undefined, 'normal');
      pdf.text(`${obj.top_left_address_line1}`,leftContentSpaces,19);
      pdf.text(`${obj.top_left_address_line2}`,leftContentSpaces,23)
      pdf.setFont(undefined, 'bold');
      pdf.text(`GSTIN: ${obj.company_gst}`,leftContentSpaces,27);
      pdf.text(`MOBILE: ${obj.top_left_phone}, EMAIL Id: ${obj.top_left_email}`,leftContentSpaces,31);
      
      let rightContentSpaces : number = 156;
      pdf.setTextColor(135, 206, 235);
      pdf.setFont(undefined, 'bold');
      pdf.setFontSize(16);
      pdf.text(`TAX INVOICE`,190,14, { align: "right" });
      pdf.setFontSize(9)
      pdf.setTextColor(0,0,0)
      pdf.text(`ORIGINAL FOR RECIPIENT `,190,18, { align: "right" });
      pdf.addImage(compressedImage,"PNG",rightContentSpaces, 20, 34, 10)
     
      const pageWidth = pdf.internal.pageSize.getWidth();
      const marginNextLine = 14;
      pdf.setDrawColor(0, 0, 0)
      pdf.setLineWidth(0.2);
      pdf.line(marginNextLine,40,pageWidth-marginNextLine,40)

      // const pageWidth = pdf.internal.pageSize.getWidth();
      // const marginNextLine = 14;
      // pdf.setDrawColor(0, 0, 0)
      // pdf.setLineWidth(0.2);
      // pdf.line(18,41,pageWidth-18,41)
     
      autoTable(pdf,{
      body: table1body,
      startY: 40,
      headStyles: {
        fontSize: 8,
        textColor: [0, 0, 0],
        fillColor: [255, 202, 153],
      },
      bodyStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
        fontSize: 8,
        fontStyle: "normal"
      },
      footStyles: {
        fillColor: [255, 255, 255],
        textColor: [0, 0, 0],
        fontSize: 8,
        
      },
      alternateRowStyles: { fillColor: [255, 255, 255] },
      didDrawCell: (data) => {
        const { cell, table } = data;
        const { x, y, width, height } = cell;
        pdf.setDrawColor(0, 0, 0);
      pdf.line(cell.x + cell.width, cell.y, cell.x + cell.width, cell.y + cell.height);
      if (data.section === 'body') {
        // For cells with colSpan of 8 in specific rows (1, 2, or 3)
        if (cell.colSpan === 8) {
          // Remove all cell borders initially
          cell.styles.lineWidth = 0;
          if (data.column.index === 0 || data.column.index === table.columns.length - 1) {
            pdf.line(cell.x, cell.y, cell.x, cell.y + cell.height); // Left border
            pdf.line(cell.x + cell.width, cell.y, cell.x + cell.width, cell.y + cell.height); // Right border
          }
        }

  // For other conditions where colSpan is not 8, or in specific rows
  if (data.cell.colSpan === 2 || [0, 1, 2, 3].includes(data.row.index)) {
    if (cell.colSpan !== 8) {
      // Set text to bold
      pdf.setFont(undefined, 'bold');
      // Draw top and bottom borders
      pdf.setLineWidth(0.0);
      pdf.line(x, y, x + width, y); // Top border
    }
  }
}
},
  })
   }




      pdf.save(`${obj.Type}.pdf`,{returnPromise : true}).then(()=>{
          setTimeout(() => {
              this.loaderPdf.next(false);
          }, 1000);
      })
    })
  }


 

public set_address(supplierAddress : any) {

  let secound_obj : any = {};
  let fast_obj : any = {};
     supplierAddress.address.map((res: addresss) => {
  if (res?.address_type == 'Billing' && res?.is_default) {
    fast_obj = { res}

   } else if (res.address_type == 'Shipping' && res?.is_default) {
    secound_obj = { res} 
    }
  });

  return {fast_obj,secound_obj};
}

public getBadgeClass(status: string): string {
  switch (status) {
    case 'Pending':
      return 'pending-status-badge';
    case 'Paid':
      return 'approve-status-badge';
    default:
      return '';
  }
}
}