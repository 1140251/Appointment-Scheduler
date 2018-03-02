import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-form',
    templateUrl: './suplementosAlimentares.component.html',
    styleUrls: ['./suplementosAlimentares.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    constructor() { }
    ngOnInit() {}
}
