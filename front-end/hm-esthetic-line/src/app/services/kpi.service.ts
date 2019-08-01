import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
//import { Yarn } from '../models/Yarn';

@Injectable({
	providedIn: 'root'
})
export class KPIService {

	constructor(private http: HttpClient) { }

	public getKPIYarnProductionProcess(): Promise<any> {
		return this.http.get("https://localhost:5001/api/KPI/YarnProductionProcess").toPromise().then((response: any) => response);
	}

	public getKPIOrderSoldPerMonth(year: number): Promise<any> {
		return this.http.get("https://localhost:5001/api/KPI/OrdersSoldPerMonth?Year=" + year).toPromise().then((response: any) => response);
	}

//	public getKPITotalSalesPerYarn(): Promise<Array<Yarn>> {
//		return this.http.get("https://localhost:5001/api/KPI/TotalSalesPerYarn").toPromise().then((response: Array<Yarn>) => response);
//	}

}