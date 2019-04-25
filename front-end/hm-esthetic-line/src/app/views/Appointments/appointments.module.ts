import { NgModule } from '@angular/core';
import { AppointmentsComponent } from './appointments.component';
import { AppointmentsRoutingModule } from './appointments-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import {FullCalendarModule} from 'primeng/fullcalendar';
import { CreateAppointmentModule } from './CreateAppointment/createAppointment.module';
// import { DemoModalServiceNestedComponent } from './modal.component'

@NgModule({
  imports: [
    AppointmentsRoutingModule,
    FormsModule,
    CommonModule,
    FullCalendarModule,
    CreateAppointmentModule
  ],
  declarations: [ AppointmentsComponent /*, DemoModalServiceNestedComponent*/ ],
  exports: [AppointmentsComponent], 
})
export class AppointmentsModule { }
