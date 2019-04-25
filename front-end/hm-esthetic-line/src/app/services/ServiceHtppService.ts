import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Service } from '../models/Service';


@Injectable({
    providedIn: 'root'
})
export class ServiceHtppService {

    constructor(private http: HttpClient) { }

    public createService(customerInfo: Service) {
        return this.http.post('https://localhost:5001/api/Service/', customerInfo, { observe: 'response' });
    }

	public getServices(): Promise<Array<Service>> {
		return this.http.get(`https://localhost:5001/api/Service`).toPromise().then((response: Array<Service>) => response).catch(response => new Array<Service>());
    }
    
    public updateService(customerInfo: Service): Promise<Service>{
        return this.http.put(`https://localhost:5001/api/Service/${customerInfo.code}`, customerInfo).toPromise().then((response: Service) => response);
    }

    public disableService(serviceCode : string): Promise<Service>{
        return this.http.put(`https://localhost:5001/api/Service/${serviceCode}/disable`, null).toPromise().then((response: Service) => response);
    }
}


