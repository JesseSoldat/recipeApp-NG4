import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(err => console.log(err)
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getToken()
          .then((token: string) => this.token = token)
      })
      .catch(err => console.log(err)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getToken()
      .then((token: string) => this.token = token);
      //don't wait for async
      return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
