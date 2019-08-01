import { Component } from '@angular/core';
import { KPIService } from '../../services/kpi.service';
import { BarChart } from '../chartTotalYarnInEachProcess/chartTotalYarnInEachProcess.component';

@Component({
    templateUrl: 'chartSalesOfClosedOrders.component.html'
})
export class ChartSalesOfClosedOrdersComponent {
    public barChartLabels: Array<string> = Array<string>();
    public chartValues: Array<number> = Array<number>();

    public barChartData: Array<BarChart> = new Array<BarChart>();

    constructor(private _myhttp: KPIService) {
        this._myhttp.getKPIOrderSoldPerMonth((new Date()).getFullYear()).then(res => {
            console.log(Object.keys(res));
            
            
            for (const key in res) {
                this.barChartLabels.push(key);
                this.chartValues.push(res[key]);
            };

            const barChart: BarChart = {
                data:  this.chartValues,
                label: "Sales"
            }

            this.barChartData.push(barChart);
            console.log(Object.values(res));
            
        });
    }


    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartType = 'bar';
    public barChartLegend = true;


}
