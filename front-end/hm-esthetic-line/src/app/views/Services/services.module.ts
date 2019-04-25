import { NgModule } from '@angular/core';
import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//import { CreateCustomerComponent } from './CreateCustomer/CreateCustomer.component';

@NgModule({
  imports: [
    ServicesRoutingModule,
    FormsModule,
    CommonModule,
  ],
  declarations: [ ServicesComponent, /*CreateCustomerComponent*/ ],
exports: [ServicesComponent, /*CreateCustomerComponent*/], 
})
export class ServicesModule { }
