import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from '../contacts/contacts.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    ContactsComponent,
      ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    ToastrModule
  ]
})
export class ContactsModule { }
