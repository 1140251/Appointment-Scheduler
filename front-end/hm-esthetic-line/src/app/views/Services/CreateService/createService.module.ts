import { NgModule } from '@angular/core';

import { CreateServiceComponent } from './createService.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [ CreateServiceComponent ],
  exports: [CreateServiceComponent], 
})
export class CreateServiceModule { }
