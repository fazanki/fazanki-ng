import { fromJS, Map, Stack } from 'immutable';
import { VEHICLES_ACTIONS } from '../actions/star-ships.actions';
import { createReducer } from '../../../shared/redux/create-reducer';

const INITIAL_STATE: Map<any, any> =  Map({
  vehicles:  Stack.of()
});

export const vehiclesReducer = createReducer(INITIAL_STATE, {
  [VEHICLES_ACTIONS.LOAD_VEHICLES]: (state: Map<any, any>, action) => {
    return state.merge({
      vehicles: [ ...INITIAL_STATE.get('vehicles'), ...fromJS(action.payload.results) ]
    });
  }
});

