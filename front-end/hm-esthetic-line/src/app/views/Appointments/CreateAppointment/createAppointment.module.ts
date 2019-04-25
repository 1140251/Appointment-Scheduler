import { NgModule } from '@angular/core';

import { CreateAppointmentComponent } from './createAppointment.component';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';


@NgModule({
  imports: [
    FormsModule,
    TypeaheadModule
  ],
  declarations: [ CreateAppointmentComponent ],
  exports: [CreateAppointmentComponent], 
})
export class CreateAppointmentModule { }
