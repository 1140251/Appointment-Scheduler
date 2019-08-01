import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { AppointmentService } from '../../../services/appointment.service';
import { AppointmentResponse, Appointment } from '../../../models/Appointment';
import swal from 'sweetalert2';
import { TypeaheadConfig, TypeaheadMatch } from 'ngx-bootstrap/typeahead';
import { CustomerService } from '../../../services/customer.service';
import { ServiceHtppService } from '../../../services/ServiceHtppService';
import { NgbDate, NgbModule, NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { RoomService } from '../../../services/roomService';
import { CustomerResponse } from '../../../models/Customer';
import { ServiceResponse } from '../../../models/Service';
import { RoomResponse } from '../../../models/Room';

export function getTypeaheadConfig(): TypeaheadConfig {
    return Object.assign(new TypeaheadConfig(), { hideResultsOnBlur: false });
}
@Component({
    templateUrl: 'createAppointment.component.html',
    styleUrls: ['./createAppointment.component.scss'],
    providers: [{ provide: TypeaheadConfig, useFactory: getTypeaheadConfig }, NgbTimepickerConfig]
})

export class CreateAppointmentComponent {
    noResultCustomer = false;

    noResultServices = false;

    selectedCustomer : any;
    selectedService: any;

    public model = {
        id: undefined,
        title: undefined,
        description: undefined,
        startDate: undefined,
        startTime: undefined,
        duration: undefined,
        room: undefined,
        service: undefined,
        client: undefined,
        reminders: undefined
    };

    public customers: CustomerResponse[];
    public services: ServiceResponse[];
    public roomsList: RoomResponse[];
    public isSubmit = false;
    public newAppointment = new Appointment();

    constructor(config: NgbTimepickerConfig, private _myHttp: AppointmentService, private customerService: CustomerService, private serviceHttpService: ServiceHtppService,private roomsService: RoomService, private _location: Location) {

        config.seconds = false;
        config.spinners = false;
        this.customerService.getCustomers().then(
            (customers) => {
                this.customers = customers;
            },
            (err) => console.log(err)
        );
        this.serviceHttpService.getServices().then(
            (services) => {
                this.services = services;
            },
            (err) => console.log(err)
        )

        this.roomsService.getRooms().then(
            (rooms) => {
                this.roomsList = rooms;
            },
            (err) => console.log(err)
        )
    }
    public typeaheadNoResults(event: boolean): void {
        this.noResultCustomer = event;
      }
      public typeaheadNoResultsServices(event: boolean): void {
        this.noResultServices = event;
      }
    public submit() {
        this.isSubmit = true;
        console.log("isSubmit " + this.isSubmit)
        if (this.validateFields() === true) {
            console.log(this.model.client);
            this.newAppointment.title = this.model.title;
            this.newAppointment.description = this.model.description;
            this.newAppointment.customer =this.model.client;
            this.newAppointment.service =this.model.service;
            this.newAppointment.employee ='Test';
            this.newAppointment.room =this.model.room;
            this.newAppointment.duration =this.model.duration;
            console.log(this.model.startDate);
            console.log(this.model.startTime);
            console.log(this.model.startDate.month)
            this.newAppointment.start =new Date(Date.UTC(this.model.startDate.year, this.model.startDate.month-1, this.model.startDate.day, this.model.startTime.hour, this.model.startTime.minute, this.model.startTime.second)).toUTCString();
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
                        console.log(JSON.stringify(err,null,2));
                        if (err.status == 400) //check the code from console and sends 500
                            swal({
                                type: 'error',
                                text: 'Problems during your registration.' + err.message
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

        return true;
    }

    public onSelect(event: TypeaheadMatch): void {
        this.model.client = event.item.code;
      }

      public onSelectService(event: TypeaheadMatch): void {
        this.model.service = event.item.code;
      }

    private resetFields() {
        this.newAppointment = new Appointment();
    }


}

