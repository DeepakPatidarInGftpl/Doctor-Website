import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorserviceService } from 'src/app/service/doctorservice.service';

@Component({
  selector: 'app-checkotp',
  templateUrl: './checkotp.component.html',
  styleUrls: ['./checkotp.component.scss']
})
export class CheckotpComponent {
  verifyOTPform!: FormGroup;
  ck: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _doctorService: DoctorserviceService,
    
    ) {
  }

  ngOnInit(): void {
    this.verifyOTPform = this.fb.group({
      otp: ['', Validators.required],
    })
  }
  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  addOTP() {
    if (this.verifyOTPform.invalid) {
      this.ck = true;
      return
    }
    else {
      this._doctorService.addOTPApp(this.verifyOTPform.value).subscribe({
        next: (res) => {
          if(res){
            console.log("OTP",res);
            this._doctorService.openSnackBar(res.message);
          this.router.navigate(["doctordetail/patient-detail/id"])
          }

        },
        error: (error) => { 
        console.log(error);
        this._doctorService.openSnackBar(error.error.error);
         }
      })
    }
}
}

