import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';// imports al fire base functionality-> given alius as firebase 
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Adminlogin;
  constructor(private angFireAuth: AngularFireAuth) {
  }
  
  login(){// the login function for google authentication linking to google framework to do the actual auth 
    this.angFireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    this.Adminlogin=true;
    console.log(this.Adminlogin);
  }
}
