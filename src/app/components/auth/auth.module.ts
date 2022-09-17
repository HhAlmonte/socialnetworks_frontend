import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterModule } from './pages/register/register.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RegisterModule
  ],
  entryComponents: [RegisterComponent]
})
export class AuthModule { }
