import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { SalesService } from 'src/app/Services/salesService/sales.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.scss']
})
export class BarcodeComponent implements OnInit {

  productControl = new FormControl();
  constructor(private coreService: CoreService, private saleService: SalesService, private purchaseService: PurchaseServiceService,
    private Arout: ActivatedRoute, private router: Router, private toastr: ToastrService, public location:Location) { }

  elementType = 'svg';
  value = 'someValue12340987';
  format = 'CODE128';
  lineColor = '#000000';
  width = 1;
  height = 20;
  displayValue = true;
  fontOptions = '';
  font = 'monospace';
  textAlign = 'center';
  textPosition = 'bottom';
  textMargin = 2;
  fontSize = 10;
  background = '#ffffff';
  margin = 0;
  marginTop = 0;
  marginBottom = 0;
  marginLeft = 10;
  marginRight = 10;

  purchaseControl = new FormControl();
  filteredPurchase: Observable<any[]>;

  barcodeForm: FormGroup;

  ngOnInit(): void {
    // this.getProduct();

    this.getPurchase();
    this.filteredPurchase = this.purchaseControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );

    this.barcodeForm = new FormGroup({

    });


  }

  goBack() {
    this.location.back();
  }

  private _filter(value: string | number, include: boolean): any {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredPurchase = include
      ? this.Purchase.filter(supplier =>
        supplier?.party?.name.toLowerCase().includes(filterValue) || supplier?.party?.company_name.toLowerCase().includes(filterValue)
      )
      : this.Purchase.filter(supplier =>
        !(supplier?.party?.name.toLowerCase().includes(filterValue) || supplier?.party?.company_name.toLowerCase().includes(filterValue))
      );
    if (!include && filteredPurchase.length === 0) {
      filteredPurchase.push({ company_name: "No data found" });
    }
    if (filterValue.toString().length >= 3) {
      return filteredPurchase;
    }
  }

  Purchase: any[] = [];
  purchaseBillList: any[] = [];
  filteredPurchaseBill: any[] = [];
  searchPurchaseBill: string = '';
  getPurchase() {
    this.purchaseService.getPurchaseBill().subscribe((res: any) => {
      this.Purchase = res;
      this.purchaseBillList = res;
      this.filteredPurchaseBill = [...this.purchaseBillList];
    })
  }

  filterPurchaseBill() {
    if (this.searchPurchaseBill.trim() === '') {
      this.filteredPurchaseBill = [...this.purchaseBillList];
    } else {
      this.filteredPurchaseBill = this.purchaseBillList.filter(feature =>
        (feature.refrence_bill_no == null ? '' : feature.refrence_bill_no).toLowerCase().includes(this.searchPurchaseBill.toLowerCase())
      );
    }
  }

  get values(): string[] {
    return this.value.split('\n');
  }
  productList: any;
  variantList: any[] = [];
  loader = false;
  filteredData: any[];
  getProduct() {
    this.loader = true;
    this.coreService.getProducts().subscribe((res: any) => {
      this.productList = res;
      this.productList.map((res: any) => {
        res.variant_product.map((res: any) => {
          this.loader = false;
          this.variantList.push(res);
          this.filteredData = this.variantList.slice();
          this.filterData();
        });
      });
      console.log(this.variantList, 'varianList');
    });
  }

  key = 'id';
  p: number = 1;
  pageSize: number = 10;
  itemsPerPage: number = 10;
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  titlee: any;
  search() {
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.variantList = this.variantList.filter((res: any) => {
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
  selectedProduct: any;
  filterData() {
    let filteredData = this.variantList.slice();
    if (this.selectedProduct) {
      const searchTerm = this.selectedProduct.toLowerCase();
      filteredData = filteredData.filter((item: any) => {
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

  isSearch = false;
  searchLength: any;
  variantData: any[] = [];
  getVariant(search: any,) {
    this.searchLength = search
    this.isSearch = true;
    if (search.toString().length >= 2) {
      if (this.search.toString().length >= 2) {
        this.coreService.searchProduct(search).subscribe((res: any) => {
          // this.saleService.filterVariant('', '', search).subscribe((res: any) => {
          console.log(res);
          this.isSearch = false;
          this.variantData = res;
        });
      }
    }
  }
  selectData: any[] = []
  oncheckVariant(data: any, id: any) {
    console.warn(data);
    this.productControl.reset();
    this.variantData = [];
    const isDataExists = this.selectData.some((res: any) => res.id === data.id);
    console.log(isDataExists);
    // If data doesn't exist in selectData, push it
    if (!isDataExists) {
      this.selectData.push(data);
    } else {
      this.toastr.error(`${data?.product_title} - Barcode Already Generated`);
    }
    console.log(this.selectData, 'selected data');
    // this.productControl.reset();
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.variantList?.length;
    }
  }

  isGRN = false;
  isProduct = false;
  typeBarcode(val: any) {
    if (val == 'GRN') {
      this.isGRN = true;
      this.isProduct = false;
    } else {
      this.isGRN = false;
      this.isProduct = true;
    }
  }

  cartData: any[] = [];
  selectedPurchaseBill: any;
  onCheckPurchase(data: any) {
    this.selectedPurchaseBill = data?.refrence_bill_no;
    console.log(data);
    this.cartData = [];
    data?.cart.map((res: any) => {
      this.cartData.push(res);
    });
    console.log(this.cartData, 'selected data');
  }
  qtyChangePurchase(index: number, newQty: any) {
    const qty = parseInt(newQty, 10);
    if (!isNaN(qty)) {
      this.cartData[index].qty = qty;
    } else {
      console.error('Invalid quantity input:', newQty);
    }
    console.log(this.cartData, 'selected data');
  }
  batchPurchase(i: any, val: any) {
    console.warn(val, i);
    console.log(this.cartData[i]);
    if (this.cartData[i]) {
      const batch = this.cartData[i]?.barcode?.batch as any[]; // Type assertion
      batch?.map((res: any) => {
        if (res?.id == val) {
          this.cartData[i].mrp = res?.mrp;
          this.cartData[i].selling_price_offline = res?.selling_price_offline;
        }
      });
    }
  }
  getQtyArray(quantity: number): number[] {
    return Array.from({ length: quantity }, (_, index) => index + 1);
  }
  productData: any[] = [];
  onCheckProduct(data: any) {
    console.log(data);
    this.variantData = [];
    const productWithQty = { ...data, qty: 1, mrp: data?.batch[0]?.mrp, selling_price_offline: data?.batch[0]?.selling_price_offline, };
    if (this.productData.some(item => item.id === data.id)) {
      this.toastr.warning('Product is already selected');
    } else {
      this.productData.push(productWithQty);
    }
    console.log(this.productData, 'selected data');
    this.productControl.reset();
  }
  qtyChangeProduct(index: number, newQty: any) {
    const qty = parseInt(newQty, 10);
    if (!isNaN(qty)) {
      this.productData[index].qty = qty;
    } else {
      console.error('Invalid quantity input:', newQty);
    }
    console.log(this.productData, 'selected data');
  }
  batchProduct(i: any, val: any) {
    console.warn(val, i);
    console.log(this.productData[i]);
    if (this.productData[i]) {
      const batch = this.productData[i]?.batch as any[]; // Type assertion
      batch?.map((res: any) => {
        if (res?.id == val) {
          this.productData[i].mrp = res?.mrp;
          this.productData[i].selling_price_offline = res?.selling_price_offline;
        }
      });
    }
  }
  removePurchase(event: any) {
    const selectedIndex = this.cartData.findIndex(item => item.id === event);
    if (selectedIndex !== -1) {
      this.cartData.splice(selectedIndex, 1);
    }
    console.log(this.cartData, 'selected data');
  }
  removeVariant(event: any) {
    const selectedIndex = this.productData.findIndex(item => item.id === event);
    if (selectedIndex !== -1) {
      this.productData.splice(selectedIndex, 1);
    }
    console.log(this.productData, 'selected data');
  }

  isPrint = false;
  isPrintProduct = false;
  print() {
    this.isPrint = true;
    this.isPrintProduct = false;
    console.warn(this.cartData, 'cartdata');
    console.warn(this.productData, 'productData');
  }
  printProduct() {
    this.isPrint = false;
    this.isPrintProduct = true;
    console.warn(this.cartData, 'cartdata');
    console.warn(this.productData, 'productData');
  }

  // printPG(): void {
  //   const printElement = document.getElementById('print');
  //   console.warn(printElement, 'printElement');
  //   if (printElement) {
  //     console.warn(printElement, 'printElement');
  //     const printContents = printElement.outerHTML;
  //     const originalContents = document.body.innerHTML;
  //     document.body.innerHTML = printContents;
  //     window.addEventListener('afterprint', () => {
  //       console.log('afterprint');
  //       window.location.reload();
  //     });
  //     window.print();
  //     document.body.innerHTML = originalContents;
  //   } else {
  //     console.error('Element with id "print" not found');
  //   }
  // }
  printPG(): void {
    const printElements = document.querySelectorAll('.row'); // Select all rows containing cards
    printElements.forEach((row) => {
        const printContents = row.outerHTML;
        const originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.addEventListener('afterprint', () => {
            console.log('afterprint');
            window.location.reload();
        });
        window.print();
        document.body.innerHTML = originalContents;
    });
}

  selectedPageSize: string='a4'; 
  isSelectPg=true;
  selectPG(size: string): void {
    this.selectedPageSize = size;
    console.log(this.selectedPageSize);
    this.isSelectPg=true;
  }
  //   barcodeWidth: number = 36; 
  //   barcodeHeight: number = 12;
  //   updateBarcodeSize(selectedSize: string) {
  //     if (selectedSize === '36mm (1.4 inch)') {
  //         this.barcodeWidth = 36;
  //         this.barcodeHeight = 12; 
  //     } else if (selectedSize === '12mm (1 inch)') {
  //         this.barcodeWidth = 12;
  //         this.barcodeHeight = 5; 
  //     }
  // }
}
