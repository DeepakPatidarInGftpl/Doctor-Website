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
  public tableData: any = []

  branchForm!: FormGroup;
  get f() {
    return this.branchForm.controls;
  }
  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  constructor(private coreService: CoreService, private QueryService: QueryService, private fb: FormBuilder, private toastr: ToastrService, private router: Router,
    private companyService: CompanyService) {
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
          if (this.delRes.msg == "Branch Deleted successfully") {
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
          if (this.delRes.msg == "Branch Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Branch Is Deactivate Successfully.',
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
          if (this.delRes.msg == "Branch Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'Branch Is Active Successfully.',
        });
      }
    });
  }
  form!: FormGroup;
  loader = true
  isAdd: any;
  isEdit: any;
  isDelete: any;
  userDetails: any;
  gst: string = '';
  filteredData = [];
  ngOnInit(): void {
    this.form = this.fb.group({
      img: new FormControl('')
    })

    this.branchForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      gstin: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}")]),
      // address: new FormControl('', [Validators.required]),
      country: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
      pincode: new FormControl('', [Validators.required]),
      address: new FormControl('')
    })

    this.coreService.getBranch().subscribe(res => {
      this.tableData = res;
      this.loader = false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    });

    this.getAddress();

    //from localstorage
    // const localStorageData = JSON.parse(localStorage.getItem('auth'));
    // if (localStorageData && localStorageData.permission) {
    //   const permission = localStorageData.permission;
    //   permission.map((res: any) => {
    //     if (res.content_type.app_label === 'master'  && res.content_type.model === 'branch' && res.codename=='add_branch') {
    //       this.isAdd = res.codename;
    //       console.log(this.isAdd);      
    //     } else if (res.content_type.app_label === 'master' && res.content_type.model === 'branch' && res.codename=='change_branch') {
    //       this.isEdit = res.codename;
    //       console.log(this.isEdit);
    //     }else if (res.content_type.app_label === 'master' && res.content_type.model === 'branch' && res.codename=='delete_branch') {
    //       this.isDelete = res.codename;
    //       console.log(this.isDelete);
    //     }
    //   });
    // }
    //from profile api
    this.companyService.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission?.map((res: any) => {
        if (res.content_type.app_label === 'master' && res.content_type.model === 'branch' && res.codename == 'add_branch') {
          this.isAdd = res.codename;
          console.log(this.isAdd);
        } else if (res.content_type.app_label === 'master' && res.content_type.model === 'branch' && res.codename == 'change_branch') {
          this.isEdit = res.codename;
          console.log(this.isEdit);
        } else if (res.content_type.app_label === 'master' && res.content_type.model === 'branch' && res.codename == 'delete_branch') {
          this.isDelete = res.codename;
          console.log(this.isDelete);
        }
      });
    });
    this.getCountry();
  }
  addressList: any;
  getAddress() {
    this.coreService.getAddress().subscribe(res => {
      console.log(res);
      this.addressList = res;
    })
  }
  country: any
  getCountry() {
    this.coreService.countryList().subscribe(res => {
      this.country = res;
    })
  }
  state: any;
  selectState(val: any) {
    console.log(val);
    this.coreService.getStateByCountryId(val).subscribe(res => {
      this.state = res;
      console.log(this.state);
    })
  }
  city: any;
  selectCity(val: any) {
    console.log(val);
    this.coreService.getCityByStateId(val).subscribe(res => {
      this.city = res;
    })
  }
  add() {
    console.log('jj');
    console.log(this.form.value);
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

  addRes: any

  loaders = false;
  submit() {
    console.log(this.branchForm.value);
    console.log(this.id);

    if (this.branchForm.valid) {
      this.loaders = true;
      this.coreService.addBranch(this.branchForm.value).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "BRANCH CREATED SUCESSFULLY") {
          this.loaders = false;
          this.toastr.success(this.addRes.msg)
          this.branchForm.reset()
          // window.location.reload();
          this.ngOnInit()
        } else {
          this.loaders = false
        }
      }, err => {
        this.loader = false
        console.log(err.error.gst);
      })
    } else {
      this.branchForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  update() {
    if (this.branchForm.valid) {
      this.loaders = true;
      this.coreService.updateBranch(this.branchForm.value, this.id).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Branch Updated Sucessfully") {
          this.loaders = false;
          this.toastr.success(this.addRes.msg)
          this.branchForm.reset()
          this.addForm = true
          // window.location.reload()
          this.ngOnInit()
        } else {
          this.loaders = false
        }
      }, err => {
        this.loaders = false;
        console.log(err.error.gst);
      })
    } else {
      this.branchForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  get title() {
    return this.branchForm.get('title')
  }
  get gstin() {
    return this.branchForm.get('gstin')
  }
  get address() {
    return this.branchForm.get('address')
  }
  get countryy() {
    return this.branchForm.get('country')
  }
  get statee() {
    return this.branchForm.get('state')
  }
  get cityy() {
    return this.branchForm.get('city')
  }
  get pincode() {
    return this.branchForm.get('pincode')
  }

  addForm = true
  id: any
  editFormdata: any
  editForm(id: number) {
    this.id = id
    this.coreService.getBranchById(id).subscribe(res => {
      console.log(res);
      if (id == res.id) {
        this.addForm = false;
        this.branchForm.patchValue(res);
        this.branchForm.get('country')?.patchValue(res.country)
        this.selectState(res?.country)
        this.branchForm.get('state')?.patchValue(res.state)
        this.selectCity(res?.state)
        this.branchForm.get('city')?.patchValue(res.city)
        this.editFormdata = res
      }
    })
  }
  openaddForm() {
    this.addForm = true;
    this.branchForm.reset();
  }
  // search() {
  //   if (this.titlee == "") {
  //     this.ngOnInit();
  //   } else {
  //     this.tableData = this.tableData.filter(res => {
  //       console.log(res);
  //       console.log(res.title.toLocaleLowerCase());
  //       console.log(res.title.match(this.titlee));
  //       return res.title.match(this.titlee);
  //     })
  //   }
  // }

  search() {
    if (this.titlee === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.tableData = this.tableData.filter(res => {
        const nameLower = res?.title?.toLocaleLowerCase();
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

    //print complete data

    // const doc = new jsPDF();
    //   autoTable(doc, {
    //     // styles: { fillColor: [255, 0, 0] },
    //     theme: 'grid', 
    //     headStyles: {
    //       fillColor: [255, 159, 67] 
    //   },
    //     head: [['Sr No.', 'Title', 'GSTIN', 'Address', 'Is Active']], 
    //     body: this.tableData.map((product, index) => [
    //       index + 1,
    //       product.title,
    //       product.gstin,
    //       product.address,
    //       product.is_active ? 'Active' : 'Deactive'
    //     ]),
    //   });
    //   doc.save('table.pdf');
  }

  // print all the data 
  // exportToExcel(): void {
  //   const dataToExport = this.tableData.map((item,index) => {
  //     return {
  //       'Sr. No.': index+1,
  //       'Title': item.title,
  //       'GSTIN':item.gstin,
  //       'Address':item.address,
  //       "Status": (item.is_active == true)?"Active":"Deactivate",
  //     };
  //   });
  //   const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
  //   const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  //   // Create a Blob from the workbook and initiate a download
  //   const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  //   const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  //   const fileName = 'data.xlsx';
  //   saveAs(blob, fileName); // Use the FileSaver.js library to initiate download
  // }

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
    const isActiveTh = clonedTable.querySelector('th.thone:nth-child(6)');
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
      const isActiveTd = row.querySelector('td:nth-child(6)');
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

    // Replace the content of the body with the combined content
    document.body.innerHTML = combinedContent;
    window.print();

    // Restore the original content of the body
    document.body.innerHTML = originalContents;
  }

}
