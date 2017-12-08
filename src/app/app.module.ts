import { BrowserModule } from '@angular/platform-browser';
import { isDevMode, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { RouterModule } from '@angular/router';
import { NavigationModule } from './shared/components/navigation/navigation.module';
import { FilmsModule } from './films/films.module';
import { PeopleModule } from './people/people.module';
import { StarsShipsModule } from './star-ships/star-ships.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { SpeacesModule } from './species/species.module';
import { PlanetsModule } from './planets/planets.module';
import { AppState, enhancers, rootReducer } from './app.state';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NavigationModule,
    routing,
    FilmsModule,
    PeopleModule,
    StarsShipsModule,
    VehiclesModule,
    SpeacesModule,
    PlanetsModule,
    NgReduxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<AppState>,
              private devTools: DevToolsExtension) {
    ngRedux.configureStore(
      rootReducer,
      Object.assign({}),
      [],
      [ ...enhancers, isDevMode() && devTools.isEnabled() ? devTools.enhancer() : f => f ]
    );
  }
}
