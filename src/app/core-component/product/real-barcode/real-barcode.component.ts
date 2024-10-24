import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-real-barcode',
  templateUrl: './real-barcode.component.html',
  styleUrls: ['./real-barcode.component.scss']
})
export class RealBarcodeComponent implements OnInit,AfterViewInit {

  constructor() { }
  elementType = 'svg';
  value = 'someValue12340987';
  format = 'CODE128';
  lineColor = '#000000';
  width = 0.86;
  height = 26;
  displayValue = true;
  fontOptions = '';
  font = 'monospace';
  textAlign = 'center';
  textPosition = 'bottom';
  textMargin = 1;
  fontSize = 7;
  background = '#ffffff';
  margin = 0;
  marginTop = 0;
  marginBottom = 0;
  marginLeft = 2;
  marginRight = 10;
  showBarcode:boolean=false;
  @Input() product: any;
  newProduct:any;
  ngOnInit(): void {
    console.log(this.product,'product');
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.newProduct=this.product;
    }, 500);
  }

}
