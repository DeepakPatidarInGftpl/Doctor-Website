import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { OfferService } from 'src/app/Services/offer/offer.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { HrmServiceService } from 'src/app/Services/hrm/hrm-service.service';
@Component({
  selector: 'app-list-brand-offer',
  templateUrl: './list-brand-offer.component.html',
  styleUrls: ['./list-brand-offer.component.scss']
})
export class ListBrandOfferComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any[] = [];

  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  filteredData: any[]; // The filtered data
  supplierType: string = '';
  selectedCompany: string = '';
  selectActive: any = "";
  discountType: any = "";
  businessLocation: any = "";
  customerGroup: any = "";

  constructor(private offerService: OfferService, private cs: CompanyService,private coreService: CoreService, private hrmService: HrmServiceService) {
  }

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
        this.offerService.deleteDiscount(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
            this.tableData.splice(index, 1);
          } else {
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
      text: "Do you want to Deactivate this Invoice Amount!",
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
        this.offerService.DiscountIsActive(id, '').subscribe(res => {
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
      text: "Do you want to Active this Invoice Amount!",
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
        this.offerService.DiscountIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            Swal.fire({
              icon: 'success',
              title: 'Active!',
              text: this.delRes.msg,
            });
            this.ngOnInit();
          }
        })

      }
    });
  }
  loader = true;
  isAdd: any;
  isEdit: any;
  isDelete: any;
  userDetails: any;
  ngOnInit(): void {
    this.offerService.getDiscount().subscribe((res: any) => {
      // console.log(res);
      res.forEach((res: any) => {
        if (res.discount_type === 'BasedOnBrands') {
          this.tableData.push(res);
        }
      })

      // this.tableData = res;
      console.log(this.tableData);
      
      this.loader = false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
      this.filteredData = this.tableData.slice(); // Initialize filteredData with the original data
      this.filterData();
    })

    this.cs.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission?.map((res: any) => {
        if (res.content_type.app_label === 'master' && res.content_type.model === 'discount' && res.codename == 'add_discount') {
          this.isAdd = res.codename;
          // console.log(this.isAdd);
        } else if (res.content_type.app_label === 'master' && res.content_type.model === 'discount' && res.codename == 'change_discount') {
          this.isEdit = res.codename;
          // console.log(this.isEdit);
        } else if (res.content_type.app_label === 'master' && res.content_type.model === 'discount' && res.codename == 'delete_discount') {
          this.isDelete = res.codename;
          // console.log(this.isDelete);
        }
      });
    })

    this.getMembership();
    this.getBranch();
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

  branchList: any;
  getBranch() {
    this.coreService.getBranch().subscribe(res => {
      this.branchList = res;
    })
  }
  membershipList: any;
  getMembership() {
    this.hrmService.getMembership().subscribe(res => {
      this.membershipList = res;
    })
  }

  search() {
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.filteredData = this.filteredData.filter(res => {
        const discountLower = res.discount_type.toLocaleLowerCase();
        const nameLower = res.name.toLocaleLowerCase();
        if (discountLower.match(searchTerm)) {
          return true;
        }
        else if (nameLower.match(searchTerm)) {
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

  // convert to pdf
  generatePDF() {
    // table data with pagination
    const doc = new jsPDF();
    const title = 'Brand Offer';

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
          { header: 'Discount Type' },
          { header: 'Start Date' },
          { header: 'End Date' },
          { header: 'Opening Balance' },
          { header: 'GSTIN' },
          { header: 'PanCard' },
          { header: 'Membership' },
          { header: 'Is Active' }
        ],
      })
    doc.save('dealer.pdf');
  }

  generatePDFAgain() {
    const doc = new jsPDF('landscape');
    const subtitle = 'PV';
    const title = 'Amount Wise Offer';

    doc.setFontSize(12);
    doc.setTextColor(33, 43, 54);
    doc.text(subtitle, 86, 5);
    doc.text(title, 82, 10);

    doc.text('', 10, 20); //,argin x, y

    // Pass tableData to autoTable
    autoTable(doc, {
      head: [
        ['#', 'name', 'Discount Type', 'Start Date', 'End Date', 'Business Location', 'Customers Group', 'Multiuse', 'Is Compulsory', 'Applicable For Only Coupons', 'Auto Update Price']
      ],
      body: this.filteredData.map((row: any, index: number) => [
        index + 1,
        row.name,
        row.discount_type,
        row.start_date,
        row.end_date,
        row.business_location,
        row.customers_group,
        row.multiuse,
        row.is_compulsory,
        row.applicable_for_only_coupons,
        row.auto_update_price,
      ]),
      theme: 'grid',
      headStyles: {
        fillColor: [255, 159, 67]
      },
      startY: 22, // margin top 


    });

    doc.save('amount_wise_offer.pdf');
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
    const fileName = 'brandoffer.xlsx';
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
    const isActiveTh = clonedTable.querySelector('th.thone:nth-child(11)');
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
      const isActiveTd = row.querySelector('td:nth-child(11)');
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

  // filter data
  filterData() {
    let filteredData = this.tableData.slice();
    if(this.businessLocation) {
      filteredData = this.tableData.filter((item) => item?.business_location?.title === this.businessLocation);
    }
    if(this.customerGroup) {
      filteredData = this.tableData.filter((item) => item?.customers_group?.title === this.customerGroup);
    }
    if(this.discountType) {
      filteredData = this.tableData.filter((item) => item?.discount_type === this.discountType);
    }
    if(this.selectActive) {
      filteredData = this.tableData.filter((item) => (item?.is_active).toString() === this.selectActive);
    }
    this.filteredData = filteredData;
  }
  clearFilter() {
    this.selectActive = '';
    this.discountType = '';    
    this.customerGroup = '';    
    this.businessLocation = '';    
    this.filterData();
  }

  pgChange(val: any) {
    console.warn(val, 'pg');
    if (val == -1) {
      this.itemsPerPage = this.filteredData.length;
    }

  }
}

