import { LogoapiInterFase } from './../../interfaces/employee';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Auth } from 'src/app/interfaces/auth';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { WebstorgeService } from 'src/app/shared/webstorge.service';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { FirebaseMessagingService } from 'src/app/Services/firebase-messaging.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, AfterViewInit {
  
  password: any;
  show = false;
  public CustomControler: any;
  deviceToken: any;
  public subscription: Subscription;
  notificationLoading = false;
  isSyncLoading = false;
  form!: FormGroup;
  buttonColor : string = '#FF9F43';
  buttonHoverColor : string = '#1B2850'
  img_url = 'assets/img/LoginImage.webp'
  get f() {
    return this.form.controls;
  }
liveUrl :string = environment.api;
  //SIDEBAR SETTINGS.SCSS -> sidebar open karne ke liye uncomment karna hoga

  constructor(private storage: WebstorgeService,private renderer: Renderer2, private authService: AuthServiceService, private coreService:CoreService,
    private toastr: ToastrService, private router: Router, private afMessaging: AngularFireMessaging, private messagingService: FirebaseMessagingService) {
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

    this.messagingService.receiveMessage();
    this.messagingService.currentMessage.subscribe(message => {
      if (message) {
        this.showNotification(message);
      }
    });
  }
  ngAfterViewInit(): void {
this.PageLoadData()
    
  }

  requestPermission() {
    this.messagingService.requestPermission().then(token => {
      if (token) {
        this.deviceToken = token;
        this.updateUserDeviceToken();
        console.log(token);
      } else {
        alert('You have not given notification access, so you will not be notified.');
      }
      this.isSyncLoading = false;
      window.location.reload();
    }).catch(error => {
      console.error('Error retrieving token:', error);
      alert('You have not given notification access, so you will not be notified.');
      window.location.reload();
      this.isSyncLoading = false;
    });
  }
logoData :LogoapiInterFase
  PageLoadData(){
    this.authService.getLogoApi().subscribe({
      next : (value :LogoapiInterFase)=> {
      
        if (value.success) {
          this.logoData = value;
          this.buttonColor = value.data.primary_colour;
          this.buttonHoverColor = value.data.secondary_colour;
          this.img_url = this.liveUrl+this.logoData.data.auth_image 
          this.applyDynamicStyles()
        }else{
          
          throw Error("No Data Found")
        }
      },
      error(err) {


        throw Error("No Data Found "+ err)
      },
    })
  }
  applyDynamicStyles() {
    this.renderer.setStyle(document.documentElement, '$button-color', this.buttonColor,1);
    this.renderer.setStyle(document.documentElement, '$button-hover-color', this.buttonHoverColor,1);
  }

  showNotification(payload: any) {
    const notificationTitle = payload.notification?.title || 'No title';
    const notificationOptions = {
      body: payload.notification?.body || 'No body',
      icon: payload.notification?.icon || 'assets/logo/logo.png'
    };

    if (Notification.permission === 'granted') {
      new Notification(notificationTitle, notificationOptions);
    } else {
      console.error('Notification permission not granted');
    }
  }

  updateUserDeviceToken() {


    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/firebase-messaging-sw.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        if (this.deviceToken) {
            let payload = {
              device_token: this.deviceToken
            };
            this.authService.updateUserDeviceToken(payload).subscribe((res) => {
              console.log(res);
            }, (error) => {
              console.error('Error updating device token:', error);
            });
          }


        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }


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
          this.isSyncLoading = true;
          // this.router.navigate(['//dashboard']).then(() => {
          //   window.location.reload();
          // })
          // window.location.reload();
          localStorage.setItem('token', this.loginRes?.token)
          localStorage.setItem('auth', JSON.stringify(this.loginRes?.permission));
            //16-5
            this.coreService.getFinancialYearHeader().subscribe((res:any)=>{
              console.warn(res);
              localStorage.setItem('financialYear',JSON.stringify(res?.id)); 
              this.requestPermission();
            }, (err) => {
              this.isSyncLoading = false;
            });
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
