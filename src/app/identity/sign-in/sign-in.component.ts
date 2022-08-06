import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from 'src/app/services/auth.service';
import { Subject, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DatabaseService } from 'src/app/services/database.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  logoName = environment.COMPANY_NAME;
  homePageLink = "/";
  headingText = "No password required.";
  subText = "Simple Sign In.";
  titleText = "Identify Yourself";
  submitButtonText = "Submit";
  signUpText = "Don't you have an account? ";
  signUpLink = "/signup";
  signUpButtonText = "Sign up";
  forgotPasswordText = "Forgot your password?";
  forgotPasswordLink = "/forgot-password";
  forgotButtonText = "Reset";
  socialMediaTitle = "social media login";
  isFacebookLoginButtonEnabled: boolean = true;
  isAppleLoginButtonEnabled: boolean = true;
  isGoogleLoginButtonEnabled: boolean = true;
  errorType = "danger";
  isLoggedIn = false;

  pageEvent = new EventEmitter();

  private _dataSubscription?: Subscription;
  public data: any;

  public emailAddress = '';
  public password = '';
  public errorMessage = new Subject<string>();


  constructor(private _router: Router, private _location: Location, private _authService: AuthService, private _dataService: DatabaseService) { }

  ngOnInit(): void {
  }

  onPageEvent(type: string): void {
    // this.pageEvent.emit({ type: type, emailAddress: this.emailAddress, password: this.password });
    switch (type) {
      case 'apple':
        this.useApple();
        break;
      case 'google':
        this.useGoogle();
        break;
      case 'facebook':
        this.useFacebook();
        break;
    }
  }

  onSubmit(): void {
    this._authService.signInWithEmail(this.emailAddress);
    this._router.navigate(['verify', 'check-inbox']);
  }

  back(): void {
    this._location.back();
  }


  async useApple() {
    let result = await this._authService.signInWithApple();
    if (result != null) {
      this.associateUser()
    } else {
      this.errorMessage.next("Unable to use Apple account for verification");
      setTimeout(() => {
        this.errorMessage.next("");
      }, 6000);
    }

  }

  async useFacebook() {
    let result = await this._authService.signInWithFacebook();
    if (result != null) {
      this.associateUser()
    } else {
      this.errorMessage.next("Unable to use Facebook account for verification");
      setTimeout(() => {
        this.errorMessage.next("")
      }, 6000);
    }
  }

  async useGoogle() {
    let result = await this._authService.signInWithGoogle();
    if (result != null) {
      this.associateUser()
    } else {
      this.errorMessage.next("Unable to use Google for verification");
      setTimeout(() => {
        this.errorMessage.next("");
      }, 6000);
    }
  }

  private async associateUser() {
    if (this._authService.firebaseUser) {

      if (!environment.production)
        console.log("Firebase User", this._authService.firebaseUser);


      this._router.navigate(['welcome']);
    } else {
      this._router.navigate(['verify', 'error']);
    }
  }




}
