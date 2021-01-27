import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
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

  handleError<T>(operation ="operation", result?: T){
    return (error:any): Observable<T> =>{
      console.log(error);
      return of(result as T); 
    }
  }

  constructor(private http: HttpClient) { }

  getRooms(): Observable<Room[]>{
    let result = this.http.get<Room[]>(this.roomsUrl)
     .pipe(
        tap(()=>console.info('Fetched Rooms')),
        catchError(this.handleError<Room[]>('getRooms',[]))
      );
    return result;
  }

}
