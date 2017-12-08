import { fromJS, Map, Stack } from 'immutable';
import { PLANETS_ACTIONS } from '../actions/planets.actions';
import { createReducer } from '../../../shared/redux/create-reducer';

const INITIAL_STATE: Map<any, any> =  Map({
  planets:  Stack.of()
});

export const planetsReducer = createReducer(INITIAL_STATE, {
  [PLANETS_ACTIONS.LOAD_PLANETS]: (state: Map<any, any>, action) => {
    return state.merge({
      planets: [ ...INITIAL_STATE.get('planets'), ...fromJS(action.payload.results) ]
    });
  }
});

