import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.scss']
})
export class AddcompanyComponent implements OnInit {
  public tableData = [
    {
      ProductName: 'Apple Earpods',
      QTY: '10.00	',
      PurchasePrice: '2000.00',
      Discount: '500.00',
      Tax: '0.00',
      TaxAmount: '0.00',
      UnitCost: '2000.00	',
      TotalCost: '2000.00	',
      img: 'assets/img/product/product7.jpg',
    },
    {
      ProductName: 'Macbook Pro',
      QTY: '15.00	',
      PurchasePrice: '6000.00',
      Discount: '100.00',
      Tax: '0.00',
      TaxAmount: '0.00',
      UnitCost: '1000.00	',
      TotalCost: '1000.00	',
      img: 'assets/img/product/product6.jpg',
    }]

  companyForm!: FormGroup
  get f() {
    return this.companyForm.controls;
  }
  constructor(private fb: FormBuilder, private copmpanyService: CompanyService, private toastr: ToastrService, private router:Router) { }
  date = new Date();
  ngOnInit(): void {
    this.companyForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/),]),
      financial_year: new FormControl('', [Validators.required]),
      currency: new FormControl('', [Validators.required]),
      gst: new FormControl('', [Validators.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}")]),
      address: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),

    })

    this.getCountry();
    this.getState();
  }
  delete(index: any) {
    this.tableData.splice(index, 1);
  }

  country: any
  getCountry() {
    this.copmpanyService.countryList().subscribe(res => {
      this.country = res;
    })
  }

  state: any
  getState() {
    this.copmpanyService.stateList().subscribe(res => {
      this.state = res;
      console.log(this.state);
    })
  }

  selectState(val: any) {
    console.log(val);
    this.copmpanyService.stateList().subscribe(res => {
      this.state = res;
      console.log(this.state);
    })
  }
  submit() {
    console.log(this.companyForm.value);
    // if(this.companyForm.valid){
      this.copmpanyService.postCompany(this.companyForm.value).subscribe(res => {
        console.log(res);
        if (res.msg == "Successfuly Added") {
          this.toastr.success(res.msg)
          this.companyForm.reset()
          this.router.navigate(['//company/companylist']).then(()=>{
            window.location.reload()
          })
        }
      },err=>{
        // console.log(err.error.gst);
        // this.toastr.error(err.error.gst)
        // this.toastr.error(err.error.email)
        // this.toastr.error(err.error.state)
        // this.toastr.error(err.error.country)
        // this.toastr.error(err.error.phone)
        // this.toastr.error(err.error.pincode)
        // this.toastr.error(err.error.financial_year)
        // this.toastr.error(err.error.currency)
      })
    // }else{

    // } 
  }
}
