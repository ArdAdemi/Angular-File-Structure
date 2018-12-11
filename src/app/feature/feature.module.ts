import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {FeatureRoutingModule} from './feature-routing.module';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule
  ],
  declarations: [HomeComponent, AuthComponent, LoginComponent]
})
export class FeatureModule { }
