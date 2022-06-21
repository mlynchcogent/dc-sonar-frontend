import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserCabinetComponent} from './user-cabinet.component';
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {
    path: '', component: UserCabinetComponent, children: [
      {path: '', redirectTo: '/user-cabinet/home', pathMatch: 'full'},
      {path:'home', component: HomeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCabinetRoutingModule {
}
