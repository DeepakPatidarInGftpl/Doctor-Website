import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
} from 'ngx-perfect-scrollbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './common-component/layout/layout.component';
import { Layers } from 'angular-feather/icons';
import { FeatherModule } from 'angular-feather';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { CKEditorModule } from 'ngx-ckeditor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
const icons = {
  Layers
};

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    FeatherModule.pick(icons),
    ToastrModule.forRoot(),
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  exports: [
    FeatherModule
  ],
  providers:[
    {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
