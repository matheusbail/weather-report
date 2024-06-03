import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { LandPageComponent } from './land-page/land-page.component';
//import{WeatherPageComponent} from './weather-page/weather-page.component';

export const routes: Routes = [{path:'', component: LandPageComponent,}, /*{path:'', component: WeatherPageComponent, outlet:"outletDois"}*/];

