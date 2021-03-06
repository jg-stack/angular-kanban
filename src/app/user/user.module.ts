import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { GoogleSigninDirective } from './google-signin.directive';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [GoogleSigninDirective, LoginPageComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  exports: [GoogleSigninDirective, LoginPageComponent]
})
export class UserModule { }
