import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorWebsiteComponent } from './component/pages/doctor-website/doctor-website.component';
import { ClinicComponent } from './component/pages/clinic/clinic.component';
import { AccupressuristComponent } from './component/pages/accupressurist/accupressurist.component';
import { ChiropractorComponent } from './component/pages/chiropractor/chiropractor.component';
import { DieticianComponent } from './component/pages/dietician/dietician.component';
import { GymFitnessTrainerComponent } from './component/pages/gym-fitness-trainer/gym-fitness-trainer.component';
import { HomeVisitComponent } from './component/pages/home-visit/home-visit.component';
import { PhysiotherapistComponent } from './component/pages/physiotherapist/physiotherapist.component';
import { PsychologistComponent } from './component/pages/psychologist/psychologist.component';
import { YogaComponent } from './component/pages/yoga/yoga.component';
import { AboutUsComponent } from './component/pages/about-us/about-us.component';
import { TREATComponent } from './component/pages/treat/treat.component';
import { BackpainComponent } from './component/pages/backpain/backpain.component';
import { SlipdiskComponent } from './component/pages/slipdisk/slipdisk.component';
import { SciaticaComponent } from './component/pages/sciatica/sciatica.component';
import { CervicalNeckpainComponent } from './component/pages/cervical-neckpain/cervical-neckpain.component';
import { KneePainComponent } from './component/pages/knee-pain/knee-pain.component';
import { HipPainComponent } from './component/pages/hip-pain/hip-pain.component';
import { FrozenShoulderComponent } from './component/pages/frozen-shoulder/frozen-shoulder.component';
import { TennisElbowComponent } from './component/pages/tennis-elbow/tennis-elbow.component';
import { GolfersElbowComponent } from './component/pages/golfers-elbow/golfers-elbow.component';
import { SportsInjuryComponent } from './component/pages/sports-injury/sports-injury.component';
import { WristPainComponent } from './component/pages/wrist-pain/wrist-pain.component';
import { RehabComponent } from './component/pages/rehab/rehab.component';
import { StrokeparalysisComponent } from './component/pages/strokeparalysis/strokeparalysis.component';
import { OsteopathyComponent } from './component/pages/osteopathy/osteopathy.component';
import { AcupressureComponent } from './component/pages/acupressure/acupressure.component';
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
import { CuppingComponent } from './component/pages/cupping/cupping.component';
import { DryneedlingComponent } from './component/pages/dryneedling/dryneedling.component';
import { IastmComponent } from './component/pages/iastm/iastm.component';
import { KniesiotypingComponent } from './component/pages/kniesiotyping/kniesiotyping.component';
import { ChiropracticComponent } from './component/pages/chiropractic/chiropractic.component';
import { FormComponent } from './component/pages/form/form.component';
import { AudiologistComponent } from './component/pages/audiologist/audiologist.component';
import { OsthopathistComponent } from './component/pages/osthopathist/osthopathist.component';
import { SpecialTherapistComponent } from './component/pages/special-therapist/special-therapist.component';
import { ProsthesisComponent } from './component/pages/prosthesis/prosthesis.component';
import { DoctorDetailComponent } from './component/pages/doctor-detail/doctor-detail.component';
import { PatientDetailComponent } from './component/pages/patient-detail/patient-detail.component';
import { ViewprofileComponent } from './component/pages/viewprofile/viewprofile.component';
import { AppointmentConfirmedComponent } from './component/shared/appointment-confirmed/appointment-confirmed.component';
import { SlotpopupComponent } from './component/pages/slotpopup/slotpopup.component';
import { BlogComponent } from './component/pages/blog/blog.component';
import { JobsComponent } from './component/pages/jobs/jobs.component';
import { CheckotpComponent } from './component/shared/checkotp/checkotp.component';
import { LabTestComponent } from './component/pages/lab-test/lab-test.component';
import { UserDetailsComponent } from './component/pages/user-details/user-details.component';
const routes: Routes = [
  {
    path: "",
    loadChildren : ()=> import('./component/pages/doctor-website/doctor-website.module').then((web)=>web.DoctorWebsiteModule),
   

  },
 
  {
    path: "gymfitnesstrainer",
    component: GymFitnessTrainerComponent
  },
  {
    path: "homevisit",
    component: HomeVisitComponent
  },
  {
    path: "physiotherapist",
    component: PhysiotherapistComponent
  },
  {
    path: 'psychologist',
    component: PsychologistComponent
  },
  {
    path: "yoga",
    component: YogaComponent

  },
  {
    path: "aboutus",
    component: AboutUsComponent
  },
  {
    path: "treat",
    component: TREATComponent
  },
  {
    path: "backpain",
    component: BackpainComponent
  },
  {
    path: "slipdisk",
    component: SlipdiskComponent
  },
  {
    path: "sciatica",
    component: SciaticaComponent
  },
  {
    path: "cervical",
    component: CervicalNeckpainComponent
  },
  {
    path: "knee-pain",
    component: KneePainComponent
  }
  ,
  {
    path: "hip-pain",
    component: HipPainComponent
  },
  {
    path: "frozen-shoulder",
    component: FrozenShoulderComponent
  },
  {
    path: "tennis-elbow",
    component: TennisElbowComponent
  },
  {
    path: "golfers-elbow",
    component: GolfersElbowComponent
  },
  {
    path: "sports-injury",
    component: SportsInjuryComponent
  },
  {
    path: "wrist-pain",
    component: WristPainComponent
  }
  ,
  {
    path: "ankle",
    component: AnkleComponent
  },
  {
    path: "rehab",
    component: RehabComponent
  },
  {
    path: "strokeparalysis",
    component: StrokeparalysisComponent
  },
  {
    path: "acupressure",
    component: AcupressureComponent
  },
  {
    path: "osteopathy",
    component: OsteopathyComponent
  },
  {
    path: "cerebralpalsy",
    component: CerebralpalsyComponent
  },
  {
    path: "neuro",
    component: NeuroComponent
  }
  ,
  {
    path: "prepost",
    component: PrePostComponent
  },
  {
    path: "electro",
    component: ElectroComponent
  },
  {
    path: "hydro",
    component: HydrotherapyComponent
  },
  {
    path: "laser",
    component: LasertherapyComponent
  },
  {
    path: "lumber",
    component: LumberComponent
  },
  {
    path: "manipulation",
    component: ManipulationComponent
  },
  {
    path: "therapeutic",
    component: TherapeuticComponent
  },
  {
    path: "chiropractic",
    component: ChiropracticComponent
  }
  ,
  {
    path: "cupping",
    component: CuppingComponent
  }
  ,
  {
    path: "dryneedling",
    component: DryneedlingComponent
  }
  
  ,
  {
    path: "iastm",
    component: IastmComponent
  },
  {
    path: "kniesiotyping",
    component: KniesiotypingComponent
  },
  {
    path: "form",
    component:FormComponent
  },
  {
    path: "audiologist",
    component:AudiologistComponent
  },
  {
    path:"osthopathist",
    component:OsthopathistComponent
  },
  {
    path:"specialtherapist",
    component:SpecialTherapistComponent
  },
  {
    path:"physiotherapist",
    component:PhysiotherapistComponent
  },
  {
    path:"prosthesis",
    component:ProsthesisComponent
  },
  {
    path : "doctordetail",
    component : DoctorDetailComponent
  },
  {
    path :"doctordetail/patient-detail/:id",
    component: PatientDetailComponent
  },
  {
    path :"viewprofile/:id",
    component: ViewprofileComponent
  },
  {
    path : "doctordetail/patient-detail/appointmentconfirmed",
    component : AppointmentConfirmedComponent
  },
  {
    path :"slotpages/:data",
    component: SlotpopupComponent
  },
  {
    path:"jobss",
    component:JobsComponent
  },
  {
    path:"blog",
    component:BlogComponent
  },
  {
    path:"otp",
    component:CheckotpComponent
  },
  {
    path: "labtest",
    component: LabTestComponent
  },
  {
    path: "userdetails",
    component: UserDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
