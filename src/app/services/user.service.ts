import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { User } from '../shared/data/user.model';
import { environment } from 'src/environments/environment';

import { Subscription, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _collectionName: string = environment.USERS;
  public user = new Subject<User>();

  constructor(private _firestore: AngularFirestore) { 

  }

  setUser(user: User) : void {
    this._firestore.collection(this._collectionName).doc(user._id).set(user, { merge: true });
    this.user.next(user);
  }

  getNewUserRecordUsingFirebase(firebaseUser: firebase.User) : User {
    return <User> {
      email: firebaseUser.email,
      _id: firebaseUser.uid,
      display_name: firebaseUser.displayName,
      photoURL: firebaseUser.photoURL,
      emailVerified: firebaseUser.emailVerified,
      phone_number: firebaseUser.phoneNumber,
    }
  }
}