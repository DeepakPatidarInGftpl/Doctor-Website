import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-form-select2',
  templateUrl: './form-select2.component.html',
  styleUrls: ['./form-select2.component.scss']
})
export class FormSelect2Component implements OnInit {

  constructor(private coreService:CoreService) { }
  subcategoryList
  ngOnInit(): void {
    this.coreService.getSubcategory().subscribe(res => {
      console.log(res);
      this.subcategoryList = res
      
    })
  }

  ngAfterViewInit() {
    this.LoadScript("assets/plugins/select2/js/select2.min.js")
    this.LoadScript1("assets/plugins/select2/js/custom-select.js")
  }
  
  LoadScript(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  LoadScript1(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  LoadScript2(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
}
