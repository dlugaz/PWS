import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private lat: number = 52.3341;
  private lon: number = 20.8860;
  private apiKey = 'f4f3b51e94377746d7caf4f39a2a880a';
  private apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${(this.lat)}&lon=${(this.lon)}&appid=${(this.apiKey)}`;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  // private http: HttpClient;

  constructor(private http: HttpClient)
  { }

  getPrecipitation(): Observable<any>{
  return this.http.get(this.apiUrl);
  }


}
