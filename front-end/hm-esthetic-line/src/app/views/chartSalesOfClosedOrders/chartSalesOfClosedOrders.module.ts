import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgModule } from '@angular/core';
import { ChartSalesOfClosedOrdersRoutingModule } from './chartSalesOfClosedOrders-routing.module';
import { ChartSalesOfClosedOrdersComponent } from './chartSalesOfClosedOrders.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    ChartSalesOfClosedOrdersRoutingModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [ ChartSalesOfClosedOrdersComponent ]
})
export class ChartSalesOfClosedOrdersModule { }
