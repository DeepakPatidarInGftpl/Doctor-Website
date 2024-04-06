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
  date:any
  constructor(private purchaseService: PurchaseServiceService,private cs:CompanyService,
    private contactService:ContactService,
    private datepipe:DatePipe) { }

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
  ngOnInit(): void {
    this.purchaseService.getPurchaseBill().subscribe(res => {
      // console.log(res);
      this.tableData = res;
      this.loader=false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
      this.filteredData = this.tableData.slice(); // Initialize filteredData with the original data
      this.filterData();
    })
    
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
      // Get the table element and its HTML content
      const tableElement = document.getElementById('mytable');
      const tableHTML = tableElement.outerHTML;
    
      // Get the title element and its HTML content
      const titleElement = document.querySelector('.titl');
      const titleHTML = titleElement.outerHTML;
    
      // Clone the table element to manipulate
      const clonedTable = tableElement.cloneNode(true) as HTMLTableElement;
    
      // Remove the "Is Active" column header from the cloned table
      const isActiveTh = clonedTable.querySelector('th.thone:nth-child(12)');
      if (isActiveTh) {
        isActiveTh.remove();
      }
    
      // Remove the "Action" column header from the cloned table
      const actionTh = clonedTable.querySelector('th.thone:last-child');
      if (actionTh) {
        actionTh.remove();
      }
    
      // Loop through each row and remove the "Is Active" column and "Action" column data cells
      const rows = clonedTable.querySelectorAll('tr');
      rows.forEach((row) => {
        // Remove the "Is Active" column data cell
        const isActiveTd = row.querySelector('td:nth-child(12)');
        if (isActiveTd) {
          isActiveTd.remove();
        }
    
        // Remove the "Action" column data cell
        const actionTd = row.querySelector('td:last-child');
        if (actionTd) {
          actionTd.remove();
        }
      });
    
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
         //filter based on the start date and end date & also filter with the receipt_mode & receipt_method
       filterMaterial:any;
       filterPaymentTerms:any;
       statusFilter:any;
       dueDate:any;
       reverseChargeFilter:any;
         filterData() {
          let filteredData = this.tableData.slice(); 
          if (this.date) {
            const selectedDate = new Date(this.date).toISOString().split('T')[0];
            filteredData = filteredData.filter((item) => {
              const receiptDate = new Date(item?.supplier_bill_date).toISOString().split('T')[0];
              return receiptDate === selectedDate;
            });
          }
          if (this.dueDate) {
            const selectedDate = new Date(this.dueDate).toISOString().split('T')[0];
            filteredData = filteredData.filter((item) => {
              const receiptDate = new Date(item?.due_date).toISOString().split('T')[0];
              return receiptDate === selectedDate;
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
          this.date=null;
          this.filterPaymentTerms=null;
          this.filterMaterial=null
          this.statusFilter=null;
          this.dueDate=null;
          this.reverseChargeFilter=null;
          this.filterData();
        }
        changePg(val: any) {
          console.log(val);
          if (val == -1) {
            this.itemsPerPage = this.tableData.length;
          }
        }
}