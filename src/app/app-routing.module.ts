import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/******************************************************************************
 *                 Taliferro License Notice
 *
 * The contents of this file are subject to the Taliferro License
 * (the "License"). You may not use this file except in
 * compliance with the License. A copy of the License is available at
 * http://www.taliferro.com/license/
 *
 *
 * Title: AppRoutingModule
 * @author Tyrone Showers
 *
 * @copyright 1997-2022 Taliferro, Inc. All Rights Reserved.
 *
 * @classdesc: Enables navigation from one view to the next as users perform
 * application tasks. A routed Angular application has one singleton instance
 * of the Router service. When the browser's URL changes, that router looks
 * for a corresponding Route from which it can determine the component to
 * display.
 ******************************************************************************/
 const routes: Routes = [
  { path: '', loadChildren: () => import('./identity/identity.module').then(m => m.IdentityModule) },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
