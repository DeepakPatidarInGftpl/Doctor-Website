import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-details-company-bank',
  templateUrl: './details-company-bank.component.html',
  styleUrls: ['./details-company-bank.component.scss']
})
export class DetailsCompanyBankComponent implements OnInit {

 
  constructor(private coreService: CoreService, private Arout: ActivatedRoute,) { }
  bankDetails: any
  id: any
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.coreService.getCompanyBankById(this.id).subscribe(res=>{
      this.bankDetails=res
    })
  }

}

