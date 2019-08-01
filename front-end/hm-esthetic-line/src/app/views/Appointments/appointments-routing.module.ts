import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentsComponent } from './appointments.component';
 import { CreateAppointmentComponent } from './CreateAppointment/createAppointment.component';

const routes: Routes = [
    {
        path: '',
        component: AppointmentsComponent,
     },  
    {
        path: 'Create',
        component: CreateAppointmentComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppointmentsRoutingModule { }