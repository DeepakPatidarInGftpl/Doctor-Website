import { DatePipe } from '@angular/common';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import {ChartComponent,ApexPlotOptions,ApexNonAxisChartSeries} from "ng-apexcharts";
import { DashboardService } from 'src/app/Services/DashboardService/dashboard.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-sales-dashboard',
  templateUrl: './sales-dashboard.component.html',
  styleUrls: ['./sales-dashboard.component.scss'],
  animations: [
    trigger('bounce', [
      state('void', style({
        transform: 'scale(1)',
        opacity: 0
      })),
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('300ms ease-in-out', style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in-out', style({ transform: 'scale(0.5)', opacity: 0 }))
      ])
    ])
  ]
})
export class SalesDashboardComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<any>;
  public categoryWiseSaleChartOptions: Partial<any>;
  public dailySaleChartOptions: Partial<any>;
  public subCatSaleChartOptions: Partial<any>;
  public inventoryChartOptions: Partial<any>;
  public saleTotalChartOption: Partial<any>;
  series: ApexNonAxisChartSeries;
  labels: string[];
  plotOptions: ApexPlotOptions;
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

  constructor(private router: Router, private coreService: CoreService, private dashboardService: DashboardService, private datePipe: DatePipe,
    private zone: NgZone, private toastr: ToastrService, private companyService: CompanyService) {
  }
  campaignOne: FormGroup;
  dailySalesForm: FormGroup;
  salevsPurchaseForm: FormGroup;
  categoryWiseSaleForm: FormGroup;
  transactionForm: FormGroup;
  subCatWiseSaleForm: FormGroup;
  inventoryForm: FormGroup;
  customerForm: FormGroup;
  recentSaleForm: FormGroup;
  recentAddedProductForm: FormGroup;
  bestSellingProductForm: FormGroup;
  leastSellingProductForm: FormGroup;

  isAdmin=false;
  isModalOpen:any;
  fyID:any;
  ngOnInit(): void {
// blur bg when modal open
if(this.companyService.CheckBlur$){
  this.companyService.CheckBlur$.subscribe((res:any)=>{

let str :string = 'heelooereroierou'

console.log(str.substring(0,5),'deepak')

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
  });
}
//end
    this.companyService.userDetails$.subscribe((res: any) => {
      if (res && res.role=='admin'){
this.isAdmin=true;
      }else{
        this.isAdmin=false;
      }
    });
     //22-5
     if (localStorage.getItem('financialYear')) {
      let fy = localStorage.getItem('financialYear');
      // console.warn(JSON.parse(fy));
      let fyId = JSON.parse(fy);
      this.fyID=fyId;
    }
    //22-5
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 29);

    const formattedStartDate = this.formatDate(startDate);
    const formattedToday = this.formatDate(today);
    // campaignOne
    this.campaignOne = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
    });
    // console.log(this.campaignOne.value);
    this.startDate = this.campaignOne.value?.start;
    this.endDate = this.campaignOne.value?.end;
    // daily sales
    this.dailySalesForm = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
    })
    this.dailySalesStartDate = this.dailySalesForm.value?.start;
    this.dailySalesEndDate = this.dailySalesForm.value?.end;
    // salevsPurchaseForm
    this.salevsPurchaseForm = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
    })
    this.salePurchaseStartDate = this.salevsPurchaseForm.value?.start;
    this.salePurchaseEndDate = this.salevsPurchaseForm.value?.end;
    //category wise sale
    this.categoryWiseSaleForm = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
    })
    this.categoryWiseSaleStartDate = this.categoryWiseSaleForm.value?.start;
    this.categoryWiseSaleEndDate = this.categoryWiseSaleForm.value?.end;
    //inventory 
    this.inventoryForm = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
    })
    this.inventoryStartDate = this.inventoryForm.value?.start;
    this.inventoryEndDate = this.inventoryForm.value?.end;
    //sub cat sale 
    this.subCatWiseSaleForm = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
    })
    this.subCatSaleStartDate = this.subCatWiseSaleForm.value?.start;
    this.subCatSaleEndDate = this.subCatWiseSaleForm.value?.end;
    //customer 
    this.customerForm = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
    })
    this.customerStartDate = this.customerForm.value?.start;
    this.customerEndDate = this.customerForm.value?.end;
    //recent sales 
    this.recentSaleForm = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
    })
    this.recentSalesStartDate = this.recentSaleForm.value?.start;
    this.recentSalesEndDate = this.recentSaleForm.value?.end;
    //recently added product 
    this.recentAddedProductForm = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
    })
    this.recentProductStartDate = this.recentAddedProductForm.value?.start;
    this.recentProductEndDate = this.recentAddedProductForm.value?.end;
    //recently added product 
    this.recentAddedProductForm = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
    })
    this.recentProductStartDate = this.recentAddedProductForm.value?.start;
    this.recentProductEndDate = this.recentAddedProductForm.value?.end;
    //best selliing product 
    this.bestSellingProductForm = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
    })
    this.bestProductStartDate = this.bestSellingProductForm.value?.start;
    this.bestProductEndDate = this.bestSellingProductForm.value?.end;
    //least selling product 
    this.leastSellingProductForm = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
    })
    this.leastProductStartDate = this.leastSellingProductForm.value?.start;
    this.leastProductEndDate = this.leastSellingProductForm.value?.end;
    // transaction form
    this.transactionForm = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
    })
    this.transactionStartDate = this.transactionForm.value?.start;
    this.transactionEndDate = this.transactionForm.value?.end;
    this.transactionType = 'Purchase';

    this.getBranch(); //22-4
    this.getSaleTotalDashboard();
    this.getSalePurchaseGraph();
    this.getCustomerRetention();
    this.getSalePurchaseTotalDashboard();
    this.getDailySales();
    this.getTransactionTotalDashboard();
    this.getcategoryWiseSale();
    this.getsubCatSale();
    this.getInventory();
    this.customerActivity();
    this.getcustomer();
    this.getRecentSale();
    this.getRecentProduct();
    this.getbestProduct();
    this.getleastProduct();
  }
  //sale number
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
    this.getSalePurchaseGraph();
    this.getCustomerRetention();
  }
  saleTotalList: any;
  getSaleTotalDashboard() {
    const idString = JSON.stringify(this.selectData);
    // console.log(idString);
    this.dashboardService.getSalesNumber(this.startDate, this.endDate, idString,this.fyID).subscribe((res: any) => {
      console.log(res);
      this.saleTotalList = res;
      // },err=>{
      //   // this.toastr.error(err.message)
    })

  }
  customerRetentionList: any;
  getCustomerRetention() {
    const idString = JSON.stringify(this.selectData);
    console.log(idString);
    this.dashboardService.getCutomerRetention(this.startDate, this.endDate, idString,this.fyID).subscribe((res: any) => {
      console.log(res);
      this.customerRetentionList = res;
    }, err => {
      // this.toastr.error(err.message)
    })
  }
  salePurchaseList: any;
  getSalePurchaseGraph() {
    const idString = JSON.stringify(this.selectData);
    console.log(idString);

    this.dashboardService.getTotalSalePurchase(this.startDate, this.endDate, idString,this.fyID).subscribe((res: any) => {
      console.log(res,'per');
      this.salePurchaseList = res;
      this.saleTotalChartOption = {
        chart: {
          id: 'spark1',
          group: 'sparks',
          type: 'line',
          height: 20,
          width: 80,
          sparkline: {
            enabled: true
          },
        },
        series: [{
          data: [this.salePurchaseList?.loss_sale_percent, this.salePurchaseList?.profit_sales_percentage]
        }],
        stroke: {
          curve: 'smooth',
          width: 2
        },
        markers: {
          size: 0
        },
        colors: ['#FF8431'],
        tooltip: {
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(val) {
                return '';
              }
            }
          }
        }
      };
    })
  }
  //end
  //daily sales
  dailySalesStartDate: any;
  dailySalesEndDate: any;
  getSelectedDailySalesDates() {
    console.log(this.dailySalesForm.value);
    const start = this.datePipe.transform(this.dailySalesForm.value.start, 'yyyy-MM-dd');
    const end = this.datePipe.transform(this.dailySalesForm.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.dailySalesStartDate = start;
    this.dailySalesEndDate = end;
    this.getDailySales();
  }
  dailySalesList: any[] = [];
  getDailySales() {
    const idString = JSON.stringify(this.selectData);
    console.log(idString);
    this.dashboardService.getDailySales(this.dailySalesStartDate, this.dailySalesEndDate, idString,this.fyID).subscribe((res: any) => {
      if (res?.success) {
        this.dailySalesList = res?.data;
        // apexchart    
        this.dailySaleChartOptions = {
          series: [
            { name: 'Total Sale Bill', data: this.dailySalesList.map(item => item.total_sale_bill?.toFixed(2)) },
            { name: 'Total Purchase Bill', data: this.dailySalesList.map(item => item.total_purchase_bill?.toFixed(2)) },
            { name: 'Total Sale Return', data: this.dailySalesList.map(item => item.total_sale_return?.toFixed(2)) },
            { name: 'Total Purchase Return', data: this.dailySalesList.map(item => item.total_purchase_return?.toFixed(2)) }
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
            categories: this.dailySalesList.map(item => this.formatDateMonth(item.date))
          },
          legend: {
            position: 'bottom',
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
      } else {
        this.toastr.error(res?.msg)
      }
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
  salevsPurchaseList: any[] = [];
  getSalePurchaseTotalDashboard() {
    const idString = JSON.stringify(this.selectData);
    console.log(idString);
    this.dashboardService.getSalevsPurchase(this.salePurchaseStartDate, this.salePurchaseEndDate, idString,this.fyID).subscribe((res: any) => {
      if (res.success) {
        this.salevsPurchaseList = res?.data;
        // apexchart    
        this.chartOptions = {
          series: [
            { name: 'Total Sale Bill', data: this.salevsPurchaseList.map(item => item.total_sale_bill?.toFixed(2)) },
            { name: 'Total Purchase Bill', data: this.salevsPurchaseList.map(item => item.total_purchase_bill?.toFixed(2)) },
            { name: 'Total Sale Return', data: this.salevsPurchaseList.map(item => item.total_sale_return?.toFixed(2)) },
            { name: 'Total Purchase Return', data: this.salevsPurchaseList.map(item => item.total_purchase_return?.toFixed(2)) }
          ],
          chart: {
            type: "bar",
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "55%",
              endingShape: "rounded"
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ["transparent"]
          },
          xaxis: {
            type: 'category',
            categories: this.salevsPurchaseList.map(item => this.formatDateMonth(item.date))
          },
          yaxis: {
            // title: {
            //   text: "$ (thousands)"
            // }
          },
          fill: {
            opacity: 1
          },
          tooltip: {
            // y: {
            //   formatter: function(val) {
            //     return "$ " + val + " thousands";
            //   }
            // }
          }
        };
      } else {
        this.toastr.error(res?.msg)
      }

    })
  }
  //end 
  //category wise sale
  categoryWiseSaleStartDate: any;
  categoryWiseSaleEndDate: any;
  getSelectedcategoryWiseSaleDates() {
    console.log(this.categoryWiseSaleForm.value);
    const start = this.datePipe.transform(this.categoryWiseSaleForm.value.start, 'yyyy-MM-dd');
    const end = this.datePipe.transform(this.categoryWiseSaleForm.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.categoryWiseSaleStartDate = start;
    this.categoryWiseSaleEndDate = end;
    this.getcategoryWiseSale();
  }
  categoryWiseSaleList: any[] = [];
  getcategoryWiseSale() {
    const idString = JSON.stringify(this.selectData);
    console.log(idString);
    this.dashboardService.getSubCatWiseSale(this.categoryWiseSaleStartDate, this.categoryWiseSaleEndDate, idString,this.fyID).subscribe((res: any) => {
      if (res?.success) {
        this.categoryWiseSaleList = res?.data;
        // apexchart    
        this.categoryWiseSaleChartOptions = {
          series: [
            { name: 'Percentage', data: this.categoryWiseSaleList.map(item => item.percentage) },
            { name: 'Total Sale Amount', data: this.categoryWiseSaleList.map(item => item.total_sale_amount?.toFixed(2)) },
          ],
          chart: {
            type: "bar",
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "15%",
              endingShape: "rounded"
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            colors: ["transparent"]
          },
          xaxis: {
            type: 'category',
            categories: this.categoryWiseSaleList.map(item => item.subcategory)
          },
          yaxis: [
            {
              title: {
                text: "Percentage (%)"
              },
            },
            {
              opposite: true,
              title: {
                text: "Total Sale Amount (₹)"
              }
            }
          ],
          fill: {
            opacity: 1
          },
          tooltip: {
            y: [
              {
                formatter: function (val) {
                  return val.toFixed(2) + " %";
                }
              },
              {
                formatter: function (val) {
                  return "₹ " + val.toFixed(2);
                }
              }
            ]
          }
        };
      } else {
        // this.toastr.error(res.msg)
      }
    }, err => {
      //this.toastr.error(err.message);
    });
  }
  //end 
  //sub cat sale 
  subCatSaleStartDate: any;
  subCatSaleEndDate: any;
  getSelectedsubCatSaleDates() {
    console.log(this.subCatWiseSaleForm.value);
    const start = this.datePipe.transform(this.subCatWiseSaleForm.value.start, 'yyyy-MM-dd');
    const end = this.datePipe.transform(this.subCatWiseSaleForm.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.subCatSaleStartDate = start;
    this.subCatSaleEndDate = end;
    this.getsubCatSale();
  }
  subCatSaleList: any[] = [];
  getsubCatSale() {
    const idString = JSON.stringify(this.selectData);
    console.log(idString);
    this.dashboardService.getCategoryWiseSale(this.subCatSaleStartDate, this.subCatSaleEndDate, idString,this.fyID).subscribe((res: any) => {
      if (res?.success) {
        this.subCatSaleList = res?.data;
        // apexchart    
        this.subCatSaleChartOptions = {
          series: this.subCatSaleList.map(item => item.percentage),
          chart: {
            type: "donut",
            width: 350,
          },
          // labels: this.subCatSaleList.map(item => item?.subcategory),
          labels: this.subCatSaleList.map(item => item?.category),
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 350
                },
                legend: {
                  position: "bottom"
                }
              }
            }
          ],
          legend: {
            position: 'bottom',
            offsetY: 0
          },
        };
      } else {
        // this.toastr.error(res.msg)
      }
      // end
    }, err => {
      //this.toastr.error(err.message);
    });
  }
  //end 
  //inventory
  inventoryStartDate: any;
  inventoryEndDate: any;
  getSelectedInventoryDates() {
    console.log(this.inventoryForm.value);
    const start = this.datePipe.transform(this.inventoryForm.value.start, 'yyyy-MM-dd');
    const end = this.datePipe.transform(this.inventoryForm.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.inventoryStartDate = start;
    this.inventoryEndDate = end;
    this.getInventory();
  }
  inventoryList: any[] = [];
  getInventory() {
    const idString = JSON.stringify(this.selectData);
    console.log(idString);
    this.dashboardService.getInventory(this.inventoryStartDate, this.inventoryEndDate, idString,this.fyID).subscribe((res: any) => {
      const inventoryData = res?.inventory_category_percentage || {};
      const categories = Object.keys(inventoryData);
      const values = Object.values(inventoryData);
      // 
      console.log(categories);

      this.inventoryChartOptions = {
        series: values,
        chart: {
          width: 350,
          type: "donut",
          events: {
            dataPointSelection: (event, chartContext, config) => {
              console.log(chartContext);
              console.log(config);
              console.log(categories);
              categories.forEach((res: any, index: number) => {
                if (index == config?.dataPointIndex) {
                  console.warn(res);
                  this.zone.run(() => {
                    this.router.navigate(['/product/analysis/', res]);
                  });
                }
              })
            }
          }
        },
        labels: categories,
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 350
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ],
        legend: {
          position: 'bottom',
          offsetY: 0
        },
      };


    }, err => {
      //this.toastr.error(err.message);
    });
  }
  //end 
  // customer activity
  customerActivty: any;
  customerActivity() {
    this.dashboardService.getCustomerActivity().subscribe((res: any) => {
      this.customerActivty = res;
    }, err => {
      //this.toastr.error(err.message);
    })
  }
  //top 20customer 
  customerStartDate: any;
  customerEndDate: any;
  getSelectedcustomerDates() {
    console.log(this.customerForm.value);
    const start = this.datePipe.transform(this.customerForm.value.start, 'yyyy-MM-dd');
    const end = this.datePipe.transform(this.customerForm.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.customerStartDate = start;
    this.customerEndDate = end;
    this.getcustomer();
  }
  customerList: any[] = [];
  getcustomer() {
    const idString = JSON.stringify(this.selectData);
    console.log(idString);
    this.dashboardService.getTopCustomer(this.customerStartDate, this.customerEndDate, idString,this.fyID).subscribe((res: any) => {
      this.customerList = res?.data;
    }, err => {
      //this.toastr.error(err.message);
    });
  }
  //end 

  //Recent sale 
  recentSalesStartDate: any;
  recentSalesEndDate: any;
  getSelectedRecentSalesDates() {
    console.log(this.recentSaleForm.value);
    const start = this.datePipe.transform(this.recentSaleForm.value.start, 'yyyy-MM-dd');
    const end = this.datePipe.transform(this.recentSaleForm.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.recentSalesStartDate = start;
    this.recentSalesEndDate = end;
    this.getRecentSale();
  }
  recentSalesList: any[] = [];
  getRecentSale() {
    const idString = JSON.stringify(this.selectData);
    console.log(idString);
    this.dashboardService.getRecentlySales(this.customerStartDate, this.customerEndDate, idString,this.fyID).subscribe((res: any) => {
      this.recentSalesList = res?.data;
    }, err => {
      //this.toastr.error(err.message);
    });
  }
  //end 
  //Recent added product 
  recentProductStartDate: any;
  recentProductEndDate: any;
  getSelectedrecentProductDates() {
    console.log(this.recentAddedProductForm.value);
    const start = this.datePipe.transform(this.recentAddedProductForm.value.start, 'yyyy-MM-dd');
    const end = this.datePipe.transform(this.recentAddedProductForm.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.recentProductStartDate = start;
    this.recentProductEndDate = end;
    this.getRecentProduct();
  }
  recentProductList: any[] = [];
  getRecentProduct() {
    const idString = JSON.stringify(this.selectData);
    console.log(idString);
    this.dashboardService.getRecentlyAddedProduct(this.recentProductStartDate, this.recentProductEndDate, idString,this.fyID).subscribe((res: any) => {
      this.recentProductList = res?.data;
      this.recentProductList.forEach((res: any, index: any) => {
        this.sho[index] = true;
        this.sho1[index] = false;
        this.sho2[index] = false;
      })

    }, err => {
      //this.toastr.error(err.message);
    });
  }


  //end 

  //Recent added product 
  bestProductStartDate: any;
  bestProductEndDate: any;
  getSelectedbestProductDates() {
    console.log(this.bestSellingProductForm.value);
    const start = this.datePipe.transform(this.bestSellingProductForm.value.start, 'yyyy-MM-dd');
    const end = this.datePipe.transform(this.bestSellingProductForm.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.bestProductStartDate = start;
    this.bestProductEndDate = end;
    this.getbestProduct();
  }
  bestProductList: any[] = [];
  getbestProduct() {
    const idString = JSON.stringify(this.selectData);
    console.log(idString);
    this.dashboardService.getBestSellingProduct(this.bestProductStartDate, this.bestProductEndDate, idString,this.fyID).subscribe((res: any) => {
      this.bestProductList = res?.data;
    }, err => {
      //this.toastr.error(err.message);
    });
  }
  //end 
  //Recent added product 
  leastProductStartDate: any;
  leastProductEndDate: any;
  getSelectedleastProductDates() {
    console.log(this.leastSellingProductForm.value);
    const start = this.datePipe.transform(this.leastSellingProductForm.value.start, 'yyyy-MM-dd');
    const end = this.datePipe.transform(this.leastSellingProductForm.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.leastProductStartDate = start;
    this.leastProductEndDate = end;
    this.getleastProduct();
  }
  leastProductList: any[] = [];
  getleastProduct() {
    const idString = JSON.stringify(this.selectData);
    console.log(idString);
    this.dashboardService.getLeastSellingProduct(this.leastProductStartDate, this.leastProductEndDate, idString,this.fyID).subscribe((res: any) => {
      this.leastProductList = res?.data;
    }, err => {
      //this.toastr.error(err.message);
    });
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
    const idString = JSON.stringify(this.selectData);
    console.log(idString);
    this.coreService.getDashboardTransaction(this.transactionStartDate, this.transactionEndDate, this.transactionType, idString).subscribe((res: any) => {
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
          this.getSalePurchaseGraph();
          this.getCustomerRetention();
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
        } else if (type == 'categorywisesale') {
          this.categoryWiseSaleForm.patchValue({
            start: this.formatDate(today),
            end: this.formatDate(today)
          });
          console.warn(this.categoryWiseSaleForm.value);
          this.categoryWiseSaleStartDate = this.categoryWiseSaleForm.value?.start;
          this.categoryWiseSaleEndDate = this.categoryWiseSaleForm.value?.end;
          this.getcategoryWiseSale();
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
          this.getSalePurchaseGraph();
          this.getCustomerRetention();
        } else if (type == 'salevspurchase') {
          this.salevsPurchaseForm.patchValue({
            start: this.formatDate(yesterday),
            end: this.formatDate(yesterday)
          });
          console.warn(this.salevsPurchaseForm.value);
          this.salePurchaseStartDate = this.salevsPurchaseForm.value?.start;
          this.salePurchaseEndDate = this.salevsPurchaseForm.value?.end;
          this.getSalePurchaseTotalDashboard();
        } else if (type == 'categorywisesale') {
          this.categoryWiseSaleForm.patchValue({
            start: this.formatDate(yesterday),
            end: this.formatDate(yesterday)
          });
          console.warn(this.categoryWiseSaleForm.value);
          this.categoryWiseSaleStartDate = this.categoryWiseSaleForm.value?.start;
          this.categoryWiseSaleEndDate = this.categoryWiseSaleForm.value?.end;
          this.getcategoryWiseSale();
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
          this.getSalePurchaseGraph();
          this.getCustomerRetention();
        } else if (type == 'salevspurchase') {
          this.salevsPurchaseForm.patchValue({
            start: this.formatDate(firstDayOfWeek),
            end: this.formatDate(lastDayOfWeek)
          });
          console.warn(this.salevsPurchaseForm.value);
          this.salePurchaseStartDate = this.salevsPurchaseForm.value?.start;
          this.salePurchaseEndDate = this.salevsPurchaseForm.value?.end;
          this.getSalePurchaseTotalDashboard();
        } else if (type == 'categorywisesale') {
          this.categoryWiseSaleForm.patchValue({
            start: this.formatDate(firstDayOfWeek),
            end: this.formatDate(lastDayOfWeek)
          });
          console.warn(this.categoryWiseSaleForm.value);
          this.categoryWiseSaleStartDate = this.categoryWiseSaleForm.value?.start;
          this.categoryWiseSaleEndDate = this.categoryWiseSaleForm.value?.end;
          this.getcategoryWiseSale();
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
          this.getSalePurchaseGraph();
          this.getCustomerRetention();
        } else if (type == 'salevspurchase') {
          this.salevsPurchaseForm.patchValue({
            start: this.formatDate(firstDayOfMonth),
            end: this.formatDate(lastDayOfMonth)
          });
          console.warn(this.salevsPurchaseForm.value);
          this.salePurchaseStartDate = this.salevsPurchaseForm.value?.start;
          this.salePurchaseEndDate = this.salevsPurchaseForm.value?.end;
          this.getSalePurchaseTotalDashboard();
        } else if (type == 'categorywisesale') {
          this.categoryWiseSaleForm.patchValue({
            start: this.formatDate(firstDayOfMonth),
            end: this.formatDate(lastDayOfMonth)
          });
          console.warn(this.categoryWiseSaleForm.value);
          this.categoryWiseSaleStartDate = this.categoryWiseSaleForm.value?.start;
          this.categoryWiseSaleEndDate = this.categoryWiseSaleForm.value?.end;
          this.getcategoryWiseSale();
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
          this.getSalePurchaseGraph();
          this.getCustomerRetention();
        } else if (type == 'salevspurchase') {
          this.salevsPurchaseForm.patchValue({
            start: this.formatDate(firstDayOfLastMonth),
            end: this.formatDate(lastDayOfLastMonth)
          });
          console.warn(this.salevsPurchaseForm.value);
          this.salePurchaseStartDate = this.salevsPurchaseForm.value?.start;
          this.salePurchaseEndDate = this.salevsPurchaseForm.value?.end;
          this.getSalePurchaseTotalDashboard();
        } else if (type == 'categorywisesale') {
          this.categoryWiseSaleForm.patchValue({
            start: this.formatDate(firstDayOfLastMonth),
            end: this.formatDate(lastDayOfLastMonth)
          });
          console.warn(this.categoryWiseSaleForm.value);
          this.categoryWiseSaleStartDate = this.categoryWiseSaleForm.value?.start;
          this.categoryWiseSaleEndDate = this.categoryWiseSaleForm.value?.end;
          this.getcategoryWiseSale();
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
          this.getSalePurchaseGraph();
          this.getCustomerRetention();
        } else if (type == 'salevspurchase') {
          this.salevsPurchaseForm.patchValue({
            start: this.formatDate(last15DaysStart),
            end: this.formatDate(currentDate)
          });
          console.warn(this.salevsPurchaseForm.value);
          this.salePurchaseStartDate = this.salevsPurchaseForm.value?.start;
          this.salePurchaseEndDate = this.salevsPurchaseForm.value?.end;
          this.getSalePurchaseTotalDashboard();
        } else if (type == 'categorywisesale') {
          this.categoryWiseSaleForm.patchValue({
            start: this.formatDate(last15DaysStart),
            end: this.formatDate(currentDate)
          });
          console.warn(this.categoryWiseSaleForm.value);
          this.categoryWiseSaleStartDate = this.categoryWiseSaleForm.value?.start;
          this.categoryWiseSaleEndDate = this.categoryWiseSaleForm.value?.end;
          this.getcategoryWiseSale();
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
          this.getSalePurchaseGraph();
          this.getCustomerRetention();
        } else if (type == 'salevspurchase') {
          this.salevsPurchaseForm.patchValue({
            start: this.formatDate(last30DaysStart),
            end: this.formatDate(currentDate)
          });
          console.warn(this.salevsPurchaseForm.value);
          this.salePurchaseStartDate = this.salevsPurchaseForm.value?.start;
          this.salePurchaseEndDate = this.salevsPurchaseForm.value?.end;
          this.getSalePurchaseTotalDashboard();
        } else if (type == 'categorywisesale') {
          this.categoryWiseSaleForm.patchValue({
            start: this.formatDate(last30DaysStart),
            end: this.formatDate(currentDate)
          });
          console.warn(this.categoryWiseSaleForm.value);
          this.categoryWiseSaleStartDate = this.categoryWiseSaleForm.value?.start;
          this.categoryWiseSaleEndDate = this.categoryWiseSaleForm.value?.end;
          this.getcategoryWiseSale();
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
          this.getSalePurchaseGraph();
          this.getCustomerRetention();
        } else if (type == 'salevspurchase') {
          this.salevsPurchaseForm.patchValue({
            start: this.formatDate(thisQuarterStart),
            end: this.formatDate(thisQuarterEnd)
          });
          console.warn(this.salevsPurchaseForm.value);
          this.salePurchaseStartDate = this.salevsPurchaseForm.value?.start;
          this.salePurchaseEndDate = this.salevsPurchaseForm.value?.end;
          this.getSalePurchaseTotalDashboard();
        } else if (type == 'categorywisesale') {
          this.categoryWiseSaleForm.patchValue({
            start: this.formatDate(thisQuarterStart),
            end: this.formatDate(thisQuarterEnd)
          });
          console.warn(this.categoryWiseSaleForm.value);
          this.categoryWiseSaleStartDate = this.categoryWiseSaleForm.value?.start;
          this.categoryWiseSaleEndDate = this.categoryWiseSaleForm.value?.end;
          this.getcategoryWiseSale();
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
          this.getSalePurchaseGraph();
          this.getCustomerRetention();
        } else if (type == 'salevspurchase') {
          this.salevsPurchaseForm.patchValue({
            start: this.formatDate(lastQuarterStart),
            end: this.formatDate(lastQuarterEnd)
          });
          console.warn(this.salevsPurchaseForm.value);
          this.salePurchaseStartDate = this.salevsPurchaseForm.value?.start;
          this.salePurchaseEndDate = this.salevsPurchaseForm.value?.end;
          this.getSalePurchaseTotalDashboard();
        } else if (type == 'categorywisesale') {
          this.categoryWiseSaleForm.patchValue({
            start: this.formatDate(lastQuarterStart),
            end: this.formatDate(lastQuarterEnd)
          });
          console.warn(this.categoryWiseSaleForm.value);
          this.categoryWiseSaleStartDate = this.categoryWiseSaleForm.value?.start;
          this.categoryWiseSaleEndDate = this.categoryWiseSaleForm.value?.end;
          this.getcategoryWiseSale();
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
          this.getSalePurchaseGraph();
          this.getCustomerRetention();
        } else if (type == 'salevspurchase') {
          this.salevsPurchaseForm.patchValue({
            start: this.formatDate(thisFinancialYearStart),
            end: this.formatDate(thisFinancialYearEnd)
          });
          console.warn(this.salevsPurchaseForm.value);
          this.salePurchaseStartDate = this.salevsPurchaseForm.value?.start;
          this.salePurchaseEndDate = this.salevsPurchaseForm.value?.end;
          this.getSalePurchaseTotalDashboard();
        } else if (type == 'categorywisesale') {
          this.categoryWiseSaleForm.patchValue({
            start: this.formatDate(thisFinancialYearStart),
            end: this.formatDate(thisFinancialYearEnd)
          });
          console.warn(this.categoryWiseSaleForm.value);
          this.categoryWiseSaleStartDate = this.categoryWiseSaleForm.value?.start;
          this.categoryWiseSaleEndDate = this.categoryWiseSaleForm.value?.end;
          this.getcategoryWiseSale();
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
          this.getSalePurchaseGraph();
          this.getCustomerRetention();
        } else if (type == 'salevspurchase') {
          this.salevsPurchaseForm.patchValue({
            start: this.formatDate(lastFinancialYearStart),
            end: this.formatDate(lastFinancialYearEnd)
          });
          console.warn(this.salevsPurchaseForm.value);
          this.salePurchaseStartDate = this.salevsPurchaseForm.value?.start;
          this.salePurchaseEndDate = this.salevsPurchaseForm.value?.end;
          this.getSalePurchaseTotalDashboard();
        } else if (type == 'categorywisesale') {
          this.categoryWiseSaleForm.patchValue({
            start: this.formatDate(lastFinancialYearStart),
            end: this.formatDate(lastFinancialYearEnd)
          });
          console.warn(this.categoryWiseSaleForm.value);
          this.categoryWiseSaleStartDate = this.categoryWiseSaleForm.value?.start;
          this.categoryWiseSaleEndDate = this.categoryWiseSaleForm.value?.end;
          this.getcategoryWiseSale();
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
  onChartClick(event: any) {
    console.log(event);
    const category = event?.x?.label || ''; // Get the clicked category label
    console.log(category);
    if (category) {
      this.router.navigate(['/product/analysis', category]);
    }
  }

  // hide show product readmore
  sho: boolean[] = [];;
  sho1: boolean[] = [];
  sho2: boolean[] = [];
  hide(i: number) {
    this.sho[i] = false;
    this.sho1[i] = true;
    console.log(this.sho[i]);
  }
  hide1(i: number) {
    this.sho[i] = true;
    this.sho1[i] = false;
  }
  
  //end
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
  SelectedBranch(variant: any, event: any) {
    if (event) {
      console.log(variant);
      this.selectData.push(variant)
      console.log(this.selectData, 'selected data');
      //close dropdown 
      this.getSalePurchaseGraph();
      this.getCustomerRetention();
      this.getSaleTotalDashboard();
      this.getTransactionTotalDashboard();
      this.getDailySales();
      this.getSalePurchaseTotalDashboard();
      this.getcategoryWiseSale();
      this.getsubCatSale();
      this.getInventory();
      this.getcustomer();
      this.getRecentSale();
      this.getRecentProduct();
      this.getbestProduct();
      this.getleastProduct();
      this.searchVariant = '';
    } else {
      const selectedIndex = this.selectData.findIndex(item => item == variant);
      console.log(selectedIndex);
      if (selectedIndex !== -1) {
        this.selectData.splice(selectedIndex, 1);
        this.getSalePurchaseGraph();
        this.getCustomerRetention();
        this.getSaleTotalDashboard();
        this.getTransactionTotalDashboard();
        this.getDailySales();
        this.getSalePurchaseTotalDashboard();
        this.getcategoryWiseSale();
        this.getsubCatSale();
        this.getInventory();
        this.getcustomer();
        this.getRecentSale();
        this.getRecentProduct();
        this.getbestProduct();
        this.getleastProduct();
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
