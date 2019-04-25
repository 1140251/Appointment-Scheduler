import { Component, OnInit } from '@angular/core';
import { KPIService } from '../../services/kpi.service';

export interface BarChart {
    data: number[],
    label: string
}

@Component({
    templateUrl: 'chartTotalYarnInEachProcess.component.html'
})
export class ChartTotalYarnInEachProcessComponent {
    
    public barChartLabels: string[] = [];

    public barchart: Array<BarChart> = new Array<BarChart>();

    public barChartData: Array<BarChart> = Array<BarChart>();


    constructor(private _myhttp: KPIService) {
        this._myhttp.getKPIYarnProductionProcess().then(res => {

            const listOfYarns: Array<string> = new Array<string>();
            const yarnData: Map<string, number[]> = new Map<string, number[]>();

            for (const process in res) {
                this.barChartLabels.push(process);
                for (const yarn in res[process]) {
                    // Se a lista ainda nao tiver o yarn
                    if (!listOfYarns.includes(yarn)) {
                        listOfYarns.push(yarn);
                        yarnData.set(yarn, []);
                    }
                }
            }

            yarnData.forEach((object, key) => {
                console.log(object)
                // iterar todos os processes e ir busvcar o value do PES
                for (const process in res) {
                    for (const yarn in res[process]) {
                        if (yarn === key) {
                            object.push(res[process][yarn]);
                        }
                    }
                }
            })

            for (const yarn of listOfYarns) {
                const barChart: BarChart = {
                    data: yarnData.get(yarn),
                    label: yarn
                }
                this.barChartData.push(barChart);
            }
        });
    }

    // barChart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartType = 'bar';
    public barChartLegend = true;
}
