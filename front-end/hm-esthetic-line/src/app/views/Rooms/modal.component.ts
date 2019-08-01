import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Observable, Observer } from 'rxjs';
import { RoomService } from '../../services/roomService';
import { Room } from '../../models/Room';


@Component({
    selector: 'demo-modal-service-nested',
    inputs: [
        "room"
    ],
    templateUrl: './modal.component.html'
})
export class RoomModalServiceNestedComponent {
    modalRef: BsModalRef | null;


    public obsRoom: Observable<Room>;
    public room: Room;

    public invoice: any;

    constructor(private modalService: BsModalService, private _myHttp: RoomService) { }

    openModal(template: TemplateRef<any>, event: any) {
        event.stopPropagation();
        this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
        //this.modalRef.content.customer = this.customer;
    }

    public saveInfo() {
        this._myHttp.updateRoom(this.room)
            .then(res => {
                this.closeFirstModal();
            })
    }

    closeFirstModal() {
        if (!this.modalRef) {
            return;
        }
        this.modalRef.hide();
        this.modalRef = null;
    }
}