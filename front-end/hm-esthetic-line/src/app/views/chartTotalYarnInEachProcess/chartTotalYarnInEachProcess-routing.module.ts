import { ChartTotalYarnInEachProcessComponent } from './chartTotalYarnInEachProcess.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Total Yarn in Each Production Process'
        },
        children: [
            {
                path: 'totalYarnInEachProcess',
                component: ChartTotalYarnInEachProcessComponent,
                data: {
                    title: 'Total Yarn in Each Production Process'
                }
            }
        ]
    }
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChartTotalYarnInEachProcessRoutingModule { }
