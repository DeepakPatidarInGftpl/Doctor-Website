import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-update-debit-note',
  templateUrl: './update-debit-note.component.html',
  styleUrls: ['./update-debit-note.component.scss']
})
export class UpdateDebitNoteComponent implements OnInit {

  constructor(private fb: FormBuilder, private transactionService: TransactionService, private purchaseService: PurchaseServiceService,
    private toastr: ToastrService, private router: Router, private Arout: ActivatedRoute, private contactService: ContactService) { }
  debitNoteForm!: FormGroup;

  get f() {
    return this.debitNoteForm.controls;
  }
  supplierControlName = 'party';
  supplierControl = new FormControl();
  filteredSuppliers: Observable<any[]>;

  id: any
  getRes: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.supplierControl.setValue('Loading...');

    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because months are zero-indexed
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const defaultDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;

    this.debitNoteForm = this.fb.group({
      party: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      debit_note_no: new FormControl('',),
      purchase_bill: new FormControl('', [Validators.required]),
      reason: new FormControl(''),
      amount: new FormControl(''),
      tax: new FormControl('', [Validators.pattern(/^(100|[0-9]{1,2})$/)]),
      note: new FormControl('',),
      total: new FormControl(''),
    })

    this.transactionService.getDebitNoteById(this.id).subscribe(res => {
      this.getRes = res;
      this.debitNoteForm.patchValue(this.getRes);
      this.debitNoteForm.get('party')?.patchValue(res.party.id);
      this.debitNoteForm.get('purchase_bill')?.patchValue(res.purchase_bill);
      this.contactService.getSupplierById(res.party.id).subscribe(res => {
        console.log(res);
        this.supplierControl.setValue(res.company_name);
        console.log(this.supplierControl);
        //patch local-date
        const formattedDate = new Date(this.getRes.date).toISOString().slice(0, 16);
        this.debitNoteForm.get('date')?.patchValue(formattedDate);
      })
    })

    this.getSupplier();
    this.getPurchaseBill();
    this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );
  }

  amounts: number;
  taxs: number;
  totals: number;
  calculateTax() {
    if (this.taxs) {
      let taxAmount = (this.amounts * this.taxs) / 100;
      this.totals = this.amounts + taxAmount;
    } else {
      this.totals = this.amounts
    }

  }

  suppliers: any[] = [];
  getSupplier() {
    this.purchaseService.getSupplier().subscribe((res: any) => {
      console.log(res);
      this.suppliers = res
    })
  }
  purchaseList: any
  getPurchaseBill() {
    this.purchaseService.getPurchaseBill().subscribe(res => {
      this.purchaseList = res;
    })
  }

  private _filter(value: string | number, include: boolean): any[] {
    // console.log(value);
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredSuppliers = include
      ? this.suppliers.filter(supplier => supplier.name.toLowerCase().includes(filterValue))
      : this.suppliers.filter(supplier => !supplier.name.toLowerCase().includes(filterValue));
    if (!include && filteredSuppliers.length === 0) {
      // console.log("No results found");
      filteredSuppliers.push({ name: "No data found" }); // Add a dummy entry for displaying "No data found"
    }
    return filteredSuppliers;
  }

  oncheck(event: any) {
    console.log(event);
    this.debitNoteForm.patchValue({
      party: event
    })
  }

  get supplier() {
    return this.debitNoteForm.get('party') as FormControl;
  }
  addRes: any;
  dateError = null;
  loaders = false;
  submit() {
    if (this.debitNoteForm.valid) {
      this.loaders = true;
      this.transactionService.updateDebitNote(this.debitNoteForm.value, this.id).subscribe(res => {
        // console.log(res);
        this.loaders = false;
        this.addRes = res
        if (this.addRes.Is_Success == "True") {
          this.toastr.success(this.addRes.msg)
          this.debitNoteForm.reset()
          this.router.navigate(['//transaction/debitnoteList'])
        } else {
          this.loaders = false;
        }
      }, err => {
        this.loaders = false;
      })
    } else {
      this.debitNoteForm.markAllAsTouched()
      // console.log('hhhhhh');
    }
  }

  get debit_note_no() {
    return this.debitNoteForm.get('debit_note_no')
  }
  get date() {
    return this.debitNoteForm.get('date')
  }
  get purchase_bill() {
    return this.debitNoteForm.get('purchase_bill')
  }
  get reason() {
    return this.debitNoteForm.get('reason')
  }
  get amount() {
    return this.debitNoteForm.get('amount')
  }
  get tax() {
    return this.debitNoteForm.get('tax')
  }
  get note() {
    return this.debitNoteForm.get('note')
  }
  get total() {
    return this.debitNoteForm.get('total')
  }
}
