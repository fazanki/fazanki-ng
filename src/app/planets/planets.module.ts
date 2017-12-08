import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {planetsRouting} from './plantes.routing';
import {PlanetsComponent} from './planets.component';
import {PlanetsActions} from './shared/actions/planets.actions';
import {StarWarsService} from '../shared/porviders/star-wars.service';
import {MatListModule, MatProgressSpinnerModule, MatTableModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    // Angular modules
    CommonModule,
    RouterModule,
    planetsRouting,
    MatListModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatTableModule
  ],
  declarations: [
    PlanetsComponent
  ],
  exports: [
    PlanetsComponent
  ],
  providers: [
    PlanetsActions,
    StarWarsService,
  ]
})
export class PlanetsModule {
}
