import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteComponent } from './component/pages/website/website.component';
import { DoctorWebsiteComponent } from './component/pages/doctor-website/doctor-website.component';
import { ClinicComponent } from './component/pages/clinic/clinic.component';
import { PhysiotherapistComponent } from './component/pages/physiotherapist/physiotherapist.component';
import { ChiropractorComponent } from './component/pages/chiropractor/chiropractor.component';
import { HomeVisitComponent } from './component/pages/home-visit/home-visit.component';
import { DieticianComponent } from './component/pages/dietician/dietician.component';
import { YogaComponent } from './component/pages/yoga/yoga.component';
import { GymFitnessTrainerComponent } from './component/pages/gym-fitness-trainer/gym-fitness-trainer.component';
import { AccupressuristComponent } from './component/pages/accupressurist/accupressurist.component';
import { PsychologistComponent } from './component/pages/psychologist/psychologist.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { AboutUsComponent } from './component/pages/about-us/about-us.component';
import { TREATComponent } from './component/pages/treat/treat.component';
import { SlipdiskComponent } from './component/pages/slipdisk/slipdisk.component';
import { BackpainComponent } from './component/pages/backpain/backpain.component';
import { SciaticaComponent } from './component/pages/sciatica/sciatica.component';
import { CervicalNeckpainComponent } from './component/pages/cervical-neckpain/cervical-neckpain.component';
import { KneePainComponent } from './component/pages/knee-pain/knee-pain.component';
import { HipPainComponent } from './component/pages/hip-pain/hip-pain.component';
import { FrozenShoulderComponent } from './component/pages/frozen-shoulder/frozen-shoulder.component';
import { TennisElbowComponent } from './component/pages/tennis-elbow/tennis-elbow.component';
import { GolfersElbowComponent } from './component/pages/golfers-elbow/golfers-elbow.component';
import { SportsInjuryComponent } from './component/pages/sports-injury/sports-injury.component';
import { StrokeparalysisComponent } from './component/pages/strokeparalysis/strokeparalysis.component';
import { WristPainComponent } from './component/pages/wrist-pain/wrist-pain.component';
import { RehabComponent } from './component/pages/rehab/rehab.component';
import { AcupressureComponent } from './component/pages/acupressure/acupressure.component';
import { OsteopathyComponent } from './component/pages/osteopathy/osteopathy.component';
import { AnkleComponent } from './component/pages/ankle/ankle.component';
import { CerebralpalsyComponent } from './component/pages/cerebralpalsy/cerebralpalsy.component';
import { NeuroComponent } from './component/pages/neuro/neuro.component';
import { PrePostComponent } from './component/pages/pre-post/pre-post.component';
import { ElectroComponent } from './component/pages/electro/electro.component';
import { HydrotherapyComponent } from './component/pages/hydrotherapy/hydrotherapy.component';
import { LasertherapyComponent } from './component/pages/lasertherapy/lasertherapy.component';
import { LumberComponent } from './component/pages/lumber/lumber.component';
import { ManipulationComponent } from './component/pages/manipulation/manipulation.component';
import { TherapeuticComponent } from './component/pages/therapeutic/therapeutic.component';
import { ChiropracticComponent } from './component/pages/chiropractic/chiropractic.component';
import { CuppingComponent } from './component/pages/cupping/cupping.component';
import { DryneedlingComponent } from './component/pages/dryneedling/dryneedling.component';
import { IastmComponent } from './component/pages/iastm/iastm.component';
import { KniesiotypingComponent } from './component/pages/kniesiotyping/kniesiotyping.component';
import { FormComponent } from './component/pages/form/form.component';
import { AudiologistComponent } from './component/pages/audiologist/audiologist.component';
import { OsthopathistComponent } from './component/pages/osthopathist/osthopathist.component';
import { SpecialTherapistComponent } from './component/pages/special-therapist/special-therapist.component';
import { ProsthesisComponent } from './component/pages/prosthesis/prosthesis.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { DoctorserviceService } from './service/doctorservice.service';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { DoctorDetailComponent } from './component/pages/doctor-detail/doctor-detail.component';
import { PatientDetailComponent } from './component/pages/patient-detail/patient-detail.component';
import { ViewprofileComponent } from './component/pages/viewprofile/viewprofile.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { config } from 'rxjs';
import { AppointmentConfirmedComponent } from './component/shared/appointment-confirmed/appointment-confirmed.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SlotpopupComponent } from './component/pages/slotpopup/slotpopup.component';
import { JobsComponent } from './component/pages/jobs/jobs.component';
import { BlogComponent } from './component/pages/blog/blog.component';
import { CheckotpComponent } from './component/shared/checkotp/checkotp.component';
import { LabTestComponent } from './component/pages/lab-test/lab-test.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import { UserDetailsComponent } from './component/pages/user-details/user-details.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FooterComponent } from './component/shared/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SliderComponent } from './component/pages/doctor-website/components/slider/slider.component';
@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
    SliderComponent,
    DoctorWebsiteComponent,
    PhysiotherapistComponent,
    // ChiropractorComponent,
    HomeVisitComponent,
    // DieticianComponent,
    YogaComponent,
    GymFitnessTrainerComponent,
    // AccupressuristComponent,
    PsychologistComponent,
    HeaderComponent,
    AboutUsComponent,
    TREATComponent,
    SlipdiskComponent,
    BackpainComponent,
    SciaticaComponent,
    CervicalNeckpainComponent,
    KneePainComponent,
    HipPainComponent,
    FrozenShoulderComponent,
    TennisElbowComponent,
    GolfersElbowComponent,
    SportsInjuryComponent,
    StrokeparalysisComponent,
    WristPainComponent,
    RehabComponent,
    AcupressureComponent,
    OsteopathyComponent,
    AnkleComponent,
    CerebralpalsyComponent,
    NeuroComponent,
    PrePostComponent,
    ElectroComponent,
    HydrotherapyComponent,
    LasertherapyComponent,
    LumberComponent,
    ManipulationComponent,
    TherapeuticComponent,
    ChiropracticComponent,
    CuppingComponent,
    DryneedlingComponent,
    IastmComponent,
    KniesiotypingComponent,
    FormComponent,
    AudiologistComponent,
    OsthopathistComponent,
    SpecialTherapistComponent,
    PhysiotherapistComponent,
    ProsthesisComponent,
    DoctorDetailComponent,
    PatientDetailComponent,
    ViewprofileComponent,
    AppointmentConfirmedComponent,
    SlotpopupComponent,
    JobsComponent,
    BlogComponent,
    CheckotpComponent,
    LabTestComponent,
    UserDetailsComponent,
    FooterComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTabsModule,
    MatMenuModule,
    MatBadgeModule,
    MatTooltipModule,
    MatToolbarModule
   
  ],
  providers: [DoctorserviceService],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }


