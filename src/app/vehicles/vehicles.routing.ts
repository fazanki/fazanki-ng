import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {VehiclesComponent} from './vehicles.component';

const notificationRoutes: Routes = [

  {
    path : 'vehicles',
    component : VehiclesComponent
  }
];

export const vehiclesRouting: ModuleWithProviders = RouterModule.forChild(notificationRoutes);
