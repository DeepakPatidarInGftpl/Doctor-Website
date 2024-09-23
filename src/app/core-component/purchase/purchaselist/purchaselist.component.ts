import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { DatePipe } from '@angular/common';
import { DashboardService } from 'src/app/Services/DashboardService/dashboard.service';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchaselist',
  templateUrl: './purchaselist.component.html',
  styleUrls: ['./purchaselist.component.scss']
})
export class PurchaselistComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any;

  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  filteredData: any[]; // The filtered data
  selectedPurchaseNo: any;
  // date:any
  // minDate: string = '';
  // maxDate: string = '';
  dueMinDate: string = '';
  dueMaxDate: string = '';
  shippingDate = new FormControl('');
  purchaseOrderDate = new FormControl('');
  poDateForm!: FormGroup;
  shippingDateForm!: FormGroup;
  minDate: Date;
  maxDate: Date;
  financialYear!: string;

  constructor(private purchaseService: PurchaseServiceService,private cs:CompanyService,
    private datePipe:DatePipe , private dashboardservice : DashboardService, private commonService: CommonServiceService) { }

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
        this.purchaseService.deletePurchase(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
            this.tableData.splice(index, 1);
          }else{
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
      text: "Do you want to Deactivate this purchase order!",
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
        this.purchaseService.PurchaseIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Purchase Order Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this purchase!",
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
        this.purchaseService.PurchaseIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: this.delRes.msg,
        });
      }
    });
  }
  isAdd:any;
  isEdit:any;
  isDelete:any;
  userDetails:any
  isAdmin = false;

  ngOnInit(): void {
     //18-5
     if (localStorage.getItem('financialYear')) {
      let fy = localStorage.getItem('financialYear');
      console.warn(JSON.parse(fy));
      let fyId = JSON.parse(fy);
      this.getPurchase(fyId);
    }
    this.cs.userDetails$.subscribe((res: any) => {
      if (res?.role == 'admin') {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    });

    this.financialYear = localStorage.getItem('financialYear');
    const { minDate, maxDate } = this.commonService.determineMinMaxDates(this.financialYear);
    this.minDate = minDate;
    this.maxDate = maxDate;
    this.poDateForm = new FormGroup({
      start: new FormControl('', [Validators.required, this.commonService.dateRangeValidator(this.financialYear)]),
      end: new FormControl('', [Validators.required, this.commonService.dateRangeValidator(this.financialYear)]),
    });

    this.shippingDateForm = new FormGroup({
      start: new FormControl('', [Validators.required, this.commonService.dateRangeValidator(this.financialYear)]),
      end: new FormControl('', [Validators.required, this.commonService.dateRangeValidator(this.financialYear)]),
    });

    this.commonService.validateAndClearDates(this.poDateForm, this.minDate, this.maxDate);
    this.commonService.validateAndClearDates(this.shippingDateForm, this.minDate, this.maxDate);
  //18-5

   // permission from localstoarg 
  //  const localStorageData = JSON.parse(localStorage.getItem('auth'));
  //  if (localStorageData && localStorageData.permission) {
  //    const permission = localStorageData.permission;
  //    permission.map((res: any) => {
  //      if (res.content_type.app_label === 'master' && res.content_type.model === 'purchaseorder' && res.codename=='add_purchaseorder') {
  //        this.isAdd = res.codename;
  //        console.log(this.isAdd);
  //      } else if (res.content_type.app_label === 'master' && res.content_type.model === 'purchaseorder' && res.codename=='change_purchaseorder') {
  //        this.isEdit = res.codename;
  //        console.log(this.isEdit);
  //      }else if (res.content_type.app_label === 'master' && res.content_type.model === 'purchaseorder' && res.codename=='delete_purchaseorder') {
  //       this.isDelete = res.codename;
  //       console.log(this.isDelete);
  //     }
  //    });
  //  }

    // permissin from api profile
    this.cs.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission?.map((res: any) => {
        if (res.content_type.app_label === 'purchase' && res.content_type.model === 'purchaseorder' && res.codename=='add_purchaseorder') {
          this.isAdd = res.codename;
          // console.log(this.isAdd);
        } else if (res.content_type.app_label === 'purchase' && res.content_type.model === 'purchaseorder' && res.codename=='change_purchaseorder') {
          this.isEdit = res.codename;
          // console.log(this.isEdit);
        }else if (res.content_type.app_label === 'purchase' && res.content_type.model === 'purchaseorder' && res.codename=='delete_purchaseorder') {
         this.isDelete = res.codename;
        //  console.log(this.isDelete);
       }
      });
    });
    this.getBranch();
  }
  loader=true;
getPurchase(fy:any){
    console.log(fy);
    const idString = JSON.stringify(this.selectData);
    console.log(idString);
    console.log(idString?.length);
    this.purchaseService.getPurchaseFY(fy,this.selectData).subscribe(res => {
      // console.log(res);get
      this.tableData = res;
      this.loader=false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
      this.filteredData = this.tableData.slice(); // Initialize filteredData with the original data
      this.filterData();
    })
  }

  
  allSelected: boolean = false;
  selectedRows: boolean[]
  selectAlll() {
    this.selectedRows.fill(this.allSelected);
  }

  select = false
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
  deleteId(id: number) {
    this.purchaseService.deletePurchase(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Purchase Order Deleted successfully") {
        // this.getcompanyList()
      }
    })
  }

  // search() {
  //   if (this.titlee == "") {
  //     this.ngOnInit();
  //   } else {
  //     this.tableData = this.tableData.filter(res => {
  //       console.log(res);
  //       console.log(res.supplier.name.toLocaleLowerCase());
  //       console.log(res.supplier.name.match(this.titlee));
  //       return res.supplier.name.match(this.titlee);
  //     })
  //   }
  // }

  search() {
    if (this.titlee === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase(); 
      this.filteredData = this.tableData.filter(res => {
        const nameLower = res?.party?.name.toLocaleLowerCase(); 
        return nameLower.includes(searchTerm); 
      });
    }
  }

  key = 'id'
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }
  


  
  // convert to pdf
  generatePDF() {
    // table data with pagination
    const doc = new jsPDF();
    const title = 'Purchase Order';
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
          { header: 'Supplier Name ' },
          { header: 'Purchase Date' },
          { header: 'Purchase Number' },
          { header: 'Shipping Date' },
          { header: 'Shipping Note' },
          { header: 'Note' },
          { header: 'Status' },
          { header: 'Is Active' }
        ],
      })
    doc.save('purchaseOrder.pdf');
  }
  private formatDate(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }
  generatePDFAgain() {
    const doc = new jsPDF();
    const title = 'Purchase Order';
    doc.setFontSize(12);
    doc.setTextColor(33, 43, 54);
    doc.text(title, 82, 10);
    doc.text('', 10, 15); 
    // Pass tableData to autoTable
    autoTable(doc, {
      head: [
        ['#', 'Supplier Name ','Purchase Date','Purchase No.', 'Shipping Date','Shipping Note','Total','Status']
      ],
      body: this.tableData.map((row:any, index:number ) => [
    
        index + 1,
        row.party?.name,
       this.formatDate( row?.order_date),
        row.order_no,
        this.formatDate(row?.shipping_date),
        row.shipping_note,
        row?.total,
    row?.status,
      ]),
      theme: 'grid',
      headStyles: {
        fillColor: [255, 159, 67]
      },
      startY: 15, 
    });
    doc.save('Purchase Order.pdf');
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
    // Create a Blob from the workbook and initiate a download
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const fileName = 'purchaseOrder.xlsx';
    saveAs(blob, fileName); // Use the FileSaver.js library to initiate download
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
       //filter based on the start date and end date & also filter with the receipt_mode & receipt_method
       statusFilter:any = "";
       filterData() {
        let filteredData = this.tableData.slice(); 
        if (this.poDateForm.get('start').value && this.poDateForm.get('end').value) {
          const startDate = new Date(this.poDateForm.get('start').value);
          const endDate = new Date(this.poDateForm.get('end').value);
          filteredData = filteredData.filter((item) => {
            const supplierBillDate = new Date(item?.order_date);
            return supplierBillDate >= startDate && supplierBillDate <= endDate;
          });
        }

        if (this.shippingDateForm.get('start').value && this.shippingDateForm.get('end').value) {
          const startDate = new Date(this.shippingDateForm.get('start').value);
          const endDate = new Date(this.shippingDateForm.get('end').value);
          filteredData = filteredData.filter((item) => {
            const supplierBillDate = new Date(item?.shipping_date);
            return supplierBillDate >= startDate && supplierBillDate <= endDate;
          });
        }
        if (this.selectedPurchaseNo) {
          const searchTerm = this.selectedPurchaseNo.toLowerCase();
          filteredData = filteredData.filter((item) => {
            const aliasLower = item?.order_no.toLowerCase();
            return aliasLower.includes(searchTerm);
          });
        }
        if (this.statusFilter) {
          filteredData = filteredData.filter((item) => item?.status == this.statusFilter);
          console.log(this.statusFilter);
        }
        this.filteredData = filteredData;
      }
      clearFilters() {
        this.selectedPurchaseNo = null;
        this.shippingDate.setValue('');
        this.statusFilter=null;
        this.purchaseOrderDate.setValue('');
        this.poDateForm.reset();
        this.shippingDateForm.reset();
        this.filterData();
      }
      changePg(val: any) {
        console.log(val);
        if (val == -1) {
          this.itemsPerPage = this.tableData.length;
        }
      }
       // 18-5
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
    
    
    
    