export class AppointmentResponse {
    code: string;
    title: string;
    description: string;
    start: Date;
    end: Date;
    serviceName: string;
    customerName: string;
    roomName: string;
    employeeName: string;
}

export class Appointment {
    code: string;
    title: string;
    description: string;
    start: Date;
    duration: string;
    serviceName: string;
    customerName: string;
    roomName: string;
    employeeName: string;
}
