import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
sliders:any[] = [];
// clo : SwiperOptions
  ngOnInit(): void {
    this.sliders = [
      {
        img : 'https://media.istockphoto.com/id/1292015214/photo/portrait-female-doctor-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=ZytFfGECNdiYIgNN9VPXw6Q0xF0vzTlSQVYGMmYEeRM=',
        title : 'Find Expert Near You'
      },
      {
        img : 'https://media.istockphoto.com/id/1309747330/photo/online-medical-consultation-female-doctor-talking-to-patient-on-laptop-at-clinic-medic-making.jpg?s=612x612&w=0&k=20&c=92CmNKJ9irWVAA2Dk1TxFHF6S9hECnzNPDryF-Q2UsE=',
        title : 'Book Instant Video Consultation'
      },
      {
        img : 'https://media.istockphoto.com/id/1288223603/photo/online-tv-home-fitness-workout.jpg?s=612x612&w=0&k=20&c=iphPXWCyEpTdSZJoVgzyvqV_tYRdRawtyWvMU3wJaV4=',
        title : 'Video Exercise'
      },
      {
        img : 'https://media.istockphoto.com/id/1002745246/photo/package-delivered-successfully.jpg?s=612x612&w=0&k=20&c=nv1r3qzDWGH9NEVLgPvRHrjlYyogKsOew1DCDtd9Wck=',
        title : 'PhysioMDoorstep Deliveryart '
      },
      {
        img : 'https://media.istockphoto.com/id/1352283381/photo/doctor-meeting-with-a-senior-patient.jpg?s=612x612&w=0&k=20&c=Uflv-9TYwYICRhg9HDfThqEtpZ4zF_erMpjWxqUafXU=',
        title : 'Super Speciality Doctor'
      },
      {
        img : 'https://media.istockphoto.com/id/1183974981/photo/doctor-taking-real-blood-samples-from-a-patient-medicine-and-science-concept.jpg?s=612x612&w=0&k=20&c=T5b136RZAIS56OQsJ-hynPzqRlH3s_n85uLCNP9VTU8=',
        title : 'Sample pickup at home'
      },
      {
        img : 'https://media.istockphoto.com/id/1286824505/photo/female-healthcare-worker-is-in-home-visit-to-an-older-woman-with-physical-disabilities.jpg?s=612x612&w=0&k=20&c=TNILZqCUiARkkzKnqYjuQQ9XMkYDL4uam1No4BSXSh8=',
        title : 'Home Visit therapist'
      }
    ]
  }
}
