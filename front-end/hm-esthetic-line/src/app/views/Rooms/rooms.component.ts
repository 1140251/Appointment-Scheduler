
import { Component } from '@angular/core';
import swal from 'sweetalert2';
import { RoomService } from '../../services/roomService';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomResponse } from '../../models/Room';

@Component({
    templateUrl: 'rooms.component.html'
})

export class RoomsComponent {


    public roomsList: Array<RoomResponse> = new Array<RoomResponse>();

    constructor(private _http: RoomService, private router: Router, private route: ActivatedRoute) {
        this.listRooms();
    }

    public listRooms() {

        try {
            this._http.getRooms().then((roomsList: Array<RoomResponse>) => {
                this.roomsList = roomsList;
            }).then(res => {
                this.verifySizeListRooms();
            });
        } catch (error) {
            this.verifySizeListRooms();
        }

    }

    public createRoom() {
        this.router.navigate(['/Rooms/Create']);
    }

    public verifySizeListRooms() {
        if (this.roomsList.length == 0) {
            swal({
                text: 'No Rooms returned!',
                showConfirmButton: true,
                timer: 2500
            });
        }
    }
}


