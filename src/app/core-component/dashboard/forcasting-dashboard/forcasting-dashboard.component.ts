import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill,
  ApexNonAxisChartSeries
} from "ng-apexcharts";
import { DashboardService } from 'src/app/Services/DashboardService/dashboard.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-forcasting-dashboard',
  templateUrl: './forcasting-dashboard.component.html',
  styleUrls: ['./forcasting-dashboard.component.scss']
})
export class ForcastingDashboardComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public employeeChartOptions: Partial<any>;
  public departmentChartOptions!: Partial<any>;
  constructor(private dashboardService: DashboardService, private datePipe: DatePipe, private toastr: ToastrService) {

  }
  campaignOne: FormGroup;
  departmentForm: FormGroup;
  employeeForm: FormGroup;
  categoryWiseSaleForm: FormGroup;
  transactionForm: FormGroup;
  subCatWiseSaleForm: FormGroup;
  inventoryForm: FormGroup;
  customerForm: FormGroup;
  recentSaleForm: FormGroup;
  recentAddedProductForm: FormGroup;
  bestSellingProductForm: FormGroup;
  leastSellingProductForm: FormGroup;
  topEmployee: FormGroup;
  targetEmployee: FormGroup;
  ngOnInit(): void {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 29);

    const formattedStartDate = this.formatDate(startDate);
    const formattedToday = this.formatDate(today);

    // daily sales
    this.departmentForm = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
    })
    this.departmentStartDate = this.departmentForm.value?.start;
    this.departmentEndDate = this.departmentForm.value?.end;
    // employeeForm
    this.employeeForm = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
    })
    this.employeeStartDate = this.employeeForm.value?.start;
    this.employeeEndDate = this.employeeForm.value?.end;

    this.getEmployeeTarget();
    this.getDepartmentWiseTarget();

    // employee target achievement
    this.targetEmployee = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
    })
    this.achieveStartDate = this.targetEmployee.value?.start;
    this.achieveEndDate = this.targetEmployee.value?.end;

    this.getAchieveTarget();
    // employee top 10
    this.topEmployee = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
    })
    this.top10StartDate = this.topEmployee.value?.start;
    this.top10EndDate = this.topEmployee.value?.end;
    this.getTop10Target();
  }

  //daily sales
  departmentStartDate: any;
  departmentEndDate: any;
  getSelectedDepartmentSalesDates() {
    console.log(this.departmentForm.value);
    const start = this.datePipe.transform(this.departmentForm.value.start, 'yyyy-MM-dd');
    const end = this.datePipe.transform(this.departmentForm.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.departmentStartDate = start;
    this.departmentEndDate = end;
    this.getDepartmentWiseTarget();
  }
  departMentList: any[] = [];
  getDepartmentWiseTarget() {
    this.dashboardService.getDepartmentWiseTarget(this.departmentStartDate, this.departmentEndDate).subscribe((res: any) => {
      this.departMentList = res?.departments_wise_targets;
      // apexchart    
      this.departmentChartOptions = {
        series: [
          { name: 'Forcasted', data: this.departMentList.map(item => item.forcasted?.toFixed(2)) },
          { name: 'Achieved', data: this.departMentList.map(item => item.achieved?.toFixed(2)) },
        ],
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            // columnWidth: '5%',
          }
        },
        xaxis: {
          type: 'category',
          categories: this.departMentList.map(item => item.department)
        },
        legend: {
          position: 'top',
          offsetY: 0
        },
        fill: {
          opacity: 1
        },
        dataLabels: {
          enabled: false,
          style: {
            colors: ['#333']
          },
          offsetX: 30
        },
      };
      //end
    })
  }
  //end 
  //salevspurchase
  employeeStartDate: any;
  employeeEndDate: any;
  getSelectedEmployeeDates() {
    console.log(this.employeeForm.value);
    const start = this.datePipe.transform(this.employeeForm.value.start, 'yyyy-MM-dd');
    const end = this.datePipe.transform(this.employeeForm.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.employeeStartDate = start;
    this.employeeEndDate = end;
    this.getEmployeeTarget();
  }
  employeeList: any[] = [];
  getEmployeeTarget() {
    this.dashboardService.getEmployeeTargetGraph(this.employeeStartDate, this.employeeEndDate).subscribe((res: any) => {
      this.employeeList = res?.data;
      // apexchart    
      this.employeeChartOptions = {
        series: [
          { name: 'Assigned Target', data: this.employeeList.map(item => item.assigned_target?.toFixed(2)) },
          { name: 'Achieved Target', data: this.employeeList.map(item => item.achieved_target?.toFixed(2)) },
        ],
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            // columnWidth: '5%',
          }
        },
        xaxis: {
          type: 'category',
          categories: this.employeeList.map(item => item.employee_name)
        },
        legend: {
          position: 'top',
          offsetY: 0
        },
        fill: {
          opacity: 1
        },
        dataLabels: {
          enabled: false,
          style: {
            colors: ['#333']
          },
          offsetX: 30
        },
      };
      //end
    })
  }
  //end 
  //target employee acheivment
  achieveStartDate: any;
  achieveEndDate: any;
  getSelectedAchieveDates() {
    console.log(this.targetEmployee.value);
    const start = this.datePipe.transform(this.targetEmployee.value.start, 'yyyy-MM-dd');
    const end = this.datePipe.transform(this.targetEmployee.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.achieveStartDate = start;
    this.achieveEndDate = end;
    this.getAchieveTarget();
  }
  achieveList: any[] = [];
  getAchieveTarget() {
    this.dashboardService.getEployeeTargetAchieved(this.achieveStartDate, this.achieveEndDate).subscribe((res: any) => {
      this.achieveList = res?.data;
    },err=>{
      this.toastr.error(err.message);
    })
  }
  //end 
  //top 10 employee
  top10StartDate: any;
  top10EndDate: any;
  getSelectedTop10Dates() {
    console.log(this.topEmployee.value);
    const start = this.datePipe.transform(this.topEmployee.value.start, 'yyyy-MM-dd');
    const end = this.datePipe.transform(this.topEmployee.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.top10StartDate = start;
    this.top10EndDate = end;
    this.getTop10Target();
  }
  top10List: any[] = [];
  getTop10Target() {
    this.dashboardService.getEmployeeTop10(this.top10StartDate, this.top10EndDate).subscribe((res: any) => {
      this.top10List = res?.data;
    },err=>{
      this.toastr.error(err.message);
    })
  }
  //end   
  private formatDate(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }
  formatDateMonth(dateString: string): string {
    // Assuming date format is "DD/MM/YYYY"
    const [day, month, year] = dateString.split('/');
    const formattedDate = `${year}-${month}-${day}`;

    const date = new Date(formattedDate);
    return this.datePipe.transform(date, 'dd MMM') || '';
  }
}
