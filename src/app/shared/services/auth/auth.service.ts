import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {

  constructor(private _http: Http) {}

  login(credentials) : Observable<boolean>{
    return this._http.post("/api/login", credentials)
      .map(res => {
      // login successful if there's a jwt token in the response
      let result = res.json();
      if (result.success && result.token) {
        // store username and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('isLoggedin', result.token);
        // return true to indicate successful login
        return true;
      } else {
        // return false to indicate failed login
        return false;
      }
    });
  }
}
