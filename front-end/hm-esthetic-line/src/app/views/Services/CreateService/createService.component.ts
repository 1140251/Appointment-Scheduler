import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ServiceHtppService } from '../../../services/ServiceHtppService';
import { Service } from '../../../models/Service';
import swal from 'sweetalert2';

@Component({
    templateUrl: 'createService.component.html',
    styleUrls: ['./createService.component.scss']
})
export class CreateServiceComponent {

    public isSubmit = false;
    public model = {
        name: undefined,
        description: undefined,
        price: undefined
    };
    constructor(private _myHttp: ServiceHtppService, private _location: Location) {
    }

    private validPrice(val: any): boolean {
        console.log(val)
        if (val) {
            // Strip any whitespaces from anywhere
            val = val.replace(/\s/g, '').replace(/€/g, '');
            console.log(val)
            // Check different types of input
            if (/^[0-9]+$/.test(val) || /^[0-9]+.[0-9]+$/.test(val)) {
                return true;
            } else {
                return false;
            }

        }
        return false;
    }

    private parsePrice(val: string): Number {
        return Number(val.replace(/[^0-9\.-]+/g, ""));
    }


    public submit() {
        this.isSubmit = true;
        if (this.validateFields()) {
            console.log(JSON.stringify(this.model))
            let newService = new Service();
            newService.name = this.model.name;
            newService.description = this.model.description;
            newService.price = this.parsePrice(this.model.price);
            this._myHttp.createService(newService)
                .subscribe(
                    res => {
                        if (res.status == 201) {
                            swal({
                                type: 'success',
                                text: 'Service registed.',
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
                text: 'Invalid Service Info. Please Check the empty fields or wrong fields.'
            });
        }
    }

    public validateFields(): boolean {
        console.log(this.validPrice(this.model.price));
        if (this.model.name != null && this.model.name.trim() != '' &&
            this.model.price != null && this.validPrice(this.model.price)) {
            return true;
        }
        return false
    }


    private resetFields() {
        this.model = new Service();
    }
}

