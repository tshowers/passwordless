import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Subject } from 'rxjs';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public firebaseUser?: firebase.User;
  public loggedInUser = new Subject<firebase.User>();

  public errorMessage = new Subject<string>();
  public emailSent: boolean = false;

  private _actionCodeSettings = {
    url: environment.summaryRedirect,
    handleCodeInApp: true
  };


  constructor(private _afAuth: AngularFireAuth, private _afs: AngularFirestore) {
    this.checkFirebase();
  }

  private checkFirebase() {
    try {
      this._afAuth.onAuthStateChanged(firebaseUser => {
        this.firebaseUser = firebaseUser!;
        this.loggedInUser.next(this.firebaseUser);

        if (!environment.production)
          console.log("Auth State Change", firebaseUser);
      });
    } catch (error) {
      console.error("Auth Change", error);
    }
  }

  public signOut() : void {
    this._afAuth.signOut();
    this.firebaseUser = undefined;
  }

  public async signInWithEmail(emailAddress: string) {
    return new Promise((resolve, reject) => {
      firebase.auth().sendSignInLinkToEmail(emailAddress, this._actionCodeSettings)
        .then((result) => {
          window.localStorage.setItem('emailForSignIn', emailAddress);
          if (!environment.production)
            console.info("Email Sent", emailAddress, new Date().toLocaleTimeString());
          else
            console.info("Email Sent", new Date().toLocaleTimeString());
          this.emailSent = true;
          resolve(result);
        })
        .catch((error) => {
          var errorCode = error.code;
          this.errorMessage = error.message;
          console.error(errorCode, this.errorMessage);
          resolve(null);
        });
    })
  }

  public async confirmSignIn(email: any, url: any) {
    try {
      const withLink = await this._afAuth.isSignInWithEmailLink(url);
      if (withLink) {

        const result = await this._afAuth.signInWithEmailLink((email) ? email : '', url);

        return (result && result.user && result.user.uid) ? 'true' : 'false';

      } else return 'false'
    } catch (error) {
      console.error(error);
      this.errorMessage.next(String(error));
      return 'false';
    }
  }

  public async signInWithApple() {
    return new Promise((resolve, reject) => {
      let provider = new firebase.auth.OAuthProvider('apple.com');
      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          let credential = result.credential;
          console.info(result.user);
          resolve(result);
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          console.error(errorCode, errorMessage, email, credential);
          resolve(null);
        });
    })

  }

  public async signInWithFacebook() {
    return new Promise((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          let credential = result.credential;
          console.info(result.user);
          resolve(result);
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          console.error(errorCode, errorMessage, email, credential);
          resolve(null);
        });
    })

  }

  public async signInWithGoogle() {
    return new Promise((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          let credential = result.credential;
          console.info(result.user);
          resolve(result);
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          console.error(errorCode, errorMessage, email, credential);
          resolve(null);
        });
    })
  }

}
