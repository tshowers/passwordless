import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { Subscription, Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-email-check',
  templateUrl: './email-check.component.html',
  styleUrls: ['./email-check.component.css']
})
export class EmailCheckComponent implements OnInit {

  public url: any;
  public idMismatch: boolean = false;
  public isRelogin: boolean = false;
  
  public errorMessage = new Subject<string>();


  constructor(private _router: Router, private _authService: AuthService, private _location: Location, public userService: UserService) { }

  ngOnInit(): void {
    this.url = this._router.url;
    this.checkLoginState();
  }

  back() : void {
    this._location.back();
  }

  private async checkLoginState() {
    const email = window.localStorage.getItem('emailForSignIn');
    window.localStorage.removeItem('emailForSignIn');

    this.processEmailAddress(email);
  }

  private processEmailAddress(email: any) {
    if (email)
      this.beginLoginWithEmail(email, this.url);
    else
      this.isRelogin = true;

  }

  private async beginLoginWithEmail(email: any, url: any) {
    let loginOK = await this._authService.confirmSignIn(email, url);
    const isLoginOK: boolean = (loginOK == 'true');

    if (isLoginOK) {
      this.associateUser(email);
    } else {
      this.isRelogin = true;
      this.errorMessage.next( "Something went wrong. Either your email address is wrong, or you are using a different browser other than the browser you used to identify yourself, or the link in your email is expired.");
      setTimeout(() => {
        this.errorMessage.next('');
      }, 6000);

    }
    this.idMismatch = false;
  }

  private async associateUser(email: any) {
    if (this._authService.firebaseUser) {
      this.userService.setUser(this.userService.getNewUserRecordUsingFirebase(this._authService.firebaseUser));  
      this._router.navigate(['welcome']); 
    } else {
      this._router.navigate(['error']);
    }
  }
}
