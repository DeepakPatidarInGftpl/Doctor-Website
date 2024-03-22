import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'homepage';
  selected : any = "";
  OptionSelectedOne :any="";
  OptionSelectedTwo :any="";
  constructor(private _router: Router) {

  }
  
  onOptionChange(event:any) {
   console.log(event.target.value)
   this._router.navigate([event.target.value])
  }
  onOptionChangeOne(event:any) {
    console.log(event.target.value)
    this._router.navigate([event.target.value])
   }

   onOptionChangeTwo(event:any) {
    console.log(event.target.value)
    this._router.navigate([event.target.value])
   }




   

   labtest() {
    this._router.navigate(["/labtest"])
  }

  aboutus() {
    this._router.navigate(["/aboutus"])
  }
  backpain() {
    this._router.navigate(["/backpain"])
  }

  slipdisk() {
    this._router.navigate(["/slipdisk"])
  }

  sciatica() {
    this._router.navigate(["/sciatica"])
  }

  cervical() {
    this._router.navigate(["/cervical"])
  }

  kneepain() {
    this._router.navigate(["/knee-pain"])
  }

  hippain() {
    this._router.navigate(["/hip-pain"])
  }

  frozenshoulder() {
    this._router.navigate(["/frozen-shoulder"])
  }

  tenniselbow() {
    this._router.navigate(["/tennis-elbow"])
  }

  golferselbow() {
    this._router.navigate(["/golfers-elbow"])
  }

  sportsinjury() {
    this._router.navigate(["/sports-injury"])
  }

  wristpain() {
    this._router.navigate(["/wrist-pain"])
  }
  ankle() {
    this._router.navigate(["/ankle"])
  }

  rehab() {
    this._router.navigate(["/rehab"])
  }

  strokeparalysis() {
    this._router.navigate(["/strokeparalysis"])
  }

  acupressure() {
    this._router.navigate(["/acupressure"])
  }

  osteopathy() {
    this._router.navigate(["/osteopathy"])

}

cerebralpalsy() {
  this._router.navigate(["/cerebralpalsy"])

}

prepost() {
  this._router.navigate(["/prepost"])

}

neuro() {
  this._router.navigate(["/neuro"])

}
electro() {
  this._router.navigate(["/electro"])

}

hydro() {
  this._router.navigate(["/hydro"])

}

lasertherapy() {
  this._router.navigate(["/laser"])

}
lumber() {
  this._router.navigate(["/lumber"])

}
manipulation() {
  this._router.navigate(["/manipulation"])

}
therapeutic() {
  this._router.navigate(["/therapeutic"])

}
chiropractic() {
  this._router.navigate(["/chiropractic"])

}
cupping() {
  this._router.navigate(["/cupping"])

}
iastm() {
  this._router.navigate(["/iastm"])

}
dryneedling() {
  this._router.navigate(["/dryneedling"])

}
kniesiotyping() {
  this._router.navigate(["/kniesiotyping"])

}
form() {
  this._router.navigate(["/form"])

} 
accupressurist(){
  this._router.navigate(["/accupressurist"])
}
audiologist(){
  this._router.navigate(["/audiologist"])
}

yoga(){
  this._router.navigate(["/yoga"])
}

osthopathist(){
  this._router.navigate(["/osthopathist"])
}

specialtherapist(){
  this._router.navigate(["/specialtherapist"])
}

physiotherapist(){
  this._router.navigate(["/physiotherapist"])
}

prosthesis(){
  this._router.navigate(["/prosthesis"])
}

}
