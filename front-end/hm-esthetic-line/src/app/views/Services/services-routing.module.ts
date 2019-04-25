import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';
//import { CreateCustomerComponent } from './CreateService/CreateService.component';

const routes: Routes = [
    {
        path: '',
        component: ServicesComponent,
    },
/*    {
        path: 'Create',
        component: CreateCustomerComponent
    }*/
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServicesRoutingModule { }