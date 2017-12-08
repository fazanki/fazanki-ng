import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {PeopleComponent} from './people.component';

const notificationRoutes: Routes = [
  {
    path : 'people',
    component : PeopleComponent
  }
];

export const peopleRouting: ModuleWithProviders = RouterModule.forChild(notificationRoutes);
