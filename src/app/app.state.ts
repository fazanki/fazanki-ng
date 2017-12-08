import { combineReducers } from 'redux';
import { composeReducers } from '@angular-redux/form/dist/source';
import { filmsReducer } from './films/shared/reducres/films.reducer';
import { peopleReducer } from './people/shared/reducres/people.reducer';
import { shipsReducer } from './star-ships/shared/reducres/star-ship.reducer';
import { vehiclesReducer } from './vehicles/shared/reducres/star-ship.reducer';
import { speciesReducer } from './species/shared/reducres/people.reducer';
import { planetsReducer } from './planets/shared/reducres/planets.reducer';

export interface AppState {
  films: any;
  people: any;
  starships: any;
  vehicles: any;
  species: any;
  planets: any;
}

export const rootReducer = composeReducers(
  combineReducers<AppState>({
    films: filmsReducer,
    people: peopleReducer,
    starships: shipsReducer,
    vehicles: vehiclesReducer,
    species: speciesReducer,
    planets: planetsReducer
  }), (state, action) => {
    return state;
  }
);

export const enhancers = [];
