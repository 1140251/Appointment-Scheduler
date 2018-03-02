import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class AuthService {

  constructor(private _http: Http) {}

  login(credentials): Observable<boolean> {
    return this._http.post('/api/login', credentials)
      .map(res => {
      // login successful if there's a jwt token in the response
      const result = res.json();
      if (result.success && result.token) {
        // store username and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('isLoggedin', result.token);
        localStorage.setItem('user', JSON.stringify(result.user));
        // return true to indicate successful login
        return true;
      } else {
        // return false to indicate failed login
        return false;
      }
    });
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) { return null; }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) { token = localStorage.getItem('isLoggedin'); }
    if (!token) { return true; }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) { return false; }
    return !(date.valueOf() > new Date().valueOf());
  }

}
