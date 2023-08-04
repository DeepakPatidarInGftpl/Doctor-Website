import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeaderResolver implements Resolve<boolean> {
  resolve(): Observable<boolean> {
    // Simulate loading time for the header component (you can adjust the delay as needed)
    return new Observable<boolean>((observer) => {
      setTimeout(() => {
        observer.next(true);
        observer.complete();
      }, 10000);
    });
  }
}
