import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { HrmServiceService } from 'src/app/Services/hrm/hrm-service.service';
@Component({
  selector: 'app-update-attendance',
  templateUrl: './update-attendance.component.html',
  styleUrls: ['./update-attendance.component.scss']
})
export class UpdateAttendanceComponent implements OnInit {

  attendanceForm!: FormGroup;
  get f() {
    return this.attendanceForm.controls;
  }
  constructor(private fb: FormBuilder, private hrmService: HrmServiceService,
    private router: Router,
    private toastrService: ToastrService,
    private Arout: ActivatedRoute) { }
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');

    this.attendanceForm = this.fb.group({
      total_day_of_month: new FormControl('', [Validators.required]),
      total_persent_day: new FormControl('', [Validators.required]),
    
    })
    
    this.hrmService.getAttendanceById(this.id)?.subscribe((res: any) => {
      this.attendanceForm.patchValue(res);
    })
  }

  get total_day_of_month() {
    return this.attendanceForm.get('total_day_of_month')
  }
  get total_persent_day() {
    return this.attendanceForm.get('total_persent_day')
  }
 

  addRes: any;
  loaders = false;
  submit() {
    console.log(this.attendanceForm.value);
    if (this.attendanceForm.valid) {
      let formdata: any = new FormData();
      formdata.append('total_persent_day', this.attendanceForm.get('total_persent_day')?.value);
      formdata.append('total_day_of_month', this.attendanceForm.get('total_day_of_month')?.value);
    
      this.loaders = true;
      this.hrmService.updateAttendance(formdata,this.id).subscribe(res => {
        this.addRes = res;
        if (this.addRes.success) {
          this.loaders = false;
          this.toastrService.success(this.addRes.msg);
          this.router.navigate(['hrm/list-attendance']);
        }else{
          this.loaders=false;
          this.toastrService.error(this.addRes?.error)
        }
      }, err => {
        this.loaders = false;
      })
    } else {
      this.attendanceForm.markAllAsTouched()
      this.toastrService.error('Please Fill All The Required Fields')
    }

  }
  //dropdown auto close stop
  onLabelClick(event: Event) {
    // Prevent the event from propagating to the dropdown menu
    event.stopPropagation();
  }
}
