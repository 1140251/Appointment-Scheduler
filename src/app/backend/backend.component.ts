import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-backend',
    templateUrl: './backend.component.html',
    styleUrls: ['./backend.component.scss']
})
export class BackendComponent implements OnInit {

    constructor(public router: Router) { }
    ngOnInit() {
       if (this.router.url === '/adminDEV') {
           this.router.navigate(['/adminDEV/dashboard']);
       }
    }



}
