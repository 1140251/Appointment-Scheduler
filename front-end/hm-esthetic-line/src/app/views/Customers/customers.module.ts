import { NgModule } from '@angular/core';
import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DemoModalServiceNestedComponent } from './modal.component'
import { CreateCustomerModule } from './CreateCustomer/CreateCustomer.module';

@NgModule({
  imports: [
    CustomersRoutingModule,
    FormsModule,
    CommonModule,
    CreateCustomerModule
  ],
  declarations: [ CustomersComponent, DemoModalServiceNestedComponent ],
  exports: [CustomersComponent], 
})
export class CustomersModule { }
