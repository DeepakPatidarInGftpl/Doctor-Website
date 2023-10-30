import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-details-credit-note',
  templateUrl: './details-credit-note.component.html',
  styleUrls: ['./details-credit-note.component.scss']
})
export class DetailsCreditNoteComponent implements OnInit {
  constructor(private transactionService: TransactionService, private Arout: ActivatedRoute,private location:Location) { }
 creditnoteDetails: any
  id: any
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.transactionService.getCreditNoteById(this.id).subscribe(res=>{
      this.creditnoteDetails=res
    })
  }

  goBack() {
    this.location.back();
  }
}
