import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { SalesService } from 'src/app/Services/salesService/sales.service';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { DatePipe } from '@angular/common';
import { DashboardService } from 'src/app/Services/DashboardService/dashboard.service';

@Component({
  selector: 'app-advance-booking-list',
  templateUrl: './advance-booking-list.component.html',
  styleUrls: ['./advance-booking-list.component.scss']
})
export class AdvanceBookingListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any;

  titlee: any;
  p:number=1
  pageSize: number = 10;
  itemsPerPage:number=10;
  filteredData: any[]; // The filtered data
  supplierType: string = '';
  selectedCompany: string = '';

  constructor(private saleService: SalesService, private cs:CompanyService,private contactService:ContactService,private datePipe:DatePipe, private dashboardservice : DashboardService) {}

  delRes: any
  confirmText(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
    }).then((t) => {
      if (t.isConfirmed) {
        this.saleService.deleteSalesEstimate(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
           this.ngOnInit();
           Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: this.delRes.msg,
          });
          this.tableData.splice(index, 1);
          }else {
            Swal.fire({
              icon: 'error',
              title: 'Not Deleted!',
              text: this.delRes.error,
            });
          }
        })
      }
    });
  }
  // active deactive
  isActive(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Deactivate this sale estimate!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Deactivate it!',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
    }).then((t) => {
      if (t.isConfirmed) {
        this.saleService.SalesEstimateIsActive(id,'').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            Swal.fire({
              icon: 'success',
              title: 'Deactivate!',
              text: this.delRes.msg,
            });
            this.ngOnInit()
          }
        })
       
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this sale Estimate!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Active it!',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
    }).then((t) => {
      if (t.isConfirmed) {
        this.saleService.SalesEstimateIsActive(id,'').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            Swal.fire({
              icon: 'success',
              title: 'Active!',
              text: this.delRes.msg,
            });
            this.ngOnInit()
          }
        })
      
      }
    });
  }
loader=true;
isAdd:any;
isEdit:any;
isDelete:any;
userDetails:any;
isAdmin=false;
  ngOnInit(): void {
    // this.saleService.getAdvanceBooking().subscribe(res => {
    //   this.tableData = res;
    //   this.loader=false;
    //   this.selectedRows = new Array(this.tableData.length).fill(false);
    //   this.filteredData = this.tableData.slice(); // Initialize filteredData with the original data
    //   this.filterData();
     
  
    // })
//18-5
    if (localStorage.getItem('financialYear')) {
      let fy = localStorage.getItem('financialYear');
      console.warn(JSON.parse(fy));
      let fyId = JSON.parse(fy);
      this.getSaleAdvanceBooking(fyId);
    }

    this.cs.userDetails$.subscribe((res: any) => {
      if (res.role == 'admin') {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    });
//18-5
    //permission from profile api
  
    this.cs.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission?.map((res: any) => {
        if (res.content_type.app_label === 'sale'  && res.content_type.model === 'advancebooking' && res.codename=='add_advancebooking') {
          this.isAdd = res.codename;
          // console.log(this.isAdd);
        } else if (res.content_type.app_label === 'sale' && res.content_type.model === 'advancebooking' && res.codename=='change_advancebooking') {
          this.isEdit = res.codename;
          // console.log(this.isEdit);
        }else if (res.content_type.app_label === 'sale' && res.content_type.model === 'advancebooking' && res.codename=='delete_advancebooking') {
          this.isDelete = res.codename;
          // console.log(this.isDelete);
        }
    });
  })
  this.getPaymentTerms();
  this.getBranch();
  }

  
  paymentList: any;
  getPaymentTerms() {
    this.contactService.getPaymentTerms().subscribe(res => {
      // console.log(res);
      this.paymentList = res;
    })
  }

  allSelected: boolean = false;
  selectedRows:boolean[]
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
      this.filteredData = this.filteredData.filter(res => {
        const nameLower = res?.customer?.name.toLocaleLowerCase() || "";
        const usernameLower = res?.customer?.username.toLocaleLowerCase() || "";
        const companyNameLower = res.estimate_no.toLocaleLowerCase();
        if (nameLower.includes(searchTerm) || usernameLower.includes(searchTerm)) {
          return true;
        } else if (companyNameLower.includes(searchTerm)) {
          return true;
        }
        return false;
      });
    }
  }
  

  key = 'id'
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }
  private formatDate(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }
   // convert to pdf
   generatePDF() {
    const doc = new jsPDF();
    const title = 'Advance Booking List';
    doc.setFontSize(15);
    doc.setTextColor(33, 43, 54);
    doc.text(title, 10, 10);
    autoTable(doc,
      {
        html: '#mytable',
        theme: 'grid',
        headStyles: {
          fillColor: [255, 159, 67]
        },
        columns: [
          { header: 'Sr No.' },
          { header: 'Account ' },
          { header: 'Booking Date ' },
          { header: 'Booking no' },
          { header: 'Payment Terms' },
          { header: 'Due Date' },
          { header: 'Sub Total' },
          { header: 'Total' },
          { header: 'Status' },
          { header: 'Is Active' }
        ],
      })
    doc.save('Advance Booking.pdf');
 }
 generatePDFAgain() {
  const doc = new jsPDF();
  const title = 'Advance Booking List';
  doc.setFontSize(12);
  doc.setTextColor(33, 43, 54);
  doc.text(title, 82, 10);
  doc.text('', 10, 15); 
  // Pass tableData to autoTable
  autoTable(doc, {
    head: [
      ['#', 'Account','Booking Date', 'Booking no','Payment Terms','Due Date','Sub Total','Total','Status']
    ],
    body: this.tableData.map((row:any, index:number ) => [
  
      index + 1,
      row.account?.account_id ,
      row.booking_date,
     row.booking_no,
      row.payment_terms.title,
     row.due_date,
      row.subtotal,
      row.total,
  row.status,
    ]),
    theme: 'grid',
    headStyles: {
      fillColor: [255, 159, 67]
    },
    startY: 15, 
  });
  doc.save('Advance Booking .pdf');
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
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const fileName = 'advancebooking.xlsx';
    saveAs(blob, fileName); // Use the FileSaver.js library to initiate download
  }

  printTable(): void {
    const tableElement = document.getElementById('mytable');
    const tableHTML = tableElement.outerHTML;
    const titleElement = document.querySelector('.titl');
    const titleHTML = titleElement.outerHTML;
    const clonedTable = tableElement.cloneNode(true) as HTMLTableElement;
    const isActiveTh = clonedTable.querySelector('th.thone:nth-child(11)');
    if (isActiveTh) {
      isActiveTh.remove();
    }

    const actionTh = clonedTable.querySelector('th.thone:last-child');
    if (actionTh) {
      actionTh.remove();
    }

    const rows = clonedTable.querySelectorAll('tr');
    rows.forEach((row) => {
      const isActiveTd = row.querySelector('td:nth-child(11)');
      if (isActiveTd) {
        isActiveTd.remove();
      }
      const actionTd = row.querySelector('td:last-child');
      if (actionTd) {
        actionTd.remove();
      }
    });
    const modifiedTableHTML = clonedTable.outerHTML;
    const styledTitleHTML = `<style>.spaced-title { margin-top: 80px; }</style>` + titleHTML.replace('titl', 'spaced-title');

    const combinedContent = styledTitleHTML + modifiedTableHTML;
    const originalContents = document.body.innerHTML;
    window.addEventListener('afterprint', () => {
      console.log('afterprint');
     window.location.reload();
    });
    document.body.innerHTML = combinedContent;
    window.print();
    document.body.innerHTML = originalContents;
  }


  date: any
  espireDate:any;
  filterPaymentTerms:any
  selectedAmount:any
  statusFilter:any;
  filterData() {
    let filteredData = this.tableData.slice();
    if (this.date) {
      const selectedDate = new Date(this.date).toISOString().split('T')[0];
      filteredData = filteredData.filter((item) => {
        const receiptDate = new Date(item?.estimate_date).toISOString().split('T')[0];
        return receiptDate === selectedDate;
      });
    }
    if (this.espireDate) {
      const selectedDate = new Date(this.espireDate).toISOString().split('T')[0];
      filteredData = filteredData.filter((item) => {
        const receiptDate = new Date(item?.estimate_expiry_date).toISOString().split('T')[0];
        return receiptDate === selectedDate;
      });
    }
    if (this.filterPaymentTerms) {
      filteredData = filteredData.filter((item) => item?.payment_terms?.title=== this.filterPaymentTerms);
    }
    if (this.selectedAmount) {
      filteredData = filteredData.filter((item) => item?.total <= this.selectedAmount);
    }
    if (this.statusFilter) {
      filteredData = filteredData.filter((item) => item?.status=== this.statusFilter);
    }
    this.filteredData = filteredData;
  }
  clearFilter() {
    this.date = null;
    this.espireDate = null;
    this.filterPaymentTerms=null
    this.selectedAmount=null;
    this.statusFilter=null;
    this.filterData();
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.tableData.length;
    }
  }

//18-5
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

getSaleAdvanceBooking(fy:any){
  const idString = JSON.stringify(this.selectData);
  console.log(idString);
  console.log(idString?.length);
  this.saleService.getAdvanceBookingfy(fy,this.selectData).subscribe(res => {
    this.tableData = res;
    this.loader=false;
    this.selectedRows = new Array(this.tableData.length).fill(false);
    this.filteredData = this.tableData.slice(); // Initialize filteredData with the original data
    this.filterData();
   
  })
}
}


