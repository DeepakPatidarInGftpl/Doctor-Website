import { Component, OnInit } from '@angular/core';
// import Swal from 'sweetalert2/dist/sweetalert2.js';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { ToastrService } from 'ngx-toastr';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { DashboardService } from 'src/app/Services/DashboardService/dashboard.service';
import { ContactService } from 'src/app/Services/ContactService/contact.service';

@Component({
  selector: 'app-scrap-entry-list',
  templateUrl: './scrap-entry-list.component.html',
  styleUrls: ['./scrap-entry-list.component.scss']
})
export class ScrapEntryListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any;

  titlee: any;
  p:number=1
  pageSize: number = 10;
  itemsPerPage:number=10;
  supplierType: string = '';
  selectedCompany: string = '';

  constructor(private transactionService: TransactionService,private cs:CompanyService,private toastrService:ToastrService, private dashboardservice : DashboardService , private contactservice : ContactService) {}
loader=true;
isAdd:any;
isEdit:any;
isDelete:any;
userDetails:any;
isAdmin = false;

  ngOnInit(): void {
    this.transactionService.getScrapEntry().subscribe(res => {
      this.tableData = res;
      this.loader=false;
     
    })

    //20-5
    this.cs.userDetails$.subscribe((res: any) => {
      console.log('deepak',res)
      if (res && res.role == 'admin') {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    });

    if (localStorage.getItem('financialYear')) {
      let fy = localStorage.getItem('financialYear');
      console.warn(JSON.parse(fy));
      let fyId = JSON.parse(fy);
      this.getEstimate(fyId);
    
    }
    //permission from profile api
    this.cs.userDetails$.subscribe((userDetails:any) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission?.map((res: any) => {
        if (res.content_type.app_label === 'transactions'  && res.content_type.model === 'scarpentry' && res.codename=='add_scarpentry') {
          this.isAdd = res.codename;
          console.log(this.isAdd);
        } else if (res.content_type.app_label === 'transactions' && res.content_type.model === 'scarpentry' && res.codename=='change_scarpentry') {
          this.isEdit = res.codename;
          console.log(this.isEdit);
        }else if (res.content_type.app_label === 'transactions' && res.content_type.model === 'scarpentry' && res.codename=='delete_scarpentry') {
          this.isDelete = res.codename;
          console.log(this.isDelete);
        }
    });
  })
  this.getPaymentTerms();
  this.getBranch();
  }
  paymentList: any;
  getPaymentTerms() {
    this.contactservice.getPaymentTerms().subscribe(res => {
      // console.log(res);
      this.paymentList = res;
    })
  }


  allSelected: boolean = false;
  selectedRows:boolean[]=[]
  selectAlll() {
    this.selectedRows.fill(this.allSelected);
  }

select=false
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
  
  search() {
    if (this.titlee === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.tableData = this.tableData.filter((res:any) => {
        const nameLower = res?.voucher_no.toLocaleLowerCase() || "";
        if (nameLower.includes(searchTerm) ) {
          return true;
        } 
        return false;
      });
    }
  }
  

  key = 'id'
  reverse: boolean = true;
  sort(key:any) {
    this.key = key;
    this.reverse = !this.reverse
  }


  generatePDFAgain() {
    const doc = new jsPDF();
    const title = 'Scrap Entry';
    doc.setFontSize(12);
    doc.setTextColor(33, 43, 54);
    doc.text(title, 82, 10);
    doc.text('', 10, 15); 
    // Pass tableData to autoTable
    autoTable(doc, {
      head: [
        ['#','Date','Voucher No.','Updater Name']
      ],
      body: this.tableData.map((row:any, index:number ) => [
        index + 1,
        row.date,
        row.voucher_no,
        row.updater_name,
      ]),
      theme: 'grid',
      headStyles: {
        fillColor: [255, 159, 67]
      },
      startY: 15, 
    });
    doc.save('Scrap_entry.pdf');
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
      if (columnHeader !== 'Is Active' && columnHeader !== 'Action') {
        headerData.push(columnHeader);
      }
    });
    visibleData.push(headerData);
    dataRows.forEach(row => {
      const rowData = [];
      row.querySelectorAll('td').forEach(cell => {
        rowData.push(cell.textContent.trim());
      });
      visibleData.push(rowData);
    });
    return visibleData;
  }
  exportToExcel(): void {
    const visibleDataToExport = this.getVisibleDataFromTable();
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(visibleDataToExport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const fileName = 'scrapEntry.xlsx';
    saveAs(blob, fileName); 
  }

  printTable(): void {
    const tableElement = document.getElementById('mytable');
    const titleElement = document.querySelector('.titl'); 
    if (!tableElement) {
        console.error('Table not found');
        return;
    }
  
    if (!titleElement) {
      console.error('Title not found');
      return;
  }
  
    const clonedTable = tableElement.cloneNode(true) as HTMLTableElement;
    const clonedTitle = titleElement.cloneNode(true) as HTMLElement;
    const isActiveTh = clonedTable.querySelector('th.thone:nth-child(1)');
    if (isActiveTh) {
      isActiveTh.remove();
    }
    const actionTh = clonedTable.querySelector('th.thone:last-child');
      if (actionTh) {
        actionTh.remove();
      }
  
      const rows = clonedTable.querySelectorAll('tr');
      rows.forEach((row) => {
        const isActiveTd = row.querySelector('td:nth-child(1)');
        if (isActiveTd) {
          isActiveTd.remove();
        }
        const actionTd = row.querySelector('td:last-child');
        if (actionTd) {
          actionTd.remove();
        }
      });
  
    const printContainer = document.createElement('div');
    clonedTitle.classList.add('spaced-title');
    printContainer.appendChild(clonedTitle);
    printContainer.appendChild(clonedTable);
  
    const style = document.createElement('style');
    style.id = 'printStyle'; 
    style.textContent = `
        @media print {
            body * {
                visibility: hidden;
            }
            #printContainer, #printContainer * {
                visibility: visible;
            }
            #printContainer {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
            }
            .spaced-title {
                margin-top: 60px;
                margin-bottom: 20px;
            }
        }
    `;
    document.head.appendChild(style);
  
    printContainer.id = 'printContainer';
    document.body.appendChild(printContainer);
  
    window.print();
  
    window.addEventListener('afterprint', () => {
      this.clearData();
    });

    setTimeout(() => {
      this.clearData();
    }, 2000);
  }

  clearData() {
    const printContainer = document.getElementById('printContainer');
    const style = document.getElementById('printStyle');
    if (printContainer) {
      document.body.removeChild(printContainer);
    }
    if (style) {
      document.head.removeChild(style);
    }
  }


  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.tableData.length;
    }
  }
//20-5
getEstimate(fy:any){
  const idString = JSON.stringify(this.selectData);
  console.log(idString);
  console.log(idString?.length);
  
  this.transactionService.getScrapEntryFy(fy,this.selectData).subscribe(res => {
    this.tableData = res;
    this.loader = false;
    this.selectedRows = new Array(this.tableData.length).fill(false);
   
  })
}
 //20-5
//get branch
branchList: any[] = [];
filteredBranchList: any[] = [];
searchBranch: string = '';
getBranch() {
  this.dashboardservice.getBranch().subscribe((res: any) => {
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
}




