
import { Component, ViewEncapsulation } from '@angular/core';
import swal from 'sweetalert2';
import { AppointmentService } from '../../services/appointment.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AppointmentResponse, EventCalendar } from '../../models/appointment';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';
import ptLocale from '@fullcalendar/core/locales/pt';
import { I18n } from '@ngx-translate/i18n-polyfill';
import Tooltip from 'tooltip.js'

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
    constructor(private _http: AppointmentService, private router: Router, private route: ActivatedRoute, private i18n: I18n) {
        //this.listAppointments();
    }

    ngOnInit() {
        this.listAppointments().then((appointmentsList: Array<AppointmentResponse>) => {
            this.events = appointmentsList.map(res => {
                return {
                    "title": res.title, "start": res.start.toString(), "end": res.end.toString(),
                    "description": this.getOnlyTime(res.start) + "-" + this.getOnlyTime(res.end) + "<br>"
                        + this.i18n("Customer") + ": " + res.customer + "<br>\n"
                        + this.i18n("Employee") + ": " + res.employee
                };

            })
            console.log(this.events);
        });
        this.options = {
            plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            },
            navLinks: true,
            eventLimit: true,
            editable: false,
            timeZone: 'UTC',
            locales: [ptLocale, frLocale],
            locale: localStorage.getItem('locale'),
            businessHours: [ // specify an array instead
                {
                    daysOfWeek: [1, 2, 3, 4, 5], // Monday, Tuesday, Wednesday
                    startTime: '09:00', // 8am
                    endTime: '20:00' // 6pm
                },
                {
                    daysOfWeek: [6], // Thursday, Friday
                    startTime: '10:00', // 10am
                    endTime: '20:00' // 4pm
                }
            ],
            timeFormat: 'H(:mm)',
            eventTimeFormat: { // like '14:30:00'
                hour: 'numeric',
                minute: '2-digit',
                meridiem: false
            },
            eventRender: function (info) {
                let tooltip = new Tooltip(info.el, {
                    title: info.event.extendedProps.description,
                    placement: 'top',
                    html: true,
                    trigger: 'hover',
                    container: 'body'
                });
            }
        };
    }

    public listAppointments() {
        return this._http.getAppointments();
    }

    public handleEventClick(event) {
        this.router.navigate(['Appointments', event.calEvent.id]);
    }

    public createAppointment() {
        this.router.navigate(['/Appointments/Create']);
    }
    public onEventHover() {
        console.log('hover');

        //this.popoverService.showPopover(this.popoverElementRef, model);
    }

    public getOnlyTime(date) {
        let newdate = new Date(date);
        return newdate.getHours() +":" + (newdate.getMinutes() < 10 ? '0' : '') + newdate.getMinutes()

    }
}


