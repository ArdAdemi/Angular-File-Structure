import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './feature/login/login.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: './feature/feature-routing.module',
    data: {preload: true} /*only routes that have this will line will be preloaded */
  },
  {
    path: 'login',
    component: LoginComponent,
  },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

