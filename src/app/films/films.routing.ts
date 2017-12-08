import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {FilmsComponent} from './films.component';

const notificationRoutes: Routes = [
  {
    path : 'films',
    component : FilmsComponent
  }
];

export const filmsRouting: ModuleWithProviders = RouterModule.forChild(notificationRoutes);
