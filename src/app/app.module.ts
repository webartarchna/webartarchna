import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserregisterComponent } from './index/userregister/userregister.component';
import { UserloginComponent } from './index/userlogin/userlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    UserregisterComponent,
    UserloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
