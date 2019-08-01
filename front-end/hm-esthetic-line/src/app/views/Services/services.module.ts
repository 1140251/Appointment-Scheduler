import { NgModule } from '@angular/core';
import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateServiceModule } from './CreateService/createService.module';

@NgModule({
  imports: [
    ServicesRoutingModule,
    FormsModule,
    CommonModule,
    CreateServiceModule
  ],
  declarations: [ ServicesComponent ],
exports: [ServicesComponent], 
})
export class ServicesModule { }
