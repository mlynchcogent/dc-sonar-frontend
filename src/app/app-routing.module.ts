import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserLoginComponent} from "./shared/components/user-login/user-login.component";
import {NotFoundComponent} from "./shared/components/not-found/not-found.component";

const routes: Routes = [
  // Redirect to user login page
  // https://stackoverflow.com/questions/40150393/how-to-redirect-to-an-external-url-from-angular2-route-without-using-component
  {
    path: '', component: UserLoginComponent, pathMatch: 'full'
  },
  // 404 Error
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
