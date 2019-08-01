import { Component } from '@angular/core';
import { Location } from '@angular/common';
import swal from 'sweetalert2';
import { RoomService } from '../../../services/roomService';
import { Room } from '../../../models/Room';

@Component({
    templateUrl: 'createRoom.component.html',
    styleUrls: ['./createRoom.component.scss'],
})

export class CreateRoomComponent {

    public model = {
        name: undefined,
        description: undefined,     
    };

    public customers: String[];
    public services: String[];
    public roomsList: String[];
    public isSubmit = false;

    constructor(private _myHttp: RoomService, private _location: Location) {
    }

    public submit() {
        this.isSubmit = true;
        console.log("isSubmit " + this.isSubmit)
        if (this.validateFields() === true) {
            let newRoom = new Room();
            newRoom.name = this.model.name;
            newRoom.Description = this.model.description;
            this._myHttp.createRoom(newRoom)
                .subscribe(
                    res => {
                        if (res.status == 201) {
                            swal({
                                type: 'success',
                                text: 'Room Registed.',
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
                text: 'Invalid Room Info. Please Check the empty fields or wrong fields.'
            });
        }
    }

    public validateFields(): boolean {
        console.log(this.model.name != undefined)
        console.log(this.model.name.trim() != '')
        if (this.model.name != undefined && this.model.name.trim() != '') {
            return true;
        }
        return false
    }

    private resetFields() {
        this.model = {
            name: undefined,
            description: undefined,     
        };
    }
}

