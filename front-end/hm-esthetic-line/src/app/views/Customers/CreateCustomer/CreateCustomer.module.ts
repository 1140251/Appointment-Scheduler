import { NgModule } from '@angular/core';

import { CreateCustomerComponent } from './CreateCustomer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [ CreateCustomerComponent ],
  exports: [CreateCustomerComponent], 
})
export class CreateCustomerModule { }
