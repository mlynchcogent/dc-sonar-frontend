import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserLayoutComponent} from './shared/components/user-layout/user-layout.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    UserLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: UserLayoutComponent, children: []
      }
    ])
  ],
  exports: [RouterModule]
})
export class UserCabinetModule {
}
