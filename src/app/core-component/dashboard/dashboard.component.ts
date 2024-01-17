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
  ApexFill
} from "ng-apexcharts";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<any>;

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
            beginAtZero: true,
            suggestedMin: 0,
            stepSize: 200000, // Set the step size for y-axis ticks
            max: 800000,

            callback: function (value: any, index: any, values: any) {
              return value.toLocaleString(); // Format numbers using toLocaleString()
            }
          }
        }
      ]
    },
    responsive: true,
    maintainAspectRatio: false,
  }; 

  //transaction
  public transactionBarChartOptions: any = {
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
            beginAtZero: true,
            suggestedMin: 0,
            stepSize: 200000, // Set the step size for y-axis ticks
            max: 800000,

            callback: function (value: any, index: any, values: any) {
              return value.toLocaleString(); // Format numbers using toLocaleString()
            }
          }
        }
      ]
    },
    responsive: true,
    maintainAspectRatio: false,
  };
  // public barChartLabels: string[] = ['Label 1', 'Label 2', 'Label 3', 'Label 4'];
  // public barChartType: string = 'bar';
  // public barChartLegend: boolean = true;

  // public barChartOptions: any = {
  //   responsive: true,
  //   maintainAspectRatio: false
  // };
  // sale vs purchase
 
  public barChartLabels: string[] = [];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public barChartData: any[] = [];
  // transaction
  public transactionBarChartLabels: string[] = [];
  public transactionBarChartType: string = 'bar';
  public transactionBarChartLegend: boolean = true;
  public transactionBarChartData: any[] = [];


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

  constructor(private coreService: CoreService, private datePipe: DatePipe) {
  
   }
  campaignOne: FormGroup;
  salevsPurchaseForm: FormGroup;
  transactionForm: FormGroup;
  ngOnInit(): void {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 14);

    const formattedStartDate = this.formatDate(startDate);
    const formattedToday = this.formatDate(today);
    // campaignOne
    this.campaignOne = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
    });
    console.log(this.campaignOne.value);
    this.startDate = this.campaignOne.value?.start;
    this.endDate = this.campaignOne.value?.end;
    // salevsPurchaseForm
    this.salevsPurchaseForm = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
    })
    this.salePurchaseStartDate = this.salevsPurchaseForm.value?.start;
    this.salePurchaseEndDate = this.salevsPurchaseForm.value?.end;
    // transaction form
    this.transactionForm = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
    })
    this.transactionStartDate = this.transactionForm.value?.start;
    this.transactionEndDate = this.transactionForm.value?.end;
    this.transactionType = 'Purchase';

    this.getSaleTotalDashboard();
    this.getSalePurchaseTotalDashboard();
    this.getTransactionTotalDashboard();
  }
  //sale
  startDate: any;
  endDate: any;
  getSelectedDates() {
    console.log(this.campaignOne.value);
    const start = this.datePipe.transform(this.campaignOne.value.start, 'yyyy-MM-dd');
    const end = this.datePipe.transform(this.campaignOne.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.startDate = start;
    this.endDate = end;
    this.getSaleTotalDashboard();
  }
  saleTotalList: any;
  getSaleTotalDashboard() {
    this.coreService.getDashboardSale(this.startDate, this.endDate).subscribe((res: any) => {
      console.log(res);
      this.saleTotalList = res;
    })
  }
  //end
  //salevspurchase
  salePurchaseStartDate: any;
  salePurchaseEndDate: any;
  getSelectedSalePurchaseDates() {
    console.log(this.salevsPurchaseForm.value);
    const start = this.datePipe.transform(this.salevsPurchaseForm.value.start, 'yyyy-MM-dd');
    const end = this.datePipe.transform(this.salevsPurchaseForm.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.salePurchaseStartDate = start;
    this.salePurchaseEndDate = end;
    this.getSalePurchaseTotalDashboard();
  }
  salePurchaseTotalList: any[] = [];
  getSalePurchaseTotalDashboard() {
    this.coreService.getDashboardSaleVsPurchase(this.salePurchaseStartDate, this.salePurchaseEndDate).subscribe((res: any) => {
      this.salePurchaseTotalList = res?.data;
      // this.barChartLabels = this.salePurchaseTotalList.map(item => this.formatDateMonth(item.date));
      // this.barChartData = [
      //   { data: this.salePurchaseTotalList.map(item => item.total_sale_bill), label: 'Total Sale Bill' },
      //   { data: this.salePurchaseTotalList.map(item => item.total_purchase_bill), label: 'Total Purchase Bill' },
      //   { data: this.salePurchaseTotalList.map(item => item.total_sale_return), label: 'Total Sale Return' },
      //   { data: this.salePurchaseTotalList.map(item => item.total_purchase_return), label: 'Total Purchase Return' }
      // ];
// apexchart    
      this.chartOptions = {
        series: [
          { name: 'Total Sale Bill', data: this.salePurchaseTotalList.map(item => item.total_sale_bill) },
          { name: 'Total Purchase Bill', data: this.salePurchaseTotalList.map(item => item.total_purchase_bill) },
          { name: 'Total Sale Return', data: this.salePurchaseTotalList.map(item => item.total_sale_return) },
          { name: 'Total Purchase Return', data: this.salePurchaseTotalList.map(item => item.total_purchase_return) }
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
          }
        },
        xaxis: {
          type: 'category',
          categories: this.salePurchaseTotalList.map(item => this.formatDateMonth(item.date))
        },
        legend: {
          position: 'top',
          offsetY: 0
        },
        fill: {
          opacity: 1
        }
      };
      
    })
  }
  //end 
  //transaction
  transactionStartDate: any;
  transactionEndDate: any;
  transactionType: any;
  getSelectedTransactionDates() {
    console.log(this.transactionForm.value);
    const start = this.datePipe.transform(this.transactionForm.value.start, 'yyyy-MM-dd');
    const end = this.datePipe.transform(this.transactionForm.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.transactionStartDate = start;
    this.transactionEndDate = end;
    this.getTransactionTotalDashboard();
  }
  transactionTotalList: any[] = [];
  getTransactionTotalDashboard() {
    this.coreService.getDashboardTransaction(this.transactionStartDate, this.transactionEndDate, this.transactionType).subscribe((res: any) => {
      this.transactionTotalList = res?.data;
      this.transactionBarChartLabels = this.transactionTotalList.map(item => this.formatDateMonth(item.date));
      this.transactionBarChartData = [
        { data: this.transactionTotalList.map(item => item.total_amount), label: 'Total Amount' },
        { data: this.transactionTotalList.map(item => item.category_name), label: 'Bank' },
      ];
    })
  }
  //end
  selectDateRange(value: string, type: any) {
    const currentDate = new Date();
    switch (value) {
      case 'today':
        const today = new Date(currentDate);
        today.setDate(currentDate.getDate());
        if (type == 'sale') {
          this.campaignOne.patchValue({
            start: this.formatDate(today),
            end: this.formatDate(today)
          });
          console.warn(this.campaignOne.value);
          this.startDate = this.campaignOne.value?.start;
          this.endDate = this.campaignOne.value?.end;
          this.getSaleTotalDashboard();
        }
        else if (type == 'salevspurchase') {
          this.salevsPurchaseForm.patchValue({
            start: this.formatDate(today),
            end: this.formatDate(today)
          });
          console.warn(this.salevsPurchaseForm.value);
          this.salePurchaseStartDate = this.salevsPurchaseForm.value?.start;
          this.salePurchaseEndDate = this.salevsPurchaseForm.value?.end;
          this.getSalePurchaseTotalDashboard();
        }
        break;

      case 'yesterday':
        const yesterday = new Date(currentDate);
        yesterday.setDate(currentDate.getDate() - 1);
        if (type == 'sale') {
          this.campaignOne.patchValue({
            start: this.formatDate(yesterday),
            end: this.formatDate(yesterday)
          });
          console.warn(this.campaignOne.value);
          this.startDate = this.campaignOne.value?.start;
          this.endDate = this.campaignOne.value?.end;
          this.getSaleTotalDashboard();
        } else if (type == 'salevspurchase') {
          this.salevsPurchaseForm.patchValue({
            start: this.formatDate(yesterday),
            end: this.formatDate(yesterday)
          });
          console.warn(this.salevsPurchaseForm.value);
          this.salePurchaseStartDate = this.salevsPurchaseForm.value?.start;
          this.salePurchaseEndDate = this.salevsPurchaseForm.value?.end;
          this.getSalePurchaseTotalDashboard();
        }
        break;

      case 'thisWeek':
        const firstDayOfWeek = new Date(currentDate);
        firstDayOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
        const lastDayOfWeek = new Date(currentDate);
        lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);
        if (type == 'sale') {
          this.campaignOne.patchValue({
            start: this.formatDate(firstDayOfWeek),
            end: this.formatDate(lastDayOfWeek)
          });
          console.warn(this.campaignOne.value);
          this.startDate = this.campaignOne.value?.start;
          this.endDate = this.campaignOne.value?.end;
          this.getSaleTotalDashboard();
        } else if (type == 'salevspurchase') {
          this.salevsPurchaseForm.patchValue({
            start: this.formatDate(firstDayOfWeek),
            end: this.formatDate(lastDayOfWeek)
          });
          console.warn(this.salevsPurchaseForm.value);
          this.salePurchaseStartDate = this.salevsPurchaseForm.value?.start;
          this.salePurchaseEndDate = this.salevsPurchaseForm.value?.end;
          this.getSalePurchaseTotalDashboard();
        }
        break;

      case 'thisMonth':
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        if (type == 'sale') {
          this.campaignOne.patchValue({
            start: this.formatDate(firstDayOfMonth),
            end: this.formatDate(lastDayOfMonth)
          });
          console.warn(this.campaignOne.value);
          this.startDate = this.campaignOne.value?.start;
          this.endDate = this.campaignOne.value?.end;
          this.getSaleTotalDashboard();
        } else if (type == 'salevspurchase') {
          this.salevsPurchaseForm.patchValue({
            start: this.formatDate(firstDayOfMonth),
            end: this.formatDate(lastDayOfMonth)
          });
          console.warn(this.salevsPurchaseForm.value);
          this.salePurchaseStartDate = this.salevsPurchaseForm.value?.start;
          this.salePurchaseEndDate = this.salevsPurchaseForm.value?.end;
          this.getSalePurchaseTotalDashboard();
        }
        break;

      case 'lastMonth':
        const firstDayOfLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        const lastDayOfLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        if (type == 'sale') {
          this.campaignOne.patchValue({
            start: this.formatDate(firstDayOfLastMonth),
            end: this.formatDate(lastDayOfLastMonth)
          });
          console.warn(this.campaignOne.value);
          this.startDate = this.campaignOne.value?.start;
          this.endDate = this.campaignOne.value?.end;
          this.getSaleTotalDashboard();
        } else if (type == 'salevspurchase') {
          this.salevsPurchaseForm.patchValue({
            start: this.formatDate(firstDayOfLastMonth),
            end: this.formatDate(lastDayOfLastMonth)
          });
          console.warn(this.salevsPurchaseForm.value);
          this.salePurchaseStartDate = this.salevsPurchaseForm.value?.start;
          this.salePurchaseEndDate = this.salevsPurchaseForm.value?.end;
          this.getSalePurchaseTotalDashboard();
        }
        break;

      case 'last15Days':
        const last15DaysStart = new Date(currentDate);
        last15DaysStart.setDate(currentDate.getDate() - 14);
        if (type == 'sale') {
          this.campaignOne.patchValue({
            start: this.formatDate(last15DaysStart),
            end: this.formatDate(currentDate)
          });
          console.warn(this.campaignOne.value);
          this.startDate = this.campaignOne.value?.start;
          this.endDate = this.campaignOne.value?.end;
          this.getSaleTotalDashboard();
        } else if (type == 'salevspurchase') {
          this.salevsPurchaseForm.patchValue({
            start: this.formatDate(last15DaysStart),
            end: this.formatDate(currentDate)
          });
          console.warn(this.salevsPurchaseForm.value);
          this.salePurchaseStartDate = this.salevsPurchaseForm.value?.start;
          this.salePurchaseEndDate = this.salevsPurchaseForm.value?.end;
          this.getSalePurchaseTotalDashboard();
        }
        break;

      case 'last30Days':
        const last30DaysStart = new Date(currentDate);
        last30DaysStart.setDate(currentDate.getDate() - 29);
        if (type == 'sale') {
          this.campaignOne.patchValue({
            start: this.formatDate(last30DaysStart),
            end: this.formatDate(currentDate)
          });
          console.warn(this.campaignOne.value);
          this.startDate = this.campaignOne.value?.start;
          this.endDate = this.campaignOne.value?.end;
          this.getSaleTotalDashboard();
        } else if (type == 'salevspurchase') {
          this.salevsPurchaseForm.patchValue({
            start: this.formatDate(last30DaysStart),
            end: this.formatDate(currentDate)
          });
          console.warn(this.salevsPurchaseForm.value);
          this.salePurchaseStartDate = this.salevsPurchaseForm.value?.start;
          this.salePurchaseEndDate = this.salevsPurchaseForm.value?.end;
          this.getSalePurchaseTotalDashboard();
        }
        break;

      case 'thisQuarter':
        const currentMonth = currentDate.getMonth();
        const thisQuarterStart = new Date(currentDate.getFullYear(), currentMonth - 2, 1);
        const thisQuarterEnd = new Date(currentDate.getFullYear(), currentMonth + 1, 0);
        if (type == 'sale') {
          this.campaignOne.patchValue({
            start: this.formatDate(thisQuarterStart),
            end: this.formatDate(thisQuarterEnd)
          });
          console.warn(this.campaignOne.value);
          this.startDate = this.campaignOne.value?.start;
          this.endDate = this.campaignOne.value?.end;
          this.getSaleTotalDashboard();
        } else if (type == 'salevspurchase') {
          this.salevsPurchaseForm.patchValue({
            start: this.formatDate(thisQuarterStart),
            end: this.formatDate(thisQuarterEnd)
          });
          console.warn(this.salevsPurchaseForm.value);
          this.salePurchaseStartDate = this.salevsPurchaseForm.value?.start;
          this.salePurchaseEndDate = this.salevsPurchaseForm.value?.end;
          this.getSalePurchaseTotalDashboard();
        }
        break;
      case 'lastQuarter':
        const lastQuarterStart = new Date(currentDate.getFullYear(), currentDate.getMonth() - 5, 1);
        const lastQuarterEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 0);
        if (type == 'sale') {
          this.campaignOne.patchValue({
            start: this.formatDate(lastQuarterStart),
            end: this.formatDate(lastQuarterEnd)
          });
          console.warn(this.campaignOne.value);
          this.startDate = this.campaignOne.value?.start;
          this.endDate = this.campaignOne.value?.end;
          this.getSaleTotalDashboard();
        } else if (type == 'salevspurchase') {
          this.salevsPurchaseForm.patchValue({
            start: this.formatDate(lastQuarterStart),
            end: this.formatDate(lastQuarterEnd)
          });
          console.warn(this.salevsPurchaseForm.value);
          this.salePurchaseStartDate = this.salevsPurchaseForm.value?.start;
          this.salePurchaseEndDate = this.salevsPurchaseForm.value?.end;
          this.getSalePurchaseTotalDashboard();
        }
        break;

      case 'thisFinancialYear':
        const thisFinancialYearStart = new Date(currentDate.getFullYear(), 3, 1);
        const thisFinancialYearEnd = new Date(currentDate.getFullYear() + 1, 2, 31);
        if (type == 'sale') {
          this.campaignOne.patchValue({
            start: this.formatDate(thisFinancialYearStart),
            end: this.formatDate(thisFinancialYearEnd)
          });
          console.warn(this.campaignOne.value);
          this.startDate = this.campaignOne.value?.start;
          this.endDate = this.campaignOne.value?.end;
          this.getSaleTotalDashboard();
        } else if (type == 'salevspurchase') {
          this.salevsPurchaseForm.patchValue({
            start: this.formatDate(thisFinancialYearStart),
            end: this.formatDate(thisFinancialYearEnd)
          });
          console.warn(this.salevsPurchaseForm.value);
          this.salePurchaseStartDate = this.salevsPurchaseForm.value?.start;
          this.salePurchaseEndDate = this.salevsPurchaseForm.value?.end;
          this.getSalePurchaseTotalDashboard();
        }
        break;

      case 'lastFinancialYear':
        const lastFinancialYearStart = new Date(currentDate.getFullYear() - 1, 3, 1);
        const lastFinancialYearEnd = new Date(currentDate.getFullYear(), 2, 31);
        if (type == 'sale') {
          this.campaignOne.patchValue({
            start: this.formatDate(lastFinancialYearStart),
            end: this.formatDate(lastFinancialYearEnd)
          });
          console.warn(this.campaignOne.value);
          this.startDate = this.campaignOne.value?.start;
          this.endDate = this.campaignOne.value?.end;
          this.getSaleTotalDashboard();
        } else if (type == 'salevspurchase') {
          this.salevsPurchaseForm.patchValue({
            start: this.formatDate(lastFinancialYearStart),
            end: this.formatDate(lastFinancialYearEnd)
          });
          console.warn(this.salevsPurchaseForm.value);
          this.salePurchaseStartDate = this.salevsPurchaseForm.value?.start;
          this.salePurchaseEndDate = this.salevsPurchaseForm.value?.end;
          this.getSalePurchaseTotalDashboard();
        }
        break;
      default:
        break;
    }
  }

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

  ngAfterViewInit() {
    this.jquery("assets/plugins/apexchart/apexcharts.min.js")
    this.LoadScript("assets/plugins/apexchart/chart-data.js")
    this.LoadScript3("assets/plugins/countup/dash-script.js")
  }
  jquery(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  LoadScript(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  LoadScript3(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
}
