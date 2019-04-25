import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CreateCustomerComponent } from './CreateCustomer/CreateCustomer.component';

const routes: Routes = [
    {
        path: '',
        component: CustomersComponent,
    },  
    {
        path: 'Create',
        component: CreateCustomerComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomersRoutingModule { }