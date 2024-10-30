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
  selector: 'app-list-reciept-voucher',
  templateUrl: './list-reciept-voucher.component.html',
  styleUrls: ['./list-reciept-voucher.component.scss'],
  providers : [DatePipe]
})
export class ListRecieptVoucherComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false;
  public tableData: any;

  titlee: any;
  p: number = 1;
  pageSize: number = 10;
  itemsPerPage: number = 10;
  filteredData: any[]; // The filtered data
  selectedpaymentTerms: string = '';
  // date: any
  minDate: string = '';
  maxDate: string = '';
  receiptVoucherDate = new FormControl('');
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
    private _dateP : DatePipe
  ) {}
  fyesr : any;
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
        this.transactionService.deleteRecieptVoucher(id).subscribe((res) => {
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
      text: 'Do you want to Deactivate this Reciept Voucher!',
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
          .RecieptVoucherIsActive(id, '')
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
      text: 'Do you want to Active this Reciept Voucher!',
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
          .RecieptVoucherIsActive(id, '')
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

  ngOnInit(): void {
    // this.transactionService.getRecieptVoucher().subscribe(res => {
    //   // console.log(res);
    //   this.tableData = res;
    //   this.loader = false;
    //   this.selectedRows = new Array(this.tableData.length).fill(false);
    //   this.filteredData = this.tableData.slice();
    //   this.filterData();
    // })

    //20-5
    this.cs.userDetails$.subscribe((res: any) => ((res && res.role) ? this.isAdmin = true : this.isAdmin = false));

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
          res.content_type.model === 'receiptvoucher' &&
          res.codename == 'add_receiptvoucher'
        ) {
          this.isAdd = res.codename;
        } else if (
          res.content_type.app_label === 'transactions' &&
          res.content_type.model === 'receiptvoucher' &&
          res.codename == 'change_receiptvoucher'
        ) {
          this.isEdit = res.codename;
        } else if (
          res.content_type.app_label === 'transactions' &&
          res.content_type.model === 'receiptvoucher' &&
          res.codename == 'delete_receiptvoucher'
        ) {
          this.isDelete = res.codename;
        }
      });
    });
    this.getPaymentTerms();
    this.getBranch();

    const financialYear = localStorage.getItem('financialYear');
    this.receiptVoucherDateValidation(financialYear);
  }

  paymentList: any;
  getPaymentTerms() {
    this.contactservice.getPaymentTerms().subscribe((res) => {
      // console.log(res);
      this.paymentList = res;
    });
  }


  go(){

    let start = this._dateP.transform(this.range.value.start , 'YYYY-MM-dd')
    let end = this._dateP.transform(this.range.value.end , 'YYYY-MM-dd');
    
    if (start && end) {
      let obj = {start, end}
      this.getEstimate(this.fyesr,obj)
    }
    
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


  clone_data:any[] = []
  search(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value.toLocaleLowerCase();
    this.filteredData = this.clone_data.filter((res :any) => {
      const nameLower = res?.customer?.account_id?.toLocaleLowerCase() || '';
      const companyNameLower = res?.receipt_voucher_no?.toLocaleLowerCase() || '';
      const mobile_number = res?.payer.title?.toLocaleLowerCase() || '';
      const Namenumber = res?.payer?.company_name?.toLocaleLowerCase() || '';
    
      return nameLower?.includes(searchTerm) || companyNameLower?.includes(searchTerm) || mobile_number?.includes(searchTerm) || Namenumber?.includes(searchTerm);
    });
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
    const title = 'Reciept Voucher';
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
        { header: 'Account' },
        { header: 'Reciept Type' },
        { header: 'Mode Type' },
        { header: 'Voucher No.' },
        { header: 'Payer' },
        { header: 'Bank Payment' },
        { header: 'Date' },
        { header: 'Transaction Date' },
        { header: 'Transaction Id' },
        { header: 'Amount' },
        { header: 'Is Active' },
      ],
    });
    doc.save('recieptVoucher.pdf');
  }
  generatePDFAgain() {
    const doc = new jsPDF('landscape');
    const title = 'Receipt Voucher ';
    doc.setFontSize(12);
    doc.setTextColor(33, 43, 54);
    const pageWidth = doc.internal.pageSize.getWidth();
    
    // Calculate the width of the title
    const titleWidth = doc.getTextWidth(title);
    
    // Calculate the x position to center the title
    const xPosition = (pageWidth - titleWidth) / 2;
    doc.text(title, xPosition, 10);
    doc.text('', 10, 15);
    // Pass tableData to autoTable
    autoTable(doc, {
      head: [
        [
          '#',
          'Payment Account',
          'Receipt Type',
          'Mode Type',
          'Voucher No.',
          'Payer',
          'Payment',
          'Date',
          'Transaction Date',
          'Transaction Id',
          'Amount',
        ],
      ],
      body: this.filteredData.map((row: any, index: number) => [
        index + 1,
        row.payment_account?.account_id,
        row.receipt_type,
        row.mode_type,
        row.receipt_voucher_no,
        row.payer?.account_id,
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
    doc.save('Receipt Voucher .pdf');
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
    const fileName = 'reciept.xlsx';
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
    const isActiveTh1 = clonedTable.querySelector('th.thone:nth-child(14)');
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
        const isActiveTd1 = row.querySelector('td:nth-child(14)');
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
  selectedRecieptType: any;

  receiptVoucherDateValidation(financialYear) {
    const dateControl = this.receiptVoucherDate;
    const { formattedMinDate, formattedMaxDate } =
      this.commonService.setMinMaxDates(dateControl, financialYear);
    this.minDate = formattedMinDate;
    this.maxDate = formattedMaxDate;
  }

  filterData(str? : string,val ?: string) {
    let filteredData = this.tableData.slice();
    if (this.receiptVoucherDate.value) {
      const selectedDate = new Date(this.receiptVoucherDate.value)
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
    this.receiptVoucherDate.setValue('');
    if (this.range.value.start) {
    this.range.reset();
    this.getEstimate(this.fyesr)
    }
    this.filterData();
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.tableData.length;
    }
  }
  //20-5
  total_Account : number =0;
  total_advance_payment : number =0;
  total_against_bill : number =0;
  getEstimate(fy: any , date ?: any) {
    const idString = JSON.stringify(this.selectData);
    console.log(idString);
    console.log(idString?.length);

    this.transactionService
      .getRecieptVoucherFy(fy, this.selectData,date)
      .subscribe((res : any[]) => {

        const userMap = {
          Customer : '//contacts/customerDetails/',
          Supplier : '//contacts/supplierDetails/',
          Dealer : '//contacts/detailDealer/',
          Employee : '//contacts/employeeDetails/',
          Transport : '//contacts/transportDetails/',
          Vendor : '//contacts/vendorDetails/'
        };
        
        res.forEach(item => {
          const url = userMap[item?.payer?.detail?.user_type];
          if (url) item.payer.url = `${url}${item?.payer?.detail?.id}`;
         });



        this.tableData = res;
        this.loader = false;
        this.selectedRows = new Array(this.tableData.length).fill(false);
        this.filteredData = this.tableData.slice(); // Initialize filteredData with the original data
         this.clone_data =this.tableData
        res.forEach((item : any) => {

          console.log(item.mode_type)
          if (item.mode_type === 'On Account') {
            this.total_Account += +item.amount
          }else if(item.mode_type === 'Advance Payment'){
            this.total_advance_payment += +item.amount

          }else if(item.mode_type === 'Against Bill'){
            this.total_against_bill += +item.amount
          }

        });

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
