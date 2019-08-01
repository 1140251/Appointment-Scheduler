import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../services/customer.service';
import { Observable, Observer } from 'rxjs';


@Component({
    selector: 'demo-modal-service-nested',
    inputs: [
        "customer"
    ],
    templateUrl: './modal.component.html'
})
export class DemoModalServiceNestedComponent {
    modalRef: BsModalRef | null;


    public obsCustomer: Observable<Customer>;
    public customer: Customer;

    public invoice: any;

    constructor(private modalService: BsModalService, private _myHttp: CustomerService) { }

    openModal(template: TemplateRef<any>, event: any) {
        event.stopPropagation();
        this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
        //this.modalRef.content.customer = this.customer;
    }

    public saveInfo() {
        this._myHttp.updateCustomer(this.customer)
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