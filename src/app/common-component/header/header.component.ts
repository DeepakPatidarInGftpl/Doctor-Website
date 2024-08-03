import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, catchError, debounceTime, of, Subject, switchMap, takeUntil } from 'rxjs';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { NotificationService } from 'src/app/Services/notification/notification.service';
import { SettingsService } from 'src/app/shared/settings/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  activePath = '';
  showSearch: boolean = false;
  public changeLayout: string = '1';
  public darkTheme: boolean = false;
  public logoPath: string = '';
  financialYearForm: FormGroup;
  notificationList: any;
  totalNotificationCount: any;
  notificationIds: any = [];
  private notificationIdsSubject = new BehaviorSubject<number[]>([]);
  private destroy$ = new Subject<void>();

  constructor(private Router: Router, private settings: SettingsService, private authServ: AuthServiceService, private toastr: ToastrService,
    private coreService: CoreService, private profileService: CompanyService, private companyService: CompanyService, private fb: FormBuilder,
    private notificationService: NotificationService
  ) {
    this.activePath = this.Router.url.split('/')[2];
    this.Router.events.subscribe((data: any) => {
      if (data instanceof NavigationStart) {
        this.activePath = data.url.split('/')[2];
      }
    });
    this.settings.changeLayout.subscribe((res: any) => {
      this.changeLayout = res;
    });
    this.settings.changeTheme.subscribe((res: any) => {
      if (res == 'Dark') {
        this.darkTheme = true;
        // this.logoPath = 'assets/img/logo-white.png'
        //new icon
        this.logoPath = 'assets/dummy/pos.png'
      } else {
        this.darkTheme = false;
        // this.logoPath = 'assets/logo/favicon_icon.png'
        this.logoPath = 'assets/dummy/pos.png'

      }
    });

    this.notificationIdsSubject.pipe(
      debounceTime(3000),
      switchMap((ids:any) => {
        if (ids?.length > 0) {
          let formData = new FormData();
          formData.append('notification_id', JSON.stringify(ids));
          return this.notificationService.updateNotificationPanelByIds(formData).pipe(
            catchError(error => {
              console.error('API call failed', error);
              this.notificationIds = [];
              return of(null);
            })
          );
        } else {
          return of(null);
        }
      }),
      takeUntil(this.destroy$)
    ).subscribe(res => {
      if (res) {
        console.log('API response', res);
        this.getNotificationList();
        this.notificationIds = [];
      }
    });
  }

  dayCloseForm!: FormGroup;
  get d() {
    return this.dayCloseForm.controls;
  }
  dayOpenForm!: FormGroup;
  get f() {
    return this.dayOpenForm.controls;
  }

  ngOnInit(): void {
    this.LoadScript('assets/js/header.js');
    this.profile();
    //open day
    this.dayOpenForm = this.fb.group({
      opening_amount: new FormControl(0, [Validators.required,])
    });
    //close day
    this.dayCloseForm = this.fb.group({
      closing_amount: new FormControl(0, [Validators.required,]),
      remarks: new FormControl('')
    });
    this.checkDayClose();
    this.getDayClose();
    this.getNotificationList();

    // blur bg when modal open
    if (this.companyService.CheckBlur$) {
      this.companyService.CheckBlur$.subscribe((res: any) => {
        console.log(res);
        if (res !== null) {
          if (res) {
            this.isModalOpen = res;
            console.log(this.isModalOpen);
          } else if (res == false) {
            this.isModalOpen = res;
            console.log(this.isModalOpen);
          }
        }

      })
    }
    this.getFinancialYear();
    // this.getActiveFinancialYear();
    this.financialYearForm = this.fb.group({
      financial_year: new FormControl('')
    });
    //17-5
    if (localStorage.getItem('financialYear')) {
      let fy = localStorage.getItem('financialYear');
      this.financialYearForm.patchValue({
        financial_year: JSON.parse(fy)
      });
    }
  }

  calculateMinutesAgo(scheduleTime: string): number {
    const scheduleDate = new Date(scheduleTime);
    const currentDate = new Date();
    const diffMs = currentDate.getTime() - scheduleDate.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    return diffMins;
  }


  logOut() {
    // console.log(localStorage.getItem('token'));
    if (localStorage.getItem('token')) {
      this.authServ.logout().subscribe(res => {
        // console.log(res);
        this.toastr.success(res.status);
        localStorage.clear()
        this.Router.navigate(['/auth/signin'])
        this.authServ.doLogout()
      }, (err: any) => {
        // console.log(err.error.detail);
        if (err.error.detail) {
          localStorage.removeItem('token');
          localStorage.clear()
          this.toastr.success('Logout Successfully');
          this.Router.navigate(['/auth/signin'])
        }
      })
    } else {
      localStorage.removeItem('token');
      localStorage.clear()
      this.toastr.success('Logout Successfully');
      this.Router.navigate(['/auth/signin'])
    }

    this.updateUserDeviceToken();
  }

  updateUserDeviceToken() {
      let payload = {
        device_token: ''
      }
      this.authServ.updateUserDeviceToken(payload).subscribe((res) => {
        console.log(res);
      }, (error) => {
        console.error('Error updating device token:', error);
      });
    }

  userDetails: any
  profile() {
    this.coreService.getProfile().subscribe((res: any) => {
      this.userDetails = res;
      this.coreService.profileDetails.next(res);
      this.profileService.setUserDetails(this.userDetails);
      const userDetails = res?.permission;
      const storedUserDetails = this.profileService.getUserDetails();
      if (!storedUserDetails || storedUserDetails.length !== userDetails.length) {
        this.profileService.setUserPermission(userDetails);
        window.location.reload();
      }
    }, err => {
      // console.log(err.error.detail=='Invalid token.');
      if (err.error.detail == 'Invalid token.') {
        localStorage.clear();
        window.location.reload();
      }
    })
  }
  LoadScript(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }

  // day open day close 

  // day close or day open
  closeModalDayClose() {
    const modal = document.getElementById('dayCloseModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
      //remove blurbg send data to service
      this.isModalOpen = false;
      this.companyService.setCheckBlur(false);
    }
  }
  openModalDayClose() {
    // Trigger Bootstrap modal using JavaScript
    const modal = document.getElementById('dayCloseModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
      //blurbg send data to service
      this.isModalOpen = true;
      this.companyService.setCheckBlur(true);
    }
  }
  dayList: any;
  loader = false;
  getDayClose() {
    this.companyService.getDayClose().subscribe((res) => {
      this.dayList = res;
      console.log(res);
      console.warn(this.dayList?.sale_bill_payment[0]?.total_amount);
    })
  }
  get remarks() {
    return this.dayCloseForm.get('remarks');
  }
  get closing_amount() {
    return this.dayCloseForm.get('closing_amount');
  }
  // condition for day close or not

  notificationRead(id: number) {
    if (!this.notificationIds.includes(id)) {
      this.notificationIds.push(id);
      this.notificationIdsSubject.next(this.notificationIds);
    }
  }

  isCloseDay = false;
  checkDayClose() {
    this.companyService.getDayCheck().subscribe((res: any) => {
      console.log(res);
      this.companyService.setCheckDay(res);  // send data to service
      if (res.isSuccess) {
        if (res?.close_day && res?.old_day) {
          this.isCloseDay = true;
          this.toastr.info(res?.msg);
          this.openModalDayClose();
        } else if (res?.open_day && res?.today) {
          this.isCloseDay = false;
          this.toastr.info(res?.msg);
          this.openModalDay();
        } else if (res?.close_day) {
          this.isCloseDay = true;
        }
      } else {
        this.toastr.error(res.msg);
      }
    }, err => {
      this.toastr.error(err.message);
    })
  }
  submitDayClose() {
    if (this.dayCloseForm.valid) {
      this.loader = true;
      console.warn(this.dayCloseForm.value);
      let formData = new FormData();
      formData.append('closing_amount', this.dayCloseForm.get('closing_amount')?.value);
      formData.append('remarks', this.dayCloseForm.get('remarks')?.value);
      this.companyService.addDayClose(formData).subscribe((res: any) => {
        console.log(res);
        if (res.isSuccess) {
          this.loader = false;
          this.closeModalDayClose();
          this.toastr.success(res.msg);
          this.getDayClose();
          this.checkDayClose();
        } else {
          this.loader = false;
          this.toastr.error(res.msg)
        }
      }, err => {
        this.loader = false;
        this.toastr.error(err.message)
      })
    } else {
      this.toastr.error('Please Enter Valid Data')
    }
  }

  //open dashboard
  modalError: any;
  closeModalDay() {
    const modal = document.getElementById('dayModal');
    if (this.isCloseDay) {
      if (modal) {
        modal.classList.remove('show');
        modal.style.display = 'none';
        // remove blurbg send data to service
        this.isModalOpen = false;
        this.companyService.setCheckBlur(false);
      }
    } else {
      this.modalError = 'Please Submit Opening Amount';
      if (modal) {
        setTimeout(() => {
          modal.classList.add('vibrate');
        }, 10);
      }
    }
  }
  isModalOpen = false;
  openModalDay() {
    // Trigger Bootstrap modal using JavaScript
    const modal = document.getElementById('dayModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
      //blurbg send data to service
      this.isModalOpen = true;
      this.companyService.setCheckBlur(true);
    }
  }
  get opening_amount() {
    return this.dayOpenForm.get('opening_amount')
  }
  submit() {
    if (this.dayOpenForm.valid) {
      this.loader = true;
      console.warn(this.dayOpenForm.value);
      let formData = new FormData();
      formData.append('opening_amount', this.dayOpenForm.get('opening_amount')?.value);
      this.companyService.addDayOpen(formData).subscribe((res: any) => {
        console.log(res);
        if (res.isSuccess) {
          this.loader = false;
          this.isCloseDay = true;
          this.closeModalDay();
          this.toastr.success(res.msg)
        } else {
          this.loader = false;
          this.toastr.error(res.msg)
        }
      }, err => {
        this.loader = false;
        this.toastr.error(err.message)
      })
    }
  }


  financialYearList: any[] = [];
  startDate: string = '';
  endDate: string = '';
  getFinancialYear() {
    this.coreService.getFinancialYear().subscribe((res: any) => {
      console.log(res); // Log res to check if data is received correctly
      this.financialYearList = res;

      // const currentYear = new Date().getFullYear();
      // const currentYearFinancialYear = this.financialYearList.find(year => {
      //   const startYear = new Date(year.start_year).getFullYear();
      //   return startYear === currentYear;
      // });
      // console.log(currentYearFinancialYear, 'currentYearFinancialYear');
      // if (currentYearFinancialYear) {
      // localStorage.setItem('financialYear',JSON.stringify(currentYearFinancialYear));
      // }
      // if (currentYearFinancialYear) {
      //   this.financialYearForm.patchValue({
      //     financial_year: currentYearFinancialYear.id
      //   });
      // }
    })
  }
  getActiveFinancialYear() {
    this.coreService.getFinancialYearHeader().subscribe((res: any) => {
      this.financialYearForm.patchValue({
        financial_year: res.id
      });
    })
  }

  selectYear(val: any) {
    console.log(val);
    this.financialYearList.forEach((res: any) => {
      if (res.id == val) {
        console.log(res);
        localStorage.setItem('financialYear', JSON.stringify(res?.id));
        window.location.reload();
      }
    })
  }

  getNotificationList() {
    this.notificationService.getNotificationPanel(1).subscribe((res) => {
      const notificationsPerPage = res?.notifications.length;
      const totalNotifications = res?.notifications_count;
      this.totalNotificationCount = res?.notifications_count;
      const lastPage = Math.ceil(totalNotifications / notificationsPerPage);
  
      this.notificationService.getNotificationPanel(lastPage).subscribe((lastPageRes) => {
        this.notificationList = lastPageRes.notifications.slice(-5).map(notification => {
          return {
            ...notification,
            minutesAgo: this.calculateMinutesAgo(notification.schedule_time)
          };
        });
        console.log(this.notificationList);
        
      });
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

