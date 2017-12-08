import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PeopleComponent} from './people.component';
import {peopleRouting} from './people.routing';
import {PeopleActions} from './shared/actions/people.actions';
import {StarWarsService} from '../shared/porviders/star-wars.service';
import {MatListModule, MatProgressSpinnerModule, MatTableModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    // Angular modules
    CommonModule,
    RouterModule,
    peopleRouting,
    MatListModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatTableModule
  ],
  declarations: [
    PeopleComponent
  ],
  exports: [
    PeopleComponent
  ],
  providers: [
    PeopleActions,
    StarWarsService
  ]
})
export class PeopleModule {
}
