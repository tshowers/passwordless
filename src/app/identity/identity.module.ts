import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentityRoutingModule } from './identity-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { EmailCheckComponent } from './email-check/email-check.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { CheckInboxComponent } from './check-inbox/check-inbox.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { LoggedInComponent } from './logged-in/logged-in.component';



@NgModule({
  declarations: [
    SignInComponent,
    EmailCheckComponent,
    SignOutComponent,
    CheckInboxComponent,
    ContactComponent,
    ErrorComponent,
    LoggedInComponent
  ],
  imports: [
    CommonModule,
    IdentityRoutingModule,
    SharedModule
  ]
})
export class IdentityModule { }
