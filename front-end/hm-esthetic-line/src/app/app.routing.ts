import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: DefaultLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [

            {
                path: 'Customers',
                loadChildren: './views/Customers/customers.module#CustomersModule',
            },
            {
                path: 'Services',
                loadChildren: './views/Services/services.module#ServicesModule',
            },
            {
                path: 'Rooms',
                loadChildren: './views/Rooms/rooms.module#RoomsModule',
            },
            {
                path: 'Appointments',
                loadChildren: './views/Appointments/appointments.module#AppointmentsModule',
            },
            {
                path: 'kpis',
                loadChildren: './views/chartTotalYarnInEachProcess/chartTotalYarnInEachProcess.module#ChartTotalYarnInEachProcessModule'
            },
            {
                path: 'kpis',
                loadChildren: './views/chartTotalSalesPerYarnTypeSold/chartTotalSalesPerYarnTypeSold.module#ChartTotalSalesPerYarnTypeSoldModule'
            },
            {
                path: 'kpis',
                loadChildren: './views/chartSalesOfClosedOrders/chartSalesOfClosedOrders.module#ChartSalesOfClosedOrdersModule'
            },
            {
                path: 'dashboard',
                loadChildren: './views/dashboard/dashboard.module#DashboardModule'
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
