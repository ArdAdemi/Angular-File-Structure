import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {FeatureRoutingModule} from './feature-routing.module';
import { LoginComponent } from './login/login.component';
import {AuthenticationModule} from '../shared/authentication';

@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule,
    AuthenticationModule,
  ],
  declarations: [HomeComponent, LoginComponent],
})
export class FeatureModule { }
