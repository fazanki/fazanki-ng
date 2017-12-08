import { fromJS, Map, Stack } from 'immutable';
import { SPECIES_ACTIONS } from '../actions/species.actions';
import { createReducer } from '../../../shared/redux/create-reducer';

const INITIAL_STATE: Map<any, any> =  Map({
  species:  Stack.of()
});

export const speciesReducer = createReducer(INITIAL_STATE, {
  [SPECIES_ACTIONS.LOAD_SPECIES]: (state: Map<any, any>, action) => {
    return state.merge({
      species: [ ...INITIAL_STATE.get('species'), ...fromJS(action.payload.results) ]
    });
  }
});

