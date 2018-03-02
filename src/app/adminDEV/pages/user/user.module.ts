import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule} from '../../../shared/modules/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbModule.forRoot(),
    SharedModule
  ],
  declarations: [UserComponent]
})
export class UserModule { }
