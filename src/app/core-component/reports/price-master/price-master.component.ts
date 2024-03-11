import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';
import { Observable, map, startWith } from 'rxjs';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { ReportService } from 'src/app/Services/report/report.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { SalesService } from 'src/app/Services/salesService/sales.service';
@Component({
  selector: 'app-price-master',
  templateUrl: './price-master.component.html',
  styleUrls: ['./price-master.component.scss']
})
export class PriceMasterComponent implements OnInit {
  loader = true;
  public tableData: any
  id: any;
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public countryList: any = [];

  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;

  filteredBrand: Observable<any[]> | undefined;
  brandControl: FormControl = new FormControl('');

  filteredCategory: Observable<any[]> | undefined;
  categoryControl: FormControl = new FormControl('');


  filteredItemCode: Observable<any[]> | undefined;
  itemCodeControl: FormControl = new FormControl('');
  filteredSuppliers: Observable<any[]> | undefined;
  supplierControl: FormControl = new FormControl('');
  
  filteredProduct: Observable<any[]> | undefined;
  productControl: FormControl = new FormControl('');
  userName: any;
  constructor(private router: Router, private fb: FormBuilder, private toastr: ToastrService, private transactionService: TransactionService, private purchaseService: PurchaseServiceService, private cs: CompanyService, private datepipe: DatePipe,
    private coreService:CoreService, private reportService: ReportService,private saleService:SalesService) {
  }
  // stock alert form
  stockAlertform!: FormGroup;
  startDate: any;
  endDate: any;
  category: any;
  brand: any;
  product: any;
  variant:any
  stockAlertList: any;


  userDetails: any;
  ngOnInit(): void {
    this.cs.userDetails$.subscribe((userDetails:any) => {
      this.userDetails = userDetails;
      console.log(userDetails);
      this.userName=userDetails?.username
    });

    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 14);

    const formattedStartDate = this.formatDate(startDate);
    const formattedToday = this.formatDate(today);

    // stock alert form
    this.stockAlertform = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
      category: new FormControl(),
      brand: new FormControl(''),
      product: new FormControl(''),
      variant:new FormControl('')
    });
    this.startDate = this.stockAlertform.value?.start;
    this.endDate = this.stockAlertform.value?.end;
    this.category = this.stockAlertform.value?.category;
    this.brand = this.stockAlertform.value?.brand;
    this.product = this.stockAlertform.value?.product;
    this.variant=this.stockAlertform.value?.variant;
    this.getStockAlert();
    this.getBrand();
    this.getCategory();
    this.getProduct();
   
    // brand
    this.filteredBrand = this.brandControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => {
        const title = typeof value === 'string' ? value : value?.title;
        return title ? this._filter(title as string) : this.brandList.slice();
      }),
    );
    //category name'
    this.filteredCategory = this.categoryControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => {
        const title = typeof value === 'string' ? value : value?.title;
        return title ? this._filter2(title as string) : this.categoryList.slice();
      }),
    );
   
    this.filteredProduct = this.productControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => {
        const title = typeof value === 'string' ? value : value?.title;
        return title ? this._filter5(title as string) : this.productList.slice();
      }),
    );
    this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => {
        const title = typeof value === 'string' ? value : value?.title;
        return title ? this._filter6(title as string) : this.productList.slice();
      }),
    );
  }
  getproductHistory() {
    throw new Error('Method not implemented.');
  }
  private formatDate(date: Date): string {
    return this.datepipe.transform(date, 'yyyy-MM-dd') || '';
  }
  // product brand

  private _filter(title: string): any[] {
    const filterValue = title ? title.toLowerCase() : '';
    console.log(filterValue);
    return this.brandList.filter((option: any) =>
      (option?.title && option.title.toLowerCase().includes(filterValue))
    );
  }
  displayFn(user: any): string {
    return user && user?.title ? user?.title : '';
  }
  //product category
  private _filter2(title: string): any[] {
    const filterValue = title ? title.toLowerCase() : '';
    return this.categoryList.filter((option: any) =>
      (option?.title && option.title.toLowerCase().includes(filterValue))
    );
  }
  displayFn2(user: any): string {
    return user && user?.title ? user?.title : '';
  }
  //product sub category
 
  displayFn3(user: any): string {
    return user && user?.title ? user?.title : '';
  }
   //product item code
   private _filter4(item_code: string): any[] {
    const filterValue = item_code ? item_code.toLowerCase() : '';
    console.log(filterValue);
    return this.productList.filter((option: any) =>
      (option?.item_code && option.item_code.toLowerCase().includes(filterValue))
    );
  }
  displayFn4(user: any): string {
    return user && user?.item_code ? user?.item_code : '';
  }
  private _filter6(title: string): any[] {
    const filterValue = title ? title.toLowerCase() : '';
    console.log(filterValue);
    return this.productList.filter((option: any) => 
    (option?.title && option.title.toLowerCase().includes(filterValue)) || 
    (option?.name && option.name.toLowerCase().includes(filterValue))
  );
  }
  displayFn6(user: any): string {
    return user && user?.title || user?.name ? user?.title || user?.name  : '';
  }
  //product name
  private _filter5(title: string): any[] {
    const filterValue = title ? title.toLowerCase() : '';
    console.log(filterValue);
    return this.productList.filter((option: any) => 
    (option?.title && option.title.toLowerCase().includes(filterValue)) || 
    (option?.name && option.name.toLowerCase().includes(filterValue))
  );
  }
  displayFn5(user: any): string {
    return user && user?.title || user?.name ? user?.title || user?.name : '';
  }

  productList: any[] = [];
  getProduct() {
    this.coreService.getProducts().subscribe((res: any) => {
      console.log(res, 'user');
      this.productList = res;
      // this.variants=res;
    })
  }

  search() {
    if (this.titlee === "") {
      this.getStockAlert();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.stockAlertList = this.stockAlertList.filter((res: any) => {
        const nameLower = res?.user?.party_name.toLocaleLowerCase();
        const usernameLower = res?.payment_voucher_no.toLocaleLowerCase() || "";
        // return nameLower.includes(searchTerm);
        if (nameLower.includes(searchTerm) || usernameLower.includes(searchTerm)) {
          return true;
        }
        return false;
      });
    }
  }

  key = 'id'
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse
  }

  selectAll(initChecked: boolean) {
    if (!initChecked) {
      this.countryList.forEach((f: any) => {
        f.isSelected = true
      })
    } else {
      this.countryList.forEach((f: any) => {
        f.isSelected = false
      })
    }
  }
  //select table row
  allSelected: boolean = false;
  selectedRows: boolean[] = [];
  selectAlll() {
    this.selectedRows.fill(this.allSelected);
  }
  calculateProductRange(currentPage: number, productsPerPage: number, totalProducts: number): string {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = Math.min(startIndex + productsPerPage - 1, totalProducts - 1);
    return `Showing ${startIndex + 1}–${endIndex + 1} of ${totalProducts} results`;
  }
  
  stockAlert: any
  getStockAlert() {
    this.reportService.getPriceMaster( this.categoryArray,  this.brandArray, this.productsArray,this.variantsArray).subscribe((res) => {
      console.log(res);
      this.stockAlert = res;
      this.stockAlertList = res;
    });
  }

  // api call
  dataId: any;
  selectBrand: any[] = [];
  brandArray:any;
  oncheckBrand(data: any) {
    const index = this.selectBrand.indexOf(data);
    if (index !== -1) {
      this.selectBrand.splice(index, 1);
    } else {
      this.selectBrand.push(data);
    }
    console.log(this.selectBrand, 'selected data');
    if (this.selectBrand.length > 0) {
      this.brandArray = JSON.stringify(this.selectBrand);
      console.log(this.brandArray,'brandArray');
      this.brandControl.reset();
      this.getStockAlert()
    } 
  }
  selectCategory: any[] = [];
  categoryArray:any;
  oncheckCategory(data: any) {
    const index = this.selectCategory.indexOf(data);
    if (index !== -1) {
      this.selectCategory.splice(index, 1);
    } else {
      this.selectCategory.push(data);
    }
    console.log(this.selectCategory, 'selected data');
    if (this.selectCategory.length > 0) {
      this.categoryArray = JSON.stringify(this.selectCategory);
      console.log(this.categoryArray,'categoryArray');
      this.categoryControl.reset();
      this.getStockAlert()
    } 
  }

  selectProduct: any[] = [];
  productsArray:any;
  oncheckproduct(data:any){
      // this.selectProduct.push(product)
      const index = this.selectProduct.indexOf(data);
      if (index !== -1) {
        this.selectProduct.splice(index, 1);
      } else {
        this.selectProduct.push(data);
      }
      console.log(this.selectProduct, 'selected data');
      if (this.selectProduct.length > 0) {
        this.productsArray = JSON.stringify(this.selectProduct);
        console.log(this.productsArray,'productsArray');
        this.productControl.reset();
        this.getStockAlert()
      } 
  }
  selectVariant: any[] = [];
  variantsArray:any;
  oncheckVariant(data:any){
    const index = this.selectVariant.indexOf(data);
    if (index !== -1) {
      this.selectVariant.splice(index, 1);
    } else {
      this.selectVariant.push(data);
    }
    console.log(this.selectVariant, 'selected data');
    if (this.selectVariant.length > 0) {
      this.variantsArray = JSON.stringify(this.selectVariant);
      console.log(this.variantsArray,'variantsArray');
      this.supplierControl.reset();
      this.getStockAlert();
    } 
  }
  
  getSelectedStockAlertDates() {
    console.log(this.stockAlertform.value);
    const start = this.datepipe.transform(this.stockAlertform.value.start, 'yyyy-MM-dd');
    const end = this.datepipe.transform(this.stockAlertform.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.startDate = start;
    this.endDate = end;
    this?.getStockAlert();
  }

  brandList: any[] = [];
  getBrand() {
    this.coreService.getBrand().subscribe((res: any) => {
      console.log(res);
      this.brandList = res;
    })
  }
  categoryList: any[] = [];
  getCategory() {
    this.coreService.getCategory().subscribe((res: any) => {
      console.log(res);
      this.categoryList = res
    })
  }

  isSearch=false;
  searchLength:any;
  variantList:any[]=[]
  getVariant(search: any) {
    this.searchLength=search
    this.isSearch=true;
    if(search.toString().length>=3){
    if(this.search.toString().length>=3){
      this.saleService.filterVariant('', '', search).subscribe((res: any) => {
        console.log(res);
        this.isSearch=false;
        this.variantList = res;
        console.log(this.variantList);
   

      });
    }
  }
  }
 // convert to pdf

 generatePDFAgain() {
  const doc = new jsPDF('landscape');
  const subtitle = 'PV';
  const title = 'Price Master Report';
  const heading2 = `Date Range From: ${this.startDate} - ${this.endDate}`
  const heading = `User: ${this.userName}`;

  doc.setFontSize(12);
  doc.setTextColor(33, 43, 54);
  doc.text(subtitle, 86, 5);
  doc.text(title, 82, 10);
  doc.text(heading, 10, 18);
  doc.text(heading2, 10, 22)

  doc.text('', 10, 25); //,argin x, y

  // Pass tableData to autoTable
  autoTable(doc, {
    head: [
      ['#', 'ProductTitle','VariantName', 'CreatedDate','Mrp','CostPrice','SellingPriceOnline','SellingPriceOffline','SellingPriceEmployee','SellingPriceDealer']
    ],
    body: this.stockAlertList.map((row:any, index:number ) => [
      index + 1,
      row.product_title,
      row.variant_name,
      this.formatDate(row.created_date),
      row.batch.mrp,
      row.batch.cost_price,
      row.batch.selling_price_online,
      row.batch.selling_price_offline,
      row.batch.selling_price_employee,
      row.batch.selling_price_dealer,





    ]),
    theme: 'grid',
    headStyles: {
      fillColor: [255, 159, 67]
    },
    startY: 25, // margin top 


  });

  doc.save('Price_Master.pdf');
}
 

// excel export only filtered data
getVisibleDataFromTable(): any[] {
  const visibleData = [];
  const table = document.getElementById('mytable');
  if (table) {
    const headerRow = table.querySelector('thead tr');
    if (headerRow) {
      const headerData: string[] = [];
      headerRow.querySelectorAll('th').forEach(cell => {
        const columnHeader = cell.textContent?.trim(); // Add null check here
        if (columnHeader && columnHeader !== 'Is Active' && columnHeader !== 'Action') {
          headerData.push(columnHeader);
        }
      });
      visibleData.push(headerData);
    }

    // Include visible data rows
    const dataRows = table.querySelectorAll('tbody tr');
    dataRows.forEach(row => {
      const rowData: string[] = [];
      row.querySelectorAll('td').forEach(cell => {
        const cellData = cell.textContent?.trim(); // Add null check here
        if (cellData) {
          rowData.push(cellData);
        }
      });
      visibleData.push(rowData);
    });
  }
  return visibleData;
}

    // Modify your exportToExcel() function
exportToExcel(): void {
  const visibleDataToExport = this.getVisibleDataFromTable();
  const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(visibleDataToExport);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  // Create a Blob from the workbook and initiate a download
  const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const fileName = 'pricemaster.xlsx';
  saveAs(blob, fileName); // Use the FileSaver.js library to initiate download
}

printTable(): void {
  // Get the table element and its HTML content
  const tableElement = document.getElementById('mytable');
  if (!tableElement) {
    console.error("Table element with ID 'mytable' not found.");
    return;
  }

  const tableHTML = tableElement.outerHTML;

  // Get the title element and its HTML content
  const titleElement = document.querySelector('.titl');
  if (!titleElement) {
    console.error("Title element with class 'titl' not found.");
    return;
  }

  const titleHTML = titleElement.outerHTML;

  // Clone the table element to manipulate
  const clonedTable = tableElement.cloneNode(true) as HTMLTableElement;


  // Get the modified table's HTML content
  const modifiedTableHTML = clonedTable.outerHTML;

  // Apply styles to add some space from the top after the title
  const styledTitleHTML = `<style>.spaced-title { margin-top: 80px; }</style>` + titleHTML.replace('titl', 'spaced-title');

  // Combine the title and table content
  const combinedContent = styledTitleHTML + modifiedTableHTML;

  // Store the original contents
  const originalContents = document.body.innerHTML;

  // Replace the content of the body with the combined content
  document.body.innerHTML = combinedContent;
  window.print();

  // Restore the original content of the body
  document.body.innerHTML = originalContents;
}
}  