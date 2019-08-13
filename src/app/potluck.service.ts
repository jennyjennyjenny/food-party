import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Potluck, PartyItem } from './potluck';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class PotluckService {
  potlucksUrl: string = 'http://localhost:3000/potlucks';


  constructor(private http: HttpClient) { }

  getPotlucks(): Observable<Potluck[]> {
    return this.http.get<Potluck[]>(this.potlucksUrl)
      .pipe(
         catchError(this.handleError('getPotlucks', []))
       );
   }

  

  findParty(term: string): Observable<Potluck[]>{
    return this.http.get<Potluck[]>(`${this.potlucksUrl}?name=${term}`)
      .pipe(
        catchError(this.handleError<Potluck[]>('findParty', []))
      );
  }

  getPartyId(term: string): Observable<Potluck[]>{
    return this.http.get<Potluck[]>(`${this.potlucksUrl}?name=${term}`)
    .pipe(
      catchError(this.handleError<Potluck[]>('getPartyId', []))
    );
  }

  getParty(id: number): Observable<Potluck> {
    const url = `${this.potlucksUrl}/${id}`;
    return this.http.get<Potluck>(url)
    .pipe(
      catchError(this.handleError<Potluck>(`getParty id=${id}`))
    );
    
  }

  addParty(potluck: Potluck): Observable<Potluck> {
    return this.http.post(this.potlucksUrl, potluck, httpOptions)
    .pipe(
      catchError(this.handleError<any>('addParty'))
    );
  }

  updateParty(id:number, potluck: Potluck): Observable<any> {
    const url = `${this.potlucksUrl}/${id}`;
    return this.http.put(url, potluck, httpOptions)
      .pipe(
        catchError(this.handleError<any>(`updateParty`))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  
}
