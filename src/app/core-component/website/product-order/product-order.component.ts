import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { WebsiteService } from 'src/app/Services/website/website.service';

import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DashboardService } from 'src/app/Services/DashboardService/dashboard.service';
@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.scss']
})
export class ProductOrderComponent implements OnInit {

  public tableData: any
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false

  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;

  dateRangeOptions = [
    { label: 'Today', value: 'today' },
    { label: 'Yesterday', value: 'yesterday' },
    { label: 'This Week', value: 'thisWeek' },
    { label: 'This Month', value: 'thisMonth' },
    { label: 'Last Month', value: 'lastMonth' },
    { label: 'Last 15 Days', value: 'last15Days' },
    { label: 'Last 30 Days', value: 'last30Days' },
    { label: 'This Quarter', value: 'thisQuarter' },
    { label: 'Last Quarter', value: 'lastQuarter' },
    { label: 'This Financial Year', value: 'thisFinancialYear' },
    { label: 'Last Financial Year', value: 'lastFinancialYear' },
  ];

  constructor(private websiteService: WebsiteService, private QueryService: QueryService,
    private fb: FormBuilder, private toastr: ToastrService, private datePipe: DatePipe, private dashboardService: DashboardService) {
    this.QueryService.filterToggle()
  }


  loader = true;
  isAdd: any;
  isEdit: any;
  isDelete: any;
  acceptForm: FormGroup;
  get f() {
    return this.acceptForm.controls;
  }
  awdForm: FormGroup;
  get a() {
    return this.awdForm.controls;
  }
  addressForm: FormGroup;
  get u() {
    return this.addressForm.controls;
  }
  labelForm: FormGroup;
  invoiceForm: FormGroup;
  campaignOne: FormGroup;
  ngOnInit(): void {
    //date range
    // const today = new Date();
    // const month = today.getMonth();
    // const year = today.getFullYear();
    // const startDate = new Date(today);
    // startDate.setDate(today.getDate() - 29);

    // const formattedStartDate = this.formatDate(startDate);
    // const formattedToday = this.formatDate(today);
    // campaignOne
    this.campaignOne = new FormGroup({
      start: new FormControl(''),
      end: new FormControl(''),
    });
    //end
    this.getBranch();
    this.acceptForm = this.fb.group({
      length: new FormControl('', [Validators.min(1)]),
      breadth: new FormControl('', [Validators.min(1)]),
      height: new FormControl('', [Validators.min(1)]),
      weight: new FormControl('', [Validators.required, Validators.min(1)]),
      branch: new FormControl('', [Validators.required, Validators.min(1)]),
      id: new FormControl('', [Validators.required, Validators.min(1)]),
    });
    //awd 
    this.awdForm = this.fb.group({
      shipment_id: new FormControl('', ),
      courier_id: new FormControl('', )
    });
    //label form
    this.labelForm = this.fb.group({
      shipment_id: new FormControl('', [Validators.required]),
      courier_id: new FormControl('', [Validators.required])
    });
    //invoice form
    this.invoiceForm = this.fb.group({
      shipment_id: new FormControl('', [Validators.required]),
      courier_id: new FormControl('', [Validators.required])
    });
    // update address form
    this.addressForm = this.fb.group({
      web_order_id: new FormControl('', ),
      order_id: new FormControl('', ),
      name: new FormControl('', ),
      email: new FormControl('', ),
      mobile_no: new FormControl('', ),
      alternative_mobile_no: new FormControl('', ),
      city: new FormControl('', ),
      state: new FormControl('', ),
      country: new FormControl('', ),
      address_type: new FormControl('Shipping', ),
      line1: new FormControl('', ),
      line2: new FormControl('', ),
      address: new FormControl('', ),
    });

    // filter api
    this.websiteService.getProductOrderByStatus('New').subscribe(res => {
      this.tableData = res;
      this.loader = false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
      this.filteredData = this.tableData.slice(); // Initialize filteredData with the original data
      console.log(this.filteredData,' console.log(this.filteredData);');
      this.filterData();
    });
    
    //all list api
    // this.websiteService.getProductOrder().subscribe(res => {
    //   // console.log(res);
    //   this.tableData = res;
    //   this.loader = false;
    //   this.selectedRows = new Array(this.tableData.length).fill(false);
    // })
    // console.log(this.tableData);  
  }

  changeApiStatus(status: any) {
    console.warn(status);
    console.warn(status.tab.textLabel);
    this.tableData=null;
    this.filteredData=null;
    this.titlee='';
    this.loader=true;
    if (status.tab.textLabel == 'All') {
      this.websiteService.getProductOrder().subscribe(res => {
        this.tableData = res;
        this.loader = false;
        this.selectedRows = new Array(this.tableData.length).fill(false);
        this.filteredData = this.tableData.slice(); // Initialize filteredData with the original data
        console.log(this.filteredData,' console.log(this.filteredData);');
        this.filterData();
      });
    } else {
      this.websiteService.getProductOrderByStatus(status.tab.textLabel).subscribe((res:any) => {
        this.tableData = res;
        console.log(this.tableData);
        this.loader = false;
        this.selectedRows = new Array(this.tableData.length).fill(false);
        this.selectedRows = new Array(this.tableData.length).fill(false);
        console.log(this.filteredData,' console.log(this.filteredData);');
        this.filteredData = this.tableData.slice(); // Initialize filteredData with the original data
        this.filterData();
      });
    }
  }
  allSelected: boolean = false;
  selectedRows: boolean[]
  selectAlll() {
    this.selectedRows.fill(this.allSelected);
  }

  select = false
  selectAll(initChecked: boolean) {
    if (!initChecked) {
      this.filteredData.forEach((f: any) => {
        f.isSelected = true
      })
    } else {
      this.filteredData.forEach((f: any) => {
        f.isSelected = false
      })
    }
  }

  search() {
    if (this.titlee === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.filteredData = this.filteredData.filter(res => {
        const nameLower = res?.user?.username.toString().toLocaleLowerCase();
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
  private formatDate(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }

  generatePDFAgain() {
    const doc = new jsPDF();
    const title = 'Product Order';
    doc.setFontSize(12);
    doc.setTextColor(33, 43, 54);
    doc.text(title, 82, 10);
    doc.text('', 10, 15);
    // Pass tableData to autoTable
    autoTable(doc, {
      head: [
        ['#', ' Status','User','Order Type','Payment Type','Payment Status','Online Order Id','Order Id','Shipment Id','Order Date', 'Final Amount']
      ],
      body: this.filteredData.map((row: any, index: number) => [
        index + 1,
        row.status,
        row.user?.username,
        row.address_type,
        row.payment_type,
        row.payment_status,
        row.online_order_id,
        row.shiprocket_order_id,
        row.shiprocket_shipment_id,
        this.formatDate(row.order_date),
        row.final_amount,
      ]),
      theme: 'grid',
      headStyles: {
        fillColor: [255, 159, 67]
      },
      startY: 15,
    });
    doc.save('Product _Order .pdf');
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
    const fileName = 'productOrder.xlsx';
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
    const isActiveTh = clonedTable.querySelector('th.thone:nth-child(15)');
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
      const isActiveTd = row.querySelector('td:nth-child(15)');
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
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.tableData.length;
    }
  }

  // modal
  isModalOpen = false;
  p_id: any;
  openModalBatch(product: any) {
    this.p_id = product.id;
    this.acceptForm.get('id').patchValue(this.p_id);
    const modal = document.getElementById('acceptModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
      //blur bg
      this.isModalOpen = true;
      this.websiteService.setCheckBlur(true);
    }
  }
  closeModalBatch() {
    const modal = document.getElementById('acceptModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
      this.acceptForm.reset();
      this.isModalOpen = false;
      this.websiteService.setCheckBlur(false);
    }
  }
  branchList: any;
  getBranch() {
    this.dashboardService.getBranch().subscribe((res: any) => {
      this.branchList = res;
    })
  }

  get length() {
    return this.acceptForm.get('length');
  }
  get breadth() {
    return this.acceptForm.get('breadth');
  }
  get height() {
    return this.acceptForm.get('height');
  }
  get weight() {
    return this.acceptForm.get('weight');
  }
  get branch() {
    return this.acceptForm.get('branch');
  }

  loaders = false
  acceptSubmit() {
    console.warn(this.acceptForm.value);
    let formData = new FormData();
    formData.append('length', this.acceptForm.get('length')?.value);
    formData.append('breadth', this.acceptForm.get('breadth')?.value);
    formData.append('height', this.acceptForm.get('height')?.value);
    formData.append('weight', this.acceptForm.get('weight')?.value);
    formData.append('branch', this.acceptForm.get('branch')?.value);
    formData.append('id', this.acceptForm.get('id')?.value);

    if (this.acceptForm.valid) {
      this.loaders = true
      this.websiteService.addAcceptOrder(formData).subscribe((res: any) => {
        console.log(res);
        this.loaders = false;
        if (res.success) {
          this.toastr.success(res.msg);
          this.closeModalBatch();
          this.ngOnInit();
        }
        if (res.status == false) {
          this.toastr.error(res.error?.message);
          this.loaders = false;
          if (res.error.order_date) {
            this.loaders = false;
            this.toastr.error(res.error?.order_date[0]);
          }
        }
      }, err => {
        this.loaders = false;
        this.toastr.error()
      });
    } else {
      this.loaders = false;
      this.acceptForm.markAllAsTouched();
    }
  }
  delRes: any;
  rejectOrder(id: any) {
    console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: "Do You Want To Reject Order!",
      allowEnterKey: false,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Reject it!',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
    }).then((t) => {
      if (t.isConfirmed) {
        this.websiteService.rejectOrder(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            Swal.fire({
              icon: 'success',
              title: 'Rejected!',
              text: this.delRes.msg,
            });
            this.ngOnInit();
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Not Rejected!',
              text: this.delRes.error,
            });
          }
        })
      }
    });
  }


  // courier modal
  openModalCourier(product: any) {
    console.log(product);
    this.awdForm.patchValue({
      shipment_id: parseInt(product?.shiprocket_shipment_id),
    })
    console.log(this.awdForm.value);
    this.getServiceAvility(product.shipping_address)
    const modal = document.getElementById('courierModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
      //blur bg
      this.isModalOpen = true;
      this.websiteService.setCheckBlur(true);
    }
  }
  closeModalCourier() {
    const modal = document.getElementById('courierModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
      this.isModalOpen = false;
      this.websiteService.setCheckBlur(false);
    }
  }

  // assign awd
  openModalAssignAWD(courier: any) { 
    this.awdForm.patchValue({
      courier_id: parseInt(courier?.courier_company_id),
    });
    const modal = document.getElementById('awdModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
      //blur bg
      this.isModalOpen = true;
      this.websiteService.setCheckBlur(true);
      this.closeModalCourier();
    }
  }
  closeModalAssignAWD() {
    const modal = document.getElementById('awdModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
      this.isModalOpen = false;
      this.websiteService.setCheckBlur(false);
    }
  }

  // courier service avility api
  serviceAbilityList: any;
  loaderPincode=true
  getServiceAvility(ShippingAdd: any) {
    this.websiteService.getServiceAvility(ShippingAdd.pincode).subscribe((res: any) => {
      this.serviceAbilityList = res;
      this.loaderPincode=false;
    })
  }
  // awd form
  get courier_id() {
    return this.awdForm.get('courier_id');
  }
  get shipment_id() {
    return this.awdForm.get('shipment_id');
  }
  AWDSubmit() {
    console.warn(this.awdForm.value);
    let formData = new FormData();
    formData.append('shipment_id', this.awdForm.get('shipment_id')?.value);
    formData.append('courier_id', this.awdForm.get('courier_id')?.value);
    if (this.awdForm.valid) {
      this.loaders = true
      this.websiteService.addAWD(formData).subscribe((res: any) => {
        console.log(res);
        this.loaders = false;
        if (res.success) {
          this.toastr.success(res.msg);
          this.closeModalAssignAWD();
          this.ngOnInit();
        } else {
          this.toastr.error(res.error);
          if(res.json){
            this.toastr.error(res.json.message);  
          }
        }

      }, err => {
        this.loaders = false;
        this.toastr.error()
      });
    } else {
      this.loaders = false;
      this.acceptForm.markAllAsTouched();
    }
  }

  downloadLabel(product: any) {
    console.log(product);
    let p: number[] = [];
    p.push(product.shiprocket_shipment_id)
    let formData = new FormData();
    formData.append('shipment_id', JSON.stringify(p))
    this.websiteService.downloadLabel(formData).subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        this.toastr.success(res.msg);
        this.ngOnInit();
      } else {
        this.toastr.error(res.error_msg);
      }
    });
  }
  downloadInvoice(product: any) {
    console.log(product);
    let p: number[] = [];
    p.push(product.shiprocket_order_id)
    let formData = new FormData();
    formData.append('ids', JSON.stringify(p))
    this.websiteService.downloadInvoice(formData).subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        this.toastr.success(res.msg);
        this.ngOnInit();
      } else {
        this.toastr.error(res.error_msg);
      }
    });
  }
  cancelOrder(product: any) {
    console.log(product);
    let p: number[] = [];
    p.push(product.shiprocket_order_id)
    let formData = new FormData();
    formData.append('ids', JSON.stringify(p))
    this.websiteService.cancelOrder(formData).subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        this.toastr.success(res.msg);
        this.ngOnInit();
      } else {
        this.toastr.error(res.error_msg);
        if(res.json){
          this.toastr.error(res.json.message);  
        }
      }
    });
  }
  selectDateRange(dat: any) {
    console.log(dat);
    this.selectCredit = dat;
    this.filterData();
  }
  startDate:any;
  endDate:any;
  getSelectedDates() {
    console.log(this.campaignOne.value);
    const start = this.datePipe.transform(this.campaignOne.value.start, 'yyyy-MM-dd');
    const end = this.datePipe.transform(this.campaignOne.value.end, 'yyyy-MM-dd');
   this.startDate=start;
   this.endDate=end;
   this.filterData();
  }
  selectCredit: any;
  filteredData: any[];
  filterData() {
    let filteredData = this.tableData.slice();
    if (this.selectCredit) {
      const currentDate = new Date();
      switch (this.selectCredit) {
        case 'today':
          filteredData = filteredData.filter(item => {
            const orderDate = new Date(item.order_date);
            return this.formatDate(orderDate) === this.formatDate(currentDate);
          });
          break;

        case 'yesterday':
          const yesterday = new Date(currentDate);
          yesterday.setDate(currentDate.getDate() - 1);
          filteredData = filteredData.filter(item => {
            const orderDate = new Date(item.order_date);
            return this.formatDate(orderDate) === this.formatDate(yesterday);
          });
          break;

        case 'thisWeek':
          const firstDayOfWeek = new Date(currentDate);
          firstDayOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
          const lastDayOfWeek = new Date(currentDate);
          lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);
          filteredData = filteredData.filter(item => {
            const orderDate = new Date(item.order_date);
            return this.formatDate(orderDate) >= this.formatDate(firstDayOfWeek) &&
              this.formatDate(orderDate) <= this.formatDate(lastDayOfWeek);
          });
          break;

        case 'thisMonth':
          const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
          const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
          filteredData = filteredData.filter(item => {
            const orderDate = new Date(item.order_date);
            return orderDate >= firstDayOfMonth && orderDate <= lastDayOfMonth;
          });
          break;

        case 'lastMonth':
          const firstDayOfLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
          const lastDayOfLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
          filteredData = filteredData.filter(item => {
            const orderDate = new Date(item.order_date);
            return orderDate >= firstDayOfLastMonth && orderDate <= lastDayOfLastMonth;
          });
          break;

        case 'last15Days':
          const last15DaysStart = new Date(currentDate);
          last15DaysStart.setDate(currentDate.getDate() - 14);
          filteredData = filteredData.filter(item => {
            const orderDate = new Date(item.order_date);
            return orderDate >= last15DaysStart && orderDate <= currentDate;
          });
          break;

        case 'last30Days':
          const last30DaysStart = new Date(currentDate);
          last30DaysStart.setDate(currentDate.getDate() - 29);
          filteredData = filteredData.filter(item => {
            const orderDate = new Date(item.order_date);
            return orderDate >= last30DaysStart && orderDate <= currentDate;
          });
          break;

        case 'thisQuarter':
          const currentMonth = currentDate.getMonth();
          const thisQuarterStart = new Date(currentDate.getFullYear(), currentMonth - 2, 1);
          const thisQuarterEnd = new Date(currentDate.getFullYear(), currentMonth + 1, 0);
          filteredData = filteredData.filter(item => {
            const orderDate = new Date(item.order_date);
            return orderDate >= thisQuarterStart && orderDate <= thisQuarterEnd;
          });
          break;

        case 'lastQuarter':
          const lastQuarterStart = new Date(currentDate.getFullYear(), currentDate.getMonth() - 5, 1);
          const lastQuarterEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 0);
          filteredData = filteredData.filter(item => {
            const orderDate = new Date(item.order_date);
            return orderDate >= lastQuarterStart && orderDate <= lastQuarterEnd;
          });
          break;

        case 'thisFinancialYear':
          const thisFinancialYearStart = new Date(currentDate.getFullYear(), 3, 1);
          const thisFinancialYearEnd = new Date(currentDate.getFullYear() + 1, 2, 31);
          filteredData = filteredData.filter(item => {
            const orderDate = new Date(item.order_date);
            return orderDate >= thisFinancialYearStart && orderDate <= thisFinancialYearEnd;
          });
          break;

        case 'lastFinancialYear':
          const lastFinancialYearStart = new Date(currentDate.getFullYear() - 1, 3, 1);
          const lastFinancialYearEnd = new Date(currentDate.getFullYear(), 2, 31);
          filteredData = filteredData.filter(item => {
            const orderDate = new Date(item.order_date);
            return orderDate >= lastFinancialYearStart && orderDate <= lastFinancialYearEnd;
          });
          break;

        default:
          break;
      }
    } 
    if(this.endDate && this.startDate){
      filteredData = filteredData.filter(item => {
        const orderDate = new Date(item.order_date);
        return this.formatDate(orderDate) >= this.formatDate(this.startDate) &&
          this.formatDate(orderDate) <= this.formatDate(this.endDate);
      });
    }
    this.filteredData = filteredData;
    console.log(this.filteredData,' console.log(this.filteredData);');
  }

  clearFilter() {
    this.selectCredit = null;
    this.filterData();
  }
//update address modal 
  openModalAddress(product: any) {
    console.log(product); 
    this.addressForm.patchValue({
      web_order_id: product.online_order_id,
      order_id: product.shiprocket_order_id,
      name: product.shipping_address.name,
      email: product.shipping_address.email,
      mobile_no: product.shipping_address.mobile_no,
      alternative_mobile_no: product.shipping_address.alternative_mobile_no,
      city: product.shipping_address.city,
      state: product.shipping_address.state,
      country: product.shipping_address.country,
      // address_type: product.shipping_address.address_type,
      line1: product.shipping_address.line1,
      line2: product.shipping_address.line2,
      address: product.shipping_address.address,
    });
    const modal = document.getElementById('addressModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
      //blur bg
      this.isModalOpen = true;
      this.websiteService.setCheckBlur(true);
    }
  }
  closeModalAddress() {
    const modal = document.getElementById('addressModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
      this.isModalOpen = false;
      this.websiteService.setCheckBlur(false);
    }
  }

  addressSubmit() {
    console.warn(this.addressForm.value);
    let formData = new FormData();
    formData.append('web_order_id', this.addressForm.get('web_order_id')?.value);
    formData.append('order_id', this.addressForm.get('order_id')?.value);
    formData.append('name', this.addressForm.get('name')?.value);
    formData.append('email', this.addressForm.get('email')?.value);
    formData.append('mobile_no', this.addressForm.get('mobile_no')?.value);
    formData.append('alternative_mobile_no', this.addressForm.get('alternative_mobile_no')?.value);
    formData.append('city', this.addressForm.get('city')?.value);
    formData.append('state', this.addressForm.get('state')?.value);
    formData.append('country', this.addressForm.get('country')?.value);
    formData.append('address_type', this.addressForm.get('address_type')?.value);
    formData.append('line1', this.addressForm.get('line1')?.value);
    formData.append('line2', this.addressForm.get('line2')?.value);
    formData.append('address', this.addressForm.get('address')?.value);

    if (this.addressForm.valid) {
      this.loaders = true
      this.websiteService.addAddress(formData).subscribe((res: any) => {
        console.log(res);
        this.loaders = false;
        if (res.success) {
          this.toastr.success(res.msg);
          this.closeModalAddress();
          this.ngOnInit();
        } else {
          this.toastr.error(res.error);
          if(res.json){
            this.toastr.error(res.json.message);  
          }
        }
      }, err => {
        this.loaders = false;
        this.toastr.error()
      });
    } else {
      this.loaders = false;
      this.acceptForm.markAllAsTouched();
    }
  }
}