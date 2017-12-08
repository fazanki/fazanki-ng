import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {starsShipsRouting} from './stars-ships.routing';
import {StarsShipsComponent} from './stars-ships.component';
import {StarShipsActions} from './shared/actions/star-ships.actions';
import {StarWarsService} from '../shared/porviders/star-wars.service';
import {MatListModule, MatProgressSpinnerModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    // Angular modules
    CommonModule,
    RouterModule,
    starsShipsRouting,
    MatProgressSpinnerModule,
    MatListModule,
    HttpClientModule
  ],
  declarations: [
    StarsShipsComponent
  ],
  exports: [
    StarsShipsComponent
  ],
  providers: [
    StarShipsActions,
    StarWarsService
  ]
})
export class StarsShipsModule {
}
