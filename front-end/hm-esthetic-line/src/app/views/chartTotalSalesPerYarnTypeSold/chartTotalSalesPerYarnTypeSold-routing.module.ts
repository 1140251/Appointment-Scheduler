import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartTotalSalesPerYarnTypeSoldComponent } from './chartTotalSalesPerYarnTypeSold.component';


const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Total Sales per Yarn Type Sold'
        },
        children: [
            {
                path: 'totalSalesPerYarnTypeSold',
                component: ChartTotalSalesPerYarnTypeSoldComponent,
                data: {
                    title: 'Total Sales per Yarn Type Sold'
                }
            }
        ]
    }
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChartTotalSalesPerYarnTypeSoldRoutingModule { }
