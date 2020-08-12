import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Process} from './process';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {
  private apiUrl = `https://run.mocky.io/v3/3d323b58-8bc2-4424-a1b2-32cd3d6a79f3`;
  // private apiUrl = `api/variables/`;
  constructor(private http: HttpClient) { }

  getVariables(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

  setVariable <T>(value: T): Observable<any>{
    return this.http.post<T>(this.apiUrl, value);
  }
  setVariables(value: Process): Observable<any>{
    return this.http.post<Process>(this.apiUrl, value);
  }



}
