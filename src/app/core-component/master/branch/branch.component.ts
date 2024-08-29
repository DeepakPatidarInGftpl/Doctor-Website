import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {


  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any = [];
  stateList: any;
  cityList: any;
  selectedCity: any = "";
  selectedState: any = "";
  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  constructor(private coreService: CoreService) {
    // this.QueryService.filterToggle();
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
        this.coreService.deleteBranch(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.tableData
            this.ngOnInit();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Not Deleted!',
              text: this.delRes.error,
            });
          }
        })

        // this.tableData.splice(index, 1);
      }
    });
  }
  select = false
  // active deactive
  deActivate(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Deactivate this branch!",
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
        this.coreService.BranchIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Branch is Deactived successfully',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this branch!",
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
        this.coreService.BranchIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: this.delRes?.msg,
        });
      }
    });
  }
  loader = true
  isAdd: any;
  isEdit: any;
  isDelete: any;
  userDetails: any;
  gst: string = '';
  filteredData:any = [];
  ngOnInit(): void {
    this.coreService.getBranch().subscribe(res => {
      this.tableData = res;
      this.filteredData = res;
      this.loader = false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    });

    this.getCity();
    this.getState();

    //from localstorage
    const localStorageData = JSON.parse(localStorage.getItem('auth'));
    if (localStorageData) {
      const permission = localStorageData;
      permission?.map((res: any) => {
        if (res.content_type.app_label === 'master'  && res.content_type.model === 'branch' && res.codename=='add_branch') {
          this.isAdd = res.codename;
          // console.log(this.isAdd);      
        } else if (res.content_type.app_label === 'master' && res.content_type.model === 'branch' && res.codename=='change_branch') {
          this.isEdit = res.codename;
          // console.log(this.isEdit);
        }else if (res.content_type.app_label === 'master' && res.content_type.model === 'branch' && res.codename=='delete_branch') {
          this.isDelete = res.codename;
          // console.log(this.isDelete);
        }
      });
    }
   
  }
 

  //select table row
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
  filterActive_StatusData( event : string){
    this.tableData =  this.filteredData.filter((item:any)=>event == 'Yes' ? item.is_active : !item.is_active)
}

changeState(event) {
  this.tableData =  this.filteredData.filter((item:any)=>event === item?.state?.state)
}

changeCity(event) {
  this.tableData =  this.filteredData.filter((item:any)=>event === item?.city?.city)
}

  search() {
    if (this.titlee === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.tableData = this.tableData.filter(res => {
        const includesTerm = str => (str || '').toLocaleLowerCase().includes(searchTerm);
        return [
          res?.title, res?.city?.city, res?.state?.state, res?.country?.country_name,res?.pincode?.toString()
        ].some(includesTerm);
      });
    }
  }

  key = 'id'
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }

  filterData() {
    if (this.gst === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.gst.toLocaleLowerCase();
      this.tableData = this.tableData.filter(res => {
        const nameLower = res?.gstin.toLocaleLowerCase();
        return nameLower.includes(searchTerm);
      });
    }
  }
  clearFilters() {
    this.gst = null;
    this.filterData();
  }


  // convert to pdf
  generatePDF() {
    // table data with pagination
    const doc = new jsPDF();
    const title = 'Branch List';
    doc.setFontSize(15);
    doc.setTextColor(33, 43, 54);
    doc.text(title, 10, 10);
    // autoTable(doc, { html: '#mytable' }); // here all table field downloaded
    autoTable(doc, {
      html: '#mytable',
      theme: 'grid',
        headStyles: {
          fillColor: [255, 159, 67]
        },
      columns: [
        //remove action filed
        { header: 'Sr No.', dataKey: 'srNo' },
        { header: 'Title', dataKey: 'title' },
        { header: 'GSTIN', dataKey: 'gstin' },
        { header: 'Address', dataKey: 'address' },
        { header: 'Pincode', dataKey: 'pincode' },
        { header: 'City', dataKey: 'city' },
        { header: 'State', dataKey: 'state' },
        { header: 'Country', dataKey: 'country' },
        { header: 'Is Active', dataKey: 'isActive' }
      ],
      body: this.tableData.map((product, index) => ({
        srNo: index + 1,
        title: product.title,
        gstin: product.gstin,
        address: product.address,
        isActive: product?.is_active
      })
      )

    })
    doc.save('branch.pdf');

 }

 
generatePDFAgain() {
  const doc = new jsPDF();
  const title = 'Branch List';
  doc.setFontSize(12);
  doc.setTextColor(33, 43, 54);
  doc.text(title, 82, 10);
  doc.text('', 10, 15); 
  // Pass tableData to autoTable
  autoTable(doc, {
    head: [
      ['#', 'Title','GSTIN', 'Address','Pincode','City','State','Country']
    ],
    body: this.tableData.map((row:any, index:number ) => [
      index + 1,
      row.title,
      row.gstin,
      row.address,
      row.pincode,
      row?.city?.city,
      row?.state?.state,
      row?.country?.country_name
    ]),
    theme: 'grid',
    headStyles: {
      fillColor: [255, 159, 67]
    },
    startY: 15, 
  });
  doc.save('Branch.pdf');
}

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
    const fileName = 'branch.xlsx';
    saveAs(blob, fileName); // Use the FileSaver.js library to initiate download
  }
  //print table
  // printTable(): void {
  //   const printContents = document.getElementById('mytable').outerHTML;
  //   const originalContents = document.body.innerHTML;
  //   document.body.innerHTML = printContents;
  //   window.print();
  //   document.body.innerHTML = originalContents;
  // }

  getState() {
    this.coreService.getstate().subscribe((res)=> {
      console.log(res);
      this.stateList = res;
    })
  }

  getCity() {
    this.coreService.getCity().subscribe((res)=> {
      this.cityList = res;
      console.log(res);
    })
  }

  printTable(): void {
    const tableElement = document.getElementById('mytable');
    const tableHTML = tableElement.outerHTML;
    const titleElement = document.querySelector('.titl');
    const titleHTML = titleElement.outerHTML;
    const clonedTable = tableElement.cloneNode(true) as HTMLTableElement;
    const isActiveTh = clonedTable.querySelector('th.thone:nth-child(10)');
    if (isActiveTh) {
      isActiveTh.remove();
    }
    const actionTh = clonedTable.querySelector('th.thone:last-child');
    if (actionTh) {
      actionTh.remove();
    }
    const rows = clonedTable.querySelectorAll('tr');
    rows.forEach((row) => {
      const isActiveTd = row.querySelector('td:nth-child(10)');
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
    //refresh
    window.addEventListener('afterprint', () => {
      console.log('afterprint');
     window.location.reload();
    });
    //end
    document.body.innerHTML = combinedContent;
    window.print();
    document.body.innerHTML = originalContents;
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.tableData.length;
    }
  }
}
