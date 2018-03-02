import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      { path: 'add', loadChildren: './add-user/add-user.module#AddUserModule' },
      { path: 'list', loadChildren: './list-users/list-users.module#ListUsersModule' },
      { path: ':id', loadChildren: './update-user/update-user.module#UpdateUserModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
