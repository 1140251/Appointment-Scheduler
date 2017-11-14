import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-tables',
    templateUrl: './cosmetica.component.html',
    styleUrls: ['./cosmetica.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
