import { Component } from '@angular/core';
import { KPIService } from '../../services/kpi.service';
//import { Yarn } from '../../models/Yarn';

@Component({
	templateUrl: 'chartTotalSalesPerYarnTypeSold.component.html'
})
export class ChartTotalSalesPerYarnTypeSoldComponent {
	public pieChartLabels: string[] = new Array<string>();
	public pieChartData: number[] = new Array<number>();
	public pieChartType = 'pie';
//	public yarnSoldList: Array<Yarn> = new Array<Yarn>();

	// constructor(private _myhttp: KPIService) {
	// 	this._myhttp.getKPITotalSalesPerYarn().then((response: Array<Yarn>) => {
	// 		this.yarnSoldList = response;
	// 		this.buildPieChart();
	// 	});
	// }

	// public buildPieChart() {
	// 	for (let yarn of this.yarnSoldList) {
	// 		this.pieChartLabels.push(yarn.code);
	// 		this.pieChartData.push(yarn.totalSold);
	// 	}
	// }
}
