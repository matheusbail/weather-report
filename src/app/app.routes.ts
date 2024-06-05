import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { combineLatest } from 'rxjs';

import { WeekComponent } from './week/week.component';
//import{WeatherPageComponent} from './weather-page/weather-page.component';

export const routes: Routes = [{path:'', component: WeekComponent,}, /*{path:'', component: WeatherPageComponent, outlet:"outletDois"}*/];

