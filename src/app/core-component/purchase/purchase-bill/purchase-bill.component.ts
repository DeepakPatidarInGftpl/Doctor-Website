import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { DatePipe } from '@angular/common';
import { DashboardService } from 'src/app/Services/DashboardService/dashboard.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';

@Component({
  selector: 'app-purchase-bill',
  templateUrl: './purchase-bill.component.html',
  styleUrls: ['./purchase-bill.component.scss']
})
export class PurchaseBillComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any;

  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  filteredData: any[]; // The filtered data
  selectedPurchaseNo: any;
  // minDate: string = '';
  // maxDate: string = '';
  dueMinDate: string = '';
  dueMaxDate: string = '';
  supplierDate = new FormControl('');
  dueDate = new FormControl('');
  supplierBillDateForm!: FormGroup;
  dueDateForm!: FormGroup;
  minDate: Date;
  maxDate: Date;
  financialYear!: string;
  startDate: any;
  endDate: any;
  totalTaxAmount: any;
  
  constructor(private purchaseService: PurchaseServiceService,private cs:CompanyService,
    private contactService:ContactService,
    private dashboardService:DashboardService,
    private datepipe:DatePipe, private commonService: CommonServiceService) { }

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
        this.purchaseService.deletePurchaseBill(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.success) { 
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
            this.tableData.splice(index, 1);
            this.ngOnInit()
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
      text: "Do you want to Deactivate this Purchase Bill!",
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
        this.purchaseService.PurchaseBillIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Purchase Bill Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this purchase Bill!",
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
        this.purchaseService.PurchaseBillIsActive(id, '').subscribe(res => {
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

  loader=true;
  isAdd:any;
  isEdit:any
  isDelete:any;
  userDetails:any
  isAdmin = false;

  ngOnInit(): void {
    // this.purchaseService.getPurchaseBill().subscribe(res => {
    //   // console.log(res);
    //   this.tableData = res;
    //   this.loader=false;
    //   this.selectedRows = new Array(this.tableData.length).fill(false);
    //   this.filteredData = this.tableData.slice(); // Initialize filteredData with the original data
    //   this.filterData();
    // })

    //18-5
    this.financialYear = localStorage.getItem('financialYear');
    this.supplierBillDateForm = new FormGroup({
      start: new FormControl('', [Validators.required, this.commonService.dateRangeValidator(this.financialYear)]),
      end: new FormControl('', [Validators.required, this.commonService.dateRangeValidator(this.financialYear)]),
    });

    this.dueDateForm = new FormGroup({
      start: new FormControl('', [Validators.required, this.commonService.dateRangeValidator(this.financialYear)]),
      end: new FormControl('', [Validators.required, this.commonService.dateRangeValidator(this.financialYear)]),
    });

    this.commonService.validateAndClearDates(this.supplierBillDateForm, this.minDate, this.maxDate);
    this.commonService.validateAndClearDates(this.dueDateForm, this.minDate, this.maxDate);

    if (localStorage.getItem('financialYear')) {
      let fy = localStorage.getItem('financialYear');
      console.warn(JSON.parse(fy));
      let fyId = JSON.parse(fy);
      this.getPurchaseBill(fyId);
    }
    this.cs.userDetails$.subscribe((res: any) => {
      if (res?.role == 'admin') {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    });
  //18-5
    this.getBranch();
    //from localstorage permision
    // const localStorageData = JSON.parse(localStorage.getItem('auth'));
    // if (localStorageData && localStorageData.permission) {
    //   const permission = localStorageData.permission;
    //   permission.map((res: any) => {
    //     if (res.content_type.app_label === 'master' && res.content_type.model === 'purchasebill' && res.codename=='add_purchasebill') {
    //       this.isAdd = res.codename;
    //       console.log(this.isAdd);
    //     } else if (res.content_type.app_label === 'master' && res.content_type.model === 'purchasebill' && res.codename=='change_purchasebill') {
    //       this.isEdit = res.codename;
    //       console.log(this.isEdit);
    //     }else if (res.content_type.app_label === 'master' && res.content_type.model === 'purchasebill' && res.codename=='delete_purchasebill') {
    //       this.isDelete = res.codename;
    //       console.log(this.isDelete);
    //     }
    //   });
    // }
    
      // permissin from api profile
      this.cs.userDetails$.subscribe((userDetails) => {
        this.userDetails = userDetails;
        const permission = this.userDetails?.permission;
        permission?.map((res: any) => {
          if (res.content_type.app_label === 'master' && res.content_type.model === 'purchasebill' && res.codename=='add_purchasebill') {
            this.isAdd = res.codename;
            // console.log(this.isAdd);
          } else if (res.content_type.app_label === 'master' && res.content_type.model === 'purchasebill' && res.codename=='change_purchasebill') {
            this.isEdit = res.codename;
            // console.log(this.isEdit);
          }else if (res.content_type.app_label === 'master' && res.content_type.model === 'purchasebill' && res.codename=='delete_purchasebill') {
            this.isDelete = res.codename;
            // console.log(this.isDelete);
          }
        });
      });

      this.getPaymentTerms();
      this.getMaterial();
  }
  getPurchaseBill(fy:any){
    console.log(fy);
    const idString = JSON.stringify(this.selectData);
    console.log(idString);
    console.log(idString?.length);
    this.purchaseService.getPurchaseBillFY(fy,this.selectData).subscribe((res:any) => {
      // console.log(res);get
      this.tableData = res;
      res?.tax_rate.forEach(val => {
        this.totalTaxAmount += val?.taxable_amount;
      });
      
      this.loader=false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
      this.filteredData = this.tableData.slice(); 
      // Initialize filteredData with the original data
      this.filterData();
    })
  }

  paymentList: any;
  getPaymentTerms() {
    this.contactService.getPaymentTerms().subscribe(res => {
      // console.log(res);
      this.paymentList = res;
    })
  }
materialList: any;
  getMaterial() {
    this.purchaseService.getMaterial().subscribe(res => {
      // console.log(res);
      this.materialList = res;
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
    this.purchaseService.deleteMaterial(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "PURCHASE BILL Deleted successfully") {
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
      this.filteredData = this.filteredData.filter(res => {
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
  private formatDate(date: Date): string {
    return this.datepipe.transform(date, 'yyyy-MM-dd') || '';
  }

    // convert to pdf
    generatePDF() {
      // table data with pagination
      const doc = new jsPDF();
      const title = 'GRN';
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
            { header: 'Supplier Bill Date' },
            { header: 'Refrence Bill No' },
            { header: 'Material Inward No' },
            { header: 'Due Date' },
            { header: 'Reverse Charge' },
            { header: 'Shipping Date' },
            { header: 'Dealer Price' },
            { header: 'Employee Price' },
            { header: 'Status' },
            { header: 'Is Active' }
          ],
        })
      doc.save('grn.pdf');
    }
    generatePDFAgain() {
      const doc = new jsPDF();
      const title = 'Goods Received Note  LIST';
      doc.setFontSize(12);
      doc.setTextColor(33, 43, 54);
      doc.text(title, 82, 10);
      doc.text('', 10, 15); 
      // Pass tableData to autoTable
      autoTable(doc, {
        head: [
          ['#', 'Supplier Name ','Supplier Bill Date','Supplier Bill No', 'Refrence Bill No','Inward No','Payment Term','Due Date','Reverse Charge','Shipping Date','Status']
        ],
        body: this.tableData.map((row:any, index:number ) => [
          index + 1,
          row.party?.name,
          this.formatDate(row?.supplier_bill_date),
          row.supplier_bill_no,
          row.refrence_bill_no,
          row.material_inward_no?.material_inward_no,
      row.payment_term?.title,
      this.formatDate(row?.due_date),
      row.reverse_charge,
      this.formatDate(row?.shipping_date),
      row.status
        ]),
        theme: 'grid',
        headStyles: {
          fillColor: [255, 159, 67]
        },
        startY: 15, 
      });
      doc.save('Goods Received Note .pdf');
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
      const fileName = 'grn.xlsx';
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
       filterMaterial:any;
       filterPaymentTerms:any;
       statusFilter:any;
       reverseChargeFilter:any;
         filterData() {
          let filteredData = this.tableData.slice(); 
          if (this.supplierBillDateForm.get('start').value && this.supplierBillDateForm.get('end').value) {
            const startDate = new Date(this.supplierBillDateForm.get('start').value);
            const endDate = new Date(this.supplierBillDateForm.get('end').value);
            filteredData = filteredData.filter((item) => {
              const supplierBillDate = new Date(item?.supplier_bill_date);
              return supplierBillDate >= startDate && supplierBillDate <= endDate;
            });
          }

          if (this.dueDateForm.get('start').value && this.dueDateForm.get('end').value) {
            const startDate = new Date(this.dueDateForm.get('start').value);
            const endDate = new Date(this.dueDateForm.get('end').value);
            filteredData = filteredData.filter((item) => {
              const supplierBillDate = new Date(item?.due_date);
              return supplierBillDate >= startDate && supplierBillDate <= endDate;
            });
          }
          if (this.selectedPurchaseNo) {
            const searchTerm = this.selectedPurchaseNo.toLowerCase();
            filteredData = filteredData.filter((item) => {
              const aliasLower = item?.supplier_bill_no.toLowerCase();
              return aliasLower.includes(searchTerm);
            });
          }
          if (this.filterMaterial) {
            filteredData = filteredData.filter((item) => item?.material_inward_no?.material_inward_no === this.filterMaterial);
          }
          if (this.filterPaymentTerms) {
            filteredData = filteredData.filter((item) => item?.payment_term?.title === this.filterPaymentTerms);
          }
          if (this.statusFilter) {
            filteredData = filteredData.filter((item) => item?.status === this.statusFilter);
          }
          if (this.reverseChargeFilter) {
            filteredData = filteredData.filter((item) => item?.reverse_charge === this.reverseChargeFilter);
          }
          this.filteredData = filteredData;
        }
        clearFilters() {
          this.selectedPurchaseNo = null;
          this.supplierDate.setValue('');
          this.dueDate.setValue('');
          this.supplierBillDateForm.reset();
          this.dueDateForm.reset();
          this.filterPaymentTerms=null;
          this.filterMaterial=null
          this.statusFilter=null;
          this.reverseChargeFilter=null;
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
          this.dashboardService.getBranch().subscribe((res: any) => {
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
      
      
