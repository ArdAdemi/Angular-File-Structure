import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './feature/login/login.component';
import {ProtectedGuard, PublicGuard} from 'ngx-auth';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: './feature/feature.module#FeatureModule',
    /* data: {preload: true} /!*only routes that have this will line will be preloaded *!/*/
  },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

