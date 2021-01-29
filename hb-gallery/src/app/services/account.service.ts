import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { SharedService } from './shared.service';
import { RegisterUser } from '../Models/registeruser';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  private accountsUrl = environment.apiUrl + "api/accounts";

  constructor(private http: HttpClient,
              private sharedService: SharedService) { }

  registrUser(user: RegisterUser): Observable<any> {
    let result = this.http.post<any>(this.accountsUrl+'/register', user)
     .pipe(
        tap((id:string) => console.info(`Register User: completed. ID = ${id}`)),
        catchError(this.sharedService.handleError<any>('registrUser'))
      );
    return result;
  }

}
