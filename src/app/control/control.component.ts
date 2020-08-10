import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  constructor(private service: WeatherService) { }

  ngOnInit(): void {
    this.service.getPrecipitation().subscribe(value => console.log(value
    ));
  }

}
