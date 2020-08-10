import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {WifiStation} from './wifi-station';


@Injectable({
  providedIn: 'root'
})
export class WifiStationsService {
  private apiUrl = `https://run.mocky.io/v3/98833fa0-5864-426d-8564-84da2cd207a2`;
  // private apiUrl = `api/wifistations/`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient)
  { }

  getStations(): Observable<any>{
    return this.http.get<WifiStation[]>(this.apiUrl);
  }
  getStation(index: number): Observable<any>{
    this.apiUrl += `${(index)}`;
    return this.http.get<WifiStation>(this.apiUrl);
  }
  setStation(AP: WifiStation): Observable<any>{
    return this.http.post(this.apiUrl, {ssid: `${(AP.ssid)}`, password: `${(AP.password)}`});
  }
  getStatus(): Observable<any>{
    return this.http.get<WifiStation>(this.apiUrl + 'status');
  }
  connect(): void{
    this.http.get(this.apiUrl + '/connect');
  }
  forget(): void {
    this.http.delete(this.apiUrl);
  }
}
