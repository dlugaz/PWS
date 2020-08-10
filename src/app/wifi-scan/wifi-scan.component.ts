import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import {WifiStation} from '../wifi-station';
import {WifiStationsService} from '../wifi-stations.service';

@Component({
  selector: 'app-wifi-scan',
  templateUrl: './wifi-scan.component.html',
  styleUrls: ['./wifi-scan.component.scss']
})
export class WifiScanComponent implements OnInit {


  // stationsService: WifiStationsService;
  stations: WifiStation[] = [];
  selectedStation: WifiStation;
  saved: WifiStation;
  current: WifiStation;
  message;

  constructor(private stationsService: WifiStationsService) { }

  ngOnInit(): void {
    this.onScan();
    // this.refreshStatus();
  }

  refreshStatus(): void{
    this.stationsService.getStatus().subscribe(data => {
      this.current = data.current;
    });
  }

  onStationClick(selected: WifiStation): void {
    this.selectedStation = selected;
  }

  onSave(password: string): void{
    console.log(password);
    this.selectedStation.password = password;
    this.stationsService.setStation(this.selectedStation);
  }


  onScan(): void {
    console.log('Scan');
    this.message = 'Wyszukiwanie sieci...';
    this.stations = [];
    this.stationsService.getStations().subscribe(data => {
      this.stations = data.networks;
      this.saved = data.saved;
      this.current = data.current;
      console.log(this.stations);
      this.message = null;
    }, error => this.message = 'Nie znaleziono sieci');
  }

  onConnect(): void {
    console.log('Save');
    this.stationsService.connect();

  }

  onForget(): void {
    console.log('Forget');
    this.stationsService.forget();
  }
}
