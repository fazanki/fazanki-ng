import { fromJS, Map, Stack } from 'immutable';
import { FILMS_ACTIONS } from '../actions/films.actions';
import { createReducer } from '../../../shared/redux/create-reducer';

const INITIAL_STATE: Map<any, any> =  Map({
  films:  Stack.of()
});

export const filmsReducer = createReducer(INITIAL_STATE, {
  [FILMS_ACTIONS.LOAD_FILMS]: (state: Map<any, any>, action) => {
    return state.merge({
      films: [ ...INITIAL_STATE.get('films'), ...fromJS(action.payload.results) ]
    });
  }
});

