import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable()
export class StarWarsService {

  constructor(private http: HttpClient) {}

  /**
   * Preforms an HTTP GET operation with the optionally given RequestOptionsArgs
   * @param url the URL for the HTTP GET
   * @returns {Observable<Objecte>} an Observable containing the HTTP response
   */
  get(url: string): Observable<Object> {
    return this.http.get(url, {headers: new HttpHeaders().set('accept', 'application/json')});
  }
}
