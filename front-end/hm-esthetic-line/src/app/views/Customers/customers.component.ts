
import { Component } from '@angular/core';
import swal from 'sweetalert2';
import { CustomerService } from '../../services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerResponse } from '../../models/Customer';

@Component({
    templateUrl: 'customers.component.html'
})

export class CustomersComponent {


    public customerList: Array<CustomerResponse> = new Array<CustomerResponse>();

    constructor(private _http: CustomerService, private router: Router, private route: ActivatedRoute) {
        this.listCustomers();
    }

    public listCustomers() {

        try {
            this._http.getCustomers().then((customerList: Array<CustomerResponse>) => {
                this.customerList = customerList;
            }).then(res => {
                this.verifySizeListCustomers();
            });
        } catch (error) {
            this.verifySizeListCustomers();
        }

    }

    public createCustomer() {
        this.router.navigate(['/Customers/Create']);
    }

    public verifySizeListCustomers() {
        if (this.customerList.length == 0) {
            swal({
                text: 'No Customers returned!',
                showConfirmButton: true,
                timer: 2500
            });
        }
    }
}


