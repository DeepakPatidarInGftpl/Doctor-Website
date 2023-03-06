import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})



export class PosComponent implements OnInit {
  options: string[] = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];
  selectedOptions: string[] = [];
  autocompleteControl = new FormControl();
  filteredOptions$: Observable<string[]> | undefined;
  customers:any = [];

  constructor(private http: HttpClient) { }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.code == KEY_CODE.F9){
      // Your row selection code
      console.log(event);
    }
    if(event.code == KEY_CODE.F8){
      // Your row selection code
      console.log(event);
    }
    if(event.code == KEY_CODE.UP_ARROW){
      // Your row selection code
      console.log(event);
    }
  }

  ngOnInit(): void {
    // this.httpClient.get("assets/data.json").subscribe(data =>{
    //   console.log(data);
    //   this.customers = data;
    // })
    this.filteredOptions$ = this.autocompleteControl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterOptions(value))
    );
    this.http.get('/assets/data.json').subscribe(data => {
      console.log(data);
      this.customers = data;
    });
  }

  filterOptions(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  optionSelected(event: { option: { viewValue: any; }; }) {
    const selectedOption = event.option.viewValue;
    if (!this.selectedOptions.includes(selectedOption)) {
      this.selectedOptions.push(selectedOption);
      this.autocompleteControl.setValue('');
    }
  }

  removeOption(index: number) {
    console.log('removed');
    this.selectedOptions.splice(index, 1);
  }

}


export enum KEY_CODE {
  // UP_ARROW = 38,
  // DOWN_ARROW = 40,
  // RIGHT_ARROW = 39,
  // LEFT_ARROW = 37,
  F9 = 'F9',
  F8 = 'F8',
  UP_ARROW = 'ArrowUp'
}
