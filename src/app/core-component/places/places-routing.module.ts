import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesComponent } from './places.component';

const routes: Routes = [
  { path: '', redirectTo: 'newcountry', pathMatch: 'full' },
  {
    path: '',
    children: [
  {
    path: 'newcountry',
    loadChildren: () =>
      import('./newcountry/newcountry.module').then((m) => m.NewcountryModule),
  },
  {
    path: 'countrieslist',
    loadChildren: () =>
      import('./countrieslist/countrieslist.module').then(
        (m) => m.CountrieslistModule
      ),
  },
  {
    path: 'newstate',
    loadChildren: () =>
      import('./newstate/newstate.module').then((m) => m.NewstateModule),
  },
  {
    path: 'statelist',
    loadChildren: () =>
      import('./statelist/statelist.module').then((m) => m.StatelistModule),
  },
  {
    path: 'editcountry',
    loadChildren: () =>
      import('./editcountry/editcountry.module').then(
        (m) => m.EditcountryModule
      ),
  },
  {
    path: 'editstate',
    loadChildren: () =>
      import('./editstate/editstate.module').then((m) => m.EditstateModule),
  },
  {
    path:'citylist',
    loadChildren:()=>
    import('./citylist/citylist.module').then((m)=>m.CitylistModule)
  },
  {
    path:'city-details/:id',
    loadChildren:()=>
    import('./city-details/city-details.module').then((m)=>m.CityDetailsModule)
  },
  {
    path:'state-details/:id',
    loadChildren:()=>
    import('./state-details/state-details.module').then((m)=>m.StateDetailsModule)
  },
  {
    path:'country-details/:id',
    loadChildren:()=>
    import('./country-details/country-details.module').then((m)=>m.CountryDetailsModule)
  }

],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesRoutingModule {}
