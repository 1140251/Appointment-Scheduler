import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackendComponent } from './backend.component';

const routes: Routes = [
    {
        path: '', component: BackendComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'servicos', loadChildren: './servicos/servicos.module#ChartsModule' },
            { path: 'cosmetica', loadChildren: './cosmetica/cosmetica.module#TablesModule' },
            { path: 'suplementosAlimentares', loadChildren: './suplementosAlimentares/suplementosAlimentares.module#FormModule' },
            { path: 'aparatologia', loadChildren: './aparatologia/aparatologia.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BackendRoutingModule { }
