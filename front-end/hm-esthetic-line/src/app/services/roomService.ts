import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Room, RoomResponse } from '../models/Room';


@Injectable({
    providedIn: 'root'
})
export class RoomService {

    constructor(private http: HttpClient) { }

    public createRoom(roomInfo: Room) {
        return this.http.post('https://localhost:5001/api/Room/', roomInfo, { observe: 'response' });
    }

	public getRooms(): Promise<Array<RoomResponse>> {
		return this.http.get(`https://localhost:5001/api/Room`).toPromise().then((response: Array<RoomResponse>) => response).catch(response => new Array<RoomResponse>());
    }
    
    public updateRoom(roomInfo: Room): Promise<Room>{
        return this.http.put(`https://localhost:5001/api/Room/${roomInfo.code}`, roomInfo).toPromise().then((response: Room) => response);
    }
}


