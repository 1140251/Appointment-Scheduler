import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { User } from '../../../models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {


  sucessMessage: any;
  constructor(private _http: Http) { }

  addUser(user: User) {
    return this._http.post('/api/users', user, this.createAuthorizationHeader());
  }
  getUsers(page) {
    const params = new URLSearchParams();
    params.set('page', page);

    return this._http.get('/api/users', this.createAuthorizationHeader().merge({ params: params }));
  }

  getUser(user: string) {
    return this._http.get('/api/users/' + user, this.createAuthorizationHeader());
  }

  deleteUser(user: string) {
    return this._http.delete('/api/users/' + user, this.createAuthorizationHeader());
  }

  updateUser(userId: string, user: User) {
    console.log('start update id ' + userId + ' ' + user);
    return this._http.put('/api/users/' + userId, user, this.createAuthorizationHeader());
  }

  private createAuthorizationHeader(): RequestOptions {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('isLoggedin'));
    return new RequestOptions({ headers: headers });
  }



}
