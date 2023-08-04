import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Account } from 'src/app/interfaces/account';
import { PosDashboardService } from 'src/app/Services/pos-dashboard.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
// import html2canvas from 'html2canvas';
// import { jsPDF } from 'jspdf';
@Component({
  selector: 'app-list-reciept',
  templateUrl: './list-reciept.component.html',
  styleUrls: ['./list-reciept.component.scss']
})
export class ListRecieptComponent implements OnInit {
  // @ViewChild('invoice') invoiceElement!: ElementRef;

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any | Account

  titlee: any;
  name: any
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  constructor(private posService: PosDashboardService, private QueryService: QueryService, private cs: CompanyService) {
    this.QueryService.filterToggle()
  }

  delRes: any
  // confirmText(index: any, id: any) {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!',
  //     buttonsStyling: true,
  //     customClass: {
  //       confirmButton: 'btn btn-primary',
  //       cancelButton: 'btn btn-danger ml-1',
  //     },
  //   }).then((t) => {
  //     if (t.isConfirmed) {
  //       this.coreService.deleteCompanyBank(id).subscribe(res => {
  //         this.delRes = res
  //         if (this.delRes.msg == "Company Bank Deleted successfully") {
  //           this.ngOnInit();
  //           Swal.fire({
  //             icon: 'success',
  //             title: 'Deleted!',
  //             text: this.delRes.msg,
  //           });
  //           this.tableData.splice(index, 1);
  //         }else {
  //           Swal.fire({
  //             icon: 'error',
  //             title: 'Not Deleted!',
  //             text: this.delRes.error,
  //           });
  //         }
  //       })
  //     }
  //   });
  // }
  // select=false
  //  // active deactive
  //  deActivate(index: any, id: any) {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "Do you want to Deactivate this company bank!",
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, Deactivate it!',
  //     buttonsStyling: true,
  //     customClass: {
  //       confirmButton: 'btn btn-primary',
  //       cancelButton: 'btn btn-danger ml-1',
  //     },
  //   }).then((t) => {
  //     if (t.isConfirmed) {
  //       this.coreService.CompanyBankIsActive(id,'').subscribe(res => {
  //         this.delRes = res
  //         if (this.delRes.msg == "Company Bank Is active Updated Successfully") {
  //           this.ngOnInit()
  //         }
  //       })
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Deactivate!',
  //         text: 'Company Bank Is Deactivate Successfully.',
  //       });
  //     }
  //   });
  // }
  // Active(index: any, id: any) {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "Do you want to Active this Company Bank!",
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, Active it!',
  //     buttonsStyling: true,
  //     customClass: {
  //       confirmButton: 'btn btn-primary',
  //       cancelButton: 'btn btn-danger ml-1',
  //     },
  //   }).then((t) => {
  //     if (t.isConfirmed) {
  //       this.coreService.CompanyBankIsActive(id,'').subscribe(res => {
  //         this.delRes = res
  //         if (this.delRes.msg == "Company Bank Is active Updated Successfully") {
  //           this.ngOnInit()
  //         }
  //       })
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Active!',
  //         text: 'Company Bank Is activate Successfully.',
  //       });
  //     }
  //   });
  // }
  loader = true;
  isAdd: any;
  isEdit: any;
  isDelete: any;
  userDetails: any;

  //filter
  startDate: string;
  endDate: string;
  filteredData: any[]; // The filtered data
  selectedReceiptMode: string = '';
  selectedReceiptMethod: string = '';

  ngOnInit(): void {
    this.posService.getRecipt().subscribe(res => {
      this.tableData = res;
      this.loader = false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
      this.filteredData = this.tableData.slice(); // Initialize filteredData with the original data
      this.filterData();
    });

    // permission from localstorage
    // const localStorageData = JSON.parse(localStorage.getItem('auth'));
    // if (localStorageData && localStorageData.permission) {
    //   const permission = localStorageData.permission;
    //   permission.map((res: any) => {
    //     if (res.content_type.app_label === 'pos' && res.content_type.model === 'receipt' && res.codename == 'add_receipt') {
    //       this.isAdd = res.codename;
    //       console.log(this.isAdd);
    //     } else if (res.content_type.app_label === 'pos' && res.content_type.model === 'receipt' && res.codename == 'change_receipt') {
    //       this.isEdit = res.codename;
    //       console.log(this.isEdit);
    //     } else if (res.content_type.app_label === 'pos' && res.content_type.model === 'receipt' && res.codename == 'delete_receipt') {
    //       this.isDelete = res.codename;
    //       console.log(this.isDelete);
    //     }
    //   });
    // }

    // permission from profile api
    this.cs.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission.map((res: any) => {
        if (res.content_type.app_label === 'pos' && res.content_type.model === 'receipt' && res.codename == 'add_receipt') {
          this.isAdd = res.codename;
          console.log(this.isAdd);
        } else if (res.content_type.app_label === 'pos' && res.content_type.model === 'receipt' && res.codename == 'change_receipt') {
          this.isEdit = res.codename;
          console.log(this.isEdit);
        } else if (res.content_type.app_label === 'pos' && res.content_type.model === 'receipt' && res.codename == 'delete_receipt') {
          this.isDelete = res.codename;
          console.log(this.isDelete);
        }
      });
    });
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
  //     const searchTerm = this.titlee.toLocaleLowerCase();
  //     this.tableData = this.tableData.filter(res => {
  //       console.log(res);

  //       const nameLower = res?.customer?.name.toLocaleLowerCase();
  //       const companyNameLower = res.receipt_method.toLocaleLowerCase();
  //       if (nameLower.match(searchTerm)) {
  //         return true;
  //       } else if (companyNameLower.match(searchTerm)) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   }
  // }

  search() {
    if (this.titlee === undefined || this.titlee === null) {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.filteredData = this.tableData.filter(res => {
        const nameLower = res?.customer?.name?.toString()?.toLocaleLowerCase();
        return nameLower?.includes(searchTerm) || !this.titlee;
      });
    }
  }


  key = 'id'
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }

  //filter based on the start date and end date & also filter with the 
  filterData() {
    let filteredData = this.tableData.slice(); // copy of the original data
    if (this.startDate && this.endDate) {
      const startDate = new Date(this.startDate).getTime();
      const endDate = new Date(this.endDate).getTime();
      filteredData = filteredData.filter((item) => {
        const receiptDate = new Date(item.receipt_date).getTime();
        return receiptDate >= startDate && receiptDate <= endDate;
      });
    }
    if (this.selectedReceiptMode) {
      filteredData = filteredData.filter((item) => item.receipt_mode === this.selectedReceiptMode);
    }
    if (this.selectedReceiptMethod) {
      filteredData = filteredData.filter((item) => item.receipt_method === this.selectedReceiptMethod);
    }
    this.filteredData = filteredData;
  }



  clearDateRange() {
    this.startDate = null;
    this.endDate = null;
    this.filterData();
    this.clearReceiptFilters();
  }

  clearReceiptFilters() {
    this.selectedReceiptMode = null;
    this.selectedReceiptMethod = null;
    this.filterData();
  }


  // printInvoice() {
  //   // Make the element temporarily visible
  //   //this.renderer.setStyle(this.invoiceElement.nativeElement, 'display', 'block');

  //   // Access the element and retrieve its width
  //   const elementWidth = this.invoiceElement.nativeElement.offsetWidth;
  //   const elementHeight = this.invoiceElement.nativeElement.offsetHeight;
  //   console.log('Element width:', elementWidth);

  //   // Hide the element again
  //   //this.renderer.setStyle(this.invoiceElement.nativeElement, 'display', 'none');

  //   const invoice = this.invoiceElement.nativeElement;

  //   const htmlWidth = elementWidth;
  //   const htmlHeight = elementHeight;

  //   const topLeftMargin = 15;

  //   let pdfWidth = htmlWidth + (topLeftMargin * 2);
  //   let pdfHeight = (pdfWidth * 1.5) + (topLeftMargin * 2);

  //   const canvasImageWidth = htmlWidth;
  //   const canvasImageHeight = htmlHeight;

  //   const totalPDFPages = Math.ceil(htmlHeight / pdfHeight) - 1;

  //   html2canvas(invoice).then(canvas => {

  //     // canvas.getContext('2d');
  //     // const imgData = canvas.toDataURL("image/jpeg", 1.0);
  //     // let pdf = new jsPDF('p', 'pt', [pdfWidth, pdfHeight]);
  //     // pdf.addImage(imgData, 'png', topLeftMargin, topLeftMargin, canvasImageWidth, canvasImageHeight);

  //     // for (let i = 1; i <= totalPDFPages; i++) {
  //     //   pdf.addPage([pdfWidth, pdfHeight], 'p');
  //     //   pdf.addImage(imgData, 'png', topLeftMargin, - (pdfHeight * i) + (topLeftMargin * 4), canvasImageWidth, canvasImageHeight);
  //     // }

  //     // pdf.save(Document ${new Date().toLocaleString()}.pdf);
  //     const contentDataURL = canvas.toDataURL('image/png')
  //     let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
  //     var width = pdf.internal.pageSize.getWidth();
  //     var height = canvas.height * width / canvas.width;
  //     pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height)
  //     pdf.save(invoice_1); // Generated PDF
  //     //this.renderer.setStyle(this.invoiceElement.nativeElement, 'display', 'none');

  //   });
  // }
}


