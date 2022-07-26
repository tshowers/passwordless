import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { environment as env } from "src/environments/environment";
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";

/******************************************************************************
 *                 Taliferro License Notice
 *
 * The contents of this file are subject to the Taliferro License
 * (the "License"). You may not use this file except in
 * compliance with the License. A copy of the License is available at
 * http://www.taliferro.com/license/
 *
 *
 * Title: AppModule
 * @author Tyrone Showers
 *
 * @copyright 1997-2022 Taliferro, Inc. All Rights Reserved.
 *
 * @classdesc: Every Angular app has a root module class. By convention, this
 * is root module class and is called AppModule. The @NgModule decorator
 * defines the metadata for the module. BrowserModule registers critical
 * application service providers. It also includes common directives like
 * NgIf and NgFor, which become immediately visible and usable in any of this
 * module's component templates.
 *
 * The declarations list identifies the application's only component, the
 * root component, the top of the app's rather bare component tree.
 *****************************************************************************/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AngularFireModule.initializeApp(env.firebaseConfig),
    AngularFirestoreModule,
    // provideFirebaseApp(() => initializeApp(env.firebaseConfig)),
    // provideFirestore(() => getFirestore()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
