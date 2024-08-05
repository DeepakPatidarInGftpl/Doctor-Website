import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  apiUrl = `${environment.api}`;
  constructor(private http: HttpClient) { }

  getNotificationPanel(page): Observable<any> {
      let url = this.apiUrl + `/pv-api/notification_panel/?page=${page}`;
      return this.http.get<any>(`${url}`, {
        headers: new HttpHeaders({
          'Authorization': 'token ' + `${localStorage.getItem('token')}`
        }),
      })
  }

  updateNotificationPanelByIds(formData: FormData): Observable<any> {
    let url = this.apiUrl + `/pv-api/notification_panel/`;
    return this.http.put<any>(`${url}`, formData, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      }),
    })
}

  viewAllNotification() : Observable<any> {
    let url = this.apiUrl + `/pv-api/notification_all_view/`;
    return this.http.get<any>(`${url}`, {
      headers: new HttpHeaders({
        'Authorization': 'token ' + `${localStorage.getItem('token')}`
      }),
    })
  }
  
}
