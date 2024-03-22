import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accupressurist',
  templateUrl: './accupressurist.component.html',
  styleUrls: ['./accupressurist.component.scss']
})
export class AccupressuristComponent {

  clinicForm!: FormGroup;
  ck: boolean = false;
  customValue:any
  constructor(private fb: FormBuilder,private _router: Router, private http: HttpClient,){
  }
  ngOnInit(): void {
    this.clinicForm = this.fb.group({
      fess:['',Validators.required],
      patientname: ['',Validators.required],
      phone: ['',Validators.required],
    })
    this.clinicForm.controls['fess'].setValue('499');
  }

  clinicsubmit() {
    if (this.clinicForm.invalid) {
      this.ck = true;
      return
  } 
  else{
    console.log("Clinic data",this.clinicForm.value);
    
    // this.service.addPatient(this.clinicForm.value).subscribe({
    //   next: (res)=>{
    //     this.router.navigate(["super-admin/patient"])
    //   },
    //   error: (err)=>{console.log(err)}
    //   })
  }
 
  }
}