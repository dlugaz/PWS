import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {root} from 'rxjs/internal-compatibility';
import {ControlComponent} from './control/control.component';
import {WifiScanComponent} from './wifi-scan/wifi-scan.component';
import {ConfigurationComponent} from './configuration/configuration.component';
import {UpdateComponent} from './update/update.component';
import {TasksComponent} from './tasks/tasks.component';

const routes: Routes = [
  { path : 'control', component : ControlComponent},
  { path : 'networks', component : WifiScanComponent},
  { path : 'configuration', component : ConfigurationComponent},
  { path : 'update', component : UpdateComponent},
  { path : 'tasks', component : TasksComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
