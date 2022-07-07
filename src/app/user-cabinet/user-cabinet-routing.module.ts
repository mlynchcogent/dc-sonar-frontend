import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserCabinetComponent} from './user-cabinet.component';
import {DomainsComponent} from "./components/domains/domains.component";
import {WeakPasswordsComponent} from "./components/weak-passwords/weak-passwords.component";
import {NeverExpirePasswordsComponent} from "./components/never-expire-passwords/never-expire-passwords.component";
import {ReusedPasswordsComponent} from "./components/reused-passwords/reused-passwords.component";

const routes: Routes = [
  {
    path: '', component: UserCabinetComponent, children: [
      {path: '', redirectTo: '/user-cabinet/domains', pathMatch: 'full'},
      {path: 'domains', component: DomainsComponent},
      {path: 'weak-passwords', component: WeakPasswordsComponent},
      {path: 'never-expire-passwords', component: NeverExpirePasswordsComponent},
      {path: 'reused-passwords', component: ReusedPasswordsComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCabinetRoutingModule {
}
