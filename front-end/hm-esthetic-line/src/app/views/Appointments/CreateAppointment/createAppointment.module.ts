import { NgModule } from '@angular/core';

import { CreateAppointmentComponent } from './createAppointment.component';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    FormsModule,
    TypeaheadModule,
    NgbModule,
    CommonModule
  ],
  declarations: [ CreateAppointmentComponent ],
  exports: [CreateAppointmentComponent], 
})
export class CreateAppointmentModule { }
