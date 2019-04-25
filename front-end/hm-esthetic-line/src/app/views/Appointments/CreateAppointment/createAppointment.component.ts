import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { AppointmentService } from '../../../services/appointment.service';
import { AppointmentResponse, Appointment } from '../../../models/Appointment';
import swal from 'sweetalert2';
import { TypeaheadConfig } from 'ngx-bootstrap/typeahead';
import { CustomerService } from '../../../services/customer.service';
import { ServiceHtppService } from '../../../services/ServiceHtppService';
import { NgbDate, NgbModule, NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';

export function getTypeaheadConfig(): TypeaheadConfig {
    return Object.assign(new TypeaheadConfig(), { hideResultsOnBlur: false });
}
@Component({
    templateUrl: 'createAppointment.component.html',
    styleUrls: ['./createAppointment.component.scss'],
    providers: [{ provide: TypeaheadConfig, useFactory: getTypeaheadConfig }, NgbTimepickerConfig]
})

export class CreateAppointmentComponent {

    public newAppointment: Appointment = new Appointment();

    private model = {
        id: undefined,
        title: undefined,
        description: undefined,
        startDate: undefined,
        startTime: undefined,
        duration: undefined,
        room: undefined,
        client: undefined,
        reminders: undefined
      };

      public customers: String[];
      public services: String[];
      public roomsList: String[];

    constructor(config: NgbTimepickerConfig, private _myHttp: AppointmentService, private customerService: CustomerService,private serviceHttpService: ServiceHtppService, private _location: Location) {

        config.seconds = false;
        config.spinners = false;     
        this.customerService.getCustomers().then(
            (customers) => {
                this.customers = customers.map((filterCustomers) => filterCustomers.name);
              
            },
            (err) => console.log(err)
        );

        this.serviceHttpService.getServices().then(
            (services) => {
                this.services = services.map( (service) => service.name);
            },
            (err) => console.log(err)             
        )  
    }

    public submit() {

        if (this.validateFields() === true) {
            this._myHttp.createAppointment(this.newAppointment)
                .subscribe(
                    res => {
                        if (res.status == 201) {
                            swal({
                                type: 'success',
                                text: 'Appointment Registed.',
                                showConfirmButton: false,
                                timer: 3500
                            });
                            this.resetFields();
                            this._location.back();
                        }
                    },
                    err => {
                        //console.log(JSON.stringify(err,null,2));
                        if (err.status == 500) //check the code from console and sends 500
                            swal({
                                type: 'error',
                                text: 'Problems during your registration. This email or contact has been registered. Please, enter a different email or contact.'
                            });
                    }
                );
            //this._myHttp.sendEmail(this.newCustomer.code,this.newCustomer.email,this.newCustomer.name);
        } else {
            swal({
                type: 'error',
                text: 'Invalid Customer Info. Please Check the empty fields or wrong fields.'
            });
        }
    }

    public validateFields(): boolean {

        if (this.newAppointment.customerName != null && this.newAppointment.customerName.trim() != '' &&
            this.newAppointment.start != null &&
            this.newAppointment.duration != null && this.newAppointment.roomName != null && this.newAppointment.roomName.trim() != '') {
            return true;
        }
        return false
    }

    private resetFields() {
        this.newAppointment = new Appointment();
    }
}

