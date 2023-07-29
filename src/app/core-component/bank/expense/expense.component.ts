import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { PosDashboardService } from 'src/app/Services/pos-dashboard.service';
@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  expenceForm!: FormGroup
  get f() {
    return this.expenceForm.controls;
  }

  constructor(private fb: FormBuilder, private purchaseService: PurchaseServiceService, private coreService: CoreService, private posService: PosDashboardService, private toastr: ToastrService) { }
  supplierControlName = 'party';
  supplierControl = new FormControl();
  productOption: any[] = [];
  filteredOptions: Observable<any>;
  suppliers: any[] = [];
  filteredSuppliers: Observable<any[]>;

  ngOnInit(): void {
    this.expenceForm = this.fb.group({
      party: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      remarks: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      non_gst: new FormControl('', [Validators.required,]),
      payment_account: new FormControl('', [Validators.required]),
    })

    this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value, true))
    );

    this.getBank();
    this.getSuuplier()
  }

  bankList: any
  getBank() {
    this.posService.getCompanyBank().subscribe(res => {
      this.bankList = res;
    })
  }
  private _filter(value: string | number, include: boolean): any[] {
    console.log(value);
    const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
    const filteredSuppliers = include
      ? this.suppliers.filter(supplier => supplier.name.toLowerCase().includes(filterValue))
      : this.suppliers.filter(supplier => !supplier.name.toLowerCase().includes(filterValue));
    if (!include && filteredSuppliers.length === 0) {
      console.log("No results found");
      filteredSuppliers.push({ name: "No data found" }); // Add a dummy entry for displaying "No data found"
    }
    return filteredSuppliers;
  }

  get supplier() {
    return this.expenceForm.get('party') as FormControl;
  }
  supplierList: any;
  getSuuplier() {
    this.purchaseService.getSupplier().subscribe((res: any) => {
      console.log(res);
      this.suppliers = res;
      // this.variants=res;
    })
  }
  oncheck(event: any) {
    console.log(event);
    const selectedItemId = event; // Assuming the ID field is 'item_id'
    console.log(selectedItemId);

    this.expenceForm.patchValue({
      party: selectedItemId
    });
  }
  loaders = false
  addRes:any;
  submit() {
    let formData = new FormData();
    formData.append('party', this.expenceForm.get('party')?.value);
    formData.append('amount', this.expenceForm.get('amount')?.value);
    formData.append('remarks', this.expenceForm.get('remarks')?.value);
    formData.append('non_gst', this.expenceForm.get('non_gst')?.value);
    formData.append('payment_account', this.expenceForm.get('payment_account')?.value);
    if (this.expenceForm.valid) {
      this.loaders = true;
      this.posService.expensePayment(formData).subscribe(res => {
        console.log(res);
        this.addRes=res;
        if(this.addRes.isSuccess){
          this.toastr.success(this.addRes.msg)
          this.loaders = false;
          this.expenceForm.reset();
        }else{
          this.loaders = false;
        }
        
      },err=>{
        this.loaders=false;
      })
    } else {
      this.expenceForm.markAllAsTouched()
    }
  }

  get party() {
    return this.expenceForm.get('party')
  }
  get amount() {
    return this.expenceForm.get('amount')
  }
  get remarks() {
    return this.expenceForm.get('remarks')
  }
  get non_gst() {
    return this.expenceForm.get('non_gst')
  }
  get payment_account() {
    return this.expenceForm.get('payment_account')
  }
}
