import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-details-debit-note',
  templateUrl: './details-debit-note.component.html',
  styleUrls: ['./details-debit-note.component.scss']
})
export class DetailsDebitNoteComponent implements OnInit {


  constructor(private transactionService: TransactionService, private Arout: ActivatedRoute,private location:Location) { }
  debitnoteDetails: any
  id: any
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.transactionService.getDebitNoteById(this.id).subscribe(res=>{
      this.debitnoteDetails=res
    })
  }

  goBack() {
    this.location.back();
  }
}

