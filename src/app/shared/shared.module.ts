import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

/*******************************************************************************
 *                 Taliferro License Notice
 *
 * The contents of this file are subject to the Taliferro License
 * (the "License"). You may not use this file except in
 * compliance with the License. A copy of the License is available at
 * http://www.taliferro.com/license/
 *
 *
 * Title: SharedModule
 * @author Tyrone Showers
 *
 * @copyright 1997-2022 Taliferro, Inc. All Rights Reserved.
 *
 * @classdesc: Repetition is reduced by having SharedModule re-export
 * CommonModule, FormsModule etc. so that importers of SharedModule get
 * CommonModule, FormsModule etc. for free.
 ******************************************************************************/
 @NgModule({
  declarations: [
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    RouterModule,
    MenuComponent,
    FooterComponent
  ]
})
export class SharedModule { }
