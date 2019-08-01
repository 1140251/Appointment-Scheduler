import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Location} from '@angular/common';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../models/Customer';
import swal from 'sweetalert2';

@Component({
    templateUrl: 'CreateCustomer.component.html',
    styleUrls: ['./CreateCustomer.component.scss']
})
export class CreateCustomerComponent {

    public newCustomer: Customer = new Customer();

    constructor(private _myHttp: CustomerService, private _location: Location) {
    }

    public submit() {

        if (this.validateFields() === true) {
            this._myHttp.createCustomer(this.newCustomer)
                .subscribe(
                    res => {
                        if (res.status == 201) {
                            swal({
                                type: 'success',
                                text: 'You are registered.',
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

        if (this.newCustomer.name != null && this.newCustomer.name.trim() != '' &&
            this.newCustomer.email != null && this.newCustomer.email.trim() != '' && this.isValidEmail() === true &&
            this.newCustomer.contact != null && this.newCustomer.contact.trim() != '' && this.isValidContact()) {
            return true;
        }
        return false
    }

    public isValidEmail() {

        let regex = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$');
        return regex.test(this.newCustomer.email);
    }

    public isValidContact(){
        let regex = new RegExp('^[0-9]{9}$');
        return regex.test(this.newCustomer.contact);
    }

    private resetFields() {
        this.newCustomer = new Customer();
    }
}

