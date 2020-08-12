import { Component, OnInit } from '@angular/core';
import {VariablesService} from '../variables.service';
import {Process} from '../process';

const onText = `Załączone`;
const offText = `Wyłączone`;



@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  constructor(private service: VariablesService) { }

  // processValues: Process = new Process();
  // setpoints: Process = new Process();

  processValues: Process = new Process();
  setpoints: Process = new Process();

  wateringText: string;
  tasksText: string;

  // setpoints
  private pumpPowerSetpoint: number;
  private wateringOnSetpoint: boolean;
  private tasksOnSetpoint: boolean;
  message = `Wczytywanie danych...`;


  ngOnInit(): void {
    // setInterval(() => {
    //   this.refreshStatus();
    // }, 1000);
    this.refreshStatus();
    this.service.getVariables();
  }

  refreshStatus(): void {
    this.service.getVariables().subscribe(value => {
      this.processValues = value.Process;
      // if (!this.setpoints){ this.setpoints = this.processValues; }
      console.log(this.processValues);
      if (this.processValues) {
        this.wateringText = (this.processValues && this.processValues.wateringOn) ? onText : offText;
        this.tasksText = (this.processValues && this.processValues.tasksOn) ? onText : offText;
        this.message = null;
      }

    });
  }


  onWateringStart(): void {
  this.setpoints.wateringOn = !this.processValues.wateringOn;
  console.log(this.setpoints);
  this.service.setVariable(this.setpoints).subscribe();
  }

  onTaskClick(): void {
    this.setpoints.tasksOn = !this.processValues.tasksOn;
    this.service.setVariable(this.setpoints).subscribe();
  }

  onPowerChange(valueAsNumber: number): void {
    this.setpoints.pumpSpeedSetpoint = valueAsNumber;
    this.service.setVariable(this.setpoints).subscribe();

  }
}
