import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgModule } from '@angular/core';
import { ChartTotalSalesPerYarnTypeSoldRoutingModule } from './chartTotalSalesPerYarnTypeSold-routing.module';
import { ChartTotalSalesPerYarnTypeSoldComponent } from './chartTotalSalesPerYarnTypeSold.component';

@NgModule({
  imports: [
    ChartTotalSalesPerYarnTypeSoldRoutingModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [ ChartTotalSalesPerYarnTypeSoldComponent ]
})
export class ChartTotalSalesPerYarnTypeSoldModule { }
