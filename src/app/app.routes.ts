import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { LandPageComponent } from './land-page/land-page.component';

export const routes: Routes = [{path:'', component: LandPageComponent}];
