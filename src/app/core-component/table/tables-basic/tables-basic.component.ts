import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tables-basic',
  templateUrl: './tables-basic.component.html',
  styleUrls: ['./tables-basic.component.scss']
})
export class TablesBasicComponent implements OnInit {
  obj = {
    sku : 'someValue12340987'
  }

  array :any[] = new Array(6)
  

  constructor(private fb: FormBuilder) {
   
  }
  ngOnInit(): void {
  
  }

  printPage() {
    const printContent = document.getElementById('printContent');
    const WindowPrt = window.open('', '', 'width=800,height=600');
    if (printContent && WindowPrt) {
      WindowPrt.document.write(`
        <html>
          <head>
            <title>Print Page</title>
            <style>
              @media print {
                      body{
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                      }


 .main-container{

  display: grid;
  grid-template-columns: repeat(4, 48mm); /* Four columns each 48mm wide */
   column-gap: 1.5mm;
  margin-top: 5mm;
  margin-left: 5mm;
}
/* Container */
.label-container {

  height: 26mm;
  // border: 1px solid #ccc;
  margin: 0px;
  padding: 0px;
  
  border-radius: 5px;
  background-color: #fff;
  font-family: Arial, sans-serif;
  box-sizing: border-box;
  overflow: hidden;
  
}


/* Header */
.label-header {
  // background-color: #f59d33;
  color: #000;
  text-align: center;
  font-weight: bold;
  padding-left: 1mm;
    padding-right: 1mm;
    padding-top:1mm ;
  font-size: 10px;
  border-radius: 4px 4px 0 0;
}

/* Body */
.label-body {
 padding-left: 1mm;
  padding-right: 1mm;
  padding-bottom: 1mm;
  font-size: 8px;
  line-height: 1.2;
}

/* Row styling */
.label-row {
  display: flex;
  justify-content: space-between;
  margin: 0.1mm 0;
}

/* Barcode section */
.label-barcode {
  text-align: center;
  margin-top: 1mm;
}

.label-barcode img {
  width: 70%; /* Adjust width to fit inside the card */
  height: auto;
}

.label-barcode p {
  margin-top: 0.5mm;
  font-size: 8px; /* Smaller font for the barcode text */
  letter-spacing: 1px;
}

              }
            </style>
          </head>
          <body>
            ${printContent.innerHTML}
          </body>
        </html>`);
      WindowPrt.document.close();
      WindowPrt.focus();
      WindowPrt.print();
      WindowPrt.close();
    }
  }

  


}
