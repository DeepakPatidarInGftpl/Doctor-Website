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
@Component({
  selector: 'app-discount-wise-purchase',
  templateUrl: './discount-wise-purchase.component.html',
  styleUrls: ['./discount-wise-purchase.component.scss']
})
export class DiscountWisePurchaseComponent implements OnInit {
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



  userName: any;
  constructor(private router: Router, private fb: FormBuilder, private toastr: ToastrService, private transactionService: TransactionService, private purchaseService: PurchaseServiceService, private cs: CompanyService, private datepipe: DatePipe,
    private coreService:CoreService, private reportService: ReportService) {
  }
 
  // discount wise purchase form
  discountWisePurchaseForm!: FormGroup;
  startDate: any;
  endDate: any;
 discount: any;
   discountWisePurchaseList: any;


  userDetails: any;
   //23-5
   isAdmin=false;
   fyID:any;
 ngOnInit(): void {
     //23-5
     if (localStorage.getItem('financialYear')) {
       let fy = localStorage.getItem('financialYear');
       console.warn(JSON.parse(fy));
       let fyId = JSON.parse(fy);
       this.fyID=fyId;
     }
     this.cs.userDetails$.subscribe((res: any) => {
       if (res.role == 'admin') {
         this.isAdmin = true;
       } else {
         this.isAdmin = false;
       }
       this.getBranch();
     });
 //23  v
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

    // discount wise purchase form
    this. discountWisePurchaseForm = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
     discount: new FormControl('')
    });
    this.startDate = this. discountWisePurchaseForm.value?.start;
    this.endDate = this. discountWisePurchaseForm.value?.end;
    this.discount = this. discountWisePurchaseForm.value?.discount;
    this.  getDiscountWisePurchase();
    
    this.getProduct()

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

  displayFn2(user: any): string {
    return user && user?.title ? user?.title : '';
  }
playFn3(user: any): string {
    return user && user?.title ? user?.title : '';
}
  displayFn4(user: any): string {
    return user && user?.item_code ? user?.item_code : '';
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
      this.  getDiscountWisePurchase();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this. discountWisePurchaseList = this. discountWisePurchaseList.filter((res: any) => {
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
  discountWisePurchase: any
    getDiscountWisePurchase() {
    
    this.reportService. getDiscountWisePurchase(this.startDate, this.endDate,  this.discount, this.fyID,this.selectData).subscribe((res) => {
      console.log(res);
      this.discountWisePurchase = res;
      this. discountWisePurchaseList = res;
    })

  }

  // api call
  dataId: any;
  oncheckBrand(data: any) {
    console.log(data);
    this.dataId = data;
    this. discountWisePurchaseForm.patchValue({ brand: this.dataId });
    console.warn(this. discountWisePurchaseForm.value);
    this?.getDiscountWisePurchase();
  }
   

  oncheckDiscount(data:any){
    this. discountWisePurchaseForm.patchValue({Price: data});
    console.warn(this. discountWisePurchaseForm.value);
    this.discount = this. discountWisePurchaseForm.value?.discount;
    this?.getDiscountWisePurchase();
  }

   getSelectedDiscountWisePurchaseDates() {
    console.log(this. discountWisePurchaseForm.value);
    const start = this.datepipe.transform(this. discountWisePurchaseForm.value.start, 'yyyy-MM-dd');
    const end = this.datepipe.transform(this. discountWisePurchaseForm.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.startDate = start;
    this.endDate = end;
    this?.getDiscountWisePurchase();
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
  subCategoryList: any[] = [];
  getSubcategory() {
    this.coreService.getSubcategory().subscribe((res: any) => {
      console.log(res);
      this.subCategoryList = res
    })
  }
 
 // convert to pdf

 generatePDFAgain() {
  const doc = new jsPDF('landscape');
  const subtitle = 'PV';
  const title = 'Discount Wise Purchase Report';
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
  const headers =['#', 'User','Check Gst', 'Total','Total Discount','Bill Date','Variant Name','Sku','Title','Category','Subcategory','Brand','Qty','Unit Cost','Mrp','Discount','Tax','Landing Cost','Total']

  const data: any = [];

  let customerIndex = 1;
  this. discountWisePurchaseList.forEach((list: any) => {
    console.warn(list);
    
    const user = list.user.party_name;
    const check_gst = list.check_gst;
    const total = list.total;
    const total_discount  = list.total_discount;
    const bill_date = list.bill_date;
    let isFirstInvoice = true;
    list.data.forEach((res:any,index: number) => {
      console.log(res);
      
      const invoiceNumber = isFirstInvoice ? customerIndex : '';
      data.push([
        invoiceNumber, // row no of each cstmr
        isFirstInvoice ? user : '',
        isFirstInvoice ? check_gst : '',
        isFirstInvoice ? total : '',
        isFirstInvoice ? total_discount : '',
this.formatDate(isFirstInvoice ? bill_date : '',),

        res.barcode.variant_name,
        res.barcode.sku,

        res.barcode.product.title,
     
        res.barcode.product.category,
        res.barcode.product.subcategory,
        res.barcode.product.brand,
        res.qty , 
        res.unit_cost , 
        res.mrp , 
        res.discount ,
        res.tax , 
        res.landing_cost , 
        res.total , 

      ]);
      isFirstInvoice = false;
    });
    customerIndex++;
  });
 
  autoTable(doc, {
    head: [headers],
    body: data,
    theme: 'grid',
    startY: 32, 
    headStyles: {
      fillColor: [255, 159, 67], // Header color
      textColor: [255, 255, 255] // Header text color
    }
  });


doc.save('Discount_wise_Purchase .pdf');
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
  const fileName = 'Stockalert.xlsx';
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
  //refresh
  window.addEventListener('afterprint', () => {
    console.log('afterprint');
   window.location.reload();
  });
  //end
  // Replace the content of the body with the combined content
  document.body.innerHTML = combinedContent;
  window.print();

  // Restore the original content of the body
  document.body.innerHTML = originalContents;
}

changePg(val: any) {
  console.log(val);
  if (val == -1) {
    this.itemsPerPage = this.discountWisePurchaseList?.length;
  }
}
      //23-5
      branchList: any[] = [];
      filteredBranchList: any[] = [];
      searchBranch: string = '';
      getBranch() {
        this.reportService.getBranch().subscribe((res: any) => {
          this.branchList = res;
          this.filteredBranchList = [...this.branchList];
        });
      }
      filterBranch() {
        if (this.searchBranch.trim() === '') {
          this.filteredBranchList = [...this.branchList];
        } else {
          this.filteredBranchList = this.branchList.filter(feature =>
            feature.title.toLowerCase().includes(this.searchBranch.toLowerCase())
          );
        }
      }
      // add remove branch 
      searchVariant = ''
      selectData: any[] = [];
      selectedCategoryIds: any[] = []
      SelectedBranch(variant: any, event: any) {
        if (event) {
          console.log(variant);
          this.selectData.push(variant)
          console.log(this.selectData, 'selected data');
          //close dropdown 
          this.searchVariant = '';
          this.ngOnInit();
        } else {
          const selectedIndex = this.selectData.findIndex(item => item == variant);
          console.log(selectedIndex);
          if (selectedIndex !== -1) {
            this.selectData.splice(selectedIndex, 1);
          }
          this.ngOnInit();
          console.log(this.selectData);
        }
      }
    //23-5
}























  


  

  







