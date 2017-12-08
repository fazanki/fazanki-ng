import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {PlanetsComponent} from './planets.component';

const notificationRoutes: Routes = [
  {
    path : 'planets',
    component : PlanetsComponent
  }
];

export const planetsRouting: ModuleWithProviders = RouterModule.forChild(notificationRoutes);
