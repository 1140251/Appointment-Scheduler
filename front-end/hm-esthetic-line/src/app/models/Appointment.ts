export class AppointmentResponse {
    code: string;
    title: string;
    description: string;
    start: Date;
    end: Date;
    service: string;
    customer: string;
    room: string;
    employee: string;
}

export class Appointment {
    code: string;
    title: string;
    description: string;
    start: string;
    duration: string;
    service: string;
    customer: string;
    room: string;
    employee: string;
}

export class EventCalendar {
    title: string;
    start: string;
    end: string;
}
