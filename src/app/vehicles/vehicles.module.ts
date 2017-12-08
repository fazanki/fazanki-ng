import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {vehiclesRouting} from './vehicles.routing';
import {VehiclesComponent} from './vehicles.component';
import {VehiclesActions} from './shared/actions/star-ships.actions';
import {StarWarsService} from '../shared/porviders/star-wars.service';
import {MatListModule, MatProgressSpinnerModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    // Angular modules
    CommonModule,
    RouterModule,
    vehiclesRouting,
    MatProgressSpinnerModule,
    MatListModule,
    HttpClientModule
  ],
  declarations: [
    VehiclesComponent
  ],
  exports: [
    VehiclesComponent,
  ],
  providers: [
    VehiclesActions,
    StarWarsService
  ]


})
export class VehiclesModule {
}
