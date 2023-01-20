import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(private fb: FormBuilder,private copmpanyService:CompanyService) { }
  date = new Date();
  ngOnInit(): void {
    this.companyForm = this.fb.group({
      name:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^[0-9]*$/),]),
      financial_year:new FormControl('',[Validators.required]),
      currency:new FormControl('',[Validators.required]),
      gst:new FormControl('',[Validators.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}")]),
      address:new FormControl('',[Validators.required]),
      pincode:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]),
      state:new FormControl('',[Validators.required]),  
      country:new FormControl('',[Validators.required]),
    
    })
  }
  delete(index: any) {
    this.tableData.splice(index, 1);
  }

  submit(){
    console.log(this.companyForm.value);
    
    this.copmpanyService.postCompany(this.companyForm.value).subscribe(res=>{
      console.log(res);
      
    })
  }
}
