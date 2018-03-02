import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDEVComponent } from './adminDEV.component';

const routes: Routes = [
    {
        path: '', component: AdminDEVComponent,
        children: [
            { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule' },
            { path: 'servicos', loadChildren: './pages/servicos/servicos.module#ChartsModule' },
            { path: 'cosmetica', loadChildren: './pages/cosmetica/cosmetica.module#TablesModule' },
            { path: 'suplementosAlimentares', loadChildren: './pages/suplementosAlimentares/suplementosAlimentares.module#FormModule' },
            { path: 'aparatologia', loadChildren: './pages/aparatologia/aparatologia.module#BsElementModule' },
            { path: 'grid', loadChildren: './pages/grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './pages/bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './pages/blank-page/blank-page.module#BlankPageModule' },
            { path: 'users', loadChildren: './pages/user/user.module#UserModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminDEVRoutingModule { }
