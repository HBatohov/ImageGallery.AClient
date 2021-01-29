import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
 
  public isLogged = true;

  public handleError<T>(operation ="operation", result?: T){
    return (error:any): Observable<T> =>{
      console.log(error);
      return of(result as T); 
    }
  }
}
