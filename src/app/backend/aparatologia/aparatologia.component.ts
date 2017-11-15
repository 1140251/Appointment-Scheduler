import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-bs-element',
    templateUrl: './aparatologia.component.html',
    styleUrls: ['./aparatologia.component.scss'],
    animations: [routerTransition()]
})
export class BsElementComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
