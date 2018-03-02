import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesComponent } from './cosmetica.component';
import { TablesRoutingModule } from './cosmetica-routing.module';
import { PageHeaderModule } from './../../../shared';

@NgModule({
    imports: [
        CommonModule,
        TablesRoutingModule,
        PageHeaderModule
    ],
    declarations: [TablesComponent]
})
export class TablesModule { }
