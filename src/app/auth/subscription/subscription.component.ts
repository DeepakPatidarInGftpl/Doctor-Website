import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
id :string;
  constructor(
    public _auth : AuthServiceService,
    private _routes : Router
  ) {
    this._auth.getSubscriptions().subscribe({
      next : (value :any)=> {
        this.id = value.account_id
        
      },
    })

  }

  ngOnInit(): void {
 
  }

  logout(){
    localStorage.clear();
    this._routes.navigate(['/auth/signin'])
    
  }

}
