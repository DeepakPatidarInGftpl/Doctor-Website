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
                      
                        display: grid !important;
                        grid-template-columns: repeat(4, 1fr) !important;
                      // row-gap: 3px;
                        column-gap: 2px;

                        width: 100%;
                      }
                    /* Container */
                    .label-container {
                      width: 48mm;
                      height: 28mm;
                      border: 1px solid #ddd;
                      border-radius: 5px;
                      background-color: #fff;
                      font-family: Arial, sans-serif;
                      box-sizing: border-box;
                      overflow: hidden;
                      
                    }

                    /* Header */
                    .label-header {
                      background-color: #f59d33;
                      color: #000;
                      text-align: center;
                      font-weight: bold;
                      padding: 3px;
                      font-size: 10px;
                      border-radius: 4px 4px 0 0;
                    }

                    /* Body */
                    .label-body {
                      padding: 0 5px;
                      font-size: 8px;
                      line-height: 1.2;
                    }

                    /* Row styling */
                    .label-row {
                      display: flex;
                      justify-content: space-between;
                      margin: 2px 0;
                    }

                    /* Barcode section */
                    // .label-barcode {
                    //   text-align: center;
                    //   margin-top: 5px;
                    // }

                    // .label-barcode img {
                    //   width: 90%;
                    //   height: auto;
                    // }

                    // .label-barcode p {
                    //   margin-top: 2px;
                    //   font-size: 7px;
                    //   letter-spacing: 1px;
                    // }

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
