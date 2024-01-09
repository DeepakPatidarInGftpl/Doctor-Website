
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { HrmServiceService } from 'src/app/Services/hrm/hrm-service.service';

@Component({
  selector: 'app-incentive-ledger-employee',
  templateUrl: './incentive-ledger-employee.component.html',
  styleUrls: ['./incentive-ledger-employee.component.scss']
})
export class IncentiveLedgerEmployeeComponent implements OnInit {

  filteredemployee: Observable<any[]>;
  employeeControl = new FormControl();
  constructor(private router:Router,private hrmService: HrmServiceService, private fb: FormBuilder, private contactService: ContactService) { }

  id: any
  filterForm: FormGroup
  get f() {
    return this.filterForm.controls;
  }
  ngOnInit(): void {
    this.getEmployee();
    this.filterForm = this.fb.group({
      from_date: new FormControl('', [Validators.required]),
      to_date: new FormControl('', [Validators.required]),
      employee_id: new FormControl('', [Validators.required])
    })
    this.filteredemployee = this.employeeControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );

    //incentive
    // this.getIncentiveLedger('','','')
  }
  private _filter(value: string | number, include: boolean): any[] {
    // console.log(value);
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredemployee = include
      ? this.employeeList.filter(employee => employee.name.toLowerCase().includes(filterValue))
      : this.employeeList.filter(employee => !employee.name.toLowerCase().includes(filterValue));
    if (!include && filteredemployee.length === 0) {
      filteredemployee.push({ name: "No data found" });
    }
    return filteredemployee;
  }

  incentiveList: any;
  getIncentiveLedger(employeeId: any, from_date: any, to_date: any) {
    this.hrmService.getIncentiveLedgerEmployee(employeeId, from_date, to_date).subscribe((res: any) => {
      this.incentiveList = res;
      console.warn(this.incentiveList);
      console.log(this.incentiveList?.SaleBills);
    })
  }

  employeeList: any[] = [];
  getEmployee() {
    this.contactService.getEmployee().subscribe((res: any) => {
      this.employeeList = res;
      // this.variants=res;
    })
  }
  isFilterData=false;
  onCheck(employeeId: any) {
    console.log(employeeId, 'employeeId');
    this.filterForm.get('employee_id').patchValue(employeeId);
  }
  submit() {
    console.log(this.filterForm.value);
    if (this.filterForm.valid) {
      let data = this.filterForm.value;
      let id = data?.employee_id;
      let to_date = data?.to_date;
      let from_date = data?.from_date;
      this.isFilterData=true;
      this.getIncentiveLedger(id, to_date, from_date);
    }else{
      this.filterForm.markAllAsTouched();
    }
  }

  redirectTo(type: any,vId:any) {
    console.log(type);
    
    if (type === 'Receipt') {
      this.router.navigate(['//transaction/detailsrecieptVoucher' +vId]);
    } else if (type === 'POSOrder') {
      this.router.navigate(['//newpos/posOrderDetails' +vId]); //
    } else if (type === 'MaterialInward') {
      this.router.navigate(['//purchase/material-InwardDetails/' +vId]);
    }else if (type === 'DebitNote') {
      this.router.navigate(['//transaction/detailsdebitnote/' +vId]);
    } else if (type === 'PurchaseBill') {
      this.router.navigate(['//purchase/purchase-billDetails/' +vId]);
    } else if (type === 'PurchaseOrder') {
      this.router.navigate(['//purchase/purchaseDetails/' +vId]);
    }else if (type === 'PurchaseReturn') {
      this.router.navigate(['//purchase/details-purchaseReturn/' +vId]);
    } else if (type === 'SaleBill') {
      this.router.navigate(['//sales/salesbilldetails/' +vId]);
    } else if (type === 'SaleReturn') {
      this.router.navigate(['//sales/salesReturnedetails/' +vId]);
    }  else if (type === 'PurchaseReturn') {
      this.router.navigate(['//purchase/details-purchaseReturn/' +vId]);
    } else if (type === 'MaterialOutward ') {
      this.router.navigate(['//sales/salesMaterialOutwardDetails/' +vId]);
    } else{
      console.log('no voucher type matching');
      
    }
  }
  p: number = 1
  itemsPerPage = 10;
  key = 'id';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }

  pp: number = 1
  itemsPerPage2 = 10;
  keyy = 'id';
  reversee: boolean = false;
  sortt(key) {
    this.keyy = key;
    this.reversee = !this.reversee
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

}


