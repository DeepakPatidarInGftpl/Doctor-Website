import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
import { TransactionsModule } from '../../transactions/transactions.module';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
@Component({
  selector: 'app-financial-dashboard',
  templateUrl: './financial-dashboard.component.html',
  styleUrls: ['./financial-dashboard.component.scss']
})
export class FinancialDashboardComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<any>;
  public PayablechartOptions: Partial<any>;
  public GrowthchartOptions: Partial<any>;
  public grossChartOptions: Partial<any>;
  public netChartOptions: Partial<any>;
  public netOptions: Partial<any>;
  public optionsLine:Partial<any>;
  public currentChart:Partial<any>;
  public quickChart:Partial<any>;
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
constructor(private dashboardService: DashboardService, private datePipe: DatePipe, private toastr: ToastrService,private companyService: CompanyService) {
    this.currentChart = {
      series: [
        {
          name: 'Current Ration',
          data: [50] // Current Receivable value
        },
        {
          name: 'churrent Ratio',
          data: [50] // Overdue Receivable value
        }
      ],
   
      chart: {
        type: 'bar',
        height: 40,
        sparkline: {
          enabled: true // Display as sparkline (compact chart)
        },
        stacked: true // Stack the bars
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '80%', // Adjust the bar height
          dataLabels: {
            enabled: false
          }
        }
      },
      xaxis: {
        type: 'category',
        categories: ['Current Receivable', 'Overdue Receivable'] // Set category labels
      },
      yaxis: {
        max:50 + 50, 
        labels: {
          show: false // Hide y-axis labels
        }
      },
      title: {
        text: '',
        align: 'center'
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: (val: any) => "₹ " + val // Format tooltip value
        }
      },
      fill: {
        colors: ['#F96F03', '#EBEDF2'] // Assign colors to the bars
      }
    };
    this.quickChart = {
      series: [
        {
          name: 'Quick Ration',
          data: [50] 
        },
        {
          name: 'Quick Ratio',
          data: [50] 
        }
      ],
      chart: {
        type: 'bar',
        height: 40,
        sparkline: {
          enabled: true // Display as sparkline (compact chart)
        },
        stacked: true 
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '80%', // Adjust the bar height
          dataLabels: {
            enabled: false
          }
        }
      },
      xaxis: {
        type: 'category',
        categories: ['Quick Receivable', 'Quick Receivable'] 
      },
      yaxis: {
        max:50 + 50, 
        labels: {
          show: false 
        }
      },
      title: {
        text: '',
        align: 'center'
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: (val: any) => "₹ " + val // Format tooltip value
        }
      },
      fill: {
        colors: ['#F96F03', '#EBEDF2'] 
      }
    };
  }
  campaignOne: FormGroup;
  recvsPayForm:FormGroup;
  growthForm:FormGroup;
  grossNetProfitForm:FormGroup;
  unpaidForm:FormGroup;
  recievableForm:FormGroup;
  payableForm:FormGroup;
  expenseForm:FormGroup;
  isAdmin=false;
  isModalOpen:any
  ngOnInit(): void {
        // blur bg when modal open
 if(this.companyService.CheckBlur$){
  this.companyService.CheckBlur$.subscribe((res:any)=>{
    console.log(res);
    if(res !== null){
    if(res){
      this.isModalOpen = res;
      console.log(this.isModalOpen);
    }else if(res==false){
      this.isModalOpen = res;
      console.log(this.isModalOpen);
    }
  }
    
  })
}
//end


    this.companyService.userDetails$.subscribe((res: any) => {
      if (res.role=='admin'){
this.isAdmin=true;
      }else{
        this.isAdmin=false;
      }
    });
    this.getBranch();
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 29);

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
    this.getSaleTotalDashboard();
    // gross net form
    this.grossNetProfitForm = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
    });
    console.log(this.grossNetProfitForm.value);
    this.grossStartDate = this.grossNetProfitForm.value?.start;
    this.grossEndDate = this.grossNetProfitForm.value?.end;
    this.getGross();
    //end
    // recvble&payble
    this.recvsPayForm = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
    });
      console.log(this.recvsPayForm.value);
      this.recPaystartDate = this.recvsPayForm.value?.start;
      this.recPayEndDate = this.recvsPayForm.value?.end;
      this.getResPayDates();
    // growth
    this.growthForm = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
    });
    console.log(this.growthForm.value);
    this.growthstartDate = this.growthForm.value?.start;
    this.growthEndDate = this.growthForm.value?.end;
    this.getGrowth();
       // unpaid 
       this.unpaidForm = new FormGroup({
        start: new FormControl(formattedStartDate),
        end: new FormControl(formattedToday),
      });
        console.log(this.unpaidForm.value);
        this.unpaidstartDate = this.unpaidForm.value?.start;
        this.unpaidEndDate = this.unpaidForm.value?.end;
        this.getUnpaid();
     // recivable 
     this.recievableForm = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
    });
      console.log(this.recievableForm.value);
      this.recievableStartDate = this.recievableForm.value?.start;
      this.recivableEndDate = this.recievableForm.value?.end;
      this.getRecivable();
     // payable 
     this.payableForm = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
    });
      console.log(this.payableForm.value);
      this.payablebleStartDate = this.payableForm.value?.start;
      this.payableEndDate = this.payableForm.value?.end;
      this.getPayable();
     // expense 
     this.expenseForm = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
    });
      console.log(this.expenseForm.value);
      this.expenseStartDate = this.expenseForm.value?.start;
      this.expenseEndDate = this.expenseForm.value?.end;
      this.getExpense();
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
     this.grossNetProfitForm.patchValue({
      start:this.startDate,
      end:this.endDate
     })
     this.getSelectedGrossDates();
   }
   saleTotalList: any;
   getSaleTotalDashboard() {
    const idString = JSON.stringify(this.selectData);
    console.log(idString);
     this.dashboardService.getSalesNumber(this.startDate, this.endDate,idString).subscribe((res: any) => {
       console.log(res);
       this.saleTotalList = res;
     },err=>{
      //this.toastr.error(err.message);
    })
   }
   //end
   //gross net profit
   grossStartDate: any;
   grossEndDate: any;
   getSelectedGrossDates() {
     console.log(this.grossNetProfitForm.value);
     const start = this.datePipe.transform(this.grossNetProfitForm.value.start, 'yyyy-MM-dd');
     const end = this.datePipe.transform(this.grossNetProfitForm.value.end, 'yyyy-MM-dd');
     this.grossStartDate = start;
     this.grossEndDate = end;
     this.getGross();
   }
   grossList: any;
   getGross() {
    const idString = JSON.stringify(this.selectData);
    console.log(idString);
    this.dashboardService.getGrossNetProfit(this.grossStartDate, this.grossEndDate,idString).subscribe((res: any) => {
      console.log(res);
      this.grossList=res
      const grossProfitPercentage = res?.gross_profit_percentage || 0;

      this.grossChartOptions = {
        series: [this.grossList?.gross_profit_percentage],   
        chart: {
          height: 180,
          type: "radialBar"
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%'
            },
            dataLabels: {
              show: true,
              name: {
                show: false
              },
              value: {
                offsetY: 10, // Adjust the vertical position of the value
                fontSize: '26px', // Set the font size of the value
                color: '#000', // Set the color of the value
                fontWeight:700,
                formatter: function (val: any) {
                  return val + '%'; // Format the value with a percentage symbol
                }
              }
            }
          }
        },
        fill: {
              colors: ['#808080'] 
            }
      };
      //net chart
      const netProfitPercentage = res?.net_profit_percentage || 0;
     
      this.netChartOptions = {
        series: [this.grossList?.net_profit_percentage],
        chart: {
          height: 180,
          type: "radialBar"
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%'
            },
            dataLabels: {
              show: true,
              name: {
                show: false
              },
              value: {
                offsetY: 10, // Adjust the vertical position of the value
                fontSize: '26px', // Set the font size of the value
                color: '#000', // Set the color of the value
                fontWeight:700,
                formatter: function (val: any) {
                  return val + '%'; // Format the value with a percentage symbol
                }
              }
            
            }
          }
        },
        // labels: ["Net Profit"],
        fill: {
          colors: ['#808080']
        }
      };
      
    },err=>{
      // //this.toastr.error(err.message);
    });
  }
   //end
  //payablevsrecvble
  recPaystartDate: any;
  recPayEndDate: any;
  getResPayDates() {
    console.log(this.recvsPayForm.value);
    const start = this.datePipe.transform(this.recvsPayForm.value.start, 'yyyy-MM-dd');
    const end = this.datePipe.transform(this.recvsPayForm.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.recPaystartDate = start;
    this.recPayEndDate = end;
    this.getResvsPay();
  }
  resPayList: any;
  getResvsPay() {
    const idString = JSON.stringify(this.selectData);
    console.log(idString);
    this.dashboardService.getTotalRecvsPay(this.recPaystartDate, this.recPayEndDate,idString).subscribe((res: any) => {
      console.log(res);
      this.resPayList = res;
      this.chartOptions = {
        series: [
          {
            name: 'Current Receivable',
            data: [this.resPayList?.current_receivable] // Current Receivable value
          },
          {
            name: 'Overdue Receivable',
            data: [this.resPayList?.overdue_receivable] // Overdue Receivable value
          }
        ],
        chart: {
          type: 'bar',
          height: 50,
          sparkline: {
            enabled: true // Display as sparkline (compact chart)
          },
          stacked: true // Stack the bars
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '80%', // Adjust the bar height
            dataLabels: {
              enabled: false
            }
          }
        },
        xaxis: {
          type: 'category',
          categories: ['Current Receivable', 'Overdue Receivable'] // Set category labels
        },
        yaxis: {
          max: this.resPayList?.current_receivable + this.resPayList?.overdue_receivable, 
          labels: {
            show: false // Hide y-axis labels
          }
        },
        title: {
          text: '',
          align: 'center'
        },
        tooltip: {
          enabled: true,
          y: {
            formatter: (val: any) => "₹ " + val // Format tooltip value
          }
        },
        fill: {
          colors: ['#F96F03', '#EBEDF2'] // Assign colors to the bars
        }
      };
      
      this.PayablechartOptions = {
        series: [
          {
            name: 'Current Payables',
            data: [this.resPayList?.current_payables]
          },
          {
            name: 'Overdue Payables',
            data: [this.resPayList?.overdue_payables] 
          }
        ],
        chart: {
          type: 'bar',
          height: 50,
          sparkline: {
            enabled: true // Display as sparkline (compact chart)
          },
          stacked: true // Stack the bars
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '80%', // Adjust the bar height
            dataLabels: {
              enabled: false
            }
          }
        },
        xaxis: {
          type: 'category',
          categories: ['Current Payables', 'Overdue Payables'] // Set category labels
        },
        yaxis: {
          max: this.resPayList?.current_payables + this.resPayList?.overdue_payables, 
          labels: {
            show: false // Hide y-axis labels
          }
        },
        title: {
          text: '',
          align: 'center'
        },
        tooltip: {
          enabled: true,
          y: {
            formatter: (val: any) => "₹ " + val // Format tooltip value
          }
        },
        fill: {
          colors: ['#F96F03', '#EBEDF2'] // Assign colors to the bars
        }
      };
    },err=>{
      //this.toastr.error(err.message);
    });
  }
  //end
//growth 
  growthstartDate: any;
  growthEndDate: any;
  getGrowthDates() {
    console.log(this.growthForm.value);
    const start = this.datePipe.transform(this.growthForm.value.start, 'yyyy-MM-dd');
    const end = this.datePipe.transform(this.growthForm.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.growthstartDate = start;
    this.growthEndDate = end;
    this.getGrowth();
  }
  growthList: any;
  getGrowth() {
    const idString = JSON.stringify(this.selectData);
    console.log(idString);
    this.dashboardService.getGrowth(this.growthstartDate, this.growthEndDate,idString).subscribe((res: any) => {
      console.log(res);
      const achievedAndForecasted = res?.["achieved and forcasted"] || [];
      const growthData = res?.growth_data || [];
      const categories = achievedAndForecasted.map(entry => `${this.getMonthName(entry.month)} ${entry.year}`);
      const series = [
        { name: 'Achieved', data: achievedAndForecasted.map(entry => entry.achieved) ,color: '#00ff00'},
        { name: 'Forecasted', data: achievedAndForecasted.map(entry => entry.forcasted) ,color: '#0000ff'},
        { name: 'Growth Achieved', data: growthData.map(entry => entry.forcasted) },
      ];
      this.GrowthchartOptions = {
        series: series,
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        dropShadow: {
          enabled: true,
          top: 3,
          left: 2,
          blur: 4,
          opacity: 1,
        },
        stroke: {
          // curve: "straight"
          curve: "smooth",
           width: 2
        },
        title: {
          // text: "Product Trends by Month",
          align: "left"
        },
        markers: {
          size: 6,
          strokeWidth: 0,
          hover: {
            size: 9
          }
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"],
            opacity: 0.5
          },
        },
        xaxis: {
          tooltip: {
            enabled: true
          },
          categories: categories
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          offsetY: -20
        }
      };
    
    },err=>{
      //this.toastr.error(err.message);
    });
  }
  getMonthName(monthNumber: number): string {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return months[monthNumber - 1];
  }
  //end
//unpaid invoice
   unpaidstartDate: any;
   unpaidEndDate: any;
   getUnpaidDates() {
     console.log(this.unpaidForm.value);
     const start = this.datePipe.transform(this.unpaidForm.value.start, 'yyyy-MM-dd');
     const end = this.datePipe.transform(this.unpaidForm.value.end, 'yyyy-MM-dd');
     console.log(start);
     console.log(end);
     this.unpaidstartDate = start;
     this.unpaidEndDate = end;
     this.getUnpaid();
   }
   unPaidList: any;
   getUnpaid() {
    const idString = JSON.stringify(this.selectData);
    console.log(idString);
     this.dashboardService.getUnpaidInvoices(this.unpaidstartDate, this.unpaidEndDate,idString).subscribe((res: any) => {
       console.log(res);
       this.unPaidList = res;
     });
   }
   //end
   //reciavable start
   recievableStartDate: any;
   recivableEndDate: any;
   getRecivableDates() {
     console.log(this.recievableForm.value);
     const start = this.datePipe.transform(this.recievableForm.value.start, 'yyyy-MM-dd');
     const end = this.datePipe.transform(this.recievableForm.value.end, 'yyyy-MM-dd');
     console.log(start);
     console.log(end);
     this.recievableStartDate = start;
     this.recivableEndDate = end;
     this.getRecivable();
   }
   recievableList: any;
   getRecivable() {
    const idString = JSON.stringify(this.selectData);
    console.log(idString);
     this.dashboardService.getTotalReceivables(this.recievableStartDate, this.recivableEndDate,idString).subscribe((res: any) => {
       console.log(res);
       this.recievableList = res;
     },err=>{
      //this.toastr.error(err.message);
    });
   }
   //end
    //payable
    payablebleStartDate: any;
    payableEndDate: any;
    getPayableDates() {
      console.log(this.payableForm.value);
      const start = this.datePipe.transform(this.payableForm.value.start, 'yyyy-MM-dd');
      const end = this.datePipe.transform(this.payableForm.value.end, 'yyyy-MM-dd');
      console.log(start);
      console.log(end);
      this.payablebleStartDate = start;
      this.payableEndDate = end;
      this.getPayable();
    }
    payableList: any;
    getPayable() {
      const idString = JSON.stringify(this.selectData);
      console.log(idString);
      this.dashboardService.getTodayPayables(this.payablebleStartDate, this.payableEndDate,idString).subscribe((res: any) => {
        console.log(res);
        this.payableList = res;
      },err=>{
        //this.toastr.error(err.message);
      });
    }
    //end
      //expense
      expenseStartDate: any;
      expenseEndDate: any;
      getExpenseDates() {
        console.log(this.expenseForm.value);
        const start = this.datePipe.transform(this.expenseForm.value.start, 'yyyy-MM-dd');
        const end = this.datePipe.transform(this.expenseForm.value.end, 'yyyy-MM-dd');
        console.log(start);
        console.log(end);
        this.expenseStartDate = start;
        this.expenseEndDate = end;
        this.getExpense();
      }
      expenseList: any;
      getExpense() {
        const idString = JSON.stringify(this.selectData);
        console.log(idString);
        this.dashboardService.getTodayExpense(this.expenseStartDate, this.expenseEndDate,idString).subscribe((res: any) => {
          console.log(res);
          this.expenseList = res?.data;
        },err=>{
          //this.toastr.error(err.message);
        });
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
        } 
        break;
      default:
        break;
    }
  }

   //get branch
   branchList: any[] = [];
   filteredBranchList: any[] = [];
   searchBranch: string = '';
   getBranch() {
     this.dashboardService.getBranch().subscribe((res: any) => {
       this.branchList = res;
       this.filteredBranchList = [...this.branchList];
     });
   }
   filterBranch() {
     if (this.searchBranch.trim() === '') {
       this.filteredBranchList = [...this.branchList];
     } else {
       this.filteredBranchList = this.branchList.filter(feature =>
         feature.title.toLowerCase().includes(this.searchBranch.toLowerCase())
       );
     }
   }
   // add remove branch 
   searchVariant = ''
   selectData: any[] = [];
   selectedCategoryIds: any[] = []
   SelectedBranch(variant: any,event:any) {
     if(event){
       console.log(variant);
       this.selectData.push(variant)
       console.log(this.selectData, 'selected data');
       //close dropdown 
       this.searchVariant = '';
       this.getSaleTotalDashboard();
       this.getGross();
       this.getResvsPay();
       this.getGrowth();
       this.getUnpaid();
       this.getRecivable();
       this.getPayable();
       this.getExpense();
     }else{
       const selectedIndex = this.selectData.findIndex(item => item == variant);
       console.log(selectedIndex);
       if (selectedIndex !== -1) {
         this.selectData.splice(selectedIndex, 1);
         this.getSaleTotalDashboard();
         this.getGross();
         this.getResvsPay();
         this.getGrowth();
         this.getUnpaid();
         this.getRecivable();
         this.getPayable();
         this.getExpense();
       }
       console.log(this.selectData);
     }
   }
     //dropdown auto close stop
     onLabelClick(event: Event) {
       // Prevent the event from propagating to the dropdown menu
       event.stopPropagation();
     }
}
