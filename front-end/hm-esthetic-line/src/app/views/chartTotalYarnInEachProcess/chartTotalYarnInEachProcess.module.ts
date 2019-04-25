import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgModule } from '@angular/core';
import { ChartTotalYarnInEachProcessComponent } from './chartTotalYarnInEachProcess.component';
import { ChartTotalYarnInEachProcessRoutingModule } from './chartTotalYarnInEachProcess-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    ChartTotalYarnInEachProcessRoutingModule,
    ChartsModule,
    CommonModule
  ],
  declarations: [ ChartTotalYarnInEachProcessComponent ]
})
export class ChartTotalYarnInEachProcessModule { }
