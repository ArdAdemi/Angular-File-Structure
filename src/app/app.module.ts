import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {FeatureModule} from './feature/feature.module';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    FeatureModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
