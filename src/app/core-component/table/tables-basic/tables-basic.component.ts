import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tables-basic',
  templateUrl: './tables-basic.component.html',
  styleUrls: ['./tables-basic.component.scss']
})
export class TablesBasicComponent implements OnInit {
  allSelected : any;
  selectedRows :any[] =[]
  @Input() filteredData :string[][]|any  = [['hello','45','gjg','jfi','irrk','djdj','Received','dksi'],['hello','45','gjg','jfi','irrk','djdj','djdj','dksi']];
  @Input() HeaderArr : string[];
  @Input() loader : boolean;
  @Output() Viewfn = new EventEmitter();
  @Output() Editfn = new EventEmitter();
  @Output() Deletefn = new EventEmitter();
  public itemsPerPage : number = 10;
  public p : number = 1
  constructor() { 
   this.HeaderArr = ['S_No','Po Number','Supplier Name','Po Date','Shipping Date','Po Qty','Total','Status','Is Active','Action']
  }

  ngOnInit(): void {
  }
  sort(id:string){};
  selectAll(){}
  selectAlll(){}
  confirmText(index: number,id: number){};
  ViewBtn(index: number,id: number){
    this.Viewfn.emit((id )=>{});
  };
  EditBtn(index: number,id: number){
    this.Editfn.emit((id)=>{});

  };
  DeleteBtn(index: number,id: number){
    this.Deletefn.emit((id)=>{});
  };
}
