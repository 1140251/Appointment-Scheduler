
import { Component } from '@angular/core';
import swal from 'sweetalert2';
import { ServiceHtppService } from '../../services/ServiceHtppService';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceResponse } from '../../models/Service';

@Component({
    templateUrl: 'services.component.html'
})

export class ServicesComponent {


    public servicesList: Array<ServiceResponse> = new Array<ServiceResponse>();

    constructor(private _http: ServiceHtppService, private router: Router, private route: ActivatedRoute) {
        this.listServices();
    }

    public listServices() {

        try {
            this._http.getServices().then((servicesList: Array<ServiceResponse>) => {
                console.log(servicesList[0])
                this.servicesList = servicesList;
            }).then(res => {
                this.verifySizeListServices();
            });
        } catch (error) {
            this.verifySizeListServices();
        }

    }

    public createService() {
        this.router.navigate(['/Services/Create']);
    }

    public verifySizeListServices() {
        if (this.servicesList.length == 0) {
            swal({
                text: 'No Services returned!',
                showConfirmButton: true,
                timer: 2500
            });
        }
    }

    public changeState(code: string) {
        this._http.disableService(code).then(res => {
            location.reload();
        })
    }

}


