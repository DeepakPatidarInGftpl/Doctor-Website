import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { HrmServiceService } from 'src/app/Services/hrm/hrm-service.service';
import { Observable, map, startWith } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/Services/ContactService/contact.service';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexNonAxisChartSeries,
  ApexTitleSubtitle
} from "ng-apexcharts";
@Component({
  selector: 'app-target-graph',
  templateUrl: './target-graph.component.html',
  styleUrls: ['./target-graph.component.scss']
})
export class TargetGraphComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<any>;

  chartSeries: ApexNonAxisChartSeries = [40, 32, 20, 55, 10, 40, 5]
  chartDetails: ApexChart = {
    type: 'pie',
    toolbar: {
      show: true
    }
  }

  chartLabels = ["apple", "hp", "dell", "MI", "Redmi", "Microsoft", "window"]
  chartTitle: ApexTitleSubtitle = {
    text: 'Loading Companies',
    align: 'center'
  }

  chartDataLabel: ApexDataLabels = {
    enabled: false,

  }

  public barChartOptions: any = {
    scales: {
      xAxes: [
        {
          type: 'category',
          labels: [], // Date labels will be dynamically populated
        }
      ],
      yAxes: [
        {
          ticks: {
            max: 100,
            beginAtZero: true,
            callback: function (value: any, index: any, values: any) {
              return value.toLocaleString(); // Format numbers using toLocaleString()
            }
          }
        }
      ]
    },
    responsive: true,
    maintainAspectRatio: false,
    barThickness: 20,

  };
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  titlee: any;
  name: any
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  row: boolean = false;
  filteredemployee: Observable<any[]>;
  employeeControl = new FormControl();
  //department
  filtereddepartment: Observable<any[]>;
  departmentControl = new FormControl();

  filterForm: FormGroup
  get f() {
    return this.filterForm.controls;
  }
  constructor(private router: Router, private hrmService: HrmServiceService, private fb: FormBuilder, private contactService: ContactService) {

    // this.chartOptions = {
    //   series: [
    //     {
    //       name: "Net Profit",
    //       data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    //     },
    //     {
    //       name: "Revenue",
    //       data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    //     },
    //     {
    //       name: "Free Cash Flow",
    //       data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    //     }
    //   ],
    //   chart: {
    //     type: "bar",
    //     height: 350
    //   },
    //   plotOptions: {
    //     bar: {
    //       horizontal: false,
    //       columnWidth: "55%",
    //       endingShape: "rounded"
    //     }
    //   },
    //   dataLabels: {
    //     enabled: false
    //   },
    //   stroke: {
    //     show: true,
    //     width: 2,
    //     colors: ["transparent"]
    //   },
    //   xaxis: {
    //     categories: [
    //       "Feb",
    //       "Mar",
    //       "Apr",
    //       "May",
    //       "Jun",
    //       "Jul",
    //       "Aug",
    //       "Sep",
    //       "Oct"
    //     ]
    //   },
    //   yaxis: {
    //     title: {
    //       text: "$ (thousands)"
    //     }
    //   },
    //   fill: {
    //     opacity: 1
    //   },
    //   tooltip: {
    //     y: {
    //       formatter: function (val) {
    //         return "$ " + val + " thousands";
    //       }
    //     }
    //   }
    // };

  }

  loader = true;
  isAdd: any;
  isEdit: any;
  isDelete: any;
  userDetails: any;
  // chart
  public barChartLabels: string[] = [];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public barChartData: any[] = [];

  ngOnInit(): void {
    // const currentDate = new Date();
    // const currentYear = currentDate.getFullYear();
    // const currentMonth = currentDate.getMonth();
    // // Start date of the current month
    // const startDate = new Date(currentYear, currentMonth, 1);
    // // End date of the current month
    // const endDate = new Date(currentYear, currentMonth + 1, 0);

    // this.filterForm = this.fb.group({
    //   from_date: new FormControl(this.formatDate(startDate), [Validators.required]),
    //   to_date: new FormControl(this.formatDate(endDate), [Validators.required]),
    //   employee_id: new FormControl(''),
    //   department_id: new FormControl(''),
    // });

    const defaultDate = new Date().toISOString().split('T')[0]; // Get yyyy-MM-dd part
    // previous month
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    currentDate.setDate(1);
    currentDate.setMonth(currentMonth - 1);
    const previousMonthDate = currentDate.toISOString().split('T')[0];
    //2month before
    const defaultPreviousDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1).toISOString().split('T')[0];
    this.filterForm = this.fb.group({
      from_date: new FormControl(defaultDate, [Validators.required]),
      to_date: new FormControl(defaultPreviousDate, [Validators.required]),
      employee_id: new FormControl('',),
      department_id: new FormControl('',),
    });

    // call target graph 
    this.submit();
    //filter emplloyee search
    this.filteredemployee = this.employeeControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );
    this.filtereddepartment = this.departmentControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter2(value, true))
    );
    this.getEmployee();
    this.getDepartment();
  }
 private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
  private _filter(value: string | number, include: boolean): any[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredemployee = include
      ? this.employeeList.filter(employee => employee.name.toLowerCase().includes(filterValue))
      : this.employeeList.filter(employee => !employee.name.toLowerCase().includes(filterValue));
    if (!include && filteredemployee.length === 0) {
      filteredemployee.push({ name: "No data found" });
    }
    return filteredemployee;
  }
  // searc department
  private _filter2(value: string | number, include: boolean): any[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filtereddepartment = include
      ? this.departmentList.filter(department => department.title.toLowerCase().includes(filterValue))
      : this.departmentList.filter(department => !department.title.toLowerCase().includes(filterValue));
    if (!include && filtereddepartment.length === 0) {
      filtereddepartment.push({ title: "No data found" });
    }
    return filtereddepartment;
  }

  targetGraphList: any[] = [];
  graphList: any[] = [];
  getTargetGraph(employeeId: any, departmentId: any, from_date: any, to_date: any) {
    if (this.isEmployeeAvailable) {
      this.hrmService.getTargetGraph(employeeId, departmentId, from_date, to_date).subscribe((res: any) => {
        this.targetGraphList = res;
        console.warn(this.targetGraphList);
        this.loader = false;
      })
    } else if (this.isDepartmentAvailable) {
      this.hrmService.getTargetGraph(employeeId, departmentId, from_date, to_date).subscribe((res: any) => {
        this.targetGraphList = res?.employees;
        console.warn(this.targetGraphList);
        this.graphList = this.targetGraphList;
        this.loader = false;
        this.barChartLabels = this.targetGraphList.map(item => item?.employee_name);
        this.barChartData = this.targetGraphList.map(item => ({
          data: [Math.min(item['%_achieved'], 100)],
          label: item.employee_name
        }));
      })
    } else if (this.isEmployeeAvailable && this.isDepartmentAvailable) {
      this.hrmService.getTargetGraph(employeeId, departmentId, from_date, to_date).subscribe((res: any) => {
        this.targetGraphList = res;
        console.warn(this.targetGraphList);
        this.loader = false;
      })
    } else {
      this.hrmService.getTargetGraph(employeeId, departmentId, from_date, to_date).subscribe((res: any) => {
        this.targetGraphList = res?.all_departments_data;
        console.warn(this.targetGraphList);
        this.graphList = [];
        this.targetGraphList.forEach((res: any) => {
          this.graphList = this.graphList.concat(res?.employees_data);
          this.loader = false;
        });

        // this.barChartLabels = this.graphList.map(item => item?.employee_name);
        // this.barChartData = this.graphList.map(item => ({
        //   data: [Math.min(item['%_achieved'], 100)], // Limit to a maximum of 100
        //   label: item.employee_name
        // }));
    // apexchart
  
    // this.chartOptions = {
    //   series: this.graphList.map((item: any) => {
    //     return {
    //       name: item.employee_name,
    //       data: [item['%_achieved']] 
    //     };
    //   }),
    //   chart: {
    //     type: 'bar',
    //     height: 350,
    //     stacked: true,
    //     toolbar: {
    //       show: true
    //     },
    //     zoom: {
    //       enabled: true
    //     }
    //   },
    //   responsive: [
    //     {
    //       breakpoint: 480,
    //       options: {
    //         legend: {
    //           position: 'bottom',
    //           offsetX: -10,
    //           offsetY: 0
    //         }
    //       }
    //     }
    //   ],
    //   plotOptions: {
    //     bar: {
    //       horizontal: false,
    //     }
    //   },
    //   xaxis: {
    //     type: 'category',
    //     categories: this.graphList.map((item: any) => item.employee_name)
    //   },
    //   legend: {
    //     position: 'right',
    //     offsetY: 40
    //   },
    //   fill: {
    //     opacity: 1
    //   }
    // };

    this.chartOptions = {
      series: [
        { name: '', data: this.graphList.map(item => item['%_achieved']) },
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top" 
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function(val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: this.graphList.map((item: any) => item.employee_name),  
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter: function(val) {
            return val + "%";
          }
        }
      },
     
    };
      })
    }
  }

  employeeList: any[] = [];
  getEmployee() {
    this.contactService.getEmployee().subscribe((res: any) => {
      this.employeeList = res;
    })
  }
  departmentList: any[] = [];
  getDepartment() {
    this.contactService.getDepartment().subscribe((res: any) => {
      this.departmentList = res;
    })
  }
  isFilterData = false;
  onCheck(employeeId: any) {
    console.log(employeeId, 'employeeId');
    this.filterForm.get('employee_id').patchValue(employeeId);
  }
  onCheck2(departmentId: any) {
    console.log(departmentId, 'departmentId');
    this.filterForm.get('department_id').patchValue(departmentId);
  }
  isDepartment: any;
  isEmployee: any;
  isEmployeeAvailable = false;
  isDepartmentAvailable = false;
  submit() {
    console.log(this.filterForm.value);
    if (this.filterForm.valid) {
      let data = this.filterForm.value;
      let empid = data?.employee_id;
      let d_id = data?.department_id;
      let to_date = data?.to_date;
      let from_date = data?.from_date;
      this.isFilterData = true;
      if (empid && d_id) {
        this.isEmployee = empid;
        this.isDepartment = d_id;
        this.isEmployeeAvailable = true;
        this.isDepartmentAvailable = true;
      } else if (d_id) {
        this.isDepartment = d_id;
        this.isDepartmentAvailable = true;
      } else if (empid) {
        this.isEmployee = empid;
        this.isEmployeeAvailable = true;
      }
      this.getTargetGraph(empid, d_id, to_date, from_date);
    } else {
      this.filterForm.markAllAsTouched();
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

  search() {
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.graphList = this.graphList.filter(res => {
        const nameLower = res?.employee_name.toLocaleLowerCase();
        const companyNameLower = res?.department.toLocaleLowerCase();
        if (nameLower.match(searchTerm)) {
          return true;
        }
        else if (companyNameLower.match(searchTerm)) {
          return true;
        }
        return false;
      });
    }
  }
  key = 'id'
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }

  // convert to pdf
  generatePDF() {
    // table data with pagination
    const doc = new jsPDF();
    const title = 'Tax Slab List';
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
          { header: 'Department' },
          { header: 'Start Date' },
          { header: 'End Date' },
          { header: 'Target Value' },
          { header: 'Is Active' }
        ],
      })
    doc.save('target.pdf');

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
    const fileName = 'target.xlsx';
    saveAs(blob, fileName);
  }
  printTable(): void {
    const tableElement = document.getElementById('mytable');
    const tableHTML = tableElement.outerHTML;
    const titleElement = document.querySelector('.titl');
    const titleHTML = titleElement.outerHTML;
    const clonedTable = tableElement.cloneNode(true) as HTMLTableElement;
    const isActiveTh = clonedTable.querySelector('th.thone:nth-child(7)');
    if (isActiveTh) {
      isActiveTh.remove();
    }
    const actionTh = clonedTable.querySelector('th.thone:last-child');
    if (actionTh) {
      actionTh.remove();
    }
    const rows = clonedTable.querySelectorAll('tr');
    rows.forEach((row) => {
      const isActiveTd = row.querySelector('td:nth-child(7)');
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

    document.body.innerHTML = combinedContent;
    window.print();
    document.body.innerHTML = originalContents;
  }
  get from_date() {
    return this.filterForm.get('from_date');
  }
  get to_date() {
    return this.filterForm.get('to_date');
  }
  get employee_id() {
    return this.filterForm.get('employee_id');
  }
  get department_id() {
    return this.filterForm.get('department_id');
  }

}

