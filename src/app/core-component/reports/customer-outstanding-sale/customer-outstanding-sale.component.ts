import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import * as XLSX from 'xlsx';
import html2canvas from 'html2canvas';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { ReportService } from 'src/app/Services/report/report.service';

@Component({
  selector: 'app-customer-outstanding-sale',
  templateUrl: './customer-outstanding-sale.component.html',
  styleUrls: ['./customer-outstanding-sale.component.scss']
})
export class CustomerOutstandingSaleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
