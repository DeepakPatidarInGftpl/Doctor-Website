import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Auth } from 'src/app/interfaces/auth';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { WebstorgeService } from 'src/app/shared/webstorge.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  password: any;
  show = false;
  public CustomControler: any;
  public subscription: Subscription;


  form!: FormGroup
  get f() {
    return this.form.controls;
  }

  //SIDEBAR SETTINGS.SCSS -> sidebar open karne ke liye uncomment karna hoga

  constructor(private storage: WebstorgeService, private authService: AuthServiceService,
     private toastr: ToastrService, private router:Router) {
    this.subscription = this.storage.Loginvalue.subscribe((data: any) => {
      if (data != 0) {
        this.CustomControler = data;
      }
    });
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

    this.storage.Checkuser();
    this.password = 'password';

    if(localStorage.getItem('token')) {
      this.router.navigate(['/dashboard']);
    }
  }


  loginRes: undefined | Auth
  loginStatus: string = ''

  submit() {
    // this.storage.Login(this.form.value);
    // console.log(this.form.value);
    this.authService.login(this.form.value).subscribe(res => {
      // console.log(res);
      this.loginRes = res;
      // console.log(this.loginRes.token);
      if (this.loginRes.token) {
        this.toastr.success('Login Successfull');
        this.router.navigate(['//dashboard']).then(()=>{
          window.location.reload();
        })
        localStorage.setItem('token', this.loginRes.token)
        localStorage.setItem('auth', JSON.stringify(this.loginRes?.permission));
        // console.log(this.loginRes.token);
      }
    }, err => {
      // console.log(err);
      if(err.error.User==false){
        // console.log(err.error.msg);  
        this.toastr.error(err.error.msg)
      } else if(err.error.status){
        this.toastr.error(err.error.status);
      }
  
      
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
}
