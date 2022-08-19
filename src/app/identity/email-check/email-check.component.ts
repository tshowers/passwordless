import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { Subscription, Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/data/user.model';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-email-check',
  templateUrl: './email-check.component.html',
  styleUrls: ['./email-check.component.css']
})
export class EmailCheckComponent implements OnInit {

  public url: any;
  public idMismatch: boolean = false;
  public isRelogin: boolean = false;

  public errorMessage: any;


  constructor(private _router: Router, private _authService: AuthService, private _location: Location, public userService: UserService, private _settingService: SettingService) { }

  ngOnInit(): void {
    this.url = this._router.url;
    this.checkLoginState();
  }

  back(): void {
    this._location.back();
  }

  private async checkLoginState() {
    const email = window.localStorage.getItem('emailForSignIn');
    window.localStorage.removeItem('emailForSignIn');

    // if (!environment.production)
      console.log("Processing", email, environment.production, environment.summaryRedirect);
    this.processEmailAddress(email);
  }

  private processEmailAddress(email: any) {
    if (email) {
      this.beginLoginWithEmail(email, this.url);
    }
    else {
      this.isRelogin = true;
      this.errorMessage = "Something went wrong. Either your email address is wrong, or you are using a different browser other than the browser you used to identify yourself, or the link in your email is expired. Make sure you use the same browser for both signing in and verifying. If you are unsure copy the link in the email that was sent to you and paste it in the address bar of the same browser you that says 'Check Your Email'.";
    }
  }

  private async beginLoginWithEmail(email: any, url: any) {
    let loginOK = await this._authService.confirmSignIn(email, url);
    const isLoginOK: boolean = (loginOK == 'true');

    if (isLoginOK) {
      // if (!environment.production)
        console.log("LOG IN OK", email);
      this.associateUser(email);
    } else {
      // if (!environment.production)
      console.log("LOG NOT OK", email);
      this.isRelogin = true;
      this.errorMessage = "Something went wrong. Either your email address is wrong, or you are using a different browser other than the browser you used to identify yourself, or the link in your email is expired. Make sure you use the same browser for both signing in and verifying. If you are unsure copy the link in the email that was sent to you and paste it in the address bar of the same browser you that says 'Check Your Email'.";
      setTimeout(() => {
        this.errorMessage = ('');
      }, 6000);

    }
    this.idMismatch = false;
  }

  private async associateUser(email: any) {
    if (this._authService.firebaseUser) {
      let u = this.userService.getNewUserRecordUsingFirebase(this._authService.firebaseUser);

      let newUserCheck = this.isNewUserSignUpCheck(u);

      // if (!environment.production)
        console.log("Setting User with", u, newUserCheck);

      this.userService.setUser(u);

      if (newUserCheck)
        this.newSettings(u);

      this._router.navigate(['verify', 'logged-in']);
    } else {
      this._router.navigate(['verify', 'error']);
    }
  }

  private isNewUserSignUpCheck(user: User): boolean {
    const firstName = window.localStorage.getItem('firstName');
    const lastName = window.localStorage.getItem('lastName');
    const companyName = window.localStorage.getItem('companyName');
    const companyId = window.localStorage.getItem('companyId');

    this.removeNewSignUpInfo();

    if (firstName && lastName) {
      // if (!environment.production)
        console.log("Must be new registration", companyName, companyId, firstName, lastName);

      user.companyName = (companyName) ? companyName : '';
      user.firstName = firstName;
      user.lastName = lastName;
      user.companyId = (companyId) ? companyId : user._id;
      return true;
    };
    return false;
  }

  private removeNewSignUpInfo(): void {
    window.localStorage.removeItem('diaplayName');
    window.localStorage.removeItem('firstName');
    window.localStorage.removeItem('lastName');
    window.localStorage.removeItem('companyName');
    window.localStorage.removeItem('companyId');
  }

  private newSettings(user: User): void {
    let data = {
      companyName: user.companyName,
      uid: user._id,
    }

    let storeID = this._settingService.newStoreSetting(data);

    user.companyId = storeID;
    
    this.userService.setUser(user);

  }
}
