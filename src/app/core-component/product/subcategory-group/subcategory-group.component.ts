import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-subcategory-group',
  templateUrl: './subcategory-group.component.html',
  styleUrls: ['./subcategory-group.component.scss']
})
export class SubcategoryGroupComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked:boolean=false

  apiUrl = environment.api

  public tableData:any =[]

  form: FormGroup


  constructor(private QueryService: QueryService, private coreServ: CoreService) {
    this.QueryService.filterToggle()

    this.coreServ.subCategoryGroupGet().subscribe( res => {
      this.tableData = res
    })

  }
  confirmText(index:any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      buttonsStyling: true,
      customClass: {
      confirmButton: 'btn btn-primary',
      cancelButton: 'btn btn-danger ml-1',
      },
    }).then( (t) => {
      if(t.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Your file has been deleted.',
        });
        this.tableData.splice(index, 1);
      }
    });
  }
  editMode
  ngOnInit(): void {
    this.dtOptions = {
      dom: 'Btlpif',
      pagingType: 'numbers',
      language: {
        search: ' ',
        searchPlaceholder: 'Search...',
        info: '_START_ - _END_ of _TOTAL_ items',
      },
      initComplete: (settings, json) => {
        $('.dt-buttons').appendTo('.none');
        $('.dataTables_filter').appendTo('.search-input');
      },
    };
  }


  editThis(prod) {

  }


  selectAll(initChecked:boolean){
    if(!initChecked){
      this.tableData.forEach((f:any)=>{
        f.isSelected=true
      })
    }else{
      this.tableData.forEach((f:any)=>{
        f.isSelected=false
      })
    }
  }
}
