import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { BehaviorSubject } from 'rxjs';
import { getMessaging, getToken, onMessage } from '@angular/fire/messaging';

@Injectable({
  providedIn: 'root'
})
export class FirebaseMessagingService {
  messaging = getMessaging();
  currentMessage = new BehaviorSubject(null);

  constructor(private afMessaging: AngularFireMessaging) {
  }

  requestPermission() {
      return getToken(this.messaging, { vapidKey: 'BFBQl2298pUNj_ULlguzK1tb-TERf3qvk-LrqY_Riuzm1se6GRgAQ3bkQR6Rt4-tZeZ7CYCGyRB8NL8z7VWavfQ' })
        .then((currentToken) => {
          if (currentToken) {
            console.log('Got FCM token:', currentToken);
            return currentToken;
          } else {
            console.log('No registration token available. Request permission to generate one.');
            return false;
          }
        })
        .catch((err) => {
          console.error('An error occurred while retrieving token. ', err);
        });
    }
    
    receiveMessage() {
      onMessage(this.messaging, (payload) => {
        console.log('Message received. ', payload);
        alert('Message received: ' + payload.notification?.title);
      });
    }
}