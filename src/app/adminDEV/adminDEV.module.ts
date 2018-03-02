import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from '@ngx-translate/core';
import { AuthGuard,  } from '../shared';
import {AdminDEVRoutingModule} from './adminDEV-routing.module';
import {AdminDEVComponent} from './adminDEV.component';
import {HeaderComponent, SidebarComponent} from '../shared';
import { AuthService } from '../shared/services/auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    NgbDropdownModule.forRoot(),
    AdminDEVRoutingModule,
    TranslateModule
  ],
  declarations: [
    AdminDEVComponent,
    HeaderComponent,
    SidebarComponent
  ],
  providers: [
    AuthGuard,
    AuthService],
})
export class AdminDEVModule {
}
