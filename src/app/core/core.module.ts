import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { DatabaseService  } from '../services/database.service';
import { UserService } from '../services/user.service';
import { SettingService } from '../services/setting.service';
/*******************************************************************************
 *                 Taliferro License Notice
 *
 * The contents of this file are subject to the Taliferro License
 * (the "License"). You may not use this file except in
 * compliance with the License. A copy of the License is available at
 * http://www.taliferro.com/license/
 *
 *
 * Title: CoreModule
 * @author Tyrone Showers
 *
 * @copyright 1997-2022 Taliferro, Inc. All Rights Reserved.
 *
 * @classdesc: Core module with providers for the singleton services you load
 * when the application starts. CoreModule is a pure services module with no
 * declarations.
 ******************************************************************************/

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AuthService, DatabaseService, UserService, SettingService],

})
export class CoreModule { 
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('Core already loaded');
    }
  }
  static forRoot() {
    return {
      ngModule: CoreModule
    }
  }
 
}
