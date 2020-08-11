import { Component, OnInit } from '@angular/core';
import {VariablesService} from '../variables.service';

class Process {
  wateringOn: boolean;
  pumpOn: boolean;
  tasksOn: boolean;
  pumpSpeedSetpoint: number;
  pumpSpeedCurrent: number;
  timeOn_s: number;
  waterLevel_L: number;
  waterFlow_Lpermin: number;
  waterPumped_L: number;
   // bool watering_on = false;
  // bool pump_on = false;
  // bool tasks_on = true;
  // int pump_speed = 100;   //[%] pump current setpoint
  // int pump_speed_ramp = 0; //[%] pump current power
  // int pump_on_time_s = 0;
  // float water_level_L;
  // float water_flow_L_per_min;
  // float water_pumped;
  // float water_amount_when_started;

}
const onText = `Załączone`;
const offText = `Wyłączone`;



@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  constructor(private service: VariablesService) { }

  processValues: Process = new Process();
  setpoints: Process = new Process();


  wateringText: string;
  tasksText: string;

  // setpoints
  private pumpPowerSetpoint: number;
  private wateringOnSetpoint: boolean;
  private tasksOnSetpoint: boolean;
  message: string;


  ngOnInit(): void {
    this.message = `Wczytywanie danych...`;
    setInterval(() => {
      this.refreshStatus();
    }, 1000);
    this.service.getVariables();
  }

  refreshStatus(): void {
    this.service.getVariables().subscribe(value => {
      this.processValues = value.process;
      this.wateringText = (this.processValues.wateringOn) ? onText : offText;
      this.tasksText = (this.processValues.tasksOn) ? onText : offText;

    });
  }


  onWateringStart(): void {
  this.wateringOnSetpoint = !this.processValues.wateringOn;
  }

  onTaskClick(): void {
    this.tasksOnSetpoint = !this.processValues.tasksOn;
  }

  onPowerChange(valueAsNumber: number): void {
    this.setpoints.pumpSpeedSetpoint = valueAsNumber;
  }
}
