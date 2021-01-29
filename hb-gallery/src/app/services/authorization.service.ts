import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {

  private authUrl :string = environment.apiUrl + "connect/token";

  constructor(private http: HttpClient,
              private sharedService: SharedService) { }

  public getToken(): string|null {
    return localStorage.getItem('token');
  }

  public clearToken(){
    localStorage.removeItem('token');
  }

  login(username: string, password: string): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    body.set('grant_type', "password");

    let result = this.http.post<any>(this.authUrl, body.toString(), {headers: headers})
     .pipe(
        tap(() => console.info(`Login completed`)),
        catchError(this.sharedService.handleError<any>('login'))
      );
    return result;
  }

}
