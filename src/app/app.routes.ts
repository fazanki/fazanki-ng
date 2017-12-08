import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

const appRoutes: Routes = [
  {
    path : '',
    redirectTo: 'films',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
