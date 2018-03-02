import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './shared';

const routes: Routes = [

  {
    path: '',
    loadChildren: './frontend/frontend.module#FrontendModule'
  },
  {
    path: 'adminDEV',
    loadChildren: './adminDEV/adminDEV.module#AdminDEVModule',
    // canActivate: [AuthGuard]
  },
  {path: 'adminDEV/login', loadChildren: './adminDEV/login/login.module#LoginModule'},
  {path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule'},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
