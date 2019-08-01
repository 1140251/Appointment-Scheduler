import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer, CustomerResponse } from '../models/Customer';


@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    constructor(private http: HttpClient) { }

    public createCustomer(customerInfo: Customer) {
        return this.http.post('https://localhost:5001/api/Customer/', customerInfo, { observe: 'response' });
    }

	public getCustomers(): Promise<Array<CustomerResponse>> {
		return this.http.get(`https://localhost:5001/api/Customer`).toPromise().then((response: Array<CustomerResponse>) => response).catch(response => new Array<CustomerResponse>());
    }
    
    public updateCustomer(customerInfo: Customer): Promise<CustomerResponse>{
        return this.http.put(`https://localhost:5001/api/Customer/${customerInfo.code}`, customerInfo).toPromise().then((response: CustomerResponse) => response);
    }
}


