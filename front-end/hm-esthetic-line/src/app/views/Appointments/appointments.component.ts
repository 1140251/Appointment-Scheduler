
import { Component, ViewEncapsulation } from '@angular/core';
import swal from 'sweetalert2';
import { CustomerService } from '../../services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppointmentResponse } from '../../models/appointment';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
dayGridPlugin
@Component({
    templateUrl: 'appointments.component.html',
    styleUrls: ['./appointments.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class AppointmentsComponent {

    public displayDate = new Date();
    public selectedDate: Date = this.displayDate;
    public appointmentsList: Array<AppointmentResponse> = new Array<AppointmentResponse>();
    events: any[];
    options: any;
    constructor(private _http: CustomerService, private router: Router, private route: ActivatedRoute) {
        //this.listCustomers();

    }

    ngOnInit() {
        this.events = [ {
            "title": "All Day Event",
            "start": "2019-04-04"
        }];
        this.options = {
            plugins: [dayGridPlugin, timeGridPlugin],
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            editable: false
        };
    }

    public listCustomers() {

        try {
            // this._http.getCustomers().then((appointmentsList: Array<AppointmentResponse>) => {
            //     this.appointmentsList = appointmentsList;
            // }).then(res => {
            //     this.verifySizeListAppointments();
            // });
        } catch (error) {
            //this.verifySizeListAppointments();
        }

    }

    public handleEventClick(event) {
        this.router.navigate(['Appointments', event.calEvent.id]);
      }

    public createAppointment() {
        this.router.navigate(['/Appointments/Create']);
    }
}


