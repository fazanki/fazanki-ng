import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {speacesRouting} from './species.routing';
import {SpeciesComponent} from './species.component';
import {SpeciesActions} from './shared/actions/species.actions';
import {StarWarsService} from '../shared/porviders/star-wars.service';
import {MatListModule, MatProgressSpinnerModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    // Angular modules
    CommonModule,
    RouterModule,
    speacesRouting,
    MatProgressSpinnerModule,
    MatListModule,
    HttpClientModule
  ],
  declarations: [
    SpeciesComponent
  ],
  exports: [
    SpeciesComponent
  ],
  providers: [
    SpeciesActions,
    StarWarsService
  ]
})
export class SpeacesModule {
}
