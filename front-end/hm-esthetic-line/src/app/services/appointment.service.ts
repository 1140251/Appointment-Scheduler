import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment, AppointmentResponse } from '../models/Appointment';


@Injectable({
    providedIn: 'root'
})
export class AppointmentService {

    constructor(private http: HttpClient) { }

    public createAppointment(newAppointment: Appointment) {
        console.log(newAppointment)
        return this.http.post('https://localhost:5001/api/Appointment/', newAppointment, { observe: 'response' });
    }

	public getAppointments(): Promise<Array<Object>> {
		return this.http.get(`https://localhost:5001/api/Appointment`).toPromise().then((response: Array<AppointmentResponse>) => response).catch(response => new Array<AppointmentResponse>());
    }
    
    public updateCustomer(updateAppointmentInfo: Appointment): Promise<Object>{
        return this.http.put(`https://localhost:5001/api/Customer/${updateAppointmentInfo.code}`, updateAppointmentInfo).toPromise().then((response: AppointmentResponse) => response);
    }
}


