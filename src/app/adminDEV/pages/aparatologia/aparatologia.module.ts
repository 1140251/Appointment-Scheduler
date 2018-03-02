import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsElementRoutingModule } from './aparatologia-routing.module';
import { BsElementComponent } from './aparatologia.component';
import { PageHeaderModule } from './../../../shared';

@NgModule({
    imports: [
        CommonModule,
        BsElementRoutingModule,
        PageHeaderModule
    ],
    declarations: [BsElementComponent]
})
export class BsElementModule { }
