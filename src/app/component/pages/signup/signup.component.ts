import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorserviceService } from 'src/app/service/doctorservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  loginForm!: FormGroup;
  registerForm!: FormGroup;
  ck: boolean = false;
  ckk: boolean = false;
  customValue:any
  ckval: string = 'Login';
  constructor(private fb: FormBuilder,private _router: Router, private http: HttpClient,private service:DoctorserviceService){
  }
  ngOnInit(): void {

      this.loginForm = this.fb.group({
        phone: ['+', Validators.required],
        password: ['', Validators.required],
      });
       
      this.registerForm = this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        phone: ['', Validators.required],
      });
    
  }
  
  login() {
    if (this.loginForm.invalid) {
      this.ck = true;
      return
  } 
  else{
   let p = this.loginForm.get('phone')?.value ;
    console.log("Login data",this.loginForm.value);
    this.service.login(this.loginForm.value).subscribe({
      next: (res)=>{
        this._router.navigate(["/"])
      },
      error: (err)=>{console.log(err)}
      })
  }
 
  }
  register() {
    if (this.registerForm.invalid) {
      this.ckk = true;
      return
  } 
  else{
    console.log("Register data",this.registerForm.value);
    this.service.register(this.registerForm.value).subscribe({
      next: (res)=>{
        this._router.navigate(["/login"])
      },
      error: (err)=>{console.log(err)}
      })
  }
 
  }



  // hendalClick(name : string) {
  //   this.ckval = name
  // }

}
