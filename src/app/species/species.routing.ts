import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SpeciesComponent} from './species.component';

const notificationRoutes: Routes = [

  {
    path : 'species',
    component : SpeciesComponent
  }
];

export const speacesRouting: ModuleWithProviders = RouterModule.forChild(notificationRoutes);
