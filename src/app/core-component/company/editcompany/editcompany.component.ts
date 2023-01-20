import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.scss']
})
export class EditcompanyComponent implements OnInit {

  companyForm!: FormGroup
  constructor(private fb: FormBuilder, private Arout: ActivatedRoute,private copmpanyService:CompanyService) { }

  companyId: any
  ngOnInit(): void {
    // this.companyId = this.Arout.snapshot.paramMap.get('id');
    // console.log(this.companyId);
    this.Arout.params.subscribe(res=>{
      console.log(res);
      this.companyId=res;
     console.log( this.companyId.id);
     
      
    })

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
  }
  submit() {
    console.log(this.companyForm.value);
    console.log(this.companyId.id);
    
    this.copmpanyService.updateCompany(this.companyForm.value,this.companyId.id).subscribe(res=>{
      console.log(res);
      
    })
  }
}
