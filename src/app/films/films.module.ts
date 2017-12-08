import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FilmsComponent} from './films.component';
import {filmsRouting} from './films.routing';
import {FilmsActions} from './shared/actions/films.actions';
import {StarWarsService} from '../shared/porviders/star-wars.service';
import {MatListModule, MatProgressSpinnerModule, MatTableModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    // Angular modules
    CommonModule,
    RouterModule,
    filmsRouting,
    MatProgressSpinnerModule,
    MatListModule,
    HttpClientModule,
    MatTableModule
  ],
  declarations: [
    FilmsComponent
  ],
  exports: [
    FilmsComponent
  ],
  providers: [
    FilmsActions,
    StarWarsService
  ]
})
export class FilmsModule {
}
