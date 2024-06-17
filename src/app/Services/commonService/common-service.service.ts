import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }

  // myData =
  //   {
  //     "sale": [
  //       {
  //         "reportname": "Sale Summary ",
  //         "group": "sale",
  //         "url": "/report/sale-summary",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Sale Invoice",
  //         "group": "sale",
  //         "url": "/report/sale-invoice",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Sale Overdue",
  //         "group": "sale",
  //         "url": "/report/sale-overdue",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Time Wise Sale",
  //         "group": "sale",
  //         "url": "/report/time-wise-sale",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Amount Wise Sale",
  //         "group": "sale",
  //         "url": "/report/amount-wise-sale",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Category Wise Sale",
  //         "group": "sale",
  //         "url": "/report/category-wise-sale",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Brand Wise Sale",
  //         "group": "sale",
  //         "url": "/report/brand-wise-sale",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Product Wise Sale",
  //         "group": "sale",
  //         "url": "/report/product-wise-sale",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Customer Wise Sale",
  //         "group": "sale",
  //         "url": "/report/customer-wise-sale",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Credit Note Register",
  //         "group": "sale",
  //         "url": "/report/credit-note-register",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Customer Outstanding Sale",
  //         "group": "sale",
  //         "url": "/report/customer-outstanding-sale",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Customer Wise Sale Order",
  //         "group": "sale",
  //         "url": "/report/customer-wise-sale-order",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Tax Wise Sale Return",
  //         "group": "sale",
  //         "url": "/report/tax-wise-sale-return",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Sale Tax Summary",
  //         "group": "sale",
  //         "url": "/report/tax-wise-sale",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Tax Wise Credit Note",
  //         "group": "sale",
  //         "url": "/report/tax-wise-credit-note",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Sale Return",
  //         "group": "sale",
  //         "url": "/report/sale-return",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Sale Register",
  //         "group": "sale",
  //         "url": "/report/sale-register",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Sale Item Register",
  //         "group": "sale",
  //         "url": "/report/sale-item-register",
  //         "is_Favorite": false
  //       }, {
  //         "reportname": "Pending Sale Order",
  //         "group": "sale",
  //         "url": "/report/pending-sale-order",
  //         "is_Favorite": false
  //       },

  //     ],
  //     "purchase": [
  //       {
  //         "reportname": "Purchase Summary ",
  //         "group": "purchase",
  //         "url": "/report/purchase-summary",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Purchase Overdue",
  //         "group": "purchase",
  //         "url": "/report/purchase-overdue",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Purchase Outstanding",
  //         "group": "purchase",
  //         "url": "/report/purchase-outstanding",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Product Wise Purchase",
  //         "group": "purchase",
  //         "url": "/report/product-wise-purchase",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Category Wise Purchase",
  //         "group": "purchase",
  //         "url": "/report/category-wise-purchase",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Brand Wise Purchase",
  //         "group": "purchase",
  //         "url": "/report/brand-wise-purchase",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Price Wise Purchase",
  //         "group": "purchase",
  //         "url": "/report/price-wise-purchase",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Discount Wise Purchase",
  //         "group": "purchase",
  //         "url": "/report/discount-wise-purchase",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Supplier Wise Purchase",
  //         "group": "purchase",
  //         "url": "/report/supplier-wise",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Supplier Outstanding",
  //         "group": "purchase",
  //         "url": "/report/supplier-outstanding",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Debit Note Register",
  //         "group": "purchase",
  //         "url": "/report/debit-note-register",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Purchase Register",
  //         "group": "purchase",
  //         "url": "/report/purchase-register",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Tax Wise Purchase Return",
  //         "group": "purchase",
  //         "url": "/report/tax-wise-purchase-return",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Purchase Tax Summary",
  //         "group": "purchase",
  //         "url": "/report/tax-wise-purchase",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Tax Wise Debit Note",
  //         "group": "purchase",
  //         "url": "/report/tax-wise-debit-note",
  //         "is_Favorite": false
  //       },


  //     ],
  //     "inventory": [
  //       {
  //         "reportname": "Product History",
  //         "group": "inventory",
  //         "url": "/report/product-history",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Product Daybook",
  //         "group": "inventory",
  //         "url": "/report/product-daybook",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Stock Movement",
  //         "group": "inventory",
  //         "url": "/report/stock-movement",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Stock Verification",
  //         "group": "inventory",
  //         "url": "/report/stock-verification",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Out Standing Analysis",
  //         "group": "inventory",
  //         "url": "/report/out-standing-analysis",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Supplier Wise Product",
  //         "group": "inventory",
  //         "url": "/report/supplier-wise-product",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Stock Register",
  //         "group": "inventory",
  //         "url": "/report/stock-register",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Price Master",
  //         "group": "inventory",
  //         "url": "/report/price-master",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Abc Analysis",
  //         "group": "inventory",
  //         "url": "/report/abc-analysis",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Stock Summary",
  //         "group": "inventory",
  //         "url": "/report/stock-summary",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Sales By Product",
  //         "group": "inventory",
  //         "url": "/report/sales-by-product",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Stock Alert",
  //         "group": "inventory",
  //         "url": "/report/stock-alert",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Least Selling Product",
  //         "group": "inventory",
  //         "url": "/report/least-selling-product",
  //         "is_Favorite": false
  //       },


  //     ],
  //     "accounts": [
  //       {
  //         "reportname": "Day Book",
  //         "group": "accounts",
  //         "url": "/report/day-book",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Stock Ledger",
  //         "group": "accounts",
  //         "url": "/report/stock-ledger",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Journal Book",
  //         "group": "accounts",
  //         "url": "/report/journal-book",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "General Ledger",
  //         "group": "accounts",
  //         "url": "/report/general-ledger",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Product Ledger",
  //         "group": "accounts",
  //         "url": "/report/product-ledger",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Bank Book",
  //         "group": "accounts",
  //         "url": "/report/bank-book",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Expense Register",
  //         "group": "accounts",
  //         "url": "/report/expense-register",
  //         "is_Favorite": false
  //       },
  //       {
  //         "reportname": "Cash Book",
  //         "group": "accounts",
  //         "url": "/report/cash-book",
  //         "is_Favorite": false
  //       },


  //     ],
  //   }


  myData = [
    {
      "reportname": "Sale Summary ",
      "group": "sale",
      "url": "/report/sale-summary",
      "is_Favorite": false
    },
    {
      "reportname": "Sale Invoice",
      "group": "sale",
      "url": "/report/sale-invoice",
      "is_Favorite": false
    },
    {
      "reportname": "Sale Overdue",
      "group": "sale",
      "url": "/report/sale-overdue",
      "is_Favorite": false
    },
    {
      "reportname": "Time Wise Sale",
      "group": "sale",
      "url": "/report/time-wise-sale",
      "is_Favorite": false
    },
    {
      "reportname": "Amount Wise Sale",
      "group": "sale",
      "url": "/report/amount-wise-sale",
      "is_Favorite": false
    },
    {
      "reportname": "Category Wise Sale",
      "group": "sale",
      "url": "/report/category-wise-sale",
      "is_Favorite": false
    },
    {
      "reportname": "Brand Wise Sale",
      "group": "sale",
      "url": "/report/brand-wise-sale",
      "is_Favorite": false
    },
    {
      "reportname": "Product Wise Sale",
      "group": "sale",
      "url": "/report/product-wise-sale",
      "is_Favorite": false
    },
    {
      "reportname": "Customer Wise Sale",
      "group": "sale",
      "url": "/report/customer-wise-sale",
      "is_Favorite": false
    },
    {
      "reportname": "Credit Note Register",
      "group": "sale",
      "url": "/report/credit-note-register",
      "is_Favorite": false
    },
    {
      "reportname": "Customer Outstanding Sale",
      "group": "sale",
      "url": "/report/customer-outstanding-sale",
      "is_Favorite": false
    },
    {
      "reportname": "Customer Wise Sale Order",
      "group": "sale",
      "url": "/report/customer-wise-sale-order",
      "is_Favorite": false
    },
    {
      "reportname": "Tax Wise Sale Return",
      "group": "sale",
      "url": "/report/tax-wise-sale-return",
      "is_Favorite": false
    },
    {
      "reportname": "Sale Tax Summary",
      "group": "sale",
      "url": "/report/tax-wise-sale",
      "is_Favorite": false
    },
    {
      "reportname": "Tax Wise Credit Note",
      "group": "sale",
      "url": "/report/tax-wise-credit-note",
      "is_Favorite": false
    },
    {
      "reportname": "Sale Return",
      "group": "sale",
      "url": "/report/sale-return",
      "is_Favorite": false
    },
    {
      "reportname": "Sale Register",
      "group": "sale",
      "url": "/report/sale-register",
      "is_Favorite": false
    },
    {
      "reportname": "Sale Item Register",
      "group": "sale",
      "url": "/report/sale-item-register",
      "is_Favorite": false
    }, {
      "reportname": "Pending Sale Order",
      "group": "sale",
      "url": "/report/pending-sale-order",
      "is_Favorite": false
    },
    {
      "reportname": "Purchase Summary ",
      "group": "purchase",
      "url": "/report/purchase-summary",
      "is_Favorite": false
    },
    {
      "reportname": "Purchase Overdue",
      "group": "purchase",
      "url": "/report/purchase-overdue",
      "is_Favorite": false
    },
    {
      "reportname": "Purchase Outstanding",
      "group": "purchase",
      "url": "/report/purchase-outstanding",
      "is_Favorite": false
    },
    {
      "reportname": "Product Wise Purchase",
      "group": "purchase",
      "url": "/report/product-wise-purchase",
      "is_Favorite": false
    },
    {
      "reportname": "Category Wise Purchase",
      "group": "purchase",
      "url": "/report/category-wise-purchase",
      "is_Favorite": false
    },
    {
      "reportname": "Brand Wise Purchase",
      "group": "purchase",
      "url": "/report/brand-wise-purchase",
      "is_Favorite": false
    },
    {
      "reportname": "Price Wise Purchase",
      "group": "purchase",
      "url": "/report/price-wise-purchase",
      "is_Favorite": false
    },
    {
      "reportname": "Discount Wise Purchase",
      "group": "purchase",
      "url": "/report/discount-wise-purchase",
      "is_Favorite": false
    },
    {
      "reportname": "Supplier Wise Purchase",
      "group": "purchase",
      "url": "/report/supplier-wise",
      "is_Favorite": false
    },
    {
      "reportname": "Supplier Outstanding",
      "group": "purchase",
      "url": "/report/supplier-outstanding",
      "is_Favorite": false
    },
    {
      "reportname": "Debit Note Register",
      "group": "purchase",
      "url": "/report/debit-note-register",
      "is_Favorite": false
    },
    {
      "reportname": "Purchase Register",
      "group": "purchase",
      "url": "/report/purchase-register",
      "is_Favorite": false
    },
    {
      "reportname": "Tax Wise Purchase Return",
      "group": "purchase",
      "url": "/report/tax-wise-purchase-return",
      "is_Favorite": false
    },
    {
      "reportname": "Purchase Tax Summary",
      "group": "purchase",
      "url": "/report/tax-wise-purchase",
      "is_Favorite": false
    },
    {
      "reportname": "Tax Wise Debit Note",
      "group": "purchase",
      "url": "/report/tax-wise-debit-note",
      "is_Favorite": false
    },

    {
      "reportname": "Product History",
      "group": "inventory",
      "url": "/report/product-history",
      "is_Favorite": false
    },
    {
      "reportname": "Product Daybook",
      "group": "inventory",
      "url": "/report/product-daybook",
      "is_Favorite": false
    },
    {
      "reportname": "Stock Movement",
      "group": "inventory",
      "url": "/report/stock-movement",
      "is_Favorite": false
    },
    {
      "reportname": "Stock Verification",
      "group": "inventory",
      "url": "/report/stock-verification",
      "is_Favorite": false
    },
    {
      "reportname": "Out Standing Analysis",
      "group": "inventory",
      "url": "/report/out-standing-analysis",
      "is_Favorite": false
    },
    {
      "reportname": "Supplier Wise Product",
      "group": "inventory",
      "url": "/report/supplier-wise-product",
      "is_Favorite": false
    },
    {
      "reportname": "Stock Register",
      "group": "inventory",
      "url": "/report/stock-register",
      "is_Favorite": false
    },
    {
      "reportname": "Price Master",
      "group": "inventory",
      "url": "/report/price-master",
      "is_Favorite": false
    },
    {
      "reportname": "Abc Analysis",
      "group": "inventory",
      "url": "/report/abc-analysis",
      "is_Favorite": false
    },
    {
      "reportname": "Stock Summary",
      "group": "inventory",
      "url": "/report/stock-summary",
      "is_Favorite": false
    },
    {
      "reportname": "Sales By Product",
      "group": "inventory",
      "url": "/report/sales-by-product",
      "is_Favorite": false
    },
    {
      "reportname": "Stock Alert",
      "group": "inventory",
      "url": "/report/stock-alert",
      "is_Favorite": false
    },
    {
      "reportname": "Least Selling Product",
      "group": "inventory",
      "url": "/report/least-selling-product",
      "is_Favorite": false
    },
    {
      "reportname": "Loss Qty ",
      "group": "inventory",
      "url": "/report/loss-qty",
      "is_Favorite": false
    },
    {
      "reportname": "scrap entry",
      "group": "inventory",
      "url": "/report/scrap-entry/",
      "is_Favorite": false
    },
    {
      "reportname": "Day Book",
      "group": "accounts",
      "url": "/report/day-book",
      "is_Favorite": false
    },
    {
      "reportname": "Stock Ledger",
      "group": "accounts",
      "url": "/report/stock-ledger",
      "is_Favorite": false
    },
    {
      "reportname": "Journal Book",
      "group": "accounts",
      "url": "/report/journal-book",
      "is_Favorite": false
    },
    {
      "reportname": "General Ledger",
      "group": "accounts",
      "url": "/report/general-ledger",
      "is_Favorite": false
    },
    {
      "reportname": "Product Ledger",
      "group": "accounts",
      "url": "/report/product-ledger",
      "is_Favorite": false
    },
    {
      "reportname": "Bank Book",
      "group": "accounts",
      "url": "/report/bank-book",
      "is_Favorite": false
    },
    {
      "reportname": "Expense Register",
      "group": "accounts",
      "url": "/report/expense-register",
      "is_Favorite": false
    },
    {
      "reportname": "Cash Book",
      "group": "accounts",
      "url": "/report/cash-book",
      "is_Favorite": false
    },
    {
      "reportname": "Balance Sheet",
      "group": "accounts",
      "url": "/report/balance-sheet",
      "is_Favorite": false
    },
    {
      "reportname": "Trial Balance",
      "group": "accounts",
      "url": "/report/trial-balance",
      "is_Favorite": false
    },
    {
      "reportname": "Profit & Loss",
      "group": "accounts",
      "url": "/report/profit-loss",
      "is_Favorite": false
    },

  ]

  formatDate(date: Date): string {
    const offsetDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
    return offsetDate.toISOString().split('T')[0];
  }

  formatDateTime(date: Date): string {
    const offsetDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
    return offsetDate.toISOString().slice(0, 16);
  }

  minDateValidator(minDate: Date) {
    return (control: { value: string | number | Date }) => {
      const inputDate = new Date(control.value);
      return inputDate >= minDate ? null : { minDate: true };
    };
  }

  maxDateValidator(maxDate: Date) {
    return (control: { value: string | number | Date }) => {
      const inputDate = new Date(control.value);
      return inputDate <= maxDate ? null : { maxDate: true };
    };
  }

  determineMinMaxDates(financialYear: string): { minDate: Date, maxDate: Date } {
    let minDate: Date;
    let maxDate: Date;

    switch (financialYear) {
      case '6':
        minDate = new Date(2023, 3, 1, 0, 0, 0);
        maxDate = new Date(2024, 2, 31, 23, 59, 59);
        break;
      case '12':
        minDate = new Date(2024, 3, 1, 0, 0, 0);
        maxDate = new Date(2025, 2, 31, 23, 59, 59);
        break;
      case '14':
        minDate = new Date(2025, 3, 1, 0, 0, 0);
        maxDate = new Date(2026, 2, 31, 23, 59, 59);
        break;
    }

    return { minDate, maxDate };
  }

  setMinMaxDates(dateControl: AbstractControl, financialYear: string, dynamicMinDate?: Date) {
    let { minDate, maxDate } = this.determineMinMaxDates(financialYear);

    if (dynamicMinDate && dynamicMinDate > minDate) {
      minDate = dynamicMinDate;
    }

    const formattedMinDate = this.formatDate(minDate);
    const formattedMaxDate = this.formatDate(maxDate);

    const formControl = dateControl as FormControl;
    formControl.setValidators([Validators.required, this.minDateValidator(minDate), this.maxDateValidator(maxDate)]);
    formControl.updateValueAndValidity();

    if (formControl.value) {
      const selectedDate = new Date(formControl.value);
      if (selectedDate < minDate || selectedDate > maxDate) {
        formControl.reset('');
      }
    }

    return { formattedMinDate, formattedMaxDate };
  }

  setMinMaxDatesForDateTime(dateControl: AbstractControl, financialYear: string, dynamicMinDate?: Date) {
    let { minDate, maxDate } = this.determineMinMaxDates(financialYear);

    if (dynamicMinDate && dynamicMinDate > minDate) {
      minDate = dynamicMinDate;
    }

    const formattedMinDate = this.formatDateTime(minDate);
    const formattedMaxDate = this.formatDateTime(maxDate);

    const formControl = dateControl as FormControl;
    formControl.setValidators([Validators.required, this.minDateValidator(minDate), this.maxDateValidator(maxDate)]);
    formControl.updateValueAndValidity();

    if (formControl.value) {
      const selectedDate = new Date(formControl.value);
      if (selectedDate < minDate || selectedDate > maxDate) {
        formControl.reset('');
      }
    }

    return { formattedMinDate, formattedMaxDate };
  }

  dateRangeValidator(financialYear: string) {
    return (control: FormControl): { [key: string]: boolean } | null => {
      if (!control.parent) {
        return null;
      }

      const startDate = control.parent.get('start')?.value;
      const endDate = control.parent.get('end')?.value;

      if (!startDate || !endDate) {
        return null;
      }

      const { minDate, maxDate } = this.determineMinMaxDates(financialYear);

      if (control === control.parent.get('start') && new Date(startDate) < minDate) {
        return { dateRange: true };
      }

      if (control === control.parent.get('end') && new Date(endDate) > maxDate) {
        return { dateRange: true };
      }

      return null;
    };
  }

  validateAndClearDates(formGroup: FormGroup, minDate: Date, maxDate: Date): void {
    const startControl = formGroup.get('start');
    const endControl = formGroup.get('end');
    const startDate = new Date(startControl?.value);
    const endDate = new Date(endControl?.value);

    if (startDate < minDate || startDate > maxDate) {
      startControl?.setValue('');
    }

    if (endDate < minDate || endDate > maxDate) {
      endControl?.setValue('');
    }
  }
}
