import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';
import { CreateServiceComponent } from './CreateService/createService.component';

const routes: Routes = [
    {
        path: '',
        component: ServicesComponent,
    },
    {
        path: 'Create',
        component: CreateServiceComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServicesRoutingModule { }