// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-data-tables',
//   templateUrl: './data-tables.component.html',
//   styleUrls: ['./data-tables.component.scss']
// })
// export class DataTablesComponent implements OnInit {
//   dtOptions: DataTables.Settings = {};
  
//   public tableData = [
//     {
//       Name: 'Airi Satou	',
//       Position: 'Accountant',
//       Office: 'Tokyo',
//       Age: '33',
//       Startdate: '2008/11/28	',
//       Salary: '$162,700',
//     },
//     {
//       Name: 'Angelica Ramos	',
//       Position: 'Chief Executive Officer (CEO)	',
//       Office: 'London	',
//       Age: '47',
//       Startdate: '2009/10/09	',
//       Salary: '$1,200,000',
//     },
//     {
//       Name: 'Ashton Cox',
//       Position: 'Junior Technical Author',
//       Office: 'San Francisco',
//       Age: '66',
//       Startdate: '2009/01/12',
//       Salary: '$86,000',
//     },
//     {
//       Name: 'Bradley Greer	',
//       Position: 'Software Engineer	',
//       Office: 'London	',
//       Age: '41',
//       Startdate: '2012/10/13	',
//       Salary: '$132,000',
//     },
//     {
//       Name: 'Brenden Wagner	',
//       Position: 'Accountant',
//       Office: 'San Francisco	',
//       Age: '28',
//       Startdate: '2011/06/07	',
//       Salary: '$206,850',
//     },
//     {
//       Name: 'Brielle Williamson',
//       Position: 'Integration Specialist	',
//       Office: 'New York	',
//       Age: '61',
//       Startdate: '2012/12/02	',
//       Salary: '$372,000',
//     },
//     {
//       Name: 'Caesar Vance	',
//       Position: 'Pre-Sales Support	',
//       Office: 'New York	',
//       Age: '21	',
//       Startdate: '2011/12/12	',
//       Salary: '$106,450',
//     },
//     {
//       Name: 'Cedric Kelly	',
//       Position: 'Senior Javascript Developer	',
//       Office: 'Edinburgh',
//       Age: '22	',
//       Startdate: '2012/03/29	',
//       Salary: '$433,060',
//     },
//     {
//       Name: 'Charde Marshall	',
//       Position: 'Regional Director	',
//       Office: 'San Francisco	',
//       Age: '36	',
//       Startdate: '2008/10/16	',
//       Salary: '$470,600',
//     },
//     {
//       Name: 'Colleen Hurst	',
//       Position: 'Javascript Developer	',
//       Office: 'San Francisco	',
//       Age: '39	',
//       Startdate: '2009/09/15	',
//       Salary: '$205,500',
//     },
//     {
//       Name: 'Dai Rios	',
//       Position: 'Personnel Lead	',
//       Office: 'Edinburgh',
//       Age: '35	',
//       Startdate: '2012/09/26	',
//       Salary: '$217,500',
//     },
//     {
//       Name: 'Doris Wilder	',
//       Position: 'Sales Assistant		',
//       Office: 'Sidney',
//       Age: '23	',
//       Startdate: '2010/09/20	',
//       Salary: '$85,600',
//     },
//     {
//       Name: 'Fiona Green	',
//       Position: 'Chief Operating Officer (COO)	',
//       Office: 'San Francisco	',
//       Age: '48	',
//       Startdate: '2010/03/11	',
//       Salary: '$850,000',
//     },
//     {
//       Name: 'Garrett Winters',
//       Position: 'Accountant',
//       Office: 'Tokyo',
//       Age: '63	',
//       Startdate: '2010/03/11',
//       Salary: '$170,750',
//     },
//     {
//       Name: 'Gavin Joyce	',
//       Position: 'Developer',
//       Office: 'Edinburgh',
//       Age: '42	',
//       Startdate: '2010/12/22	',
//       Salary: '$92,575',
//     },
//     {
//       Name: 'Gloria Little	',
//       Position: 'Systems Administrator	',
//       Office: 'New York	',
//       Age: '59	',
//       Startdate: '2009/04/10	',
//       Salary: '$237,500',
//     },
//     {
//       Name: 'Haley Kennedy	',
//       Position: 'Senior Marketing Designer	',
//       Office: 'London',
//       Age: '43	',
//       Startdate: '2012/12/18	',
//       Salary: '$313,500',
//     },
//     {
//       Name: 'Herrod Chandler	',
//       Position: 'Sales Assistant	',
//       Office: 'San Francisco	',
//       Age: '59	',
//       Startdate: '2012/08/06	',
//       Salary: '$137,500',
//     },
//     {
//       Name: 'Jena Gaines	',
//       Position: 'Office Manager		',
//       Office: 'London',
//       Age: '30	',
//       Startdate: '2008/12/19	',
//       Salary: '$90,560',
//     },
//     {
//       Name: 'Jenette Caldwell	',
//       Position: 'Development Lead	',
//       Office: 'New York	',
//       Age: '30	',
//       Startdate: '2011/09/03		',
//       Salary: '345,000',
//     },
//     {
//       Name: 'Jennifer Chang		',
//       Position: 'Regional Director	',
//       Office: 'Singapore	',
//       Age: '28	',
//       Startdate: '2010/11/14	',
//       Salary: '$357,650',
//     },
//     {
//       Name: 'Michael Silva	',
//       Position: 'Marketing Designer	',
//       Office: 'London	',
//       Age: '66	',
//       Startdate: '2012/11/27	',
//       Salary: '$198,500',
//     },
//     {
//       Name: 'Paul Byrd	',
//       Position: 'Chief Financial Officer (CFO)	',
//       Office: 'New York		',
//       Age: '64	',
//       Startdate: '2010/06/09	',
//       Salary: '$725,000',
//     },
//     {
//       Name: 'Quinn Flynn	',
//       Position: 'Support Lead	',
//       Office: 'Edinburgh	',
//       Age: '22	',
//       Startdate: '2013/03/03	',
//       Salary: '$342,000',
//     },
//     {
//       Name: 'Rhona Davidson	',
//       Position: 'Integration Specialist',
//       Office: 'Tokyo	',
//       Age: '55	',
//       Startdate: '2010/10/14	',
//       Salary: '$327,900',
//     },
//     {
//       Name: 'Shou Itou	',
//       Position: 'Regional Marketing	',
//       Office: 'Tokyo	',
//       Age: '20	',
//       Startdate: '2011/08/14	',
//       Salary: '$163,000',
//     },
//     {
//       Name: 'Sonya Frost	',
//       Position: 'Software Engineer	',
//       Office: 'Edinburgh		',
//       Age: '23	',
//       Startdate: '2008/12/13	',
//       Salary: '$103,600',
//     },
//     {
//       Name: 'Tatyana Fitzpatrick	',
//       Position: 'Regional Director	',
//       Office: 'London		',
//       Age: '19	',
//       Startdate: '2010/03/17	',
//       Salary: '$385,750',
//     },
//     {
//       Name: 'Tiger Nixon	',
//       Position: 'System Architect	',
//       Office: 'Edinburgh		',
//       Age: '61	',
//       Startdate: '2011/04/25	',
//       Salary: '$320,800',
//     },
//     {
//       Name: 'Yuri Berry	',
//       Position: 'Chief Marketing Officer (CMO)	',
//       Office: 'New York			',
//       Age: '40	',
//       Startdate: '2009/06/25	',
//       Salary: '$675,000',
//     },
//   ]
// code128: any;

//   constructor() { }

//   ngOnInit(): void {
//      this.dtOptions = {
//       dom: 'Btlpif',
//       pagingType: 'numbers', 
// 			language: {
// 				search: ' ',
// 				searchPlaceholder: "Search...",
// 				info: "_START_ - _END_ of _TOTAL_ items",
// 			 },
// 			initComplete: (settings, json)=>{
// 				$('.dt-buttons').appendTo('.wordset');
// 				$('.dataTables_filter').appendTo('.search-input');
// 			},	
//     };
//   }
// }


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.scss']
})
// export class DataTablesComponent implements OnInit {
//   dtOptions: DataTables.Settings = {};
export class DataTablesComponent {
  elementType = 'svg';
  value = 'someValue12340987';
  format = 'CODE128';
  lineColor = '#000000';
  width = 1;
  height = 50;
  displayValue = true;
  fontOptions = '';
  font = 'monospace';
  textAlign = 'center';
  textPosition = 'bottom';
  textMargin = 2;
  fontSize = 20;
  background = '#ffffff';
  margin = 10;
  marginTop = 10;
  marginBottom = 5;
  marginLeft = 10;
  marginRight = 10;

  get values(): string[] {
    return this.value.split('\n');
  }
  codeList: string[] = [
    '', 'CODE128',
    'CODE128A', 'CODE128B', 'CODE128C',
    'UPC', 'EAN8', 'EAN5', 'EAN2',
    'CODE39',
    'ITF14',
    'MSI', 'MSI10', 'MSI11', 'MSI1010', 'MSI1110',
    'pharmacode',
    'codabar'
  ];
}
