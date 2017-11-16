import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from '@ngx-translate/core';
import { AuthGuard } from '../shared';
import {BackendRoutingModule} from './backend-routing.module';
import {BackendComponent} from './backend.component';
import {HeaderComponent, SidebarComponent} from '../shared';
import { AuthService } from '../shared/services/auth/auth.service';
@NgModule({
  imports: [
    CommonModule,
    NgbDropdownModule.forRoot(),
    BackendRoutingModule,
    TranslateModule
  ],
  declarations: [
    BackendComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  providers: [
    AuthGuard,
    AuthService],
})
export class BackendModule {
}
