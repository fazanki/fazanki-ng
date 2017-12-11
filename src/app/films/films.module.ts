import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FilmsComponent} from './films.component';
import {filmsRouting} from './films.routing';
import {FilmsActions} from './shared/actions/films.actions';
import {StarWarsService} from '../shared/porviders/star-wars.service';
import {MatListModule, MatProgressSpinnerModule, MatTableModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../../environments/environment';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';


@NgModule({
  imports: [
    // Angular modules
    CommonModule,
    RouterModule,
    filmsRouting,
    MatProgressSpinnerModule,
    MatListModule,
    HttpClientModule,
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebase),  // TODO move
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  declarations: [
    FilmsComponent
  ],
  exports: [
    FilmsComponent
  ],
  providers: [
    FilmsActions,
    StarWarsService,
  ]
})
export class FilmsModule {
}
