import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthsRoutingModule } from './auths-routing.module';
import { AuthsComponent } from './auths.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AuthsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthsRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthsModule { }
