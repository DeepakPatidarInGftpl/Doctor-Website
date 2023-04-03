import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SyncServiceService {
  private apiUrl = 'https://my-api.com/data';

  constructor(private toastr: ToastrService, private http: HttpClient) { }

  getData(): Observable<any> {
    if (navigator.onLine) {
      return this.http.get<any>(this.apiUrl);
    } else {
      const storedData = localStorage.getItem('my-data');
      return of(JSON.parse(storedData));
    }
  }

  syncData(data: any): Observable<any> {
    if (navigator.onLine) {
      return this.http.post<any>(this.apiUrl, data);
    } else {
      localStorage.setItem('my-data', JSON.stringify(data));
      return of(data);
    }
  }

  saveDataLocal() {
    this.toastr.error('You are in offline mode', 'Offline', {
      timeOut: 5000
    });
  }

  syncData1() {
    this.toastr.success('Your connection is restored', 'Online', {
      timeOut: 5000
    });
  }

  // listen for online/offline status changes
  checkOnlineStatus() {
    window.addEventListener('online', () => {
      console.log('Application is online sync');
      this.syncData1();
    });

    window.addEventListener('offline', () => {
      console.log('Application is offline sync');
      this.saveDataLocal();
    });
  }
}
