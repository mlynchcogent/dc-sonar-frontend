import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserLoginComponent} from "./components/user-login/user-login.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
  {
    path: '', component: UserLoginComponent
  },
  {
    path: '404', component: NotFoundComponent
  },
  {
    path: 'user-cabinet',
    loadChildren: () => import('./user-cabinet/user-cabinet.module').then(m => m.UserCabinetModule)
  },
  {
    path: '**', redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
