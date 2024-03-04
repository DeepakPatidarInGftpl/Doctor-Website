import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.scss']
})
export class BarcodeComponent implements OnInit {

  public tableData = [
    {
      Name: 'Macbook pro',
      SKU: 'PT001',
      Qty: '100.00',
    },
    {
      Name: 'Apple Earpods',
      SKU: 'PT002',
      Qty: '1000.00',
    },
    {
      Name: 'Macbook Pro',
      SKU: 'PT003',
      Qty: '5000.00',
    }
  ]
  constructor(private coreService: CoreService) { }

  elementType = 'svg';
  value = 'someValue12340987';
  format = 'CODE128';
  lineColor = '#000000';
  width = 1;
  height = 50;
  displayValue = true;
  fontOptions = '';
  font = 'monospace';
  textAlign = 'center';
  textPosition = 'bottom';
  textMargin = 2;
  fontSize = 20;
  background = '#ffffff';
  margin = 10;
  marginTop = 10;
  marginBottom = 5;
  marginLeft = 10;
  marginRight = 10;


  ngOnInit(): void {
    this.getProduct();
  }
  get values(): string[] {
    return this.value.split('\n');
  }
  delete(index: any) {
    this.tableData.splice(index, 1);
  }
  
  productList:any;
  variantList:any[]=[];
  loader=false;
  filteredData: any[]; 
  getProduct() {
    this.loader=true;
    this.coreService.getProducts().subscribe((res: any) => {
      this.productList=res;
      this.productList.map((res:any)=>{
        res.variant_product.map((res:any)=>{
          this.loader=false;
          this.variantList.push(res);
          this.filteredData = this.tableData.slice(); 
          this.filterData();
        });
      });
      console.log(this.variantList,'varianList');
    });
  }

  key = 'id';
  p: number = 1;
  pageSize: number = 10;
  itemsPerPage: number = 10;
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }

  titlee: any;
  search() {
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.variantList = this.variantList.filter((res:any) => {
        const nameLower = res.product_title.toLocaleLowerCase();
        const variantLowerName = res.variant_name.toLocaleLowerCase();
        if (nameLower.match(searchTerm)) {
          return true;
        } else if (variantLowerName.match(searchTerm)) {
          return true;
        }
        return false;
      });
    }
  }
  selectedProduct:any;
  filterData() {
    let filteredData = this.variantList.slice();
    if (this.selectedProduct) {
      const searchTerm = this.selectedProduct.toLowerCase();
      filteredData = filteredData.filter((item:any) => {
        const product_title = item?.product_title?.toString()?.toLowerCase(); 
        return product_title?.includes(searchTerm);
      });
    }
    this.filteredData = filteredData;
  }
  clearFilters() {
    this.selectedProduct = null;
    this.filterData();
  }
}
