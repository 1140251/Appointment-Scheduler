import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-admin-dev',
    templateUrl: './adminDEV.component.html',
    styleUrls: ['./adminDEV.component.scss']
})
export class AdminDEVComponent implements OnInit {

    constructor(public router: Router) { }
    ngOnInit() {
       if (this.router.url === '/adminDEV') {
           this.router.navigate(['/adminDEV/dashboard']);
       }
    }



}
