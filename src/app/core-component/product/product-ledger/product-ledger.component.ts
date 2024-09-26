import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { Observable, map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-product-ledger',
  templateUrl: './product-ledger.component.html',
  styleUrls: ['./product-ledger.component.scss']
})
export class ProductLedgerComponent implements OnInit {
  public tableData: any = []
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false;
  selectActive: any;
  productVariantList: any;
  productVariantData: any;
  supplierControl: FormControl = new FormControl('');

  constructor(private coreService: CoreService, private contactService: ContactService, private cs: CompanyService) { }

  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  filteredData: any[];
  loader = true;
  productId: any;
  //24-5
  isAdmin = false;
  fyID: any;

  //
  ngOnInit(): void {
    //24-5
    if (localStorage.getItem('financialYear')) {
      let fy = localStorage.getItem('financialYear');
      console.warn(JSON.parse(fy));
      let fyId = JSON.parse(fy);
      this.fyID = fyId;
    }
    this.cs.userDetails$.subscribe((res: any) => {
      if (res?.role == 'admin') {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    });

    this.getProductLedger();
    this.getVoucher();
    this.getProduct();
    this.getVariant();

    this.supplierControl.valueChanges.subscribe((res) => {
      if(res) {
        const filteredData = this._filter(res);
        this.productVariantList = filteredData;
      } else {
        this.productVariantList = this.productVariantData;
      }
    })

    // this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
    //   startWith(''),
    //   map((value: any) => {
    //     const title = typeof value === 'string' ? value : value?.title;
    //     return title ? this._filter(title as string) : this.suppliers.slice();
    //   }),
    // );
  }
  getProductLedger() {
    console.log(this.productId);

    this.coreService.getProductLedgerFy(this.productId, this.fyID, this.selectData).subscribe(res => {
      this.tableData = res;
      this.loader = false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
      this.filteredData = this.tableData.slice();
      this.filterData();
    })
  }
  voucherList: any;
  getVoucher() {
    this.contactService.getVoucherType().subscribe(res => {
      console.log(res);
      this.voucherList = res;
    })
  }
  private _filter(title: string): any[] {
    const filterValue = typeof title === 'string' ? title.toLowerCase() : '';
    console.log(filterValue);
    return this.productVariantList?.length ? (this.productVariantList.filter((option: any) =>
      (option?.product_title && option.product_title.toLowerCase().includes(filterValue)) ||
      (option?.variant_name && option.variant_name.toLowerCase().includes(filterValue))
    )) : '';
  }
 
  suppliers: any[] = [];
  getProduct() {
    this.coreService.getProducts().subscribe((res: any) => {
      console.log(res, 'user');
      this.suppliers = res;
      // this.variants=res;
    })
  }

  getVariant() {
    this.contactService.productVariant().subscribe((res)=> {
      this.productVariantList = res;
      this.productVariantData = res;
    })
  }

  allSelected: boolean = false;
  selectedRows: boolean[]
  selectAlll() {
    this.selectedRows.fill(this.allSelected);
  }

  selectAll(initChecked: boolean) {
    if (!initChecked) {
      this.tableData.forEach((f: any) => {
        f.isSelected = true
      })
    } else {
      this.tableData.forEach((f: any) => {
        f.isSelected = false
      })
    }
  }

  displayFn(product: any): string {
    return product ? (product.variant_name ? `${product.product_title} (${product.variant_name})` : product.product_title) : '';
  }

  search() {
    if (this.titlee === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.filteredData = this.filteredData.filter(res => {
        const nameLower = res?.voucher_no?.toLocaleLowerCase();
        return nameLower.includes(searchTerm);
      });
    }
  }

  key = 'id'
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }

  openModalProduct() {
    const modalId = `productModal`;
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
    }
  }

  closeModalProduct() {
    const modal = document.getElementById(`productModal`);
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
    }
  }

  // read more or less
  sho = true;
  sho1 = false;
  sho2 = false;
  hide() {
    this.sho = false;
    this.sho1 = !this.sho1;
    this.sho2 = false;
  }
  hide1() {
    this.sho = true;
    this.sho1 = false;
    this.sho2 = !this.sho2;
  }

  // filter data
  filterReverseCharge: any;
  date: any;
  selectedVoucherType: any;
  filterData() {
    let filteredData = this.tableData.slice();
    if (this.date) {
      const selectedDate = new Date(this.date).toISOString().split('T')[0];
      filteredData = filteredData.filter((item) => {
        const receiptDate = new Date(item?.date).toISOString().split('T')[0];
        return receiptDate === selectedDate;
      });
    }
    if (this.selectedVoucherType) {
      filteredData = filteredData.filter((item) => item?.voucher_type === this.selectedVoucherType);
    }
    if (this.selectActive !== undefined && this.selectActive !== null) {
      filteredData = filteredData.filter(item => item?.is_active === this.selectActive);
    }
    this.filteredData = filteredData;
  }

  clearFilters() {
    this.selectedVoucherType = null;
    this.date = null;
    this.selectActive = undefined;
    this.filterData();
  }

  // convert to pdf
  generatePDF() {
    // table data with pagination
    const doc = new jsPDF();
    const title = 'Product Ledger List';

    doc.setFontSize(15);
    doc.setTextColor(33, 43, 54);
    doc.text(title, 10, 10);
    // autoTable(doc, { html: '#mytable' }); // here all table field downloaded
    autoTable(doc,

      {
        html: '#mytable',
        theme: 'grid',
        headStyles: {
          fillColor: [255, 159, 67]
        },
        columns: [
          //remove action filed
          { header: 'Sr No.' },
          { header: 'Name' },
          { header: 'Date' },
          { header: 'Voucher Type' },
          { header: 'Voucher No.' },
          { header: 'Price' },
          { header: 'In QTY' },
          { header: 'Out QTY' },
          { header: 'Is Active' }
        ],
      })
    doc.save('productLedger.pdf');

  }
  generatePDFAgain() {
    const doc = new jsPDF();
    const title = 'Product Ledger List';
    doc.setFontSize(12);
    doc.setTextColor(33, 43, 54);
    doc.text(title, 82, 10);
    doc.text('', 10, 15);
    // Pass tableData to autoTable
    autoTable(doc, {
      head: [
        ['#', 'Name.', 'Date', 'Voucher Type', 'Voucher No.', 'Price', 'In QTY', 'Out QTY']
      ],
      body: this.filteredData.map((row: any, index: number) => [
        index + 1,
        row.name,
        row.date,
        row.voucher_type,
        row.voucher_no,
        row.price,
        row.in_qty,
        row.out_qty


      ]),
      theme: 'grid',
      headStyles: {
        fillColor: [255, 159, 67]
      },
      startY: 15,
    });
    doc.save('Product _Ledger.pdf');
  }
  // excel export only filtered data
  getVisibleDataFromTable(): any[] {
    const visibleData = [];
    const table = document.getElementById('mytable');
    const headerRow = table.querySelector('thead tr');
    const dataRows = table.querySelectorAll('tbody tr');
    //table heading
    const headerData = [];
    headerRow.querySelectorAll('th').forEach(cell => {
      const columnHeader = cell.textContent.trim();
      headerData.push(columnHeader);
    });
    visibleData.push(headerData);

    // Include visible data rows
    dataRows.forEach(row => {
      const rowData = [];
      row.querySelectorAll('td').forEach(cell => {
        rowData.push(cell.textContent.trim());
      });
      visibleData.push(rowData);
    });
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
    const fileName = 'productLedger.xlsx';
    saveAs(blob, fileName); // Use the FileSaver.js library to initiate download
  }
  printTable(): void {
    // Get the table element and its HTML content
    const tableElement = document.getElementById('mytable');

    // Get the title element and its HTML content
    const titleElement = document.querySelector('.titl');
    const titleHTML = titleElement.outerHTML;

    // Clone the table element to manipulate
    const clonedTable = tableElement.cloneNode(true) as HTMLTableElement;


    // Loop through each row and remove the "Is Active" column and "Action" column data cells

    // Get the modified table's HTML content
    const modifiedTableHTML = clonedTable.outerHTML;

    // Apply styles to add some space from the top after the title
    const styledTitleHTML = `<style>.spaced-title { margin-top: 80px; }</style>` + titleHTML.replace('titl', 'spaced-title');

    // Combine the title and table content
    const combinedContent = styledTitleHTML + modifiedTableHTML;

    // Store the original contents
    const originalContents = document.body.innerHTML;
    window.addEventListener('afterprint', () => {
      console.log('afterprint');
      window.location.reload();
    });
    // Replace the content of the body with the combined content
    document.body.innerHTML = combinedContent;
    window.print();

    // Restore the original content of the body
    document.body.innerHTML = originalContents;
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.filteredData.length;
    }
  }

  //24-5
  branchList: any[] = [];
  filteredBranchList: any[] = [];
  searchBranch: string = '';
  getBranch() {
    this.coreService.getBranch().subscribe((res: any) => {
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
  //24-5
  // api call
  dataId: any;
  filteredSuppliers: Observable<any[]> | undefined;
  oncheckAccount(data: any) {
    console.warn(data);
    this.productId = data?.id;
    this?.getProductLedger();
  }
}
