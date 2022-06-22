import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserCabinetComponent} from './user-cabinet.component';
import {HomeComponent} from "./components/home/home.component";
import {SyncDomainsComponent} from "./components/sync-domains/sync-domains.component";
import {WeakPasswordsComponent} from "./components/weak-passwords/weak-passwords.component";
import {NeverExpirePasswordsComponent} from "./components/never-expire-passwords/never-expire-passwords.component";
import {ReusedPasswordsComponent} from "./components/reused-passwords/reused-passwords.component";

const routes: Routes = [
  {
    path: '', component: UserCabinetComponent, children: [
      {path: '', redirectTo: '/user-cabinet/home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'sync-domains', component: SyncDomainsComponent},
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
