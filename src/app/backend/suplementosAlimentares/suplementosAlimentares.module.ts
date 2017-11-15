import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './suplementosAlimentares-routing.module';
import { FormComponent } from './suplementosAlimentares.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        FormRoutingModule,
        PageHeaderModule
    ],
    declarations: [FormComponent]
})
export class FormModule { }
