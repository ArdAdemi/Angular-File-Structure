import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthRoutingModule} from './auth-routing.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AddHeadersInterceptor} from '../../core/interceptors/add-headers.interceptors';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AddHeadersInterceptor, multi: true},
  ]
})
export class AuthModule { }
