import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.scss']
})
export class DoctorDetailComponent {
  timeSLOT = ["9:00 AM", "9:15 AM", "9:30 AM", "9:45 AM", "10:00 AM"];
  constructor(private _router: Router){

  }
  toPatientDetail(){
this._router.navigate(["/doctordetail/patient-detail"])
  }
}
