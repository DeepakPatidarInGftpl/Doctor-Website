import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-closing-financial-year',
  templateUrl: './closing-financial-year.component.html',
  styleUrls: ['./closing-financial-year.component.scss']
})
export class ClosingFinancialYearComponent implements OnInit {

  constructor(private commonService: CommonServiceService, private coreService: CoreService,
    private companyService: CompanyService, private router: Router) { }

  current_financial_year: string;
  next_financial_year: string;
  financialYear: string;
  nextFinancialYear: string;
  financialYearMap: { [key: number]: number } = {
    6: 12,
    12: 14,
    14: null
  };


  ngOnInit(): void {
    this.financialYear = localStorage.getItem('financialYear');
    this.nextFinancialYear = this.getNextFinancialYearId(Number(this.financialYear))?.toString();

    let { minDate, maxDate } = this.commonService.determineMinMaxDates(this.financialYear);
    console.log(minDate.getFullYear());
    console.log(maxDate.getFullYear());


    const currentFinancialYear = minDate.getFullYear() + '-' + maxDate.getFullYear();
    const nextFinancialYear = (minDate.getFullYear() + 1) + '-' + (maxDate.getFullYear() + 1);

    console.log(currentFinancialYear);
    this.current_financial_year = currentFinancialYear;
    this.next_financial_year = nextFinancialYear;
  }

  getNextFinancialYearId(currentId: number): number {
    return this.financialYearMap[currentId] || 0;
  }

  submit() {
    const payload = {
      from_financial_year: this.financialYear,
      to_financial_year: this.nextFinancialYear
    }
    this.coreService.closingStockFinancialYear(payload).subscribe((res) => {
      console.log(res);
      let closeModal = <HTMLElement>document.querySelector('.closeModal');
      closeModal.click();
    })
  }

  closingAccountFinancialYear() {
    const payload = {
      from_financial_year: this.financialYear,
      to_financial_year: this.nextFinancialYear
    }
    this.coreService.closingAccountFinancialYear(payload).subscribe((res) => {
      console.log(res);
      let closeModal = <HTMLElement>document.querySelector('.accountModal');
      closeModal.click();
    })
  }

  ClosingAccountPreview() {
    let closeModal = <HTMLElement>document.querySelector('.accountModal');
    closeModal.click();
    this.router.navigate(['/settings/closingFinancialYear/account-ledger-preview']);
  }

  preview() {
    let closeModal = <HTMLElement>document.querySelector('.closeModal');
    closeModal.click();
    this.router.navigate(['/settings/closingFinancialYear/stock-preview']);
  }

}
