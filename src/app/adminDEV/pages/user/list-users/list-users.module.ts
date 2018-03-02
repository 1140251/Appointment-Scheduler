import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent} from './list-users.component';
import { ListUsersRoutingModule } from './list-users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot(),
    ListUsersRoutingModule,
    SharedModule
  ],
  declarations: [ListUsersComponent]
})
export class ListUsersModule { }

