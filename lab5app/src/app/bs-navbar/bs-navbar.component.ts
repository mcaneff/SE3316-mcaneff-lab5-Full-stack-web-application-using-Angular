import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
//import { LoginComponent } from './login/login.component';

@Component({  
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  current_user: Observable<firebase.User>;
  
  constructor(private angFireAuth: AngularFireAuth) {
    this.current_user = angFireAuth.authState;
  }
  
  ngOnInit() {
  }

  logout(){
//    Adminlogin=false;
    this.angFireAuth.auth.signOut();
  }
}
