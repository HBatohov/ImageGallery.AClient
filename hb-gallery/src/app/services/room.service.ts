import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { SharedService } from './shared.service';
import { Room } from '../Models/room';

@Injectable({
  providedIn: 'root'
})

export class RoomService {

  private roomsUrl = environment.apiUrl + "api/rooms";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE' 
  })};

  constructor(private http: HttpClient,
              private sharedService: SharedService) { }

  getRooms(): Observable<Room[]>{
    let result = this.http.get<Room[]>(this.roomsUrl)
     .pipe(
        tap(()=>console.info('Fetched Rooms')),
        catchError(this.sharedService.handleError<Room[]>('getRooms',[]))
      );
    return result;
  }

}
