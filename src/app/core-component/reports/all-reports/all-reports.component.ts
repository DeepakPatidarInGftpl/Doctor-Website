import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
import { ReportService } from 'src/app/Services/report/report.service';

@Component({
  selector: 'app-all-reports',
  templateUrl: './all-reports.component.html',
  styleUrls: ['./all-reports.component.scss']
})
export class AllReportsComponent implements OnInit {

  constructor(private Fb: FormBuilder, private reportService: ReportService, private commonService: CommonServiceService) { }
  favouriteForm: FormGroup;
  FavouriteList: any;
  myData: any;
  ngOnInit(): void {
    this.favouriteForm = this.Fb.group({
      is_favourite: new FormControl(''),
      report_name: new FormControl('')
    });
    // this.reportService.getFavorite().subscribe((res:any)=>{
    //   console.warn(res);
    //   this.FavouriteList=res;
    // })

    const stringifiedList = localStorage.getItem('favList');
    this.myData = JSON.parse(stringifiedList);
    console.log(this.commonService.myData);
    if (!this.myData) {
      localStorage.setItem('favList', JSON.stringify(this.commonService.myData));
      const stringifiedList = localStorage.getItem('favList');
      this.myData = JSON.parse(stringifiedList);
      console.log(this.myData);
    }

  }
  myDataKeys() {
    if (this.myData) {
      return Object.keys(this.myData);
    }
    return [];
  }

  is_favourite: false;
  reportName: any;

  star(name: any) {
      const reports = this.myData;
      console.log(reports)
      reports.forEach((report: any) => {
        if (report.reportname === name) {
          report.is_Favorite = !report.is_Favorite;
          localStorage.setItem('favList', JSON.stringify(this.myData))
        }
      });
    console.log(this.myData, 'mydata');
  }
  removeStar(name: any) {
    this.favouriteForm.patchValue({
      is_favourite: false,
      report_name: name
    });
    this.submit();
  }
  submit() {
    console.log(this.favouriteForm.value);
    this.reportService.addFavorite(this.favouriteForm.value).subscribe((res: any) => {
      console.warn(res);

    })
  }

}
