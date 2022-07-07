import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserCabinetRoutingModule} from './user-cabinet-routing.module';
import {UserCabinetComponent} from './user-cabinet.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {DomainsComponent} from './components/domains/domains.component';
import {WeakPasswordsComponent} from './components/weak-passwords/weak-passwords.component';
import {NeverExpirePasswordsComponent} from './components/never-expire-passwords/never-expire-passwords.component';
import {ReusedPasswordsComponent} from './components/reused-passwords/reused-passwords.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {DialogDeleteDomain, DomainComponent} from './components/domains/domain/domain.component';
import {MatDialogModule} from "@angular/material/dialog";
import { StatusIconComponent } from './components/domains/domain/status-icon/status-icon.component';


@NgModule({
  declarations: [
    UserCabinetComponent,
    DomainsComponent,
    WeakPasswordsComponent,
    NeverExpirePasswordsComponent,
    ReusedPasswordsComponent,
    DomainComponent,
    DialogDeleteDomain,
    StatusIconComponent
  ],
  imports: [
    CommonModule,
    UserCabinetRoutingModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatListModule,
    MatSidenavModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class UserCabinetModule {
}
