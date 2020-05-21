import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
private userdata;
  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            
            
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
}

signInUser(email: string, password: string) {
  return new Promise(
    (resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    }
  );
}

signOutUser() {
  firebase.auth().signOut();
  localStorage.removeItem('user');
}


}
