import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'getbus';
  constructor(){
    const config = {
    apiKey: "AIzaSyDP-2Q7_7u1iFnHiqtiVJNSgNHJDpWg5xs",
    authDomain: "getbus-955ce.firebaseapp.com",
    databaseURL: "https://getbus-955ce.firebaseio.com",
    projectId: "getbus-955ce",
    storageBucket: "getbus-955ce.appspot.com",
    messagingSenderId: "114690588045",
    appId: "1:114690588045:web:493cf1e7fbb9976db091c4",
    measurementId: "G-M8NK97JC56"
    };
    firebase.initializeApp(config);
   
  }
}
