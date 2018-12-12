import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProtectedGuard, PublicGuard} from 'ngx-auth';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {
    path: 'home',
    canActivate: [ PublicGuard ],
    component: HomeComponent,
  },
  {
    path: 'login',
    canActivate: [ PublicGuard ],
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    canActivate: [ ProtectedGuard ],
    loadChildren: './auth/auth.module#AuthModule',
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
