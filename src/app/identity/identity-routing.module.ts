import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { EmailCheckComponent } from './email-check/email-check.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { CheckInboxComponent } from './check-inbox/check-inbox.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { LoggedInComponent } from './logged-in/logged-in.component';

const routes: Routes = [
    { path: '', component: SignInComponent, data: { title: 'Sign In - Identity Check' } },
    { path: 'check-inbox', component: CheckInboxComponent, data: { title: 'Check Your Email' } },
    { path: 'logged-in', component: LoggedInComponent, data: { title: 'Your are Logged In' } },
    { path: 'email-check', component: EmailCheckComponent, data: { title: 'Checking Your Identity' } },
    { path: 'bye', component: SignOutComponent, data: { title: 'GoodBye' } },
    { path: 'contact', component: ContactComponent, data: { title: 'How to Contact Us - Contact Information' } },
    { path: 'error', component: ErrorComponent, data: { title: 'Processing Error' } },
    { path: '**', component: ErrorComponent, data: { title: 'Error' } },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
    ]
  })
  export class IdentityRoutingModule { }
  