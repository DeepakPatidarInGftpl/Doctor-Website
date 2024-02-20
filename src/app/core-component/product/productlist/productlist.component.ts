import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
})
export class ProductlistComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any = []

  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  filteredData: any[]; // The filtered data
  selectedCategoryType: string = '';
  selectedSubcategoryType: string = '';
  selectedSubcategoryGroupType: string = '';
  selectedBrandType: string = '';
  selectedProductStoreType: string = '';
  selectedLabel:string='';
  constructor(private QueryService: QueryService, private coreService: CoreService, private cs: CompanyService, private toastr: ToastrService) {
    this.QueryService.filterToggle()
  }
  delRes: any
  confirmText(index: any, id: number) {
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
        this.coreService.deleteProduct(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
            this.tableData.splice(index, 1);
            this.ngOnInit()
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
  select = false
  // active deactive
  deActivate(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Deactivate this product!",
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
        this.coreService.productIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Product Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this product!",
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
        this.coreService.productIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'Product Is Active Successfully.',
        });
      }
    });
  }
  loader = true;

  isAscending: boolean = true;
  isAdd: any;
  isEdit: any;
  isDelete: any;
  res: any;
  userDetails: any
  ngOnInit(): void {
    this.coreService.getProducts().subscribe(res => {
      this.res = res;
      this.tableData = res;
      this.loader = false;
      // console.log(this.tableData);
      this.selectedRows = new Array(this.tableData.length).fill(false);
      this.filteredData = this.tableData.slice(); // Initialize filteredData with the original data
      this.filterData();
    })
    // console.log(this.tableData);

    // from localstorage permission
    // const localStorageData = JSON.parse(localStorage.getItem('auth'));
    // if (localStorageData && localStorageData.permission) {
    //   const permission = localStorageData.permission;
    //   permission.map((res: any) => {
    //     if (res.content_type.app_label === 'product' && res.content_type.model === 'product' && res.codename == 'add_product') {
    //       this.isAdd = res.codename;
    //       console.log(this.isAdd);
    //     } else if (res.content_type.app_label === 'product' && res.content_type.model === 'product' && res.codename == 'change_product') {
    //       this.isEdit = res.codename;
    //       console.log(this.isEdit);
    //     } else if (res.content_type.app_label === 'product' && res.content_type.model === 'product' && res.codename == 'delete_product') {
    //       this.isDelete = res.codename;
    //       console.log(this.isDelete);
    //     }
    //   });
    // }
    // permission from profile api
    this.cs.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission?.map((res: any) => {
        if (res.content_type.app_label === 'product' && res.content_type.model === 'product' && res.codename == 'add_product') {
          this.isAdd = res.codename;
          // console.log(this.isAdd);
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'product' && res.codename == 'change_product') {
          this.isEdit = res.codename;
          // console.log(this.isEdit);
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'product' && res.codename == 'delete_product') {
          this.isDelete = res.codename;
          // console.log(this.isDelete);
        }
      });
    });
this.getLabel();
    this.getCategory()
    this.getSubcategory()
    this.getSubcategoryGroup()
    this.getBrand()
  }


  categoryList: any
  getCategory() {
    this.coreService.getCategory().subscribe(res => {
      this.categoryList = res;
    })
  }
  subcategoryList: any
  getSubcategory() {
    this.coreService.getSubcategory().subscribe(res => {
      this.subcategoryList = res
    })
  }
  subcatGroupList: any
  getSubcategoryGroup() {
    this.coreService.getSubCategoryGroup().subscribe(res => {
      this.subcatGroupList = res;
    })
  }
  brandlist: any
  getBrand() {
    this.coreService.getBrand().subscribe(res => {
      this.brandlist = res
    })
  }


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



  // search() {
  //   if (this.titlee == "") {
  //     this.ngOnInit();
  //   } else {
  //     this.tableData = this.tableData.filter(res => {
  //       console.log(res);
  //       console.log(res.title.toLocaleLowerCase());
  //       console.log(res.title.toLocaleLowerCase().match(this.titlee.toLocaleLowerCase()));
  //       // return res.title.match(this.titlee);
  //       if (res.title.match(this.titlee)) {
  //         return res.title.match(this.titlee);
  //       }
  //       // else if(res.category.title.match(this.titlee)){
  //       //   return res.category.title.match(this.titlee);
  //       // }
  //       // else if(res.subcategory.title.match(this.titlee)){
  //       //   return res.subcategory.title.match(this.titlee);
  //       // }
  //       // else if(res.subcategory_group.title.match(this.titlee)){
  //       //   return res.subcategory_group.title.match(this.titlee);
  //       // }
  //       // else if(res.brand.title.match(this.titlee)){
  //       //   return res.brand.title.match(this.titlee);
  //       // }

  //     })
  //   }
  // }


  search() {
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.filteredData = this.filteredData.filter(res => {
        const nameLower = res?.title.toLocaleLowerCase();
        const label = res?.product_label?.title.toLocaleLowerCase();
        if (nameLower.match(searchTerm)) {
          return true;
        } else if (label.match(searchTerm)) {
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


  // read more or less
  sho = true;
  sho1 = false;
  sho2 = false;
  hide() {
    this.sho = false;
    this.sho1 = !this.sho1;
    this.sho2 = false;
  }
  hide1() {
    this.sho = true;
    this.sho1 = false;
    this.sho2 = !this.sho2;
  }

  // filter data
  filterData() {
    let filteredData = this.tableData.slice();
    if (this.selectedCategoryType) {
      filteredData = filteredData.filter((item) => item?.category?.title === this.selectedCategoryType);
    }
    if (this.selectedSubcategoryType) {
      filteredData = filteredData.filter((item) => item?.subcategory?.title === this.selectedSubcategoryType);
    }
    if (this.selectedSubcategoryGroupType) {
      filteredData = filteredData.filter((item) => item?.subcategory_group?.title === this.selectedSubcategoryGroupType);
    }
    if (this.selectedBrandType) {
      filteredData = filteredData.filter((item) => item?.brand?.title === this.selectedBrandType);
    }
    if (this.selectedProductStoreType) {
      filteredData = filteredData.filter((item) => item?.product_store === this.selectedProductStoreType);
    }
    //16-02
    if (this.selectedLabel) {
      filteredData = filteredData.filter((item) => item?.product_label?.title === this.selectedLabel);
    }


    this.filteredData = filteredData;
  }
  clearFilter() {
    this.selectedCategoryType = null;
    this.selectedSubcategoryType = null;
    this.selectedSubcategoryGroupType = null;
    this.selectedBrandType = null;
    this.selectedLabel=null;//16/2
    this.selectedProductStoreType = null;
    this.filterData();
  }

  // convert to pdf
  generatePDF() {
    // table data with pagination
    const doc = new jsPDF();
    const title = 'Product List';

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
          { header: 'Title' },
          { header: 'Category' },
          { header: 'Subcategory' },
          { header: 'Subcategory group' },
          { header: 'Brand' },
          { header: 'Unit' },
          { header: 'Product Store' },
          { header: 'Is Active' }
        ],
      })
    doc.save('product.pdf');

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
    const fileName = 'product.xlsx';
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
    const isActiveTh = clonedTable.querySelector('th.thone:nth-child(10)');
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
      const isActiveTd = row.querySelector('td:nth-child(10)');
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


  // label update
labelList:any[]=[];
  getLabel(){
    this.coreService.getProductLabel().subscribe((res:any)=>{
      console.log(res);
      this.labelList=res;
    })
  }
  // updateLabel(p_id: number, l_id: number) {
  //   this.coreService.updateLabel(p_id, l_id).subscribe((res: any) => {
  //     console.log(res);
  //     if (res.success) {
  //       this.toastr.success(res.msg)
  //     } else {
  //       this.toastr.success(res.msg)
  //     }
  //   }, err => {
  //     this.toastr.error(err.message)
  //   })
  // }

  updateLabel(p_id: number, l_id: number,i:number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do You Want Change The Product Label!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Change it!',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
    }).then((t) => {
      if (t.isConfirmed) {
        this.coreService.updateLabel(p_id, l_id).subscribe(res => {
        console.log(res);
          if (res.success) {
            this.loader = true;
            Swal.fire({
              icon: 'success',
              title: 'Changed!',
              text: res.msg,
            });
            this.ngOnInit();
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Not Changed!',
              text: res.error,
            });
          }
        },err=>{
          this.toastr.error(err.message)
        })

      }
    });
  }
}
