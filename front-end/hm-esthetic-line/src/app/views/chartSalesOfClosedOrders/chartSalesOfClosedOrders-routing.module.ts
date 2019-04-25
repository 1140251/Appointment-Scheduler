import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartSalesOfClosedOrdersComponent } from './chartSalesOfClosedOrders.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Sales of Closed Orders'
        },
        children: [
            {
                path: 'salesOfClosedOrders',
                component: ChartSalesOfClosedOrdersComponent,
                data: {
                    title: 'Sales of Closed Orders'
                }
            }
        ]
    }
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChartSalesOfClosedOrdersRoutingModule { }
