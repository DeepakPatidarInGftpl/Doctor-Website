import { Injectable } from '@angular/core';

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
  
  
  ]
}
