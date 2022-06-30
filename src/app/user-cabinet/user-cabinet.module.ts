import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserCabinetRoutingModule} from './user-cabinet-routing.module';
import {UserCabinetComponent} from './user-cabinet.component';
import {HomeComponent} from './components/home/home.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {SyncDomainsComponent} from './components/sync-domains/sync-domains.component';
import {WeakPasswordsComponent} from './components/weak-passwords/weak-passwords.component';
import {NeverExpirePasswordsComponent} from './components/never-expire-passwords/never-expire-passwords.component';
import {ReusedPasswordsComponent} from './components/reused-passwords/reused-passwords.component';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HttpErrorInterceptor} from "../shared/interceptors/http-error.interceptor";
import {RefreshTokenInterceptor} from "../shared/interceptors/refresh-token.interceptor";


@NgModule({
  declarations: [
    UserCabinetComponent,
    HomeComponent,
    SyncDomainsComponent,
    WeakPasswordsComponent,
    NeverExpirePasswordsComponent,
    ReusedPasswordsComponent
  ],
  imports: [
    CommonModule,
    UserCabinetRoutingModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatListModule,
    MatSidenavModule
  ]
})
export class UserCabinetModule {
}
