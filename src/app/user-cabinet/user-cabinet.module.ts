import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCabinetRoutingModule } from './user-cabinet-routing.module';
import { UserCabinetComponent } from './user-cabinet.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    UserCabinetComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    UserCabinetRoutingModule
  ]
})
export class UserCabinetModule { }
