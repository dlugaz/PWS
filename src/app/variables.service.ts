import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {
  private apiUrl = `https://run.mocky.io/v3/98833fa0-5864-426d-8564-84da2cd207a2`;
  // private apiUrl = `api/variables/`;
  constructor(private http: HttpClient) { }

  getVariables(): Observable<any>{
    return this.http.get(this.apiUrl);
  }


}
