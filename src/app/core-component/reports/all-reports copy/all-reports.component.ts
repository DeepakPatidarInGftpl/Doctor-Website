import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ReportService } from 'src/app/Services/report/report.service';

@Component({
  selector: 'app-all-reports',
  templateUrl: './all-reports.component.html',
  styleUrls: ['./all-reports.component.scss']
})
export class AllReportsComponent implements OnInit {

  constructor(private Fb:FormBuilder, private reportService:ReportService) { }
favouriteForm :FormGroup;
FavouriteList:any;
  ngOnInit(): void {
    this.favouriteForm=this.Fb.group({
      is_favourite :new FormControl(''),
      report_name :new FormControl('')
    });
    this.reportService.getFavorite().subscribe((res:any)=>{
      console.warn(res);
      this.FavouriteList=res;
    })
  }
  
  is_favourite:false;
  reportName:any;

  star(name:any){
    this.favouriteForm.patchValue({
      is_favourite:true,
      report_name:name
    });
    this.submit();
  }
  removeStar(name:any){
    this.favouriteForm.patchValue({
      is_favourite:false,
      report_name:name
    });
    this.submit();
  }
  submit(){
    console.log(this.favouriteForm.value);
    this.reportService.addFavorite(this.favouriteForm.value).subscribe((res:any)=>{
      console.warn(res);
      
    })
  }

}
