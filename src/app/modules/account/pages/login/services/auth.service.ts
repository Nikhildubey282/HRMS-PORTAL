import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    private route:Router
  ) {}
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result:any) => {
        console.log(result.credential.accessToken)
        this.route.navigate(['/layout/dashboard']);
      localStorage.setItem('isAuth', result.credential.accessToken);

        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
