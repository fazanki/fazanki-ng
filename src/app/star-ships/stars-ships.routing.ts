import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {StarsShipsComponent} from './stars-ships.component';

const notificationRoutes: Routes = [

  {
    path : 'starships',
    component : StarsShipsComponent
  }
];

export const starsShipsRouting: ModuleWithProviders = RouterModule.forChild(notificationRoutes);
