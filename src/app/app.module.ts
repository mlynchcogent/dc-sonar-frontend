import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserLoginComponent} from './shared/components/user-login/user-login.component';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
