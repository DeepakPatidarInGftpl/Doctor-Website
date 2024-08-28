import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { DashboardService } from 'src/app/Services/DashboardService/dashboard.service';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-payment-voucher',
  templateUrl: './list-payment-voucher.component.html',
  styleUrls: ['./list-payment-voucher.component.scss'],
  providers :[DatePipe]
})
export class ListPaymentVoucherComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false;
  public tableData: any;

  titlee: any;
  p: number = 1;
  pageSize: number = 10;
  itemsPerPage: number = 10;
  filteredData: any[]; // The filtered data
  selectedRecieptType: string = '';
  // date: any
  minDate: string = '';
  maxDate: string = '';
  paymentVoucherDate = new FormControl('');
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  constructor(
    private transactionService: TransactionService,
    private cs: CompanyService,
    private dashboardservice: DashboardService,
    private contactservice: ContactService,
    private commonService: CommonServiceService,
    private _dateP :DatePipe
  ) {}

  delRes: any;
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
        this.transactionService.deletePaymentVoucher(id).subscribe((res) => {
          this.delRes = res;
          if (this.delRes.success) {
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
            this.filteredData.splice(index, 1);
            this.ngOnInit();
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Not Deleted!',
              text: this.delRes.error,
            });
          }
        });
      }
    });
  }

  // active deactive
  isActive(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to Deactivate this Payment Voucher!',
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
        this.transactionService
          .PaymentVoucherIsActive(id, '')
          .subscribe((res) => {
            this.delRes = res;
            if (this.delRes.success) {
              Swal.fire({
                icon: 'success',
                title: 'Deactivate!',
                text: this.delRes.msg,
              });
              this.ngOnInit();
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Not-Deactivate!',
                text: this.delRes.error,
              });
            }
          });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to Active this Payment Voucher!',
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
        this.transactionService
          .PaymentVoucherIsActive(id, '')
          .subscribe((res) => {
            this.delRes = res;
            if (this.delRes.success) {
              Swal.fire({
                icon: 'success',
                title: 'Active!',
                text: this.delRes.msg,
              });
              this.ngOnInit();
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Not-Active!',
                text: this.delRes.error,
              });
            }
          });
      }
    });
  }

  loader = true;
  isAdd: any;
  isEdit: any;
  isDelete: any;
  userDetails: any;
  isAdmin = false;
  date = new Date();
  fyesr : any;
  ngOnInit(): void {
    // this.transactionService.getPaymentVoucher().subscribe(res => {
    //   // console.log(res);
    //   this.tableData = res;
    //   this.loader = false;
    //   this.selectedRows = new Array(this.tableData.length).fill(false);
    //   this.filteredData = this.tableData.slice();
    //   this.filterData();
    // })
    //20-5
   console.log('hello')
    this.cs.userDetails$.subscribe((res: any) => {
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
      this.fyesr = fyId
      this.getEstimate(fyId);
    }
    // permissin from api profile
    this.cs.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission?.map((res: any) => {
        if (
          res.content_type.app_label === 'transactions' &&
          res.content_type.model === 'paymentvoucher' &&
          res.codename == 'add_paymentvoucher'
        ) {
          this.isAdd = res.codename;
        } else if (
          res.content_type.app_label === 'transactions' &&
          res.content_type.model === 'paymentvoucher' &&
          res.codename == 'change_paymentvoucher'
        ) {
          this.isEdit = res.codename;
        } else if (
          res.content_type.app_label === 'transactions' &&
          res.content_type.model === 'paymentvoucher' &&
          res.codename == 'delete_paymentvoucher'
        ) {
          this.isDelete = res.codename;
        }
      });
    });
    this.getPaymentTerms();
    this.getBranch();

    const financialYear = localStorage.getItem('financialYear');
    this.paymentVoucherDateValidation(financialYear);
  }

  paymentList: any;
  getPaymentTerms() {
    this.contactservice.getPaymentTerms().subscribe((res) => {
      // console.log(res);
      this.paymentList = res;
    });
  }

  allSelected: boolean = false;
  selectedRows: boolean[];
  selectAlll() {
    this.selectedRows.fill(this.allSelected);
  }

  select = false;
  selectAll(initChecked: boolean) {
    if (!initChecked) {
      this.tableData.forEach((f: any) => {
        f.isSelected = true;
      });
    } else {
      this.tableData.forEach((f: any) => {
        f.isSelected = false;
      });
    }
  }

  search() {
    if (this.titlee == '') {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.filteredData = this.filteredData.filter((res) => {
        console.log(res);
        const nameLower = res?.supplier?.company_name?.toLocaleLowerCase();
        const companyNameLower = res?.payment_voucher_no.toLocaleLowerCase();
        if (nameLower.match(searchTerm)) {
          console.log(nameLower.match(searchTerm));
          return true;
        } else if (companyNameLower.match(searchTerm)) {
          console.log(companyNameLower.match(searchTerm));
          return true;
        }
        return false;
      });
    }
  }

  key = 'id';
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  // convert to pdf
  generatePDF() {
    const doc = new jsPDF();
    const title = 'Payment Voucher';
    doc.setFontSize(15);
    doc.setTextColor(33, 43, 54);
    doc.text(title, 10, 10);
    autoTable(doc, {
      html: '#mytable',
      theme: 'grid',
      headStyles: {
        fillColor: [255, 159, 67],
      },
      columns: [
        //remove action filed
        { header: 'Sr No.' },
        { header: 'Supplier' },
        { header: 'Reciept Type' },
        { header: 'Mode Type' },
        { header: 'Voucher No.' },
        { header: 'Payment Account' },
        { header: 'Bank Payment' },
        { header: 'Date' },
        { header: 'Transaction Date' },
        { header: 'Transaction Id' },
        { header: 'Amount' },
        { header: 'Is Active' },
      ],
    });
    doc.save('paymentVoucher.pdf');
  }
  generatePDFAgain() {
    const doc = new jsPDF('landscape');
    const title = 'Payment Voucher ';
    doc.setFontSize(12);
    doc.setTextColor(33, 43, 54);
    doc.text(title, 82, 10);
    doc.text('', 10, 15);
    // Pass tableData to autoTable
    autoTable(doc, {
      head: [
        [
          '#',
          'Supplier',
          'Payment Type',
          'Mode Type',
          'Voucher No.',
          'Account',
          'Payment',
          'Date',
          'Transaction Date',
          'Transaction Id',
          'Amount',
        ],
      ],
      body: this.tableData.map((row: any, index: number) => [
        index + 1,
        row.supplier?.company_name,
        row.payment_type,
        row.mode_type,
        row.payment_voucher_no,
        row.payment_account?.account_id,
        row.bank_payment,
        row.date,
        row.transaction_date,
        row.transaction_id,
        row.amount,
      ]),
      theme: 'grid',
      headStyles: {
        fillColor: [255, 159, 67],
      },
      startY: 15,
    });
    doc.save('Payment Voucher .pdf');
  }
  // excel export only filtered data
  getVisibleDataFromTable(): any[] {
    const visibleData = [];
    const table = document.getElementById('mytable');
    const headerRow = table.querySelector('thead tr');
    const dataRows = table.querySelectorAll('tbody tr');
    //table heading
    const headerData = [];
    headerRow.querySelectorAll('th').forEach((cell) => {
      const columnHeader = cell.textContent.trim();
      if (columnHeader !== 'Is Active' && columnHeader !== 'Action') {
        headerData.push(columnHeader);
      }
    });
    visibleData.push(headerData);
    dataRows.forEach((row) => {
      const rowData = [];
      row.querySelectorAll('td').forEach((cell) => {
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
    const excelBuffer: any = XLSX.write(wb, {
      bookType: 'xlsx',
      type: 'array',
    });
    const blob = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    const fileName = 'paymentVoucher.xlsx';
    saveAs(blob, fileName);
  }
  go(){

let start = this._dateP.transform(this.range.value.start , 'YYYY-MM-dd')
let end = this._dateP.transform(this.range.value.end , 'YYYY-MM-dd');

if (start && end) {
  let obj = {start, end}
  this.getEstimate(this.fyesr,obj)
}

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
    const isActiveTh1 = clonedTable.querySelector('th.thone:nth-child(13)');
    if (isActiveTh1) {
      isActiveTh1.remove();
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
        const isActiveTd1 = row.querySelector('td:nth-child(13)');
        if (isActiveTd1) {
          isActiveTd1.remove();
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
  selectedModeType: any;
  selectedAmount: any;

  paymentVoucherDateValidation(financialYear) {
    const dateControl = this.paymentVoucherDate;
    const { formattedMinDate, formattedMaxDate } =
      this.commonService.setMinMaxDates(dateControl, financialYear);
    this.minDate = formattedMinDate;
    this.maxDate = formattedMaxDate;
  }

  filterData(str ?: string,val ?: string) {
    let filteredData = this.tableData.slice();
    if (this.paymentVoucherDate.value) {
      const selectedDate = new Date(this.paymentVoucherDate.value)
        .toISOString()
        .split('T')[0];
      filteredData = filteredData.filter((item) => {
        const receiptDate = new Date(item?.date).toISOString().split('T')[0];
        return receiptDate === selectedDate;
      });
    }
    if (this.selectedRecieptType) {
      filteredData = filteredData.filter(
        (item) => item?.receipt_type === this.selectedRecieptType
      );
    }
    if (this.selectedModeType) {
      filteredData = filteredData.filter(
        (item) => item?.mode_type === this.selectedModeType
      );
    }
    if (this.selectedAmount) {
      filteredData = filteredData.filter(
        (item) => item?.amount <= this.selectedAmount
      );
    }

if (str == 'Is Active') {
  
  filteredData = filteredData.filter((item : any) =>{
    if (val === 'Active') {
     return item.is_active == true;
    }else if (val === 'InActive') {
      return item.is_active == false;
    }
    return item
  }
  );
}
    this.filteredData = filteredData;
  }
  clearFilters() {
    this.selectedAmount = null;
    this.selectedModeType = null;
    this.selectedRecieptType = null;
    this.paymentVoucherDate.setValue('');
    this.range.reset()
    this.filterData();
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.tableData.length;
    }
  }
  //20-5
  getEstimate(fy: any,date?:any) {
    const idString = JSON.stringify(this.selectData);
    console.log(idString);
    console.log(idString?.length);

    this.transactionService
      .getPaymentVoucherFy(fy, this.selectData , date)
      .subscribe((res) => {
        this.tableData = res;
        this.loader = false;
        this.selectedRows = new Array(this.tableData.length).fill(false);
        this.filteredData = this.tableData.slice(); // Initialize filteredData with the original data
        this.filterData();
      });
  }
  //16-5
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
      this.filteredBranchList = this.branchList.filter((feature) =>
        feature.title.toLowerCase().includes(this.searchBranch.toLowerCase())
      );
    }
  }
  // add remove branch
  searchVariant = '';
  selectData: any[] = [];
  selectedCategoryIds: any[] = [];
  SelectedBranch(variant: any, event: any) {
    if (event) {
      console.log(variant);
      this.selectData.push(variant);
      console.log(this.selectData, 'selected data');
      //close dropdown
      this.searchVariant = '';
      this.ngOnInit();
    } else {
      const selectedIndex = this.selectData.findIndex(
        (item) => item == variant
      );
      console.log(selectedIndex);
      if (selectedIndex !== -1) {
        this.selectData.splice(selectedIndex, 1);
      }
      this.ngOnInit();
      console.log(this.selectData);
    }
  }
}
