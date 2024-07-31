import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Auth } from 'src/app/interfaces/auth';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { WebstorgeService } from 'src/app/shared/webstorge.service';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  password: any;
  show = false;
  public CustomControler: any;
  deviceToken: any;
  public subscription: Subscription;


  form!: FormGroup
  get f() {
    return this.form.controls;
  }

  //SIDEBAR SETTINGS.SCSS -> sidebar open karne ke liye uncomment karna hoga

  constructor(private storage: WebstorgeService, private authService: AuthServiceService, private coreService:CoreService,
    private toastr: ToastrService, private router: Router, private afMessaging: AngularFireMessaging) {
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

    if (localStorage.getItem('token')) {
      this.router.navigate(['/dashboard']);
    }

    this.requestPermission();
    this.listen();
  }

  requestPermission() {
    this.afMessaging.requestToken
      .subscribe(
        (token:any) => {
          console.log(token);
          this.deviceToken = token;
        },
        (error:any) => {
          console.error(error);
        }
      );
  }

  listen() {
    this.afMessaging.messages
      .subscribe((message:any) => {
        console.log(message);
      });
  }


  loginRes: undefined | Auth
  loginStatus: string = ''
  loaders=false;
  submit() {
    // this.storage.Login(this.form.value);
    // console.log(this.form.value);
    if (this.form.valid) {
      this.loaders=true;
      this.authService.login(this.form.value).subscribe(res => {
        // console.log(res);
        this.loginRes = res;
        // console.log(this.loginRes.token);
        if (this.loginRes.token) {
          this.loaders=false;
          this.toastr.success('Login Successfull');

          // this.router.navigate(['//dashboard']).then(() => {
          //   window.location.reload();
          // })
          // window.location.reload();
          localStorage.setItem('token', this.loginRes?.token)
          localStorage.setItem('auth', JSON.stringify(this.loginRes?.permission));
            //16-5
          let payload = {
            device_token: this.deviceToken
          }
          this.authService.updateUserDeviceToken(payload).subscribe((res)=> {
            console.log(res);
          })

          setTimeout(() => {
            this.coreService.getFinancialYearHeader().subscribe((res:any)=>{
              console.warn(res);
              localStorage.setItem('financialYear',JSON.stringify(res?.id)); 
              window.location.reload();
            });
          }, 2000);
            //end 16-5
          // console.log(this.loginRes.token);
        }else{
          this.loaders=false;
        }
      }, err => {
        this.loaders=false;
        // console.log(err);
        if (err.error.User == false) {
          // console.log(err.error.msg);  
          this.toastr.error(err.error.msg)
        } else if (err.error.status) {
          this.toastr.error(err.error.status);
        }


      })
    } else {
      this.loaders=false;
      this.form.markAllAsTouched()
      console.log('invalid form');
      
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  get username() {
    return this.form.get('username')
  }
  get passwords() {
    return this.form.get('password')
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
