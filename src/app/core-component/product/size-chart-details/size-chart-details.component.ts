import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-size-chart-details',
  templateUrl: './size-chart-details.component.html',
  styleUrls: ['./size-chart-details.component.scss']
})
export class SizeChartDetailsComponent implements OnInit {

  constructor(private coreService: CoreService, private Arout: ActivatedRoute, private location: Location,
    private router: Router) { }
  employeeDetails: any;
  id: any;

  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.coreService.getsizeChartById(this.id).subscribe((res: any) => {
      console.log(res);
      res.map((res: any) => {
        if (res.id == this.id) {
          this.employeeDetails = res;
        }
      })

    })
  }
  goBack() {
    this.location.back();
  }

  key = 'id';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }

  navigate() {
    this.router.navigate(['//product/size-chart'], { state: { id: this.id } })
  }
}
