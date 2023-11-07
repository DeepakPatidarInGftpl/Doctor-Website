import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';

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
  constructor(private fb: FormBuilder, private copmpanyService: CompanyService, private toastr: ToastrService,
     private router: Router,
     private coreService:CoreService) { }
  date = new Date();
  ngOnInit(): void {
    this.companyForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/),]),
      financial_year: new FormControl('', [Validators.required]),
      currency: new FormControl('', [Validators.required]),
      gst: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}")]),
      address: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      city:new FormControl('',[Validators.required])
    })

    this.getCountry();
    this.getYear();
    this.getCurrency();
  }
  delete(index: any) {
    this.tableData.splice(index, 1);
  }
yearDetails:any
  getYear(){
    this.coreService.getFinancialYear().subscribe(res=>{
      // console.log(res); 
      this.yearDetails=res;
    })
  }
  currencyDetails:any
  getCurrency(){
    this.coreService.getCurrency().subscribe(res=>{
      // console.log(res);
      this.currencyDetails=res;
    })
  }
  country: any
  getCountry() {
    this.copmpanyService.countryList().subscribe(res => {
      this.country = res;
    })
  }

  getState() {
    this.copmpanyService.stateList().subscribe(res => {
      // this.state = res;
      // console.log(this.state);
    })
  }
  city:any
  getCity(){
    this.coreService.getCity().subscribe(res=>{
      // this.city=res;
    })
  }
  state: any
  selectState(val: any) {
    // console.log(val);
    this.coreService.getStateByCountryId(val).subscribe(res => {
      this.state = res;
      // console.log(this.state);
    })
  }
  selectCity(val:any){
    this.coreService.getCityByStateId(val).subscribe(res=>{
      this.city=res
    })
  }
  dateError = null;
  loaders=false;
  submit() {
    // console.log(this.companyForm.value);
    if (this.companyForm.valid) {
      this.loaders=true;
      this.copmpanyService.postCompany(this.companyForm.value).subscribe(res => {
        // console.log(res);
        if (res.success) {
          this.loaders=false;
          this.toastr.success(res.msg)
          this.companyForm.reset();
          this.router.navigate(['//masters/companylist']);
          // .then(() => {
          //   window.location.reload()
          // })
        }
      }, err => {
        // console.log(err.error.gst);
 
        if (err.error.financial_year) {
          this.dateError = 'Date (format:dd/mm/yyyy)';
          setTimeout(() => {
            this.dateError=''
          }, 2000);
        }
        // this.toastr.error(err.error.gst)
        // this.toastr.error(err.error.email)
        // this.toastr.error(err.error.state)
        // this.toastr.error(err.error.country)
        // this.toastr.error(err.error.phone)
        // this.toastr.error(err.error.pincode)
        // this.toastr.error(err.error.financial_year)
        // this.toastr.error(err.error.currency)
      })
    } else {
      this.companyForm.markAllAsTouched()
      // console.log('hhhhhh');

    }
  }

  get name() {
    return this.companyForm.get('name')
  }
  get gst() {
    return this.companyForm.get('gst');
  }
  get phone() {
    return this.companyForm.get('phone');
  }
  get pincode() {
    return this.companyForm.get('pincode')
  }
  get financial_year() {
    return this.companyForm.get('financial_year')
  }
  get email() {
    return this.companyForm.get('email')
  }
  get currency() {
    return this.companyForm.get('currency')
  }
  get address() {
    return this.companyForm.get('address')
  }
  get countryy() {
    return this.companyForm.get('country')
  }
  get statee() {
    return this.companyForm.get('state')
  }
  get cityy(){
    return this.companyForm.get('city')
  }
}
